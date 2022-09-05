// This is just an example, feel free to delete :)

import moment from 'moment'
export default function smile() {
  console.log('%c☺', 'color: magenta; font-size: 10em;')
}

let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let startBtn = document.querySelector('.btn-start')
let resetBtn = document.querySelector('.btn-reset')
let calendar = document.querySelector('#calendar')
days.innerText = '0'
hours.innerText = '0'
minutes.innerText = '0'
seconds.innerText = '0'

// Styling

calendar.style.border = 'none'

// Start Button functionality

// Default today's date

const countDown = () => {
  let calendarData = calendar?.value
  let currentDate = new Date(Date.now())
  let futureDate = new Date(calendarData)

  if (true) {
    let difference = futureDate.getTime() - currentDate.getTime()
    let daysDifference =
      (futureDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
    let daysVar = Math.floor(daysDifference)
    let hoursVar = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    let minutesVar = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let secondVar = Math.floor((difference % (1000 * 60)) / 1000)
    // Injecting values in UI
    days.innerText = daysVar
    hours.innerText = hoursVar
    minutes.innerText = minutesVar
    seconds.innerText = secondVar
  }
  if (currentDate >= futureDate) {
    days.innerText = 'R'
    hours.innerText = 'U'
    minutes.innerText = 'N'
    seconds.innerText = '!'
  }
}

//  const startCountDown = setInterval(countDown,1000)

// Start Button Functionality
let t

startBtn.addEventListener('click', () => {
  if (!calendar.value) {
    calendar.style.border = 'solid 1px #f64c72'
    calendar.style.borderRadius = '5px'

    calendar.style.transition = '0.8s'
  } else {
    ;(t = setInterval(countDown)), 1000
    startBtn.disabled = true
  }
})

calendar.addEventListener('click', () => {
  console.log('hello calendar')
  calendar.style.border = 'none'
})

// Reset Button functionality

resetBtn.addEventListener('click', () => {
  // reset
  calendar.style.border = 'none'

  startBtn.disabled = false
  console.log('hello')
  days.innerText = '0'
  hours.innerText = '0'
  minutes.innerText = '0'
  seconds.innerText = '0'
  clearInterval(t)
})