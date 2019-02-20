// Your code here

var dodger = document.getElementById('dodger')


dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = '#FF69B4'

dodger.style.left = "180px"

dodger.style.bottom = '0px'



function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}




function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}





document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    dodger.style.left = `${left - 1}px`
  }
})

document.addEventListener('keydown', function(key) {
  if (key.which === 39) {
    moveDodgerRight()
  }
})
