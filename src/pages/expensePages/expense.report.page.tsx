import { useEffect, useState } from "react";
import { reportStyles } from "../../styles/report/report";
import { fetchExpenseReport } from "../../services/expense/expense";

type ReportData = {
  budgetAmount: string;
  totalExpense: number;
  remainingAmount: number;
  expensesByCategory: {
    id: number;
    name: string;
    totalAmount: number;
    subCategories: {
      id: number;
      name: string;
      totalAmount: number;
    }[];
  }[];
};

function MonthlyReport() {
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReport = async () => {
      try {
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
        const reportData = await fetchExpenseReport(userId, month, year);
        console.log(reportData.data, "reponse");
        
       setReport(reportData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  },  []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!report) {
    return <h2>No Report Found</h2>;
  }

  const budgetAmount = Number(report.budgetAmount);
  const progressPercentage =
    budgetAmount > 0 ? (report.totalExpense / budgetAmount) * 100 : 0;

  return (
    <div style={reportStyles.container}>
      <h1 style={reportStyles.heading}>Monthly Expense Report</h1>

      {/* Summary Cards */}
      <div style={reportStyles.cardContainer}>
        <div style={reportStyles.card}>
          <h3>Budget</h3>
          <p>₹ {report.budgetAmount}</p>
        </div>

        <div style={reportStyles.card}>
          <h3>Total Expense</h3>
          <p>₹ {report.totalExpense}</p>
        </div>

        <div style={reportStyles.card}>
          <h3>Remaining</h3>
          <p>₹ {report.remainingAmount}</p>
        </div>
      </div>

      {/* Budget Progress */}
      <div style={reportStyles.progressSection}>
        <h2>Budget Usage</h2>

        <div style={reportStyles.progressBar}>
          <div
            style={{
              ...reportStyles.progressFill,
              width: `${progressPercentage}%`,
            }}
          />
        </div>

        <p>
          ₹ {report.totalExpense} / ₹ {report.budgetAmount}
        </p>
      </div>

      {/* Category Summary */}
      <div style={reportStyles.section}>
        <h2>Category Summary</h2>

        <table style={reportStyles.table}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Total Amount</th>
            </tr>
          </thead>

          <tbody>
            {report.expensesByCategory.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>₹ {category.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Category Details */}
      <div style={reportStyles.section}>
        <h2>Detailed Breakdown</h2>

        {report.expensesByCategory.map((category) => (
          <div key={category.id} style={reportStyles.categoryCard}>
            <h3>
              {category.name} - ₹ {category.totalAmount}
            </h3>

            <table style={reportStyles.table}>
              <thead>
                <tr>
                  <th>Sub Category</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {category.subCategories.map((sub) => (
                  <tr key={sub.id}>
                    <td>{sub.name}</td>
                    <td>₹ {sub.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyReport;
