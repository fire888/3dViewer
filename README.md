
# 3dViewer  
![language](https://img.shields.io/badge/code-es6-green.svg) 
![Build status](https://img.shields.io/badge/build-50%-red.svg) 
![Stability status](https://img.shields.io/badge/stability-stable-green.svg) 
![License status](https://img.shields.io/badge/license-Beerware-green.svg) 

![pic](https://github.com/fire888/3dViewer/blob/master/www_dist/styles/screenshot.jpg)  
[*Посмотреть промежуточную версию*](http://js.otrisovano.ru/tests/180816Viewer/master)


Собранное приложение находится в папке *www_dist/*  
Модели для сцены в папке *www_dist/assets/*

____

### Добавление новой модели: 

* В файл *www_dist/SCENES.js* пишем
```js
SCENES = [
  {
    // ....
  },
  {
    name: 'КИРПИЧНАЯ БАШНЯ',         // имя сцены для интерфейса 
    path: 'TOWERS',                  // имя папки со сценой
    project: 'ВЕРТИКАЛЬНЫЕ ОБЪЕКТЫ', // имя проекта в который входит сцена для интерфейса         
    models: {
      'СТЕНЫ': {                     // имя модели1 для интерфейса
        obj: 'WALLS.OBJ',            // имя файла геометрии модели1 ( расширение .obj )
        mtl: 'WALLS.MTL'             // имя файла материалов модели2 ( расширение .mtl )
      },                             // ЗАПЯТАЯ, следом идет новая модель  
      'ПОТОЛКИ': {                   // имя модели2 для интерфейса 
        obj: 'FLOORS.OBJ',           // имя файла геометрии модели2 ( расширение .obj )
        mtl: 'FLOORS.MTL'            // имя файла материплов модели2 ( расширение .mtl ) 
      }                              // НЕТ ЗАПЯТОЙ, последняя модель в сцене 
    }
  },                                 // ЗАПЯТАЯ, если сцена не последняя в списке 
  {
    //.....
  }
]
```
* В папке *www_dist/assets* создаем папку с именем из *SCENES.js* `{ ... path: 'ИМЯ_НАШЕЙ_ПАПКИ' ... }`  
* Кидаем в нее все файлы сцены ( *.obj, .mtl, .jpg* )
* В файлах *.mtl* удаляем абсолютные пути, оставляя только название файла ( *D:\...\....\...\texture.jpg* на *texture.jpg* )
* Кидаем туда же квадратную картинку с названием *preview.png*   
* Запускаем '*www_dist/index.html*'

____

### РАЗРАБАМ 

В консоли, в папке со скачанным проектом: 

```
npm i
```
Сборка в файл *www_dist/js/main.js*:
```
npm run build
```

____

