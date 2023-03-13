import { Lines } from './lines';

type AnimationFunction = (x: number) => number;

export class Renderer {
    private crc2d: CanvasRenderingContext2D;
    private lines: Lines;
    private canvas: HTMLCanvasElement;
    private bgColor: string;
    public w: number;
    public h: number;
    public x: number;
    public yOffset: number;
    public staticFunction: Function;
    public animateFunction: Function;
  
    constructor(canvas: HTMLCanvasElement, w: number, h: number) {
        this.w = w;
        this.h = h;
        this.init(canvas);
        this.x = 0;
        this.yOffset = this.h / 2;
    }
    
    private init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.crc2d = this.canvas.getContext('2d');
        this.lines = new Lines(this.crc2d);
    }

    private drawBackground(color: string) {
        this.crc2d.fillStyle = color;
        this.crc2d.fillRect(0, 0, this.w, this.h);
    }

    background(color: string) {
        this.bgColor = color;
    }

    animate() {
        this.drawBackground(this.bgColor);
        if(this.staticFunction) {
            this.render();
        }
        if(this.animateFunction) {
            this.lines.draw(this.x, this.animateFunction(this.x)+this.yOffset, this.x+1, this.animateFunction(this.x+1)+this.yOffset, 'black', 1);
            if(this.x < this.w) {
                this.x++;
            } else {
                this.x = 0;
            }
        }
        requestAnimationFrame(this.animate.bind(this));
    }

    render() {
        this.drawBackground(this.bgColor);
        for(let i = 0; i < this.w; i++) {
            this.lines.draw(i, this.staticFunction(i)+this.yOffset, i+1, this.staticFunction(i+1)+this.yOffset, 'black', 1);
        }
    }
}