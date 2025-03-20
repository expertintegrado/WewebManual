process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    pages: {
        "dashboard-cliente/[param]/[param-copy]/[param]": {
            entry: "src/_front/main.js",
            template: "public/front.html",
            filename: "./dashboard-cliente/[param]/[param-copy]/[param]/index.html",
            lang: "en",
            title: "",
            cacheVersion: 2,
            meta: [
                { name: "twitter:card", content: "summary" },
                { property: "og:type", content: "website" },
                { name: "robots", content: "index, follow" }
            ],
            scripts: { head: "\n", body: "\n" },
            baseTag: { href: "/", target: "_self" },
            alternateLinks: [
                { rel: "alternate", hreflang: "x-default", href: "https://7eb331be-840b-4de6-b0a8-9cc45f6dca79.weweb-preview.io/dashboard-cliente/[param]/[param-copy]/[param]/" },
                { rel: "alternate", hreflang: "en", href: "https://7eb331be-840b-4de6-b0a8-9cc45f6dca79.weweb-preview.io/dashboard-cliente/[param]/[param-copy]/[param]/" }
            ],
            chunks: ["chunk-vendors", "chunk-common", "dashboard-cliente/[param]/[param-copy]/[param]"]
        },
        "index": {
            entry: "src/_front/main.js",
            template: "public/front.html",
            filename: "./index.html",
            lang: "en",
            title: "",
            cacheVersion: 2,
            meta: [
                { name: "twitter:card", content: "summary" },
                { property: "og:type", content: "website" },
                { name: "robots", content: "index, follow" }
            ],
            scripts: { head: "\n", body: "\n" },
            baseTag: { href: "/", target: "_self" },
            alternateLinks: [
                { rel: "alternate", hreflang: "x-default", href: "https://7eb331be-840b-4de6-b0a8-9cc45f6dca79.weweb-preview.io/" },
                { rel: "alternate", hreflang: "en", href: "https://7eb331be-840b-4de6-b0a8-9cc45f6dca79.weweb-preview.io/" }
            ],
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        "dashboard/[param]/[param]": {
            entry: "src/_front/main.js",
            template: "public/front.html",
            filename: "./dashboard/[param]/[param]/index.html",
            lang: "en",
            title: "",
            cacheVersion: 2,
            meta: [
                { name: "twitter:card", content: "summary" },
                { property: "og:type", content: "website" },
                { name: "robots", content: "index, follow" }
            ],
            scripts: { head: "\n", body: "\n" },
            baseTag: { href: "/", target: "_self" },
            alternateLinks: [
                { rel: "alternate", hreflang: "x-default", href: "https://7eb331be-840b-4de6-b0a8-9cc45f6dca79.weweb-preview.io/dashboard/[param]/[param]/" },
                { rel: "alternate", hreflang: "en", href: "https://7eb331be-840b-4de6-b0a8-9cc45f6dca79.weweb-preview.io/dashboard/[param]/[param]/" }
            ],
            chunks: ["chunk-vendors", "chunk-common", "dashboard/[param]/[param]"]
        }
    },
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
