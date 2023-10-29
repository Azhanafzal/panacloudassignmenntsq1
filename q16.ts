let guestList: string[] = ["Azhan", "Afaq", "Sami"];

for (let i = 0; i < guestList.length; i++) {
    const guest = guestList[i];
    console.log(`Dear ${guest}, you are invited to a dinner at my place. Let's have a great time!`);
}

console.log("We found a bigger dinner table!");

guestList.unshift("Talha");
guestList.splice(Math.floor(guestList.length / 2), 0, "Nouman");
guestList.push("Shehryar");

for (let i = 0; i < guestList.length; i++) {
    const guest = guestList[i];
    console.log(`Dear ${guest}, you are invited to a dinner at my place. Let's have a great time!`);
}

export {};