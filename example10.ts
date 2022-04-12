class ClassName {
  private static instance: ClassName | null = null;

  //매게체 역할을 하는 함수
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object가 없으면, 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    // ClassName으로부터 만든 object가 있으면 그걸 리턴
    return ClassName.instance;
  }

  // class 밖에서 object를 만들 수 없음
  private constructor() {}
}

const i = ClassName.getInstance();
const j = ClassName.getInstance();

console.log(i === j);



