# TypeScript + Node.js + ES Modules + Jest

このリポジトリは、テストフレームワークのJestでES Modulesが使えるかを確認するための実験コードです。

## 実験の結果

ts-jestはTypeScriptをコンパイルの手順なしにJestテストコードを実行できる開発ツールですが、それを用いてもES Modulesのパッケージをテストできることが判明しました。

## 実験の再現

```shell
pnpm install
pnpm test
```
