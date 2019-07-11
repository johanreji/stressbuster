function clearcanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("menu").style.display="none";
}
// function saveimage(link){
//
//   //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
// //  link.href = canvas.toDataURL();
//   //    link.download = "mypainting.png";
// //alert(canvas.toDataURL());
// //window.location.href=image;
// link.href = canvas.toDataURL();
//     link.download = "mypainting.png";
//     // var images=new Image();
//     // images.crossOrigin="anonymous";
//     // images.src=canvas.toDataURL();
// }
function menuaction(e){
  if(document.getElementById("menu").style.display=="block"){
    document.getElementById("menu").style.display="none";
    e.preventDefault();
  }
  else{
    document.getElementById("menu").style.display="block";
    e.preventDefault();
  }
}
document.getElementById("paint").addEventListener("contextmenu",function(e){
  menuaction(e);
},false);

function changeTool(toolno){
  switch (toolno) {
    case 0:tool=hammer;
    document.getElementById("menu").style.display="none";
    console.log(tool.mu);
    break;
    case 1:tool=gun;
    document.getElementById("menu").style.display="none";
    console.log(tool.mu);
    break;


  }
}
