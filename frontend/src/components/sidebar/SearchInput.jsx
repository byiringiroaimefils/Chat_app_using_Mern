import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useChat } from "../../context/ChatContext";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useChat();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<div className='relative flex-1'>
				<input
					type='text'
					placeholder='Search users...'
					className='w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 bg-gray-50'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button 
					type='submit' 
					className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100'
				>
					<IoSearchSharp className='w-5 h-5' />
				</button>
			</div>
		</form>
	);
};
export default SearchInput;

// STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;