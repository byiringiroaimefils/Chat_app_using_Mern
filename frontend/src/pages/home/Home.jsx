import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-screen bg-gray-50'>
			<div className='flex w-full max-w-[1800px] mx-auto bg-white shadow-lg'>
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;