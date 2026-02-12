import "./App.css";

function App() {
  return (
    <>
      <p
        style={{
          backgroundColor: "white",
          paddingTop: 20,
          margin: 20,
        }}
      >
        Olá
      </p>
      <Welcome bgColor="blue" />
      <Button
        title="Clique aqui"
        // isDisabled
        onClick={() => {
          alert("Botão clicado!!!");
          console.log("Mensagem no console");
        }}
        version={1}
        // size={2}
        // obj={{
        //   chave: "valor",
        // }}
        // lista={[1, 2, 3]}
      />

      <Button
        // title="Clique aqui"
        isDisabled
        onClick={() => {}}
      />

      <Card title="Titulo do card">
        <div>Corpo do card</div>
      </Card>
    </>
  );
}

export default App;

const Welcome = ({
  bgColor
}: {
  bgColor?: string
}) => {
  const mensagem = "Olá, mundo!";
  const horaAtual = new Date().toLocaleTimeString();
  return (
    <div
      style={{
        backgroundColor: bgColor || "green",
      }}
    >
      <h1>
        {mensagem}
        <br /> Agora são {horaAtual}
      </h1>
      <p>{10 + 5}</p>
    </div>
  );
};

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  onClick: () => void;
  version?: 1 | 2 | "3";
}

function Button({
  onClick,
  title = "Titulo padrão",
  isDisabled = false,
}: ButtonProps) {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {title}
    </button>
  );
}

interface CardProps {
  title: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
