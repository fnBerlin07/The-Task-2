var canvas = document.querySelector("#gameArea");
var jump = document.querySelector("#jump"); 
var colorSwitch = document.querySelector("#colorSwitch"); 
var error = document.querySelector("#error"); 
var victory = document.querySelector("#victory"); 
var bgm = document.querySelector("#background");



{
 { 
canvas.width = 500;
canvas.height = window.innerHeight;

var canvasObject = canvas.getContext("2d");
var root2 = Math.sqrt(2);
var root3 = Math.sqrt(3);
var angle = Math.PI / 180;
var gameOver = false;


var colorArray = ["#0000ff","#ff0000","#008000","#ffff00"];
 }

 
function background(){
 canvasObject.beginPath();
 canvasObject.moveTo(0,canvas.height-150);
 canvasObject.lineTo(canvas.width,canvas.height-150);
 canvasObject.stroke();
 canvasObject.beginPath();
 canvasObject.moveTo(0,canvas.height-400);
 canvasObject.lineTo(canvas.width,canvas.height-400);
 canvasObject.stroke();
}

var i=1;

function Circle(ox,oy,r1,r2,dir,speed,index,start){

  this.ox = ox ;
  this.oy = oy ;
  this.r1 = r1 ;
  this.r2 = r2 ;
  this.dir = dir ;
  this.j = 0 ; 
  var color = index;
  var top,bottom;
  this.display = true ;
  

  this.init = function(){
    this.ox = ox ;
    this.oy = -800 ;
    this.r1 = r1 ;
    this.r2 = r2 ;
    this.dir = dir ;
    this.j = 0 ; 
    var color = index;
    var top,bottom;   
  }



 this.draw = function(){
  canvasObject.save();
  canvasObject.translate(this.ox,this.oy);
  canvasObject.rotate(this.j);
  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.arc(0,0,this.r1,0,angle*90);
  canvasObject.fillStyle=colorArray[(color+3)%4];
  canvasObject.fill();
 
  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.arc(0,0,this.r1,angle*90,angle*180);
  canvasObject.fillStyle=colorArray[(color+0)%4];
  canvasObject.fill();
  
  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.arc(0,0,this.r1,angle*180,angle*270);
  canvasObject.fillStyle=colorArray[(color+1)%4];
  canvasObject.fill();
 
  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.arc(0,0,this.r1,angle*270,angle*360);
  canvasObject.fillStyle=colorArray[(color+2)%4];
  canvasObject.fill();
 
  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.arc(0,0,this.r2,0,angle*360);
  canvasObject.fillStyle="#111112";
  canvasObject.fill();
 
  canvasObject.restore();

 }

 this.update = function(){
  this.draw(); 

  if(Math.abs(this.j)>=angle*0 && Math.abs(this.j)<=angle*90){
    bottom=colorArray[(color+3)%4];
    top=colorArray[(color+1)%4];
    if(dir=="anti"){
      top=colorArray[(color+2)%4];
      bottom=colorArray[(color)%4];  
    }
  }
  
  else if(Math.abs(this.j)>=angle*90 && Math.abs(this.j)<=angle*180){
    bottom=colorArray[(color+2)%4];
    top=colorArray[(color)%4];
    if(dir=="anti"){
      top=colorArray[(color+3)%4];
      bottom=colorArray[(color+1)%4];  
    }
  }

  else if(Math.abs(this.j)>=angle*180 && Math.abs(this.j)<=angle*270){
    bottom=colorArray[(color+1)%4];
    top=colorArray[(color+3)%4];
    if(dir=="anti"){
      top=colorArray[(color)%4];
      bottom=colorArray[(color+2)%4];  
    }
  }
  else if (Math.abs(this.j)>=angle*270 && Math.abs(this.j)<=angle*360) {
    bottom=colorArray[(color)%4];
    top=colorArray[(color+2)%4];
    if(dir=="anti"){
      top=colorArray[(color+1)%4];
      bottom=colorArray[(color+3)%4];
      }
  }

if(!start){  
 if(ball.color!="#ffffff"){
    if((ball.oy-ball.radius<=this.oy+this.r1 && ball.oy+ball.radius>=this.oy+this.r1) || (ball.oy-ball.radius<=this.oy+this.r2 && ball.oy+ball.radius>=this.oy+this.r2) ){
     { 
       if( bottom != ball.color ){
        gameOver = true; error.play();
      }
    }
    }else if((ball.oy-ball.radius<=this.oy-this.r1 && ball.oy+ball.radius>=this.oy-this.r1) || (ball.oy-ball.radius<=this.oy-this.r2 && ball.oy+ball.radius>=this.oy-this.r2))
     {
       if(top != ball.color ){
       gameOver = true; error.play();
     } 
    }
 }
}
  if(this.dir=="clock"){
  this.j+=speed*angle;
  }else{
    this.j-=speed*angle;
  }
   this.j = this.j%(Math.PI*2);

}

 this.pull = function(){
  this.oy+=3;
 }

}

function Square(ox,oy,dir,index){

  this.j=0;
  this.ox = ox;
  this.oy = oy;
  this.dir = dir;
  var bottom="blue",top="green";
  var color = index;
  
  this.init = function(){
  this.j=0;
  this.ox = ox;
  this.oy = oy;
  this.dir = dir;
  var color = index;
 }

 this.draw = function(){

  canvasObject.save();

  canvasObject.translate(this.ox,this.oy);
  canvasObject.rotate(this.j);

  canvasObject.beginPath();
  canvasObject.fillStyle = colorArray[(color+2)%4];
  canvasObject.fillRect(-100,-100,200,15);

  canvasObject.beginPath();
  canvasObject.fillStyle = colorArray[(color)%4];
  canvasObject.fillRect(-100,85,185,15);

  canvasObject.beginPath();
  canvasObject.fillStyle = colorArray[(color+3)%4]
  canvasObject.fillRect(85,-85,15,185);
  

  canvasObject.beginPath();
  canvasObject.fillStyle = colorArray[(color+1)%4];
  canvasObject.fillRect(-100,-100,15,185);
  canvasObject.restore();
  
 }
 
 this.update = function(){
  this.draw();
      
  
  if(Math.abs(this.j)>=angle*45&&Math.abs(this.j)<=angle*135){
    bottom=colorArray[(color+3)%4];
    top=colorArray[(color+1)%4];
    if(dir=="anti"){
      top=colorArray[(color+3)%4];
      bottom=colorArray[(color+1)%4];
    }
  }
  else if(Math.abs(this.j)>=angle*90&&Math.abs(this.j)<=angle*225){
    bottom=colorArray[(color+2)%4];
    top=colorArray[(color)%4]; 
    if(dir=="anti"){
      top=colorArray[(color+2)%4];
      bottom=colorArray[(color)%4];   
    }
   }
  else if(Math.abs(this.j)>=angle*225&&Math.abs(this.j)<=angle*285){
    bottom=colorArray[(color+1)%4];
    top=colorArray[(color+3)%4];
    if(dir=="anti"){
      top=colorArray[(color+1)%4];
      bottom=colorArray[(color+3)%4];
    }        
    }
  else if(Math.abs(this.j)>=angle*225&&Math.abs(this.j)<=angle*360){
    bottom=colorArray[(color)%4];
    top=colorArray[(color+2)%4];
    if(dir=="anti"){
      top=colorArray[(color)%4];
      bottom=colorArray[(color+2)%4];
    }
  }

if(ball.color!="#ffffff"){
  if((ball.oy-ball.radius<=this.oy+80 && ball.oy+ball.radius>=this.oy+80) || (ball.oy-ball.radius<=this.oy+100 && ball.oy+ball.radius>=this.oy+100) ){
   { 
     if(bottom != ball.color){
      gameOver = true; error.play();
    }
  }
  }else if((ball.oy-ball.radius<=this.oy-80 && ball.oy+ball.radius>=this.oy-80) || (ball.oy-ball.radius<=this.oy-100 && ball.oy+ball.radius>=this.oy-100))
   {
     if(top != ball.color ){
      gameOver = true; error.play();
   } 
  }
}
  if(this.dir=="clock"){
    this.j+=angle;
  }else{
   this.j-=angle;
}
this.j = this.j%(Math.PI*2);
}

 this.pull = function(){
  this.oy+=3;
 }
}

function Horizontal(ox,oy,dir,index){
 this.ox = ox;
 this.oy = oy;
 this.dir = dir;
 var low = 0;
 var high = 500;
 var at ;
 var color = index;

 this.init = function(){
  this.ox = ox;
  this.oy = -200-20;    
 }

 if(this.dir==-1){
 low = 500;high=0;
 }

 this.draw = function(){
  
  canvasObject.save();
 
  canvasObject.beginPath();
  canvasObject.translate(this.ox-500,this.oy);
  canvasObject.fillStyle = colorArray[(color)%4];
  canvasObject.fillRect(0,0,125,20);

  canvasObject.beginPath();
  canvasObject.translate(125,0);
  canvasObject.fillStyle = colorArray[(color+2)%4];
  canvasObject.fillRect(0,0,125,20);

  canvasObject.beginPath();
  canvasObject.translate(125,0);
  canvasObject.fillStyle = colorArray[(color+3)%4];
  canvasObject.fillRect(0,0,125,20);

  canvasObject.translate(125,0);
  canvasObject.beginPath();  
  canvasObject.fillStyle = colorArray[(color+1)%4];
  canvasObject.fillRect(0,0,125,20);

  canvasObject.beginPath();
  canvasObject.translate(125,0);
  canvasObject.fillStyle = colorArray[(color)%4];
  canvasObject.fillRect(0,0,125,20);

  canvasObject.beginPath();
  canvasObject.translate(125,0);
  canvasObject.fillStyle = colorArray[(color+2)%4];
  canvasObject.fillRect(0,0,125,20);

  canvasObject.beginPath();
  canvasObject.translate(125,0);
  canvasObject.fillStyle = colorArray[(color+3)%4];
  canvasObject.fillRect(0,0,125,20);

  canvasObject.beginPath();
  canvasObject.translate(125,0);
  canvasObject.fillStyle = colorArray[(color+1)%4];
  canvasObject.fillRect(0,0,125,20);
  
  canvasObject.restore();  

 }



 this.update = function(){
  this.draw();
  if(this.ox<=125){
    at = colorArray[(color+2)%4];
  }
  else if(this.ox<=250){
    at = colorArray[(color)%4];
  }
  else if(this.ox<=375){
    at = colorArray[(color+1)%4];
  }
  else{
    at = colorArray[(color+3)%4];
  }    
if(ball.color!="#ffffff"){
  if((ball.oy-ball.radius<=this.oy+20 && ball.oy+ball.radius>=this.oy+20)||(ball.oy-ball.radius<=this.oy && ball.oy+ball.radius>=this.oy)){
    if(at!=ball.color ){
      gameOver = true; error.play();
  }}
}

  if(this.ox==high){
   this.ox=low;
  }else{
   this.ox+=this.dir*2;
 }
}

 this.pull = function(){
  this.oy+=3;
 }
}

function Vertical(ox,oy,dir){
 this.ox = ox; 
 this.oy = oy;
 this.dir = dir;
 var low = 0;
 var high = 500;
 var c=0;var b=0;

 if(this.dir==-1){
  low = 500;
  high = 0;
 }

 this.init = function(){
  this.ox = ox; 
  this.oy = -200-100;
 }

 this.draw = function(){

  canvasObject.save();
  canvasObject.translate(this.ox-500,this.oy);
  canvasObject.beginPath();
  canvasObject.fillStyle="blue";
  canvasObject.fillRect(0,0,20,100);

  canvasObject.translate(125,0);
  canvasObject.beginPath();
  canvasObject.fillStyle="red";
  canvasObject.fillRect(0,0,20,100);

  canvasObject.translate(125,0);
  canvasObject.beginPath();
  canvasObject.fillStyle="yellow";
  canvasObject.fillRect(0,0,20,100);

  canvasObject.translate(125,0);
  canvasObject.beginPath();
  canvasObject.fillStyle=colorArray[(color+2)%4];
  canvasObject.fillRect(0,0,20,100);
  
  canvasObject.translate(125,0);
  canvasObject.beginPath();
  canvasObject.fillStylcolorArray[(color+3)%4];
  canvasObject.fillRect(0,0,20,100);

  canvasObject.translate(125,0);
  canvasObject.beginPath();
  canvasObject.fillStyle=colorArray[(color+1)%4];
  canvasObject.fillRect(0,0,20,100);

  canvasObject.translate(125,0);
 canvasObject.beginPath();
  canvasObject.fillStyle="yellow";
  canvasObject.fillRect(0,0,20,100);

  canvasObject.translate(125,0);
  canvasObject.beginPath();
  canvasObject.fillStyle="green";
  canvasObject.fillRect(0,0,20,100);

  canvasObject.restore();
 }

 this.update = function(){
  this.draw();
  if(this.ox==high){
   this.ox=low;
  }else{
   
    this.ox+=this.dir*2;
  }

  if((ball.oy-ball.radius<=this.oy+100 && ball.oy+ball.radius>=this.oy+100)||(ball.oy-ball.radius<=this.oy && ball.oy+ball.radius>=this.oy)||(ball.oy-ball.radius<=this.oy+100 &&  ball.oy-ball.radius>=this.oy )){
 }
 }

 this.pull =function(){
  this.oy+=3;
 }
}

function Cross(ox,oy,dir,isInside,index){

 this.ox = ox-12;
 this.oy = oy;
 this.dir = dir;
 this.j = 0;
 this.at = "#ff0000";
 var color = index;

 this.draw = function(){
  canvasObject.save();
  canvasObject.translate(this.ox+3,this.oy);
  canvasObject.rotate(this.j);
  canvasObject.stroke();
 
  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.lineTo(-10,10);
  canvasObject.lineTo(10,10);
  canvasObject.closePath();  
  canvasObject.fillStyle=colorArray[(color+3)%4];
  canvasObject.fill();
  canvasObject.fillRect(-10,10,20,40);
  canvasObject.arc(0,50,10,0,Math.PI*2);
  canvasObject.fill();

  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.lineTo(10,-10);
  canvasObject.lineTo(10,10);
  canvasObject.closePath();  
  canvasObject.fillStyle=colorArray[(color+2)%4];
  canvasObject.fill();
  canvasObject.fillRect(10,-10,40,20);
  canvasObject.arc(50,0,10,0,Math.PI*2);
  canvasObject.fill();

  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.lineTo(-10,-10);
  canvasObject.lineTo(10,-10);
  canvasObject.closePath();  
  canvasObject.fillStyle=colorArray[(color+1)%4];
  canvasObject.fill();
  canvasObject.fillRect(-10,-50,20,40);
  canvasObject.arc(0,-50,10,0,Math.PI*2);
  canvasObject.fill();

  canvasObject.beginPath();
  canvasObject.moveTo(0,0);
  canvasObject.lineTo(-10,-10);
  canvasObject.lineTo(-10,10);
  canvasObject.closePath();  
  canvasObject.fillStyle=colorArray[(color)%4];
  canvasObject.fill();
  canvasObject.fillRect(-10,-10,-40,20);
  canvasObject.arc(-50,0,10,0,Math.PI*2);
  canvasObject.fill();

  canvasObject.restore();
 }

 this.istouch = function(){
  if(ball.color!="#ffffff"){ 
  if(Math.sqrt( Math.pow(this.ox+50+2 - ball.ox,2)  + Math.pow(this.oy-ball.oy,2) )<=10+ball.radius){
    if( this.at != ball.color  ){
      gameOver = true; error.play();
    }
   }
  }
 }

 this.update = function(){
  this.draw();
  this.istouch();
  if(this.j<=Math.PI/4){
    this.at = colorArray[(color+2)%4];
  }
  else if(this.j<=90*angle+Math.PI/4&&this.j>=90*angle-Math.PI/4){
    this.at = colorArray[(color+1)%4];
  }  

  else if(this.j<=180*angle+Math.PI/4&&this.j>=180*angle-Math.PI/4){
   this.at = colorArray[(color)%4];
  } 
  else if(this.j<=270*angle+Math.PI/4 && this.j>=270*angle-Math.PI/4){
    this.at = colorArray[(color+3)%4];
  } 
  else if(this.j>=360*angle-Math.PI/4){
    this.at = colorArray[(color+2)%4];
  }
  else {
    this.at ="#ffffff" ;
  }
  this.j+=2*this.dir*angle;
  this.j = this.j % (Math.PI*2);
 }
 this.pull = function(){
  this.oy+=3;
 }
}

function ColorWheel(ox,oy){
  this.ox = ox;
  this.oy = oy;
  this.color = colorArray[Math.floor((Math.random()*4))] 
  this.isCheck = false;

  this.init = function(){
    this.isCheck = false;
    this.ox = ox;
    this.oy = -600 ;
    this.color = colorArray[Math.floor((Math.random()*4))] ;  

  }

  this.draw = function(){
    canvasObject.beginPath();
    canvasObject.arc(this.ox,this.oy,7,0,angle*360);
    canvasObject.fillStyle = this.color;
    canvasObject.fill();
  }
  this.update = function(){
    if(!this.isCheck){
    this.draw();
    }
  }
  this.pull = function(){
    this.oy+=3;
  }
  this.check = function(){
  if(!this.isCheck){
    if(this.oy>=ball.oy){
      ball.color = this.color;
      colorSwitch.play();
      this.isCheck = true;
    }
   }
  }
}

function MultiColorWheel(ox,oy){
  this.ox = ox;
  this.oy = oy;
  this.isCheck = false;

  this.draw = function(){
    canvasObject.beginPath();
    canvasObject.moveTo(this.ox,this.oy);
    canvasObject.arc(this.ox,this.oy,7,0,angle*90);
    canvasObject.fillStyle= colorArray[0];
    canvasObject.fill();

    canvasObject.beginPath();
    canvasObject.moveTo(this.ox,this.oy);
    canvasObject.arc(this.ox,this.oy,7,angle*90,angle*180);
    canvasObject.fillStyle= colorArray[1];
    canvasObject.fill();
  
    canvasObject.beginPath();
    canvasObject.moveTo(this.ox,this.oy);
    canvasObject.arc(this.ox,this.oy,7,angle*180,angle*270);
    canvasObject.fillStyle= colorArray[2];
    canvasObject.fill();

    canvasObject.beginPath();
    canvasObject.moveTo(this.ox,this.oy);
    canvasObject.arc(this.ox,this.oy,7,angle*270,angle*360);
    canvasObject.fillStyle= colorArray[3];
    canvasObject.fill();
  }
  this.update = function(){
   if(!this.isCheck){
    this.draw();
   }
  }
  this.pull = function(){
    this.oy+=3;
  }

  this.check = function(){
  if(!this.isCheck){
    if(this.oy>=ball.oy){
      ball.color = "#ffffff";
      this.isCheck = true;
      victory.play();
    }
   }
  }


  
}

function Ball(){
  this.radius = 10 ;
  this.dy = 2.5;
  this.ox = canvas.width/2 ;
  this.oy = canvas.height - 200 ;
  this.up= 5;
  this.isJump = false;
  this.color = colorArray[Math.floor(Math.random()*4)];
 
  this.draw = function(){
   canvasObject.beginPath();
   canvasObject.arc(this.ox,this.oy,this.radius,0,Math.PI*2);
   canvasObject.fillStyle = this.color;
   this.color = canvasObject.fillStyle; 
   canvasObject.fill();
  }
  
  this.update = function(){
  if(this.oy<=canvas.height-50 - this.radius ){
   this.oy += this.dy ; }
   this.draw();
  }
  this.jump = function(){
   if(this.isJump == true)
   {this.oy-= this.up; } 
   jump.play();
  }
 }

 
var ball = new Ball;

var circle1 = new Circle(canvas.width/2,-100,100,80,"clock",1,0,false);
var colorBall1 = new ColorWheel(canvas.width/2,-300);
var circle2 = new Circle(canvas.width/2,-500,100,80,"anti",1,0,false);

var square1 = new Square(canvas.width/2,-100,"clock",1);
var multicolorBall2 = new MultiColorWheel(canvas.width/2,-350);
var square2 = new Square(canvas.width/2,-600,"clock",3);

var innerCircle1 = new Circle(canvas.width/2,-100,120,100,"anti",1.5,1,false);
var outerCircle1 = new Circle(canvas.width/2,-100,95,75,"clock",2,1,false);
var colorBall3 = new ColorWheel(canvas.width/2,-340);
var innerCircle21 = new Circle(canvas.width/2,-600,160,140,"anti",1.2,1,false);
var innerCircle22 = new Circle(canvas.width/2,-600,135,115,"anti",1.2,1,false);
var outerCircle2 = new Circle(canvas.width/2,-600,110,90,"clock",1.8,1,false);

var colorBall4 = new ColorWheel(canvas.width/2,-20);
var hline1p = new Horizontal(0,-100,1,0);
var hline1n = new Horizontal(0,-250,-1,2);
var hline2p = new Horizontal(0,-400,1,1); 
var hline2n = new Horizontal(0,-550,-1,3);
var cross = new Cross(canvas.width/2-40,-700,1,false,2);

var innerCircle21game1 = new Circle(canvas.width/4+40,200,50,40,"clock",1.2,3,true);
var innerCircle22game1 = new Circle(canvas.width/4+40,200,35,30,"anti",8,1,true);
var outerCircle2game1 = new Circle(canvas.width/4+40,200,15,10,"clock",1.8,1,true);

var innerCircle21game2 = new Circle(canvas.width/2+100,200,50,40,"anti",1.8,3,true);
var innerCircle22game2 = new Circle(canvas.width/2+100,200,35,30,"clock",8,4,true);
var outerCircle2game2  = new Circle(canvas.width/2+100,200,15,10,"clock",2.2,2,true);


var distance = 0;
var highScoreArray = [];
var gameRound = 0;
var pair=1,couple=0;
var gamePause = false;

var img = new Image();
var w = new Image();
w.src="../Images/W.png"
img.src = "../Images/Resume.png";
var down=0;var side = 0;
var secondtime=true;
var grd = canvasObject.createLinearGradient(0,0,canvas.width/2,0);
grd.addColorStop(0, "#ee0979");
grd.addColorStop(1, "#ff6a00");

function animate(){

 canvasObject.clearRect(0,0,canvas.width,canvas.height);
 canvasObject.font = "25px Arial";
 canvasObject.fillStyle = "cyan";
 canvasObject.fillText("NOW:"+distance,20,50);
 canvasObject.fillText("BEST:"+best[best.length-1],20,100);
 canvasObject.font = "120px Arial";
 canvasObject.fillStyle = grd ;
 canvasObject.fillText("C",20,240+down);
 canvasObject.fillText("L",canvas.width/2-20,240+down);
 canvasObject.fillText("R",canvas.width-90,240+down);
 canvasObject.fillText("SWITCH",20,350+down);
 canvasObject.font = "17px Arial";
 canvasObject.fillStyle = "magenta"
 canvasObject.fillText("GooD^_^LucK",0+side,400+down)
 canvasObject.drawImage(img,canvas.width-80,20);
 canvasObject.font = "25px Arial";
 canvasObject.fillStyle = "cyan";

 canvasObject.fillText("To start playing tap:",20,500+down)
 canvasObject.drawImage(w,60,50,100 ,70,canvas.width/2,470+down,50,50);
 innerCircle21game1.update();
 innerCircle22game1.update();
 outerCircle2game1.update();
 
 innerCircle21game2.update();
 innerCircle22game2.update();
 outerCircle2game2.update();


 if(pair==1||couple==1){
    circle1.update();
    circle2.update();
    colorBall1.update();
 }
 if(pair==2||couple==2){
   square1.update();
   square2.update();
   multicolorBall2.update();
 }
 if(pair==3||couple==3){
  innerCircle1.update();
  outerCircle1.update();
  innerCircle21.update();
  innerCircle22.update();
  outerCircle2.update();
  colorBall3.update();
 }
 if(pair==4||couple==4){
  hline1p.update(); 
  hline1n.update(); 
  hline2p.update(); 
  hline2n.update(); 
  cross.update();
  colorBall4.update();
 }

 ball.update();

 if(i<10 && ball.isJump==true){
 
  innerCircle21game1.pull();
  innerCircle22game1.pull();
  outerCircle2game1.pull();
  
  innerCircle21game2.pull();
  innerCircle22game2.pull();
  outerCircle2game2.pull();

  down+=3;
  side+=3;
  ball.jump();
  i++;
  ball.isJump = true ;
  colorBall1.check();
  multicolorBall2.check();
  colorBall4.check();
  colorBall3.check();
  if(pair==4||couple==4){cross.istouch();}
  if(i<=5){
    distance++;
  }

  if(pair==1||couple==1){
    circle1.pull();
    circle2.pull();
    colorBall1.pull();
    if(circle1.oy-circle1.r2 >= canvas.height){ couple=2;  }
    if(circle2.oy-circle2.r2 >= canvas.height){ pair=2; circle1.oy=-100; circle2.oy=-500; colorBall1.isCheck =false;colorBall1.oy=-300 ; colorBall1.color = colorArray[Math.floor((Math.random()*4))] }
  }
  if(pair==2||couple==2){
    square1.pull();
    square2.pull();
    multicolorBall2.pull();
    if(square1.oy-100>=canvas.height){ couple=3;  }
    if(square2.oy-100>=canvas.height){ secondtime=!secondtime ; pair=3; square1.oy=-100; square2.oy=-600; 
     if(secondtime){ 
      multicolorBall2.isCheck =false; multicolorBall2.oy=-350;  }
     }  
    }  
  if(pair==3||couple==3){
    innerCircle1.pull();
    outerCircle1.pull();
    innerCircle21.pull();
    innerCircle22.pull();
    outerCircle2.pull();
    colorBall3.pull();
    if(outerCircle1.oy - outerCircle1.r2 >= canvas.height ){couple=4;}
    if(outerCircle2.oy - outerCircle2.r2 >= canvas.height ){pair=4 ; outerCircle1.oy=-100; innerCircle1.oy=-100; outerCircle2.oy=-600; innerCircle21.oy=-600; innerCircle22.oy=-600; colorBall3.oy=-340 ;colorBall3.isCheck=false; colorBall3.color = colorArray[Math.floor((Math.random()*4))]; }
  }
  if(pair==4||couple==4){
    hline1p.pull(); 
    hline1n.pull(); 
    hline2p.pull(); 
    hline2n.pull();
    cross.pull();
    colorBall4.pull();
    if(hline1n.oy>=canvas.height){couple=1}
    if(cross.oy-70>=canvas.height){pair=1 ; hline1p.oy= -100; hline1n.oy=-250 ;  hline2p.oy=-400 ;  hline2n.oy=-550 ; colorBall4.isCheck =false; colorBall4.oy =-20;  cross.oy=-700 ; colorBall4.color = colorArray[Math.floor((Math.random()*4))] ;   }
  }
}
else{
   i=0 ;ball.isJump = false;
 }
 if(!gameOver && !gamePause ){
  bgm.play(); 
  requestAnimationFrame(animate);
  requestAnimationFrame(background);
}
 else{
  bgm.pause();
   if(gameOver){restart();}
 }
}
var best = [0]
animate();
 function restart(){
  gameOver=false;
  gamePause=false;
  highScoreArray[gameRound]=distance;
  best[gameRound] = highScoreArray[gameRound];
  best.sort();
  gameRound++;
  down=0;
  side=0;
  secondtime=true;

  setTimeout(function(){
    pair=1,couple=0;distance=0;
    reset();
    animate();console.log("t");
    innerCircle21game1.oy=200;
    innerCircle22game1.oy=200;
    outerCircle2game1.oy=200;
    innerCircle21game2.oy=200;
    innerCircle22game2.oy=200;
    outerCircle2game2.oy=200;
    colorBall1.color = colorArray[Math.floor((Math.random()*4))]
    colorBall3.color = colorArray[Math.floor((Math.random()*4))]
    colorBall4.color = colorArray[Math.floor((Math.random()*4))]
    ball.color = colorArray[Math.floor((Math.random()*4))]
  },1000);
}



window.addEventListener("keypress",function(event){
  if(!gameOver){ 
  if(event.which==119){
   if( ball.oy>=canvas.height-400+ball.radius) { 
   i=0;
   ball.isJump=true;
   }
  }
}else{
    gamePause = true;
}
})

canvas.addEventListener("click",function(event){ 
 if(!gameOver){
  if(event.x >= canvas.width+100 && event.y <= 60){
  gamePause=!gamePause;
  if(!gamePause){
    animate();
    }
  }
 }
})

function reset(){
  circle1.oy=-100; circle2.oy=-500; colorBall1.isCheck =false;colorBall1.oy=-300 
  square1.oy=-100; square2.oy=-600; 
  multicolorBall2.isCheck =false; multicolorBall2.oy=-350;  
  outerCircle1.oy=-100; innerCircle1.oy=-100; outerCircle2.oy=-600; innerCircle21.oy=-600; innerCircle22.oy=-600; colorBall3.oy=-340 ;colorBall3.isCheck=false;
  hline1p.oy= -100; hline1n.oy=-250 ;  hline2p.oy=-400 ;  hline2n.oy=-550 ; colorBall4.isCheck =false; colorBall4.oy =-20;  cross.oy=-700
}

window.addEventListener("keydown",function(){
  if(event.keyCode==73){
    var c2 = canvas2.getContext("2d");
    
  }
})

}
