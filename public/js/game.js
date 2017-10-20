
var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'Once') 

var menu = { preload: preloadtMenu, create: createtMenu }
game.state.add('menu',menu)
game.state.start('menu')
var stage1 = { preload: preloadRoom_1, create: createRoom_1, update: updateRoom_1 }
game.state.add('classroom_1',stage1)
var stage2 = { preload: preloadstage, create: createstage, update: updatestage }
game.state.add('stage2',stage2)
// game.state.start('stage2')


function preloadtMenu()
{

  game.load.image('MenuBackground', 'assets/menu/BGMenu.png');
  game.load.image('MenuBackground', 'assets/menu/BGnew2.png');
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
    // text = game.add.text(0, 0, dia[dialogCounter++], style);
    // text.setText(dia[dialogCounter++])
    // text.setText(dia[dialogCounter++])
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    text.setTextBounds(game.world.centerX, 450);
    // text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    // text.setTextBounds(game.world.centerX, 450);



  
 }
  
  
function actionOnClickStart ()
{
  game.state.start('classroom_1')
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



var map
function preloadRoom_1() 
{
  game.load.image('classroom', 'assets/F2/classroom/startclassfull.png');
  game.load.spritesheet('wallclassroom_left1', 'assets/F2/classroom/wallleftclass_1.png')
  game.load.spritesheet('junja','assets/junja.png',90/3,127/4,12);
  game.load.spritesheet('wallclassroom_top' ,'assets/F2/classroom/wallupclass_2.png')
  game.load.spritesheet('classDoor', 'assets/F2/classroom/classDoor_1.png')
  game.load.spritesheet('Chair1', 'assets/F2/classroom/studentfront_1.png')  
  game.load.spritesheet('Chair2', 'assets/F2/classroom/studentfront.png')
  game.load.spritesheet('ChairColli', 'assets/F2/classroom/studentfront_collider.png')
  game.load.spritesheet('TTableTop', 'assets/F2/classroom/teachertablefront_1.png')
  game.load.spritesheet('TTableBottom' , 'assets/F2/classroom/teachertablefront.png')
  game.load.spritesheet('TTableCollider' , 'assets/F2/classroom/teachertablefrontCollide.png')
  game.load.spritesheet('WallLeft' , 'assets/F2/classroom/wallleftclassL.png')
}

var sprite;
var cursors;
var player
var walltop
var wallL
var classroomdoor
var classroomfull
var chairT
var chairB
var chairCollider
var TtableT
var TtableB
var TtableCollider


function createRoom_1() 
{
  layerBG = game.add.group();
  layerB = game.add.group();
  layer = game.add.group();
  layerT = game.add.group();
  layerTT = game.add.group();
 

  game.physics.startSystem(Phaser.Physics.ARCADE);

  classroomfull = game.add.tileSprite(0, 0, 1021, 700, 'classroom');
  layerBG.add(classroomfull);

  walltop =  game.add.sprite(45, 5, 'wallclassroom_top');
  game.physics.enable(walltop, Phaser.Physics.ARCADE);
  walltop.body.immovable = true;

  wallRight1 = game.add.sprite(975, 205, 'wallclassroom_left1');
  game.physics.enable(wallRight1, Phaser.Physics.ARCADE);
  wallRight1.body.immovable = true;

  wallL = game.add.sprite(0, 0, 'WallLeft');
  game.physics.enable(wallL, Phaser.Physics.ARCADE);
  wallL.body.immovable = true;

  classroomdoor = game.add.sprite(990,160 , 'classDoor');
  classroomdoor.visible = false;
  game.physics.enable(classroomdoor, Phaser.Physics.ARCADE);
  classroomdoor.body.immovable = true;

  chairT = game.add.sprite(250 ,400 , 'Chair1');
  layerT.add(chairT);
  chairT = game.add.sprite(400 ,400 , 'Chair1');
  layerT.add(chairT);
  chairT = game.add.sprite(550 ,400 , 'Chair1');
  layerT.add(chairT);
  chairT = game.add.sprite(700 ,400 , 'Chair1');
  layerT.add(chairT);
  //Row 2
  chairT = game.add.sprite(250 ,550 , 'Chair1');
  layerT.add(chairT);
  chairT = game.add.sprite(400 ,550 , 'Chair1');
  layerT.add(chairT);
  chairT = game.add.sprite(550 ,550 , 'Chair1');
  layerT.add(chairT);
  chairT = game.add.sprite(700 ,550 , 'Chair1');
  layerT.add(chairT);

  // function createChairB()
  // {
  //   for(var chairB_x = 0; chairB_x < 3; chairB_x++)
  //   {
  //     var chairBottom = chairB.create(chairB_x * 48, 50 + chairB_x, 'Chair2');
  //   }
  // }

  chairB = game.add.sprite(250 ,400 , 'Chair2');
  layerB.add(chairB);
  chairB = game.add.sprite(400 ,400 , 'Chair2');
  layerB.add(chairB);
  chairB = game.add.sprite(550 ,400 , 'Chair2');
  layerB.add(chairB);
  chairB = game.add.sprite(700 ,400 , 'Chair2');
  layerB.add(chairB);
    //Row 2
  chairB = game.add.sprite(250 ,550 , 'Chair2');
  layerB.add(chairB);
  chairB = game.add.sprite(400 ,550 , 'Chair2');
  layerB.add(chairB);
  chairB = game.add.sprite(550 ,550 , 'Chair2');
  layerB.add(chairB);
  chairB = game.add.sprite(700 ,550 , 'Chair2');
  layerB.add(chairB);


  
  chairCollider = game.add.sprite(255, 440 , 'ChairColli')
  chairCollider = game.add.sprite(250, 420 , 'ChairColli')
  game.physics.enable(chairCollider, Phaser.Physics.ARCADE);
  chairCollider.body.immovable = true;

  chairCollider2 = game.add.sprite(405, 440 , 'ChairColli')
  chairCollider2 = game.add.sprite(400, 420 , 'ChairColli')
  game.physics.enable(chairCollider2, Phaser.Physics.ARCADE);
  chairCollider2.body.immovable = true;

  chairCollider3 = game.add.sprite(555, 440 , 'ChairColli')
  chairCollider3 = game.add.sprite(550, 420 , 'ChairColli')
  game.physics.enable(chairCollider3, Phaser.Physics.ARCADE);
  chairCollider3.body.immovable = true;

  chairCollider4 = game.add.sprite(705, 440 , 'ChairColli')
  chairCollider4 = game.add.sprite(700, 420 , 'ChairColli')
  game.physics.enable(chairCollider4, Phaser.Physics.ARCADE);
  chairCollider4.body.immovable = true;
     //Row 2
  chairCollider5 = game.add.sprite(255, 590 , 'ChairColli')
  chairCollider5 = game.add.sprite(250, 570 , 'ChairColli')
  game.physics.enable(chairCollider5, Phaser.Physics.ARCADE);
  chairCollider5.body.immovable = true;

  chairCollider6 = game.add.sprite(405, 590 , 'ChairColli')
  chairCollider6 = game.add.sprite(400, 570 , 'ChairColli')
  game.physics.enable(chairCollider6, Phaser.Physics.ARCADE);
  chairCollider6.body.immovable = true;

  chairCollider7 = game.add.sprite(555, 590 , 'ChairColli')
  chairCollider7 = game.add.sprite(550, 570 , 'ChairColli')
  game.physics.enable(chairCollider7, Phaser.Physics.ARCADE);
  chairCollider7.body.immovable = true;

  chairCollider8 = game.add.sprite(705, 590 , 'ChairColli')
  chairCollider8 = game.add.sprite(700, 570 , 'ChairColli')
  game.physics.enable(chairCollider8, Phaser.Physics.ARCADE);
  chairCollider8.body.immovable = true;

  TtableT = game.add.sprite(160, 250, 'TTableTop')
  TtableT.scale.setTo(1.5,1.5)
  layerT.add(TtableT);

  TtableB = game.add.sprite(160, 250, 'TTableBottom')
  TtableB.scale.setTo(1.5,1.5)
  layerB.add(TtableB);

  TtableCollider = game.add.sprite(165, 275, 'TTableCollider')
  TtableCollider.scale.setTo(1.5,1.5)
  game.physics.enable(TtableCollider, Phaser.Physics.ARCADE);
  TtableCollider.body.immovable = true;
  layerBG.add(TtableCollider);

  TtableCollider2 = game.add.sprite(165, 280, 'TTableCollider')
  TtableCollider2.scale.setTo(1.5,1.5)
  game.physics.enable(TtableCollider2, Phaser.Physics.ARCADE);
  TtableCollider2.body.immovable = true;
  layerBG.add(TtableCollider2);



  player = game.add.sprite(400, 200, 'junja');
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.scale.setTo(2.5,2.5);
  player.body.collideWorldBounds = true;
  layer.add(player);

  game.stage.disableVisibilityChange = true;

  game.world.setBounds(0, 0, 1021, 700);

  var walku = player.animations.add('walku',[9,10,11])
  var walkl = player.animations.add( 'walkl' , [3,4,5]);
  var walkr = player.animations.add( 'walkr' , [6,7,8]);
  var walkd = player.animations.add( 'walkd' , [0,1,2]);
  

  //  This will run in Canvas mode, so let's gain a little speed and display
  game.renderer.clearBeforeRender = true;
  game.renderer.roundPixels = true;

  //  and its physics settings
 

  player.body.collideWorldBounds = true;

  //  Game input
  cursors = game.input.keyboard.createCursorKeys();
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

  game.camera.follow(player);
}



function updateRoom_1()
 {
  game.physics.arcade.collide(player, walltop);
  game.physics.arcade.collide(player, wallRight1);
  game.physics.arcade.collide(player, wallL);
  game.physics.arcade.collide(player, chairCollider);
  game.physics.arcade.collide(player, chairCollider2);
  game.physics.arcade.collide(player, chairCollider3);
  game.physics.arcade.collide(player, chairCollider4);
  game.physics.arcade.collide(player, chairCollider5);
  game.physics.arcade.collide(player, chairCollider6);
  game.physics.arcade.collide(player, chairCollider7);
  game.physics.arcade.collide(player, chairCollider8);
  game.physics.arcade.collide(player, TtableCollider);
  game.physics.arcade.collide(player, TtableCollider2);

  game.physics.arcade.overlap(player, classroomdoor, collisionHandler, null, this);

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
function collisionHandler(player,classroomdoor)
{
  game.state.add('stage2',stage2)
  game.state.start('stage2')
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
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
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
    spacebarCooldown = game.time.now + 1000;
  }
}