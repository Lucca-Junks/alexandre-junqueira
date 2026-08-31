"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

import { useTheme } from "../../theme-provider";
import PageReset from "../../page-reset";

const areas = {
  "direito-publico": {
    titulo: "Direito Público e Administrativo",

    introducao:
      "Atuação jurídica voltada às relações entre gestores, agentes, empresas, entidades e a Administração Pública.",

    resumo:
      "O Direito Público e Administrativo envolve decisões, responsabilidades e relações jurídicas ligadas ao funcionamento da Administração Pública. A atuação pode ocorrer de forma preventiva, consultiva ou defensiva, buscando orientar gestores, entidades e organizações antes que questões administrativas se transformem em conflitos ou responsabilidades.",

    situacoes: [
      "Orientação jurídica para gestores e agentes públicos",
      "Análise de atos e procedimentos administrativos",
      "Questões envolvendo autarquias e empresas públicas",
      "Responsabilidade de agentes públicos",
      "Relacionamento de empresas e entidades com o poder público",
      "Prevenção e análise de riscos administrativos",
    ],

    publico:
      "Gestores, agentes públicos, empresas públicas, autarquias, entidades beneficentes, organizações e empresas que mantêm relações com a Administração Pública.",

    experiencia:
      "A trajetória profissional inclui atuação direta com gestores, entidades beneficentes, empresas públicas e órgãos de controle, além de experiência relacionada à Administração Pública e aos Tribunais de Contas.",
  },

  "direito-empresarial": {
    titulo: "Direito Empresarial",

    introducao:
      "Consultoria jurídica estratégica voltada à atividade empresarial, contratos, riscos e tomada de decisões.",

    resumo:
      "A atuação em Direito Empresarial busca oferecer suporte jurídico às decisões da empresa, reduzindo riscos e trazendo maior segurança para relações comerciais, contratos e processos internos. O trabalho pode ocorrer tanto na prevenção de problemas quanto na análise de situações específicas que exigem orientação jurídica e estratégica.",

    situacoes: [
      "Elaboração e revisão de contratos empresariais",
      "Análise de riscos jurídicos",
      "Orientação estratégica para gestores",
      "Questões comerciais e negociais",
      "Prevenção e resolução de conflitos",
      "Organização de processos internos",
    ],

    publico:
      "Empresas, empresários, administradores, gestores e organizações que necessitam de acompanhamento jurídico estratégico.",

    experiencia:
      "A atuação empresarial é complementada pela experiência em gestão, consultoria administrativa e análise de processos, permitindo uma abordagem jurídica integrada à realidade operacional da empresa.",
  },

  "tribunais-de-contas": {
    titulo: "Tribunais de Contas",

    introducao:
      "Atuação preventiva e defensiva perante órgãos de controle, com experiência em TCESP e TCU.",

    resumo:
      "Os Tribunais de Contas exercem controle sobre atos, contratos, despesas e decisões relacionadas à utilização de recursos públicos. A atuação jurídica nessa área envolve tanto orientação preventiva quanto defesa em processos de fiscalização, análise de contas e questionamentos formulados pelos órgãos de controle.",

    situacoes: [
      "Representação perante o TCESP",
      "Representação perante o TCU",
      "Defesa de agentes e gestores públicos",
      "Atuação envolvendo entidades beneficentes",
      "Análise preventiva de riscos",
      "Processos de controle externo",
    ],

    publico:
      "Agentes públicos, gestores, entidades beneficentes, empresas públicas e organizações submetidas à fiscalização dos Tribunais de Contas.",

    experiencia:
      "Há experiência de atuação perante TCESP e TCU desde 2008, incluindo representação de entidades, agentes e organizações em matérias relacionadas ao controle externo.",
  },

  licitacoes: {
    titulo: "Licitações e Contratos Públicos",

    introducao:
      "Assessoria jurídica e administrativa em licitações, contratações públicas e aplicação da Lei nº 14.133/2021.",

    resumo:
      "As contratações públicas exigem atenção a procedimentos, responsabilidades e regras específicas. A atuação jurídica pode auxiliar desde a preparação e análise do processo até a execução e fiscalização do contrato, reduzindo riscos e orientando agentes envolvidos nas diferentes etapas da contratação.",

    situacoes: [
      "Aplicação da Lei nº 14.133/2021",
      "Análise de processos licitatórios",
      "Contratos administrativos",
      "Compras públicas",
      "Gestão e fiscalização contratual",
      "Orientação de agentes públicos",
    ],

    publico:
      "Entidades públicas, gestores, agentes de contratação, empresas e organizações envolvidas em procedimentos licitatórios.",

    experiencia:
      "A experiência inclui atuação em compras públicas, processos licitatórios, pareceres internos e formação específica em licitações e contratos administrativos.",
  },

  compliance: {
    titulo: "Compliance e Governança",

    introducao:
      "Estruturação de práticas de conformidade, prevenção de riscos e aperfeiçoamento de controles internos.",

    resumo:
      "Compliance e governança buscam tornar processos mais seguros, transparentes e organizados. A consultoria pode identificar riscos, revisar procedimentos e estabelecer práticas internas voltadas à prevenção de irregularidades e à melhoria da tomada de decisões.",

    situacoes: [
      "Análise de riscos internos",
      "Estruturação de controles",
      "Revisão de procedimentos",
      "Governança organizacional",
      "Prevenção de irregularidades",
      "Conformidade administrativa",
    ],

    publico:
      "Empresas, entidades, instituições e organizações públicas ou privadas que buscam melhorar controles e processos internos.",

    experiencia:
      "A experiência em gestão administrativa, auditoria interna, processos organizacionais e atuação institucional contribui para uma visão integrada de conformidade e governança.",
  },

  lgpd: {
    titulo: "LGPD e Proteção de Dados",

    introducao:
      "Orientação jurídica e administrativa relacionada à proteção de dados pessoais e adequação institucional.",

    resumo:
      "A Lei Geral de Proteção de Dados estabelece regras para o tratamento de informações pessoais por organizações públicas e privadas. A atuação consultiva busca revisar procedimentos, identificar riscos e auxiliar na implementação de práticas compatíveis com as exigências de proteção de dados.",

    situacoes: [
      "Análise de processos internos",
      "Adequação à LGPD",
      "Revisão de políticas e procedimentos",
      "Mapeamento de riscos",
      "Orientação administrativa",
      "Governança e tratamento de dados pessoais",
    ],

    publico:
      "Empresas, entidades, instituições e organizações que realizam tratamento de dados pessoais em suas atividades.",

    experiencia:
      "A atuação consultiva inclui orientação relacionada à implementação da LGPD e à organização de procedimentos internos de conformidade.",
  },

  "direito-imobiliario": {
    titulo: "Direito Imobiliário",

    introducao:
      "Atuação jurídica em questões envolvendo propriedade, posse, loteamentos e desenvolvimento urbano.",

    resumo:
      "O Direito Imobiliário reúne questões relacionadas à propriedade, posse, regularização e utilização de imóveis. A atuação pode envolver análise documental, orientação estratégica e representação em situações administrativas ou judiciais.",

    situacoes: [
      "Loteamentos",
      "Zoneamento urbano",
      "Usucapião",
      "Desapropriação indireta",
      "Questões possessórias",
      "Análise jurídica imobiliária",
    ],

    publico:
      "Proprietários, empresas, investidores, empreendedores e pessoas envolvidas em questões imobiliárias ou urbanísticas.",

    experiencia:
      "A atuação inclui experiência em loteamentos, zoneamento urbano, ações possessórias, usucapião e desapropriação indireta.",
  },

  "direito-bancario": {
    titulo: "Direito Bancário e Comercial",

    introducao:
      "Atuação em questões bancárias, contratos, relações comerciais e controvérsias empresariais.",

    resumo:
      "Questões bancárias e comerciais podem envolver contratos complexos, obrigações financeiras e relações entre empresas e instituições. A atuação jurídica busca analisar essas relações, identificar riscos e orientar estratégias de prevenção ou solução de conflitos.",

    situacoes: [
      "Contratos bancários",
      "Questões comerciais",
      "Análise de obrigações",
      "Controvérsias empresariais",
      "Relações entre empresas e instituições financeiras",
      "Prevenção de riscos",
    ],

    publico:
      "Empresas, empresários e pessoas envolvidas em relações bancárias ou comerciais que necessitem de orientação jurídica.",

    experiencia:
      "A experiência profissional inclui atuação em Direito Bancário e Comercial, inclusive em questões relacionadas a contratos e relações empresariais.",
  },

  "penal-tributario": {
    titulo: "Direito Penal Tributário",

    introducao:
      "Atuação jurídica em matérias criminais relacionadas a obrigações tributárias e atividade empresarial.",

    resumo:
      "O Direito Penal Tributário envolve situações em que questões fiscais podem gerar consequências criminais. A atuação jurídica exige análise técnica das circunstâncias, responsabilidades envolvidas e estratégias adequadas para defesa e prevenção.",

    situacoes: [
      "Questões penais tributárias",
      "Responsabilidade empresarial",
      "Defesa jurídica",
      "Análise preventiva",
      "Infrações relacionadas à atividade econômica",
      "Estratégia processual",
    ],

    publico:
      "Empresários, gestores, empresas e pessoas envolvidas em questões criminais relacionadas à matéria tributária.",

    experiencia:
      "A atuação profissional inclui experiência em Direito Penal Tributário e matérias criminais relacionadas à atividade empresarial e à Administração Pública.",
  },

  "crimes-administracao-publica": {
    titulo: "Crimes contra a Administração Pública",

    introducao:
      "Atuação jurídica em matérias criminais relacionadas ao exercício de funções públicas e às relações com a Administração Pública.",

    resumo:
      "Questões criminais envolvendo a Administração Pública exigem análise cuidadosa das responsabilidades, dos atos praticados e do contexto institucional. A atuação jurídica pode envolver orientação preventiva, acompanhamento de procedimentos e defesa de agentes ou pessoas relacionadas a investigações e processos.",

    situacoes: [
      "Defesa de agentes públicos",
      "Análise de responsabilidade criminal",
      "Processos relacionados ao exercício da função pública",
      "Orientação preventiva",
      "Estratégia de defesa",
      "Questões criminais envolvendo a Administração Pública",
    ],

    publico:
      "Agentes públicos, gestores, servidores, empresários e pessoas envolvidas em questões criminais relacionadas à Administração Pública.",

    experiencia:
      "A experiência profissional inclui atuação em Direito Penal relacionado à Administração Pública, além da representação de agentes políticos e gestores em processos correlatos.",
  },

  improbidade: {
    titulo: "Improbidade Administrativa",

    introducao:
      "Atuação jurídica em processos envolvendo responsabilidade de agentes públicos e atos relacionados à Administração Pública.",

    resumo:
      "As ações de improbidade administrativa podem envolver a análise de condutas, decisões administrativas, responsabilidades e eventuais consequências patrimoniais ou funcionais. A atuação jurídica busca compreender o contexto dos fatos, avaliar responsabilidades e estruturar a estratégia adequada para cada situação.",

    situacoes: [
      "Defesa em ações de improbidade administrativa",
      "Análise de atos administrativos",
      "Responsabilidade de agentes públicos",
      "Estratégia processual",
      "Análise preventiva de riscos",
      "Acompanhamento de procedimentos relacionados",
    ],

    publico:
      "Prefeitos, secretários, diretores, vereadores, assessores, servidores, gestores e demais agentes relacionados à Administração Pública.",

    experiencia:
      "A trajetória profissional inclui representação de agentes políticos e gestores em ações de improbidade administrativa e outras demandas relacionadas ao exercício da função pública.",
  },

  "ressarcimento-erario": {
    titulo: "Ressarcimento ao Erário",

    introducao:
      "Atuação em demandas envolvendo responsabilidade patrimonial e eventual obrigação de ressarcimento aos cofres públicos.",

    resumo:
      "Demandas de ressarcimento ao erário normalmente envolvem a análise de responsabilidade, existência de prejuízo, atos administrativos e participação dos envolvidos. A atuação jurídica busca avaliar os elementos do caso e construir uma estratégia adequada para defesa ou orientação preventiva.",

    situacoes: [
      "Ações de ressarcimento ao erário",
      "Análise de responsabilidade patrimonial",
      "Defesa de agentes e gestores",
      "Questões relacionadas a prejuízo ao patrimônio público",
      "Processos administrativos",
      "Processos judiciais",
    ],

    publico:
      "Agentes públicos, gestores, servidores, entidades e pessoas envolvidas em demandas relacionadas ao patrimônio público.",

    experiencia:
      "A experiência em Direito Administrativo, Tribunais de Contas e representação de agentes públicos contribui diretamente para a atuação em demandas de responsabilidade e ressarcimento.",
  },

  "consultoria-administrativa": {
    titulo: "Consultoria Administrativa",

    introducao:
      "Assessoria voltada à organização, análise e aprimoramento de procedimentos administrativos e processos internos.",

    resumo:
      "A consultoria administrativa busca identificar problemas de organização, riscos e oportunidades de melhoria dentro de empresas e instituições. O trabalho combina análise jurídica e administrativa para desenvolver processos mais seguros, claros e eficientes.",

    situacoes: [
      "Revisão de processos internos",
      "Organização administrativa",
      "Análise de procedimentos",
      "Revisão de contratos",
      "Identificação de riscos",
      "Desenvolvimento de estratégias administrativas",
    ],

    publico:
      "Empresas, entidades, gestores, instituições e organizações que buscam aperfeiçoar sua estrutura e seus procedimentos internos.",

    experiencia:
      "A atuação reúne experiência jurídica, administrativa e empresarial, inclusive em funções de assessoramento administrativo e consultoria de organizações.",
  },

  "gestao-publica": {
    titulo: "Gestão Pública",

    introducao:
      "Consultoria jurídica e administrativa direcionada à organização e à tomada de decisões no setor público.",

    resumo:
      "A gestão pública envolve planejamento, processos administrativos, contratos, responsabilidades e decisões submetidas a regras específicas. A consultoria busca auxiliar gestores na organização dessas atividades e na prevenção de riscos jurídicos e administrativos.",

    situacoes: [
      "Planejamento administrativo",
      "Processos internos",
      "Gestão de contratos",
      "Análise de riscos",
      "Orientação de gestores",
      "Estratégia institucional",
    ],

    publico:
      "Prefeitos, secretários, diretores, superintendentes, gestores, autarquias, empresas públicas e outras estruturas administrativas.",

    experiencia:
      "A trajetória inclui atuação direta com agentes políticos, empresas públicas, autarquias e instituições ligadas à Administração Pública.",
  },

  "entidades-beneficentes": {
    titulo: "Entidades Beneficentes",

    introducao:
      "Assessoria jurídica e administrativa voltada às particularidades de entidades beneficentes e organizações do terceiro setor.",

    resumo:
      "Entidades beneficentes possuem necessidades específicas relacionadas à tributação, gestão, contratos, prestação de contas e relacionamento com o poder público. A atuação busca oferecer suporte jurídico e administrativo compatível com essa realidade institucional.",

    situacoes: [
      "Consultoria jurídica e administrativa",
      "Questões tributárias",
      "Representação perante Tribunais de Contas",
      "Contratações e compras",
      "Governança institucional",
      "Relacionamento com o poder público",
    ],

    publico:
      "Entidades beneficentes, organizações assistenciais, instituições do terceiro setor e seus gestores.",

    experiencia:
      "A atuação inclui trabalho com a Santa Casa de Ribeirão Preto desde 2002 e atividades pro bono para entidades como APAEs.",
  },

  "pareceres-juridicos": {
    titulo: "Pareceres Jurídicos",

    introducao:
      "Elaboração de análises jurídicas técnicas destinadas a orientar decisões administrativas, empresariais e institucionais.",

    resumo:
      "O parecer jurídico permite examinar uma questão específica de maneira estruturada, considerando legislação, riscos, responsabilidades e possíveis caminhos de atuação. Pode servir de suporte à tomada de decisões de gestores, empresas e instituições.",

    situacoes: [
      "Direito Administrativo",
      "Direito Empresarial",
      "Contratações públicas",
      "Gestão pública",
      "Análise de riscos",
      "Interpretação de normas e procedimentos",
    ],

    publico:
      "Empresas, entidades, gestores públicos, instituições e organizações que necessitam de análise jurídica fundamentada antes de uma decisão.",

    experiencia:
      "A experiência profissional inclui atuação como parecerista em setores administrativos, contábeis e empresariais, além de questões relacionadas a compras públicas e gestão.",
  },
};

