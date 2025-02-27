import { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useChat();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex-1 flex flex-col bg-gray-50'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-white px-6 py-4 flex items-center border-b border-gray-200'>
						<div className='flex items-center gap-3'>
							<img 
								src={selectedConversation.profilePic} 
								alt='profile' 
								className='w-12 h-12 rounded-full border-2 border-gray-200'
							/>
							<div>
								<span className='font-semibold text-gray-800'>{selectedConversation.fullName}</span>
								<p className='text-sm text-green-500'>Online</p>
							</div>
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full bg-gray-50'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-600 flex flex-col items-center gap-2'>
				<p className='font-semibold'>Welcome 👋 {authUser.fullName}</p>
				<p className='text-base text-gray-400'>Select a chat to start messaging</p>
				<TiMessages className='text-5xl text-gray-300 mt-2' />
			</div>
		</div>
	);
};

export default MessageContainer;