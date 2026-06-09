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
    <h1 style={budgetStyles.title}>Add Budget</h1>

    {/* Budget Form */}
    <div style={budgetStyles.formCard}>
      <h3 style={budgetStyles.sectionTitle}>Budget Information</h3>

      <label style={budgetStyles.label}>Budget Amount</label>
      <input
        type="number"
        style={budgetStyles.input}
        placeholder="Enter budget amount"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />

      <label style={budgetStyles.label}>Select Month</label>
      <input
        type="month"
        style={budgetStyles.input}
        value={monthAndYear}
        onChange={(e) => setMonthAndYear(e.target.value)}
      />
    </div>

    {/* Budget Preview */}
    <div style={budgetStyles.previewCard}>
      <h3 style={budgetStyles.sectionTitle}>Budget Preview</h3>

      <div style={budgetStyles.previewRow}>
        <span>Budget Amount</span>
        <strong>₹ {budget || 0}</strong>
      </div>

      <div style={budgetStyles.previewRow}>
        <span>Selected Month</span>
        <strong>{monthAndYear || "-"}</strong>
      </div>
    </div>

    {/* Action Buttons */}
    <div style={budgetStyles.buttonRow}>
      <button
        style={budgetStyles.cancelButton}
        onClick={() => navigate("/expenseDashboard")}
      >
        Cancel
      </button>

      <button
        style={budgetStyles.submitButton}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Budget"}
      </button>
    </div>
  </div>
);
}

export default AddBudget;
