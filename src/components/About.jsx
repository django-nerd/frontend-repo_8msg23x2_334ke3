import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#b86cf9]/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          A small, senior team obsessed with quality
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-white/70"
        >
          We partner closely with clients to design and build products that feel exceptional. Fewer meetings, tighter feedback loops, and relentless attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            ['20+', 'Products shipped'],
            ['5x', 'Faster iterations'],
            ['100%', 'Remote'],
            ['24/7', 'Support'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl font-semibold text-white">{k}</div>
              <div className="text-white/60 text-sm">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
