canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var list_of_mars_images = ['mars1.jpg', 'mars2.jpg', 'mars3.jpg', 'mars4.jpg'];

var random_num = Math.floor(Math.random() * 4)

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;


background_img = list_of_mars_images[random_num];
rover_img = "rover.png";

function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackgroundImage;
    background_img_tag.src = background_img;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRoverImage;
    rover_img_tag.src = rover_img;
}

function uploadBackgroundImage() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRoverImage() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);

    if(keyPress == '87') {
        up();
        console.log("up");
    }

    if(keyPress == '68') {
        right();
        console.log("right");
    }

    if(keyPress == '65') {
        left();
        console.log("left");
    }

    if(keyPress == '83') {
        down();
        console.log("down");
    }
}

function up() {
    if(rover_y > 0) {
        rover_y = rover_y - 10;
        uploadBackgroundImage();
        uploadRoverImage();
    }
}

function down() {
    if(rover_y < 500) {
        rover_y = rover_y + 10;
        uploadBackgroundImage();
        uploadRoverImage();
    }
}

function left() {
    if(rover_x > 0) {
        rover_x = rover_x - 10;
        uploadBackgroundImage();
        uploadRoverImage();
    }
}

function right() {
    if(rover_x < 700) {
        rover_x = rover_x + 10;
        uploadBackgroundImage();
        uploadRoverImage();
    }
}