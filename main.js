function gameSetUp() {
  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let hog = 90
  let score = 0
  let lives = 3
  const scoring = document.getElementsByClassName('score')[0]
  const life = document.getElementsByClassName('lives')[0]




  // array for obstucle position when page loads
  const startingPosition = [2, 22, 52, 43, 73, 15, 45, 65, 16, 36, 66, 7, 57, 28, 58]
  // array to identify the bottom of the grid
  const borderBottom = [92, 93, 94, 95, 96, 97, 98]
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
      checkWin()
    } else if (event.key === 'ArrowLeft') {
      if (hog === 0) {
        return
      }
      cells[hog].classList.remove('hog')
      hog -= 1
      cells[hog].classList.add('hog')
      checkWin()
    } else if (event.key === 'ArrowUp') {
      if (hog < width) {
        return
      }
      cells[hog].classList.remove('hog')
      hog -= width
      cells[hog].classList.add('hog')
      checkWin()
    } else if (event.key === 'ArrowDown') {
      if (hog > cells.length - width - 1) {
        return
      }
      cells[hog].classList.remove('hog')
      hog += width
      cells[hog].classList.add('hog')
      checkWin()
    }
  })

  // add houses to the grid
  cells[9].classList.add('house')
  cells[39].classList.add('house')
  cells[69].classList.add('house')
  cells[99].classList.add('house')

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
  const checkWin = function () {
    if (hog === 9) {
      cells[9].classList.remove('hog')
      cells[9].classList.remove('house')
      cells[9].classList.add('hog-home')
      score += 100
      scoring.innerHTML = score
      hog = 90
      cells[90].classList.add('hog')
    } else if (hog === 39) {
      cells[39].classList.remove('house')
      cells[39].classList.add('hog-home')
      cells[39].classList.remove('hog')
      hog = 90
      cells[90].classList.add('hog')
      score += 100
      scoring.innerHTML = score
    } else if (hog === 69) {
      cells[69].classList.remove('house')
      cells[69].classList.add('hog-home')
      cells[69].classList.remove('hog')
      hog = 90
      cells[90].classList.add('hog')
      score += 100
      scoring.innerHTML = score
    } else if (hog === 99) {
      cells[99].classList.remove('house')
      cells[99].classList.add('hog-home')
      cells[99].classList.remove('hog')
      hog = 90
      cells[90].classList.add('hog')
      score += 100
      scoring.innerHTML = score

      // bonus score if all hedgehoges made it home!
    } if (score === 400) {
      score += 400
      scoring.innerHTML = score
    }
  }

  // collison 
  const checkCollison = setInterval(() => {
    if (lives === 0) {
      cells[hog].classList.remove('hog')
      clearInterval(obstacleInterval)
    }

    if (cells[hog].classList.contains('car')) {
      cells[hog].classList.remove('hog')
      lives -= 1
      life.innerHTML = lives
      hog = 90
      cells[90].classList.add('hog')
    } else if (cells[hog].classList.contains('giraffe')) {
      cells[hog].classList.remove('hog')
      lives -= 1
      life.innerHTML = lives
      hog = 90
      cells[90].classList.add('hog')
    } else if (cells[hog].classList.contains('elephant')) {
      cells[hog].classList.remove('hog')
      lives -= 1
      life.innerHTML = lives
      hog = 90
      cells[90].classList.add('hog')
    } 
  }, 400)


}

window.addEventListener('DOMContentLoaded', gameSetUp)