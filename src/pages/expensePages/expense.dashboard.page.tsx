import { useEffect, useState } from "react";
import { expenseStyles } from "../../styles/expense/expense";
import { getExpenseData } from "../../services/expense/expense";
import { useNavigate } from "react-router";
import dashboardNavItems from "../../utils/dashboardNavItems/dashboadNavItems";

type ExpenseData = {
  budgetAmount: number;
  totalExpense: number;
  remainingAmount: number;
  recentExpenses: RecentExpense[];
};

type RecentExpense = {
  id: string;
  name: string;
  amount: number;
  date: string;
  iconUrl: string;
};

function ExpenseDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState<ExpenseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeNav, setActiveNav] = useState("dashboard");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get userId from localStorage
        // const userId = localStorage.getItem("userId");

        // Parse the full user object
        const userStr = localStorage.getItem("user");
        if (!userStr) throw new Error("User not logged in");

        const user = JSON.parse(userStr);
        const userId = user.userId; // get userId from parsed object

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

  const handleNav = (item: (typeof dashboardNavItems)[0]) => {
    setActiveNav(item.key);
    navigate(item.path);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={expenseStyles.container}>
      <h2 style={expenseStyles.title}>Expense Dashboard</h2>

      {/*  Summary Cards */}
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

      {/* Add Expense + Recent Expenses */}
      <div style={expenseStyles.recentSection}>
        <div style={expenseStyles.recentHeader}>
          <span style={expenseStyles.recentTitle}>Recent Expenses</span>
          <button
            style={expenseStyles.addExpenseBtn}
            onClick={() => navigate("/addExpense")}
          >
            + Add Expense
          </button>
        </div>

        {/* Map your recent expenses here */}
        {data?.recentExpenses.length === 0 ? (
          <p>No recent expenses found.</p>
        ) : (
          data?.recentExpenses.map((expense) => (
            <div key={expense.id} style={expenseStyles.expenseItem}>
              <div style={expenseStyles.expenseIconCircle}>
                <img
                  src={expense.iconUrl}
                  alt={expense.name}
                  style={expenseStyles.expenseIconImg}
                />
              </div>
              <div style={expenseStyles.expenseInfo}>
                <div style={expenseStyles.expenseName}>{expense.name}</div>
                <div style={expenseStyles.expenseDate}>{expense.date}</div>
                <div>
                  <div style={expenseStyles.expenseAmount}>
                    - ₹ {expense.amount}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Botton Navigation */}
      <div style={expenseStyles.bottomNav}>
        {dashboardNavItems.map((item: (typeof dashboardNavItems)[0]) => (
          <button
            key={item.key}
            onClick={() => handleNav(item)}
            style={{
              ...expenseStyles.navItem,
              borderTop:
                activeNav === item.key
                  ? "2px solid #534AB7"
                  : "2px solid transparent",
            }}
          >
            <img
              src={item.icon}
              alt={item.label}
              style={{
                ...expenseStyles.navIcon,
                filter:
                  activeNav === item.key
                    ? "invert(28%) sepia(80%) saturate(500%) hue-rotate(220deg)"
                    : "invert(50%)",
              }}
            />
            <span
              style={{
                ...expenseStyles.navLabel,
                color: activeNav === item.key ? "#534AB7" : "#888",
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExpenseDashboard;
