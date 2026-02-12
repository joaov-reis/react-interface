import { Card } from "./components/Card";
import "./App.css";
import Examples from "./components/ExampleFlexbox";
import Avatar from "./components/Avatar";

function App() {
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
