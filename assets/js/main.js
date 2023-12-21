import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".nw",
  `Trabalhei na NW Telecom no departamento técnico. Fui responsável pela elaboração e configuração de servidores usando roteadores da Mikrotik, OLTs da Vsol, entre outros aparelhos e sistemas. Uma das minhas funções era fornecer suporte técnico aos clientes. `,
  "Técnico em Telecomunicações",
  "NW Telecom",
  "Nov 2022 - Atual (Quase 1 ano)"
);
hoverChangeExperience(
  ".t7",
  `Trabalhei como desenvolvedor frontend e fui responsável por desenvolver templates para sites usando html, css, js, react. Ajudei também na criação de APIs usando python (FastAPI, Flask)`,
  "Frontend Developer",
  "T7 Themes",
  "Mar 2020 - Fev 2023 (Quase 3 anos)"
);
hoverChangeExperience(
  ".mh",
  `Realizei o estágio na MH Informática, uma assistência técnica, tive a minha primeira experiência com  redes nesse estágio. Lá eu consegui aprender um pouco sobre como funciona a topologia de uma rede a nível provedor.`,
  `Técnico em informatica`,
  "MH Informática",
  "Jan 2019 - Mar 2019 (3 meses)"
);
hoverChangeExperience(
  ".pes",
  `Realizei o estágio na Pesquisa.com, uma lan house / assistência técnica. Onde pela primeira vez tive experiência com montagem e configuração de computadores.`,
  "Técnico em informatica",
  "Pesquisa.com",
  "Ago 2018 - Dez 2018 (6 meses)"
);
hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".python",
  "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional."
);
hoverChangeDescription(
  ".mysql",
  "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface."
);
hoverChangeDescription(
  ".php",
  "PHP é uma linguagem de script do tipo server-side com diversos propósitos."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".sass",
  "Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass."
);
hoverChangeDescription(
  ".react",
  "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
);
hoverChangeDescription(
  ".c",
  "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada."
);

