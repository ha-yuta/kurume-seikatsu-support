## Cloudflareデプロイ設定（本番）

- Build command: npx opennextjs-cloudflare build
- Deploy command: npx wrangler deploy
- Version command: npx wrangler versions upload
- Production branch: main

※ この設定はリポジトリ内のファイルではなく、Cloudflareダッシュボード（Workers & Pages → kurume-seikatsu-support → Settings → Build）にしか保存されない。
　 サイトの更新が反映されない時は、まずここがこの内容と一致しているか確認すること。
　 2026年8月、ここがnext-on-pages方式のまま古くなっていたため、pushしても正しくビルドされない状態が続いていた。
