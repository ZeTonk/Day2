// search method
// Sample text
const text = "Looking for the best colour options or color schemes.";

// Regular expression to find 'color' or 'colour'
const regexp = /colou?r/gi;

// Using the search method
const index = text.search(regexp);

// Output the result
console.log(index); // This will output the index of the first match, or
// -1 if no match is found

// global match
const global = "This is a test. Test the global test function.";
const regexGlobal = /test/g; // 'g' flag for global search

const matches = global.match(regexGlobal);
console.log(matches); // Output: ['test', 'test']

//case sensitive
const text1 = "Test your code and then test again.";
const regexCaseSensitive = /Test/;

const index1 = text1.search(regexCaseSensitive);
console.log(index1); // Output: 0 (index of the first match)

//multiline charcter
const ml = "First line\nSecond line\nThird line";
const regexMultiline = /^Second line$/m;

const isMatch = regexMultiline.test(ml);
console.log(isMatch); // Output: true

//replace() and replaceAll()
const newtext = "The cat sat on the mat.";

// Replace first occurrence

const replaced = newtext.replace(/\bcat\b/, "dog");
console.log(replaced); // Output: "The dog sat on the mat."

// Replace all occurrences
const allReplaced = text.replaceAll(/\bthe\b/gi, "a");
console.log(allReplaced); // Output: "a cat sat on a mat."

//\b - Word boundary
const word = "cat cater concatenate";
const regexWordBoundary = /\bcat\b/g; // Matches "cat" as a whole word
// only

const matchesBoundary = word.match(regexWordBoundary);
console.log(matchesBoundary); // Output: ['cat']