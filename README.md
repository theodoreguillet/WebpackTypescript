# Webpack React with TypeScript starter kit.

---

### Quick Start

Just clone this repository into your own project folder. and start working

```
git clone https://github.com/watchtux/WebpackTypescript.git <MyProjectName>
cd <MyProjectName>
npm install
npm run dev
```

If you want to detach from this repository into your own repository do this:

```
git remote remove origin
git remote add origin YOUR_REPO_URL
git push -u origin master
```

## Why

- Using typescript and support most browsers
- Files are bundled using [Webpack](https://webpack.github.io/)

---

### Directory Layout

```
.
├── /node_modules/          # 3rd-party libraries and utilities
├── /www/                   # All the generated files will go here
├── /src/                   # The source code of the application
├── /assets/                # images, css, jsons etc.
├── .babelrc                # babel configuration
├── package.json            # The list of 3rd party libraries and utilities
└── tslint.json             # TypeScript linting configuration file
├── README.md               # This file
```

### What's included

- [React v16](https://facebook.github.io/react/)
- [Jest](https://github.com/facebook/jest)
- [Ejs views](https://github.com/mde/ejs)
- [images/audio/fonts loader](https://github.com/webpack-contrib/file-loader)
- [css loader](https://github.com/webpack-contrib/css-loader)

### Usage

- `npm run dev` - Build in watch mode with source maps, opens [http://localhost:8080](http://localhost:8080)
- `npm run test` - Runs jest tests
- `npm run build` - Bundle sources and assets in the `www` folder, entry point is `www/index.html`

---

#### Requirements

- npm

---

#### Licence

This code is released as is, under MIT licence. Feel free to use it for free for both commercial and private projects. No warranty provided.
