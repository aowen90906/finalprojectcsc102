//Anthony Owen, Assignment 2.2: The Building Blocks for Javascript - Functions, added game of heads or tails (winner buys parts when heads is triggered, passes when tails is triggered)//
// uses random math generator, uses harleyhead.jpg image when heads is triggered, uses tailsection.jpg when tails is triggered//
var change = 10;
var intervalidID = 0;

//creates function to move image//
function moveImage()
{
    //gets stopImage id into function//
    document.getElementById("stopImage").disabled = false;
    //gets startImage id into function//
    document.getElementById("startImage").disabled = true;
    //gets memeimage variable into function//
    var image = document.getElementById("memeimage");
    // x and y change//
    intervalidID = setInterval(function()
    {
        image.style.left = change + "px";
        image.style.top = change + "px";
        change+=3;
         //change = change +5;//
        //number of miliseconds it takes between refresh//
    },.100);
    
}
//stop image function//
function imageStop()
{
    //brings image id's into function//
    document.getElementById("stopImage").disabled = true;
    document.getElementById("startImage").disabled = false;
    clearInterval(intervalidID);
    //reloads page when stop buttton is pushed.
    location.reload();


}


//validation function for userName, password, employee ID 
function validate()
{
    var user = document.getElementById("userName").value;
    var pas = document.getElementById("password").value;
    var empID = document.getElementById("employee ID").value;
    //validates that no entry = incorrect error message in status location//
    if ((user == "")||(pas == "")||(empID == ""))
    {
        document.getElementById("inputStatus").innerHTML = "incorrect username/password/employee ID"
        return false;
    }
    // validates user, pas, empID then redirects to board1.html//
    else if ((user == "admin")||(pas == "160777")||(empID == "crazyhorse"))
    {
        document.getElementById("inputStatus").innerHTML = "username/password accepted redirecting";
        location.replace("board.html");
        return true; 
    }
    
    
} 
//inputs navigation functions for navigating between pages for nav buttons//
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
function Game()
{
    location.replace("Game.html");
}
