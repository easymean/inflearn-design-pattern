const GRIMPAN_CONSTRUCTOR_SYMBOL = Symbol();

class Grimpan {
  static instance;

  constructor(canvas, symbol) {
    if (symbol !== GRIMPAN_CONSTRUCTOR_SYMBOL) {
      throw new Error('can not use New method');
    }
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas is not found');
    }
  } // constructor 는 외부에서 호출할 수 없도록 private 로 선언

  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(
        document.getElementById('canvas'),
        GRIMPAN_CONSTRUCTOR_SYMBOL
      );
    }
    return this.instance;
  }
}

export default Grimpan;
