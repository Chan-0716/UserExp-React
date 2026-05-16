import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailSignUp from "./pages/userPages/email.signup.page";
import MobileSignup from "./pages/userPages/mobile.signup.page";
import SignIn from "./pages/userPages/signin.page";
import Home from "./pages/userPages/home.page";
import ExpenseDashboard from "./pages/expensePages/expense.dashboard.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="/emailSignUp" element={<EmailSignUp />} />
      <Route path="/mobileSignup" element={<MobileSignup />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/expenseDashboard" element={<ExpenseDashboard />} />
      {/* <Route path="/reports" element={<Reports />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addExpense" element={<AddExpense />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;