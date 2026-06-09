export const reportStyles = {
  container: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },

  heading: {
    textAlign: "center" as const,
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

  section: {
    marginTop: "30px",
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
};
