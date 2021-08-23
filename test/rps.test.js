// IMPORT MODULES under test here:
import { didUserWin } from '../rps.js';

const test = QUnit.test;

test('when the user and computer throws are rock then it will be a draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draws';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('when the user throws rock and computer throws paper then it will be a loss for user', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'losses';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when the user throws rock and computer throws scissor then it will be a win for user', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'wins';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissor');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});