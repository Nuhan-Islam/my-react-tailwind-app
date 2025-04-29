function SDKs() {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Using an SDK</h1>
        <p className="text-gray-600">
          If you use one of our official SDKs, you won’t have to worry about any of the above — fetch your access token from the Protocol dashboard under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes.
        </p>
        <p>
          <a href="#" className="text-green-600 hover:underline">
            Check out the list of first-party SDKs →
          </a>
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">Was this page helpful?</h2>
        <div className="flex space-x-4">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
            Yes
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
            No
          </button>
        </div>
      </div>
    );
  }
  
  export default SDKs;