function main() {
    document.addEventListener('DOMContentLoaded', function() {
        $("#myButton").click(() => {
            console.log("Let's see what the section is: ", JSON.stringify($("#download_here")));
            html2canvas($("#download_here")).then(canvas => {
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