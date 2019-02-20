// Your code here

const moveDodgerLeft = () => {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 8}px`
  }
};

const moveDodgerRight = () => {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 8}px`
  }
};

document.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    moveDodgerLeft();
  }
});

document.addEventListener('keydown', function(key) {
  if (key.which === 39) {
    moveDodgerRight();
  }
});
