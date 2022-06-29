const binaryInput = document.querySelector(
    ".binary-input"
)! as HTMLInputElement;
const btnConvert = document.querySelector(".btn-convert")!;
const resultEl = document.querySelector(".result")!;

function isBinary() {
    if (binaryInput.value.length > 8) {
        return false;
    }

    for (const binaryValue of binaryInput.value) {
        const binary = parseFloat(binaryValue);
        if (Number.isNaN(binary) || binary > 1) {
            return false;
        }
    }
    return true;
}

btnConvert.addEventListener("click", () => {
    if (!isBinary()) {
        resultEl.textContent = "Invalid Input";
        return;
    }

    let result = 0;
    for (let i = 0; i < binaryInput.value.length; i++) {
        const binary = parseFloat(binaryInput.value[i]);
        result += binary * 2 ** (binaryInput.value.length - i - 1);
    }
    resultEl.textContent = `the result is: ${result}`;
});
