class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log('Машина заведена');
        document.getElementById('messages').innerHTML += `${this.model} заведена<br>`;
    }
}

class Sedan extends Cars {
    constructor(model, color, wheels, trunkSize) {
        super(model, color, wheels);
        this.trunkSize = trunkSize;
    }

    displayInfo() {
        return `Модель: ${this.model}, Цвет: ${this.color}, Количество колёс: ${this.wheels}, Объем багажника: ${this.trunkSize} литров`;
    }
}
class SUV extends Cars {
    constructor(model, color, wheels, offRoadCapability) {
        super(model, color, wheels);
        this.offRoadCapability = offRoadCapability; // Возможность езды по бездорожью
    }

    displayInfo() {
        return `Модель: ${this.model}, Цвет: ${this.color}, Количество колёс: ${this.wheels}, Возможность езды по бездорожью: ${this.offRoadCapability}`;
    }
}


class Coupe extends Cars {
    constructor(model, color, wheels, hasSunroof) {
        super(model, color, wheels);
        this.hasSunroof = hasSunroof; // Наличие люка
    }

    displayInfo() {
        return `Модель: ${this.model}, Цвет: ${this.color}, Количество колёс: ${this.wheels}, Наличие люка: ${this.hasSunroof}`;
    }
}


document.getElementById('createSedan').onclick = () => {
    const sedan = new Sedan('Toyota Camry', 'Синий', 4, 450);
    sedan.start();
    document.getElementById('messages').innerHTML += sedan.displayInfo() + '<br>';
};

document.getElementById('createSUV').onclick = () => {
    const suv = new SUV('Honda CR-V', 'Чёрный', 4, true);
    suv.start();
    document.getElementById('messages').innerHTML += suv.displayInfo() + '<br>';
};

document.getElementById('createCoupe').onclick = () => {
    const coupe = new Coupe('BMW M4', 'Красный', 4, false);
    coupe.start();
    document.getElementById('messages').innerHTML += coupe.displayInfo() + '<br>';
};