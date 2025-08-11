const video = document.getElementById("video");

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert("Houve um erro: " + err);
  }
}

startCamera();

imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      overlayImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
