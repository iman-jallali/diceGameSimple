

    var randomFirst = Math.random() * 5; 
    randomFirst = Math.floor(randomFirst); 

    var randomSecond = Math.random() * 5; 
    randomSecond = Math.floor(randomSecond); 


    var one = randomFirst +".png";
    document.querySelector(".firstimage").setAttribute("src", one);

    var two = randomSecond + ".png";
    document.querySelector(".secondimage").setAttribute("src", two);  


    if (one === two){
        document.querySelector(".firstheading").innerHTML = "OOps the that's a draw"; 
        document.querySelector(".firstheading").classList.add("winner"); 
    }
    else if (one > two){
        document.querySelector(".firstheading").innerHTML = "Player one won the game congrats"; 
        document.querySelectorAll(".playerheader") [0].classList.add("winner"); 
    }
    else if (two > one){
        document.querySelector(".firstheading").innerHTML = "Player two won the game congrats"; 
        document.querySelectorAll(".playerheader") [1].classList.add("winner"); 
    }
