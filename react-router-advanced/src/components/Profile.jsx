import { Routes, Route, Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Render nested routes */}
    </div>
  );
}

function ProfileDetails() {
  return <h3>Profile Details</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings</h3>;
}

export { Profile, ProfileDetails, ProfileSettings };
export default Profile;
