let personname: string = "Azhan";

console.log("Lowercase:", personname.toLowerCase());
console.log("Uppercase:", personname.toUpperCase());

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

console.log("Titlecase:", toTitleCase(personname));
