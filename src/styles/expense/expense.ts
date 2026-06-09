export const expenseStyles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F8F9FC",
  },

  title: {
    textAlign: "center" as const,
    marginBottom: "30px",
    color: "#534AB7",
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
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxSizing: "border-box" as const,
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#534AB7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold" as const,
  },

  recentSection: {
    marginTop: "30px",
  },

  recentHeader: {
    display: "flex" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    marginBottom: "20px",
  },

  recentTitle: {
    fontSize: "22px",
    fontWeight: "bold" as const,
    color: "#534AB7",
  },

  addExpenseBtn: {
    padding: "12px 24px",
    background: "#534AB7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold" as const,
  },

  expenseItem: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: "15px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
  },

  expenseIconCircle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#F4F4FF",
    display: "flex" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    flexShrink: 0,
  },

  expenseIconImg: {
    width: "28px",
    height: "28px",
  },

  expenseInfo: {
    flex: 1,
  },

  expenseName: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#333",
  },

  expenseDate: {
    fontSize: "13px",
    color: "#777",
    marginTop: "4px",
  },

  expenseAmount: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#E74C3C",
    marginTop: "4px",
  },

  bottomNav: {
    position: "fixed" as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-around" as const,
    padding: "12px 0",
    boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
  },

  navItem: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "5px 10px",
  },

  navIcon: {
    width: "24px",
    height: "24px",
    marginBottom: "4px",
  },

  navLabel: {
    fontSize: "12px",
    fontWeight: "500" as const,
  },
};