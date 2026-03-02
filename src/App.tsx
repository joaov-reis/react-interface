import { useCallback, useMemo, useState, useRef } from "react";
import "./App.css";

function App_() {
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef(0);

  const [tasks, setTasks] = useState<string[]>([
    "Estudar React",
    "Lavar a louça",
    "Varrer a casa",
  ]);

  const [searchText, setSearchText] = useState("");

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        console.log("Processando tarefa: ", task);
        return task.toLowerCase().includes(searchText.toLowerCase());
      }),
    [searchText, tasks],
  );

  const handleAnything = useCallback(() => {
    console.log(tasks);
  }, [tasks]);

  const handleClick = useCallback(() => {
    inputRef.current?.focus();
    if (inputRef.current) {
      inputRef.current.value = "123";
    }
    renderCount.current++;
  }, [renderCount]);

  return (
    <>
      <p>Renderizações: {renderCount.current}</p>

      <button
        onClick={() => setTasks([...tasks, `Tarefa ${tasks.length + 1}`])}
      >
        Adicionar tarefa
      </button>

      <button onClick={handleAnything}>Executar função</button>
      <button onClick={handleClick}>Dar foco no input</button>

      <div>
        <input
          ref={inputRef}
          type="text"
          value={searchText}
          onChange={({ target: { value } }) => setSearchText(value)}
          placeholder="Pesquisar tarefa"
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

function App() {
  const renderCount = useRef(0);
  renderCount.current++;

  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "2px dashed #e74c3c",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "500px",
      }}
    >
      <h2>Componente Pai</h2>
      <p>
        Renderizações do Pai: <strong>{renderCount.current}</strong>
      </p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{ backgroundColor: "#e74c3c", color: "white" }}
      >
        Atualizar Estado do Pai ({count})
      </button>

      <Child name="Filho A" />
      <Child name="Filho B" />
    </div>
  );
}

const Child = ({ name }: { name: string }) => {
  const renderCount = useRef(0);
  renderCount.current++;

  const [localCount, setLocalCount] = useState<number[]>([]);

  const pares = useMemo(() => {
    const pares = localCount.filter((count) => {
      console.log("Filtrando valor:", count);
      return count % 2 === 0;
    });
    return pares;
  }, [localCount]);

  return (
    <div
      style={{
        border: "2px solid #646cff",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{name}</h3>
      <p>
        Renderizações do Filho: <strong>{renderCount.current}</strong>
      </p>

      <button
        onClick={() =>
          setLocalCount((prev) =>
            prev.concat([(prev[prev.length - 1] || 0) + 1]),
          )
        }
      >
        Atualizar Estado Local ({localCount.toString()})
      </button>
      <p>Números pares: {pares.toString()}</p>

      {/* {localCount.filter((count) => {
        console.log("Filtrando valor:", count);
        return count % 2 === 0;
      })} */}
    </div>
  );
};

export default App;
