"strict use";

/*1) Создать объект student со своими данными: Имя, Фамилия, возраст, курс обучения, уровень английского После создания объекта удалить с помощью delete уровень английского*/
let student = {
    name: "Darya",
    surname: "Zauchner",
    age: 36,
    trainingCourse: "Frontend developer",
    englishLevel: "proficient",
    isHere: false,
}
console.log(student);

delete student.englishLevel;
console.log(student);



/*2) В объекте книга вывести в консоль все ключи, если значение имеет булевский тип данных*/
let book = {
    numberOfPages: 545,
    cover: true,
    isTheAuthorAlive: false,
    isBestseller: true,
    booksEditions: 20000000,
};
for (let key in book) {
    console.log(["isTheAuthorAlive"]);
    console.log(["isBestseller"]);
    console.log(["cover"]);
    break;
}




/*3) Создайте объект своей любимой машины, у которой будут свойства(Марка, цвет, кол - во дверей, лошадиные силы, объем двигателя, тип коробки передач) и клонируйте этот объект в другой(новый) объект с помощью двух способов*/
//1 способ
let automobile = {
    model: "Geely",
    color: "green",
    numberOfDoors: 4,
    horsepower: 190,
    engineCapacity: 1.5,
    transmissionType: "automatic",
};
let mercedes = {};

for (let key in automobile) {
    mercedes[key] = automobile[key]
};
console.log(mercedes);

///1 способ 
automobile = {
    model: "Geely",
    color: "green",
    numberOfDoors: 4,
    horsepower: 190,
    engineCapacity: 1.5,
    transmissionType: "automatic",
};
mercedes = {};
let audi = {};

for (let key in automobile) {
    mercedes[key] = automobile[key]
};

audi = Object.assign(mercedes, automobile);

console.log(mercedes);
console.log(audi);

//2 способ 
let vehicle = {
    model: "Geely",
    color: "green",
    numberOfDoors: 4,
    horsepower: 190,
    engineCapacity: 1.5,
    transmissionType: "automatic",
};
console.log(vehicle);

mercedes = {
    price: 25000,
    isPrivateSale: true,
    guarantee: "available",
    priceOfMaintenance: "high",
};
Object.assign(vehicle, mercedes);

console.log(mercedes);
console.log(vehicle);


//Ещё один способ
vehicle = {
    model: "Geely",
    color: "green",
    numberOfDoors: 4,
    horsepower: 190,
    engineCapacity: 1.5,
    transmissionType: "automatic",
};
mercedes = Object.assign({}, vehicle);

console.log(mercedes);
console.log(vehicle);




/*4) function animal(obj) { return ? } Функция animal в качестве аргумента obj принимает объект animalObj Напишите код, который возвращает строку "This black cat has 4 paws" из объекта -*/
let animal = {
    color: "black",
    species: "cat",
    paws: 4,
};

function cat(obj) {
    return `This ${obj.color} ${obj.species} has ${obj.paws} paws`;
}
let result = cat(animal);
console.log(result);


/*5) Создайте функцию, которая рассчитает длину поезда на основании свойств объекта  let train = {locomotiveLength: 25,totalNumberCarriages: 4, carriagesLength: 15,};*/
let train = {
    locomotiveLength: 25,
    totalNumberCarriages: 4,
    carriagesLength: 15,
};

function speedyTrain(obj) {
    let sum = obj.locomotiveLength + (obj.totalNumberCarriages * obj.carriagesLength);
    return sum
}
result = speedyTrain(train);
console.log(result);


/*6) Создайте объект студента, в котором будут свойства: имя, фамилия, номер группы, и метод который в консоль выводит запись "Это студент -ИМЯ-ФАМИЛИЯ из группы -НОМЕР ГРУППЫ-"*/
let scholar = {
    name: "Darya",
    surname: "Zauchner",
    numberOfGroup: "7",
    getInfo(obj) {
        let sum = "";
        sum = `Это студентка -${obj.name}-${obj.surname} из группы -${obj.numberOfGroup}`;
        return sum;
    }
}

result = scholar.getInfo(scholar);
console.log(result);



/*7) Создайте функцию - конструктор для создания объектов животного, у которого должны быть ключи: животное, сколько лап, это хищник, имя*/
function Animal(species, numberPaws, isCarnivore, propName) {
    this.species = species;
    this.numberPaws = numberPaws;
    this.isCarnivore = isCarnivore
    this.name = propName;
}
let animalLion = new Animal("lion", 4, true, "Jonny");
let animalTiger = new Animal("tiger", 4, true, "Barsik");
console.log(animalLion);
console.log(animalTiger);