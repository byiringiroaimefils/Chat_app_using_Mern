import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12'>
			<div className='w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-lg'>
				<div className='text-center'>
					<h2 className='mt-6 text-3xl font-bold text-gray-900'>Create an account</h2>
					<p className='mt-2 text-sm text-gray-600'>
						Already have an account?{" "}
						<Link to='/login' className='font-medium text-blue-600 hover:text-blue-500'>
							Sign in
						</Link>
					</p>
				</div>

				<form onSubmit={handleSubmit} className='mt-8 space-y-6'>
					<div className='space-y-4'>
						<div>
							<label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>
								Full Name
							</label>
							<input
								type='text'
								id='fullName'
								value={inputs.fullName}
								onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
								className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
								placeholder='Enter your full name'
								required
							/>
						</div>

						<div>
							<label htmlFor='username' className='block text-sm font-medium text-gray-700'>
								Username
							</label>
							<input
								type='text'
								id='username'
								value={inputs.username}
								onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
								className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
								placeholder='Choose a username'
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
								value={inputs.password}
								onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
								className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
								placeholder='Choose a password'
								required
							/>
						</div>

						<div>
							<label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
								Confirm Password
							</label>
							<input
								type='password'
								id='confirmPassword'
								value={inputs.confirmPassword}
								onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
								className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
								placeholder='Confirm your password'
								required
							/>
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>Gender</label>
							<div className='flex gap-4'>
								<label className='flex items-center gap-1 text-sm text-gray-700 cursor-pointer'>
									<input
										type='radio'
										name='gender'
										value='male'
										onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
										className='text-blue-600 focus:ring-blue-500'
									/>
									Male
								</label>
								<label className='flex items-center gap-1 text-sm text-gray-700 cursor-pointer'>
									<input
										type='radio'
										name='gender'
										value='female'
										onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
										className='text-blue-600 focus:ring-blue-500'
									/>
									Female
								</label>
							</div>
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
							"Create Account"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;