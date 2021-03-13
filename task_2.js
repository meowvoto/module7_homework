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