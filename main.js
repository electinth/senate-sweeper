/* global twemoji, alert, MouseEvent, game */
const iDevise = navigator.platform.match(/^iP/);
const feedback = document.getElementById('feedback');

class Game {
  constructor(cols, rows, number_of_bombs, set, numbers) {
    this.number_of_cells = 250; // cols * rows;
    this.map = document.getElementById('map');
    this.cols = Number(cols);
    this.rows = Number(rows);
    this.number_of_bombs = Number(number_of_bombs);
    // this.rate = number_of_bombs / this.number_of_cells;
    this.emojiset = set; // number prefix, bomb, flagged, empty
    this.numbermoji = numbers;
    this.init();
  }
  init() {
    this.prepareEmoji();
    // if (this.number_of_cells > 2500) {
    //   alert('too big, go away, have less than 2500 cells');
    //   return false;
    // }
    // if (this.number_of_cells <= this.number_of_bombs) {
    //   alert('more bombs than cells, can\'t do it');
    //   return false;
    // }
    let that = this;
    this.moveIt(true);
    this.map.innerHTML = '';
    let grid_data = this.bomb_array(levels[level]);

    function getIndex(x, y) {
      if (x > that.cols || x <= 0) return -1;
      if (y > that.cols || y <= 0) return -1;
      return that.cols * (y - 1) + x - 1;
    }
    let row = document.createElement('div');
    row.setAttribute('role', 'row');
    grid_data.forEach((senator, i) => {
      let isBomb = senator.bomb;

      let cell = document.createElement('span');
      cell.setAttribute('role', 'gridcell');
      let mine = that.mine(senator.id, senator.name, isBomb);
      let x = Math.floor((i + 1) % that.cols) || that.cols;
      let y = Math.ceil((i + 1) / that.cols);
      let neighbors_cords = [[x, y - 1], [x, y + 1], [x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]];
      if (!isBomb) {
        let neighbors = neighbors_cords.map(xy => grid_data[getIndex(xy[0], xy[1])]);
        mine.mine_count = neighbors.filter(neighbor => neighbor && neighbor.bomb).length;
      }
      mine.classList.add('x' + x, 'y' + y);
      mine.neighbors = neighbors_cords.map(xy => `.x${xy[0]}.y${xy[1]}`);
      cell.appendChild(mine);
      row.appendChild(cell);
      if (x === that.cols || i === this.number_of_cells - 1) {
        that.map.appendChild(row);
        row = document.createElement('div');
        row.setAttribute('role', 'row');
      }
    });
    this.resetMetadata();
    this.bindEvents();
    this.updateBombsLeft();
  }
  bindEvents() {
    let that = this;
    let cells = document.getElementsByClassName('cell');

    const popup = document.getElementById('senate-popup');
    popup.getElementsByClassName('close')[0].addEventListener('click', () => {
      popup.classList.remove('shown');
    });

    const popup_button_flag = popup.getElementsByClassName('button')[0];
    const popup_button_reveal = popup.getElementsByClassName('button')[1];
    let previous_listeners = [];

    Array.prototype.forEach.call(cells, target => {
      // event handlers
      function flag_handler(evt) {
        let emoji;
        evt.preventDefault();
        if (!target.isMasked) {
          return;
        }
        if (target.isFlagged) {
          emoji = that.emojiset[3].cloneNode();
          target.isFlagged = false;
          target.classList.remove('flagged');
        } else {
          emoji = that.emojiset[2].cloneNode();
          target.isFlagged = true;
          target.classList.add('flagged');
        }
        target.childNodes[0].remove();
        target.appendChild(emoji);
        that.updateBombsLeft();

        popup_button_flag.removeEventListener('click', flag_handler);
        popup.classList.remove('shown');
        target.classList.remove('selected');
      }
      function reveal_handler(evt) {
        if (!target.isMasked || target.isFlagged) {
          return;
        }
        if (document.getElementsByClassName('unmasked').length === 0) {
          that.startTimer();
          // if (target.isBomb) {
          //   that.restart();
          //   target.classList.remove('unmasked');
          //   // document.getElementsByClassName(targetClasses)[0].click();
          //   return;
          // }
        }
        if (evt.view) {
          that.moveIt();
        }
        target.reveal();
        if (target.mine_count === 0 && !target.isBomb) {
          that.revealNeighbors(target);
        }
        that.game();

        popup_button_reveal.removeEventListener('click', reveal_handler);
        popup.classList.remove('shown');
        target.classList.remove('selected');
      }

      // clicking on a cell
      target.addEventListener('click', evt => {
        Array.prototype.forEach.call(cells, cell => {
          cell.classList.remove('selected');
        });
        target.classList.add('selected');

        if (evt.clientY > window.innerHeight - 150) {
          popup.style.bottom = '150px';
        } else {
          popup.style.bottom = '20px';
        }
        popup.getElementsByClassName('image')[0].style.backgroundImage = `url(images/${target.cellId}.jpg)`;
        popup.getElementsByClassName('name')[0].textContent = target.name;
        if (target.isFlagged) {
          popup_button_flag.classList.add('flagged');
        } else {
          popup_button_flag.classList.remove('flagged');
        }
        if (!target.isMasked) {
          popup.classList.add('shortened');
        } else {
          popup.classList.remove('shortened');
        }
        popup.classList.add('shown');

        // remove previous events
        popup_button_flag.removeEventListener('click', previous_listeners[0]); // left button to flag
        popup_button_reveal.removeEventListener('click', previous_listeners[1]); // right button to open

        popup_button_flag.addEventListener('click', flag_handler); // left button to flag
        popup_button_reveal.addEventListener('click', reveal_handler); // right button to open

        previous_listeners = [];
        previous_listeners.push(flag_handler);
        previous_listeners.push(reveal_handler);
      });
    });
  }
  game() {
    if (this.result)
      return;
    let cells = document.getElementsByClassName('cell');
    let masked = Array.prototype.filter.call(cells, cell => cell.isMasked);
    let bombs = Array.prototype.filter.call(cells, cell => cell.isBomb && !cell.isMasked);
    if (bombs.length > 0) {
      Array.prototype.forEach.call(masked, cell => { cell.reveal(); });
      this.result = 'lost';
      this.showFeedback();
    }
    else if (masked.length === this.number_of_bombs) {
      Array.prototype.forEach.call(masked, cell => { cell.reveal(true); });
      this.result = 'won';
      this.showFeedback();
    }
  }
  // restart() {
  //   clearInterval(this.timer);
  //   this.result = false;
  //   this.timer = false;
  //   this.init();
  // }
  resetMetadata() {
    Array.from(document.getElementsByClassName('timer')).forEach(e => { e.textContent = '0 วินาที' });
    document.querySelector('.wrapper').classList.remove('won', 'lost');
  }
  startTimer() {
    if (this.timer)
      return;
    this.startTime = new Date();
    this.timer = setInterval(() => {
      Array.from(document.getElementsByClassName('timer')).forEach(e => { e.textContent = ((new Date() - game.startTime) / 1000).toFixed(0) + ' วิ' });
    }, 100);
  }
  mine(id, name, bomb) {
    let that = this;
    let base = document.createElement('button');
    base.type = 'button';
    base.className = 'cell';
    base.appendChild(this.emojiset[3].cloneNode());
    base.isMasked = true;
    base.name = name;
    base.cellId = id;
    if (bomb) {
      base.isBomb = true;
    }
    base.reveal = function(won) {
      let emoji = base.isBomb ? (won ? that.emojiset[2] : that.emojiset[1]) : that.numbermoji[base.mine_count];
      this.childNodes[0].remove();
      this.appendChild(emoji.cloneNode());
      this.isMasked = false;
      this.classList.add('unmasked');
      if (base.isBomb) {
        this.classList.add('bombed');
      } else {
        this.classList.add('mine_count_' + base.mine_count);
      }
    };
    return base;
  }
  revealNeighbors(mine) {
    let neighbors = document.querySelectorAll(mine.neighbors);
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i].isMasked && !neighbors[i].isFlagged) {
        neighbors[i].reveal();
        if (neighbors[i].mine_count === 0 && !neighbors[i].isBomb) {
          this.revealNeighbors(neighbors[i]);
        }
      }
    }
  }
  prepareEmoji() {
    let that = this;
    let makeEmojiElement = emoji => document.createTextNode(emoji.alt || emoji.data || emoji);
    this.emojiset = this.emojiset.map(makeEmojiElement);
    this.numbermoji = this.numbermoji.map(makeEmojiElement);
  }
  bomb_array(level) {
    let arr = [];
    for (let i = 0; i < this.number_of_bombs; i++) {
      arr.push({ id: level['yes'][i], name: senate_names[level['yes'][i]-1], bomb: true });
    }
    for (let i = 0; i < (this.number_of_cells - this.number_of_bombs); i++) {
      arr.push({ id: level['no'][i], name: senate_names[level['no'][i]-1], bomb: false });
    }
    return this.shuffle(arr);
  }
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  moveIt(zero) {
    zero ? this.moves = 0 : this.moves++;
  }
  updateBombsLeft() {
    let flagged = Array.prototype.filter.call(document.getElementsByClassName('cell'), target => target.isFlagged);
    Array.from(document.getElementsByClassName('bombs-left')).forEach(e => { e.textContent = `${this.number_of_bombs - flagged.length}` });
    Array.from(document.getElementsByClassName('score')).forEach(e => { e.textContent = `${flagged.length}` }); // TODO use real score
  }
  showFeedback() {
    document.querySelector('.wrapper').classList.add(this.result);

    feedback.getElementsByClassName('emoji')[0].textContent = (this.result === 'won')? '😀' : '😵';
    feedback.getElementsByClassName('title')[0].textContent = (this.result === 'won')? 'You Won' : 'Game Over';
    feedback.getElementsByClassName('subtitle')[0].textContent = (this.result === 'won')? 'เยี่ยมมาก คุณดูออกหมดเลย' : 'พลาดแล้ว คุณดูคนผิด';

    clearInterval(this.timer);
    Array.from(document.getElementsByClassName('timer')).forEach(
      e => { e.textContent = ((new Date() - this.startTime) / 1000).toFixed(0) + ' วิ' }
    );

    feedback.getElementsByClassName('close')[0].addEventListener('click', () => {
      feedback.classList.remove('shown');
    });

    // buttons
    let buttons = feedback.getElementsByClassName('button');
    buttons[0].addEventListener('click', evt => {
      feedback.classList.remove('shown');
      restart();
    });
    buttons[1].addEventListener('click', evt => {
      feedback.classList.remove('shown');
    });
    // buttons[2].addEventListener('click', evt => {
    //   feedback.classList.remove('shown');
    // });

    feedback.classList.add('shown');
  }
}

let level = 0;
function change_level(dropdown) {
  level = +dropdown.value;
  restart();
}

function restart() {
  clearInterval(game.timer)
  game = new Game(16, 16, levels[level]['yes'].length, [' ', '', '', ''], ['', '', '', '', '', '', '', '', ''])
  return false
}
restart();

const popup = document.getElementById('instruction');
popup.getElementsByClassName('button')[0].addEventListener('click', () => {
  popup.classList.remove('shown');
});

const info_popup = document.getElementById('information');
info_popup.getElementsByClassName('close')[0].addEventListener('click', () => {
  info_popup.classList.remove('shown');
});
const menubar = document.getElementById('menubar');
menubar.getElementsByClassName('stat')[3].getElementsByClassName('icon')[0].addEventListener('click', () => {
  info_popup.classList.add('shown');
});