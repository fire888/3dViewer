
const SCENES = [
  {
    name: 'Многобашенный замок',   //ПРОЕКТ 1
    path: 'scene1',
    project: 'Замки из кирпича',        
    models: {
      'башни': {
        obj: 'roof.obj',
        mtl: 'roof.mtl'
      },
      'стена кубическая': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'земля': {
        obj: 'glass.obj',
        mtl: 'glass.mtl'
      }
    }
  },
  {
    name: 'Группа замков',
    path: 'scene2',
    project: 'Замки из кирпича',     
    models: {
     'крыша': {
       obj: 'roof.obj',
       mtl: 'roof.mtl'
      },
      'цилиндры': {
        obj: 'walls.obj',
        mtl: 'walls.mtl',
      },
      'газон': {
        obj: 'glass.obj',
        mtl: 'glass.mtl'
      }
    }
  },
  {
    name: 'Шаровые стены',
    path: 'scene3',     
    project: 'Замки из кирпича',         
    models: {
      'кровля черепичная': {
        obj: 'roof.obj',
        mtl: 'roof.mtl'
      },
      'стена круглая': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'отметка 0': {
        obj: 'glass.obj',
        mtl: 'glass.mtl'
      }
    }
  },   
  {                                    //ПРОЕКТ 2
    name: 'Ковчег',
    path: 'scene4',     
    project: 'Крепости из дерева',         
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },  
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Крепости из дерева',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Крепости из дерева',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },     
  {                                //ПРОЕКТ 3
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Разное',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },
  {
    name: 'Группа замков',
    path: 'scene2',
    project: 'Замки из кирпича',     
    models: {
     'крыша': {
       obj: 'roof.obj',
       mtl: 'roof.mtl'
      },
      'цилиндры': {
        obj: 'walls.obj',
        mtl: 'walls.mtl',
      },
      'газон': {
        obj: 'glass.obj',
        mtl: 'glass.mtl'
      }
    }
  },
  {
    name: 'Группа замков',
    path: 'scene2',
    project: 'Замки из кирпича',     
    models: {
     'крыша': {
       obj: 'roof.obj',
       mtl: 'roof.mtl'
      },
      'цилиндры': {
        obj: 'walls.obj',
        mtl: 'walls.mtl',
      },
      'газон': {
        obj: 'glass.obj',
        mtl: 'glass.mtl'
      }
    }
  },
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Разное',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Разное',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Замки из кирпича',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },     
  {                                //ПРОЕКТ 3
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Вперемешку',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },
  {
    name: 'Группа замков',
    path: 'scene2',
    project: 'Замки из кирпича',     
    models: {
     'крыша': {
       obj: 'roof.obj',
       mtl: 'roof.mtl'
      },
      'цилиндры': {
        obj: 'walls.obj',
        mtl: 'walls.mtl',
      },
      'газон': {
        obj: 'glass.obj',
        mtl: 'glass.mtl'
      }
    }
  },
  {
    name: 'Группа замков',
    path: 'scene2',
    project: 'Вперемешку 2',     
    models: {
     'крыша': {
       obj: 'roof.obj',
       mtl: 'roof.mtl'
      },
      'цилиндры': {
        obj: 'walls.obj',
        mtl: 'walls.mtl',
      },
      'газон': {
        obj: 'glass.obj',
        mtl: 'glass.mtl'
      }
    }
  },
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Вперемешку 2',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Разное',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  },
  {
    name: 'Арт-обьект',
    path: 'scene5',      
    project: 'Вперемешку 2',        
    models: {
      'стены': {
        obj: 'walls.obj',
        mtl: 'walls.mtl'
      },
      'пол': {
        obj: 'floor.obj',
        mtl: 'floor.mtl'
      }
    }
  }                            
]