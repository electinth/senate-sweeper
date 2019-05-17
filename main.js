/* global twemoji, alert, MouseEvent, game */
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
const iDevise = navigator.platform.match(/^iP/)
const feedback = document.querySelector('.feedback')

let Game = function (cols, rows, number_of_bombs, set) {
  this.number_of_cells = cols * rows
  this.map = document.getElementById('map')
  this.cols = Number(cols)
  this.rows = Number(rows)
  this.number_of_bombs = Number(number_of_bombs)
  this.rate = number_of_bombs / this.number_of_cells

  this.emojiset = set
  this.numbermoji = [this.emojiset[0]].concat(numbers)

  this.init()
}

Game.prototype.init = function () {
  this.prepareEmoji()

  if (this.number_of_cells > 2500) { alert('too big, go away, have less than 2500 cells'); return false }
  if (this.number_of_cells <= this.number_of_bombs) { alert('more bombs than cells, can\'t do it'); return false }
  let that = this
  this.moveIt(true)
  this.map.innerHTML = ''
  let grid_data = this.bomb_array()

  function getIndex (x, y) {
    if (x > that.cols || x <= 0) return -1
    if (y > that.cols || y <= 0) return -1
    return that.cols * (y - 1 ) + x - 1
  }

  let row = document.createElement('div')
  row.setAttribute('role', 'row')
  grid_data.forEach(function (isBomb, i) {
    let cell = document.createElement('span')
    cell.setAttribute('role', 'gridcell')
    let mine = that.mine(isBomb)
    let x = Math.floor((i + 1) % that.cols) || that.cols
    let y = Math.ceil((i + 1) / that.cols)
    let neighbors_cords = [[x, y - 1], [x, y + 1], [x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]]
    if(!isBomb) {
      let neighbors = neighbors_cords.map(xy => grid_data[getIndex(xy[0], xy[1])])
      mine.mine_count = neighbors.filter(neighbor_bomb => neighbor_bomb).length
    }
    mine.classList.add('x' + x, 'y' + y)
    mine.neighbors = neighbors_cords.map(xy => `.x${xy[0]}.y${xy[1]}`)

    cell.appendChild(mine)
    row.appendChild(cell)
    if (x === that.cols)  {
      that.map.appendChild(row)
      row = document.createElement('div')
      row.setAttribute('role', 'row')
    }
  })

  this.resetMetadata()
  this.bindEvents()
  this.updateBombsLeft()
}

Game.prototype.bindEvents = function () {
  let that = this
  let cells = document.getElementsByClassName('cell')

  Array.prototype.forEach.call(cells, function (target) {
    // clicking on a cell and revealing cell
    target.addEventListener('click', function (evt) {
      if (!target.isMasked || target.isFlagged) return
      if (document.getElementsByClassName('unmasked').length === 0) {
        that.startTimer()

        if (target.isBomb) {
          that.restart()
          let targetClasses = target.className.replace('unmasked', '')
          document.getElementsByClassName(targetClasses)[0].click()
          return
        }
      }
      if (evt.view) that.moveIt()

      target.reveal()
      that.updateFeedback(target.getAttribute('aria-label'))

      if (target.mine_count === 0 && !target.isBomb) {
        that.revealNeighbors(target)
      }
      that.game()
    })

    // double clicking on a cell and opening the cell and all 8 of its neighbors
    target.addEventListener('dblclick', function () {
      if (target.isFlagged) return
      that.moveIt()

      target.reveal()
      that.revealNeighbors(target)
      that.game()
    })

    // marking a cell as a potential bomb
    target.addEventListener('contextmenu', function (evt) {
      let emoji
      evt.preventDefault()
      if (!target.isMasked) { return }
      if (target.isFlagged) {
        target.setAttribute('aria-label','Field')
        that.updateFeedback('Unflagged as potential bomb')
        emoji = that.emojiset[3].cloneNode()
        target.isFlagged = false
        target.classList.remove('flagged')
      } else {
        target.setAttribute('aria-label', 'Flagged as potential bomb')
        that.updateFeedback('Flagged as potential bomb')
        emoji = that.emojiset[2].cloneNode()
        target.isFlagged = true
        target.classList.add('flagged')
      }
      target.childNodes[0].remove()
      target.appendChild(emoji)
      that.updateBombsLeft()
    })

    // support to HOLD to mark bomb, works in Android by default
    if (iDevise) {
      target.addEventListener('touchstart', function (evt) {
        that.holding = setTimeout(function () {
          target.dispatchEvent(new Event('contextmenu'))
        }, 500)
      })

      target.addEventListener('touchend', function (evt) {
        clearTimeout(that.holding)
      })
    }
  })

  window.addEventListener('keydown', function (evt) {
    if (evt.key == 'r' || evt.which == 'R'.charCodeAt()) {
      that.restart()
    }
  })
}

