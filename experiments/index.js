import html2canvas from 'html2canvas';

function main() {
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