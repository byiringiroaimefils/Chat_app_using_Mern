import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-6 py-4 bg-white border-t border-gray-200' onSubmit={handleSubmit}>
			<div className='relative flex items-center'>
				<input
					type='text'
					className='w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 text-sm'
					placeholder='Type your message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button 
					type='submit' 
					className='absolute right-2 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors disabled:opacity-50'
					disabled={loading}
				>
					{loading ? (
						<div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
					) : (
						<BsSend size={18} />
					)}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;