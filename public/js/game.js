
var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'Once') 

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
   
function out() 
{ 
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

var stage1 = { preload: preloadRoom_1, create: createRoom_1, update: updateRoom_1 }

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
  game.physics.enable(chairCollider, Phaser.Physics.ARCADE);
  chairCollider.body.immovable = true;

  chairCollider2 = game.add.sprite(405, 440 , 'ChairColli')
  game.physics.enable(chairCollider2, Phaser.Physics.ARCADE);
  chairCollider2.body.immovable = true;

  chairCollider3 = game.add.sprite(555, 440 , 'ChairColli')
  game.physics.enable(chairCollider3, Phaser.Physics.ARCADE);
  chairCollider3.body.immovable = true;

  chairCollider4 = game.add.sprite(705, 440 , 'ChairColli')
  game.physics.enable(chairCollider4, Phaser.Physics.ARCADE);
  chairCollider4.body.immovable = true;
     //Row 2
  chairCollider5 = game.add.sprite(255, 590 , 'ChairColli')
  game.physics.enable(chairCollider5, Phaser.Physics.ARCADE);
  chairCollider5.body.immovable = true;

  chairCollider6 = game.add.sprite(405, 590 , 'ChairColli')
  game.physics.enable(chairCollider6, Phaser.Physics.ARCADE);
  chairCollider6.body.immovable = true;

  chairCollider7 = game.add.sprite(555, 590 , 'ChairColli')
  game.physics.enable(chairCollider7, Phaser.Physics.ARCADE);
  chairCollider7.body.immovable = true;

  chairCollider8 = game.add.sprite(705, 590 , 'ChairColli')
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
