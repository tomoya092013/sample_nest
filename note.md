### コマンド

```
npm i -g @nest/cli
nest new プロジェクト名
```

```
# nest g module tasks
CREATE src/tasks/tasks.module.ts
UPDATE src/app.module.ts
```

```
# nest g controller tasks --no-spec
CREATE src/tasks/tasks.controller.ts
UPDATE src/tasks/tasks.module.ts
```

```
# nest g service tasks --no-spec
CREATE src/tasks/tasks.service.ts
UPDATE src/tasks/tasks.module.ts
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
    → インスタンス化せずに controller で service のメソッドが使えるようになる
