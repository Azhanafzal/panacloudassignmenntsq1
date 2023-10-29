const current_users: string[] = ["Azhan", "Afaq", "Sami", "Gujjar", "Talha"];

const new_users: string[] = ["Ahmad", "Azhan", "Afaq", "Sami", "Gujjar"];

const current_users_lower: string[] = current_users.map(username => username.toLowerCase());

for (let i = 0; i < new_users.length; i++) {

    const new_username: string = new_users[i];
    const new_username_lower: string = new_username.toLowerCase();

    if (current_users_lower.includes(new_username_lower)) {
        console.log(`Sorry, ${new_username} is not available. Please choose a different username.`);
    } else {
        console.log(`Congratulations, ${new_username} is available!`);
    }
}
