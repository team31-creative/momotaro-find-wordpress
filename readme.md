# 桃太郎を探せ！
## 開発方法
1. clone後このディレクトリまでアクセスしてください
`cd wp-content/themes/team31-theme/momo-frontend`
2. 以下のディレクトリにアクセス後、このコマンドを実行してください。
`npm install && npm run dev`

localhost:5173にアクセス後、開発できます。ソースコードはmomo-frontendのsrc直下にあります。


## WordPressの起動方法
本開発は、Dockerを使用していますので、[Docker](https://www.docker.com/)のインストールをお願いいたします。
```
docker compose up -d --build
```

## ブランチの命名方法
以下のように命名をお願いいたします。
```
GitHub名/issue番号
```

例:)
```
mju-vigora/issue-1200
```
