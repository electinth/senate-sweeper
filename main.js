var emojiset = document.getElementById('emojiset').value.split(' ')
var cols = document.getElementById('cols')
var rows = document.getElementById('rows')
var bombs = document.getElementById('bombs')

game = new Game(cols.value, rows.value, bombs.value, emojiset, document.getElementById('twemoji').checked)

document.querySelector('.js-new-game').addEventListener('click', restart)
document.querySelector('.js-popup-new-game').addEventListener('click', restart)

// document.querySelector('.js-settings').addEventListener('click', function() {
//   var list = document.querySelector('.js-settings-popup').classList
//   list.contains('show') ? list.remove('show') : list.add('show')
//   this.setAttribute('aria-expanded', list.contains('show'))
// })

function restart () {
  clearInterval(game.timer)
  emojiset = document.getElementById('emojiset').value.split(' ')
  game = new Game(cols.value, rows.value, bombs.value, emojiset, document.getElementById('twemoji').checked)
  // document.querySelector('.js-settings-popup').classList.remove('show')
  return false
}