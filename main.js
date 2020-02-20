function gameSetUp() {
  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let hog = 90

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
}
window.addEventListener('DOMContentLoaded', gameSetUp)