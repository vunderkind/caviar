const assert = require('assert');

const { tokenize }  = require('../tokenize');

describe('Lexical Analysis', () => {
    it('Should parse eligible inputs into individual tokens', () => {
        const string = 'hello world';
        const tokens = tokenize(string);
    
        assert.deepEqual(tokens, ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']);
    }
    );

    it('Should throw error if unparseable character is part of input string', () => {
        const string = 'hello world?';
    
        assert.throws(() => tokenize(string));
    }
    );

    it('Should return empty array of tokens if empty input is passed', () => {
        const string = '';
        const tokens = tokenize(string);
    
        assert.deepEqual(tokens, []);
    })

    it('Should be able to tokenize our parentheses', () => {
        const string = '<>';
        const tokens = tokenize(string);
    
        assert.deepEqual(tokens, ['<', '>']);
    })
})