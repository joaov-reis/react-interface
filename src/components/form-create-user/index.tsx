import { useState } from "react";
import "./styles.css";

interface Form {
  name: string;
  email: string;
  password: string;
}

interface FormState {
  values: Form;
  errors: Partial<Form>;
}

function Form() {
  const [form, setForm] = useState<FormState>({
    values: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  });

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (value.length > 0 && value.length < 3)
          return "O nome deve ter pelo menos 3 caracteres.";
        return undefined;

      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.length > 0 && !emailRegex.test(value))
          return "Digite um e-mail válido.";
        return undefined;
      }

      case "password":
        if (value.length > 0 && value.length < 6)
          return "A senha deve ter no mínimo 6 caracteres.";
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const messageError = validateField(name, value);

    setForm((prev) => ({
      values: {
        ...prev.values,
        [name]: value,
      },
      errors: {
        ...prev.errors,
        [name]: messageError,
      },
    }));
  };

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();
    const { errors, values } = form;

    const hasErrors = Object.values(errors).some((error) => error != undefined);
    const hasEmptyFields = Object.values(values).some((value) => value === "");

    if (hasErrors || hasEmptyFields) {
      alert("Preencha todos os campos corretamente");
      return;
    }

    console.log("Dados enviados", values);

    setForm({
      values: {
        name: "",
        email: "",
        password: "",
      },
      errors: {},
    });
  };

  return (
    <div className="form-container">
      <h2 className="title">Cadastro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="label-input">
            Nome completo
          </label>
          <input
            type="text"
            name="name"
            value={form.values.name}
            onChange={handleChange}
            className={`
              input-text ${form.errors.name ? "input-error" : ""}
              `}
          />
          {form.errors.name && (
            <span className="error-message">{form.errors.name}</span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="email" className="label-input">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={form.values.email}
            onChange={handleChange}
            className={`
              input-text ${form.errors.email ? "input-error" : ""}
              `}
          />
          {form.errors.email && (
            <span className="error-message">{form.errors.email}</span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password" className="label-input">
            Senha
          </label>
          <input
            type="password"
            name="password"
            value={form.values.password}
            onChange={handleChange}
            className={`
              input-text ${form.errors.password ? "input-error" : ""}
              `}
          />
          {form.errors.password && (
            <span className="error-message">{form.errors.password}</span>
          )}
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Form;
