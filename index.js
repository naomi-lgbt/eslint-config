module.exports = {
    "env": {
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:jsdoc/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "jsdoc", "import", "no-only-tests"],
    "rules": {
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": ["error", "always"],
        "prefer-const": "warn",
        "eqeqeq": ["error", "always"],
        "curly": ["error"],
        "require-atomic-updates": ["warn"],
        "no-var": ["error"],
        "camelcase": ["error"],
        "init-declarations": ["error", "always"],
        "require-await": ["warn"],
        "no-param-reassign": ["error"],
        "jsdoc/require-jsdoc": [
            "warn",
            {
                "require": {
                    "ArrowFunctionExpression": true,
                    "ClassDeclaration": true,
                    "ClassExpression": true,
                    "FunctionDeclaration": true,
                    "FunctionExpression": true,
                    "MethodDefinition": true
                },
                "publicOnly": true
            }
        ],
        "jsdoc/require-description-complete-sentence": "warn",
        "import/first": "warn",
        "import/exports-last": "warn",
        "import/newline-after-import": "warn",
        "import/order": [
            "warn",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                    "unknown"
                ],
                "newlines-between": "always",
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ],
        "no-only-tests/no-only-tests": [
            "warn",
            {
                "block": ["test", "suite", "assert"],
                "focus": ["only"],
            }
        ],
        "no-console": "warn"
    }
}
