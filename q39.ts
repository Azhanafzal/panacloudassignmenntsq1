function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('Mumbai', 'India');
const location3 = city_country('New York', 'USA');

console.log(location1);
console.log(location2);
console.log(location3);
