import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<string[]>([
    "Estudar React",
    "Lavar a louça",
    "Varrer a casa",
  ]);

  const [searchText, setSearchText] = useState("");

  const filteredTasks = useMemo (() => tasks.filter((task) => {
    console.log("Processando tarefa: ", task);
    return task.toLowerCase().includes(searchText.toLowerCase());
  }), [searchText, tasks]);

  return (
    <>
      <div>
        <input
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

export default App;
