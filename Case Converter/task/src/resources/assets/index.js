let textField = document.getElementById("input-area");
// console.log(textField.value); // test fetch content
// textField.value = "CHANGED TEXT"; // test change content
// document.addEventListener("click", function () { // test event listener
//     console.log("You Clicked Something!");
// });
let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");

upperCaseButton.addEventListener("click", function () {
    console.log("You clicked the 'Upper Case' button!");
    textField.value = textField.value.toUpperCase();
});
lowerCaseButton.addEventListener("click", function () {
    console.log("You clicked the 'Lower Case' button!");
    textField.value = textField.value.toLowerCase();
});
properCaseButton.addEventListener("click", function () {
    console.log("You clicked the 'Proper Case' button!");
    textField.value = toProperCase(textField.value);
});
sentenceCaseButton.addEventListener("click", function () {
    console.log("You clicked the 'Sentence Case' button!");
    textField.value = toSentenceCase(textField.value);
});
saveTextFileButton.addEventListener("click", function () {
    console.log("You clicked the 'Save Text File' button!");
    // Start file download.
    download("text.txt",textField.value);
});

function toProperCase(text) {
    // description: get all words from the text into an array,
    // convert the first letter to uppercase, the rest to lowercase,
    // concatenate the array into a text.
    const regexp = /\s+/;
    let words = text.split(regexp);
    console.log(words);
    words.forEach((word, index) => {
        console.log(word + ', ' + index);
        let initial = word[0].toUpperCase();
        let spare = word.substring(1).toLowerCase();
        words[index] = initial + spare;
    })
    return words.join(" ");
}
function toSentenceCase(text) {
    // description: get all sentences from the text into an array,
    // convert the first letter to uppercase, the rest to lowercase,
    // concatenate the array into a text.
    const regexp = /(?<=[.?!])\s+/;
    let sentences = text.split(regexp);
    console.log(sentences);
    sentences.forEach((sentence, index) => {
        console.log(sentence + ', ' + index);
        let initial = sentence[0];
        initial = initial.toUpperCase();
        let spare = sentence.substring(1).toLowerCase();
        sentences[index] = initial + spare;
    });
    return sentences.join(" ");
}
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}