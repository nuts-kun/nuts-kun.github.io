# nuts-kun.github.io

Shuhei Imai (今井 柊平) の個人ホームページ。Astro 製の静的サイト。GitHub Actions で自動デプロイ。

公開URL: https://nuts-kun.github.io/

---

## ローカル開発

```bash
npm install
npm run dev        # http://localhost:4321/
```

ビルド成果物を確認したい場合:

```bash
npm run build
npm run preview
```

## ディレクトリ構成

```
src/
├── i18n/           # ja.ts / en.ts に全てのテキストを集約
├── components/     # 各セクション・ヘッダ・トグル
├── layouts/        # BaseLayout.astro
├── pages/
│   ├── index.astro       # 日本語版 (/)
│   └── en/index.astro    # 英語版 (/en/)
└── styles/global.css
```

## テキストを更新する

各セクション（自己紹介、Publications、Education など）の文言はすべて `src/i18n/ja.ts` と `src/i18n/en.ts` にあります。同じキー構造なので、片方を編集したらもう片方も同じキーで合わせてください。

- `hero.affiliation` / `hero.role` / `hero.bio` を埋めれば自己紹介になります
- `publications.items[]` に論文を1件ずつ追加。`year` で自動グルーピングされます
- `education.items[]` / `experience.items[]` はタイムライン表示
- `news.news` / `news.talks` / `news.awards` の3グループに分けてお知らせを記載
- `footer.email` / `github` / `linkedin` / `twitter` を本物に差し替え

## プロフィール写真の差し替え

`public/images/profile.svg` を顔写真に置き換えてください。

- 推奨: 400×400px の正方形 JPEG (`profile.jpg`)
- 差し替え手順:
  1. `public/images/profile.svg` を削除
  2. `public/images/profile.jpg` を配置
  3. `src/components/Hero.astro` の `<img src="/images/profile.svg" ...>` を `/images/profile.jpg` に変更

## デプロイ

`main` ブランチに push すると `.github/workflows/deploy.yml` が自動でビルド & GitHub Pages へデプロイします。

初回のみ、リポジトリ設定で次を行ってください:

1. GitHub リポジトリの **Settings → Pages → Build and deployment**
2. **Source** を **GitHub Actions** に変更

## カラーパレットを変更したい場合

`src/styles/global.css` の `:root` と `html[data-theme="dark"]` 内の CSS 変数を編集してください。
