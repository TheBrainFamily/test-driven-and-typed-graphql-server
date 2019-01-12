module.exports = function(wallaby) {
  return {
    files: [
      "src/items/itemsRepository.ts",
      // "src/**/*.json",
      // "src/schema.graphql",
      // { pattern: "src/**/*.spec.ts", ignore: true }
      ],

    tests: ["src/items/itemsRepository.spec.ts"],
    // tests: ["src/achievements/*.spec.ts"],

    env: {
      type: "node"
    },

    debug: true,
    testFramework: "jest"
  };
};
