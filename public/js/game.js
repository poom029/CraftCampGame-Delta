
var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'Once') 

var menu = { preload: preloadtMenu, create: createtMenu }
game.state.add('menu',menu)
game.state.start('menu')
var stage2 = { preload: preloadstage, create: createstage, update: updatestage }
game.state.add('stage2',stage2)
// game.state.start('stage2')


function preloadtMenu()
{

  game.load.image('MenuBackground', 'assets/menu/BGMenu.png');
  game.load.spritesheet('MenuButtonStart', 'assets/menu/startspite.png',393,390/3,3);
  game.load.image('MenuButtonHelp', 'assets/menu/help.png');
  game.load.image('MenuButtonSetting', 'assets/menu/setting.png');
  game.load.image('MenuBGSetting', 'assets/menu/BGSetting.png');

}

function createtMenu()
{
  background = game.add.tileSprite(0, 0, 1000, 700, 'MenuBackground');
  
      button1 = game.add.button(game.world.centerX - 120, 250, 'MenuButtonStart', actionOnClickStart, this, 1, 0, 2);
      button1.scale.setTo(1, 0.9 );

      setting = game.add.image(900,520,'MenuButtonSetting');
      setting.scale.setTo = (0.01, 0.02);

    var bar = game.add.graphics();
    bar.beginFill(0x000000, 0.2);
    bar.drawRect(0, 400, 1000, 100);

    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    var dialogCounter = 0;
    var dialogMMenu = ['สวัสดี','ยินดีต้อนรับ','จบ']
    text = game.add.text(0, 0, dia[dialogCounter++], style);
    // text.setText(dia[dialogCounter++])
    // text.setText(dia[dialogCounter++])
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    text.setTextBounds(game.world.centerX, 450);



  
 }
  
  
function actionOnClickStart ()
{
  game.state.add('stage2',stage2)
  game.state.start('stage2')
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



var map
function preloadstage() {
  game.load.image('collidor', 'assets/F2/collidor/collidor.png');
  game.load.spritesheet('junja','assets/junja.png',90/3,127/4,12);
  game.load.spritesheet('collidor11','assets/F2/collidor/collidor11.png');
  game.load.spritesheet('collidor12','assets/F2/collidor/collidor12.png');
  game.load.spritesheet('collidor13','assets/F2/collidor/collidor13.png');
  game.load.spritesheet('collidor14','assets/F2/collidor/collidor14.png');
}

var sprite;
var cursors;
var player


function createstage() 
{

  game.stage.disableVisibilityChange = true;
 

  //  A spacey background
  game.add.tileSprite(0, 0, 1712, 1301, 'collidor');
  game.world.setBounds(0, 0, 1712, 1301);
  player = game.add.sprite(85, 790, 'junja');
  player.scale.setTo(2,2);
  collidor11 = game.add.sprite(315,-710, 'collidor11');
  collidor11.visible = false
  collidor12 = game.add.sprite(-10,10, 'collidor12');
  collidor12.visible = false
  collidor13 = game.add.sprite(225,-30, 'collidor13');
  collidor13.visible = false
  collidor14 = game.add.sprite(100,0, 'collidor14');
  collidor14.visible = false

  game.physics.enable(collidor11, Phaser.Physics.ARCADE);
  collidor11.body.immovable = true;
  game.physics.enable(collidor12, Phaser.Physics.ARCADE);
	collidor12.body.checkCollision.up = false;
	collidor12.body.checkCollision.down = true;
  collidor12.body.immovable = true;
  game.physics.enable(collidor13, Phaser.Physics.ARCADE);
	collidor13.body.checkCollision.up = false;
	collidor13.body.checkCollision.down = true;
  collidor13.body.immovable = true;
  game.physics.enable(collidor14, Phaser.Physics.ARCADE);
	collidor14.body.checkCollision.up = false;
	collidor14.body.checkCollision.down = true;
  collidor14.body.immovable = true;
  
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
  spacbar = game.input.keyboard.addKey([Phaser.Keyboard.SPACEBAR]);

  //player.animations.add('left', [0, 1, 2, 3], 10, true);
  //player.animations.add('right', [5, 6, 7, 8], 10, true);
  game.camera.follow(player);
}

var spacebarCooldown = 0;
function updatestage()
  
  {
  player.body.collideWorldBounds = true;
  game.physics.arcade.collide(player, collidor11);
  game.physics.arcade.collide(player, collidor12);
  game.physics.arcade.collide(player, collidor13);
  game.physics.arcade.collide(player, collidor14);
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
  if (spacbar.isDown && spacebarCooldown<=game.time.now){
    console.log ('ห้ะ')
    spacebarCooldown = game.time.now + 500;
  }
}