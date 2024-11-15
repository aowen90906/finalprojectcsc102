function flipcoin()
{
    //random number generator in function//
    var player1 = Math.ceil(Math.random()*2);
    // harley head image imported into function//
    var headimage = "harleyhead.jpg";
    //harley tail section image imported into function//
    var tailimage = "tailsection.jpg";

    if (player1 == 1)
    {
        //inputs player1 headimage when heads is triggered//
        document.getElementById("player1Img").src = headimage;
    }
    
    else if (player1 == 2)
    {
        //inputs player1 tailimage when tails is triggered//
        document.getElementById("player1Img").src = tailimage;    
    }
}
//inputs navigation functions for button navigation in pages//
function Palindrome()
{
    location.replace("Palindrome.html");
}

function Boards()
{
    location.replace("board.html");
}
function strings()
{
    location.replace("strings.html");
}
function tables()
{
    location.replace("tables.html");
}
function Index()
{
    location.replace("index.html");
}