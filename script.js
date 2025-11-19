document.addEventListener('DOMContentLoaded', () => {
    const dnaInput = document.getElementById('dna-input');
    const pairBtn = document.getElementById('pair-btn');
    const resultEl = document.getElementById('result');

    function pairElement(str) {
        const pairs = {
            A: 'T',
            T: 'A',
            C: 'G',
            G: 'C'
        };
        return str.split('').map(char => [char, pairs[char]]);
    }

    pairBtn.addEventListener('click', () => {
        const dnaString = dnaInput.value.toUpperCase();
        if (dnaString) {
            const pairedResult = pairElement(dnaString);
            resultEl.textContent = JSON.stringify(pairedResult, null, 2);
        } else {
            resultEl.textContent = 'Please enter a DNA sequence.';
        }
    });
});
