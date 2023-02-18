const canvas = document.getElementById('canvas');

// Get the rendering context for WebGL
const gl = canvas.getContext('webgl');
gl.clearColor(1.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

function newFrame() {
    update();
    requestAnimationFrame(newFrame);
}
requestAnimationFrame(newFrame);

function update() {
    // draw a line in black
    gl.drawElements(gl.LINES, 2, gl.UNSIGNED_SHORT, 0);


}