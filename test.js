function findLongestWordWithMostVowels(sentence) {
    let longestWord = '';
    let maxWordLength = 0;
    let maxVowelCount = 0;
  
    const words = sentence.split(' ');
  
    for (const word of words) {
      // Remove non-alphabetic characters and convert to lowercase
      const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
      // Calculate word length and vowel count
      const length = cleanWord.length;
      const vowelCount = (cleanWord.match(/[aeiou]/gi) || []).length;
  
      // Update longest word based on criteria
      if (length > maxWordLength || (length === maxWordLength && vowelCount > maxVowelCount)) {
        longestWord = cleanWord;
        maxWordLength = length;
        maxVowelCount = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  // Example usage
  const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
  const longestWord = findLongestWordWithMostVowels(sentence);
  console.log('Longest word with most vowels:', longestWord); 