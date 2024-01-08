//Retrieves the elements with the ids
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

//if enter pressed, generate QR code
function handleButtonClick(event) {
    if (event.keyCode === 13) {
        generateQR();
    }
}

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
//event listener triggered when key pressed. Checks if the Enter key was pressed.
qrText.addEventListener("keydown", handleButtonClick);
