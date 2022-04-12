"use strict";
// Ch6. Classes 01~04
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Person {
    // constructor(age: number) { // initialize 방법 2
    //   this.age = age;
    // }
    // 생성자
    constructor(name, age) {
        this.name = "Mark"; // initialize 방법 1
        if (age === undefined) {
            //따라서 age가 정해지지 않았을 경우로 따로 명시해주어야 에러가 안일어난다.
            this.name = name;
            this.age = 20;
        }
        else {
            this.name = name;
            this.age = age;
        }
    }
    // 메서드
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const p1 = new Person("John", 39); //object 
console.log(p1);
