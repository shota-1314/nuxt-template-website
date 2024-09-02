# Nuxt 3 テンプレート

以下のパッケージが使えます

Vuetify

https://vuetifyjs.com/ja/getting-started/installation/

Tailwind CSS

https://tailwindcss.com/

node-postgres

https://node-postgres.com/

@sidebase/nuxt-auth

https://github.com/sidebase/nuxt-auth

## Postgres
.envに以下を記述
```bash
DB_USER = 'xxxxxxxxxxxxxxxxxxx'
DB_HOST = 'xxxxxxxxxxxxxxxxxxx'
DB_NAME = 'xxxxxxxxxxxxxxxxxxx'
DB_PASSWORD = 'xxxxxxxxxxxxxxxxxxx'
DB_PORT = '5432'
```

## 認証

@sidebase/nuxt-authを使いGoogleアカウントによる

認証が利用できます。

.envに以下を追記

クライアントIDの取得方法は以下

https://support.google.com/workspacemigrate/answer/9222992?hl=ja

```bash
GOOGLE_CLIENT_ID = 'xxxxxxxxxxxxxxxxxxx'
GOOGLE_CLIENT_SECRET = 'xxxxxxxxxxxxxxxxxxx'
```

## セットアップ
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 開発環境実行

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

