// complete the given function

function palindrome(str){
	let lower = str.toLowerCase();

  // Step 2: Remove non-alphanumeric characters using regex
  let cleaned = lower.replace(/[^a-z0-9]/g, '');

  // Step 3: Reverse the cleaned string
  let reversed = cleaned.split('').reverse().join('');

  // Step 4: Compare
  return cleaned === reversed;
	
}
module.exports = palindrome
