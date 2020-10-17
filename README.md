# nadja-mansurov.github.io# data-viz-frontend

Go to frontend folder and then...

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
> Add new JSON-file to folder: /public/vega/{new_file_name}.json
> In {new_file_name}.json create structure: { "header": "{image name to display}", "data": {} }
> Copy source from notebook ("View Source" -> Copy)
> In {new_file_name}.json paste to "data"-filed copied source
> Go to /public/urls.constant.json and add new url
> Reload application