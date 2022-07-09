const throwParsingError = (character) => {
    throw new Error(`Your input contains unrecognized character, "${character}". \n Consider reading Caviar's docs to see how to properly write expressions.`);
}

module.exports = {
    throwParsingError,
}