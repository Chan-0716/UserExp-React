import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileStyles } from "../../styles/profile/profile";
import { updateUserProfile } from "../../services/userAuth/auth";

function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    mobileNo: "",
    address: "",
    location: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const editProfile = async () => {
      try {
        setLoading(true);

        // parse the fulle use object
        const userDetails = localStorage.getItem("user");
        if (!userDetails) throw new Error("User details npt found");
        const user = JSON.parse(userDetails);
        setForm({
          name: user.name,
          email: user.name,
          dob: user.dob,
          mobileNo: user.mobileNo,
          address: user.address,
          location: user.location,
        });
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    editProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const userDetails = localStorage.getItem("user");

      if (!userDetails) {
        throw new Error("User not found");
      }

      const user = JSON.parse(userDetails);

      // API Call          
      await updateUserProfile(user.userId, form);

      // Update localStorage with latest data
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          ...form,
        }),
      );

      alert("Profile updated successfully");

      navigate("/profile");
    } catch (error: any) {
      alert(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={profileStyles.container}>
      <h1 style={profileStyles.heading}>Edit Profile</h1>

      <div style={profileStyles.editProfileContainer}>
        {/* Left Section */}
        <div style={profileStyles.profileCard}>
          <h3 style={profileStyles.sectionTitle}>Profile Information</h3>

          <div style={profileStyles.formGroup}>
            <label style={profileStyles.label}>Name</label>
            <input
              style={profileStyles.input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div style={profileStyles.formGroup}>
            <label style={profileStyles.label}>Email</label>
            <input
              style={profileStyles.input}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div style={profileStyles.formGroup}>
            <label style={profileStyles.label}>Mobile Number</label>
            <input
              style={profileStyles.input}
              type="text"
              name="mobileNo"
              value={form.mobileNo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Right Section */}
        <div style={profileStyles.profileCard}>
          <h3 style={profileStyles.sectionTitle}>Personal Information</h3>

          <div style={profileStyles.formGroup}>
            <label style={profileStyles.label}>Date of Birth</label>
            <input
              style={profileStyles.input}
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
          </div>

          <div style={profileStyles.formGroup}>
            <label style={profileStyles.label}>Address</label>
            <textarea
              style={profileStyles.textArea}
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div style={profileStyles.formGroup}>
            <label style={profileStyles.label}>Location</label>
            <input
              style={profileStyles.input}
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div style={profileStyles.buttonContainer}>
        <button
          style={profileStyles.editButton}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>

        <button
          style={profileStyles.secondaryButton}
          onClick={() => navigate("/profile")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
