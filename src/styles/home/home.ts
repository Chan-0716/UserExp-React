const HomeStyles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "300px",
    background: "#fff",
    padding: "30px 25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center" as const,
  },
  title: {
    marginBottom: "22px",
  },
  subTitle: {
    marginBottom: "24px",
  },
  primaryBtn: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "100px",
    cursor: "pointer",
    fontSize: "16px",
  },
  secondaryBtn: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "100px",
    cursor: "pointer",
    fontSize: "16px",
  },
  link: { color: 'blue', textDecoration: 'underline', cursor: 'pointer' }
};

export default HomeStyles