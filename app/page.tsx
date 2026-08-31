"use client";

import Image from "next/image";

import {
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";

import { useTheme } from "./theme-provider";

const whatsapp =
  "https://wa.me/5516991062491?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20atendimento.";

const areas = [
  {
    titulo:
      "Direito Público e Administrativo",

    slug:
      "direito-publico",

    descricao:
      "Assessoria e representação de gestores, agentes públicos, autarquias, empresas públicas e entidades relacionadas à Administração Pública.",
  },

  {
    titulo:
      "Direito Empresarial",

    slug:
      "direito-empresarial",

    descricao:
      "Consultoria jurídica estratégica, contratos, análise de riscos e suporte à tomada de decisões empresariais.",
  },

  {
    titulo:
      "Tribunais de Contas",

    slug:
      "tribunais-de-contas",

    descricao:
      "Atuação preventiva e defensiva perante TCESP e TCU para agentes públicos, empresas e entidades.",
  },

  {
    titulo:
      "Licitações e Contratos Públicos",

    slug:
      "licitacoes",

    descricao:
      "Orientação jurídica e administrativa em licitações, contratos e aplicação da Lei nº 14.133/2021.",
  },

  {
    titulo:
      "Compliance e Governança",

    slug:
      "compliance",

    descricao:
      "Análise de riscos, controles internos, conformidade e desenvolvimento de práticas de governança.",
  },

  {
    titulo:
      "Direito Imobiliário",

    slug:
      "direito-imobiliario",

    descricao:
      "Atuação em loteamentos, zoneamento urbano, usucapião, desapropriações e questões possessórias.",
  },

  {
    titulo:
      "Direito Bancário e Comercial",

    slug:
      "direito-bancario",

    descricao:
      "Atuação jurídica em questões bancárias, comerciais e empresariais.",
  },

  {
    titulo:
      "Direito Penal Tributário",

    slug:
      "penal-tributario",

    descricao:
      "Atuação em matéria penal tributária e questões relacionadas à atividade empresarial e à Administração Pública.",
  },
];

const experiencias = [
  {
    destaque:
      "Desde 2000",

    titulo:
      "Advocacia",

    texto:
      "Atuação em Direito Público, Administrativo, Empresarial, Imobiliário, Bancário e áreas correlatas.",
  },

  {
    destaque:
      "Desde 2002",

    titulo:
      "Santa Casa de Ribeirão Preto",

    texto:
      "Consultoria jurídica tributária e administrativa, atuação relacionada à imunidade tributária e representação perante órgãos de controle.",
  },

  {
    destaque:
      "TCESP e TCU",

    titulo:
      "Tribunais de Contas",

    texto:
      "Representação de empresas públicas, entidades beneficentes, organizações e agentes públicos.",
  },

  {
    destaque:
      "CRBM1",

    titulo:
      "Atuação institucional",

    texto:
      "Experiência como Procurador e Assessor Administrativo da Presidência do Conselho Regional de Biomedicina da 1ª Região.",
  },
];

export default function Home() {
  const { dark } = useTheme();

  const page = dark
    ? "bg-[#201E1F] text-[#F0EAE1]"
    : "bg-[#E7DECF] text-[#292526]";

  const soft = dark
    ? "bg-[#2A2728] text-[#F0EAE1]"
    : "bg-[#D9CFBD] text-[#292526]";

  const card = dark
    ? "bg-[#252223]"
    : "bg-[#EDE5D8]";

  const muted = dark
    ? "text-[#BEB5AB]"
    : "text-[#635C55]";

  const border = dark
    ? "border-white/15"
    : "border-[#292526]/20";

  return (
    <main
      className={`
        ${page}
        min-h-screen
        transition-colors duration-300
      `}
    >

      {/* INÍCIO */}

      <section
        id="inicio"
        className="pt-[92px]"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">

          <div className="grid min-h-[640px] items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr]">

            <div>

              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#A58C4E]">
                Advocacia • Gestão • Consultoria
              </p>

              <h1 className="max-w-[850px] font-serif text-[46px] font-light italic leading-[1.06] tracking-[-0.015em] sm:text-[56px] md:text-[64px] xl:text-[70px]">
                Direito público, empresarial e consultoria estratégica
              </h1>

              <p
                className={`mt-8 max-w-[700px] text-lg leading-8 ${muted}`}
              >
                Atuação jurídica e consultiva voltada a empresas,
                entidades, gestores públicos e organizações diante de
                questões administrativas, empresariais e institucionais.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-7">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-8
                    px-7 py-4
                    text-xs tracking-[0.15em]
                    transition hover:opacity-90
                    ${
                      dark
                        ? "bg-[#C0A968] text-[#201E1F]"
                        : "bg-[#292526] text-[#F0EAE1]"
                    }
                  `}
                >
                  FALAR PELO WHATSAPP

                  <ArrowRight size={16} />
                </a>

                <a
                  href="/atuacao"
                  className={`
                    inline-flex items-center gap-4
                    border-b ${border}
                    pb-2
                    text-xs tracking-[0.15em]
                    transition
                    hover:border-[#A58C4E]
                    hover:text-[#A58C4E]
                  `}
                >
                  VER TODAS AS ÁREAS

                  <ArrowRight size={16} />
                </a>

              </div>

              <div
                className={`
                  mt-12 grid grid-cols-2 gap-6
                  border-t ${border}
                  pt-7
                  md:grid-cols-3
                `}
              >

                <div>

                  <strong className="font-serif text-4xl font-light text-[#A58C4E]">
                    25+
                  </strong>

                  <p className={`mt-1 text-sm ${muted}`}>
                    anos de atuação
                  </p>

                </div>

                <div>

                  <strong className="font-serif text-2xl">
                    TCESP / TCU
                  </strong>

                  <p className={`mt-2 text-sm ${muted}`}>
                    Tribunais de Contas
                  </p>

                </div>

                <div>

                  <strong className="font-serif text-2xl">
                    Desde 2000
                  </strong>

                  <p className={`mt-2 text-sm ${muted}`}>
                    Advocacia
                  </p>

                </div>

              </div>

            </div>

            {/* FOTO */}

            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-[430px]">

                <div
                  className={`
                    relative aspect-[4/5]
                    overflow-hidden
                    rounded-[24px]
                    border ${border}
                    bg-[#272324]
                  `}
                >
                  <Image
                    src="/alexandre-junqueira.jpg"
                    alt="Alexandre Junqueira"
                    fill
                    priority
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                </div>

                <div className="mt-4 text-center">

                  <p className="font-serif text-xl">
                    Alexandre Junqueira
                  </p>

                  <p
                    className={`mt-1 text-xs tracking-[0.12em] ${muted}`}
                  >
                    ADVOCACIA E CONSULTORIA EMPRESARIAL
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SOBRE */}

      <section
        id="sobre"
        className={`${soft} py-16 transition-colors duration-300 md:py-20`}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-[0.25fr_1.75fr]">

          <div>

            <p className="text-sm uppercase tracking-[0.15em] text-[#A58C4E]">
              Sobre
            </p>

            <div className="mt-3 h-px w-10 bg-[#A58C4E]" />

          </div>

          <div>

            <h2 className="max-w-[1000px] font-serif text-4xl font-normal leading-[1.1] md:text-5xl">
              Experiência jurídica aliada à visão de gestão e estratégia.
            </h2>

            <div className="mt-8 grid max-w-[1050px] gap-10 md:grid-cols-2">

              <p className={`text-lg leading-8 ${muted}`}>
                Alexandre Junqueira atua na advocacia desde 2000,
                com experiência em Direito Público, Administrativo,
                Empresarial e áreas relacionadas à gestão.
              </p>

              <p className={`text-lg leading-8 ${muted}`}>
                Sua trajetória reúne atuação com empresas, entidades
                beneficentes, agentes públicos, instituições e organizações
                que mantêm relações com o poder público.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ATUAÇÃO */}

      <section
        id="atuacao"
        className="py-16 md:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">

          <div className="grid items-end gap-8 lg:grid-cols-[0.25fr_1fr_0.75fr]">

            <div>

              <p className="text-sm uppercase tracking-[0.15em] text-[#A58C4E]">
                Atuação
              </p>

              <div className="mt-3 h-px w-10 bg-[#A58C4E]" />

            </div>

            <h2 className="font-serif text-4xl font-normal md:text-5xl">
              Áreas de atuação
            </h2>

            <p className={`${muted} leading-7`}>
              Algumas das principais frentes da atuação jurídica
              e consultiva.
            </p>

          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            {areas.map((area) => (
              <a
                key={area.slug}
                href={`/atuacao/${area.slug}`}
                className={`
                  group
                  flex min-h-[300px] flex-col
                  rounded-[14px]
                  border ${border}
                  ${card}
                  p-7
                  transition-all duration-300
                  hover:-translate-y-[2px]
                  hover:border-[#A58C4E]
                `}
              >
                <h3 className="font-serif text-[25px] leading-tight transition-colors group-hover:text-[#A58C4E]">
                  {area.titulo}
                </h3>

                <p className={`mt-5 text-sm leading-7 ${muted}`}>
                  {area.descricao}
                </p>

                <div className="mt-auto flex items-center justify-between pt-7 text-xs tracking-[0.14em] transition-colors group-hover:text-[#A58C4E]">

                  <span>
                    LER MAIS
                  </span>

                  <ArrowRight size={16} />

                </div>
              </a>
            ))}

          </div>

          <div className="mt-10 flex justify-center">

            <a
              href="/atuacao"
              className={`
                inline-flex items-center gap-7
                rounded-[8px]
                border ${border}
                px-7 py-4
                text-xs tracking-[0.15em]
                transition
                hover:border-[#A58C4E]
                hover:text-[#A58C4E]
              `}
            >
              VER TODAS AS ÁREAS

              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

      {/* EXPERIÊNCIA */}

      <section
        id="experiencia"
        className={`${soft} py-16 transition-colors duration-300 md:py-20`}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-[0.25fr_1.75fr]">

          <div>

            <p className="text-sm uppercase tracking-[0.15em] text-[#A58C4E]">
              Experiência
            </p>

            <div className="mt-3 h-px w-10 bg-[#A58C4E]" />

          </div>

          <div>

            <h2 className="max-w-[950px] font-serif text-4xl font-normal leading-[1.08] md:text-5xl">
              Mais de duas décadas de atuação jurídica e institucional.
            </h2>

            <div className="mt-9">

              {experiencias.map((item) => (
                <div
                  key={item.titulo}
                  className={`
                    grid gap-4
                    border-t ${border}
                    py-6
                    md:grid-cols-[0.3fr_0.65fr_1.05fr]
                  `}
                >
                  <span className="text-xs tracking-[0.12em] text-[#A58C4E]">
                    {item.destaque}
                  </span>

                  <h3 className="font-serif text-xl md:text-2xl">
                    {item.titulo}
                  </h3>

                  <p className={`${muted} leading-7`}>
                    {item.texto}
                  </p>

                </div>
              ))}

            </div>

            <a
              href="/experiencia"
              className={`
                mt-8 inline-flex items-center gap-5
                rounded-[8px]
                border ${border}
                px-6 py-4
                text-xs tracking-[0.15em]
                transition
                hover:border-[#A58C4E]
                hover:text-[#A58C4E]
              `}
            >
              VER EXPERIÊNCIA COMPLETA

              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

      {/* CONSULTORIA */}

      <section
        id="consultoria"
        className="bg-[#242122] py-16 text-[#F0EAE1] md:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.25fr_1.75fr]">

            <div>

              <p className="text-sm uppercase tracking-[0.15em] text-[#C2AC6A]">
                Consultoria
              </p>

              <div className="mt-3 h-px w-10 bg-[#C2AC6A]" />

            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">

              <div>

                <h2 className="max-w-[800px] font-serif text-4xl font-normal leading-[1.08] md:text-5xl">
                  Direito, administração e estratégia empresarial.
                </h2>

                <p className="mt-7 max-w-[760px] text-lg leading-8 text-[#BBB2A8]">
                  Consultoria voltada ao planejamento, análise de riscos,
                  melhoria de processos, contratos, organização interna
                  e desenvolvimento estratégico.
                </p>

                <a
                  href="/consultoria"
                  className="mt-8 inline-flex items-center gap-5 border-b border-[#C5AF6E] pb-2 text-xs tracking-[0.15em] text-[#C5AF6E]"
                >
                  CONHECER A CONSULTORIA

                  <ArrowRight size={16} />
                </a>

              </div>

              <div className="border-l border-white/15 pl-8">

                {[
                  "Gestão empresarial",
                  "Planejamento estratégico",
                  "Análise de riscos",
                  "Contratos",
                  "Processos internos",
                  "Treinamentos e palestras",
                ].map((item) => (
                  <p
                    key={item}
                    className="border-b border-white/10 py-4 text-[#CBC1B7]"
                  >
                    {item}
                  </p>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FORMAÇÃO */}

      <section
        id="formacao"
        className="py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-[0.25fr_1.75fr]">

          <div>

            <p className="text-sm uppercase tracking-[0.15em] text-[#A58C4E]">
              Formação
            </p>

            <div className="mt-3 h-px w-10 bg-[#A58C4E]" />

          </div>

          <div>

            <h2 className="font-serif text-4xl font-normal md:text-5xl">
              Formação multidisciplinar.
            </h2>

            <div className="mt-9">

              {[
                {
                  logo:
                    "/logos/unaerp.png",

                  tipo:
                    "Direito",

                  curso:
                    "Bacharelado em Direito",

                  instituicao:
                    "Universidade de Ribeirão Preto",
                },

                {
                  logo:
                    "/logos/anhanguera.png",

                  tipo:
                    "MBA",

                  curso:
                    "Gestão e Economia Empresarial",

                  instituicao:
                    "Universidade Anhanguera",
                },

                {
                  logo:
                    "/logos/anhanguera.png",

                  tipo:
                    "Pós-graduação",

                  curso:
                    "Direito Administrativo",

                  instituicao:
                    "Universidade Anhanguera",
                },

                {
                  logo:
                    "/logos/anhanguera.png",

                  tipo:
                    "Pós-graduação",

                  curso:
                    "Políticas Públicas",

                  instituicao:
                    "Universidade Anhanguera",
                },
              ].map((item) => (
                <div
                  key={`${item.tipo}-${item.curso}`}
                  className={`
                    grid items-center gap-5
                    border-t ${border}
                    py-6
                    md:grid-cols-[70px_0.35fr_1fr_0.8fr]
                  `}
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-[8px] bg-white/90">

                    <Image
                      src={item.logo}
                      alt={item.instituicao}
                      fill
                      className="object-contain p-1.5"
                    />

                  </div>

                  <span className="text-xs tracking-[0.12em] text-[#A58C4E]">
                    {item.tipo}
                  </span>

                  <h3 className="font-serif text-xl md:text-2xl">
                    {item.curso}
                  </h3>

                  <p className={muted}>
                    {item.instituicao}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CONTATO */}

      <section
        id="contato"
        className={`${soft} py-16 transition-colors duration-300 md:py-20`}
      >
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-10 lg:grid-cols-[1.08fr_0.92fr]">

          <div>

            <p className="text-sm uppercase tracking-[0.15em] text-[#A58C4E]">
              Contato
            </p>

            <div className="mt-3 h-px w-10 bg-[#A58C4E]" />

            <h2 className="mt-7 font-serif text-4xl md:text-5xl">
              Entre em contato.
            </h2>

            <p
              className={`mt-6 max-w-[560px] text-lg leading-8 ${muted}`}
            >
              Para informações sobre atendimento, advocacia
              ou consultoria empresarial.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 bg-[#A58C4E] px-7 py-4 text-xs tracking-[0.15em] text-[#211F20]"
              >
                WHATSAPP

                <ArrowRight size={16} />
              </a>

              <a
                href="mailto:junqueira.andrade@uol.com.br"
                className={`
                  inline-flex items-center gap-4
                  rounded-[8px]
                  border ${border}
                  px-7 py-4
                  text-xs tracking-[0.15em]
                  transition
                  hover:border-[#A58C4E]
                  hover:text-[#A58C4E]
                `}
              >
                <Mail size={16} />

                E-MAIL
              </a>

            </div>

          </div>

          <div className={`lg:border-l ${border} lg:pl-12`}>

            <p className="text-xs tracking-[0.16em] text-[#A58C4E]">
              ESCRITÓRIO
            </p>

            <p className={`mt-4 text-lg leading-8 ${muted}`}>
              Ed. Fortes Guimarães
              <br />
              R. Bernardino de Campos, 1001
              <br />
              4º andar, cj. 408
              <br />
              Centro • Ribeirão Preto - SP
              <br />
              CEP 14015-130
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Ed.+Fortes+Guimaraes+R.+Bernardino+de+Campos+1001+Ribeirao+Preto+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 border-b border-current pb-2 text-xs tracking-[0.14em] transition hover:text-[#A58C4E]"
            >
              <MapPin size={15} />

              ABRIR NO MAPA
            </a>

            <div className={`mt-8 border-t ${border} pt-6`}>

              <p className="text-xs tracking-[0.16em] text-[#A58C4E]">
                ESTACIONAMENTO
              </p>

              <p className={`mt-3 ${muted}`}>
                Acesso pela R. Sete de Setembro, 1075
              </p>

            </div>

            <div className={`mt-7 border-t ${border} pt-6`}>

              <p className="text-xs tracking-[0.16em] text-[#A58C4E]">
                TELEFONE / WHATSAPP
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-serif text-xl transition hover:text-[#A58C4E]"
              >
                (16) 99106-2491
              </a>

            </div>

            <div className={`mt-7 border-t ${border} pt-6`}>

              <p className="text-xs tracking-[0.16em] text-[#A58C4E]">
                E-MAIL
              </p>

              <a
                href="mailto:junqueira.andrade@uol.com.br"
                className="mt-3 block transition hover:text-[#A58C4E]"
              >
                junqueira.andrade@uol.com.br
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#201E1F] text-[#EEE7DC]">

        <div className="mx-auto max-w-[1400px] px-6 pb-9 pt-14 md:px-10">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div>

              <p className="font-serif text-2xl">
                Alexandre Junqueira
              </p>

              <p className="mt-3 text-xs leading-6 tracking-[0.13em] text-[#A89F95]">
                ADVOCACIA
                <br />
                CONSULTORIA EMPRESARIAL
                <br />
                GESTÃO
              </p>

            </div>

            <div>

              <p className="mb-5 text-xs tracking-[0.17em] text-[#C1AB6B]">
                NAVEGAÇÃO
              </p>

              <div className="flex flex-col gap-3 text-sm text-[#B9B0A7]">

                <a
                  href="/#sobre"
                  className="transition hover:text-white"
                >
                  Sobre
                </a>

                <a
                  href="/#atuacao"
                  className="transition hover:text-white"
                >
                  Áreas de atuação
                </a>

                <a
                  href="/#experiencia"
                  className="transition hover:text-white"
                >
                  Experiência
                </a>

                <a
                  href="/#consultoria"
                  className="transition hover:text-white"
                >
                  Consultoria
                </a>

                <a
                  href="/#formacao"
                  className="transition hover:text-white"
                >
                  Formação
                </a>

                <a
                  href="/#contato"
                  className="transition hover:text-white"
                >
                  Contato
                </a>

              </div>

            </div>

            <div>

              <p className="mb-5 text-xs tracking-[0.17em] text-[#C1AB6B]">
                CONTATO
              </p>

              <div className="flex flex-col gap-3 text-sm text-[#B9B0A7]">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  (16) 99106-2491
                </a>

                <a
                  href="mailto:junqueira.andrade@uol.com.br"
                  className="transition hover:text-white"
                >
                  junqueira.andrade@uol.com.br
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C1AB6B] transition hover:text-white"
                >
                  WhatsApp →
                </a>

              </div>

            </div>

            <div>

              <p className="mb-5 text-xs tracking-[0.17em] text-[#C1AB6B]">
                ESCRITÓRIO
              </p>

              <p className="text-sm leading-7 text-[#B9B0A7]">
                Ed. Fortes Guimarães
                <br />
                R. Bernardino de Campos, 1001
                <br />
                4º andar, cj. 408
                <br />
                Centro • Ribeirão Preto - SP
                <br />
                CEP 14015-130
              </p>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-xs text-[#817A74]">
            Alexandre Junqueira • Advocacia e Consultoria Empresarial
          </div>

        </div>

      </footer>

    </main>
  );
}