let changingWords = document.getElementById("changingWords");
let wordArrays = ['Elegance', 'Minimalism', 'Comfort', 'Style'];
var wordCount = 0;

// Changing Words of headline
setInterval(function () {
    changingWords.innerText = wordArrays[wordCount];
    wordCount += 1;
    if (wordCount == 4) {
        wordCount = 0;
    }
}, 2000);



