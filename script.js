////////////////////////////////////////////////CALCULADORA////////////////////////////////////////////////////////////////////////////////////////////////////
function dis(val) {
    document.getElementById("result").value += val
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}

function clr() {
    document.getElementById("result").value = ""
}

////////////////////////////////////////////////OPENER////////////////////////////////////////////////////////////////////////////////////////////////////

function OpenCalculator() {
    if (document.getElementById("calcula").style.display === "none"){
        document.getElementById("calcula").style.display = "";
    } 
    else if (document.getElementById("calcula").style.display === ""){
        document.getElementById("calcula").style.display = "none";
    }
}

function OpenNotes() {
    if (document.getElementById("note").style.display === "none"){
        document.getElementById("note").style.display = "";
    } 
    else if (document.getElementById("note").style.display === ""){
        document.getElementById("note").style.display = "none";
    }
}

function OpenBrowser() {
  if (document.getElementById("brow").style.display === "none"){
      document.getElementById("brow").style.display = "";
  } 
  else if (document.getElementById("brow").style.display === ""){
      document.getElementById("brow").style.display = "none";
  }
}

function OpenFiles() {
  if (document.getElementById("filee").style.display === "none"){
      document.getElementById("filee").style.display = "";
  } 
  else if (document.getElementById("filee").style.display === ""){
      document.getElementById("filee").style.display = "none";
  }
}

////////////////////////////////////////////////DRAG////////////////////////////////////////////////////////////////////////////////////////////////////

dragElement(document.getElementById("calcula"));
dragElement(document.getElementById("note"));
dragElement(document.getElementById("brow"));
dragElement(document.getElementById("filee"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

////////////////////////////////////////////////SAVE_TEXT////////////////////////////////////////////////////////////////////////////////////////////////////

let notepad = document.getElementById("nn")

notepad.value = localStorage.getItem("saveNote")

notepad.addEventListener("click", event => {
  localStorage.setItem("saveNote", event.target.value)
})


////////////////////////////////////////////////FILE_READER////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('input-file').addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('nn'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

const reader = new FileReader()
reader.onload = event => console.log(event.target.result)
reader.onerror = error => reject(error)
reader.readAsText(file)