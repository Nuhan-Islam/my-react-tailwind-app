function Quickstart() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Quickstart</h1>
            <p className="text-gray-600">
                Follow these steps to quickly integrate with the Protocol API:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Sign up for an account.</li>
                <li>Generate an API key from the dashboard.</li>
                <li>Make your first API call using the key.</li>
            </ol>
        </div>
    );
}

export default Quickstart;