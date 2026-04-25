import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithMobile, sendOtp } from "../../services/userAuth/auth";
import { authStyles } from "../../styles/userAuth/auth";


function SignIn() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"email" | "mobileNo">("email");

  // Email login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Mobile login state
  const [mobileNo, setMobile] = useState("");
  const [otpCode, setOtp] = useState("");
  const [showOtpScreen, setShowOtpScreen] = useState(false);

  // Loading & error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Email login
  const handleEmailLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await loginWithEmail(email, password);
      console.log("Login response:", res);
      navigate("/expense-dashboard"); // Redirect to dashboard
    } catch (err: any) {
      setError(err.message || "Failed to login with email.");
    } finally {
      setLoading(false);
    }
  };

  // Mobile login: send OTP
  const handleSendOtp = async () => {
    if (!mobileNo.match(/^\d{10}$/)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await sendOtp(mobileNo);
      setShowOtpScreen(true);
    } catch (err: any) {
      setError(err.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Mobile login: verify OTP
  const handleMobileLogin = async () => {
    if (!otpCode) {
      setError("Please enter the OTP.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await loginWithMobile(mobileNo, otpCode);
      console.log("Mobile login response:", res);
      navigate("/expense-dashboard"); // Redirect after OTP login
    } catch (err: any) {
      setError(err.message || "Failed to login with OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={authStyles.container}>
      <div style={authStyles.card}>
        <h2 style={authStyles.title}>Login</h2>

        <div style={authStyles.buttonContainer}>
          <button
            style={{
              ...authStyles.emailButton,
              backgroundColor: mode === "email" ? "#1976d2" : "#2196f3",
            }}
            onClick={() => { setMode("email"); setShowOtpScreen(false); setError(""); }}
          >
            Email
          </button>
          <button
            style={{
              ...authStyles.mobileButton,
              backgroundColor: mode === "mobileNo" ? "#1976d2" : "#1976d2",
            }}
            onClick={() => { setMode("mobileNo"); setError(""); }}
          >
            Mobile
          </button>
        </div>

        {error && <p style={{ color: "red", marginBottom: 10 }}>{error}</p>}

        {mode === "email" && (
          <>
            <input
              style={authStyles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <input
              style={authStyles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <button
              style={authStyles.secondaryBtn}
              onClick={handleEmailLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </>
        )}

        {mode === "mobileNo" && (
          <>
            {!showOtpScreen ? (
              <>
                <input
                  style={authStyles.input}
                  type="text"
                  placeholder="Mobile Number"
                  value={mobileNo}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <br /><br />
                <button
                  style={authStyles.button}
                  onClick={handleSendOtp}
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              </>
            ) : (
              <>
                <p>OTP sent to {mobileNo}</p>
                <input
                  style={authStyles.input}
                  type="text"
                  placeholder="Enter OTP"
                  value={otpCode}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <br /><br />
                <div style={authStyles.resendButtonContainer}>
                  <button
                    style={authStyles.resendButton}
                    onClick={handleSendOtp}
                    disabled={loading}
                  >
                    {loading ? "Resending..." : "Resend OTP"}
                  </button>
                </div>

                <button
                  style={authStyles.secondaryBtn}
                  onClick={handleMobileLogin}
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify & Login"}
                </button>
              </>
            )}
          </>
        )}
        <p>
          Back to?{" "}
          <span
            style={authStyles.link}
            onClick={() => navigate('/')}
          >
            SignUp
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;