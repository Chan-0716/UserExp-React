import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailSignUp from "./pages/userPages/email.signup.page";
import MobileSignup from "./pages/userPages/mobile.signup.page";
import SignIn from "./pages/userPages/signin.page";
import Home from "./pages/userPages/home.page";
import ExpenseDashboard from "./pages/expensePages/expense.dashboard.page";
import AddExpense from "./pages/expensePages/create.expense.page";
import AddBudget from "./pages/expensePages/create.budget.page";
import MonthlyReport from "./pages/expensePages/expense.report.page";
import Profile from "./pages/userPages/profile.page";
import EditProfile from "./pages/userPages/edit.profile.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="/emailSignUp" element={<EmailSignUp />} />
      <Route path="/mobileSignup" element={<MobileSignup />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/expenseDashboard" element={<ExpenseDashboard />} />
      <Route path="/budget" element={<AddBudget />} />
      <Route path="/reports" element={<MonthlyReport />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/addExpense" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;