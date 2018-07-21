
/*jshint esversion: 6 */

/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {

  // 2 arrays of decimals and their corresponding romans

  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // The roman output, starts with an empty string

  let roman = '';

  decimals.forEach(function(decimal) {
    while (decimal <= num) {
      roman += romans[decimals.indexOf(decimal)];
      num -= decimal;
    }
  });

  return roman;

}

console.log(convertToRoman(36));
