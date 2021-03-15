// Написать функцию, которая создает пустой объект, но без прототипа.
function createObjectWithoutPrototype() {
    const noPrototypeObject = Object.create(null); 
    return noPrototypeObject;
}

console.log(createObjectWithoutPrototype());