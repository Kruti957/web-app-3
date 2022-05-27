moustachX=0;
moustacheY=0;

function preload(){
moustache=loadImage("https://i.postimg.cc/CxXqytYf/moustache.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide;
    posenet.on('pose',GotPoses);
    posenet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log("THE MODEL IS INITIALIZED");
}
function draw(){
Image(VIDEO,0,0,400,400);
image(moustach,moustachX,moustachY,40,40);
}

function take_snapshot(){
save("MyFilterImage");
}

function GotPoses(results){
    if(results.lenght>0){
console.log(results);
moustachX=results[0].pose.moustach.x;
moustachY=results[0].pose.moustach.y;
console.log("moustachX= "+ moustachX+"moustachY= "+ moustachY);
}
}