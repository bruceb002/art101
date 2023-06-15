function main() {
    document.addEventListener('DOMContentLoaded', function() {
        $("#myButton").click(() => {
            html2canvas($("#download_here"), {
                onrendered: function(canvas) {
                    console.log("It also made it here!");
                    console.log("Let's see what canvas is: ", JSON.stringify(canvas));
                    theCanvas = canvas;
                    $("section").appendChild(canvas);
                    canvas.toBlob(function (blob) {
                        saveAs(blob, "Dashboard.png");
                    });
                }
            });
        });
    });
}

main();