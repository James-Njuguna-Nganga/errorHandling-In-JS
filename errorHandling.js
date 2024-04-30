// Custom Error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.stack = (new Error()).stack;
  }
}

// Function that throws an error
function riskyFunction() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error("Random number is too low");
  }
  return "Success! Random number is acceptable";
}

// Function that catches errors using try...catch
function handleError() {
  try {
    const result = riskyFunction();
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// Function that throws a custom error
function throwCustomError() {
  throw new CustomError("Custom error occurred");
}

// Function that handles custom errors
function handleCustomError() {
  try {
    throwCustomError();
  } catch (error) {
    console.error("Custom error caught:", error.name, "-", error.message);
  }
}

// Function that demonstrates nested try...catch blocks
function nestedErrorHandling() {
  try {
    try {
      throw new Error("Inner error");
    } catch (innerError) {
      console.error("Inner error caught:", innerError.message);
      throw new Error("Outer error");
    }
  } catch (outerError) {
    console.error("Outer error caught:", outerError.message);
  }
}

// Test the error handling functions
console.log("Handling error using try...catch:");
handleError();

console.log("\nHandling custom error:");
handleCustomError();

console.log("\nNested error handling:");
nestedErrorHandling();
