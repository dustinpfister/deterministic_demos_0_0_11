
// scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 640 / 480, .1, 100);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(640, 480);
document.body.appendChild(renderer.domElement);

camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 0;

// cube
var geometry = new THREE.BoxGeometry(8, 6, 1);
var material = new THREE.MeshBasicMaterial({
        color : 0x00ff00
    });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.x = 0;
cube.position.y = 0;
cube.position.z = -1;

camera.lookAt(new THREE.Vector3(0, 0, 0));

// render
var i = 0, iMax = 500;
var loop = function () {



    requestAnimationFrame(loop);

    var per = i / iMax,
    bias = 1 - Math.abs(.5 - per) / .5;

    camera.position.z = 4 + 15 * bias;

    i += 1;
    if (i === iMax) {

        i = 0;

    }

    renderer.render(scene, camera);

};

loop();
