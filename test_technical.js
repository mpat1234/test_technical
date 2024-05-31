function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}


function testLongestCommonPrefix() {
    const testCases = [
        { strs: ["flower", "flow", "flight"], expected: "fl" },
        { strs: ["dog", "racecar", "car"], expected: "" },
        { strs: ["interstellar", "internet", "internal"], expected: "inte" },
        { strs: ["apple", "ape", "april"], expected: "ap" },
        { strs: [], expected: "" },
        { strs: ["single"], expected: "single" }
    ];

    testCases.forEach(test => {
        const result = longestCommonPrefix(test.strs);
        console.log(`Testing with strs: [${test.strs.join(", ")}]`);
        console.log(`Expected: '${test.expected}', Got: '${result}'`);
        if (result === test.expected) {
            console.log("Result: Pass\n");
        } else {
            console.log("Result: Fail\n");
        }
    });
}


testLongestCommonPrefix();
