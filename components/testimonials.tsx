import Image from "next/image";

export default function Testimonials() {
    return (
        
      <section
        id="depoimentos"
        className="py-20 bg-gradient-to-b from-zinc-950 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Veja o testemunho de casais que confiaram em nosso trabalho para
              eternizar seu dia especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-red-500/10 relative">
              <div className="absolute -top-5 -left-5 text-red-500 text-6xl opacity-20">
                "
              </div>
              <div className="relative z-10">
                <p className="text-gray-300 mb-6 italic">
                  "A equipe capturou perfeitamente a essência do nosso
                  casamento. Cada momento especial foi registrado com
                  sensibilidade e respeito aos valores cristãos que são tão
                  importantes para nós."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                    <Image
                      src="/joaoemaria.jpg?height=100&width=100"
                      alt="Foto do cliente"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">João e Maria Silva</h4>
                    <p className="text-gray-400 text-sm">
                      Casados em Dezembro/2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-red-500/10 relative">
              <div className="absolute -top-5 -left-5 text-red-500 text-6xl opacity-20">
                "
              </div>
              <div className="relative z-10">
                <p className="text-gray-300 mb-6 italic">
                  "As filmagens e fotos superaram todas as nossas expectativas.
                  A equipe foi extremamente profissional e discreta durante a
                  cerimônia, respeitando o momento sagrado do nosso matrimônio."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                    <Image
                      src="/pedroeana.jpg?height=200&width=200"
                      alt="Foto do cliente"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Pedro e Ana Oliveira</h4>
                    <p className="text-gray-400 text-sm">
                      Casados em Março/2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-red-500/10 relative">
              <div className="absolute -top-5 -left-5 text-red-500 text-6xl opacity-20">
                "
              </div>
              <div className="relative z-10">
                <p className="text-gray-300 mb-6 italic">
                  "Cada vez que assistimos ao vídeo do nosso casamento,
                  revivemos aquele dia especial com a mesma emoção. A qualidade
                  do áudio permitiu que preservássemos cada palavra dos votos e
                  da mensagem do pastor."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                    <Image
                      src="/lucaserebeca.jpg?height=100&width=100"
                      alt="Foto do cliente"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Lucas e Rebeca Santos</h4>
                    <p className="text-gray-400 text-sm">
                      Casados em Outubro/2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}