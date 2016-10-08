ISBN 10 Checker
ISBN’s (International Standard Book Numbers) are identifiers for books. Your task is to write a function that verifies a given string is a valid ISBN.

Note: There are ten digits in an ISBN. To verify if they are valid, you must multiply the first digit by 10, the second digit by 9, the third digit by 8, …, the ninth digit by 2, and the tenth digit by 1. Afterwards, divide the sum by 11; if there is no remainder, then it is a valid ISBN. Otherwise, it is invalid.

Note 2: The last digit can also be X, which represents 10.

You've got Helpers! (click to view code)
add(x, y)
Examples
Input	Output
string:
"0-3870-0178-6"	true
string:
"1442499567"	true
string:
"0-440-18293-X"	true
string:
"99-440-18293-0"	false
