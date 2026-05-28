class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        const complement = (str) => {
            if (str === ']') {
                return '['
            } else if (str === ')') {
                return '('
            } else if (str === '}') {
                return '{'
            }
            return ''
        }

        for (let char of s) {
            if (complement(char) === stack[stack.length - 1]) {
                stack.pop()
            } else {
                stack.push(char)
            }
        }

        return !(stack.length > 0)
    }
}
