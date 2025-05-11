
import Image from "next/image";
import { Button } from "./ui/button";


export default function CtaSection() {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Casamento"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Eternize seu <span className="text-red-500">momento sagrado</span>{" "}
            com excelência
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Não deixe que as memórias do seu dia especial se percam. Permita-nos
            capturar cada momento com a qualidade e o respeito que ele merece.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md text-lg shadow-lg shadow-red-500/20 transition-all hover:shadow-red-500/40">
            Agende uma consulta gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
