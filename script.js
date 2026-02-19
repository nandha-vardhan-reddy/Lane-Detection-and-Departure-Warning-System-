function processFile() {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
        alert("Please upload a file");
        return;
    }

    // Show divider & results section
    document.getElementById("divider").style.display = "block";
    document.getElementById("results").style.display = "block";

    // Preview original file
    const fileURL = URL.createObjectURL(fileInput.files[0]);
    document.getElementById("originalOutput").src = fileURL;

    // Backend call will come in Step 2
}
function showStatus(isWarning) {
    const statusBox = document.getElementById("statusBox");

    if (isWarning) {
        statusBox.innerText = "⚠ Lane Departure Detected";
        statusBox.style.background = "#ffcccc";
        statusBox.style.color = "#a70000";
    } else {
        statusBox.innerText = "✔ Safe Driving";
        statusBox.style.background = "#ccffcc";
        statusBox.style.color = "#006600";
    }
}
