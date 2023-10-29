let guestList: string[] = ["Azhan", "Afaq", "Sami", "Gujjar", "Kazim", "Talha"];

for (let i = 0; i < guestList.length; i++) {
    const guest = guestList[i];
    console.log(`Dear ${guest}, you are invited to a dinner at my place. Let's have a great time!`);
}

console.log("We found out the new dinner table won't arrive in time.");

while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner.`);
}

for (let i = 0; i < guestList.length; i++) {
    const guest = guestList[i];
    console.log(`Dear ${guest}, you are still invited to a dinner at my place. Let's have a great time!`);
}

guestList.pop();
guestList.pop();

console.log("Final guest list:", guestList);
export {};
