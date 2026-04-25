import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailSignUp from "./pages/userPages/email.signup.page";
import MobileSignup from "./pages/userPages/mobile.signup.page";
import SignIn from "./pages/userPages/signin.page";
import Home from "./pages/userPages/home.page";
import ExpenseDashboard from "./pages/expensePages/expense.dashboard.pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="/email-signup" element={<EmailSignUp />} />
      <Route path="/mobile-signup" element={<MobileSignup />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/expense-dashboard" element={<ExpenseDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;