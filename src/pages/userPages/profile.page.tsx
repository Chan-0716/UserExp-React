import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileStyles } from "../../styles/profile/profile";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
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
    const fetchProfile = async () => {
      try {
        setLoading(true);

        // Parse the full user object
        const userDetails = localStorage.getItem("user");
        if (!userDetails) throw new Error("User details not found");
        const user = JSON.parse(userDetails);
        setProfile({
          name: user.name,
          email: user.email,
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
    fetchProfile();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={profileStyles.container}>
      <h2 style={profileStyles.heading}>USER PROFILE</h2>

      {/* Profile Information */}
      <div style={profileStyles.cardContainer}>
        <div style={profileStyles.card}>
          <h2 style={profileStyles.heading}>Profile Information</h2>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.mobileNo}</p>
        </div>
      </div>

      {/* Personal Information */}
      <div style={profileStyles.section}>
        <h2>Personal Information</h2>
        <div style={profileStyles.categoryCard}>
          <p>
            <strong>Date of Birth:</strong> {profile.dob}
          </p>

          <p>
            <strong>Address:</strong> {profile.address}
          </p>

          <p>
            <strong>Location:</strong> {profile.location}
          </p>
        </div>
      </div>

      {/* Account Information */}
      <div style={profileStyles.section}>
        <h2>Account Information</h2>

        <div style={profileStyles.categoryCard}>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>

          <p>
            <strong>Password:</strong> ********
          </p>
        </div>
      </div>

      <div style={profileStyles.buttonContainer}>
        <button
          style={profileStyles.editButton}
          onClick={() => navigate("/editProfile")}
        >
          Edit Profile
        </button>

        <button
          style={profileStyles.secondaryButton}
          onClick={() => navigate("/changePassword")}
        >
          Change Password
        </button>
      </div>
    </div>
  );
}

export default Profile;
