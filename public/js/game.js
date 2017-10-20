var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'Once')

var item = {'พาน':false,'ดอกไม้':false,'ธูป':false}

var menu = { preload: preloadtMenu, create: createtMenu }
game.state.add('menu', menu)
var howtoplay = { preload: preloadHT, create: createHT, update: updateHT }
game.state.add('howtoplay', howtoplay)
var stage1 = { preload: preloadRoom_1, create: createRoom_1, update: updateRoom_1 }
game.state.add('classroom_1', stage1)
var stage2 = { preload: preloadstage, create: createstage, update: updatestage }
game.state.add('stage2', stage2)
var teacher2 = { preload: preloadteacher2, create: createteacher2, update: updateteacher2 }
game.state.add('teacher2', teacher2)
var PTscRoom = { preload: preloadPtoSCroom, create: createPtoSCroom, update: updatePtoSCroom }
game.state.add('pathSC',PTscRoom)
var scRoom = { preload: preloadSCroom, create: createSCroom, update: updateSCroom }
game.state.add('SC',scRoom)

game.state.start('menu')

function preloadtMenu()
{

  game.load.spritesheet('MenuButtonStart', 'assets/menu/startspite.png',393,390/3,3);
  game.load.spritesheet('HowTBT', 'assets/menu/howto.png',391,399/3,3);
  game.load.image('MenuBackground', 'assets/menu/BGnew2.png');
  game.load.image('MenuButtonHelp', 'assets/menu/help.png');
  game.load.image('MenuButtonSetting', 'assets/menu/setting.png');
  game.load.image('MenuBGSetting', 'assets/menu/BGSetting.png');
  game.load.audio('menubgm','assets/music/menubgm.mp3');
  game.load.audio('starts','assets/music/b3.mp3')
  game.load.audio('howtos','assets/music/b2.mp3')
  game.load.audio('bgmg','assets/music/bgm all1.30.mp3')
  game.load.audio('fs','assets/music/fs.mp3')
  game.load.audio('endcbgm','assets/music/Endcredit.mp3')
  game.load.audio('odoor','assets/music/odoor.mp3')

}
var menubgmusic
function createtMenu()
{
  background = game.add.tileSprite(0, 0, 1000, 600, 'MenuBackground');
  
      button1 = game.add.button(game.world.centerX - 200, 300, 'MenuButtonStart', actionOnClickStart, this, 1, 0, 2);
      button1.scale.setTo(1, 0.9 );

      HTbutton = game.add.button(game.world.centerX - 120, 450, 'HowTBT', actionOnClickHowT, this, 1, 0, 2)
      HTbutton.scale.setTo(0.6, 0.6);

      setting = game.add.image(900,520,'MenuButtonSetting');
      setting.scale.setTo = (0.01, 0.02);
      menubgm = game.add.audio('menubgm')
      menubgm.loopFull(0.9)
      starts = game.add.audio('starts')
      howtos = game.add.audio('howtos')
      bgmg = game.add.audio('bgmg')
      fs = game.add.audio('fs')
      endcbgm = game.add.audio('endcbgm')
      odoor = game.add.audio('odoor')
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
  bgmg.loopFull(0.6)

}
            //||||||||||HOW TO PLAY||||||||
function preloadHT()
{
  game.load.image('HowToPlayScene', 'assets/howto/howtoto.png')
  game.load.spritesheet('Back', 'assets/howto/back1.png',144,279/3,3)
  game.load.spritesheet('junja','assets/junja.png',90/3,127/4,12);
  game.load.spritesheet('interactTEXT','assets/howto/interact.png')
}

