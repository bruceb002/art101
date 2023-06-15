function main() {
    $("#myButton").click(() => {
        console.log("This is the section: " + JSON.stringify(document.getElementById("download_here")))
        html2canvas(document.getElementById("download_here")).then(canvas => {
            theCanvas = canvas;
            canvas.toBlob(function (blob) {
                saveAs(blob, "Dashboard.png");
            });
        })
        .catch(error => {
            console.error("Error occurred during rendering:", error);
            });
    });
}

main();