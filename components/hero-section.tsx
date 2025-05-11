import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Circle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/setup.jpg?height=1080&width=1920"
          alt="Setup"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-red-500 rounded-full text-xs font-medium text-red-400 uppercase tracking-wider animate-pulse">
          <Circle className="fill-current w-3 h-3 text-red-500" />
          Eternizando momentos sagrados
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Produções audiovisuais para{" "}
          <span className="text-red-500">casamentos evangélicos</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          Capturamos a essência do seu momento especial com excelência técnica e
          sensibilidade espiritual, criando memórias que glorificam a Deus e
          eternizam seu compromisso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md text-lg shadow-lg shadow-red-500/20 transition-all hover:shadow-red-500/40">
            Solicitar orçamento
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          {/* <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-white px-8 py-6 rounded-md text-lg"
          >
            Ver portfólio
          </Button> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
