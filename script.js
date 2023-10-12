// JavaScript functions and event listeners

document.getElementById("template1Button").addEventListener("click", function() {
    document.getElementById("template1").style.display = "block";
    document.getElementById("template2").style.display = "none";
});

document.getElementById("template2Button").addEventListener("click", function() {
    document.getElementById("template1").style.display = "none";
    document.getElementById("template2").style.display = "block";
});

// Function to handle displaying the phone number
function displayPhoneNumber() {
    alert("Phone Number: 9440336396");
}

document.getElementById("photoInput1").addEventListener("change", function(event) {
    const photoPreview = document.getElementById("photoPreview1");
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.width = 150;
            img.height = 150;
            photoPreview.innerHTML = "";
            photoPreview.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById("downloadButton1").addEventListener("click", function() {
    // Replace with your logic for Template 1 download
});

document.getElementById("downloadButton2").addEventListener("click", function() {
    // Replace with your logic for Template 2 download
});
