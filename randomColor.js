function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const fonts = [
    'IBM Plex Serif',
    'Fira Sans',
    'Astloch',
    'Major Mono Display',
    'Playfair Display',
    'Source Serif Pro',
    'Roboto Mono',
    'Libre Franklin',
];

function randomFont(fonts) {
    return fonts[Math.floor(Math.random() * fonts.length)];
}

const size = [
    '1rem',
    '1.25rem',
    '1.5rem',
];

function randomSize(size) {
    return size[Math.floor(Math.random() * size.length)];
}

function getCorrectTextColor(hex) {
    threshold = 128; /* about half of 256. Lower threshold equals more dark text on dark background  */

    hRed = hexToR(hex);
    hGreen = hexToG(hex);
    hBlue = hexToB(hex);

    function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
    function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
    function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
    function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }

    cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
    if (cBrightness > threshold) { return "#000000"; } else { return "#ffffff"; }
}

function setRandomColor() {
    bgColor = getRandomColor();
    $(":root").css("--colorBg", bgColor);
    $(":root").css("--colorTxt", getCorrectTextColor(bgColor));
    $("body").css("font-family", randomFont(fonts));
    $(":root").css("--baseValue", randomSize(size));
}