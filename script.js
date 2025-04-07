// complete the given function

function palindrome(str){
	let lower = str.toLowerCase()
	let rev = lower.split(" ").reverse().join(" ")
	if(rev === lower){
		return true
	}else{
		return false
	}
}
module.exports = palindrome
