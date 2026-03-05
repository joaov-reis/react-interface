function EventForm({
  events,
  searchTerm,
}: {
  events: Event[];
  searchTerm: string;
}) {
  const navigate = useNavigate();

  if (events.length === 0) {
    return (
      <p className="text-muted">
        {searchTerm
          ? `Nehum resultado encontrado para "${searchTerm}"`
          : "Nehum evento registrado ainda."}
      </p>
    );
  }

  const handleGoDetails = useCallback((id:string)=>{
    navigate(`details-event/${id}`)
  }, [navigate])

  return (
    <Row>
      {events.map((event) => (
        <Col key={event.id} sm="12" md="6" lg="4" className="mb-4">
          <CardCustom
            description={event.description}
            subtitle={`${formatDate(event.date)} • ${event.category}`}
            title={event.title}
            imageUrl={event.imageUrl}
            primaryAction={{
              text: "Ver detalhes",
              onClick: () => handleGoDetails(event.id),
            }}
            secondaryAction={{
              text: "Inscreva-se",
              onClick: () => {},
            }}
          />
        </Col>
      ))}
    </Row>
  );
}

export default EventList;
