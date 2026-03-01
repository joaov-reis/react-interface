import { useMemo, useState } from "react";
import "./App.css";
import Examples from "./components/example-flexbox";
import Avatar from "./components/avatar";
import { useEffect, useState } from "react";

type Count = number;
type Name = string;
type Show = boolean;

function App() {
  const [count, setCount] = useState<Count>(0);
  const [name, setName] = useState<Name>("");
  const [show, setShow] = useState<Show>(false);
  const [scrollY, setScrollY] = useState<Number>(0);

  // console.log("Componente executado");

  // useEffect(() => {
  //   console.log("Componente construido");
  // }, [name]);

  // useEffect(() => {
  //   if (count % 2 === 0) {
  //     setShow((prev) => !prev);
  //   }
  // }, [count]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && <ShowCount value={count} />}
      <ShowCount value={scrollY} />
      <Button text="Clique aqui" onClick={() => setCount(count! + 1)} />
      <Input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
    </>
  );
}

interface ButtonProps {
  text?: string;
  onClick: () => void;
}

function ShowCount({ value: text }: { value: number }) {
  useEffect(() => {
    console.log("Componente montado");
    return () => console.log("Componente desmontado");
  });
  return <div>{<h1>{text}</h1>}</div>;
}

function Button({ onClick, text }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      // onDoubleClick={() => {
      //   console.log("Duplo clique!");
      // }}
      // onMouseEnter={() => {
      //   console.log("Mouse em cima do botao!");
      // }}
      // onMouseLeave={() => {
      //   console.log("Mouse saiu do botao!");
      // }}
    >
      {text}
    </button>
  );
}

function Input({ onChange, value }: { onChange: any; value: string }) {
  return (
    <input
      type="text"
      placeholder="Digite seu texto"
      name="nome"
      onChange={onChange}
      value={value}
      onKeyDown={({ key }) => {
        // console.log(key)
        // if(key === "Enter"){
        //   alert("Fomulário enviado")
        // }
      }}
      // onKeyUp={(event) => {
      //   console.log(event.key);
      // }}
      // onBlur={(event) => {
      //   console.log(event, "Desfocado");
      // }}
      // onFocus={(event) => {
      //   console.log(event, "Elemento focado");
      // }}
    />
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
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
<div>Olá</div>;
