export class ChromeGrimpan {
    private static instance: ChromeGrimpan;

    private constructor(canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}

export class FirefoxGrimpan {
    private static instance: FirefoxGrimpan;

    private constructor(canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new FirefoxGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}

export class EdgeGrimpan {
    private static instance: EdgeGrimpan;

    private constructor(canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new EdgeGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}