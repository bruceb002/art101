function main() {
    document.addEventListener('DOMContentLoaded', function() {
        $("#myButton").click(() => {
            html2canvas($("#download_here")).then(canvas => {
                console.log("Let's see what canvas is: ", JSON.stringify(canvas));
                theCanvas = canvas;
                $("section").appendChild(canvas);
                canvas.toBlob(function (blob) {
                    saveAs(blob, "Dashboard.png");
                });
            })
            .catch(error => {
                console.error("Error occurred during rendering:", error);
              });
        });
    });
}

main();