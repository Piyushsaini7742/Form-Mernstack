import React, { useState } from 'react';

const GetUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleFetchUser = async () => {
    try {
      const response = await fetch('https://form-mernstack.onrender.com/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setError('');
      } else {
        setUser(null);
        setError(data.message);
      }
    } catch (err) {
      console.error('Error fetching user:', err);
      setError('Something went wrong! Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center border border-gray-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">User Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="border border-gray-300 p-2 w-full mb-3 rounded focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border border-gray-300 p-2 w-full mb-4 rounded focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleFetchUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition"
        >
          Get User
        </button>

        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}

        {user && (
          <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded text-left">
            <h3 className="text-lg font-medium text-gray-700">User Details:</h3>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUser;
