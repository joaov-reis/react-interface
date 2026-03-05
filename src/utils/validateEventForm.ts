import type { Event } from "../types/event";

export const validateEventForm = (formData: Omit<Event, "id">) => {
  const errors: Record<string, string> = {};

  if (!formData.title) errors.title = "Título obrigatório";
  if (!formData.description) errors.description = "Descrição obrigatória";
  if (!formData.date) errors.date = "Data obrigatória";
  if (!formData.category) errors.category = "Categoria obrigatória";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};