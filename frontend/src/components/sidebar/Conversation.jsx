import { useSocketContext } from "../../context/SocketContext";
import { useChat } from "../../context/ChatContext";
import { formatTime } from "../../helpers/timeFormat";

const Conversation = ({ conversation, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useChat();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	// Get short version of last message
	const getShortMessage = (message) => {
		if (!message) return "";
		return message.length > 25 ? message.substring(0, 25) + "..." : message;
	};

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-gray-100 rounded p-2 py-3 cursor-pointer
				${isSelected ? "bg-gray-100" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1 min-w-0'>
					<div className='flex justify-between items-center mb-1'>
						<p className='font-bold text-gray-800'>{conversation.fullName}</p>
						<span className='text-xs text-gray-500'>
							{conversation.lastMessage?.createdAt && formatTime(conversation.lastMessage.createdAt)}
						</span>
					</div>
					<p className='text-sm text-gray-500 truncate'>
						{getShortMessage(conversation.lastMessage?.message)}
					</p>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;

