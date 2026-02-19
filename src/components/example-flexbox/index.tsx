import "./styles.css";

function Examples() {
  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Direction />
      <Justify />
      <Wrap />
      <AlignItems />
    </div>
  );
}

export default Examples;

function Direction() {
  return (
    <div className="direction-column container">
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
    </div>
  );
}

function Justify() {
  return (
    <div
      style={{
        justifyContent: "flex-end",
        gap: 20,
      }}
      className="container"
    >
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
    </div>
  );
}

function Wrap() {
  return (
    <div
      style={{
        // justifyContent: "end",
        gap: 20,
        flexWrap: "wrap",
      }}
      className="container"
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div className="item" key={i}>
          {i}
        </div>
      ))}
    </div>
  );
}

function AlignItems() {
  return (
    <div
      style={{
        gap: 20,
        alignItems: "center",
        justifyContent: 'center'
      }}
      className="container"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <div className="item" key={i}>
          {i}
        </div>
      ))}
    </div>
  );
}