function createPopup(url, width, height) {
  var newwindow = window.open(url, "", "width=" + width + ",height=" + height + ",scrollbars=true");
  if (window.focus) {
    newwindow.focus()
  }
  return false;
}

let share_buttons = document.getElementsByClassName("share-facebook");
for(let i = 0; i < share_buttons.length; i++) {
  let button = share_buttons[i];
  button.onclick = function() {
    let share_url = document.URL;

    FB.ui({
      method: 'feed',
      display: 'popup',
      link: share_url,
    }, function (response) { });
  }
}

share_buttons = document.getElementsByClassName("share-twitter");
for(let i = 0; i < share_buttons.length; i++) {
  let button = share_buttons[i];
  button.onclick = function() {
    var share_url = document.URL;
    var text = document.querySelector("meta[property='og:title']").getAttribute("content");
    var retext = encodeURIComponent(text);
    createPopup("https://twitter.com/share?text=" + retext + "&url=" + share_url, 550, 420);
  }
}

share_buttons = document.getElementsByClassName("share-line");
for(let i = 0; i < share_buttons.length; i++) {
  let button = share_buttons[i];
  button.onclick = function() {
    var share_url = document.URL;
    createPopup("https://social-plugins.line.me/lineit/share?url=" + share_url, 550, 600);
  }
}
