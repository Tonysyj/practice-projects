const progressContainer = document.querySelector(".progressContainer")
const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")


// set progressStep prompt & add into HTML
const progressStep = prompt('Please Enter the Amount of Steps:')
for(let i = 0; i < progressStep; i++) {
  let newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'step')
  newDiv.textContent = i + 1
  progressContainer.appendChild(newDiv)
}
const step = document.querySelectorAll('.step')
step[0].classList.add('active')


// active step with btn
let currentActive = 1

next.addEventListener('click', () => {
  currentActive ++
  if (currentActive > step.length) {
    currentActive = step.length
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive --
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})


// active step with click
step.forEach(
  (step, index) => {
    step.addEventListener('click', () => {
      step.classList.toggle('active')
      currentActive = index + 1
      update()
      console.log(currentActive)
    })
  })


function update() {
  step.forEach(
    (step, idx) => {
      if (idx < currentActive) {
        step.classList.add('active')
      }
      else {
        step.classList.remove('active')
      }
    }
  )
  

  // active progress line
  const active = document.querySelectorAll('.active')
  progress.style.width = (active.length - 1) / (step.length - 1) * 100 + '%'


  // btn disabled
  if (currentActive === 1) {
    prev.disabled = true
    next.disabled = false
  }
  else if (currentActive === step.length) {
    next.disabled = true
    prev.disabled = false
  }
  else {
    prev.disabled = false
    next.disabled = false
  }
}