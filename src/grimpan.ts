class Grimpan {
  private static instance: HTMLCanvasElement | null = null;

  private constructor(canvas: HTMLCanvasElement | null) {
    if (!canvas) {
      throw new Error('Canvas is not found');
    }
  } // constructor 는 외부에서 호출할 수 없도록 private 로 선언

  static getInstance() {
    if (!this.instance) {
      this.instance = document.getElementById('canvas') as HTMLCanvasElement;
    }
    return this.instance;
  }
}

export default Grimpan;
