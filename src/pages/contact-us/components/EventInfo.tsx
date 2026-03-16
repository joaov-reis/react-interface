import { Button } from "reactstrap";
import { InfoContainer } from "./styles";

interface ContactCardProps {
  onBack: () => void;
}

function ContactCard({ onBack }: ContactCardProps) {
  return (
    <InfoContainer>
      <div className="mt-3">
        <h4>Entre em contato através dos nossos principais canais:</h4>
        <p className="lead">Telefone: +55 (11) 1111-4444</p>
        <p className="lead">Email: assistencia@mail.com.br</p>
        <p className="lead">WhatsApp: (11) 94444-8888</p>
      </div>

      <div className="d-flex gap-3 mt-5">
        <Button outline color="secondary" size="lg" onClick={onBack}>
          Voltar
        </Button>
      </div>
    </InfoContainer>
  );
}

export default ContactCard;
