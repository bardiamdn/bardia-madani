import GradientBackground from "@/components/GradientBackground";

export default function Home() {
  return (
    <div>
      <GradientBackground />
      <main style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            color: "#3d3d3d",
            textAlign: "center",
            marginTop: "40vh",
            fontSize: "50px",
            fontWeight: "700",
          }}
        >
          WOWZERZ
        </h1>
      </main>
    </div>
  );
}
