import { useAuthContext } from "../../context/AuthContext";
import { formatTime } from "../../helpers/timeFormat";
import { useChat } from "../../context/ChatContext";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useChat();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = formatTime(message.createdAt);
	const chatClassName = fromMe ? "flex-row-reverse" : "";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-white";
	const textColor = fromMe ? "text-white" : "text-gray-700";
	const borderStyle = fromMe ? "" : "border border-gray-200";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`flex items-end gap-3 mb-4 ${chatClassName}`}>
			<img 
				src={profilePic} 
				alt='profile' 
				className='w-8 h-8 rounded-full border border-gray-200'
			/>
			<div className={`flex flex-col ${fromMe ? 'items-end' : 'items-start'}`}>
				<div className={`px-4 py-2 rounded-2xl max-w-[320px] ${bubbleBgColor} ${textColor} ${borderStyle} shadow-sm ${shakeClass}`}>
					{message.message}
				</div>
				<span className='text-xs text-gray-400 mt-1 px-1'>{formattedTime}</span>
			</div>
		</div>
	);
};

export default Message;