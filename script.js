const button = document.querySelector("#btn");
const input = document.querySelector("#ip");
const output = document.querySelector("#output");

button.addEventListener("click", function () {
    //console.log('clicked');
    const num = Number(input.value);
    //console.log(num);
    processNumber(num);
});

//updateOutput(3);
function updateOutput(number) {
    output.textContent = `Result: ${number}`;
}

//const num = 2;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function processNumber(num) {
    return delay(2000)
        .then(() => {
            updateOutput(num);
            return num;
        })
        .then((num) =>
            delay(2000).then(() => {
                updateOutput(num);
                return num;
            })
        )
        .then((num) =>
            delay(1000).then(() => {
                num *= 2;
                updateOutput(num);
                return num;
            })
        )
        .then((num) =>
            delay(1000).then(() => {
                num -= 3;
                updateOutput(num);
                return num;
            })
        )
        .then((num) =>
            delay(1000).then(() => {
                num /= 2;
                updateOutput(num);
                return num;
            })
        )
        .then((num) =>
            delay(1000).then(() => {
                console.log(num)
                num += 10;
                updateOutput(num);
                return num;
            })
        )
        .then((num) => {
            output.textContent = `Final Result: ${num}`;
        })
        .catch(() => {
            output.textContent = `Error`;
        });
}
