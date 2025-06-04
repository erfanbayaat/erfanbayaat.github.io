import React, { useState } from "react";
import Users from "./Users";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";
import "./App.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const filteredUsers = Users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App flex justify-center items-center min-h-screen flex-col bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4">لیست کاربران</h1>

      <input
        type="text"
        placeholder="جستجوی نام..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 rounded border border-gray-400 w-64 text-right"
        dir="rtl" // Added for better RTL support
      />

      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
        <UserList
          users={filteredUsers}
          onUserClick={handleUserClick}
          selectedUser={selectedUser}
        />
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </div>
  );
}

export default App;
