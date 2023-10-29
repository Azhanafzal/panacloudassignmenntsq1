const guestList: string[] = ["Azhan", "Afaq", "Sami"];
const replacementGuest: string = "Gujjar";  

guestList[3] = replacementGuest;

guestList[1] = replacementGuest;

guestList.splice(3, 1);

console.log(`Number of people invited to dinner: ${guestList.length}`);

export {};