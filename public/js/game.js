
var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'Once')

var menu = { preload: preloadtMenu, create: createtMenu }
game.state.add('menu', menu)
game.state.start('menu')
var howtoplay = { preload: preloadHT, create: createHT, update: updateHT }
game.state.add('howtoplay', howtoplay)
var stage1 = { preload: preloadRoom_1, create: createRoom_1, update: updateRoom_1 }
game.state.add('classroom_1', stage1)
var stage1_out = { preload: preloadRoom_1_out, create: createRoom_1_out, update: updateRoom_1_out }
game.state.add('classroom_1_out',stage1_out)
var stage2 = { preload: preloadstage, create: createstage, update: updatestage }
game.state.add('stage2', stage2)
var teacher2 = { preload: preloadteacher2, create: createteacher2, update: updateteacher2 }
game.state.add('teacher2', teacher2)
//game.state.start('')


function preloadtMenu()
{

  game.load.spritesheet('MenuButtonStart', 'assets/menu/startspite.png',393,390/3,3);
  game.load.spritesheet('HowTBT', 'assets/menu/howto.png',391,399/3,3);
  game.load.image('MenuBackground', 'assets/menu/BGnew2.png');
  game.load.image('MenuButtonHelp', 'assets/menu/help.png');
  game.load.image('MenuButtonSetting', 'assets/menu/setting.png');
  game.load.image('MenuBGSetting', 'assets/menu/BGSetting.png');


}

function createtMenu()
{
  background = game.add.tileSprite(0, 0, 1000, 600, 'MenuBackground');
  
      button1 = game.add.button(game.world.centerX - 200, 300, 'MenuButtonStart', actionOnClickStart, this, 1, 0, 2);
      button1.scale.setTo(1, 0.9 );

      HTbutton = game.add.button(game.world.centerX - 120, 450, 'HowTBT', actionOnClickHowT, this, 1, 0, 2)
      HTbutton.scale.setTo(0.6, 0.6);

      setting = game.add.image(900,520,'MenuButtonSetting');
      setting.scale.setTo = (0.01, 0.02);

//     var bar = game.add.graphics();
//     bar.beginFill(0x000000, 0.2);
//     bar.drawRect(0, 400, 1000, 100);

//     var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

//     var dialogCounter = 0;
//     var dialogMMenu = ['สวัสดี','ยินดีต้อนรับ','จบ']
    // text = game.add.text(0, 0, dia[dialogCounter++], style);
    // text.setText(dia[dialogCounter++])
    // text.setText(dia[dialogCounter++])
    // text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    // text.setTextBounds(game.world.centerX, 450);
}

function actionOnClickHowT ()
{
  game.state.start('howtoplay')
}
function actionOnClickStart ()
{
  game.state.start('classroom_1')

}
            //||||||||||HOW TO PLAY||||||||
function preloadHT()
{
  game.load.image('HowToPlayScene', 'assets/howto/howtoto.png')
  game.load.image('Back', 'assets/howto/back.png')
  game.load.spritesheet('junja','assets/junja.png',90/3,127/4,12);
}

function createHT()
{
 background = game.add.tileSprite(0, 0, 1000, 600, 'HowToPlayScene');
 game.world.setBounds(0, 0, 1000, 600);

 back = game.add.image (50, 450,'Back');

 player = game.add.sprite(game.world.centerX - 120, 50, 'junja');
 game.physics.enable(player, Phaser.Physics.ARCADE);
 player.scale.setTo(3,3);
 player.body.collideWorldBounds = true;

 cursors = game.input.keyboard.createCursorKeys();

 var walku = player.animations.add('walku',[9,10,11])
 var walkl = player.animations.add( 'walkl' , [3,4,5]);
 var walkr = player.animations.add( 'walkr' , [6,7,8]);
 var walkd = player.animations.add( 'walkd' , [0,1,2]);
}

