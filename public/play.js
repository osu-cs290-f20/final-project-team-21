all = function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i',
          'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var guess;             // Geuss
    var geusses = [ ];      // Stored geusses
    var word;              // Selected word
    var space;              // Number of spaces in word '-'
    var lives;             // Lives
    var counter;           // Count correct geusses
    var score;              // Count score
  
    // Get elements
    var livesDisplayer = document.getElementById("lives");
    var scoreDisplayer = document.getElementById("score");

    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
  
    // Create geusses ul
     result = function () {
      wordDisplayer = document.getElementById('display');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordDisplayer.appendChild(correct);
        correct.appendChild(guess);
      }
    }

    //hangman pictures get elements
    var pic_1=document.getElementById('one');
    var pic_2=document.getElementById("two");
    var pic_3=document.getElementById("three");
    var pic_4=document.getElementById("four");
    var pic_5=document.getElementById("five");
    var pic_6=document.getElementById("six");
    var pic_7=document.getElementById("seven");

    //hangman picture hiding 
    hiding = function () {
      pic_1.style.display="none";
      pic_2.style.display="none";
      pic_3.style.display="none";
      pic_4.style.display="none";
      pic_5.style.display="none";
      pic_6.style.display="none";
      pic_7.style.display="none";
    }

    // Show lives
     comments = function () {
      livesDisplayer.innerHTML = "You have " + lives + " lives";
      scoreDisplayer.innerHTML = "Score: " + score;

      if (lives < 1) {
        livesDisplayer.innerHTML = "Game Over";

        //hangman picture
        hiding();
        pic_7.style.display="block";

        //change next display
        var dis_1=document.getElementById('play-main');
        var dis_2=document.getElementById('content-part');
        dis_1.style.display="none";
        dis_2.style.display="block";
      }
      else if (lives == 7) {
        hiding();
      }
      else if (lives == 6) {
        hiding();
        pic_1.style.display="block";
      }
      else if (lives == 5) {
        hiding();
        pic_2.style.display="block";
      }
      else if (lives == 4) {
        hiding();
        pic_3.style.display="block";
      }
      else if (lives == 3) {
        hiding();
        pic_4.style.display="block";
      }
      else if (lives == 2) {
        hiding();
        pic_5.style.display="block";
      }
      else if (lives == 1) {
        hiding();
        pic_6.style.display="block";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          score += 1;
          livesDisplayer.innerHTML = "You Win!";
          correct.parentNode.removeChild(correct);
          letters.parentNode.removeChild(letters);
          play();
        }
      }
    }
  
    
    // click function
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }
    }

    // var dis_1=document.getElementById('play-main');
    // var dis_2=document.getElementById('content-part');
    // dis_1.style.display="none";
    // dis_2.style.display="block";


    // Play
    var sampledata = document.getElementsByClassName('array_text');
    var container;
    
    container = sampledata[0].innerHTML;
    var blank = container.split(",");
    console.log(blank);


    play = function () {

      word = blank[Math.floor(Math.random() * blank.length)];

      // delete blank[role]
      const index=blank.indexOf(word);
      if(index > -1) {
        blank.splice(index, 1);
      }

      word = word.replace(/\s/g, "-");
      console.log(word);
    
      geusses = [ ];
      lives = 7;
      counter = 0;
      space = 0;

      buttons();
      result();
      comments();

    }

    score = 0;
    play();

    // Reset
  
    next_Q = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      play();
    }


}
all();
