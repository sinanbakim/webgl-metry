import { parse, HtmlGenerator } from 'latex.js'
import { MathfieldElement} from 'mathlive';
import { Renderer } from './renderer';


// Mathfield einlesen
// const mathfield: MathfieldElement = document.querySelector('#formula');
const mfe = document.querySelector('#formula') as HTMLInputElement;

mfe.addEventListener('input', (ev) => {
    // `ev.target` is an instance of `MathfieldElement`
    var mf = ev.target as MathfieldElement;
    var formula: string = mf.getValue('latex');
    console.log(formula);

});





// Die Canvas-Elemente vom DOM holen
const canvas: HTMLCanvasElement = document.querySelector('#canvas');

// Eine Instanz der CanvasRenderer-Klasse erstellen
const r: Renderer = new Renderer(canvas, window.innerWidth, window.innerHeight);




function sineWave(x: number): number {
    return Math.sin(x / 20) * 50;
}

function cosineWave(x: number): number {
    return Math.cos(x / 20) * 50;
}

r.background('red');
r.animateFunction = sineWave;
r.staticFunction = cosineWave;
r.render();
r.animate();