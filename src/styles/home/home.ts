const HomeStyles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "400px",
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center" as const,
    border: "1px solid #ddd",
  },

  title: {
    color: "#534AB7",
    marginBottom: "10px",
    fontSize: "32px",
    fontWeight: "bold" as const,
  },

  subTitle: {
    color: "#666",
    marginBottom: "30px",
    fontWeight: "normal" as const,
  },

  primaryBtn: {
    width: "100%",
    padding: "14px",
    background: "#534AB7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold" as const,
    marginBottom: "15px",
  },

  secondaryBtn: {
    width: "100%",
    padding: "14px",
    background: "#fff",
    color: "#534AB7",
    border: "1px solid #534AB7",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold" as const,
    marginBottom: "20px",
  },

  link: {
    color: "#534AB7",
    cursor: "pointer",
    fontWeight: "bold" as const,
    textDecoration: "none",
  },

  loginText: {
  textAlign: "center" as const,
  marginTop: "15px",
  color: "#666",
  fontSize: "14px",
},

};

export default HomeStyles;