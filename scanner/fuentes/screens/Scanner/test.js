function readTextFile() {
  var file = "file:///home/matux/Documents/TEOMATE/params.txt";
  var rawFile = new XMLHttpRequest();
  try {
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText.toString();
          console.log(allText);
          var newText = allText.split(";")
          alert(newText[0]);
          console.log(newText[1]+"")
        }
      }
    };
    rawFile.send(null);
  } catch (e) {
    console.log(e);
  }
}

function test() {
    console.log("Pressed!");
}
