import React from "react";
import { UserProvider } from "./UserContext.js"; // Import the UserProvider
import ProfilePage from "./components/ProfilePage"; // Adjust if needed

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;

