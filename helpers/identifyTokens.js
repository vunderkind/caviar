const LETTER = /[a-zA-Z]/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%', '^', '=', '<', '>', '<=', '>=', '!=', '==', '&&', '||', '!', '&', '|', '~', '<<', '>>', '>>>', '++', '--', ','];
const WHITESPACE = /\s+/;

const isLetter = character => LETTER.test(character);

const isNumber = character => NUMBER.test(character);

const isWhiteSpace = character => WHITESPACE.test(character);

const isOpeningParenthesis = character => character === '(';

const isClosingParenthesis = character => character === ')';

const isOperator = character => OPERATORS.includes(character);

const isParenthesis = character => 
    isOpeningParenthesis(character)
    || isClosingParenthesis(character);

const isQuote = character => character === '"';

module.exports = {
    isLetter,
    isNumber,
    isWhiteSpace,
    isParenthesis,
    isQuote,
    isOperator,
}