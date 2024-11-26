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



            // comp makes choice
                let randomNumber = Math.floor(Math.random()*3)+1;
                console.log(randomNumber)
            
        
                let handResult = " " ;
                    if (randomNumber == 1)
                        handResult = "Rock";
                    else if (randomNumber == 2)
                        handResult = "Paper";
                    else if (randomNumber == 3)
                        handResult = "Scissors";

                console.log(handResult);

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
