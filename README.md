This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Deploy to the Main 21CTL Server

1. Ssh into the remote repository: `ssh root@80.248.7.157`
2. Cd into `/home/sam/public_html`
3. Remove everything inside build first: `rm -rf build/*`
4. Pull from main branch: `git pull origin main`
    1. **NOTE:** If there is an existing .next in the cache, run: `git rm -rf —cached .next` to remove it, then commit, before pulling
5. Pull from build branch and resolve all merge conflicts: `git pull origin build`
6. Build and push the code to build branch:
    1. `git add .`
    2. `git commit -m "commit message"`
    3. `pnpm build` or `yarn build` or `npm run build`
    4. `git push origin build`
7. Make sure the workflow builds properly using Github Action
8. In the `ssh`’ed terminal, remove the `static` folder in `_next` directory, then cd into `build/.next`, copy the `static` folder to the `_next` folder: `cp -r static ../../_next`
9. The GitHub actions puts the new info in `build` directory, so next step: **LET THIS BE DONE IN LESS THAN 5 MINUTES**
    1. Cd into `/home/sam/public_html`
    2. Run: `rm -rf *.json` to remove all json files
    3. Run: `rm -rf *.js` to remove all js files
    4. Run: `rm -rf *.html` to remove html files
    5. Run: `rm -rf *.svg` to remove svg files
    6. Run: `rm -rf api`
    7. Run: `rm -rf light`
    8. cd into `build/.next/server/pages` directory, then copy everything to the main site (run `pwd` to know where you are i.e. your present working directory): `cp -rf * ../../../../`
 10. Hard refresh and check the [website](https://21ctl.com), sometimes, use incognito mode just in case.