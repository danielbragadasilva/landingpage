import { AudioLines, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        
      <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <AudioLines className="h-6 w-6 text-red-500" />
                <span className="font-bold text-xl">Hinenii Studio</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Produção audiovisual especializada em casamentos evangélicos,
                eternizando momentos sagrados com excelência técnica e
                sensibilidade espiritual.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/hinenii_studio/"
                  className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-red-500" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-red-500" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#servicos"
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#beneficios"
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#depoimentos"
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500 mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (27) 99517-0968
                </li>
                <li className="flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500 mr-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  hinenii.it@gmail.com
                </li>
                <li className="flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500 mr-2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Av. Primeira Avenida, 26 - Segundo Pavimento,ES
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Hinenii Studio. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    )}
