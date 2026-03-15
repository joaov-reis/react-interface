import styled from "styled-components";
import type { Category, EventFormData, FormErros } from "../../../types";
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
  resetForm,
}: EventFormProps) {

  return (
    <FormContainer>
      <h3>Abertura de ordem de serviço</h3>
      <Form onSubmit={onSubmit} className="mt-4">
        <FormGroup>
          {" "}
          <Label htmlFor="title">Marca/Modelo do produto com defeito</Label>
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
          <Label htmlFor="categoryId">Tipo de produto</Label>
          <Input
            type="select"
            name="categoryId"
            value={formData.categoryId}
            onChange={onChange}
            invalid={!!errors.categoryId}
          >
            <option value="">
              {isLoadingCategories ? "Carregando..." : "Selecionar"}
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
          <Label htmlFor="date">Data em que apresentou defeito</Label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            invalid={!!errors.date}
          />
          <FormFeedback>{errors.date}</FormFeedback>
        </FormGroup>

        <FormGroup>
          {" "}
          <Label htmlFor="description">Descrição do defeito e observações</Label>
          <Input
            type="textarea"
            name="description"
            rows="5"
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
          <Button
            style={{ backgroundColor: "#3d51ac", borderColor: "#3d51ac" }}
          >
            Enviar solicitação de reparo
          </Button>
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