function isPalindrome(str) {
const reversed = str.split("").reverse().join("");
    return reversed === str;
}

