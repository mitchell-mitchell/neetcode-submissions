class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 1) return 1

        let substr = new Set()
        let r = 0
        let max = 0

        while (r < s.length) {
            console.log(substr)
            if (substr.has(s[r])) {
                for (const letter of substr) {
                    console.log(letter, s[r])
                    if (letter === s[r]) {
                        substr.delete(letter)
                        break
                    } 
                    substr.delete(letter)
                }
            } 
            substr.add(s[r])
            max = Math.max(max, substr.size)
            r++

        }
        return Math.max(max, substr.size)

    }
}
