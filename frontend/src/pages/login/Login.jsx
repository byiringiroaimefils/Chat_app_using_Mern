import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-50'>
			<div className='w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-lg'>
				<div className='text-center'>
					<h2 className='mt-6 text-3xl font-bold text-gray-900'>Welcome back</h2>
					<p className='mt-2 text-sm text-gray-600'>
						Don't have an account?{" "}
						<Link to='/signup' className='font-medium text-blue-600 hover:text-blue-500'>
							Sign up
						</Link>
					</p>
				</div>

				<form onSubmit={handleSubmit} className='mt-8 space-y-6'>
					<div className='space-y-4'>
						<div>
							<label htmlFor='username' className='block text-sm font-medium text-gray-700'>
								Username
							</label>
							<input
								type='text'
								id='username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
								placeholder='Enter your username'
								required
							/>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
								Password
							</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
								placeholder='Enter your password'
								required
							/>
						</div>
					</div>

					<button
						type='submit'
						className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
						disabled={loading}
					>
						{loading ? (
							<div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
						) : (
							"Sign in"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;