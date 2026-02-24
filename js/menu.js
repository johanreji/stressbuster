function clearcanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("menu").style.display = "none";
}

function menuaction(e) {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
    if (e) e.preventDefault();
  }
  else {
    document.getElementById("menu").style.display = "block";
    if (e) e.preventDefault();
  }
}
document.getElementById("paint").addEventListener("contextmenu", function (e) {
  menuaction(e);
}, false);

function changeTool(toolno) {
  // Update active class on toolbar buttons
  var toolbarBtns = document.querySelectorAll('.toolbar-btn');
  toolbarBtns.forEach(function (btn) { btn.classList.remove('active'); });

  switch (toolno) {
    case 0:
      tool = hammer;
      document.getElementById("menu").style.display = "none";
      var hammerBtn = document.getElementById('tool-hammer');
      if (hammerBtn) hammerBtn.classList.add('active');
      break;
    case 1:
      tool = gun;
      document.getElementById("menu").style.display = "none";
      var gunBtn = document.getElementById('tool-gun');
      if (gunBtn) gunBtn.classList.add('active');
      break;
  }
}
