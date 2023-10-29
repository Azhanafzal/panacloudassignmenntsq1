let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Bali", "Rome"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("Original order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order:", placesToVisit);

placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);

placesToVisit.reverse();
console.log("Reverse alphabetical order:", placesToVisit);
