/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const maxNestedDepth = arr.reduce(
      (max, item) => (Array.isArray(item) ? Math.max(max, this.calculateDepth(item)) : max),
      0,
    );

    return 1 + maxNestedDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
