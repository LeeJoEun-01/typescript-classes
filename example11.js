"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        // 부모의 private으로 있는 age까지 접근할 수 있다.
        console.log(this._name, this._age);
    }
}
// const p = new Parent("Mark", 39);
// p.print();
// 상속
class Child extends Parent {
    //생성자 오버라이드
    constructor(age) {
        // parent의 생성자를 호출한다.
        super('Mark Dw', age);
        // 프로퍼티 오버라이드 (기존의 값 덮어씌우기)
        // public _name = "Mark Jr."
        // 값뿐만 아니라 접근 제한자도 오버라이드 된다 
        // 프로퍼티 추가
        this.gender = "male";
        // constructor안에서 this.을 호출할 때는 무조건 super이 먼저 와야한다. 
        this.printName();
    }
}
// const c = new Child("Son", 5);
// c.gender;
// c._name;
const c = new Child(1);
c.print();
