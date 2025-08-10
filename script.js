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

if (screen.width > screen.height) {
  video.style.width = "100%";
}
