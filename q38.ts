function describe_city(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('Mumbai', 'India');
describe_city('Islamabad'); 
describe_city('New York', 'USA');
