import styled from "styled-components";
import type { Category } from "../../../types/event";
import type { ChangeEvent, FormEvent } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

interface Form {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: string;
}

interface EventFormProps {
  formData: Form;
  categories: Category[];
  errors: Record<string, string>;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

function EventForm({
  formData,
  categories,
  errors,
  onChange,
  onSubmit,
}: EventFormProps) {
  return (
    <FormContainer>
      <h3>Criar evento</h3>
      <Form onSubmit={onSubmit} className="mt-4">
        
        <FormGroup> <Label htmlFor="title">Titulo</Label>
          <Input
            name="title"
            value={formData.title}
            onChange={onChange}
            invalid={!!errors.title}
          />
          <FormFeedback>{errors.title}</FormFeedback>
        </FormGroup>

        <FormGroup> <Label htmlFor="category">Categoria</Label>
          <Input
            type="select"
            name="category"
            value={formData.category}
            onChange={onChange}
            invalid={!!errors.category}
          >
            <option value="">Selecionar categoria</option>
            {categories.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.name}
              </option>
            ))}
          </Input>
          <FormFeedback>{errors.category}</FormFeedback>
        </FormGroup>

        <FormGroup> <Label htmlFor="date">Data</Label>
          <Input
            type="date-local"
            name="date"
            value={formData.date}
            onChange={onChange}
            invalid={!!errors.date}
          />
          <FormFeedback>{errors.date}</FormFeedback>
        </FormGroup>

        <FormGroup> <Label htmlFor="imageUrl">Imagem URL</Label>
          <Input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={onChange}
            placeholder="https://..."
          />
        </FormGroup>

        <FormGroup> <Label htmlFor="description">Descrição</Label>
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

        <Button type="submit" color="primary" block>
          Salvar Evento
        </Button>

        {/* <Button type="reset" color="secondary" block>
          Limpar
        </Button> */}
      </Form>
    </FormContainer>
  );
}

export default EventForm;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  /* background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border}; */
  border-radius: 8px;
`;
