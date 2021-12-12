//a function to create new chatID for each privite chat so we dont crate new chat each time two user sends message
export function generatePriviteChatID(firstID, secondID) {
	//get two ids of users
	return (
      //make them an array and sort them smaller first bigger seccond
		[ firstID, secondID ]
			.sort((a, b) => {
				if (a === b) return 0;
				if (a > b) return 1;
				if (a < b) return -1;
         }).join("_")
         //join them with a underline after sorting  
	);
}
