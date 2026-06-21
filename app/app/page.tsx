export default function HomePage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Barbershop CRM</h1>

      <p>Dashboard MVP</p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            minWidth: "200px",
          }}
        >
          <h3>Total Customer</h3>
          <p>0</p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            minWidth: "200px",
          }}
        >
          <h3>Total Service</h3>
          <p>0</p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            minWidth: "200px",
          }}
        >
          <h3>Total Booking</h3>
          <p>0</p>
        </div>
      </div>
    </main>
  );
}