//example 1
// Проходиться циклом и использует getOwnPropertyDescriptors для проверки на существования данного поля и добавляет, если нет его
const obj1 = {
    hello: "hello"
}

const obj2 = {
    by: "by"
}

const objSpred = {...obj1, ...obj2};

const objApply = this.apply(obj1, obj2);

console.log(objSpred, objApply);

//example 2
const goDog = () => {
    console.log("go dog");
}

goDog();

//example 3 
// при трансиляции использует метод concat. Он обьеденяет значения и возвращает их как одно целое
const literalStr = `age dog ${23}`;
console.log(literalStr);
