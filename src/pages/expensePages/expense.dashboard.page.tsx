import { useEffect, useState } from "react";
import { expenseStyles } from "../../styles/expense/expense";
import { getExpenses } from "../../services/expense/expense";
import { useNavigate } from "react-router";
import dashboardNavItems from "../../utils/dashboardNavItems/dashboadNavItems";

type RecentExpenses = {
  id: string;
  categoryId: number;
  subCategoryId: number;
  category: {
    name: string;
    icon: string;
    color: string;
  };
  subCategory: {
    name: string;
    icon: string;
    color: string;
  };
  amount: number;
  description: string;
  createdAt: string;
  paymentMethod: string;
};

function ExpenseDashboard() {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState<RecentExpenses[]>([]);

  const [summary, setSummary] = useState({
    budgetAmount: 0,
    totalExpense: 0,
    remainingAmount: 0,
  });
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [error, setError] = useState("");
  const [activeNav, setActiveNav] = useState("dashboard");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get userId from localStorage
        // const userId = localStorage.getItem("userId");

        if (loading) return;
        setLoading(true);

        // Parse the full user object
        const userStr = localStorage.getItem("user");
        if (!userStr) throw new Error("User not logged in");

        const user = JSON.parse(userStr);
        const userId = user.userId; // get userId from parsed object

        const now = new Date();
        const month = now.getMonth() + 1; // 1–12
        const year = now.getFullYear();

        const resData = await getExpenses(userId, month, year, page);

        // Set summary data only on first page load
        if (page === 1) {
          setSummary({
            budgetAmount: resData.budgetAmount,
            totalExpense: resData.totalExpense,
            remainingAmount: resData.remainingAmount,
          });
        }

        // Append new expenses to existing list
        setExpenses((prev) => {
          const newExpenses = resData.recentExpenses || [];

          return [
            ...prev,
            ...newExpenses.filter(
              (expense: RecentExpenses) =>
                !prev.some((item) => item.id === expense.id),
            ),
          ];
        });

        // Stop pagination if no more data
        if ((resData.recentExpenses || []).length < limit) {
          setHasMore(false);
        }
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Near bottom of page, load more
      if (scrollTop + windowHeight >= fullHeight - 100 && hasMore && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);

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
          <p>₹ {summary?.budgetAmount}</p>
        </div>

        <div style={expenseStyles.card}>
          <h4>Total Spent</h4>
          <p>₹ {summary?.totalExpense}</p>
        </div>

        <div style={expenseStyles.card}>
          <h4>Remaining</h4>
          <p>₹ {summary?.remainingAmount}</p>
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
        {expenses?.length === 0 ? (
          <p>No recent expenses found.</p>
        ) : (
          expenses?.map((expense) => (
            <div key={expense.id} style={expenseStyles.expenseItem}>
              {/* Category Image */}
              <div style={expenseStyles.expenseIconCircle}>
                <img
                  src={expense.category.icon}
                  alt={expense.category.name}
                  style={expenseStyles.expenseIconImg}
                />
              </div>

              {/* Expense Info */}
              <div style={expenseStyles.expenseInfo}>
                {/* Category Name */}
                <div style={expenseStyles.expenseDate}>
                  {expense.category.name}
                </div>

                {/* SubCategory Name */}
                <div style={expenseStyles.expenseName}>
                  {expense.subCategory.name}
                </div>

                {/* Date */}
                <div style={expenseStyles.expenseDate}>
                  {new Date(expense.createdAt).toLocaleDateString()}
                </div>

                {/* Amount */}
                <div style={expenseStyles.expenseAmount}>
                  - ₹ {expense.amount}
                </div>
              </div>

              {/* SubCategory Image */}
              <div style={expenseStyles.expenseIconCircle}>
                <img
                  src={expense.subCategory.icon}
                  alt={expense.subCategory.name}
                  style={expenseStyles.expenseIconImg}
                />
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
