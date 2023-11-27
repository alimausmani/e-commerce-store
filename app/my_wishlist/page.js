
import React, { useState, useEffect } from 'react';

const MyWishlist = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users. Please try again later.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Users List</h2>
      <div className="user-list-container">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
            <div className="user-details">
              <strong>{user.name}</strong> - {user.email} - {user.password} -
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
