const {
  isLetter,
  isNumber,
  isWhiteSpace,
  isParenthesis,
  isOpeningParenthesis,
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
      let word = string.substring(cursor, cursor + 1);
      while (!isWhiteSpace(string[cursor + 1]) && cursor + 1 < string.length)  {
        word += string[cursor + 1];
        cursor++;
      }
      tokens.push({
        type: 'word',
        value: word,
      });
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let  number = string.substring(cursor, cursor + 1);
      while (!isWhiteSpace(string[cursor + 1]) && cursor + 1 < string.length)  {
        number += string[cursor + 1];
        cursor++;
      }
      tokens.push({
        type: 'number',
        value: +number,
      });
      cursor++;
      continue;
    }

    if (isParenthesis(character)) {
      const parenthesis = string.substring(cursor, cursor + 1);
      tokens.push({
        type: 'parenthesis',
        value: parenthesis,
        opening: isOpeningParenthesis(parenthesis),
      });
      cursor++;
      continue;
    }

    if (isQuote(character)) {
      const quote = string.substring(cursor, cursor + 1);
      tokens.push({
        type: 'quote',
        value: quote,
      });
      cursor++;
      continue;
    }

    if (isOperator(character)) {
      const operator = string.substring(cursor, cursor + 1);
      tokens.push({
        type: 'operator',
      });
      cursor++;
      continue;
    }

    else throwParsingError(character);

    cursor++;
  }
  console.log(tokens)
  return tokens;
}

tokenize('hello world?')

module.exports = { tokenize };