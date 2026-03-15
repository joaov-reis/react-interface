import { ptBR } from "date-fns/locale/pt-BR";
import { format } from "date-fns";

export function formatDate(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "";

  const formatedDate = format(date, "dd/MM/yyyy", { locale: ptBR });

  return formatedDate;
}