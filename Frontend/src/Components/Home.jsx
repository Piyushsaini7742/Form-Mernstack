import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
                <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                    User Management Portal
                </h1>
                <p className="text-md text-gray-700 mb-5">
                    Register and access user data with ease.
                </p>

                <div className="flex flex-col gap-4">
                    <Link
                        to="/add"
                        className="px-5 py-3 bg-indigo-500 text-white rounded-md text-lg font-medium hover:bg-indigo-600"
                    >
                        Register
                    </Link>
                    <Link
                        to="/get"
                        className="px-5 py-3 bg-teal-500 text-white rounded-md text-lg font-medium hover:bg-teal-600"
                    >
                        Retrieve Data
                    </Link>
                </div>
            </div>
        </div>
    );
}