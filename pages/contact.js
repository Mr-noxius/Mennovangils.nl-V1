import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '', date: '', projectType: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const submitForm = async (e, type = 'contact') => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const payload = { ...state, type }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (res.ok) {
        setStatus({ ok: true, msg: 'Message sent — check your email for confirmation.' })
        setState({ name: '', email: '', message: '', date: '', projectType: '' })
      } else {
        setStatus({ ok: false, msg: json.error || 'Failed to send' })
      }
    } catch (err) {
      setStatus({ ok: false, msg: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-24 min-h-screen px-6 pb-24">
      <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-8">
        <form className="service-card p-6" onSubmit={(e)=>submitForm(e, 'contact')}>
          <h2 className="display-font text-2xl mb-4">Contact</h2>

          <input className="form-input" placeholder="Your name" value={state.name} onChange={e=>setState(s=>({...s,name:e.target.value}))} required />
          <input type="email" className="form-input" placeholder="Your email" value={state.email} onChange={e=>setState(s=>({...s,email:e.target.value}))} required />
          <textarea className="form-input h-32" placeholder="Your question" value={state.message} onChange={e=>setState(s=>({...s,message:e.target.value}))} required />

          <div className="flex items-center gap-3 mt-2">
            <button type="submit" className="btn-brand" disabled={loading}>{loading ? 'Sending…' : 'Send message'}</button>
            {status && <span className={`text-sm ${status.ok ? 'text-green-400' : 'text-rose-400'}`}>{status.msg}</span>}
          </div>
        </form>

        <form className="service-card p-6" onSubmit={(e)=>submitForm(e, 'booking')}>
          <h2 className="display-font text-2xl mb-4">Booking</h2>

          <input type="date" className="form-input" value={state.date} onChange={e=>setState(s=>({...s,date:e.target.value}))} />
          <input className="form-input" placeholder="Type of project" value={state.projectType} onChange={e=>setState(s=>({...s,projectType:e.target.value}))} />
          <textarea className="form-input h-32" placeholder="Details" value={state.message} onChange={e=>setState(s=>({...s,message:e.target.value}))} />

          <div className="flex items-center gap-3 mt-2">
            <button type="submit" className="btn-brand" disabled={loading}>{loading ? 'Sending…' : 'Request booking'}</button>
            {status && <span className={`text-sm ${status.ok ? 'text-green-400' : 'text-rose-400'}`}>{status.msg}</span>}
          </div>
        </form>
      </section>
    </main>
  )
}
