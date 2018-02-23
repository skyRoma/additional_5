module.exports = function check(str, bracketsConfig) {
    var stack = [];
    var lastInStack;
    var mas = str.split('');
    var solution = true;
    if (mas.length % 2 != 0) return false;
    for (var k = 0; k < mas.length; k++) {
        for (var i = 0; i < bracketsConfig.length; i++) {
            if (mas[k] == bracketsConfig[i][1] && stack[stack.length - 1] == bracketsConfig[i][0]) {
                stack.pop();
            } else if (mas[k] == bracketsConfig[i][0]) {
                stack.push(mas[k]);
            }
        }
    }
    if (stack.length != 0) solution = false;
    return solution;
}