import { motion } from "framer-motion";

interface HeroGeometricProps {
  title1?: string;
}

export function HeroGeometric({ title1 }: HeroGeometricProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 w-full h-full bg-[#030303] z-0">
        <div className="absolute h-[150px] w-[150px] rounded-full bg-gradient-to-r from-indigo-500/40 to-rose-500/40 blur-[120px] top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute h-[150px] w-[150px] rounded-full bg-gradient-to-r from-rose-500/40 to-indigo-500/40 blur-[120px] bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                {title1}
              </span>
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}