import casal from "../assets/casal2.png";
import familia from "../assets/familia.png";
import amigos from "../assets/amigos.png";

import casalEconomico from "../assets/quarto-comum.jpg";
import casalIntermediario from "../assets/pct_casal_eco.jpg";
import casalLuxo from "../assets/pct_casal_luxo.jpg";

import familiaEconomico from "../assets/quarto-comum.jpg";
import familiaIntermediario from "../assets/pct_familia_full.jpg";
import familiaLuxo from "../assets/pct_familia_eco.jpg";

import amigosEconomico from "../assets/pct_familia.jpg";
import amigosIntermediario from "../assets/quarto-coletivo.png";
import amigosLuxo from "../assets/amigosFull.jpg";

import { FaBaby } from "react-icons/fa";

import {
  Wifi,
  Accessibility,
  Waves,
  Gamepad2,
  Utensils,
  PawPrint,
  Car,
  Snowflake,
  Coffee,
  Beer,
  BedDouble,
  Bath,
  Sparkles,
  Wine,
  Apple,
  Candy,
  Flower2,
  Music,
} from "lucide-react";

/* =========================
   SERVIÇOS
========================= */

export const servicos = [
  { icon: Coffee, nome: "Café da manhã" },
  { icon: Wifi, nome: "Wi-Fi" },
  { icon: Snowflake, nome: "Ar-condicionado" },
  { icon: Accessibility, nome: "Acessibilidade" },
  { icon: Waves, nome: "Piscina" },

  { icon: Gamepad2, nome: "Sala de jogos", adicional: true },
  { icon: Beer, nome: "Bar", adicional: true },
  { icon: Utensils, nome: "Restaurante", adicional: true },
  { icon: PawPrint, nome: "Pet friendly", adicional: true },
  { icon: Car, nome: "Garagem", adicional: true },
];

const baseServices = [
  { icon: Coffee, text: "Café da manhã incluso" },
  { icon: Wifi, text: "Wi-Fi incluso" },
  { icon: Snowflake, text: "Ar-condicionado" },
];

/* =========================
   PACOTES GERAIS
========================= */

export const pacotes = [
  {
    img: casal,
    titulo: "Casal",
    tipo: "casal",
    price: "A partir de R$ 199 / noite",
    desc: [
      {
        icon: BedDouble,
        text: "Ambiente romântico e cama de casal confortável",
      },
      { icon: Snowflake, text: "Ar-condicionado e Wi-Fi" },
      { icon: Bath, text: "Banheiro privativo" },
      { icon: Coffee, text: "Café da manhã incluso" },
    ],
  },
  {
    img: familia,
    titulo: "Família",
    tipo: "familia",
    price: "A partir de R$ 249 / noite",
    desc: [
      { icon: BedDouble, text: "Quarto amplo para toda a família" },
      { icon: Waves, text: "Piscina infantil segura" },
      { icon: Gamepad2, text: "Espaço kids com recreação" },
      { icon: Coffee, text: "Café da manhã incluso" },
    ],
  },
  {
    img: amigos,
    titulo: "Amigos",
    tipo: "amigos",
    price: "A partir de R$ 179 / noite",
    desc: [
      { icon: Gamepad2, text: "Área de jogos e diversão em grupo" },
      { icon: Beer, text: "Bar e bebidas variadas" },
      { icon: Music, text: "Ambiente com música e eventos" },
      { icon: Utensils, text: "Espaço para churrasco" },
      { icon: Coffee, text: "Café da manhã incluso" },
    ],
  },
];

/* =========================
   CASAL
========================= */

export const cardsCasal = [
  {
    image: casalEconomico,
    title: "Econômico (Casal)",
    price: "R$ 199 / noite",
    desc: [
      { icon: BedDouble, text: "Cama de casal confortável" },
      { icon: Wifi, text: "Wi-Fi e ar-condicionado" },
      { icon: Bath, text: "Banheiro privativo" },
      { icon: Coffee, text: "Café da manhã incluso" },
    ],
  },
  {
    image: casalIntermediario,
    title: "Conforto (Casal)",
    price: "R$ 299 / noite",
    desc: [
      { icon: BedDouble, text: "Cama box mais confortável" },
      { icon: Wine, text: "Espumante de boas-vindas" },
      { icon: Flower2, text: "Ambiente decorado" },
      { icon: Coffee, text: "Café da manhã incluso" },
    ],
  },
  {
    image: casalLuxo,
    title: "Luxo (Casal)",
    price: "R$ 499 / noite",
    desc: [
      { icon: BedDouble, text: "Cama king size premium" },
      { icon: Bath, text: "Banheira no quarto" },
      { icon: Wine, text: "Espumante incluso" },
      { icon: Apple, text: "Frutas frescas" },
      { icon: Candy, text: "Chocolates especiais" },
      { icon: Sparkles, text: "Decoração romântica completa" },
      { icon: Coffee, text: "Café da manhã incluso" },
    ],
  },
];

/* =========================
   FAMÍLIA
========================= */

export const cardsFamilia = [
  {
    image: familiaEconomico,
    title: "Econômico (Família)",
    price: "R$ 249 / noite",
    desc: [
      ...baseServices,
      { icon: BedDouble, text: "Quarto padrão com cama de casal confortável" },
      { icon: Bath, text: "Banheiro adaptado para bebês" },
    ],
  },
  {
    image: familiaIntermediario,
    title: "Conforto (Família)",
    price: "R$ 399 / noite",
    desc: [
      ...baseServices,
      { icon: BedDouble, text: "Quarto com cama de casal + berço" },
      { icon: FaBaby, text: "Estrutura para crianças pequenas" },
      { icon: Waves, text: "Piscina infantil segura" },
    ],
  },
  {
    image: familiaLuxo,
    title: "Luxo (Família)",
    price: "R$ 599 / noite",
    desc: [
      ...baseServices,
      { icon: BedDouble, text: "Suíte com múltiplas camas" },
      { icon: Gamepad2, text: "Área kids com recreação" },
      { icon: Music, text: "Entretenimento no hotel" },
    ],
  },
];

/* =========================
   AMIGOS
========================= */

export const cardsAmigos = [
  {
    image: amigosEconomico,
    title: "Econômico (Amigos)",
    price: "R$ 179 / noite",
    desc: [
      ...baseServices,
      { icon: BedDouble, text: "Quarto compartilhado (2 a 3 pessoas)" },
      { icon: Bath, text: "Banheiro compartilhado confortável" },
    ],
  },
  {
    image: amigosIntermediario,
    title: "Conforto (Amigos)",
    price: "R$ 279 / noite",
    desc: [
      ...baseServices,
      { icon: BedDouble, text: "Quarto com múltiplas camas (até 4 pessoas)" },
      { icon: Utensils, text: "Área de churrasco exclusiva" },
      { icon: Beer, text: "Bar e socialização" },
    ],
  },
  {
    image: amigosLuxo,
    title: "Luxo (Amigos)",
    price: "R$ 449 / noite",
    desc: [
      ...baseServices,
      { icon: BedDouble, text: "Suíte ampla (até 6 pessoas)" },
      { icon: Gamepad2, text: "Sala de jogos completa" },
      { icon: Beer, text: "Bar privativo" },
    ],
  },
];
