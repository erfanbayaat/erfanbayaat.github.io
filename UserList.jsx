import React from "react";

const UserList = ({ users, onUserClick, selectedUser }) => {
  if (users.length === 0) {
    return <p className="text-red-500 text-center">کاربری پیدا نشد</p>;
  }

  return (
    <ul className="space-y-2 mb-4">
      {users.map((user) => (
        <li
          key={user.id}
          className={`p-2 rounded flex justify-between items-center ${
            selectedUser?.id === user.id ? "bg-gray-200" : "bg-gray-50"
          }`}
        >
          <span>
            {user.name} - {user.job}
          </span>
          <button
            onClick={() => onUserClick(user)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
          >
            اطلاعات بیشتر
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
