# builder
Сборка на Gulp для создания веб-сайтов. 

## Установка 
Для начала работы вам необходимо установить `Gulp`. 
Далее, следует установить следующие пакеты:
 - `gulp-sass`
 - `browser-sync`
 - `gulp-file-include`
 - `gulp-autoprefixer`
 - `gulp-uglify-es`
 - `gulp-cleancss`
 - `gulp-clean`
 - `ESLint`, я использую `eslint-config-airbnb`
 - `StyleLint`, я использую `stylelint-config-standard`

## Работа
Доступные функции: 

### `gulp`
Использует task `deafult`. 
Запускает сборку и открывает её в окне `localhost:3000`. Если хотите изменить порт, то обратитесь на сайт разработчика для изучения документации [Browser Sync](https://www.browsersync.io/).
Более подробно изучить работу функций можно в файле `gulpfile.js`. 

### `gulp build`
Собирает все имеющееся в сайт. Стили и js-файлы минифицируются.
Более подробно изучить работу функций можно в файле `gulpfile.js`. 