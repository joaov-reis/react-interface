import { ContainerSearch, InputSearch } from "../styles";

interface SearchBarProps {
  value: string;
  onChange: (newValue: string) => void;
}

function SearchBar({ onChange, value }: SearchBarProps) {
  return (
    <ContainerSearch>
      <InputSearch
        type="text"
        placeholder="Buscar solicitação de reparo modelo ou descrição de defeito..."
        value={value}
        onChange={(e: { target: { value: string; }; }) => onChange(e.target.value)}
      />
    </ContainerSearch>
  );
}

export default SearchBar;