Game.prototype.game = function () {
  if (this.result) return
  let cells = document.getElementsByClassName('cell')
  let masked = Array.prototype.filter.call(cells, cell => cell.isMasked)
  let bombs = Array.prototype.filter.call(cells, cell =>  cell.isBomb && !cell.isMasked)

  if (bombs.length > 0) {
    Array.prototype.forEach.call(masked, function (cell) { cell.reveal() })
    this.result = 'lost'
    this.showMessage()
  } else if (masked.length === this.number_of_bombs) {
    Array.prototype.forEach.call(masked, function (cell) { cell.reveal(true) })
    this.result = 'won'
    this.showMessage()
  }
}

Game.prototype.restart = function () {
  clearInterval(this.timer)
  this.result = false
  this.timer = false
  this.init()
}

Game.prototype.resetMetadata = function () {
  document.getElementById('timer').textContent = '0.00'
  document.querySelector('.wrapper').classList.remove('won', 'lost')
}

Game.prototype.startTimer = function () {
  if (this.timer) return
  this.startTime = new Date()
  this.timer = setInterval(function () {
    document.getElementById('timer').textContent = ((new Date() - game.startTime) / 1000).toFixed(2)
  }, 100)
}

Game.prototype.mine = function (bomb) {
  let that = this
  let base = document.createElement('button')
  base.type = 'button'
  base.setAttribute('aria-label', 'Field')
  base.className = 'cell'
  base.appendChild(this.emojiset[3].cloneNode())
  base.isMasked = true
  if (bomb) base.isBomb = true
  base.reveal = function (won) {
    let emoji = base.isBomb ? (won ? that.emojiset[2] : that.emojiset[1]) : that.numbermoji[base.mine_count]
    let text = base.isBomb ? (won ? "Bomb discovered" : "Boom!") : (base.mine_count === 0 ? "Empty field" : base.mine_count + " bombs nearby")
    this.childNodes[0].remove()
    this.setAttribute('aria-label', text)
    this.appendChild(emoji.cloneNode())
    this.isMasked = false
    this.classList.add('unmasked')
  }
  return base
}

Game.prototype.revealNeighbors = function (mine) {
  let neighbors = document.querySelectorAll(mine.neighbors)
  for(let i = 0; i < neighbors.length; i++) {
    if (neighbors[i].isMasked && !neighbors[i].isFlagged) {
      neighbors[i].reveal()

      if (neighbors[i].mine_count === 0 && !neighbors[i].isBomb) {
        this.revealNeighbors(neighbors[i])
      }
    }
  }
}

Game.prototype.prepareEmoji = function () {
  let that = this
  function makeEmojiElement (emoji) {
    return document.createTextNode(emoji.alt || emoji.data || emoji)
  }

  this.emojiset = this.emojiset.map(makeEmojiElement)
  this.numbermoji = this.numbermoji.map(makeEmojiElement)
}

Game.prototype.bomb_array = function () {
  let chance = Math.floor(this.rate * this.number_of_cells)
  let arr = []
  for (let i = 0; i < chance; i++) {
    arr.push(true)
  }
  for (let n = 0; n < (this.number_of_cells - chance); n++) {
    arr.push(false)
  }
  return this.shuffle(arr)
}

Game.prototype.shuffle = function (array) {
  let currentIndex = array.length, temporaryValue, randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

Game.prototype.moveIt = function (zero) {
  zero ? this.moves = 0 : this.moves++
}

Game.prototype.updateBombsLeft = function () {
  let flagged = Array.prototype.filter.call(document.getElementsByClassName('cell'), target => target.isFlagged)
  document.getElementById('bombs-left').textContent = `${this.number_of_bombs - flagged.length}`
}

Game.prototype.updateFeedback = function (text) {
  feedback.textContent = text
  // Toggle period to force voiceover to read out the same content
  if (this.feedbackToggle) feedback.textContent += "."
  this.feedbackToggle = !this.feedbackToggle
}

Game.prototype.showMessage = function () {
  clearInterval(this.timer)
  let seconds = ((new Date() - this.startTime) / 1000).toFixed(2)
  let winner = this.result === 'won'
  let emoji = winner ? '😎' : '😵'
  this.updateFeedback(winner ? "Yay, you won!" : "Boom! you lost.")
  document.querySelector('.wrapper').classList.add(this.result)
  document.getElementById('timer').textContent = seconds
}

restart();

function restart () {
  clearInterval(game.timer)
  game = new Game(16, 16, 101, ["", "X", "!", ""])
  return false
}

let popup = document.getElementById('popup');
// popup.addEventListener('click', () => {
//   popup.classList.remove('shown');
// });
let popup_button = popup.getElementsByClassName('button')[0];
popup_button.addEventListener('click', () => {
  popup.classList.remove('shown');
});