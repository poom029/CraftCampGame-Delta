var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');
var state1 = { preload: preload, create: create, update: update }
game.state.add('menu',state1)
game.state.start('menu')

function preload() {

  game.load.image('space', 'assets/deep-space.jpg');
  game.load.image('bullet', 'assets/bullets.png');
  game.load.image('ship', 'assets/ship.png');
  game.load.image('enemyShip', 'assets/enemyShip.png');

}

var sprite;
var cursors;

var bullet;
var bullets;
var bulletTime = 0;

var player


function create() {

  game.stage.disableVisibilityChange = true;
  

  //  This will run in Canvas mode, so let's gain a little speed and display
  game.renderer.clearBeforeRender = false;
  game.renderer.roundPixels = true;

  //  We need arcade physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //  A spacey background
  game.add.tileSprite(0, 0, game.width, game.height, 'space');

  //  Our ships bullets
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;

  //  All 60 of them
  bullets.createMultiple(60, 'bullet');
  bullets.setAll('anchor.x', 0.5);
  bullets.setAll('anchor.y', 0.5);

  //  Our player ship
  player = game.add.sprite(300, 300, 'ship');
  player.anchor.set(0.5);
  player.health = 3


  //  and its physics settings
  game.physics.enable(player, Phaser.Physics.ARCADE);

  player.body.drag.set(100);
  player.body.maxVelocity.set(200);
  player.body.collideWorldBounds = true;

  //  Game input
  cursors = game.input.keyboard.createCursorKeys();
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);


}



function update() {


  // bullets.forEachExists(function (bullet) {
  //     game.physics.arcade.overlap(player, bullet, collisionPlayer, null, this);
  //     // game.physics.arcade.collide(,)
  //   });
  player.body.velocity.x = 0
  player.body.velocity.y = 0
  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
  }
  if (cursors.left.isDown) {
    player.body.velocity.x = -300;
  }

  if (cursors.right.isDown) {
    player.body.velocity.x = 300;
  }
  if (cursors.down.isDown) {
    player.body.velocity.y = 300;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    fireBullet();
  }

  // screenWrap(player);


}

function fireBullet() {

  if (game.time.now > bulletTime) {
    bullet = bullets.getFirstExists(false);

    if (bullet) {
      bullet.reset(player.body.x + 16, player.body.y + 16);
      bullet.lifespan = 2000;
      bullet.rotation = player.rotation;
      game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
      
      
      bulletTime = game.time.now + 800;
      
    }
  }
  
  

}


