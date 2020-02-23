function gameSetUp() {
  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let hog = 90
  let car = 2
  let points = 0
  // array for obstucle position when page loads
  const startingPositionCars = [2, 22, 42, 62, 13, 53, 64]
  // array to identify the bottom of the grid
  const borderBottom = [92, 93, 94, 95, 96, 97, 98]
  // array to identify top of grid 
  const borderTop = [3, 4, 5, 6, 7, 8, 9]
  // array to be called on for random generation of class
  const obstacleClassArray = ['car', 'giraffe', 'elephant', 'car', 'car']
console.log(borderTop)

  // create grid
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === hog) {
      cell.classList.add('hog')
    }
    if (startingPositionCars.includes(i)) {
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

  // make car move every second at start of game
  const carInterval = setInterval(() => {
    for (let i = 0; i < startingPositionCars.length; i++) {
      if (borderBottom.includes(startingPositionCars[i])) {
        // wraps cars around
        cells[startingPositionCars[i]].classList.remove('car')
        startingPositionCars[i] -= (width ** 2 - 10)
        cells[startingPositionCars[i]].classList.add('car')
      } else {
        // makes cars move
        cells[startingPositionCars[i]].classList.remove('car')
        startingPositionCars[i] += width
        cells[startingPositionCars[i]].classList.add('car')
      }
    }
  }, 900)

  // choose random element from class list array 
  function obstucleSelectionArray() {
    const randomObstacleSelectionArray = obstacleClassArray[Math.floor(Math.random() * obstacleClassArray.length)]
    return randomObstacleSelectionArray
  }

  // choose random top row cell 
  function rowSelector() {
    const randomTopRow = [Math.ceil(Math.random() * borderTop.length)]
    return randomTopRow
  }

  // select random row & class every 3 seconds
  const newObstacle = setInterval(() => {
      console.log(borderBottom.contains('car'))
    // console.log(obstucleSelectionArray(), rowSelector())
  }, 3000)

  // if you hit the bottom, if sttements to see what the class is per element
  // in obstucleClassArray 
  



}

// const newObstucle = setInterval(() => {
//   rowSelector()
// for ( let i = 0; i < obstucleSelectionArray; i++)
//   if (borderBottom[i] === 'giraffe') {
//     borderBottom.classList.remove('giraffe')
//     obstucleSelectionArray()
//     clearInterval(newObstucle)
//   } else if (obstucleSelectionArray === 'elephant') {
//     borderBottom.classList.contains('elephant')
//   } else if (obstucleSelectionArray === 'car') {
//     borderBottom.classList.contains('car')
//   }
// }, 3000)
// console.log(newObstucle())

window.addEventListener('DOMContentLoaded', gameSetUp)