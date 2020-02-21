function gameSetUp() {
  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let hog = 90
  let car = 2
  let points = 0


  // create grid
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === hog) {
      cell.classList.add('hog')
    }
    cells.push(cell)
    grid.appendChild(cell)
  }

  // move the hedgehog
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (hog === cells.length - 1) {
        return
      }
      cells[hog].classList.remove('hog')
      hog += 1
      cells[hog].classList.add('hog')
    } else if (event.key === 'ArrowLeft') {
      if (hog === 0) {
        return
      }
      cells[hog].classList.remove('hog')
      hog -= 1
      cells[hog].classList.add('hog')
    } else if (event.key === 'ArrowUp') {
      if (hog < width) {
        return
      }
      cells[hog].classList.remove('hog')
      hog -= width
      cells[hog].classList.add('hog')
    } else if (event.key === 'ArrowDown') {
      if (hog > cells.length - width - 1) {
        return
      }
      cells[hog].classList.remove('hog')
      hog += width
      cells[hog].classList.add('hog')
    }
  })

  // add car every 3 seconds
  const obstucleAdd = setInterval(() => {
    if (car + 10) {
      cells[2].classList.add('car')
    }
  }, 3000)

  cells[car].classList.add('car')
  const obstucleMove = setInterval(() => {
    if (cells[92].classList.contains('car')) {
      cells[car].classList.remove('car')
      clearInterval(obstucleMove)
    } else {
      cells[car].classList.remove('car')
      car += 10
      cells[car].classList.add('car')
    }
  }, 1000)
}


// function TotalScore() {
//   if (cells[hog] + 1) {
//     + 10
//   }
// }
window.addEventListener('DOMContentLoaded', gameSetUp)