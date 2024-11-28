const modal = document.getElementById('myModal');
const openModal = document.getElementById('openModal');
const closeBtns = document.querySelectorAll('.close-btn');

// Open modal
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal 
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// When button is pressed log ID
  //userChoice = button selected 
  document.getElementById("rockBtn").addEventListener("click", rock);
  document.getElementById("paperBtn").addEventListener("click", paper);
  document.getElementById("scissorsBtn").addEventListener("click", scissors);


  function rock() {
    console.log ("Rock")
  }
  function paper() {
    console.log ("Paper")
  }
  function scissors() {
    console.log ("Scissors")
  }
  //if user select button => user chose X
  function userChoice () {
    if (document.getElementById("rockBtn").addEventListener("click", rock))
      userChoice = "rock";
    else if (document.getElementById("paperBtn").addEventListener("click", paper))
      userChoice = "paper";
    else if (document.getElementById("scissorsBtn").addEventListener("click", scissors))
      userChoice = "Scissors";

    return "Player has chosen" + userChoice
  }

  console.log(userChoice());    
  
 // function choice () {
   // if (document.getElementById("rockBtn").addEventListener("click", choice))
    //  choice = "rock";

     // else if (document.getElementById("paperBtn").addEventListener("click", choice))
     //   choice = "paper";

     // else if (document.getElementById("scissorsBtn").addEventListener("click", choice))
       // choice = "scissors";


      
    //return "Player has chosen" + choice
 //  }

  //function choice () {
    //if (document.getElementById("rockBtn"))
      //choice = "rock";
   // else if (document.getElementById("paperBtn"))
      //choice = "paper";
   // else if (document.getElementById("paperBtn"))
    //  choice = "scissors";

   /// return "Player has chosen " + choice

///  }

  //console.log(choice());
            // comp makes choice


                function compChoice() {
                    let randomNumber = Math.floor(Math.random()*3)+1;
                    console.log(randomNumber)
                    if (randomNumber == 1)
                        hand = "Rock";
                    else if (randomNumber == 2)
                        hand = "Paper";
                    else if (randomNumber == 3)
                        hand = "Scissors";

                        return "Computer has chosen " + hand;

                }
                console.log(compChoice());
