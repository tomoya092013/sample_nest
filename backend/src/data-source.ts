import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'sample_nest',
  password: 'sample_nest',
  database: 'sample_nest',
  logging: true, // コンソール画面に実行したSQLが表示される
  synchronize: false, // true にすると migration が自動で実行されます。
  entities: ['dist/entities/*.entity.js'], // エンティティクラスを指定する（複数の場合はカンマで区切る）
  migrations: ['dist/database/migrations/*.js'], // dist ディレクトリ内の js ファイルを指定する
});
