// Your code here

var dodger = document.getElementById('dodger')
// console.log(dodger)
// dodger.style.backgroundColor = "#000000"
dodger.style.backgroundColor = '#FF69B4'

// dodger.style.bottom = '100px'
dodger.style.bottom = '0px'

document.addEventListener("keydown", (e) => {
    console.log(e.which === 37) {
      var leftNumbers = dodger.style.left.replace('px', '')
      var left = parseInt(leftNumbers, 10)

      dodger.style.left = `${left - 1}px`
    }

})
