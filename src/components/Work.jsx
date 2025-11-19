import { motion } from 'framer-motion'

const projects = [
  { title: 'Vortex OS', tag: 'Web Platform', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Neon Grid', tag: '3D Experience', img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop' },
  { title: 'SignalFlow', tag: 'Mobile App', img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop' }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected work</h2>
            <p className="mt-3 text-white/60 max-w-2xl">A snapshot of products and experiences we’ve shipped for forward-thinking teams.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-5 py-2 rounded-lg bg-[#b86cf9] text-black font-medium shadow-[0_0_30px_#b86cf980]">Start a Project</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="text-xs text-white/70">{p.tag}</div>
                <div className="text-white text-lg font-medium">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
