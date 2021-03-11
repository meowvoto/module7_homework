// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. 

const mother = {
    name: "Alina",
    age: 30,
    eyes: "brown",
    hair: "black"
};

const daughter = Object.create(mother);
daughter.name =  "Anna";
daughter.age = 10;
daughter.freckles = true;

function showProperties(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        console.log(`Свойство: ключ ${key}, значение ${object[key]}`)
      }  
    };
}

showProperties(daughter);