# docker 環境構築

### backend

```
docker-compose run backend bash
npm install -g @nestjs/cli
npm install

※（コンテナ内でバージョン確認）
node -v
  → v18.17.1
npm -v
  → 9.6.7
nest -v
  → 10.3.0

コンテナぬける
exit
```

### frontend

```
docker-compose run frontend bash
npm install

※（コンテナ内でバージョン確認）
node -v
  → v18.17.1
npm -v
  → 9.6.7

コンテナぬける
exit
```

### コンテナ起動

```
docker-compose up
```

- backend アクセス
  loclahost:3000
- frontend アクセス
  loclahost:4000

# モジュールの追加や CLI を使用する場合

```
コンテナ内でnestコマンドでコントローラなど作成
docker-compose exec backend bash

コンテナ内で各種インストール
docker-compose exec frontend bash
```
