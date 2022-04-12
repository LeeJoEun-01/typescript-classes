"use strict";
// Ch6. Classes 05, 06
// 원래 작성 방법
class Person2 {
    constructor(name, age) {
        this.name = "Mark"; // 밑에 public name: string에서 pulic 부분
        this.age = 20; //// 밑에 private age: number에서 private 부분
        this.name = name;
        this.age = age;
    }
}
const p2 = new Person2("John", 22);
console.log(p2);
// 축약형 
class Person3 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    // name이 getter 함수의 이름과 겹쳐서 _name으로 변경 
    get name() {
        //getter는 return이 무조건 있어야 함.
        return this._name + " Lee";
    }
    set name(n) {
        // setter는 return은 필요 없고 함수에 들어갈 인자가 필요하다.
        this._name = n;
    }
}
const p3 = new Person3("Anna", 34);
console.log(p3.name); // get => get을 하는 함수 getter
p3.name = "joeun"; // set => set을 하는 함수 setter
console.log(p3);
console.log(p3.name);
