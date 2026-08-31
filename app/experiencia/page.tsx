"use client";

import { ArrowLeft } from "lucide-react";
import { useTheme } from "../theme-provider";
import PageReset from "../page-reset";

const experiencias = [
  {
    periodo: "Desde 2000",
    titulo: "Escritório de Advocacia",
    texto:
      "Atuação em Direito Público, Administrativo, Empresarial, Imobiliário, Bancário, Penal Tributário e matérias relacionadas à Administração Pública.",
  },
  {
    periodo: "Desde 2002",
    titulo: "Santa Casa de Ribeirão Preto",
    texto:
      "Consultoria jurídica tributária e administrativa, com atuação relacionada ao reconhecimento judicial de imunidade tributária, compras públicas, pareceres e representação perante órgãos de controle.",
  },
  {
    periodo: "TCESP e TCU",
    titulo: "Tribunais de Contas",
    texto:
      "Representação e orientação de empresas públicas, entidades beneficentes, organizações e agentes públicos.",
  },
  {
    periodo: "Experiência institucional",
    titulo: "Administração Pública",
    texto:
      "Atuação envolvendo agentes políticos, autarquias, empresas públicas e sociedades de economia mista.",
  },
  {
    periodo: "Experiência profissional",
    titulo: "Procuradorias",
    texto:
      "Passagens profissionais e consultivas relacionadas à Procuradoria da República e à Procuradoria do Estado.",
  },
  {
    periodo: "CRBM1",
    titulo: "Conselho Regional de Biomedicina da 1ª Região",
    texto:
      "Atuação como Procurador e Assessor Administrativo da Presidência, com responsabilidades jurídicas e administrativas.",
  },
  {
    periodo: "2022",
    titulo: "Profissional Biomédico Honoris Causa",
    texto:
      "Reconhecimento concedido pelo CRBM1 pelos serviços prestados em prol da biomedicina.",
  },
  {
    periodo: "Atuação social",
    titulo: "Entidades beneficentes",
    texto:
      "Atuação jurídica pro bono em favor de organizações beneficentes, incluindo APAEs.",
  },
  {
    periodo: "Consultoria",
    titulo: "Gestão empresarial e administrativa",
    texto:
      "Planejamento, análise de riscos, contratos, processos internos, organização administrativa e estratégias de desenvolvimento.",
  },
];

export default function ExperienciaPage() {
  const { dark } = useTheme();

  const page = dark
    ? "bg-[#201E1F] text-[#F0EAE1]"
    : "bg-[#D9CFBD] text-[#292526]";

  const top = dark
    ? "bg-[#292627]"
    : "bg-[#EEE7DC]";

  const muted = dark
    ? "text-[#BEB5AB]"
    : "text-[#635C55]";

  const border = dark
    ? "border-white/15"
    : "border-[#292526]/20";

  return (
    <>
      <PageReset />

      <main className={`${page} page-enter min-h-screen pt-[92px]`}>
        <section className={top}>
          <div className="mx-auto max-w-[1350px] px-6 py-14 md:px-10 md:py-20">
            <a
              href="/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.14em] text-[#A58C4E]"
            >
              <ArrowLeft size={16} />
              PÁGINA PRINCIPAL
            </a>

            <div className="mt-12 max-w-[950px]">
              <p className="text-sm uppercase tracking-[0.16em] text-[#A58C4E]">
                Experiência
              </p>

              <h1 className="mt-5 font-serif text-5xl font-light italic leading-[1.02] md:text-7xl">
                Trajetória profissional e institucional
              </h1>

              <p className={`mt-7 max-w-[760px] text-lg leading-8 ${muted}`}>
                Mais de duas décadas de atuação entre advocacia,
                Administração Pública, instituições e consultoria empresarial.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#242122] text-[#F0EAE1]">
          <div className="mx-auto max-w-[1350px] px-6 py-10 md:px-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <span className="font-serif text-4xl text-[#C4AE6D]">
                  25+
                </span>

                <p className="mt-2 text-sm text-[#BDB4AA]">
                  anos de atuação
                </p>
              </div>

              <div>
                <span className="font-serif text-3xl">
                  TCESP / TCU
                </span>

                <p className="mt-2 text-sm text-[#BDB4AA]">
                  atuação perante órgãos de controle
                </p>
              </div>

              <div>
                <span className="font-serif text-3xl">
                  Desde 2002
                </span>

                <p className="mt-2 text-sm text-[#BDB4AA]">
                  Santa Casa de Ribeirão Preto
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1350px] px-6 py-14 md:px-10 md:py-16">
            {experiencias.map((item) => (
              <div
                key={`${item.periodo}-${item.titulo}`}
                className={`grid gap-5 border-t ${border} py-8 md:grid-cols-[0.3fr_0.65fr_1.05fr]`}
              >
                <span className="text-xs tracking-[0.13em] text-[#A58C4E]">
                  {item.periodo}
                </span>

                <h2 className="font-serif text-2xl md:text-3xl">
                  {item.titulo}
                </h2>

                <p className={`leading-7 ${muted}`}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}