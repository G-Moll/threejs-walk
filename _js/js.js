var wwidth = window.innerWidth;
var wheight = window.innerHeight;
var wpixel = window.devicePixelRatio;

var renderer = new THREE.WebGLRenderer( { canvas : document.getElementById( 'canvas3d' ) , antialias : true } );
renderer.setClearColor( 0x229999 );
renderer.setPixelRatio( wpixel );
renderer.setSize( wwidth , wheight );

var camera = new THREE.PerspectiveCamera( 35 , wwidth / wheight , 0.1 , 3000 );

var scene = new THREE.Scene();

renderer.render( scene , camera );