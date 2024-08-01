import './studentDashBoard.css';

function UserProfile() {
  return (
    <div className="stu-dash-profile">
      <h3>Personal Information</h3>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Personal Website" />
      <input type="text" placeholder="LinkedIn" />
      <input type="text" placeholder="Location" />
    </div>
  );
}

export default UserProfile;
