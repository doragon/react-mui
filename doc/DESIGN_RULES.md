# 設計ルール

## Atomic Design

| カテゴリ  | 依存カテゴリ                           | ストア・API アクセス | 状態管理     | CSS      |
| --------- | -------------------------------------- | -------------------- | ------------ | -------- |
| Atoms     | なし                                   | NG                   | 自己完結のみ | 持たない |
| Molecules | Atoms                                  | NG                   | 自己完結のみ | 持つ     |
| Organisms | Atoms, Molecules, Organisms            | OK                   | OK           | 持つ     |
| Templates | Atoms, Molecules, Organisms            | NG                   | NG           | 持つ     |
| Pages     | Atoms, Molecules, Organisms, Templates | OK                   | OK           | 持たない |

API について

- Pages は画面に必要なデータの受信を行う
- Organisms は画面に入力されたデータの送信を行う

Pages について

- 基本は Templates のみを持つ
- Pages で取得したデータを Templates 及び Templates 配下の Atoms, Molecules, Organisms へ props で渡す
- ファイル名は「画面名.tsx」

Templates について

- ファイル名は「画面名 + Template.tsx」

Organisms について

- Organisms/Common 配下を除き、1 度しか使用されないものを配置する
- Organisms/Common のみ再利用を可能とする
- ファイル名は「画面名 + Org.tsx」

Atoms について

- [Move faster with intuitive React UI tools](https://mui.com/)のコンポーネントを Wrapper したものとする

## CSS について

CSS Modules を採用し、ファイル名は「XXX.module.css」とする。

呼び出し時は下記のように使うことができる。

```
import styles from 'xxx/XXX.module.css';
...
  <div className={styles[`XXX-header`]}>
...
```