var spacbar
var onBack = false
function createHT()
{
 background = game.add.tileSprite(0, 0, 1000, 600, 'HowToPlayScene');
 game.world.setBounds(0, 0, 1000, 600);

 InteractTEXT = game.add.sprite (200, 450,'interactTEXT');
 back = game.add.sprite (50, 450,'Back');
 game.physics.enable(back, Phaser.Physics.ARCADE);
 back.enableBody = true;
 back.animations.add('backButton',[0,1])
 back.animations.add('pushBack',[1]);
 back.animations.add('pullBack',[0]);
 

 player = game.add.sprite(game.world.centerX - 120, 50, 'junja');
 game.physics.enable(player, Phaser.Physics.ARCADE);
 player.scale.setTo(3,3);
 player.body.collideWorldBounds = true;

 cursors = game.input.keyboard.createCursorKeys();

 var walku = player.animations.add('walku',[9,10,11])
 var walkl = player.animations.add( 'walkl' , [3,4,5]);
 var walkr = player.animations.add( 'walkr' , [6,7,8]);
 var walkd = player.animations.add( 'walkd' , [0,1,2]);

 spacbar = game.input.keyboard.addKey([Phaser.Keyboard.SPACEBAR]);

}
var spacebarCooldown = 0;
function updateHT()
{
  player.body.velocity.y = 0;
  player.body.velocity.x = 0;

  if(onBack)
  {
    back.animations.play('pullBack', true)
  }

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
  
 
  game.physics.arcade.overlap(player, back, onBackButton, null, this);

  function onBackButton(player,back)
  {
    onBack = true
    if(onBack)
    {
      back.animations.play('pushBack', true);
        if (spacbar.isDown && spacebarCooldown<=game.time.now)
      {
        game.state.start('menu')
      }
    }

    
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
 
  fromClassroom = true;
  fromSCroom = false
  fromPTsecret = false;
  fromStage2 = false;

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

  if(fromStage2)
  {
    player = game.add.sprite(900, 120, 'junja');
    var PstartL = player.animations.add('faceToL',[4]);
    player.animations.play('faceToL', true)
  }
  else
  {
    player = game.add.sprite(400, 200, 'junja');
    var PstartD = player.animations.add('faceToD',[1]);
    player.animations.play('faceToD', true)
  }
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
  game.state.start('stage2')
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



var map
function preloadstage() 
{
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
var fromStage2 = false;
var fromClassroom = false;

function createstage() {

  game.stage.disableVisibilityChange = true;
  fromStage2 = true;
  fromClassroom = false;
  fromSCroom = false
  fromPTsecret = false;

  //  A spacey background

  game.add.tileSprite(0, 0, 1712, 1301, 'collidor');
  game.world.setBounds(0, 0, 1712, 1301);

  if(fromSCroom)
  {
    player = game.add.sprite(250, 165, 'junja');
    var PstartD = player.animations.add('faceToR',[7]);
    player.animations.play('faceToR', true)
    
  }
  else if(fromClassroom)
  {
    player = game.add.sprite(65,790, 'junja'); 
    var PstartL = player.animations.add('faceToD',[1]);
    player.animations.play('faceToD', true)
  }else
  {
    {
      player = game.add.sprite(160, 50, 'junja'); 
      var PstartL = player.animations.add('faceToD',[1]);
      player.animations.play('faceToD', true)
    }
  }

  doorToCR = game.add.sprite(55,790);
  game.physics.enable(doorToCR, Phaser.Physics.ARCADE);
  doorToCR.body.immovable = true;

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
  toTroom = game.add.sprite(55,580);
  toTroom.visible = true;
  game.physics.enable(toTroom, Phaser.Physics.ARCADE);
  toTroom.body.immovable = true;

  stairD = game.add.sprite(250,165);
  game.physics.enable(stairD, Phaser.Physics.ARCADE);
  stairD.body.immovable = true;

  var walku = player.animations.add('walku', [9, 10, 11])
  var walkl = player.animations.add('walkl', [3, 4, 5]);
  var walkr = player.animations.add('walkr', [6, 7, 8]);
  var walkd = player.animations.add('walkd', [0, 1, 2]);


  //  This will run in Canvas mode, so let's gain a little speed and display
  game.renderer.clearBeforeRender = true;
  game.renderer.roundPixels = true;

  //  We need arcade physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

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
function updatestage() 
{
  player.body.collideWorldBounds = true;
  game.physics.arcade.collide(player, collidor11);
  game.physics.arcade.collide(player, collidor12);
  game.physics.arcade.collide(player, collidor13);
  game.physics.arcade.collide(player, collidor14);
  
  game.physics.arcade.overlap(player, toTroom, toTeacherRoom, null, this);
  game.physics.arcade.overlap(player, doorToCR, TOclassroom, null, this);
  game.physics.arcade.overlap(player, stairD, TO1fPATH, null, this);
  
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

  function toTeacherRoom(player,toTroom)
  {
    game.state.start('teacher2')
  }
}

// if (spacbar.isDown && spacebarCooldown<=game.time.now)
// {
//   console.log ('ห้ะ')
//   spacebarCooldown = game.time.now + 1000;
// }


function preloadteacher2() {
  game.load.image('teacherfloor', 'assets/F3/teacherroom/teacherfloor1.png');
  game.load.spritesheet('junja', 'assets/junja.png', 90 / 3, 127 / 4, 12);
  game.load.image('teacherfloortop', 'assets/F3/teacherroom/teacherfloortop.png');
  game.load.image('teacherfloorL', 'assets/F3/teacherroom/teacherfloorL.png');
  game.load.image('teacherfloorR', 'assets/F3/teacherroom/teacherfloorR.png');
  game.load.image('teacherfloorR2', 'assets/F3/teacherroom/teacherfloorR2.png');
  game.load.image('table', 'assets/F3/teacherroom/table.png');
}
function createteacher2() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0,25, 967, 453, 'teacherfloor');
  game.world.setBounds(0, 0, 967, 453);
  player = game.add.sprite(450, 590, 'junja');
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.scale.setTo(2, 2); 
  teacherfloortop = game.add.sprite(0, 30, 'teacherfloortop');
  teacherfloortop.visible = false
  game.physics.enable(teacherfloortop, Phaser.Physics.ARCADE); 
  teacherfloortop.body.immovable = true;
  teacherfloorL = game.add.sprite(0, 50, 'teacherfloorL');
  teacherfloorL.visible = false
  game.physics.enable(teacherfloorL, Phaser.Physics.ARCADE); 
  teacherfloorL.body.immovable = true;
  teacherfloorR = game.add.sprite(915, 45, 'teacherfloorR');
  teacherfloorR.visible = false
  game.physics.enable(teacherfloorR, Phaser.Physics.ARCADE); 
  teacherfloorR.body.immovable = true;
  teacherfloorR2 = game.add.sprite(915, 300, 'teacherfloorR2');
  teacherfloorR2.visible = false
  game.physics.enable(teacherfloorR2, Phaser.Physics.ARCADE); 
  teacherfloorR2.body.immovable = true;

  var walku = player.animations.add('walku', [9, 10, 11]) 
  var walkl = player.animations.add('walkl', [3, 4, 5]); 
  var walkr = player.animations.add('walkr', [6, 7, 8]); 
  var walkd = player.animations.add('walkd', [0, 1, 2]); 

}

function updateteacher2() {
  player.body.collideWorldBounds = true;
  game.physics.arcade.collide(player, teacherfloortop);
  game.physics.arcade.collide(player, teacherfloorL);
  game.physics.arcade.collide(player, teacherfloorR);
  game.physics.arcade.collide(player, teacherfloorR2);

  player.body.velocity.y = 0;
  player.body.velocity.x = 0;
  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    player.animations.play('walku', 5, true);
    if(!fs.isPlaying){fs.play()}
  }
 else if (cursors.left.isDown) {
    player.body.velocity.x = -300;
    player.animations.play('walkl', 5, true)
    if(!fs.isPlaying){fs.play()}
  }
  else if (cursors.right.isDown) {
    player.body.velocity.x = 300;
    player.animations.play('walkr', 5, true)
    if(!fs.isPlaying){fs.play()}
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    player.animations.play('walkd', 5, true)
    if(!fs.isPlaying){fs.play()}
  }
  else {
    player.animations.stop();
  }
}
function TOclassroom()
  {
    game.state.start('classroom_1')
  }
function TO1fPATH()
  {
    game.state.start('pathSC')
  }


function preloadPtoSCroom()
{
  game.load.image('path', 'assets/outdoor/path.png')
  game.load.spritesheet('junja', 'assets/junja.png', 90 / 3, 127 / 4, 12);
}
var fromPTsecret = false;

function createPtoSCroom()
{
  fromPTsecret = true;
  fromStage2 = false;
  fromClassroom = false;
  fromSCroom = false
  game.add.tileSprite(0, 50, 4136, 1000, 'path');
  game.world.setBounds(0, 0, 4136, 1000);

  if(fromSCroom)
  {
    player = game.add.sprite(100, 895, 'junja');
    var PstartD = player.animations.add('faceToR',[7]);
    player.animations.play('faceToR', true)
    
  }
  else
  {
    player = game.add.sprite(160, 50, 'junja'); 
    var PstartL = player.animations.add('faceToD',[1]);
    player.animations.play('faceToD', true)
  }

  toSecret = game.add.sprite(-30,880);
  game.physics.enable(toSecret, Phaser.Physics.ARCADE); 

  goupSTAIR = game.add.sprite(230,0);
  game.physics.enable(goupSTAIR, Phaser.Physics.ARCADE);

  var walku = player.animations.add('walku', [9, 10, 11])
  var walkl = player.animations.add('walkl', [3, 4, 5]);
  var walkr = player.animations.add('walkr', [6, 7, 8]);
  var walkd = player.animations.add('walkd', [0, 1, 2]);
  
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.scale.setTo(3, 3); 

  game.camera.follow(player);
}

function updatePtoSCroom()
{

  game.physics.arcade.overlap(player, toSecret, overLapToSC, null, this);
  game.physics.arcade.overlap(player, goupSTAIR, overLapTo2F, null, this);

  player.body.velocity.y = 0;
  player.body.velocity.x = 0;
  if (cursors.up.isDown) 
  {
    player.body.velocity.y = -300;
    player.animations.play('walku', 5, true);
  }

  else if (cursors.left.isDown) 
  {
    player.body.velocity.x = -300;
    player.animations.play('walkl', 5, true)
  }
  else if (cursors.right.isDown)
  {
    player.body.velocity.x = 300;
    player.animations.play('walkr', 5, true)
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    player.animations.play('walkd', 5, true)
  }
  else 
  {
    player.animations.stop();
  }
}
function overLapToSC()
{
  game.state.start('SC')
}
function overLapTo2F()
{
  game.state.start('stage2')
}

function preloadSCroom()
{
  game.load.image('flower', 'assets/outdoor/secretroom/flower.png')
  game.load.image('fwRoomWallT', 'assets/outdoor/secretroom/flowerfloor.png')
  game.load.image('fwRoom', 'assets/outdoor/secretroom/flowerfloorFULL.png')
  game.load.image('light', 'assets/doormark2.png')
  game.load.spritesheet('junja', 'assets/junja.png', 90 / 3, 127 / 4, 12);

}

var fromSCroom = false
function createSCroom()
{
  fromSCroom = true
  fromPTsecret = false;
  fromStage2 = false;
  fromClassroom = false;
  
  spacbar = game.input.keyboard.addKey([Phaser.Keyboard.SPACEBAR]);

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.tileSprite(0,0, 906,642,'fwRoom')
  game.world.setBounds(0, 0, 906, 642);

  SCwalltop = game.add.sprite(0,0, 'fwRoomWallT')
  game.physics.enable(SCwalltop, Phaser.Physics.ARCADE);
  SCwalltop.body.immovable = true;

  flower = game.add.sprite(game.world.centerX - 100 ,100,'flower')
  game.physics.enable(flower, Phaser.Physics.ARCADE);
  flower.body.immovable = true;

  light = game.add.sprite(game.world.centerX - 110 ,520,'light')
  light.scale.setTo(3,3);
  game.physics.enable(light, Phaser.Physics.ARCADE);
  light.body.immovable = true;

  player = game.add.sprite(game.world.centerX, 450, 'junja');
  player.scale.setTo(2,2);
  var PstartR = player.animations.add('faceToU',[10]);
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.animations.play('faceToU', true)
  

  var walku = player.animations.add('walku', [9, 10, 11]) 
  var walkl = player.animations.add('walkl', [3, 4, 5]); 
  var walkr = player.animations.add('walkr', [6, 7, 8]); 
  var walkd = player.animations.add('walkd', [0, 1, 2]); 

  cursors = game.input.keyboard.createCursorKeys();
}

function updateSCroom()
{
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
  else 
  {
    player.animations.stop();
  }
  game.physics.arcade.collide(player, SCwalltop);
  game.physics.arcade.overlap(player, flower, collectFlower, null, this);
  game.physics.arcade.overlap(player, light, topath, null, this);

  function collectFlower()
  {
    if(spacbar.isDown)
    {
      flower.visible = false
      item['พาน'] = true
      return
    }
  }

  function topath()
  {
    game.state.start('pathSC')
  }
}
