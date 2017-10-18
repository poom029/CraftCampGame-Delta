
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Once') 
var stage1 = { preload: preloadmenu, create: createmenu, update: updatemenu }
game.state.add('menu',stage1)
game.state.start('menu')

function preloadmenu() {
  game.load.image('valley', 'assets/valley.png');
  game.load.spritesheet('junja','assets/junja.png',89/3,95/3,9);
}

var sprite;
var cursors;

var player


function createmenu() {

  game.stage.disableVisibilityChange = true;

  //  A spacey background
  game.add.tileSprite(0, 0, game.width, game.height, 'valley');

  var junja = game.add.sprite(300,350,'junja');
  var walk = junja.animations.add('walk',[3,4,5]);
  //junja.animations.play('walk', 5 , true);
  //junja.scale.setTo(2,2)

  //  This will run in Canvas mode, so let's gain a little speed and display
  game.renderer.clearBeforeRender = false;
  game.renderer.roundPixels = true;

  //  We need arcade physics
  game.physics.startSystem(Phaser.Physics.ARCADE);


  player = game.add.sprite(400, 400, 'junja');
  player.anchor.set(0.5);
  
  player.scale.setTo(2,2)
  var walk1 = player.animations.add('walk1',[3,4,5]);
  var walk2 = player.animations.add('walk2',[0,1,2]);
  var walk3 = player.animations.add('walk3',[6,7,8]);
  var stop  = player.animations.add('stop',[0]);
  


  //  and its physics settings
  game.physics.enable(player, Phaser.Physics.ARCADE);

  // player.body.drag.set(0);
  player.body.maxVelocity.set(200);
  player.body.collideWorldBounds = true;

  //  Game input
  cursors = game.input.keyboard.createCursorKeys();
  //game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

  // player.animations.add('left', [0, 1, 2, 3], 10, true);
  // player.animations.add('right', [5, 6, 7, 8], 10, true);

}



function updatemenu() {


  // bullets.forEachExists(function (bullet) {
  //     game.physics.arcade.overlap(player, bullet, collisionPlayer, null, this);
  //     // game.physics.arcade.collide(,)
  //   });
  player.body.velocity.y = 0;
  player.body.velocity.x = 0;
  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    //player.animations.play('walk2', 5 , true);
  }
  else if (cursors.left.isDown) {
    player.body.velocity.x= -300;
    player.animations.play('walk1', 5 , true);
        
  }
  else if (cursors.right.isDown) {
    player.body.velocity.x = 300;
    player.animations.play('walk3', 5 , true);
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    player.animations.play('walk2', 5 , true);
  }
  else {
    player.body.velocity.x = 0
    player.body.velocity.y = 0
    player.animations.play('stop', 5 , true);
  }



 // if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
   // fireBullet();
  }

  // screenWrap(player);


}


