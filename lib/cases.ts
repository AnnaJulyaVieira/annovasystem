export type CaseItem = {
  slug: string;
  client: string;
  industry: string;
  year: string;
  title: string;
  summary: string;
  scope: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  story: { heading: string; body: string }[];
};

export const cases: CaseItem[] = [
  {
    slug: "midas-financeiro",
    client: "Midas Financeiro",
    industry: "Fintech · Crédito",
    year: "2025",
    title: "Esteira de crédito 4× mais rápida, sem aumentar o time.",
    summary:
      "Reescrita do motor de análise de crédito e construção de um back-office novo do zero, mantendo a operação no ar durante 11 meses de transição.",
    scope: ["Discovery", "Plataforma web", "Motor de decisão", "Dashboards"],
    stack: ["Next.js", "Node", "PostgreSQL", "Temporal", "AWS"],
    metrics: [
      { label: "Tempo médio de análise", value: "−74%" },
      { label: "Volume processado/mês", value: "3.2× " },
      { label: "Custo de operação", value: "−38%" },
    ],
    story: [
      {
        heading: "O problema",
        body: "A esteira rodava em uma planilha + sistema legado dos anos 2000. Cada análise tomava 28 minutos, e o pico de demanda travava o time de operações.",
      },
      {
        heading: "O que fizemos",
        body: "Mapeamos o fluxo real (não o documentado), reescrevemos o motor de decisão em Temporal com regras versionadas e construímos um back-office novo focado no analista — não no gerente.",
      },
      {
        heading: "Resultado",
        body: "Em 6 meses o tempo médio de análise caiu de 28 para 7 minutos. O time absorveu 3× o volume sem novas contratações.",
      },
    ],
  },
  {
    slug: "trilhar-logistica",
    client: "Trilhar Logística",
    industry: "Logística · Última milha",
    year: "2024",
    title: "Roteirização em tempo real para 800 entregadores.",
    summary:
      "Plataforma de despacho dinâmico que substituiu 6 ferramentas separadas e devolveu visibilidade pro centro de controle.",
    scope: ["Plataforma web", "Mobile entregador", "Integrações", "Cloud"],
    stack: ["React Native", "Go", "Kafka", "Redis", "GCP"],
    metrics: [
      { label: "Entregas/dia", value: "12k → 19k" },
      { label: "Taxa de retorno", value: "−42%" },
      { label: "SLA cumprido", value: "97.8%" },
    ],
    story: [
      {
        heading: "O problema",
        body: "Despachantes usavam planilha, WhatsApp e três sistemas diferentes. Nenhum dado batia entre eles, e o cliente final não tinha visibilidade do pedido.",
      },
      {
        heading: "O que fizemos",
        body: "Construímos uma plataforma única com roteirização dinâmica, app do entregador offline-first e painel de operação em tempo real.",
      },
      {
        heading: "Resultado",
        body: "Em 4 meses o time deixou de usar 5 das 6 ferramentas anteriores. SLA subiu de 84% para 97,8%.",
      },
    ],
  },
  {
    slug: "clinix-saude",
    client: "Clinix Saúde",
    industry: "Health · Telemedicina",
    year: "2024",
    title: "Prontuário eletrônico que o médico usa de verdade.",
    summary:
      "Substituição de um sistema legado com 9 anos por um prontuário desenhado em parceria com 14 médicos durante 5 meses.",
    scope: ["Discovery clínico", "Plataforma web", "Integrações HL7/FHIR"],
    stack: ["Next.js", "Python", "PostgreSQL", "FHIR", "AWS"],
    metrics: [
      { label: "Tempo médio por consulta", value: "−31%" },
      { label: "Adesão do corpo clínico", value: "94%" },
      { label: "Erro de digitação", value: "−68%" },
    ],
    story: [
      {
        heading: "O problema",
        body: "O prontuário antigo era lento, abria pop-ups e exigia 23 cliques para encerrar um atendimento. Médicos terminavam o dia preenchendo retroativamente.",
      },
      {
        heading: "O que fizemos",
        body: "Discovery clínico longo: acompanhamos 14 médicos em consulta real. Redesenhamos o fluxo em torno de templates ativos e dictado por voz.",
      },
      {
        heading: "Resultado",
        body: "Tempo por consulta caiu 31% e a adesão do corpo clínico em 90 dias foi de 94% — algo que o sistema anterior nunca alcançou.",
      },
    ],
  },
  {
    slug: "verde-cooperativa",
    client: "Verde Cooperativa",
    industry: "Agro · ERP cooperado",
    year: "2025",
    title: "Painel financeiro consolidando 47 cooperativas em uma tela.",
    summary:
      "Plataforma de BI que conecta sistemas heterogêneos das filiais e devolve consolidação em D+0.",
    scope: ["Pipelines de dados", "Modelagem", "Dashboards", "Acesso"],
    stack: ["dbt", "BigQuery", "Airflow", "Metabase"],
    metrics: [
      { label: "Tempo de fechamento", value: "12d → 1d" },
      { label: "Fontes consolidadas", value: "47" },
      { label: "Custo de BI", value: "−54%" },
    ],
    story: [
      {
        heading: "O problema",
        body: "Fechamento mensal levava 12 dias úteis e dependia de exportação manual de cada filial. Decisão estratégica acontecia sempre olhando dado velho.",
      },
      {
        heading: "O que fizemos",
        body: "Construímos pipelines por filial, normalizamos o modelo contábil em dbt e entregamos painéis com drill-down até o lançamento original.",
      },
      {
        heading: "Resultado",
        body: "Fechamento que levava 12 dias passou a sair em D+1 com auditoria automática. O time de BI foi reduzido de 6 para 2 pessoas, focadas em análise — não em coleta.",
      },
    ],
  },
  {
    slug: "boost-educacional",
    client: "Boost Educacional",
    industry: "Edtech · K-12",
    year: "2023",
    title: "Plataforma de avaliação para 240k alunos por trimestre.",
    summary:
      "Reescrita da aplicação de provas online com suporte offline em escolas com conectividade instável.",
    scope: ["Plataforma web", "App offline", "Anti-fraude", "Cloud"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Cloudflare"],
    metrics: [
      { label: "Provas aplicadas/trimestre", value: "240k" },
      { label: "Falhas em rede ruim", value: "−92%" },
      { label: "Custo por aluno", value: "−27%" },
    ],
    story: [
      {
        heading: "O problema",
        body: "Em 18% das escolas a conexão derrubava a prova no meio. Alunos perdiam respostas e o suporte virava operação manual.",
      },
      {
        heading: "O que fizemos",
        body: "App offline-first com sincronização em segundo plano, detecção de fraude por padrão de digitação e cache em edge.",
      },
      {
        heading: "Resultado",
        body: "Falhas por conectividade caíram 92%. A nova aplicação rodou 3 trimestres sem incidente significativo.",
      },
    ],
  },
  {
    slug: "norte-recursos",
    client: "Norte Recursos",
    industry: "RH · Folha & ponto",
    year: "2025",
    title: "Automação de ponto e folha para 38 indústrias.",
    summary:
      "Conector unificado entre relógios de ponto físicos, sistemas de RH e a contabilidade externa.",
    scope: ["Integrações", "Workflows", "Dashboards"],
    stack: ["Node", "Temporal", "PostgreSQL", "AWS Lambda"],
    metrics: [
      { label: "Horas/mês economizadas", value: "1.4k" },
      { label: "Sistemas integrados", value: "11" },
      { label: "Erro de cálculo", value: "−99%" },
    ],
    story: [
      {
        heading: "O problema",
        body: "Cada indústria tinha seu próprio relógio de ponto e sua planilha. O DP gastava 4 dias por mês só conferindo.",
      },
      {
        heading: "O que fizemos",
        body: "Conectores por marca de relógio, workflow de validação em Temporal e painel único pra DP e contabilidade.",
      },
      {
        heading: "Resultado",
        body: "1.400 horas/mês economizadas no consolidado. Erro de cálculo desapareceu praticamente do dia a dia.",
      },
    ],
  },
];

export function getCase(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
