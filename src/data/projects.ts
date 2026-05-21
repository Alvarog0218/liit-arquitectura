import ackaGamer from "@/assets/LIIT/ACKA GAMER_/0.jpg";
import aptoCorpar from "@/assets/LIIT/APTO CORPAR_/SALA COMEDOR.jpg";
import araraAcai from "@/assets/LIIT/ARARA ACAI/1.jpeg";
import banoPrincipal from "@/assets/LIIT/BAÑO PRINCIPAL TJ_/Escena 1.png";
import casaGuadalquivir from "@/assets/LIIT/CASA GUADALQUIVIR_/FACHADA PRINCIPAL.png";
import casaGuanata from "@/assets/LIIT/CASA GUANATÁ_/1.png";
import fabricaTouloust from "@/assets/LIIT/FABRICA LA TOULOUST_/Escena 1.png";
import fincaTj from "@/assets/LIIT/FINCA TJ/27.png";
import inverbet from "@/assets/LIIT/INVERBET_/1.jpg";
import rebrosBurger from "@/assets/LIIT/REBRO_S BURGUER_/1.1.png";
import wmsasTecnica from "@/assets/LIIT/WMSAS - AREA TECNICA/1.jpg";
import wmsasOficinas from "@/assets/LIIT/WMSAS - OFICINAS_/1.jpg";

export const PROJECT_CATEGORIES = [
  "Todos",
  "Residencial",
  "Comercial",
  "Corporativo",
  "Interiorismo",
  "Visualización",
] as const;

export type ProjectCategory = Exclude<(typeof PROJECT_CATEGORIES)[number], "Todos">;

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
  scope: string;
  summary: string;
  images: number;
  plans: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Casa Guadalquivir",
    category: "Residencial",
    image: casaGuadalquivir,
    scope: "Vivienda privada",
    summary:
      "Arquitectura residencial, interiorismo, fachadas, visualización y planimetría de entrega.",
    images: 46,
    plans: 13,
    featured: true,
  },
  {
    title: "Casa Guanatá",
    category: "Residencial",
    image: casaGuanata,
    scope: "Vivienda campestre",
    summary:
      "Desarrollo residencial con plantas arquitectónicas, fachadas, detalles y renders finales.",
    images: 35,
    plans: 7,
    featured: true,
  },
  {
    title: "Apto Corpar",
    category: "Interiorismo",
    image: aptoCorpar,
    scope: "Apartamento",
    summary:
      "Reforma interior integral con cocina, habitaciones, baños, patio, detalles y planimetría.",
    images: 35,
    plans: 11,
    featured: true,
  },
  {
    title: "Finca TJ",
    category: "Residencial",
    image: fincaTj,
    scope: "Finca familiar",
    summary:
      "Proyecto residencial con propuesta urbana, acabados, iluminación, fachadas y visualizaciones.",
    images: 25,
    plans: 10,
  },
  {
    title: "WMSAS Oficinas",
    category: "Corporativo",
    image: wmsasOficinas,
    scope: "Oficinas",
    summary: "Diseño corporativo con plano general, acabados, especificaciones y registro visual.",
    images: 22,
    plans: 2,
  },
  {
    title: "WMSAS Área Técnica",
    category: "Corporativo",
    image: wmsasTecnica,
    scope: "Área técnica",
    summary:
      "Adecuación técnica con geometría arquitectónica, cortes, acabados y especificaciones.",
    images: 11,
    plans: 2,
  },
  {
    title: "Arara Acai",
    category: "Comercial",
    image: araraAcai,
    scope: "Local comercial",
    summary:
      "Interiorismo comercial con plantas, cortes, detalles y renders finales para punto de venta.",
    images: 14,
    plans: 2,
  },
  {
    title: "Rebro's Burger",
    category: "Comercial",
    image: rebrosBurger,
    scope: "Restaurante",
    summary:
      "Concepto comercial con arquitectura interior, iluminación, letreros, acabados y renders.",
    images: 29,
    plans: 6,
  },
  {
    title: "Baño Principal TJ",
    category: "Interiorismo",
    image: banoPrincipal,
    scope: "Baño principal",
    summary: "Remodelación interior con planta arquitectónica, cortes y visualizaciones 3D.",
    images: 8,
    plans: 2,
  },
  {
    title: "Fábrica La Touloust",
    category: "Comercial",
    image: fabricaTouloust,
    scope: "Fábrica",
    summary:
      "Proyecto comercial con cortes generales, instalaciones, acabados y paquetes de renders.",
    images: 39,
    plans: 6,
  },
  {
    title: "Inverbet",
    category: "Corporativo",
    image: inverbet,
    scope: "Espacio corporativo",
    summary: "Visualizaciones y registro de intervención para espacio de trabajo contemporáneo.",
    images: 12,
    plans: 0,
  },
  {
    title: "ACKA Gamer",
    category: "Visualización",
    image: ackaGamer,
    scope: "Set de experiencia",
    summary: "Visualización 3D y planimetría para espacio gamer con lenguaje inmersivo.",
    images: 7,
    plans: 3,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const heroProject = projects[0];
