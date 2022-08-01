# ディレクトリ構成

App/  
├ .storybook ... Storybook の設定ファイル  
├ dist ... build 成果物置き場  
├ node_modules  
├ src/  
│ ├ atoms/ ... 最小単位の機能を担うコンポーネント  
│ ├ lib/ ... ライブラリ  
│ ├ molecules/ ... atoms や molecules を組み合わせて作るコンポーネント  
│ ├ organisms/ ... molecules と同様
│ ├ pages/ ... コンテンツとコンポーネントを繋ぐもの  
│ └ templates/ ... ページ全体のレイアウトに対する責任を担う  
├ test ... テストコード  
├ .eslintignore  
├ .eslintrc.json  
├ .gitignore  
├ .prettierrc.json  
├ package.json  
├ package-lock.json  
├ README.md  
├ tsconfig.json  
├ tsconfig.node.json  
└ vite.config.ts

下記は確定ではないが、基本方針とする。

- molecules: 他のコンポーネントのヘルパー的な役割を担う
- organisms: molecules との違いは、コンポーネントで完結できるコンテンツであり、独立して存在できるコンポーネントを提供する
- pages: template に実際のコンテンツを配置したもの
- templates: 具体的なコンテンツは含まない