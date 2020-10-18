# data-viz-frontend

## Project deploy 
```
npm run deploy
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### How to add vega-images

- Add new JSON-file to folder: */public/vega/{new_file_name}.json*
- In *{new_file_name}.json* create structure: 
```javascript
    { 
        "header": "{image name to display}", 
        "description": "Text about image",
        "data": {} 
    }
```
- Copy source from notebook ("View Source" -> Copy)
- In *{new_file_name}.json* paste to "data"-filed copied source
- Go to */public/urls.constant.json* and add new url
- Reload/redeploy an application

### How to add images

- Add new JSON-file to folder: */public/images/{new_image_name}.svg*
- Go to */public/images.constant.json* and add new object
```javascript
    { 
        "header": "{image name to display}", , 
        "description": "Text about image",
        "url": '/public/images/{new_image_name}.svg'
    }
```
- Reload/redeploy an application

### References

1. How to build and deploy a Vue.js app with GitHub Pages https://blog.logrocket.com/build-deploy-vue-js-app-github-pages/