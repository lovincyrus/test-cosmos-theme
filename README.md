# test-cosmos-theme

## Run locally
```
$ git clone https://github.com/lovincyrus/test-cosmos-theme.git
$ cd test-cosmos-theme
$ cd docs
$ npm i; npm run serve
```

### How to use this docs theme
Go to https://default-docs.netlify.app

### Contribute to the `vuepress-theme-cosmos`
Once you have a project with the installed theme, you may follow these steps:
```
git clone https://github.com/cosmos/vuepress-theme-cosmos.git
cd vuepress-theme-cosmos
pwd | tr -d '\n' | pbcopy && echo 'pwd copied to clipboard'
```
Go to your project's directory, run `npm link [PWD]`

### Troubleshooting
- npm unlink and link again if it doesn't load your local `vuepress-theme-cosmos`
- [Vuepress hot reload bug](https://github.com/vuejs/vuepress/issues/2392) — `npm i --save-dev watchpack` if `"vuepress": "1.5.0"`