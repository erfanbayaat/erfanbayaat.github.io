import React from 'react'

const UserCard = ({user}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem 0', borderRadius: '8px' }}>
      <ul>
        <li>شماره : {user.id}</li>
        <li>نام : {user.name}</li>
        <li>سن : {user.age}</li>
        <li>شغل : {user.job}</li>
        <li>محل تولد : {user.city}</li>
      </ul>
    </div>
  )
}

export default UserCard