function updateHT()
{
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

function preloadRoom_1() 
{
  game.load.image('classroom', 'assets/F2/classroom/startclassfull.png');
  game.load.spritesheet('wallclassroom_left1', 'assets/F2/classroom/wallleftclass_1.png')
  game.load.spritesheet('junja','assets/junja.png',90/3,127/4,12);
  game.load.spritesheet('wallclassroom_top' ,'assets/F2/classroom/wallupclass_2.png')
  game.load.spritesheet('Chair1', 'assets/F2/classroom/studentfront_1.png')  
  game.load.spritesheet('Chair2', 'assets/F2/classroom/studentfront.png')
  game.load.spritesheet('ChairColli', 'assets/F2/classroom/studentfront_collider.png')
  game.load.spritesheet('TTableTop', 'assets/F2/classroom/teachertablefront_1.png')
  game.load.spritesheet('TTableBottom', 'assets/F2/classroom/teachertablefront.png')
  game.load.spritesheet('TTableCollider', 'assets/F2/classroom/teachertablefrontCollide.png')
  game.load.spritesheet('WallLeft', 'assets/F2/classroom/wallleftclassL.png')
}

var sprite;
var cursors;
var player
var walltop
var wallL
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

  layerCollider = game.add.group();
  layerCollider.enableBody = true;
  layerCollider.physicsBodyType = Phaser.Physics.ARCADE;
 


  game.physics.startSystem(Phaser.Physics.ARCADE);

  classroomfull = game.add.tileSprite(0, 0, 1021, 700, 'classroom');
  layerBG.add(classroomfull);

  walltop = game.add.sprite(45, 5, 'wallclassroom_top');
  game.physics.enable(walltop, Phaser.Physics.ARCADE);
  walltop.body.immovable = true;

  wallRight1 = game.add.sprite(975, 205, 'wallclassroom_left1');
  game.physics.enable(wallRight1, Phaser.Physics.ARCADE);
  wallRight1.body.immovable = true;

  wallL = game.add.sprite(0, 0, 'WallLeft');
  game.physics.enable(wallL, Phaser.Physics.ARCADE);
  wallL.body.immovable = true;

  classroomdoor = game.add.sprite(990,160);
  classroomdoor.visible = false;
  game.physics.enable(classroomdoor, Phaser.Physics.ARCADE);
  classroomdoor.body.immovable = true;

  var cStuT;
  for (var YcStT = 0; YcStT < 2; YcStT++)
   {
       for (var XcStT = 0; XcStT < 4; XcStT++)
      {
        cStuT = layerT.create(250 + (XcStT * 150), 400 + (YcStT * 150), 'Chair1');
      }
  }

  var cStuB;
  for (var YcStB = 0; YcStB < 2; YcStB++)
  {
      for (var XcStB = 0; XcStB < 4; XcStB++)
      {
        cStuB = layerB.create(250 + (XcStB * 150), 400 + (YcStB * 150), 'Chair2');
      }
  }
  
  var cStuColli
  for (var YcStColli = 0; YcStColli < 2; YcStColli++)
  {
      for (var XcStColli = 0; XcStColli < 4; XcStColli++)
      {
        cStuColli = layerCollider.create(250 + (XcStColli * 150), 420 + (YcStColli * 150), 'ChairColli');
        cStuColli.body.immovable = true;
      }
  }
  
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
  var PstartD = player.animations.add('faceToD',[1]);
  player.animations.play('faceToD', true)
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
  game.physics.arcade.collide(layer, layerCollider);
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

function preloadRoom_1_out() 
{
  game.load.image('classroom', 'assets/F2/classroom/startclassfull.png');
  game.load.spritesheet('wallclassroom_left1', 'assets/F2/classroom/wallleftclass_1.png')
  game.load.spritesheet('junja','assets/junja.png',90/3,127/4,12);
  game.load.spritesheet('wallclassroom_top' ,'assets/F2/classroom/wallupclass_2.png')
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
var classroomfull
var chairT
var chairB
var chairCollider
var TtableT
var TtableB
var TtableCollider


function createRoom_1_out() 
{

  layerBG = game.add.group();
  layerB = game.add.group();
  layer = game.add.group();
  layerT = game.add.group();
  layerTT = game.add.group();

  layerCollider = game.add.group();
  layerCollider.enableBody = true;
  layerCollider.physicsBodyType = Phaser.Physics.ARCADE;
 

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

  classroomdoor = game.add.sprite(995,160);
  classroomdoor.visible = false;
  game.physics.enable(classroomdoor, Phaser.Physics.ARCADE);
  classroomdoor.body.immovable = true;

  var cStuT;
  for (var YcStT = 0; YcStT < 2; YcStT++)
   {
       for (var XcStT = 0; XcStT < 4; XcStT++)
      {
        cStuT = layerT.create(250 + (XcStT * 150), 400 + (YcStT * 150), 'Chair1');
      }
  }

  var cStuB;
  for (var YcStB = 0; YcStB < 2; YcStB++)
  {
      for (var XcStB = 0; XcStB < 4; XcStB++)
      {
        cStuB = layerB.create(250 + (XcStB * 150), 400 + (YcStB * 150), 'Chair2');
      }
  }
  
  var cStuColli
  for (var YcStColli = 0; YcStColli < 2; YcStColli++)
  {
      for (var XcStColli = 0; XcStColli < 4; XcStColli++)
      {
        cStuColli = layerCollider.create(250 + (XcStColli * 150), 420 + (YcStColli * 150), 'ChairColli');
        cStuColli.body.immovable = true;
      }
  }
  
  TtableT = game.add.sprite(160, 250, 'TTableTop')
  TtableT.scale.setTo(1.5, 1.5)
  layerT.add(TtableT);

  TtableB = game.add.sprite(160, 250, 'TTableBottom')
  TtableB.scale.setTo(1.5, 1.5)
  layerB.add(TtableB);

  TtableCollider = game.add.sprite(165, 275, 'TTableCollider')
  TtableCollider.scale.setTo(1.5, 1.5)
  game.physics.enable(TtableCollider, Phaser.Physics.ARCADE);
  TtableCollider.body.immovable = true;
  layerBG.add(TtableCollider);

  TtableCollider2 = game.add.sprite(165, 280, 'TTableCollider')
  TtableCollider2.scale.setTo(1.5, 1.5)
  game.physics.enable(TtableCollider2, Phaser.Physics.ARCADE);
  TtableCollider2.body.immovable = true;
  layerBG.add(TtableCollider2);

  player = game.add.sprite(900, 120, 'junja');
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.scale.setTo(2.5, 2.5);
  player.body.collideWorldBounds = true;
  var PstartR = player.animations.add('faceToL',[4]);
  player.animations.play('faceToL', true)
  layer.add(player);

  game.stage.disableVisibilityChange = true;

  game.world.setBounds(0, 0, 1021, 700);

  var walku = player.animations.add('walku',[9,10,11])
  var walkl = player.animations.add( 'walkl' , [3,4,5]);
  var walkr = player.animations.add( 'walkr' , [6,7,8]);
  var walkd = player.animations.add( 'walkd' , [0,1,2]);
  
  game.renderer.clearBeforeRender = true;
  game.renderer.roundPixels = true;
 


  player.body.collideWorldBounds = true;

  //  Game input
  cursors = game.input.keyboard.createCursorKeys();
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

  game.camera.follow(player);
  game.state.start('teacher2')
}



function updateRoom_1_out()
 {
  game.physics.arcade.collide(player, walltop);
  game.physics.arcade.collide(player, wallRight1);
  game.physics.arcade.collide(player, wallL);
  game.physics.arcade.collide(layer, layerCollider);
  game.physics.arcade.collide(player, TtableCollider);
  game.physics.arcade.collide(player, TtableCollider2);

  game.physics.arcade.overlap(player, classroomdoor, collisionHandler, null, this);

  player.body.velocity.y = 0;
  player.body.velocity.x = 0;

  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    player.animations.play('walku', 5, true);
  }
  else if (cursors.left.isDown) {
    player.body.velocity.x = -300;
    player.animations.play('walkl', 5, true)
  }
  else if (cursors.right.isDown) {
    player.body.velocity.x = 300;
    player.animations.play('walkr', 5, true)
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    player.animations.play('walkd', 5, true)
  }
  else {
    player.animations.stop();
  }

}
function collisionHandler(player,classroomdoor)
{
  game.state.start('stage2')
}

var map
function preloadstage() {
  game.load.image('collidor', 'assets/F2/collidor/collidor.png');
  game.load.spritesheet('junja', 'assets/junja.png', 90 / 3, 127 / 4, 12);
  game.load.spritesheet('collidor11', 'assets/F2/collidor/collidor11.png');
  game.load.spritesheet('collidor12', 'assets/F2/collidor/collidor12.png');
  game.load.spritesheet('collidor13', 'assets/F2/collidor/collidor13.png');
  game.load.spritesheet('collidor14', 'assets/F2/collidor/collidor14.png');
}

var sprite;
var cursors;
var player

function createstage() {

  game.stage.disableVisibilityChange = true;

  //  A spacey background
  game.add.tileSprite(0, 0, 1712, 1301, 'collidor');
  game.world.setBounds(0, 0, 1712, 1301);

  player = game.add.sprite(90, 790, 'junja');
  player.scale.setTo(2,2);
  var PstartR = player.animations.add('faceToR',[7]);
  player.animations.play('faceToR', true)

  doorToCR = game.add.sprite(55,790);
  game.physics.enable(doorToCR, Phaser.Physics.ARCADE);
  doorToCR.body.immovable = true;

  collidor11 = game.add.sprite(315,-710, 'collidor11');
  collidor11.visible = false
  collidor12 = game.add.sprite(-10, 10, 'collidor12');
  collidor12.visible = false
  collidor13 = game.add.sprite(225, -30, 'collidor13');
  collidor13.visible = false
  collidor14 = game.add.sprite(100, 0, 'collidor14');
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

  var walku = player.animations.add('walku', [9, 10, 11])
  var walkl = player.animations.add('walkl', [3, 4, 5]);
  var walkr = player.animations.add('walkr', [6, 7, 8]);
  var walkd = player.animations.add('walkd', [0, 1, 2]);


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

  // this.upkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W)
  //player.animations.add('left', [0, 1, 2, 3], 10, true);
  //player.animations.add('right', [5, 6, 7, 8], 10, true);
  game.camera.follow(player);
}

var spacebarCooldown = 0;
function updatestage() {
  player.body.collideWorldBounds = true;
  game.physics.arcade.collide(player, collidor11);
  game.physics.arcade.collide(player, collidor12);
  game.physics.arcade.collide(player, collidor13);
  game.physics.arcade.collide(player, collidor14);

  game.physics.arcade.overlap(player, doorToCR, TOclassroom, null, this);

  player.body.velocity.y = 0;
  player.body.velocity.x = 0;
  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    player.animations.play('walku', 5, true);
  }

  else if (cursors.left.isDown) {
    player.body.velocity.x = -300;
    player.animations.play('walkl', 5, true)
  }
  else if (cursors.right.isDown) {
    player.body.velocity.x = 300;
    player.animations.play('walkr', 5, true)
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    player.animations.play('walkd', 5, true)
  }
  else {
    player.animations.stop();
  }
}

// if (spacbar.isDown && spacebarCooldown<=game.time.now)
// {
//   console.log ('ห้ะ')
//   spacebarCooldown = game.time.now + 1000;
// }


function preloadteacher2() {
  game.load.image('teacherfloor', 'assets/F3/teacherroom/teacherfloor.png');
  game.load.spritesheet('junja', 'assets/junja.png', 90 / 3, 127 / 4, 12);
}
function createteacher2() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0, 50, 1027, 478, 'teacherfloor');
  game.world.setBounds(0, 0, 1027, 478);
  player = game.add.sprite(85, 790, 'junja');
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.scale.setTo(2, 2); 
  game.physics.enable(player, Phaser.Physics.ARCADE); 
  var walku = player.animations.add('walku', [9, 10, 11]) 
  var walkl = player.animations.add('walkl', [3, 4, 5]); 
  var walkr = player.animations.add('walkr', [6, 7, 8]); 
  var walkd = player.animations.add('walkd', [0, 1, 2]); 
}

function updateteacher2() {
  player.body.collideWorldBounds = true;
  player.body.velocity.y = 0;
  player.body.velocity.x = 0;
  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    player.animations.play('walku', 5, true);
  }

function TOclassroom()
  {
    game.state.start('classroom_1_out')
  }
}