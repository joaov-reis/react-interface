import styled from "styled-components";
import type { Category, EventFormData, FormErros} from "../../../types";
import type { ChangeEvent, FormEvent } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

interface EventFormProps {
  formData: EventFormData;
  categories: Category[];
  errors: FormErros;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
  resetForm?: () => void;
  isLoadingCategories?: boolean;
}

function EventForm({
  formData,
  categories,
  errors,
  onChange,
  onSubmit,
  isLoadingCategories,
  resetForm
}: EventFormProps) {
  return (
    <FormContainer>
      <h3>Criar evento</h3>
      <Form onSubmit={onSubmit} className="mt-4">
        <FormGroup>
          {" "}
          <Label htmlFor="title">Titulo</Label>
          <Input
            name="title"
            value={formData.title}
            onChange={onChange}
            invalid={!!errors.title}
          />
          <FormFeedback>{errors.title}</FormFeedback>
        </FormGroup>

        <FormGroup>
          {" "}
          <Label htmlFor="categoryId">Categoria</Label>
          <Input
            type="select"
            name="categoryId"
            value={formData.categoryId}
            onChange={onChange}
            invalid={!!errors.categoryId}
          >
            <option value="">
              {isLoadingCategories ? "Carregando..." : "Selecionar categoria"}
            </option>
            {!isLoadingCategories &&
              categories.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.name}
                </option>
              ))}
          </Input>
          <FormFeedback>{errors.categoryId}</FormFeedback>
        </FormGroup>

        <FormGroup>
          {" "}
          <Label htmlFor="date">Data</Label>
          <Input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={onChange}
            invalid={!!errors.date}
          />
          <FormFeedback>{errors.date}</FormFeedback>
        </FormGroup>

        <FormGroup>
          {" "}
          <Label htmlFor="imageUrl">Imagem URL</Label>
          <Input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={onChange}
            placeholder="https://..."
          />
        </FormGroup>

        <FormGroup>
          {" "}
          <Label htmlFor="description">Descrição</Label>
          <Input
            type="textarea"
            name="description"
            rows="4"
            value={formData.description}
            onChange={onChange}
            invalid={!!errors.description}
          />
          <FormFeedback>{errors.description}</FormFeedback>
        </FormGroup>
        <div className="d-flex justify-content-between">
          {resetForm && (
            <Button color="secondary" onClick={resetForm}>
              Limpar
            </Button>
          )}
          <Button color="primary">Salvar Evento</Button>
        </div>
      </Form>
    </FormContainer>
  );
}

export default EventForm;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
`;