# OpenSEC vote
 
前に作成されたリストをもとに、アドレスを生成し、addVoterしてください。
どのアドレスが投票を行ったかはブロックチェーンエクスプローラーで確認できる。
ブロックチェーン上では、アドレスと投票先以外が不可視なので、owner以外は投票と個人情報を紐づけられない。
また、監視されている状況での投票を無効にできるように、reVoteが可能になっています。
 
# DEMO
 
comming soon...
 
# Features
This is transparency ensured voting system.

# Requirement
global:
+-- create-next-app@12.3.0
+-- create-react-app@5.0.1
+-- ethernal@1.0.0
+-- ganache@7.4.3
+-- truffle@5.5.30
`-- yarn@1.22.19
client:
    bootstrap
 
# Installation
 
Requirementで列挙したライブラリなどのインストール方法を説明する
 
```bash
npm install -g <global_package>
cd client/
npm install <client_package>
```
 
# Usage
 
DEMOの実行方法など、"hoge"の基本的な使い方を説明する
 
```bash
cd truffle
ganache
truffle console
cd ../client
npm start
```
 
# Note
 
npm audit fixを行えという脆弱性の報告とかあるらしいが、正確でないため無視して良いらしい。
 
# Author
* yutadd
 
# License
ライセンスを明示する
 
"hoge" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).