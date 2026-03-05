import { Container } from "reactstrap";
import EventForm from "./components/EventForm";
import type { Event } from "../../types/event";
import { useCallback, useState } from "react";
import { validateEventForm } from "../../utils/validateEventForm";
import { useNavigate } from "react-router";
import { useCategories } from "../../hooks/useCategories";

type FormDataCustom = Omit<Event, "id">;

function CreateEvent() {
  const navigate = useNavigate();
  const { categories, isLoading } = useCategories();
  const [formData, setFormData] = useState<FormDataCustom>({
    title: "",
    description: "",
    date: "",
    imageUrl: "",
    category: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors[name]) {
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
        // saveEvent({ id: uuidv4(), ...formData });
        navigate("/");
      } else {
        setErrors(validation.errors);
      }
    },
    [formData, navigate], //saveEvent,
  );
  return (
    <Container>
      <EventForm
        formData={formData}
        categories={categories}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CreateEvent;