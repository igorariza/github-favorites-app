import React from "react";
import useAuth from "../../hooks/useAuth";
import RepositoriesList from "../Repositories/RepositoriesList";

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      {user ? (
        <div>
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
          <RepositoriesList />
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default ProfilePage;