# Storybook ルールドキュメント

## 目的
このドキュメントは、Storybook を使用する際のルールとベストプラクティスを定義します。

## 目次
1. Story の作成
2. コンポーネントの命名規則
3. アドオンの使用
4. ドキュメンテーション
5. テストとデバッグ

## 1. Story の作成
- 各コンポーネントには少なくとも1つの Story を作成します。
- Story はコンポーネントの異なる状態を示すために複数作成することが推奨されます。
- Story のファイル名は `ComponentName.stories.js` とします。

## 2. コンポーネントの命名規則
- コンポーネント名はパスカルケース（例: `ButtonComponent`）を使用します。
- Story のタイトルはコンポーネント名に一致させます。

## 3. アドオンの使用
- 必要に応じて公式の Storybook アドオンを使用します。
- アドオンの設定は `.storybook/main.js` ファイルで行います。

## 4. ドキュメンテーション
- 各 Story には適切なコメントを追加し、コンポーネントの使用方法を説明します。
- `@storybook/addon-docs` を使用して自動生成されるドキュメントを活用します。

## 5. テストとデバッグ
- Storybook を使用してコンポーネントのビジュアルテストを行います。
- `@storybook/addon-actions` や `@storybook/addon-knobs` を使用してインタラクティブなテストを行います。

## 参考リンク
- [Storybook 公式ドキュメント](https://storybook.js.org/docs/react/get-started/introduction)
- [Storybook アドオン](https://storybook.js.org/addons)

以上のルールに従って、Storybook を効果的に活用しましょう。