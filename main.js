function gameSetUp() {
  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let hog = 90
  let car = 2
  let points = 0
  // array for obstucle position when page loads
  const startingPositionObstucles = [2, 22, 42, 62]
  // array to identify the bottom of the grid
  const borderBottom = [92,93,94,95,96,97,98]
  // array to be called on for random generation of class
  const obstacleClassArray = ['car', 'giraffe', 'elephant'] 


  // create grid
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === hog) {
      cell.classList.add('hog')
    } 
    if (startingPositionObstucles.includes(i)) {
      cell.classList.add('car')
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

  // if you hit the bottom, if sttements to see what the class is per element
  // in obstucleClassArray 

  const randomObstacleSelectionArray = obstacleClassArray[Math.floor(Math.random() * obstacleClassArray.length)]
  console.log(randomObstacleSelectionArray)

  // make car move every second
  const carInterval = setInterval(() => {
    for (let i = 0; i < startingPositionObstucles.length; i++) {
      if (borderBottom.includes(startingPositionObstucles[i])) {
        startingPositionObstucles.push(randomObstacleSelectionArray)
        cells[startingPositionObstucles[i]].classList.remove('car')
        startingPositionObstucles[i] -= (width ** 2 - 10)
        cells[startingPositionObstucles[i]].classList.add('car')        
      } else {
        cells[startingPositionObstucles[i]].classList.remove('car')
        startingPositionObstucles[i] += width
        cells[startingPositionObstucles[i]].classList.add('car')
      }
    }
  }, 900)
}


// function TotalScore() {
//   if (cells[hog] + 1) {
//     + 10
//   }
// }
window.addEventListener('DOMContentLoaded', gameSetUp)