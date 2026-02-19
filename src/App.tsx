import { Card } from "./components/card";
import "./App.css";
import Examples from "./components/example-flexbox";
import Avatar from "./components/avatar";

function App() {
  return (
    <>
      <Button text="Clique aqui" onClick={() => {}} />
    </>
  );
}

interface ButtonProps {
  text?: string;
  onClick: () => void;
}

function Button({ onClick, text }: ButtonProps) {
  return (
    <button
      onClick={(value) => {
        console.log(value);
        console.log("Botão clicado!");
      }}
      onDoubleClick={() => {
        console.log("Duplo clique!");
      }}
      onMouseEnter={() => {
        console.log("Mouse em cima do botao!");
      }}
      onMouseLeave={() => {
        console.log("Mouse saiu do botao!");
      }}
    >
      {text}
    </button>
  );
}

function App_() {
  return (
    <div>
      <Card title="Perfil">
        <Avatar
          name="infnet2"
          imageUrl="https://cdn-icons-png.flaticon.com/512/147/147142.png"
        />
        <h1>Bem vindo</h1>
      </Card>

      <Examples />
      <Avatar name="infnet" />
    </div>
  );
}

export default App;
<div>Olá</div>;
