// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class Appliance {
    constructor(price, name) {
        this.name = name
        this.needElectricity = true,
        this.inSocket = false,
        this.price = price
    }

    showPower(amperage) {
        const power = amperage * 220;
        console.log(`Потребляемая прибором мощность: ${power}`);
    }
}

class HomeAppliance extends Appliance {
    constructor(price, name) {
        super(price, name),
        this.price = price,
        this.name = name,
        this.description = "Бытовая техника",
        this.inSocket = true
    }
}

class LightingEquipment extends Appliance {
    constructor(price, name) {
        super(price, name),
        this.price = price,
        this.name = name,
        this.inSocket = true,
        this.description = "Освещение"
    }
}
class Device extends Appliance {
    constructor(price, name) {
        super(price, name)
        this.name = name,
        this.description = "Девайсы",
        this.autonomy = true,
        this.portability = true,
        this.price = price
    }
}

const fridge = new HomeAppliance(25000, 'Холодильник');
fridge.showPower(0.7);
const phone = new Device(20000, 'Телефон');
console.log(phone.price);
const tableLamp = new LightingEquipment(1500, 'Настольная лампа');
console.log(tableLamp.needElectricity);
console.log(fridge, phone, tableLamp);