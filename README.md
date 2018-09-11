# checkbook

> Learn to make web applications based on "PWA" with Vue 2.

## Quick Preview

![](https://github.com/yanwarsolah/checkbook-pwa-vue2/blob/master/quickpreview.gif)

You can serve using `ngrok` tools via command line.

```
$ ngrok http 8080

ngrok by @inconshreveable                                                                               (Ctrl+C to quit)

Session Status                online
Session Expires               7 hours, 55 minutes
Version                       2.2.8
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://82021b23.ngrok.io -> localhost:8080
Forwarding                    https://82021b23.ngrok.io -> localhost:8080

Connections                   ttl     opn     rt1     rt5     p50     p90
                              3       2       0.01    0.01    41.96   78.39                               
```

### Firebase Plan
You can also save your site on firebase hosting. This is far more recommended. But, this API not https and then you get error like this:

```
This request has been blocked; the content must be served over HTTPS.
```

You can change API under https to work in firebase.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## API Backend
For API Backend you can get `IT Ebooks` in [here](http://it-ebooks-api.info/).

## Many Thanks
Many thanks to `Alhayyan` for spirit.

![](https://github.com/yanwarsolah/checkbook-pwa-vue2/blob/master/alhayyan.PNG)

And other many thanks about this tutorials:

 - [Hafid Mukhlasin](https://medium.com/@hafidmukhlasin/membangun-aplikasi-rss-reader-pwa-menggunakan-vuejs-42d1f3a3fdc0)
 - [Charles Bochet on Sicara Blog](https://blog.sicara.com/a-progressive-web-application-with-vue-js-webpack-material-design-part-1-c243e2e6e402)


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
