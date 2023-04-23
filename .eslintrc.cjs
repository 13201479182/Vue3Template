/**
 * js 代码规则制定(https://www.eslint.com.cn/docs/rules/)
 */
const jsRules = {
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 1,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
};

module.exports = {   
    root: true,

    overrides: [
        {
            files: ["*.js", "*.cjs"],
            rules: jsRules,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            }
        }
    ]
};