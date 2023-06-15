function main() {
    $("#myButton").click(() => {
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