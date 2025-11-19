import { motion } from 'framer-motion'
import { Code2, PenTool, Smartphone, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'High-performance web apps tailored to your business goals.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Experiences',
    desc: 'iOS and Android apps with native feel and modern UX.'
  },
  {
    icon: PenTool,
    title: 'Brand & Design',
    desc: 'Minimal, bold visuals and 3D motion that convert.'
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    desc: 'From MVP to millions of users with solid DevOps.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-150px] right-1/4 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-white/60 max-w-2xl">We blend engineering and design to build striking digital products with a focus on speed, accessibility, and immersion.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-[#b86cf9] text-black flex items-center justify-center shadow-[0_0_25px_#b86cf980]">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-white/60 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
