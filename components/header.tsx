import { AudioLines } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AudioLines className="h-6 w-6 text-red-500" />
            <span className="font-bold text-xl">Hinenii Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#servicos"
              className="text-sm hover:text-red-400 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#beneficios"
              className="text-sm hover:text-red-400 transition-colors"
            >
              Benefícios
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm hover:text-red-400 transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-sm hover:text-red-400 transition-colors"
            >
              Contato
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-red-500 text-red-500 hover:bg-red-500/10 hover:text-white"
          >
            <Link href="#contato">Orçamento</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
  )}

      