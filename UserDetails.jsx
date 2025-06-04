import React from "react";

const UserDetails = ({ user }) => {
  if (!user) {
    return <p className="text-center text-gray-600">کاربری انتخاب نشده است.</p>;
  }

  return (
    <div className="border-t pt-4 mt-4 text-right">
      <h2 className="text-lg font-semibold mb-2">اطلاعات کاربر</h2>
      <p>👤 نام: {user.name}</p>
      <p>🎂 سن: {user.age}</p>
      <p>💼 شغل: {user.job}</p>
      <p>📍 شهر: {user.city}</p>
    </div>
  );
};

export default UserDetails;
