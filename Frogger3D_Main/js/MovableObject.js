function MovableObject(position, mesh, basicMat, lambertMat, phongMat){
  'use strict';

  this.speed = 0;
  this.acceleration = 0;
  this.direction = new THREE.Vector3(1,0,0);
  this.angularSpd = 0;

  this.maxSpeed = 120;
  this.drag = -80;

  if (!this.isGameObject) GameObject.call(this, position, mesh, basicMat, lambertMat, phongMat);

  this.move = function(delta) {
    // Create a copy of the object's direction that we can safely manipulate.
    var dir = new THREE.Vector3(this.direction.x, this.direction.y, this.direction.z);

    console.log("speed: " + this.speed);
    this.mesh.position.add(dir.multiplyScalar(this.speed*delta));
    //this.speed = Math.max(Math.min(this.speed*delta, this.maxSpeed), -this.maxSpeed);


    // Rotate
    var zz = new THREE.Vector3(0,0,1);

    this.direction.applyAxisAngle(zz, this.angularSpd * delta);
    this.mesh.rotateOnAxis(zz, this.angularSpd * delta);

    // Return displacement.
    return dir;
  };

  this.update = function(delta){
    this.move(delta);
  };
}
