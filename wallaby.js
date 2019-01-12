module.exports = function(wallaby) {
  return {
    files: [
      "src/**/*.ts",
      "src/**/*.json",
      "src/schema.graphql",
      { pattern: "src/**/*.spec.ts", ignore: true }
      ],

    tests: ["src/**/*.spec.ts", "acceptanceTests/**/*.spec.ts"],

    compilers: {
    },

    env: {
      type: "node"
    },

    testFramework: "jest"
  };
};
