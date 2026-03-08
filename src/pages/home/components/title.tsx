interface TitleProps {
  searchValue: string;
}

function Title({ searchValue }: TitleProps) {
  return (
    <h2>
      {searchValue.length > 0
        ? `Busca realizada: ${searchValue}`
        : "Todas reuniões"}
    </h2>
  );
}

export default Title;