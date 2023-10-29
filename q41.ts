function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

const magician_names: string[] = ['Harry', 'David', 'John', 'Teller'];

show_magicians(magician_names);
