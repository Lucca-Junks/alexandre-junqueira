"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "../theme-provider";
import PageReset from "../page-reset";

const servicos = [
  {
    titulo: "Planejamento estratégico",
    texto:
      "Análise do cenário da organização e apoio à construção de estratégias para decisões empresariais.",
  },
  {
    titulo: "Gestão empresarial",
    texto:
      "Consultoria voltada à organização administrativa, processos e desenvolvimento da empresa.",
  },
  {
    titulo: "Análise de riscos",
    texto:
      "Identificação de riscos jurídicos, administrativos e empresariais e desenvolvimento de medidas preventivas.",
  },
  {
    titulo: "Contratos",
    texto:
      "Elaboração, revisão e análise estratégica de instrumentos contratuais.",
  },
  {
    titulo: "Processos internos",
    texto:
      "Análise e aprimoramento de procedimentos administrativos e empresariais.",
  },
  {
    titulo: "Gestão pública",
    texto:
      "Orientação estratégica e administrativa para gestores e organizações do setor público.",
  },
  {
    titulo: "Treinamento gerencial",
    texto:
      "Capacitação e desenvolvimento profissional voltados a equipes e gestores.",
  },
  {
    titulo: "Palestras",
    texto:
      "Apresentações e atividades de formação para entidades públicas e organizações privadas.",
  },
];

export default function ConsultoriaPage() {
  const { dark } = useTheme();

  const top = dark
    ? "bg-[#292627] text-[#F0EAE1]"
    : "bg-[#EEE7DC] text-[#292526]";

  const muted = dark
    ? "text-[#BEB5AB]"
    : "text-[#635C55]";

  return (
    <>
      <PageReset />

      <main className="page-enter min-h-screen bg-[#242122] pt-[92px] text-[#F0EAE1]">
        {/* TOPO */}

        <section className={top}>
          <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
            <a
              href="/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.14em] text-[#A58C4E]"
            >
              <ArrowLeft size={16} />
              PÁGINA PRINCIPAL
            </a>

            <div className="mt-12 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-[#A58C4E]">
                  Consultoria Empresarial
                </p>

                <h1 className="mt-5 max-w-[850px] font-serif text-5xl font-light italic leading-[1.03] md:text-7xl">
                  Estratégia, gestão e visão jurídica para organizações.
                </h1>
              </div>

              <p className={`self-end text-lg leading-8 ${muted}`}>
                A Alexandre Junqueira Consultoria e Assessoria Empresarial
                atua no apoio à gestão, planejamento, análise de riscos,
                processos e desenvolvimento estratégico.
              </p>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}

        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p className="text-xs uppercase tracking-[0.17em] text-[#C4AE6D]">
              Frentes de consultoria
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {servicos.map((servico, index) => (
                <div
                  key={servico.titulo}
                  className={`
                    rounded-[14px]
                    border border-white/15
                    p-7
                    ${
                      index % 2 === 0
                        ? "bg-[#2B2829]"
                        : "bg-[#211F20]"
                    }
                  `}
                >
                  <h2 className="font-serif text-2xl">
                    {servico.titulo}
                  </h2>

                  <p className="mt-4 leading-7 text-[#BBB2A8]">
                    {servico.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}

        <section
          className={
            dark
              ? "bg-[#292627] text-[#F0EAE1]"
              : "bg-[#D9CFBD] text-[#292526]"
          }
        >
          <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10">
            <p className="text-xs uppercase tracking-[0.16em] text-[#A58C4E]">
              Contato
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-[700px] font-serif text-4xl">
                Converse sobre as necessidades da sua empresa ou instituição.
              </h2>

              <a
                href="https://wa.me/5516991062491"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 border-b border-current pb-2 text-xs tracking-[0.15em] transition hover:border-[#A58C4E] hover:text-[#A58C4E]"
              >
                WHATSAPP
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}