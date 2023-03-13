export class Lines {
    public crc2d: CanvasRenderingContext2D;


    constructor(crc2d: CanvasRenderingContext2D) {
        this.crc2d = crc2d;

    }
    draw(x: number, y: number, x2: number, y2: number, color: string, stroke: number): void {
        this.crc2d.strokeStyle = color;
        this.crc2d.lineWidth = stroke;
        this.crc2d.beginPath();
        this.crc2d.moveTo(x, y);
        this.crc2d.lineTo(x2, y2);
        this.crc2d.stroke();
    }
    

}