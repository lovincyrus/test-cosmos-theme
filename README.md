# test-cosmos-theme

## WIP
theme source: npm link to [this branch](https://github.com/cosmos/vuepress-theme-cosmos/pull/61)

## Run dev server
`npm run serve`

## Steps to create your own docs using `vuepress-theme-cosmos`
- On https://github.com/lovincyrus/test-cosmos-theme, click on [`Use this template`](https://github.com/lovincyrus/test-cosmos-theme/generate)
- Name the repo `test-docs`
- cd `test-docs`
- Clone your `test-docs` repo
- Run `npm i vuepress-theme-cosmos` for the latest version
- Install and start the server: `npm i; npm run serve`
- And you will have a doc site that looks like https://default-docs.netlify.app

## Contribute to the `vuepress-theme-cosmos`
Once you have a project with the installed theme, you may follow these steps:
```
git clone https://github.com/cosmos/vuepress-theme-cosmos.git
cd vuepress-theme-cosmos
pwd | tr -d '\n' | pbcopy && echo 'pwd copied to clipboard'
```
Go to your project's directory, run `npm link [PWD]`