import { Buffer } from 'buffer'

const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  MAILGUN_FROM,
  EMAIL_TO,
  MAILGUN_API_BASE, // optional: e.g. https://api.eu.mailgun.net
} = process.env

function validEmail(e) {
  return typeof e === 'string' && /\S+@\S+\.\S+/.test(e)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const data = req.body || {}
  const { name, email, message, type = 'contact', date, projectType } = data

  if (!name || !message || !validEmail(email)) {
    return res.status(400).json({ error: 'Missing or invalid fields' })
  }

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !EMAIL_TO || !MAILGUN_FROM) {
    console.error('Missing Mailgun env vars', { MAILGUN_API_KEY: !!MAILGUN_API_KEY, MAILGUN_DOMAIN, EMAIL_TO, MAILGUN_FROM })
    return res.status(500).json({ error: 'Mailgun not configured on server' })
  }

  // Basic troubleshooting hints in server log
  if (!MAILGUN_API_KEY.startsWith('key-')) {
    console.warn('MAILGUN_API_KEY does not start with "key-":', MAILGUN_API_KEY && MAILGUN_API_KEY.substring(0, 10) + '...')
  }

  const siteRecipient = EMAIL_TO
  const fromAddress = MAILGUN_FROM
  const subjectOwner = `[Website] New ${type === 'booking' ? 'booking request' : 'message'} from ${name}`
  const htmlOwner = `
    <h2>New ${type === 'booking' ? 'booking request' : 'message'}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${date ? `<p><strong>Date:</strong> ${date}</p>` : ''}
    ${projectType ? `<p><strong>Project:</strong> ${projectType}</p>` : ''}
    <hr />
    <p>${(message||'').replace(/\n/g, '<br/>')}</p>
    <hr />
    <p>Sent from: ${req.headers.origin || req.headers.host}</p>
  `
  const subjectUser = `Thanks — your ${type === 'booking' ? 'booking request' : 'message'} was received`
  const htmlUser = `
    <p>Hi ${name},</p>
    <p>Thanks — your ${type === 'booking' ? 'booking request' : 'message'} has been received. I'll get back to you soon.</p>
    <p><strong>Your message:</strong></p>
    <p>${(message||'').replace(/\n/g, '<br/>')}</p>
    <hr />
    <p>If you need to change anything, reply to this email.</p>
  `

  const apiBase = MAILGUN_API_BASE ? MAILGUN_API_BASE.replace(/\/$/, '') : 'https://api.eu.mailgun.net'
  const mailgunUrl = `${apiBase}/v3/${MAILGUN_DOMAIN}/messages`
  const auth = 'Basic ' + Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')

  try {
    const ownerParams = new URLSearchParams()
    ownerParams.append('from', fromAddress)
    ownerParams.append('to', siteRecipient)
    ownerParams.append('subject', subjectOwner)
    ownerParams.append('html', htmlOwner)

    const sendOwner = await fetch(mailgunUrl, {
      method: 'POST',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: ownerParams.toString(),
    })

    if (!sendOwner.ok) {
      const text = await sendOwner.text()
      console.error('Mailgun owner send error', sendOwner.status, text)
      return res.status(502).json({ error: 'Failed to send owner email', details: text })
    }

    const userParams = new URLSearchParams()
    userParams.append('from', fromAddress)
    userParams.append('to', email)
    userParams.append('subject', subjectUser)
    userParams.append('html', htmlUser)

    const sendUser = await fetch(mailgunUrl, {
      method: 'POST',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: userParams.toString(),
    })

    if (!sendUser.ok) {
      const text = await sendUser.text()
      console.error('Mailgun user send error', sendUser.status, text)
      return res.status(200).json({ ok: true, warning: 'Owner notified, failed to send confirmation to user', details: text })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Mailgun error', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}