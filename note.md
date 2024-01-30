### コマンド

```
npm i -g @nest/cli
nest new プロジェクト名
```

```
# nest g module tasks
CREATE src/tasks/tasks.module.ts
UPDATE src/app.module.ts

# nest g controller tasks --no-spec
CREATE src/tasks/tasks.controller.ts
UPDATE src/tasks/tasks.module.ts

# nest g service tasks --no-spec
CREATE src/tasks/tasks.service.ts
UPDATE src/tasks/tasks.module.ts
```

```
dist/database/migrationsと
src/database/migrationsのファイルを作成
# npx typeorm-ts-node-commonjs migration:generate -d src/data-source.ts --pretty src/database/migrations/CreateTask
query: SELECT VERSION() AS `version`
query: SELECT DATABASE() AS `db_name`
query: SELECT `TABLE_SCHEMA`, `TABLE_NAME`, `TABLE_COMMENT` FROM `INFORMATION_SCHEMA`.`TABLES` WHERE `TABLE_SCHEMA` = 'sample_nest' AND `TABLE_NAME` = 'task'
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'sample_nest' AND `TABLE_NAME` = 'typeorm_metadata'
Migration /backend/src/database/migrations/1706583358920-CreateTask.ts has been generated successfully.

テーブル作成
# npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts
# npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts
query: SELECT VERSION() AS `version`
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'sample_nest' AND `TABLE_NAME` = 'migrations'
query: SELECT * FROM `sample_nest`.`migrations` `migrations` ORDER BY `id` DESC
0 migrations are already loaded in the database.
1 migrations were found in the source code.
1 migrations are new migrations must be executed.
query: START TRANSACTION
query:
            CREATE TABLE `task` (
                `id` varchar(36) NOT NULL,
                `name` varchar(255) NOT NULL,
                `status` varchar(255) NOT NULL,
                `created_at` varchar(255) NOT NULL,
                `updated_at` varchar(255) NOT NULL,
                PRIMARY KEY (`id`)
            ) ENGINE = InnoDB

query: INSERT INTO `sample_nest`.`migrations`(`timestamp`, `name`) VALUES (?, ?) -- PARAMETERS: [1706583358920,"CreateTask1706583358920"]
Migration CreateTask1706583358920 has been  executed successfully.
query: COMMIT
```

```
idをuuidで自動採番
# npm i uuid
```

```
バリデーション
# npm i class-transformer class-validator

--saveをつけなくてもdependenciesに追加された
だからどっちでもいいみたい
https://github.com/typestack/class-validator?tab=readme-ov-file#validation-decorators
```

```
ORM(オブジェクトリレーショナルマッピング)
# npm install --save @nestjs/typeorm typeorm mysql2
```

- app.module
  各 module をここにまとめる

- module
  controller と service をまとめたもの
  処理順 controller → service

- controller
  ルーティング
  クライアントからのリクエストを受ける
  （サービスのメソッドを起動する）
  クライアントへ結果を返す

- service
  メソッド

- DI(Dependency Injection)
  controller は service を必要とする →service がないと成り立たない（service に依存している）
  DI をしないと controller で service クラスをインスタンス化しないといけない
  → それを避けるため外部でインスタンスを作成しておく（依存性の注入）

  - module の providers に service を記載すると DI コンテナに登録される
    → インスタンス化せずに controller で service のメソッドが使えるようになる(すごい)

- Entity
  オブジェクトとテーブルのマッピングを定義するクラス

- マイグレーション
  SQL ではない言語を使用して DB を操作(テーブル作成、カラム追加...)をすること

- DB 接続
  https://qiita.com/t-yama-3/items/fa2113fcabf84e0a20e6#2-dockerfile-%E3%81%A8-docker-composeyml-%E3%81%AE%E4%BD%9C%E6%88%90
  https://pote-chil.com/blog/nestjs-typeorm-migration
  src/data-source.ts を作成
  docker で接続する際は DB と port 注意
