import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {user?.firstName}!</h1>
        <p className="text-gray-600 mb-6">You're now logged in to your account.</p>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Information:</h2>
          <p className="text-gray-600"><span className="font-medium">Name:</span> {user?.firstName} {user?.lastName}</p>
          <p className="text-gray-600"><span className="font-medium">Email:</span> {user?.email}</p>
          <p className="text-gray-600 text-sm mt-2">
            <span className="font-medium">Joined:</span> {new Date(user?.createdAt).toLocaleDateString()}
          </p>
        </div>

        <button
          onClick={logout}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;