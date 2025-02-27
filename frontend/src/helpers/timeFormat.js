export const formatTime = (date) => {
	const time = new Date(date);
	return time.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
}; 