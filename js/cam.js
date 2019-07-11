
<!-- Configure a few settings and attach camera -->
var capturebtn=document.getElementsByClassName("capturebtn")[0];
capturebtn.addEventListener("click",function(e){
  e.stopPropagation();
  document.getElementById("capturediv").style.display="block";
  Webcam.set({
    width: 320,
    height: 240,
    dest_width: 1280,
    dest_height: 720,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  Webcam.attach( '#my_camera' );

});

document.getElementById("snapbtn").addEventListener("click",take_snapshot);
function take_snapshot() {
  document.getElementById("capturediv").style.display="none";
  // take snapshot and get image data
  Webcam.snap( function(data_uri) {
    // display results in page


    document.getElementById('myCanvas').style.backgroundImage = "url(" + data_uri + ")";
    document.getElementById('box').style.backgroundImage = "url(" + data_uri + ")";
    document.getElementById('box').innerHTML='Image loaded!';
    Webcam.reset();
  } );
}

//code for change camera
// var cameras = new Array(); //create empty array to later insert available devices
// navigator.mediaDevices.enumerateDevices() // get the available devices found in the machine
// .then(function(devices) {
// devices.forEach(function(device) {
// var i = 0;
// if(device.kind=== "videoinput"){ //filter video devices only
// cameras[i]= device.deviceId; // save the camera id's in the camera array
// console.log("cameraaa  ",cameras[i]);
// i++;
// }
// });
// });
// var camera=0;
// document.getElementById("changecamera").addEventListener("click",function(){
//
//   var webcamOptions = {
//     width: 320,
// 		height: 240,
// 		dest_width: 1280,
// 		dest_height: 720,
//     image_format: 'jpeg',
//     jpeg_quality: 90,
//   };
//   // if you don't need any additional options then use `var webcamOptions = true;`
//
//   // `enumerateDevices` is a method for getting all available media devices
//   if (typeof navigator.mediaDevices.enumerateDevices === 'undefined') {
//     // if method `enumerateDevices` doesn't support on the device we just run webcam
//     webcam.set(webcamOptions);
//   } else {
//     navigator.mediaDevices.enumerateDevices()
//       .then(function (devices) {
//         // Get all cameras on the device
//         var cameras = devices.filter(function (device) {
//           return device.kind === 'videoinput';
//         });
//
//         var deviceId = null;
//
//         cameras.forEach(function (camera) {
//           // Search back camera on the device
//           if (camera.label.toLowerCase().search('back') > -1) {
//             deviceId = camera.deviceId;
//           }
//         });
//
//         // If we don't find the back camera we use last camera in the list
//         if (!deviceId && cameras.length) {
//           deviceId = cameras[cameras.length - 1].deviceId;
//         }
//
//         if (deviceId) {
//           // If we have `deviceId` of a camera we run webcam with the following params:
//           webcamOptions.constraints = {
//             deviceId: {
//               exact: deviceId
//             },
//             facingMode: 'environment'
//           }
//         }
//
//         webcam.set(webcamOptions);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// Webcam.attach( '#my_camera' );
//
//
//
// });
//
