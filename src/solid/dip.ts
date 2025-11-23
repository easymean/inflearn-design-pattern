// DIP: 의존성 역전 원칙
// DI는 DIP를 구현하는 방법의 일종

// 객체를 생성할 때 생성자, setter, 매개변수를 사용한다.
interface IObj {}

class Obj implements IObj {
  constructor() {
    console.log('Object1 created');
  }
}

class A {
  constructor(private obj?: IObj) {
    console.log('A created');
  }

  setObj(obj: IObj) {
    this.obj = obj;
  }
}

new A(new Obj());
new A().setObj(new Obj());
