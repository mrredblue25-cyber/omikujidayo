const button = document.getElementById("drawButton");

button.addEventListener("click", () => {
    let number = Math.floor(Math.random() * 100);

    if (number < 50) {
        alert("大凶");
    } else if (number < 90) {
        alert("凶");
    } else if (number < 99) {
        alert("吉");
    } else {
        alert("大吉");
    }
});