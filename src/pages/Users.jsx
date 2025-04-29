function Users() {
    const users = [
      { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin' },
      { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
      { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor' },
    ];
  
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Users;