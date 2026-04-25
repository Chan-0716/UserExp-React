import { useState } from "react";
import { sendOtp, signUpWithMobile, verifyOtp } from "../../services/userAuth/auth";
import { authStyles } from "../../styles/userAuth/auth";


function MobileSignup() {
  const [step, setStep] = useState(1);
  const [mobileNo, setMobile] = useState("");
  const [otpCode, setOtp] = useState("");
  const [form, setForm] = useState({ dob: "", address: "", location: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await sendOtp(mobileNo);
      alert("OTP sent successfully!");
      setStep(2);
    } catch (err: any) {
      alert(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      await verifyOtp(mobileNo, otpCode);
      alert("OTP verified!");
      setStep(3);
    } catch (err: any) {
      alert(err.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = { mobileNo: mobileNo, ...form };
      await signUpWithMobile(payload);
      alert("Account created successfully!");
    } catch (err: any) {
      alert(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={authStyles.container}>
      <div style={authStyles.card}>
        {step === 1 && (
          <>
            <h2 style={authStyles.title}>Enter Mobile</h2>
            <input style={authStyles.input} placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} />
            <button style={authStyles.button} onClick={handleSendOtp} disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={authStyles.title}>Enter OTP</h2>
            <input style={authStyles.input} placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
            <button style={authStyles.button} onClick={handleVerifyOtp} disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 style={authStyles.title}>Complete Profile</h2>
            <input style={authStyles.input} name="dob" type="date" onChange={handleChange} />
            <input style={authStyles.input} name="address" placeholder="Address" onChange={handleChange} />
            <input style={authStyles.input} name="location" placeholder="Location" onChange={handleChange} />
            <button style={authStyles.button} onClick={handleSubmit} disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MobileSignup;