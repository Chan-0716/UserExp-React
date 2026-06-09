export const authStyles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "420px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center" as const,
    color: "#534AB7",
    marginBottom: "25px",
    fontSize: "28px",
    fontWeight: "bold" as const,
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    boxSizing: "border-box" as const,
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#534AB7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold" as const,
    marginTop: "10px",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center" as const,
    gap: "15px",
    marginBottom: "20px",
  },

  emailButton: {
    padding: "12px 24px",
    background: "#534AB7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold" as const,
  },

  mobileButton: {
    padding: "12px 24px",
    background: "#fff",
    color: "#534AB7",
    border: "1px solid #534AB7",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold" as const,
  },

  resendButtonContainer: {
    display: "flex",
    justifyContent: "flex-end" as const,
    marginTop: "10px",
    marginBottom: "20px",
  },

  resendButton: {
    padding: "10px 20px",
    background: "#fff",
    color: "#534AB7",
    border: "1px solid #534AB7",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold" as const,
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
    marginBottom: "15px",
  },

  link: {
    color: "#534AB7",
    cursor: "pointer",
    fontWeight: "bold" as const,
    textDecoration: "none",
  },
};