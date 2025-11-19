import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#b86cf9] opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-white opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Building bold, modern software for ambitious brands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="mt-6 text-lg md:text-xl text-white/70"
          >
            Foxmen Studio is a technology partner crafting 3D-forward, high-performance digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-[#b86cf9] text-black font-semibold shadow-[0_0_40px_#b86cf999] hover:shadow-[0_0_60px_#b86cf9cc] transition-shadow"
            >
              Start a Project
            </a>
            <a href="#work" className="px-6 py-3 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors">
              See our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
