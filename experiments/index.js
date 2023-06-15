import html2canvas from 'html2canvas';

function main() {
    $("#myButton").click(() => {
        html2canvas($("#download_here"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);
                canvas.toBlob(function (blob) {
                    saveAs(blob, "Dashboard.png");
                });
            }
        });
    });
}

main();