import { Instagram, Music, Video } from "lucide-react";

export default function ServicesSection() {
    return (
        
      <section id="servicos" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos soluções completas para eternizar cada momento do seu
              casamento com qualidade profissional e sensibilidade espiritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all group">
              <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all">
                <Video className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Filmagem Profissional</h3>
              <p className="text-gray-400 mb-4">
                Capturamos cada momento com múltiplas câmeras em 4K, garantindo
                que nenhum detalhe seja perdido.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Múltiplas câmeras em 4K
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Drone para tomadas aéreas
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Edição cinematográfica
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all group">
              <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all">
                <Instagram className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Story Maker</h3>
              <p className="text-gray-400 mb-4">
                Transformamos cada momento em uma narrativa visual
                inesquecível, com edição profissional e toque artístico.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Criação de stories personalizados e criativos
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Sequência completa para eventos e lançamentos
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Entrega em formatos otimizados para Instagram e Reels
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all group">
              <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all">
                <Music className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Produção de Áudio</h3>
              <p className="text-gray-400 mb-4">
                Captação de áudio cristalina para que cada palavra e nota
                musical seja preservada com perfeição.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Microfones profissionais
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Mixagem e masterização
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Trilha sonora personalizada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    )}