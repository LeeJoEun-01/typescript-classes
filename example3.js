"use strict";
// Ch6. Classes 07
class Person4 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
        this.country = "Korea";
        // constructor(생성자)안에서만 readonly가 달려있는 private 프로퍼티의 값을 지정해줄 수 있지만 다른 곳에서는 에러가 난다. 
        this.country = "USA";
    }
}
const p4 = new Person4("Anna", 34);
console.log(p4.name); // get => get을 하는 함수 getter
// error 
// p4.name = "joeun"; // set => set을 하는 함수 setter
console.log(p4);
