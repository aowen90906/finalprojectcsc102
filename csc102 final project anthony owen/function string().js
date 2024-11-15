//Anthony Owen, csc102, Assignment3.1//
//creates function for string//

function verifyname()
{
    // gets veriables from form//
    var name1 = document.getElementById("firstName").value;
    var name2 = document.getElementById("lastName").value;
    var wholename = name1+name2;
    
    //verifies length of whole name//
    if (wholename.length <=19) 
        {//updates nameStatus if wholename is less than 20//
            document.getElementById("nameStatus").innerHTML = "combined length too short"
        }
    else 
        {//updates nameStatus if wholename is 20 or greater//
            document.getElementById("nameStatus").innerHTML = "complete zipcode verification"
        }



}


function verifyzipcode()
{//gets veriables from form//
    var zip = document.getElementById("zipcode").value;
    // if zipcode length is less than 5 zipcodeStatus is updated to "zipcode too short"//
    if (zip.length <=4) 
        {
        document.getElementById("zipcodeStatus").innerHTML = "zipcode too short"
        } 
        //if zipcode length is 5 zipcodeStatus is updated to "secret message"//
    else {
        document.getElementById("zipcodeStatus").innerHTML = "Silly String was invented in 1972 by Leonard A. Fish and Robert P. Cox originally as an instant bone cast "
         }
         //if zipcode is longer than 5 zipcodeStatus is updated to "zipcode is too long"//
    if (zip.length >=6)
        {
        document.getElementById("zipcodeStatus").innerHTML = "zipcode is too long"
        }
    
    
}

function sound(src)
{// add play function
    this.sound = document.createElement("audio") ;//create audio//
    this.sound.src = src;//define src//
    this.play = function() {//music function//
        this.sound.play( );//play sound//
    }
}
//play function for sound//
function play()
{
    stringSound = new sound("");
    stringSound.play();
}
function endPlay()
{
    //reloads page when sounds is stopped//
    window.location.reload();
}

//inputs navigation functions to navigate between pages//
function Palindrome()
{
    location.replace("Palindrome.html");
}

function Boards()
{
    location.replace("board.html");
}
function Game()
{
    location.replace("Game.html");
}
function tables()
{
    location.replace("tables.html");
}
function Index()
{
    location.replace("index.html");
}
//adds button function to play basicdub.mp3//
function letsListen()
{
    stringSound = new sound("basicdub.mp3");
    stringSound.play();
}
//reloads page when stop button "im done"//
function okEnough()
{
    window.location.reload()
}