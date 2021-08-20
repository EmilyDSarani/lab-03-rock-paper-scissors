// IMPORT MODULES under test here:
import { getComputerThrow } from './rps.js';

const test = QUnit.test;

test('test the number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getComputerThrow('true');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});