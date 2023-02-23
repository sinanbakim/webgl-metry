const canvas = document.getElementById('canvas');

// Get the rendering context for WebGL
const gl = canvas.getContext('webgl');
gl.clearColor(1.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

// Vertex-Koordinaten für den Strich erstellen
var vertices = [-0.5, 0.5, 0.0,
    0.5, -0.5, 0.0
];

// Vertex-Buffer erstellen und mit den Koordinaten füllen
var vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Shader-Programm erstellen
var vertexShaderSource = `
    attribute vec3 position;

    void main() {
        gl_Position = vec4(position, 1.0);
    }
`;
var fragmentShaderSource = `
    precision mediump float;
    uniform vec4 color;

    void main() {
        gl_FragColor = color;
    }
`;

var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

// Position-Attribut im Shader-Programm aktivieren
var positionAttribute = gl.getAttribLocation(shaderProgram, "position");
gl.enableVertexAttribArray(positionAttribute);
gl.vertexAttribPointer(positionAttribute, 3, gl.FLOAT, false, 0, 0);

// Farbuniform im Shader-Programm aktivieren und auf Schwarz setzen
var colorUniform = gl.getUniformLocation(shaderProgram, "color");
gl.uniform4f(colorUniform, 0.0, 0.0, 0.0, 1.0);

// Strich zeichnen
gl.drawArrays(gl.LINES, 0, 2);