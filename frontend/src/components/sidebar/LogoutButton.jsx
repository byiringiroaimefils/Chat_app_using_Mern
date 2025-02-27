import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<button
			onClick={logout}
			className='flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-red-50 w-full'
			disabled={loading}
		>
			{loading ? (
				<>
					<div className='w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin'></div>
					<span>Logging out...</span>
				</>
			) : (
				<>
					<BiLogOut className='w-5 h-5' />
					<span className='font-medium'>Sign out</span>
				</>
			)}
		</button>
	);
};
export default LogoutButton;