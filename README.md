# test-cosmos-theme

## Run dev server
`npm run serve`

## Contribute to the `vuepress-theme-cosmos`
Once you have a project with the installed theme, you may follow these steps:
```
git clone https://github.com/cosmos/vuepress-theme-cosmos.git
cd vuepress-theme-cosmos
pwd | tr -d '\n' | pbcopy && echo 'pwd copied to clipboard'
```
Go to your project's directory, run `npm link [PWD]`

## Troubleshooting
- npm unlink and link again if it doesn't load your local `vuepress-theme-cosmos`
- [Vuepress hot reload bug](https://github.com/vuejs/vuepress/issues/2392) — `npm i watchpack@1.6.1 --save-dev` if `"vuepress": "1.5.0"`