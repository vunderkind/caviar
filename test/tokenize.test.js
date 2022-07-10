const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const { tokenize }  = require('../tokenize');

describe('Lexical Analysis', () => {
    it('Should parse eligible inputs into individual tokens', () => {
        const string = 'hello world';
        const tokens = tokenize(string);
    
        assert.deepEqual(tokens, [{
            type: 'word',
            value: 'hello'
        }, {
            type: 'word',
            value: 'world'
        }]);
    }
    );

    it('Should throw error if unparseable character is part of input string', () => {
        const string = '?';
    
        expect(() => tokenize(string)).to.throw(Error, 'Your input contains unrecognized character, "?". \n Consider reading Caviar\'s docs to see how to properly write expressions.');
    });

    it('Should return empty array of tokens if empty input is passed', () => {
        const string = '';
        const tokens = tokenize(string);
    
        assert.deepEqual(tokens, []);
    })

    it('Should be able to tokenize our parentheses', () => {
        const string = '<>';
        const tokens = tokenize(string);
    
        assert.deepEqual(tokens, [{
            type: 'parenthesis',
            value: '<',
            opening: true
        }, {
            type: 'parenthesis',
            value: '>',
            opening: false
        }]);
    })
})