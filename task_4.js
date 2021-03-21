// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Appliance(price) {
    this.needElectricity = true,
    this.inSocket = false,
    this.price = price
};

Appliance.prototype.showPower = function(amperage) {
    const power = amperage * 220;
    console.log(`Потребляемая прибором мощность: ${power}`);
};

function HomeAppliance(price, name) {
    this.name = name,
    this.description = "Бытовая техника",
    this.inSocket = true,
    this.price = price
};

function LightingEquipment(price, name) {
    this.name = name,
    this.description = "Освещение",
    this.inSocket = true,
    this.price = price
};

function Device(price, name) {
    this.name = name,
    this.description = "Девайсы",
    this.autonomy = true,
    this.portability = true,
    this.price = price
}

HomeAppliance.prototype = new Appliance();
LightingEquipment.prototype = new Appliance();
Device.prototype = new Appliance();

const fridge = new HomeAppliance(25000, 'Холодильник');
fridge.showPower(0.7);
const phone = new Device(20000, 'Телефон');
console.log(phone.price);
const tableLamp = new LightingEquipment(1500, 'Настольная лампа');
console.log(tableLamp.needElectricity);
console.log(fridge, phone, tableLamp);