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
    'no-debugger': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 1,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-implicit-coercion': 1,
    'no-lone-blocks': 1,
    'no-magic-numbers': 1,
    'no-new-wrappers': 1,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-script-url': 2,
    'no-throw-literal': 2,
    'no-useless-call': 2,
    'no-useless-escape': 1,
    'prefer-named-capture-group': 2,
    'prefer-promise-reject-errors': 2,
    'require-await': 2,
    'require-unicode-regexp': 2,
    'no-warning-comments': [2, {
        'terms': ["todo", "fix"], 
        'location': "start" 
    }],
    'yoda': 1,
    'no-shadow': 1,
    'no-unused-vars': 1,
    'no-use-before-define': 2,

    'camelcase': 2,
    'consistent-this': [2, "self"],
    'line-comment-position': 1,
    'max-depth': [2, 4],
    'max-lines': [2, 300],
    'max-lines-per-function': [2, 30],
    'max-statements-per-line': [2, {
        max: 1
    }],
    'new-cap': 1,
    'no-mixed-operators': 1,
    'constructor-super': 2,
    'prefer-rest-params': 1,
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