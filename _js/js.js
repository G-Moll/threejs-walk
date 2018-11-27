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
// var material = new THREE.MeshBasicMaterial()
var material = new THREE.MeshLambertMaterial({ color: 0xF3FFE2 })
var mesh = new THREE.Mesh( geometry, material );
mesh.position.set( 0, 0, -1000 );


// Geometries
var boxGeometry = new THREE.BoxGeometry( 17, 17, 17 );
var boxMaterial = new THREE.MeshLambertMaterial({ color: 0xccff00, opacity: 0.5, transparent: true });
var boxMesh = new THREE.Mesh( boxGeometry , boxMaterial );
boxMesh.position.set( -10, 0, -20 );

var circleGeometry = new THREE.CircleGeometry( 150 , 11 );
var circleMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
circleMaterial.side = THREE.DoubleSide;
var circleMesh = new THREE.Mesh( circleGeometry , circleMaterial );
circleMesh.position.set( 200, 100, -1200 );

var torusGeometry = new THREE.TorusKnotGeometry( 80 , 35 , 100 , 16 );
var torusMaterial = new THREE.MeshLambertMaterial({ color: 0xcc00ff, opacity: 0.75, transparent: true });
var torusMesh = new THREE.Mesh( torusGeometry, torusMaterial );
torusMesh.position.set( 0, -100, -500 );

// Add Objects on Scene
scene.add( mesh );
scene.add( boxMesh );
scene.add( circleMesh );
scene.add( torusMesh );

function render() {
    mesh.rotation.x = mesh.rotation.y += 0.01;
    boxMesh.rotation.x = boxMesh.rotation.y -= 0.01;
    circleMesh.rotation.x = circleMesh.rotation.y += 0.01;
    torusMesh.rotation.x = torusMesh.rotation.y -= 0.01;

    renderer.render( scene , camera );
    requestAnimationFrame( render );
}

requestAnimationFrame( render );