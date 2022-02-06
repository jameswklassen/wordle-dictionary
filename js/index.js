const elements = {
	word: document.getElementById('word'),
	result: document.getElementById('result'),
	resultText: document.getElementById('result-text'),
	input: document.getElementById('phantom-input'),
}

const classes = {
	valid: 'valid',
	invalid: 'invalid',
}

let word  = '';

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) &&
	 (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
		 elements.input.style.pointerEvents = 'none';
}

document.addEventListener('keydown', (e) => {
	if (e.metaKey) { return }
	if (e.key === 'Backspace') {
		word = word.slice(0, -1);
	}

	if (e.code >= 'KeyA' && e.code <= 'KeyZ') {
		if (word.length < 5) {
			word += e.key;
			}
	}

	checkWord();
});

const isWordValid = (word) => (ALL_WORDS.includes(word));

const checkWord = () => {
	word = word.toLocaleLowerCase();

	for (let i = 0; i < 5; i++) {
		document.getElementById(i).textContent = word[i];
	}

	if (word.length < 5) {
		elements.result.removeAttribute("visible");
		elements.resultText.textContent = '';
		
		elements.word.classList.remove(classes.invalid) 
		elements.word.classList.remove(classes.valid) 
		elements.result.classList.remove(classes.invalid) 
		elements.result.classList.remove(classes.valid) 
	}
	
	if (word.length === 5) {
		const valid = isWordValid(word);
		elements.result.setAttribute("visible", "");

		if (valid) {
			elements.resultText.textContent = 'is valid';
			elements.result.classList.add(classes.valid) 
			elements.result.classList.remove(classes.invalid)
			elements.word.classList.add(classes.valid) 
			elements.word.classList.remove(classes.invalid) 
		} else {
			elements.resultText.textContent = 'is not valid';
			elements.result.classList.add(classes.invalid); 
			elements.result.classList.remove(classes.valid); 
			elements.word.classList.add(classes.invalid) 
			elements.word.classList.remove(classes.valid); 
		}
	}
};
