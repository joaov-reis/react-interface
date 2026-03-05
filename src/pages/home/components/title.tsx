interface TitleProps {
  searchValue: string;
}

function Title({ searchValue }: TitleProps) {
  return (
    <h2>
      {searchValue.length > 0
        ? `Busca realizada: ${searchValue}`
        : "Todos os eventos"}
    </h2>
  );
}

export default Title;