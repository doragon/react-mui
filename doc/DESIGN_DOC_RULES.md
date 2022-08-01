# Design Doc ルール

前提として、必須ではない。
ただ、書いておくことで下記のようなメリットがある。

- 開発を始める前に全体のシステムを考察する機会を得る
- 文章化することで、曖昧な部分が明確になる
- 早い段階でチームメイトや専門家、関係者からフィードバックを得る機会を得る
- システムの設計について明確な承認を得られる
- 新しいメンバーがシステムの概略を理解する手助けになる

## いつ書くべきか

デザインドックをいつ書くべきかについては明確な基準は無い。

- 同僚・チームメイトのフィードバックが必要
- チームメイトがそのシステムの開発に後から加わるとき、コードを読むだけでは十分な理解できない、もしくは時間がかかりすぎてしまう
- デザインに複数の選択肢があり、後日自分が見返したときに現在のデザインを選んだ理由がわからなくなりそう

などの条件を 1 つでも満たした場合、デザインドックを書くことをおすすめする。

## Design Doc のライフサイクル

1. 作成と迅速な反復
1. レビュー（複数回行われる場合があります）
1. 実装と反復
1. メンテナンスと学習

## Design Doc における各章の説明

- Goal
  - Non Goals
- Background
- Overview
- Detailed Design
  - Sub sections
  - Caveats / Security Concerns / Privacy Concerns
  - Alternatives Considered
- How to use
- How to test
- Others

なお、該当項目に対し、記載する内容がない場合は「N/A」。
作業中の場合は、「TODO」や「WIP」と記載するとチームメンバーが理解しやすい。

### Goal

1~3 文程度の短い段落で、デザインされるシステムの目的を述べる。
要件を定義するとき、後述する PRD が存在すればリンクを張り、存在しなければ専用の章を設ける。
Goal が間違って広く捉えられると、議論が範囲外を超えてしまい、毎回軌道修正する必要がある。
そんなとき Non Goals として議論やシステムの目的範囲を狭め、明確にすることで、無駄な議論を省くことができる。

### Background

前提になる知識や参考になるページをリストする。中で使う専門用語や略語も定義して、意味を明確にしておく。
デザインドックはシステム全体の議論を行うため、さまざまな人からフィードバックをもらう必要がある。たとえばフロントエンドとバックエンドの両方に改修が必要な機能の場合、両方のチームからレビューしてほしいが、それぞれのチームは自分のチーム外については詳しくない。そのような場合でも、関係者が全体を読んで理解できるように情報を補足するためにも、Background は重要である。

### Overview

概要や目的を 3,4 段落で説明する。システムが複数のコンポーネントからなる場合、概略図を書くと読者の理解が容易になる。

### Detailed Design

詳細設計。必要に応じて数ページ程度に収めるのが理想である。章立てをきちんと行い、読者が必要な情報にたどり着けるようにすることが重要。あまりに長くなる場合は小さい機能を別のデザインドックとして独立させ、議論を分けることで読者の負担も減る。

### Alternatives Considered

考慮されたが選ばれなかった設計をその利点・欠点も含めて書いておくことは、見逃されがちであるが重要である。

### Caveats / Security Concerns / Privacy Concerns

Caveats にはシステムの注意点などを書く。セキュリティーやプライバシーの懸念に関しては、専用の章を設けることで、議論を明確化し、ローンチの前に必ず解決する。

### How to use

モジュールの利用例が分かるサンプルコードなどを記載する。

### How to test

どういう観点で何をテストすればよいか、どのようにテストすればよいかを記載する。

### Others

API のデザインなどの、例があるとわかりやすいが Detailed Design に含めるには長すぎる場合は Example の章を Appendix としてつけると全体が読みやすくなる。
テストのプロセスが重要である場合は Test Plan の章を含めることで、どのようにテストされるか議論することが可能になる。

## 参考リンク

- [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/)
- [デザインドックで学ぶデザインドック](https://www.flywheel.jp/topics/design-doc-of-design-doc/)
- [残業も減らせる!? 上級エンジニアになるための Design Doc 超入門](https://atmarkit.itmedia.co.jp/ait/articles/1606/21/news016.html)
- [Writing Technical Design Docs](https://medium.com/machine-words/writing-technical-design-docs-71f446e42f2e)
- [How to Write a Software Design Document (SDD)](https://www.nuclino.com/articles/software-design-document)