leftWristX = 0;
rightWristY = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}
function gotPoses(results){ 
    if(results.length > 0){
        console.log(results);

        leftWristX =  results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw(){
    background("#031defs");
    textSize(difference); 
    fill("#031de9");
    text("Advay", 50, 400);
}

