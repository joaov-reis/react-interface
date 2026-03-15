interface TitleProps {
  searchValue: string;
}

function Title({ searchValue }: TitleProps) {
  return (
    <h2 style={{ textAlign: "center" }}>
      {searchValue.length > 0
        ? `Busca realizada: ${searchValue}`
        : "Suas solicitações de reparo"}
    </h2>
  );
}

export default Title;
