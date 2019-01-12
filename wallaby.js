module.exports = function(wallaby) {
  return {
    files: [
      "src/**/**.ts",
      "src/**/*.json",
      "src/schema.graphql",
      { pattern: "src/**/*.spec.ts", ignore: true }
      ],

    tests: ["src/**/*.spec.ts"],

    env: {
      type: "node"
    },

    debug: true,
    testFramework: "jest"
  };
};
