// Ch6. Classes 09

class Person9 {
  // static 프로퍼티 (공통적으로 사용하는 데이터)
  public static CITY = "Seoul"

  // static 메서드
  public hello() {
    console.log("안녕하세요", Person9.CITY);
  }

  public change() {
    Person9.CITY = "LA";
  }
}

const p9 = new Person9();
// 이랗게 호출하면 에러난다.
p9.hello();

const p8 = new Person9();
p8.hello();

p9.change();
p8.hello();
