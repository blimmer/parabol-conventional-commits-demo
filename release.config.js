module.exports = {
  branches: ['production'],
  plugins: [
    ["@semantic-release/commit-analyzer", {
      preset: "conventionalcommits"
    }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
  ]
}
