module.exports = {
  moduleNameMapper: {
    "^@web3modal/wagmi/react$": "<relative-path-to-wagmi-react-module>",
    // Add other module mappings as needed
  },
  setupFiles: ["<rootDir>/jest.setup.js"], // Adjust path as per your project structure
  // Other Jest configurations
};
