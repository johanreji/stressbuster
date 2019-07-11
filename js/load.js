var smashbtn=document.getElementsByClassName("smashbtn")[0];
smashbtn.addEventListener("click",function(){
  document.getElementById('paint').style.visibility="visible";
  document.getElementById('home').style.display="none";

});

var input = document.getElementById("file");
var element=document.getElementById("box");
input.addEventListener('change', triggerCallback);
element.appendChild(input);

element.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  element.classList.add('dragover');
});

element.addEventListener('dragleave', function(e) {
  e.preventDefault();
  e.stopPropagation();
  element.classList.remove('dragover');
});

element.addEventListener('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  element.classList.remove('dragover');
  triggerCallback(e);
});

element.addEventListener('click', function() {
  input.value = null;
  input.click();
});

function triggerCallback(e) {
  var files;
  if(e.dataTransfer) {
    files = e.dataTransfer.files;
  } else if(e.target) {
    files = e.target.files;
  }
  var file=files[0];
  var reader = new FileReader();
  reader.onloadend = function(){
    document.getElementById('myCanvas').style.backgroundImage = "url(" + reader.result + ")";
    // var canvas = document.getElementById('myCanvas');
    // var ctx = canvas.getContext('2d');
    // var img1 = new Image();
    // img1.src=reader.result;
    // ctx.drawImage(img1, 0, 0 );
    document.getElementById('box').style.backgroundImage = "url(" + reader.result + ")";
    document.getElementById('box').innerHTML='Uploaded!';

  }
  if(file){
    reader.readAsDataURL(file);
  }else{
  }
}
