var mHTML = document.getElementById('message'),
  messages = [
    'ideas.',
    'Collaborations.',
    'Challenges.',
    'Success.',
    'Happiness.'
  ];

var currentMessage = 0;
function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  var currentStr = messages[currentMessage];
  currentStr.split();
  var part = '';
  var currentLetter = 0;
  var int1 = setInterval(function(){
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(function(){
        deleteMessage(part);
      }, 500);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 100);
}
function deleteMessage(str) {
  var int = setInterval(function(){
    if (str.length === 0) {
      setTimeout(function(){
        typeMessage();
      }, 500);
      clearInterval(int);
    } else {
      str = str.split('');
      str.pop();
      str = str.join('');
      mHTML.innerHTML = str;
    }
  },50);
}
typeMessage();
