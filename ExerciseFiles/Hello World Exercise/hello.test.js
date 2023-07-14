var utils  = require('course-utilities');
var hello = utils.load('ExerciseFiles/Hello World Exercise/hello.js', 'hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello World!");
});