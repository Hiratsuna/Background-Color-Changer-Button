var index = 0;

function changeColors() {
    var colors = ["red", "black", "pink", "orange", "green", "yellow", "purple"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}