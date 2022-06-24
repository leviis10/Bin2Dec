const binaryInput = document.querySelector(".binary-input");
const btnConvert = document.querySelector(".btn-convert");
const resultEl = document.querySelector(".result");

const isBinary = function () {
    if (binaryInput.value.length > 8) {
        return false;
    }

    for (const binaryValue of binaryInput.value) {
        const binary = Number.parseInt(binaryValue);
        if (Number.isNaN(binary) || binary > 1) {
            return false;
        }
    }
    return true;
};

btnConvert.addEventListener("click", () => {
    if (!isBinary()) {
        resultEl.textContent = "Invalid Input";
        return;
    }

    let result = 0;
    for (let i = 0; i < binaryInput.value.length; i++) {
        const binary = Number.parseInt(binaryInput.value[i]);
        result += binary * 2 ** (7 - i);
    }
    resultEl.textContent = `the result is: ${result}`;
});
