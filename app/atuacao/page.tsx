"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "../theme-provider";
import PageReset from "../page-reset";

const areas = [
  {
    titulo: "Direito Público e Administrativo",
    slug: "direito-publico",
    descricao:
      "Assessoria jurídica relacionada à Administração Pública, agentes públicos, gestores, autarquias, empresas públicas e organizações que mantêm relações com o poder público.",
  },
  {
    titulo: "Direito Empresarial",
    slug: "direito-empresarial",
    descricao:
      "Consultoria jurídica para empresas, análise de riscos, contratos, estruturação e suporte estratégico à tomada de decisões.",
  },
  {
    titulo: "Tribunais de Contas",
    slug: "tribunais-de-contas",
    descricao:
      "Atuação preventiva e defensiva perante o TCESP e o TCU.",
  },
  {
    titulo: "Licitações e Contratos Públicos",
    slug: "licitacoes",
    descricao:
      "Assessoria em licitações, compras públicas, contratos administrativos e aplicação da Lei nº 14.133/2021.",
  },
  {
    titulo: "Compliance e Governança",
    slug: "compliance",
    descricao:
      "Estruturação de controles, prevenção de riscos, conformidade e práticas de governança.",
  },
  {
    titulo: "LGPD e Proteção de Dados",
    slug: "lgpd",
    descricao:
      "Orientação para adequação jurídica e administrativa de organizações à legislação de proteção de dados.",
  },
  {
    titulo: "Direito Imobiliário",
    slug: "direito-imobiliario",
    descricao:
      "Atuação relacionada a loteamentos, zoneamento urbano, usucapião, desapropriação e matérias possessórias.",
  },
  {
    titulo: "Direito Bancário e Comercial",
    slug: "direito-bancario",
    descricao:
      "Atuação em questões bancárias, comerciais, contratuais e empresariais.",
  },
  {
    titulo: "Direito Penal Tributário",
    slug: "penal-tributario",
    descricao:
      "Atuação em matérias penais tributárias relacionadas à atividade empresarial.",
  },
  {
    titulo: "Crimes contra a Administração Pública",
    slug: "crimes-administracao-publica",
    descricao:
      "Defesa e orientação jurídica em questões criminais relacionadas à Administração Pública.",
  },
  {
    titulo: "Improbidade Administrativa",
    slug: "improbidade",
    descricao:
      "Atuação em processos relacionados à improbidade administrativa e responsabilidade de agentes.",
  },
  {
    titulo: "Ressarcimento ao Erário",
    slug: "ressarcimento-erario",
    descricao:
      "Atuação em demandas relacionadas à responsabilidade patrimonial e ao ressarcimento ao erário.",
  },
  {
    titulo: "Consultoria Administrativa",
    slug: "consultoria-administrativa",
    descricao:
      "Assessoria em processos administrativos, procedimentos internos e organização institucional.",
  },
  {
    titulo: "Gestão Pública",
    slug: "gestao-publica",
    descricao:
      "Consultoria administrativa e estratégica direcionada a gestores e organizações públicas.",
  },
  {
    titulo: "Entidades Beneficentes",
    slug: "entidades-beneficentes",
    descricao:
      "Assessoria jurídica e administrativa para organizações beneficentes e instituições do terceiro setor.",
  },
  {
    titulo: "Pareceres Jurídicos",
    slug: "pareceres-juridicos",
    descricao:
      "Elaboração de pareceres técnicos em matérias jurídicas, administrativas e empresariais.",
  },
];

export default function AtuacaoPage() {
  const { dark } = useTheme();

  const page = dark
    ? "bg-[#201E1F] text-[#F0EAE1]"
    : "bg-[#D9CFBD] text-[#292526]";

  const top = dark
    ? "bg-[#292627]"
    : "bg-[#EEE7DC]";

  const card = dark
    ? "bg-[#292627] border-white/15"
    : "bg-[#E8E0D2] border-[#292526]/15";

  const muted = dark
    ? "text-[#BEB5AB]"
    : "text-[#635C55]";

  return (
    <>
      <PageReset />

      <main className={`${page} page-enter min-h-screen pt-[92px]`}>
        <section className={`${top} border-b ${
          dark ? "border-white/10" : "border-[#292526]/15"
        }`}>
          <div className="mx-auto max-w-[1450px] px-6 py-14 md:px-10 md:py-20">
            <a
              href="/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.14em] text-[#A58C4E]"
            >
              <ArrowLeft size={16} />
              PÁGINA PRINCIPAL
            </a>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.55fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-[#A58C4E]">
                  Áreas de atuação
                </p>

                <h1 className="mt-5 max-w-[850px] font-serif text-5xl font-light italic leading-[1.03] md:text-7xl">
                  Atuação jurídica e consultiva
                </h1>
              </div>

              <p className={`self-end text-lg leading-8 ${muted}`}>
                Conheça as diferentes frentes de atuação e acesse
                informações específicas sobre cada área.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-[1450px] px-6 md:px-10">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <a
                  key={area.slug}
                  href={`/atuacao/${area.slug}`}
                  className={`
                    group flex min-h-[290px] flex-col
                    rounded-[14px] border
                    ${card}
                    p-7
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    hover:border-[#A58C4E]
                  `}
                >
                  <h2 className="font-serif text-[27px] leading-tight transition group-hover:text-[#A58C4E]">
                    {area.titulo}
                  </h2>

                  <p className={`mt-5 text-sm leading-7 ${muted}`}>
                    {area.descricao}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-8 text-xs tracking-[0.14em] transition group-hover:text-[#A58C4E]">
                    <span>LER MAIS</span>
                    <ArrowRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#242122] text-[#F0EAE1]">
          <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.17em] text-[#C4AE6D]">
                Atendimento
              </p>

              <p className="mt-3 font-serif text-3xl">
                Precisa conversar sobre uma situação específica?
              </p>
            </div>

            <a
              href="https://wa.me/5516991062491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-5 text-xs tracking-[0.15em] text-[#C4AE6D]"
            >
              WHATSAPP
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}