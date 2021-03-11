// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. 

let mother = {
    name: "Alina",
    age: 30,
    eyes: "brown",
    hair: "black"
};

let daughter = {
    name: "Anna",
    age: "10",
    freckles: true
};

function showProperties(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        console.log(`Свойство: ключ ${key}, значение ${object[key]}`)
      }  
    };
}

showProperties(daughter);