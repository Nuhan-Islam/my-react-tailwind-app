function Home() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
            <p className="text-3xl text-green-600">$56,789</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Active Sessions</h2>
            <p className="text-3xl text-purple-600">456</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;