export default function AreaPage() {
  const params = useParams();
  const slug = params.slug as string;

  const area = areas[slug as keyof typeof areas];

  const { dark } = useTheme();

  if (!area) {
    return (
      <main
        className={`flex min-h-screen items-center justify-center ${
          dark
            ? "bg-[#201E1F] text-[#F0EAE1]"
            : "bg-[#E7DECF] text-[#292526]"
        }`}
      >
        <div className="px-6 text-center">
          <p className="text-xs tracking-[0.16em] text-[#A58C4E]">
            ÁREA NÃO ENCONTRADA
          </p>

          <h1 className="mt-4 font-serif text-4xl">
            Esta área não está disponível.
          </h1>

          <a
            href="/atuacao"
            className="mt-8 inline-block border-b border-current pb-2 text-xs tracking-[0.15em]"
          >
            VOLTAR PARA ÁREAS DE ATUAÇÃO
          </a>
        </div>
      </main>
    );
  }

  const page = dark
    ? "bg-[#201E1F] text-[#F0EAE1]"
    : "bg-[#E7DECF] text-[#292526]";

  const top = dark
    ? "bg-[#292627]"
    : "bg-[#EEE7DC]";

  const soft = dark
    ? "bg-[#2A2728]"
    : "bg-[#EEE7DC]";

  const muted = dark
    ? "text-[#BEB5AB]"
    : "text-[#635C55]";

  const border = dark
    ? "border-white/15"
    : "border-[#292526]/18";

  return (
    <>
      <PageReset />

      <main
        className={`${page} page-enter min-h-screen pt-[92px] transition-colors duration-300`}
        >
        {/* TOPO */}

        <section className={`${top} border-b ${border}`}>
          <div className="mx-auto max-w-[1350px] px-6 py-14 md:px-10 md:py-20">
            <a
              href="/atuacao"
              className="inline-flex items-center gap-3 text-xs tracking-[0.14em] text-[#A58C4E] transition hover:opacity-70"
            >
              <ArrowLeft size={16} />
              TODAS AS ÁREAS
            </a>

            <div className="mt-14 max-w-[1000px]">
              <p className="text-sm uppercase tracking-[0.16em] text-[#A58C4E]">
                Área de atuação
              </p>

              <h1 className="mt-5 font-serif text-5xl font-light italic leading-[1.02] md:text-7xl">
                {area.titulo}
              </h1>

              <p className={`mt-8 max-w-[820px] text-xl leading-9 ${muted}`}>
                {area.introducao}
              </p>
            </div>
          </div>
        </section>

        {/* RESUMO */}

        <section className={dark ? "bg-[#201E1F]" : "bg-[#E7DECF]"}>
          <div className="mx-auto grid max-w-[1350px] gap-12 px-6 py-14 md:px-10 md:py-16 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-[#A58C4E]">
                Resumo
              </p>

              <div className="mt-3 h-px w-10 bg-[#A58C4E]" />
            </div>

            <p className={`max-w-[900px] text-xl leading-9 ${muted}`}>
              {area.resumo}
            </p>
          </div>
        </section>

        {/* SITUAÇÕES */}

        <section className="bg-[#242122] text-[#F0EAE1]">
          <div className="mx-auto grid max-w-[1350px] gap-12 px-6 py-14 md:px-10 md:py-16 lg:grid-cols-[0.42fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.17em] text-[#C4AE6D]">
                Atuação
              </p>

              <h2 className="mt-5 max-w-[430px] font-serif text-4xl leading-[1.08]">
                Situações em que a atuação jurídica pode ser necessária.
              </h2>
            </div>

            <div>
              {area.situacoes.map((item) => (
                <p
                  key={item}
                  className="border-b border-white/12 py-5 text-lg text-[#C8BFB5]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* PERFIL E EXPERIÊNCIA */}

        <section className={soft}>
          <div className="mx-auto grid max-w-[1350px] gap-12 px-6 py-14 md:px-10 md:py-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.17em] text-[#A58C4E]">
                Perfil de atendimento
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.1]">
                Para quem essa atuação é direcionada.
              </h2>

              <p className={`mt-6 max-w-[580px] text-lg leading-8 ${muted}`}>
                {area.publico}
              </p>
            </div>

            <div className={`lg:border-l ${border} lg:pl-10`}>
              <p className="text-xs uppercase tracking-[0.17em] text-[#A58C4E]">
                Experiência relacionada
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.1]">
                Experiência profissional aplicada à área.
              </h2>

              <p className={`mt-6 max-w-[600px] text-lg leading-8 ${muted}`}>
                {area.experiencia}
              </p>
            </div>
          </div>
        </section>

        {/* ATENDIMENTO */}

        <section
          className={
            dark
              ? "bg-[#201E1F]"
              : "bg-[#D9CFBD]"
          }
        >
          <div className="mx-auto max-w-[1350px] px-6 py-14 md:px-10 md:py-16">
            <p className="text-xs uppercase tracking-[0.17em] text-[#A58C4E]">
              Atendimento
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-[760px] font-serif text-4xl leading-[1.08]">
                Entre em contato para conversar sobre uma situação relacionada
                a esta área.
              </h2>

              <a
                href="https://wa.me/5516991062491?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20atendimento."
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