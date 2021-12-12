// a function to get robot time and humanize it in a way user can read
export const timeHumanizer = (robotTime) => {
	const date = new Date(robotTime);
	const weekDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday ', 'Thursday', 'Friday', 'Saturday' ];
	const formatedClock = `${date.getHours()}:${date.getMinutes()}`;
	const formattedDay = `${weekDays[date.getDay()]}`;
   //retur first day then clock of robot time in human readeable way 
	return [formattedDay, formatedClock ];
};
