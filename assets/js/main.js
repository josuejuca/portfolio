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
  `Atuei na NW Telecom no departamento técnico, desempenhando o papel fundamental na elaboração e configuração de servidores, utilizando roteadores Mikrotik, OLTs Vsol, e outros dispositivos e sistemas especializados. Responsabilizei-me por fornecer suporte técnico dedicado aos clientes, garantindo a estabilidade e eficiência das soluções implementadas. Além disso, contribuí para o desenvolvimento de websites e sistemas personalizados para a empresa.`,
  "Técnico em Telecomunicações",
  "NW Telecom",
  "Nov 2022 - Atual (Quase 1 ano)"
);
hoverChangeExperience(
  ".t7",
  `Experiência como Desenvolvedor Frontend, onde desempenhei um papel essencial no desenvolvimento de templates para sites, utilizando HTML, CSS, JavaScript e React. Contribuí significativamente para a criação de APIs, utilizando Python e frameworks como FastAPI e Flask.`,
  "Frontend Developer",
  "T7 Themes",
  "Mar 2020 - Fev 2023 (Quase 3 anos)"
);
hoverChangeExperience(
  ".mh",
  `Desenvolvi minhas habilidades durante meu estágio na MH Informática, uma assistência técnica. Essa experiência foi crucial, proporcionando-me a oportunidade de adquirir conhecimentos fundamentais sobre redes, especialmente em relação à topologia em um contexto de provedor de serviços.`,
  `Técnico em informatica`,
  "MH Informática",
  "Jan 2019 - Mar 2019 (3 meses)"
);
hoverChangeExperience(
  ".pes",
  `Realizei meu estágio na Pesquisa.com, uma lan house e assistência técnica. Durante esse período, tive a valiosa oportunidade de obter experiência prática na montagem e configuração de computadores, marcando meu primeiro contato direto com essas atividades.`,
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

