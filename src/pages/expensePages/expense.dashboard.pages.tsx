import { useEffect, useState } from "react";
import { expenseStyles } from "../../styles/expense/expense";
import { getExpenseData } from "../../services/expense/expense";

type ExpenseData = {
  budgetAmount: number;
  totalExpense: number;
  remainingAmount: number;
};

function ExpenseDashboard() {
  const [data, setData] = useState<ExpenseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
        throw new Error("User not logged in");
      }
        const now = new Date();
        const month = now.getMonth() + 1; // 1–12
        const year = now.getFullYear();

        const resData = await getExpenseData(userId, month, year);
        setData(resData);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={expenseStyles.container}>
      <h2>Expense Dashboard</h2>

      <div style={expenseStyles.cardContainer}>
        <div style={expenseStyles.card}>
          <h4>Monthly Budget</h4>
          <p>₹ {data?.budgetAmount}</p>
        </div>

        <div style={expenseStyles.card}>
          <h4>Total Spent</h4>
          <p>₹ {data?.totalExpense}</p>
        </div>

        <div style={expenseStyles.card}>
          <h4>Remaining</h4>
          <p>₹ {data?.remainingAmount}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDashboard;