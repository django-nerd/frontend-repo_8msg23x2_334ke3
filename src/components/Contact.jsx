import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold text-white">Let’s build something great</h2>
          <p className="mt-2 text-white/70">Tell us about your project, timeline, and goals. We’ll get back within 24 hours.</p>

          <form className="mt-8 grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b86cf9]" placeholder="Name" />
              <input className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b86cf9]" placeholder="Email" />
            </div>
            <input className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b86cf9]" placeholder="Company" />
            <textarea rows="5" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b86cf9]" placeholder="Tell us about your project..." />

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 text-white/60 text-sm">
                <input type="checkbox" className="rounded border-white/20 bg-black/40" />
                Subscribe to updates
              </label>
              <button type="button" className="px-6 py-3 rounded-xl bg-[#b86cf9] text-black font-semibold shadow-[0_0_30px_#b86cf980] hover:shadow-[0_0_45px_#b86cf9aa] transition-shadow">Send message</button>
            </div>
          </form>
        </motion.div>

        <p className="mt-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} Foxmen Studio. All rights reserved.</p>
      </div>
    </section>
  )
}
