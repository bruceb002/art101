import html2canvas from '../node_modules/html2canvas/dist/html2canvas.js';

function main() {
    console.log("Wth, is it even here?");
    $("#myButton").click(() => {
        console.log("It made it here!");
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
}

main();