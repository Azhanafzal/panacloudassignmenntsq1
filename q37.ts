function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}"`);
}

make_shirt();

make_shirt('Medium');

make_shirt('Small', 'TypeScript is awesome!');
export{}