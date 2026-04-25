import { useState } from "react";
import { signUpWithEmail } from "../../services/userAuth/auth";
import { authStyles } from "../../styles/userAuth/auth";

function EmailSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await signUpWithEmail(form);
      alert("Account created successfully!");
      console.log(result);
    } catch (err: any) {
      alert(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={authStyles.container}>
      <div style={authStyles.card}>
        <h2 style={authStyles.title}>Create Account</h2>

        <input style={authStyles.input} name="name" placeholder="Name" onChange={handleChange} />
        <input style={authStyles.input} name="email" placeholder="Email" onChange={handleChange} />
        <input style={authStyles.input} name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input style={authStyles.input} name="dob" type="date" onChange={handleChange} />
        <input style={authStyles.input} name="address" placeholder="Address" onChange={handleChange} />
        <input style={authStyles.input} name="location" placeholder="Location" onChange={handleChange} />

        <button style={authStyles.button} onClick={handleSubmit} disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>
      </div>
    </div>
  );
}

export default EmailSignup;