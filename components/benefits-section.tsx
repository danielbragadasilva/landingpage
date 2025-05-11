import { Award, Clock, Heart } from "lucide-react";
import Image from "next/image";

export default function BenefitsSection() {
    return (
              
              <section
                id="beneficios"
                className="py-20 bg-black relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                  <Image
                    src="/gimbal.jpg?height=800&width=600"
                    alt="Decoração"
                    fill
                    className="object-cover"
                  />
                </div>
        
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Por que escolher nossa produção?
                    </h2>
                    <p className="text-gray-400 mb-12">
                      Combinamos excelência técnica com sensibilidade espiritual para
                      criar produções que honram a Deus e eternizam seu momento
                      especial.
                    </p>
                  </div>
        
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all">
                      <Heart className="h-10 w-10 text-red-500 mb-4" />
                      <h3 className="text-xl font-bold mb-2">
                        Sensibilidade Espiritual
                      </h3>
                      <p className="text-gray-400">
                        Entendemos a dimensão sagrada do matrimônio cristão e capturamos
                        cada momento com respeito e reverência.
                      </p>
                    </div>
        
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all">
                      <Award className="h-10 w-10 text-red-500 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Excelência Técnica</h3>
                      <p className="text-gray-400">
                        Utilizamos equipamentos de última geração e técnicas avançadas
                        para garantir a mais alta qualidade.
                      </p>
                    </div>
        
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all">
                      <Clock className="h-10 w-10 text-red-500 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Pontualidade</h3>
                      <p className="text-gray-400">
                        Respeitamos prazos e compromissos, entregando seu material com
                        agilidade e dentro do prazo combinado.
                      </p>
                    </div>
        
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500 mb-4"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m14.5 9-5 5" />
                        <path d="m9.5 9 5 5" />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Valores Cristãos</h3>
                      <p className="text-gray-400">
                        Trabalhamos com integridade e ética, refletindo os valores
                        cristãos em cada aspecto do nosso serviço.
                      </p>
                    </div>
        
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500 mb-4"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Personalização</h3>
                      <p className="text-gray-400">
                        Cada produção é única, adaptada às suas preferências e à
                        identidade do casal e da comunidade.
                      </p>
                    </div>
        
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500 mb-4"
                      >
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Emoção Genuína</h3>
                      <p className="text-gray-400">
                        Capturamos momentos autênticos e emocionantes, preservando a
                        genuinidade dos sentimentos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
        
    )}