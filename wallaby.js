module.exports = function(wallaby) {
  return {
    files: [
      "src/**/**.ts",
      "src/generatedQueries/**/*.js",
      { pattern: "src/generatedQueries/mutations/*.qql"},
      "src/generatedQueries/queries/**.qql",
      "src/generatedQueries/queries/*.qraphql",
      {pattern: "src/generatedQueries/**/*.qraphql" },
      'src/generatedQueries/mutations/itemAdd.gql',
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
