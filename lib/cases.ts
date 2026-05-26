export type CaseItem = {
  slug: string;
  client: string;
  industry: string;
  year: string;
  title: string;
  summary: string;
  github?: string;
  scope: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  story: { heading: string; body: string }[];
};

export const cases: CaseItem[] = [
  {
    slug: "autotruck-plataforma",
    client: "Auto Truck",
    industry: "Mobilidade · Frotas",
    year: "2025",
    title: "Plataforma web de gestão de frota e operação de caminhões.",
    summary:
      "Sistema em produção que centraliza cadastros, manutenção e operação da frota Auto Truck em uma única interface.",
    github: "https://github.com/AnnaJulyaVieira/AutoTruckProd",
    scope: ["Plataforma web", "Painel administrativo", "Cadastros"],
    stack: ["Next.js", "TypeScript", "Node.js"],
    story: [
      {
        heading: "O problema",
        body: "A operação rodava em planilhas e ferramentas desconectadas, dificultando o acompanhamento da frota em tempo real.",
      },
      {
        heading: "O que fizemos",
        body: "Construímos uma plataforma web centralizada com fluxos pensados em torno do operador, integrando cadastro, manutenção e ordens de serviço.",
      },
      {
        heading: "Resultado",
        body: "Operação consolidada em uma única tela, com visibilidade ponta a ponta da frota e do histórico de cada caminhão.",
      },
    ],
  },
  {
    slug: "autotruck-mobile",
    client: "Auto Truck Mobile",
    industry: "Mobilidade · App",
    year: "2025",
    title: "App mobile do motorista para a operação Auto Truck.",
    summary:
      "Aplicativo nativo que estende a plataforma Auto Truck para o motorista em campo, com sincronização para o painel web.",
    github: "https://github.com/AnnaJulyaVieira/AutoTruckMobile",
    scope: ["App mobile", "Sincronização", "UX em campo"],
    stack: ["React Native", "Expo", "TypeScript"],
    story: [
      {
        heading: "O problema",
        body: "O motorista precisava de uma forma simples de acessar ordens, registrar ocorrências e consultar dados sem depender do navegador.",
      },
      {
        heading: "O que fizemos",
        body: "App enxuto em React Native, focado nas ações de campo, com sincronização automática para a plataforma web.",
      },
      {
        heading: "Resultado",
        body: "Tempo de registro de ocorrência caiu drasticamente, e o motorista deixou de depender do escritório para tarefas simples.",
      },
    ],
  },
  {
    slug: "tereza-personalizados",
    client: "Tereza Personalizados",
    industry: "E-commerce · Personalização",
    year: "2025",
    title: "Site da Tereza Personalizados e Festas.",
    summary:
      "Vitrine digital para a Tereza Personalizados, com catálogo de produtos personalizados e canal direto de orçamento.",
    github: "https://github.com/AnnaJulyaVieira/terezaPersonalizados",
    scope: ["Site institucional", "Catálogo", "Identidade visual"],
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    story: [
      {
        heading: "O problema",
        body: "A Tereza atendia 100% pelo WhatsApp, sem uma vitrine que mostrasse o portfólio e gerasse confiança em novos clientes.",
      },
      {
        heading: "O que fizemos",
        body: "Construímos um site enxuto com catálogo organizado por categoria e fluxo de orçamento que termina no WhatsApp da Tereza.",
      },
      {
        heading: "Resultado",
        body: "Novos clientes chegam já tendo visto o catálogo, encurtando o tempo de conversão entre primeiro contato e pedido fechado.",
      },
    ],
  },
  {
    slug: "mercado-livre",
    client: "Mercado Livre",
    industry: "E-commerce · Marketplace",
    year: "2024",
    title: "Clone do Mercado Livre como estudo de plataforma de e-commerce.",
    summary:
      "Implementação de uma plataforma estilo Mercado Livre com listagem, busca e fluxo de produto, explorando arquitetura de marketplace.",
    github: "https://github.com/AnnaJulyaVieira/mercadoLivre",
    scope: ["Plataforma web", "Busca e listagem", "Página de produto"],
    stack: ["React", "Node.js", "TypeScript"],
    story: [
      {
        heading: "Objetivo",
        body: "Explorar os padrões de UX e arquitetura por trás de um marketplace de grande escala, replicando os fluxos centrais.",
      },
      {
        heading: "O que fizemos",
        body: "Implementação dos fluxos de busca, listagem e detalhe de produto, com foco em componentes reutilizáveis e performance.",
      },
      {
        heading: "Resultado",
        body: "Base sólida de aprendizado em marketplace e padrão de UI reaproveitável em outros projetos do estúdio.",
      },
    ],
  },
];

export function getCase(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
