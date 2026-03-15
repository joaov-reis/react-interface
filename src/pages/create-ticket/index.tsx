/* eslint-disable react-hooks/preserve-manual-memoization */
import { Container } from "reactstrap";
import EventForm from "./components/EventForm";
import type { EventFormData, FormErros } from "../../types";
import { useCallback, useState } from "react";
import { validateEventForm } from "../../utils/validateEventForm";
import { useNavigate } from "react-router";
import { useEvents } from "../../hooks/useEvents";

const INITIAL_FORM = {
  title: "",
  description: "",
  date: "",
  imageUrl: "",
  categoryId: "",
};

function CreateTicket() {
  const navigate = useNavigate();
  const { categories, isLoadingCategories, saveEvent } = useEvents();
  const [formData, setFormData] = useState<EventFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErros>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({ ...prev, [name]: value }));

      const key = name as keyof FormErros;
      if (errors[key]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validation = validateEventForm(formData);

      if (validation.isValid) {
        saveEvent(formData);
        navigate("/");
      } else {
        setErrors(validation.errors);
      }
    },
    [formData, navigate, saveEvent, setErrors],
  );
  return (
    <Container>
      <EventForm
        formData={formData}
        categories={categories}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoadingCategories={isLoadingCategories}
        resetForm={() => setFormData(INITIAL_FORM)}
      />
    </Container>
  );
}

export default CreateTicket;
