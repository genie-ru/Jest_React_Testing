/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // ルートパスを明示
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.json" }], // tsconfig.json を指定
  },
};
