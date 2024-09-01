# u-hyszk.github.io

## How to use

### 1. コンテナを起動する

```code:bash
docker compose up
```

### 2. Github初期設定

```code:bash
ssh-keygen -t ed25519
cat ~/.ssh/id_ed25519.pub
git config --global user.email "your@email.com"
```

### 3. デプロイ

```code:bash
npm run deploy
```
