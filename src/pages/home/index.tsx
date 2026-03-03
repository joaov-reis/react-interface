import { Container } from "reactstrap";
import { ContainerSearch, InputSearch } from "./styles";
import { Row, Col } from "reactstrap";
import { useEvents } from "../../hooks/useEvents";
import { useMemo, useState } from "react";

function Home() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState<string>("");

  const filteredEvents = useMemo(() => {
    const searchLower = searchText.toLowerCase();

    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower),
    );
  }, [events, searchText]);

  return (
    <Container>
      <ContainerSearch>
        <InputSearch
          type="text"
          placeholder="Buscar eventos por título ou descrição..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </ContainerSearch>
      <h2>
        {searchText.length > 0
          ? `Busca realizada: ${searchText}`
          : "Todos os eventos"}
      </h2>

      <Row>
        {filteredEvents.length === 0 ? (
          <Col>
            <p className="text-muted">Nenhum evento encontrado</p>
          </Col>
        ) : (
          filteredEvents.map((event) => (
            <Col key={event.id} sm="12" md="6" lg="4" className="mb-4">
              {event.title}
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Home;
