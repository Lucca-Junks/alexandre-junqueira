"use client";

import {
  ArrowRight,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useTheme } from "../app/theme-provider";

const whatsapp =
  "https://wa.me/5516991062491?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20atendimento.";

export default function Header() {
  const { dark, toggleTheme } = useTheme();

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const border = dark
    ? "border-white/15"
    : "border-[#292526]/20";

  const muted = dark
    ? "text-[#BEB5AB]"
    : "text-[#635C55]";

  function menuHref(anchor: string) {
    if (pathname === "/") {
      return `#${anchor}`;
    }

    return `/#${anchor}`;
  }

  return (
    <>
      {/* HEADER GLOBAL */}

      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          border-b ${border}
          backdrop-blur-xl
          transition-all duration-300
          ${
            dark
              ? "bg-[#201E1F]/95 text-[#F0EAE1]"
              : "bg-[#E7DECF]/95 text-[#292526]"
          }
          ${scrolled ? "h-[68px]" : "h-[92px]"}
        `}
      >
        <div className="mx-auto grid h-full max-w-[1580px] grid-cols-3 items-center px-6 md:px-10">

          {/* MENU */}

          <button
            onClick={() => setMenuOpen(true)}
            className="flex w-fit items-center gap-3 text-xs tracking-[0.15em] transition hover:text-[#A58C4E]"
            aria-label="Abrir menu"
          >
            <Menu size={20} />

            <span className="hidden sm:inline">
              MENU
            </span>
          </button>

          {/* NOME */}

          <a
            href="/"
            className="text-center whitespace-nowrap"
          >
            <p className="font-serif text-lg font-medium md:text-xl">
              Alexandre Junqueira
            </p>

            {!scrolled && (
              <p
                className={`mt-1.5 hidden text-[9px] tracking-[0.2em] md:block ${muted}`}
              >
                ADVOCACIA • CONSULTORIA • GESTÃO
              </p>
            )}
          </a>

          {/* DIREITA */}

          <div className="flex items-center justify-end gap-5">

            <button
              onClick={toggleTheme}
              className={`
                flex h-10 w-10 items-center justify-center
                border ${border}
                transition
                hover:border-[#A58C4E]
                hover:text-[#A58C4E]
              `}
              aria-label="Alternar tema"
            >
              {dark ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-xs transition hover:text-[#A58C4E] lg:flex"
            >
              <Phone size={15} />

              (16) 99106-2491
            </a>

          </div>

        </div>
      </header>

      {/* MENU LATERAL */}

      {menuOpen && (
        <>
          <button
            onClick={() => setMenuOpen(false)}
            className="menu-overlay fixed inset-0 z-[90] bg-black/50"
            aria-label="Fechar menu"
          />

          <aside className="menu-panel fixed left-0 top-0 z-[100] h-screen w-[88%] max-w-[420px] bg-[#211F20] text-[#F0EAE1] shadow-2xl">

            <div className="flex h-full flex-col px-8 py-8 md:px-10">

              <div className="flex items-center justify-between">

                <span className="text-xs tracking-[0.18em] text-[#C1AA68]">
                  NAVEGAÇÃO
                </span>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    border border-white/15
                    transition
                    hover:border-white
                    hover:text-white
                  "
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>

              </div>

              <nav className="mt-12 flex flex-col">

                {[
                  ["Início", "inicio"],
                  ["Sobre", "sobre"],
                  ["Áreas de atuação", "atuacao"],
                  ["Experiência", "experiencia"],
                  ["Consultoria", "consultoria"],
                  ["Formação", "formacao"],
                  ["Contato", "contato"],
                ].map(([nome, anchor]) => (
                  <a
                    key={nome}
                    href={menuHref(anchor)}
                    onClick={() => setMenuOpen(false)}
                    className="
                      border-b border-white/10
                      py-4
                      text-[17px]
                      text-[#BEB5AB]
                      transition-all duration-200
                      hover:pl-2
                      hover:text-white
                    "
                  >
                    {nome}
                  </a>
                ))}

              </nav>

              <div className="mt-auto border-t border-white/10 pt-7">

                <p className="font-serif text-2xl">
                  Alexandre Junqueira
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5 inline-flex items-center gap-3
                    text-sm text-[#C1AA68]
                    transition hover:text-white
                  "
                >
                  WhatsApp

                  <ArrowRight size={15} />
                </a>

              </div>

            </div>

          </aside>
        </>
      )}
    </>
  );
}