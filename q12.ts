const names: string[] = ["Azhan", "Afaq", "Sami", "Gujjar"];
const messageTemplate: string = "Hello, [name]! Just wanted to say hi.";

for (let i = 0; i < names.length; i++) {
    const personalizedMessage = messageTemplate.replace("[name]", names[i]);
    console.log(personalizedMessage);
}
export {};