canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

go_kart_width=100;
go_kart_height=90;

background_image="racing.jpg";
go_kart="go kart.png";
go_kart_x=10;
go_kart_y=10;


function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    go_kart_imgTag=new Image();
    go_kart_imgTag.onload=uploadgo_kart;
    go_kart_imgTag.src=go_kart_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgo_kart(){
    ctx.drawImage(go_kart_imgTag, go_kart_x, go_kart_y, go_kart_width, go_kart_height);
}


window.addEventListener("keydown", my_keydown);



function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }

        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }

        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }

        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}

function up()
{
    if(go_kart_y >=0)
    {
        go_kart_y = go_kart_y - 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + go_kart_x + " | y = " +go_kart_y);
         uploadBackground();
         uploadgo_kart();
    }
}

function left()
{
    if(go_kart_x >=0)
    {
        go_kart_x = go_kart_x - 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + go_kart_x + " | y = " +go_kart_y);
         uploadBackground();
         uploadgo_kart();
    }
}
function down()
{
    if(go_kart_y >=500)
    {
        go_kart_y = go_kart_y + 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + go_kart_x + " | y = " +go_kart_y);
         uploadBackground();
         uploadgo_kart();
    }
}
function right()
{
    if(go_kart_x <=700)
    {
        go_kart_x = go_kart_x + 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + go_kart_x + " | y = " +go_kart_y);
         uploadBackground();
         uploadgo_kart();
    }
}
