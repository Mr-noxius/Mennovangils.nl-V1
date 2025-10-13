export default function Contact() {
  return (
    <main className="pt-24 min-h-screen px-6 pb-24">
      <section className="max-w-4xl mx-auto py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white/90 dark:bg-black/60 p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <form className="flex flex-col gap-3">
            <input className="border p-3 rounded" placeholder="Your name" />
            <input type="email" className="border p-3 rounded" placeholder="Your email" />
            <textarea className="border p-3 rounded" rows={4} placeholder="Your question"></textarea>
            <button className="btn-brand mt-2">Send message</button>
          </form>
        </div>

        <div className="bg-white/90 dark:bg-black/60 p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Booking</h2>
          <form className="flex flex-col gap-3">
            <input type="date" className="border p-3 rounded" />
            <input className="border p-3 rounded" placeholder="Type of project (DJ set, interview...)" />
            <textarea className="border p-3 rounded" rows={4} placeholder="What needs to be done (filming, editing, brainstorming...)" />
            <button className="btn-brand mt-2">Request booking</button>
          </form>
        </div>
      </section>
    </main>
  )
}
