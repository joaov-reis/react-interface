import { Col, Row } from "reactstrap";
import CardCustom from "../../../components/CardCustom";
import type { EventWithId } from "../../../types";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { formatDate } from "../../../utils/format-date";

function EventList({
  events,
  searchTerm,
}: {
  events: EventWithId[];
  searchTerm: string;
}) {
  const navigate = useNavigate();

  const handleGoDetails = useCallback(
    (id: string) => {
      navigate(`my-tickets-details/${id}`);
    },
    [navigate],
  );

  if (events.length === 0) {
    return (
      <p className="text-muted">
        {searchTerm
          ? `Nehum reparo encontrada para "${searchTerm}"`
          : "Nehuma solicitação de reparo registrada."}
      </p>
    );
  }

  return (
    <Row>
      {events.map((event) => (
        <Col key={event.id} sm="12" md="6" lg="4" className="mb-4">
          <CardCustom
            category={event.category}
            description={event.description}
            subtitle={`${formatDate(event.date)} • ${event.category.name}`}
            title={event.title}
            imageUrl={event.imageUrl || undefined}
            primaryAction={{
              text: "Ver detalhes",
              onClick: () => handleGoDetails(event.id),
            }}
          />
        </Col>
      ))}
    </Row>
  );
}

export default EventList;
