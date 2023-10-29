function make_sandwich(...items: string[]): void {
    if (items.length === 0) {
       console.log("You ordered an empty sandwich. Please add some items.");
   } else {
       console.log("You ordered a sandwich with the following items:");
   for (let i = 0; i < items.length; i++) {
       console.log(`- ${items[i]}`);
   }
   console.log('Enjoy your sandwich!\n');
   }
}

make_sandwich();
make_sandwich('Turkey', 'Swiss Cheese');
make_sandwich('Peanut Butter', 'Jelly', 'Banana');
