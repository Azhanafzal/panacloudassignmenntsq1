function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(`${magicians[i]} the Great`);
    }
    return great_magicians;
}

const magician_names: string[] = ['Harry', 'David', 'John', 'Teller'];

const great_magicians = make_great(magician_names);

show_magicians(great_magicians);
export{}