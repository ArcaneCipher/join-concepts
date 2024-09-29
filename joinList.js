/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
function joinList(array) {
  if (array.length === 0) return "";

  let joinString = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined && array[i] !== null && array[i] !== "") {
      let value = String(array[i]);
      if (joinString === "") {
        joinString += value;
      } else {
        joinString += ", " + value;
      }
    }
  }

  return joinString;
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

// Empty array test
const emptyList = [];
const blankConcepts = joinList(emptyList);
console.log(`Today I learned about ${blankConcepts}.`);

// Test with non-string values
const mixedList = [42, true, null, "hello", "", undefined, "world"];
const mixedConcepts = joinList(mixedList);
console.log(`Today I learned about ${mixedConcepts}.`);