export const profileStyles = {
  container: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    minHeight: "100vh",
    background: "#F8F7FF",
    fontFamily: "Arial, sans-serif",
  },

  heading: {
    textAlign: "center" as const,
    color: "#534AB7",
    fontSize: "32px",
    fontWeight: "700" as const,
    marginBottom: "30px",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    flex: 1,
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center" as const,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },

  progressSection: {
    marginBottom: "30px",
  },

  progressBar: {
    width: "100%",
    height: "20px",
    background: "#eee",
    borderRadius: "10px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "#534AB7",
  },

  label: {
    color: "#534AB7",
    fontWeight: "600" as const,
    marginBottom: "6px",
  },

  section: {
    marginTop: "30px",
  },

  sectionTitle: {
    color: "#534AB7",
    marginBottom: "20px",
    borderBottom: "2px solid #E3E0FF",
    paddingBottom: "10px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginTop: "10px",
  },

  categoryCard: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #D4D0FF",
    borderRadius: "10px",
    fontSize: "14px",
    boxSizing: "border-box" as const,
    outline: "none",
  },

  textArea: {
    width: "100%",
    minHeight: "100px",
    padding: "12px 14px",
    border: "1px solid #D4D0FF",
    borderRadius: "10px",
    resize: "vertical" as const,
    fontSize: "14px",
    boxSizing: "border-box" as const,
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center" as const,
    gap: "16px",
    marginTop: "30px",
    flexWrap: "wrap" as const,
  },

  editButton: {
    minWidth: "180px",
    padding: "12px 24px",
    background: "#534AB7",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600" as const,
    boxShadow: "0 4px 12px rgba(83,74,183,0.25)",
  },

  secondaryButton: {
    minWidth: "180px",
    padding: "12px 24px",
    background: "#fff",
    color: "#534AB7",
    border: "1px solid #534AB7",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600" as const,
  },

  editProfileContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    width: "100%",
    marginTop: "20px",
  },

  profileCard: {
    background: "#fff",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid #E3E0FF",
    boxShadow: "0 4px 15px rgba(83, 74, 183, 0.08)",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column" as const,
    marginBottom: "18px",
  },
};
