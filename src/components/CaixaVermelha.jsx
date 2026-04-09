export default function CaixaVermelha() {
  return (
    <div style={{ 
      backgroundColor: "red",
      border: "2px solid #ff0000", 
      borderRadius: "10px", 
      margin: "10px auto",
      padding: "10px 20px", 
      color: "white",
      display: "flex",  
      alignItems: "center"
    }}>
      <h1 >
        Caixa de Alerta
      </h1>
    </div>
  );
}