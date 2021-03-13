// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const mother = {
    name: "Alina",
    age: 30,
    eyes: "brown",
    hair: "black"
};


function checkProperty(string, object) {
    if (object.hasOwnProperty(string)) {
        return true;
    } else {
        return false;
    }
}

checkProperty('age', mother);