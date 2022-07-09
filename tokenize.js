const {
  isLetter,
  isNumber,
  isWhiteSpace,
  isParenthesis,
  isQuote,
  isOperator,
} = require('./helpers/identifyTokens');

const {
  throwParsingError,
} = require('./helpers/parserErrors');

const tokenize = (string) => {
  let cursor = 0;
  let tokens = [];

  while (cursor < string.length) {
    const character = string[cursor];

    if (isWhiteSpace(character)) {
      cursor++;
      continue;
    }

    if (isLetter(character)) {
      const word = string.substring(cursor, cursor + 1);
      tokens.push(word);
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      const number = string.substring(cursor, cursor + 1);
      tokens.push(number);
      cursor++;
      continue;
    }

    if (isParenthesis(character)) {
      const parenthesis = string.substring(cursor, cursor + 1);
      tokens.push(parenthesis);
      cursor++;
      continue;
    }

    if (isQuote(character)) {
      const quote = string.substring(cursor, cursor + 1);
      tokens.push(quote);
      cursor++;
      continue;
    }

    if (isOperator(character)) {
      const operator = string.substring(cursor, cursor + 1);
      tokens.push(operator);
      cursor++;
      continue;
    }

    else throwParsingError(character);

    cursor++;
  }
  return tokens;
}

module.exports = { tokenize };