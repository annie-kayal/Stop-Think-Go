function gameSetUp() {
  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let hog = 90
  // let giraffe = 22
  // let elephant = 7
  // let car = 2
  let score = 0




  // array for obstucle position when page loads
  const startingPosition = [2, 22, 52, 43, 73, 15, 45, 65, 16, 36, 66, 7, 57, 28, 58]
  // array to identify the bottom of the grid
  const borderBottom = [92, 93, 94, 95, 96, 97, 98]
  // array to identify top of grid 
  const borderTop = [3, 4, 5, 6, 7, 8, 9]
  console.log(borderTop)
  // array to be called on for random generation of class
  const obstacleClassArray = ['car', 'giraffe', 'elephant']

  // choose random element from class list array 
  function obstucleSelectionArray() {
    const randomObstacleSelectionArray = obstacleClassArray[Math.floor(Math.random() * obstacleClassArray.length)]
    return randomObstacleSelectionArray
  }



  // create grid
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === hog) {
      cell.classList.add('hog')
    }
    if (startingPosition.includes(i)) {
      cell.classList.add('car')
    }
    cells.push(cell)
    grid.appendChild(cell)
    cell.id = i
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

  if (hog === cells[9]) {
    score + 10
    return score
  } console.log(score)






  // make car move every second at start of game
  const obstacleInterval = setInterval(() => {
    for (let i = 0; i < startingPosition.length; i++) {
      //////////// WRAP AROUND ///////////
      if (borderBottom.includes(startingPosition[i])) {

        // wraps obstucles around
        if (cells[startingPosition[i]].classList.contains('car')) {
          cells[startingPosition[i]].classList.remove('car')
          startingPosition[i] -= (width ** 2 - 10)
          cells[startingPosition[i]].classList.add(obstucleSelectionArray())
        } else if (cells[startingPosition[i]].classList.contains('giraffe')) {
          cells[startingPosition[i]].classList.remove('giraffe')
          startingPosition[i] -= (width ** 2 - 10)
          cells[startingPosition[i]].classList.add(obstucleSelectionArray())
        } else if (cells[startingPosition[i]].classList.contains('elephant')) {
          cells[startingPosition[i]].classList.remove('elephant')
          startingPosition[i] -= (width ** 2 - 10)
          cells[startingPosition[i]].classList.add(obstucleSelectionArray())
        }
      } else {
        ///////// NO WRAP, JUST MOVEMENT
        // makes obstacles move
        if (cells[startingPosition[i]].classList.contains('car')) {
          cells[startingPosition[i]].classList.remove('car')
          startingPosition[i] += width
          cells[startingPosition[i]].classList.add('car')
        } else if (cells[startingPosition[i]].classList.contains('giraffe')) {
          cells[startingPosition[i]].classList.remove('giraffe')
          startingPosition[i] += width
          cells[startingPosition[i]].classList.add('giraffe')
        } else if (cells[startingPosition[i]].classList.contains('elephant')) {
          cells[startingPosition[i]].classList.remove('elephant')
          startingPosition[i] += width
          cells[startingPosition[i]].classList.add('elephant')
        }
      }
    }
  }, 600)

  // scoring system

}

window.addEventListener('DOMContentLoaded', gameSetUp)