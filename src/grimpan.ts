class Grimpan {
  static instance: Grimpan;

  private constructor(canvas: HTMLCanvasElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas is not found');
    }
  } // constructor 는 외부에서 호출할 수 없도록 private 로 선언

  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(
        document.getElementById('canvas') as HTMLCanvasElement
      );
    }
    return this.instance;
  }
}

export default Grimpan;
