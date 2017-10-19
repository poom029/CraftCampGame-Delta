
var game = new Phaser.Game(1000, 700, Phaser.CANVAS, 'Once') 

var menu = { preload: preloadtMenu, create: createtMenu }
game.state.add('menu',menu)
game.state.start('menu')

function preloadtMenu()
{

  game.load.image('MenuBackground', 'assets/menu/BGMenu.png');
  game.load.image('MenuButtonStart', 'assets/menu/start.png');
  game.load.image('MenuButtonExit', 'assets/menu/exit.png');
  game.load.image('MenuButtonHelp', 'assets/menu/help.png');
  game.load.image('MenuButtonSetting', 'assets/menu/setting.png');
  game.load.image('MenuBGSetting', 'assets/menu/BGSetting.png');

}

function createtMenu()
{
  background = game.add.tileSprite(0, 0, 1000, 700, 'MenuBackground');
  
      button1 = game.add.button(game.world.centerX - 120, 250, 'MenuButtonStart', actionOnClick, this, 2, 1, 0);
      button1.scale.setTo(1, 0.9 );

      button2 = game.add.button(game.world.centerX - 20, 400, 'MenuButtonExit');
      button2.scale.setTo(0.5, 0.5);

      setting = game.add.image(900,520,'MenuButtonSetting');
      setting.scale.setTo = (0.01, 0.02);

  
      button.onInputOver.add(over, this);
      button.onInputOut.add(out, this);
      button.onInputUp.add(up, this);
  
 }
  
function up() 
{
    console.log('button up', arguments);
}
  
function over() 
{
    console.log('button over');
}
  
function out() {
    console.log('button out');
}
  
function actionOnClick ()
{
  game.state.add('chooseScene',stage1)
  game.state.start('chooseScene')
}

var scene = { preload: preloadScene , create: createScene , update: updateScene }
function preloadScene()
{
  game.load.image('waikruScene', 'assets')
}

function createScene()
{
 background = game.add.tileSprite(0, 0, 800, 600, 'waikruScene');
}

function updateScene()
{

}

var stage1 = { preload: preloadmenu, create: createmenu, update: updatemenu }

var map
function preloadmenu() {
  game.load.image('classroom', 'assets/F2/startclassfull.png');
  game.load.spritesheet('junja','assets/junja.png',90/3,127/4,12);
}

var sprite;
var cursors;
var player


function createmenu() 
{

  game.stage.disableVisibilityChange = true;
 

  //  A spacey background
  game.add.tileSprite(0, 0, 1028, 762, 'classroom');
  game.world.setBounds(0, 0, 1028, 762);
  player = game.add.sprite(400, 400, 'junja');
  player.scale.setTo(2,2);

  var walku = player.animations.add('walku',[9,10,11])
  var walkl = player.animations.add( 'walkl' , [3,4,5]);
  var walkr = player.animations.add( 'walkr' , [6,7,8]);
  var walkd = player.animations.add( 'walkd' , [0,1,2]);
  

  //  This will run in Canvas mode, so let's gain a little speed and display
  game.renderer.clearBeforeRender = true;
  game.renderer.roundPixels = true;

  //  We need arcade physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  

  //  Our ships bullets
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;

  //  and its physics settings
  game.physics.enable(player, Phaser.Physics.ARCADE);

  player.body.collideWorldBounds = true;

  //  Game input
  cursors = game.input.keyboard.createCursorKeys();
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

  //player.animations.add('left', [0, 1, 2, 3], 10, true);
  //player.animations.add('right', [5, 6, 7, 8], 10, true);
  game.camera.follow(player);
}



function updatemenu()
 {
  player.body.collideWorldBounds = true;

   bullets.forEachExists(function (bullet) {
       game.physics.arcade.overlap(player, bullet, collisionPlayer, null, this);
       // game.physics.arcade.collide(,)
    });
  player.body.velocity.y = 0;
  player.body.velocity.x = 0;
  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    player.animations.play('walku', 5 , true);
  }

  else if (cursors.left.isDown) {
    player.body.velocity.x= -300;
    player.animations.play('walkl', 5 , true)
  }
  else if (cursors.right.isDown) {
    player.body.velocity.x = 300;
    player.animations.play('walkr', 5 , true)
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    player.animations.play('walkd', 5 , true)
  }
  else
  {
      player.animations.stop();
  }
}
