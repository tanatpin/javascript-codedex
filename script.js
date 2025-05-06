// Variables
const bells = new Audio('./sounds/bell.wav');
const startButton = document.querySelector('.btn-start');
const stopButton = document.querySelector('.btn-stop');
const mins = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let interval = 0;
let isActive = true;    // Means that the session is 'available to start'


// Timer function

const appTimer = () => {
    const sessionAmount = Number.parseInt(mins.textContent)     // Gets the number of mins from the display and converts to a number
  
    if(isActive) {
      isActive = false;
      let totalSeconds = sessionAmount * 60;
  
      const updateSeconds = () => {                             // A function to update the timer every second


        totalSeconds--;                                         // Decreases the total seconds by 1

        let remainMins = Math.floor(totalSeconds/60);
        let remainSecs = totalSeconds % 60;

        if (remainSecs < 10) {
            seconds.textContent = '0' + remainSecs;
        }

        else {
            seconds.textContent = remainSecs;
        }

        mins.textContent = `${remainMins}`;

        if (remainMins === 0 && remainSecs === 0) {
            bells.play();
            clearInterval(interval);                            // Stops the timer
            isActive = true;
        }

      }

      interval = setInterval(updateSeconds, 1000);              // Starts calling updateSeconds() every 1 second or 1000 milliseconds

    } else {

      alert('Session has already started.')
      
    }


}

// Starts the timer when clicked "Start"

startButton.addEventListener('click', appTimer);

// Stops the timer when clicked "Stop"

stopButton.addEventListener('click', () => {

    clearInterval(interval);
    isActive = true;
    mins.textContent = '25';
    seconds.textContent = '00';
} )