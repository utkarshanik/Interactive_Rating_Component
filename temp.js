// EventListener for afetr rating is clicked [1-5]


let show_id= document.getElementById('Your_Id')
let selc_id = document.querySelectorAll('#rating span')
// let rating_component= document.getElementById('rating')
// let selc_id = rating_component.querySelectorAll('span')

let val=0;
selc_id.forEach(selc => {
    selc.addEventListener('click', () => {
      if (selc.classList.contains('active')) {
        // If the clicked span is already active, unselect it
        selc.classList.remove('active');
      } else {
        // Otherwise, remove 'active' from all and set it on the clicked span
        selc_id.forEach(s => s.classList.remove('active'));
        selc.classList.add('active');
        val = selc.dataset.value;
      }
    });
  });
  
  //Submit
  function showSecondCard() {
    // Hide the first card
    document.getElementById('firstCard').classList.remove('show');
    
    // Show the second card
    document.getElementById('secondCard').classList.add('show');
    
    console.log(val);
    show_id.textContent = val; // Display the value
    if(val<1)
    {
      show_id.textContent = '0'; // Clear the displayed value
    }
  }