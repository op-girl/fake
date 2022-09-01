noseX=0;
noseY=0;


function preload(){
    clown_nose = loadImage('https://i.postimg.cc/1XGwTz4f/clownnose.png');
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    console.log("hlo");
    poseNet.on('pose', gotPoses);
    console.log("hi");
}

function gotPoses(results)
{
    console.log("well");
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded()  {
    console.log('PoseNet Is Intialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}