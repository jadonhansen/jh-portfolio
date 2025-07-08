This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

I have opted to go for an [SPA static build](https://nextjs.org/docs/app/guides/static-exports) because of the simplicity of the website.

## Build & deploy

First, run the build script:

```bash
npm run build
```

I opted to [generate static exports](https://nextjs.org/docs/app/guides/single-page-applications#static-export-optional) so that the build files can live and be served on a general server without a Node.js environment.

See `next.config.ts` to change this. 


## Scripts

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
