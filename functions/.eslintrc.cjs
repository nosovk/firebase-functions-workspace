module.exports = {
  root: true,
  extends: ["custom"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
};
