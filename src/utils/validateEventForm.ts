import type { EventFormData, FormErros } from "../types";

export const validateEventForm = (formData: EventFormData) => {
  const errors: FormErros = {};

  if (!formData.title) errors.title = "Título obrigatório";
  if (!formData.description) errors.description = "Descrição obrigatória";
  if (!formData.date) errors.date = "Data obrigatória";
  if (!formData.categoryId) errors.categoryId = "Categoria obrigatória";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};