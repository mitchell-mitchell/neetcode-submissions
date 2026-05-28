class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let L = 0
        const tCount = new Map()
        const windowCount = new Map()
        let haveLength = 0
        
        for (let c of t) {
            tCount.set(c, (tCount.get(c) || 0) + 1)
        }

        const tLength = tCount.size

        for (let w of t) {
            windowCount.set(w, 0)
        }

        let result = []
        
        for (let R = 0; R < s.length; R++) {
            let windowValue = windowCount.get(s[R])

            if (typeof windowValue === 'undefined') {
                continue
            }

            const tValue = tCount.get(s[R])

            // if (windowValue < tValue) {
                windowCount.set(s[R], (windowValue || 0) + 1)
                windowValue++
            // }

            if (windowValue === tValue) {
                haveLength++
            }
            while (haveLength === tLength) {
                if (windowCount.has(s[L])) {
                    windowCount.set(s[L], windowCount.get(s[L]) - 1)
                    if (windowCount.get(s[L]) < tCount.get(s[L])) {
                        haveLength--
                    }
                }
                
                if (result.length === 0 || result[1] - result[0] + 1 > R - L + 1) {
                    result = [L, R]
                }
                L++
            }
        }

        if (result.length > 0) {
            result = s.slice(result[0], result[1] + 1)
        } else {
            result = ''
        }

        return result
    }
}
