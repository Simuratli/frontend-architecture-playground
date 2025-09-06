function PrimaryButton({ children, ...props }) {
  return (
    <button style={{ background: "blue", color: "white" }} {...props}>
      {children}
    </button>
  );
}

function DangerButton({ children, ...props }) {
  return (
    <button style={{ background: "red", color: "white" }} {...props}>
      {children}
    </button>
  );
}

function ButtonFactory({ type, children, ...props }) {
  if (type === "primary") return <PrimaryButton {...props}>{children}</PrimaryButton>;
  if (type === "danger") return <DangerButton {...props}>{children}</DangerButton>;
  return <button {...props}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <ButtonFactory type="primary" onClick={() => alert("Kaydedildi!")}>
        Kaydet
      </ButtonFactory>
      <ButtonFactory type="danger" onClick={() => alert("Silindi!")}>
        Sil
      </ButtonFactory>
    </div>
  );
}
