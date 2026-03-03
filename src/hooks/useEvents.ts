import { useState } from "react";
import type { Event } from "../types/event";
const items: Event[] = [
  {
    id: "1",
    title: "Lançamento do Novo App",
    description: "Evento oficial de lançamento da nova versão do aplicativo mobile.",
    date: "2026-01-15",
    imageUrl: "https://example.com/images/app-launch.jpg",
    category: "Tecnologia",
  },
  {
    id: "2",
    title: "Workshop de UX Design",
    description: "Workshop prático focado em boas práticas de experiência do usuário.",
    date: "2026-02-10",
    imageUrl: "https://example.com/images/ux-workshop.jpg",
    category: "Educação",
  },
  {
    id: "3",
    title: "Conferência de Inteligência Artificial",
    description: "Evento reunindo especialistas para discutir tendências em IA.",
    date: "2026-03-05",
    imageUrl: "https://example.com/images/ai-conference.jpg",
    category: "Tecnologia",
  },
  {
    id: "4",
    title: "Feira de Startups",
    description: "Espaço para networking e apresentação de startups inovadoras.",
    date: "2026-03-20",
    imageUrl: "https://example.com/images/startup-fair.jpg",
    category: "Negócios",
  },
  {
    id: "5",
    title: "Curso de Desenvolvimento Web",
    description: "Curso intensivo sobre desenvolvimento front-end e back-end.",
    date: "2026-04-12",
    imageUrl: "https://example.com/images/web-course.jpg",
    category: "Educação",
  },
  {
    id: "6",
    title: "Hackathon 24h",
    description: "Competição de programação com duração de 24 horas.",
    date: "2026-05-01",
    imageUrl: "https://example.com/images/hackathon.jpg",
    category: "Tecnologia",
  },
  {
    id: "7",
    title: "Palestra sobre Marketing Digital",
    description: "Discussão sobre estratégias atuais de marketing digital.",
    date: "2026-05-18",
    imageUrl: "https://example.com/images/marketing-talk.jpg",
    category: "Marketing",
  },
  {
    id: "8",
    title: "Encontro de Desenvolvedores",
    description: "Meetup mensal para troca de experiências entre desenvolvedores.",
    date: "2026-06-07",
    imageUrl: "https://example.com/images/dev-meetup.jpg",
    category: "Comunidade",
  },
  {
    id: "9",
    title: "Seminário de Cibersegurança",
    description: "Evento voltado para práticas e tendências em segurança da informação.",
    date: "2026-06-25",
    imageUrl: "https://example.com/images/cybersecurity.jpg",
    category: "Segurança",
  },
  {
    id: "10",
    title: "Demo Day de Inovação",
    description: "Apresentação de projetos inovadores para investidores.",
    date: "2026-07-10",
    imageUrl: "https://example.com/images/demo-day.jpg",
    category: "Inovação",
  },
];
export function useEvents() {
    const [events, setEvents] = useState<Event[]>(items);


    return {
        events
    }
}