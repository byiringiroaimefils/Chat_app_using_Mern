import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
	const { authUser } = useAuthContext();

	return (
		<div className='border-r border-gray-200 w-[450px] flex flex-col bg-white'>
			<div className='p-4 border-b border-gray-200 bg-gray-50'>
				<div className='flex items-center gap-3 mb-4'>
					<img 
						src={authUser?.profilePic} 
						alt='profile' 
						className='w-12 h-12 rounded-full border-2 border-gray-200'
					/>
					<div className='flex flex-col'>
						<span className='font-semibold text-gray-800'>{authUser?.fullName}</span>
						<span className='text-sm text-gray-600'>My Account</span>
					</div>
				</div>
				<SearchInput />
			</div>
			<div className='flex-1 overflow-auto'>
				<Conversations />
			</div>
			<div className='border-t border-gray-200 p-4 bg-gray-50'>
				<LogoutButton />
			</div>
		</div>
	);
};

export default Sidebar;