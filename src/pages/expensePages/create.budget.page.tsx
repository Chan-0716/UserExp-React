import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { budgetStyles } from "../../styles/budget/budget";
import { createBudget } from "../../services/expense/expense";

function AddBudget() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState(0);
  const [monthAndYear, setMonthAndYear] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        throw new Error("User not logged in");
      }
      const user = JSON.parse(userStr);

      const [year, month] = monthAndYear.split("-").map(Number);
      const budgetPayload = {
        budgetAmount: budget,
        month,
        year,
      };      
      await createBudget(user.userId, budgetPayload);
      navigate("/expenseDashboard");
    } catch (err: any) {
      alert(err.message || "Budget creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={budgetStyles.container}>
      <div style={budgetStyles.card}>
        <h2 style={budgetStyles.title}>Add Budget</h2>

        <div style={budgetStyles.buttonContainer}>
          <input
            style={budgetStyles.input}
            placeholder="budget ammount"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <br />
          <br />
          <input
            type="month"
            style={budgetStyles.input}
            placeholder="month and year"
            value={monthAndYear}
            onChange={(e) => setMonthAndYear(e.target.value)}
          />
          <br />
          <br />
          <button
            style={budgetStyles.submitButton}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submiting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBudget;
