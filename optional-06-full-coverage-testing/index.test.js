import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should add correctly", () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if string passed on numA parameter", () => {
  // Arrange
  const operandA = "5";
  const operandB = 4;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if string passed on numB parameter", () => {
  // Arrange
  const operandA = 10;
  const operandB = "8";

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if numA is negative", () => {
  // Arrange
  const operandA = -1;
  const operandB = 4;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if numB is negative", () => {
  // Arrange
  const operandA = 10;
  const operandB = -8;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});
