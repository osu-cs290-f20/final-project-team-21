all = function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var word;              // Selected word
    var guess;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives;             // Lives
    var counter;           // Count correct geusses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var livesDisplayer = document.getElementById("lives");

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
    
    // Show lives
     comments = function () {
      livesDisplayer.innerHTML = "You have " + lives + " lives";

          //   if (time <= 0) {
    //     //stop game
    //     //you lose
    // go to next page 
    //   }
  
    //   else {
    //     //play game
    //     if (lives < 1) {
    //       //stop game
    //       //you lose
    // go to next page 
    //     }
  
    //     else {
    //       if (you correct all and you have next question) {
    //         //go to the next question.
    //         //make lives reset again.
    //         //do recursive
    //         //reset
    //       }
    //       else if (you correct all and you do not have anymore) {
    //         //finish everything
    // go to next page 
    //       }
    //     }
    //   }
    // }

      if (lives < 1) {
        livesDisplayer.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          // livesDisplayer.innerHTML = "You Win!";
          correct.parentNode.removeChild(correct);
          letters.parentNode.removeChild(letters);
          play();
        }
      }
    }
  
    
     
    // OnClick Function
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
      lives = 10;
      counter = 0;
      space = 0;

      buttons();
      result();
      comments();

    }

    play();

    // Reset
  
    next_Q = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      play();
    }
  

    // whole_play = function () {

    //   if (time <= 0) {
    //     //stop game
    //     //you lose
    //   }
  
    //   else {
    //     //play game
    //     if (lives <= 0) {
    //       //stop game
    //       //you lose
    //     }
  
    //     else {
    //       if (you correct and you have next question) {
    //         //go to the next question.
    //         //make lives reset again.
    //         //do recursive
    //         //reset
    //       }
    //       else if (you correct and you do not have anymore) {
    //         //finish everything
    //       }
    //     }
    //   }
    // }

    //whole_play();

  
  
  






}
all();
