export const budgetStyles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    color: "#534AB7",
    marginBottom: "30px",
    textAlign: "center" as const,
  },

  formCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: "25px",
  },

  sectionTitle: {
    marginBottom: "20px",
    color: "#333",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold" as const,
    color: "#555",
  },

  input: {
    width: "100%",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "15px",
    boxSizing: "border-box" as const,
  },

  previewCard: {
    background: "#F8F9FC",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #ddd",
  },

  previewRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "16px",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "15px",
    marginTop: "30px",
  },

  cancelButton: {
    padding: "12px 24px",
    background: "#fff",
    color: "#534AB7",
    border: "1px solid #534AB7",
    borderRadius: "8px",
    cursor: "pointer",
  },

  submitButton: {
    padding: "12px 24px",
    background: "#534AB7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};