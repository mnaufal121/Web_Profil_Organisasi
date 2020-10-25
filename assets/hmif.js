let loop = 0;

function ubahwarna() {
    if (loop < 2) {
        if (loop == 0) {
            document.getElementById("sub").style.color = "#ffeb54"
        } else {
            document.getElementById("sub").style.color = "red"
        }
        loop++;
    } else {
        loop -= 2;
        document.getElementById("sub").style.color = "#ff7e1c"
    }
}