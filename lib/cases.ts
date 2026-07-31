export type CaseItem = {
  slug: string;
  client: string;
  industry: string;
  year: string;
  title: string;
  summary: string;
  scope: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  story: { heading: string; body: string }[];
};

export const cases: CaseItem[] = [
  {
    slug: "autotruck-plataforma",
    client: "Auto Truck",
    industry: "Automotivo · Agendamento",
    year: "2025",
    title: "Site de agendamento de lavagem da associação Auto Truck.",
    summary:
      "Plataforma web onde o associado da Auto Truck agenda a lavagem do veículo escolhendo data e horário disponíveis, sem precisar ligar para a sede.",
    scope: ["Plataforma web", "Agendamento", "Gestão de horários"],
    stack: ["Next.js", "TypeScript", "Node.js"],
    story: [
      {
        heading: "O problema",
        body: "O agendamento de lavagem era feito por telefone e WhatsApp, gerando dupla marcação, falhas de comunicação e perda de horário disponível.",
      },
      {
        heading: "O que fizemos",
        body: "Construímos um site onde o associado escolhe data e horário em uma agenda visual, vê o histórico de lavagens e a equipe controla a operação do outro lado.",
      },
      {
        heading: "Resultado",
        body: "Agenda centralizada, sem dupla marcação, e o associado deixou de depender da sede para marcar uma lavagem.",
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
    slug: "cannon-parts",
    client: "Cannon Parts",
    industry: "E-commerce · Autopeças",
    year: "2024",
    title: "Loja online de autopeças Cannon Parts.",
    summary:
      "Plataforma de e-commerce da Cannon Parts com catálogo de autopeças, busca, detalhe de produto e fluxo de pedido.",
    scope: ["Plataforma web", "Busca e listagem", "Página de produto"],
    stack: ["React", "Node.js", "TypeScript"],
    story: [
      {
        heading: "Objetivo",
        body: "Tirar a Cannon Parts do off-line e dar à loja uma vitrine própria com fluxo enxuto de busca e compra de peças.",
      },
      {
        heading: "O que fizemos",
        body: "Implementação dos fluxos de busca, listagem e detalhe de produto, com componentes reutilizáveis e foco em performance.",
      },
      {
        heading: "Resultado",
        body: "Vitrine digital pronta pra escalar, com identidade própria e padrão de UI reaproveitável em outros projetos.",
      },
    ],
  },
  {
    slug: "glt-motors",
    client: "GLT Motors",
    industry: "E-commerce · Motos e carros",
    year: "2025",
    title: "Loja online de venda de motos e carros da GLT Motors.",
    summary:
      "Plataforma de e-commerce da GLT Motors com catálogo de veículos, busca, detalhe de anúncio e fluxo de contato com o comprador.",
    scope: ["Plataforma web", "Catálogo de veículos", "Busca e filtros"],
    stack: ["Next.js", "TypeScript", "Node.js"],
    story: [
      {
        heading: "Objetivo",
        body: "Dar à GLT Motors uma vitrine própria pra vender motos e carros online, com catálogo organizado e busca por filtros.",
      },
      {
        heading: "O que fizemos",
        body: "Construímos o catálogo de veículos, a busca com filtros e a página de detalhe de cada anúncio, com fluxo direto de contato com o comprador.",
      },
      {
        heading: "Resultado",
        body: "Vitrine digital pronta pra escalar o estoque, com identidade própria e padrão de UI reaproveitável em outros projetos.",
      },
    ],
  },
];

export function getCase(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
