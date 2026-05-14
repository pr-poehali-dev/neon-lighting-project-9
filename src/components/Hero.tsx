import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/af1d8543-d347-456c-b006-479f468e4d72/files/55ab333c-28d2-4169-8a50-d74d57d735ef.jpg"
          alt="Дорога в горизонт"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-widest mb-4 opacity-70">Итоговый проект</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          СДАЙ С<br />ПЕРВОГО РАЗА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Полное руководство по подготовке к теоретическому и практическому экзамену на водительское удостоверение
        </p>
      </div>
    </div>
  );
}