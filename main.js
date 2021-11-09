upperLipX=0;
upperLipY=0;
function preload(){
    mustache= loadImage("https://i.postimg.cc/50B0y4sg/mustache.jpg");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,upperLipX,upperLipY,30,30);
}

function take_snapshot(){
    save("Picture.png");
}
function modelloaded(){
    console.log("pose net is initialized");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    upperLipX=results[0].pose.nose.x-15;
    upperLipY=results[0].pose.nose.y+10;
    console.log("upper lip x = " +upperLipX);
    console.log("upper lip y = " +upperLipY);
}
}