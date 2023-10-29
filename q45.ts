function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): object {
    const car: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        for (const key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    }

    return car;
}

const myCar = createCar('Toyota', 'Camry', { color: 'Silver', year: 2023, model: 'LE' });

console.log(myCar);
