// Die Canvas-Elemente vom DOM holen
var canvas = document.querySelector('#canvas');
// Die 2D-Rendering-Kontext-Objekt vom Canvas holen
var ctx = canvas.getContext('2d');
// Die Dimensionen des Canvas setzen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Die Startposition des Strichs setzen
var x = 0;
var y = canvas.height / 2;
// Die Animationsfunktion definieren
function animate() {
    // Die Hintergrundfarbe setzen
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Die Strichfarbe und -stärke setzen
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    // Den Anfangspunkt des Strichs setzen
    ctx.beginPath();
    ctx.moveTo(x, y);
    // Die Endposition des Strichs berechnen
    x += 5;
    y = canvas.height / 2 + Math.sin(x / 20) * 50;
    // Die Endposition des Strichs setzen
    ctx.lineTo(x, y);
    // Den Strich zeichnen
    ctx.stroke();
    // Die Animation fortsetzen
    requestAnimationFrame(animate);
}
// Die Animation starten
animate();
