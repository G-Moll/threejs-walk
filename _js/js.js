var wwidth = window.innerWidth;
var wheight = window.innerHeight;
var wpixel = window.devicePixelRatio;

var renderer = new THREE.WebGLRenderer( { canvas : document.getElementById( 'canvas3d' ) , antialias : true } );
renderer.setClearColor( 0x229999 );
renderer.setPixelRatio( wpixel );
renderer.setSize( wwidth , wheight );

var camera = new THREE.PerspectiveCamera( 35 , wwidth / wheight , 0.1 , 3000 );
camera.position.set( 0, 0, 0 );

var scene = new THREE.Scene();

var light = new THREE.AmbientLight( 0xFFFFFF , 0.5 );
scene.add( light );

var pointlight = new THREE.PointLight( 0xFFFFFF, 0.5 );
scene.add( pointlight );

var geometry = new THREE.CubeGeometry( 100, 100, 100 );
var material = new THREE.MeshLambertMaterial({ color: 0xF3FFE2 })
var mesh = new THREE.Mesh( geometry, material );
mesh.position.set( 0, 0, -1000 );

scene.add( mesh );

function render() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render( scene , camera );
    requestAnimationFrame( render );
}

requestAnimationFrame( render );