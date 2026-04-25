import { useNavigate } from "react-router-dom";
import HomeStyles from "../../styles/home/home";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={HomeStyles.container}>
      <div style={HomeStyles.card}>
        <h2 style={HomeStyles.title}>Welcome to Spendio</h2>
        <h4 style={HomeStyles.subTitle}>Track your spending easily</h4>

        <button
          style={HomeStyles.primaryBtn}
          onClick={() => navigate("/email-signup")}
        >
          Continue with Email
        </button>

        <button
          style={HomeStyles.secondaryBtn}
          onClick={() => navigate("/mobile-signup")}
        >
          Continue with Mobile
        </button>

        <p>
      Already have an account?{" "}
      <span
        style={HomeStyles.link}
        onClick={() => navigate('./signIn')}
      >
        Login
      </span>
    </p>
      </div>
    </div>
  );
}

export default Home;