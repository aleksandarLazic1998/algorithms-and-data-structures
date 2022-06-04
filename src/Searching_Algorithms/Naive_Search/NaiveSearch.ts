const naiveSearch = (sentence: string, subString: string) => {
	let numberOfRepetitions = 0;

	for (let i = 0; i < sentence.length; i++) {
		for (var j = 0; j < subString.length; j++) {
			if (subString[j] !== sentence[i + j]) break;
			if (j === subString.length - 1) numberOfRepetitions += 1;
		}
	}

	return numberOfRepetitions;
};

console.log(naiveSearch("lorie loled", "lol"));
