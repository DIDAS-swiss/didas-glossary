/**
 * @file remove-xref.js
 * @description This script removes a cross-reference entry from an external specification file using the 
 * `spec-up-t` library. It takes two arguments: the term to be removed and the external 
 *  specification file where the removal should take place.
 * 
 *  This script is an intermediary between the `spec-up-t` library and the command line, to avoid issues
 *  with escaping quotes in the command line.
 *
 * @usage
 *   node remove-xref.js <term> <externalSpec>
 *   - <term>: The term to remove from the external specification.
 *   - <externalSpec>: The path to the external specification file where the cross-reference should be removed.
 *
 * @example
 *   node remove-xref.js "Aal" "test-1"
 *
 * @requires spec-up-t/src/get-xrefs-data.js
 * @function removeXref
 */



// // Version A: Get the term and external specification from the command line arguments
// const args = process.argv.slice(2);
// const term = args[0];
// const externalSpec = args[1];
// require('spec-up-t/src/get-xrefs-data.js').removeXref(term, externalSpec);


// Version B: Get the term and external specification via step by step questions (interactive)
const readline = require('readline');
const removeXref = require('spec-up-t/src/get-xrefs-data.js').removeXref;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the term: ', (term) => {
    rl.question('Enter the external specification: ', (externalSpec) => {
        removeXref(term, externalSpec);
        rl.close();
    });
});