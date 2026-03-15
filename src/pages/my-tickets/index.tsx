import { Container } from "reactstrap";
import { useEvents } from "../../hooks/useEvents";
import { useMemo, useState } from "react";
import SearchBar from "./components/search-bar";
import Title from "./components/title";
import EventList from "./components/event-list";

function MyTickets() {
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
      <SearchBar value={searchText} onChange={setSearchText} />
      <Title searchValue={searchText} />
      <EventList events={filteredEvents} searchTerm={searchText}/>
    </Container>
  );
}

export default MyTickets;
