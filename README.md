# react-mui

React + TypeScript で MUI の Wrapper コンポーネントを作成する。

## 開発環境

- [Vite](https://ja.vitejs.dev/)
- [React](https://ja.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [MUI](https://mui.com/)

## 設計ルール

| カテゴリ  | 依存カテゴリ                           | ストア・API アクセス | 状態管理     |
| --------- | -------------------------------------- | -------------------- | ------------ |
| Atoms     | なし                                   | NG                   | 自己完結のみ |
| Molecules | Atoms                                  | NG                   | 自己完結のみ |
| Organisms | Atoms, Molecules, Organisms            | NG                   | OK           |
| Templates | Organisms                              | NG                   | OK           |
| Pages     | Atoms, Molecules, Organisms, Templates | OK                   | OK           |
