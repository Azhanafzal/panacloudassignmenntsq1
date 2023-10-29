const guestList: string[] = ["Azhan", "Afaq", "Sami"];
const replacementGuest: string = "Talha";  

for (let i = 0; i < guestList.length; i++) {
    const guest = guestList[i];
    console.log(`Dear ${guest}, you are invited to a dinner at my place. Let's have a great time!`);
}

console.log(`Unfortunately, ${guestList[1]} can't make it to the dinner.`);

guestList[1] = replacementGuest;

console.log(`Inviting ${replacementGuest} instead.`);

for (let i = 0; i < guestList.length; i++) {
    const guest = guestList[i];
    console.log(`Dear ${guest}, you are invited to a dinner at my place. Let's have a great time!`);
}
export {};