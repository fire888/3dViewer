
const MODELS = {
    'model1': {
        name: 'Многобашенный замок',
        project: 'Замки из кирпича',
        preview: 'model1/preview.png',        
        layers: {
            'башни': {
                obj: 'model1/roof.obj',
                mtl: 'model1/roof.mtl'
            },
            'стена кубическая': {
                obj: 'model1/walls.obj',
                mtl: 'model1/walls.mtl',            
            },
            'земля': {
                obj: 'model1/glass.obj',
                mtl: 'model1/glass.mtl',                  
            }
        }
    },
    'model2': {
        name: 'Группа замков',
        project: 'Замки из кирпича',
        preview: 'model2/preview.png',          
        layers: {
            'крыша': {
                obj: 'model2/roof.obj',
                mtl: 'model2/roof.mtl'
            },
            'цилиндры': {
                obj: 'model2/walls.obj',
                mtl: 'model2/walls.mtl',            
            },
            'газон': {
                obj: 'model2/glass.obj',
                mtl: 'model2/glass.mtl',                  
            }
        }
    },
    'model3': {
        name: 'Шаровые стены',
        project: 'Замки из кирпича',
        preview: 'model3/preview.png',          
        layers: {
            'кровля черепичная': {
                obj: 'model3/roof.obj',
                mtl: 'model3/roof.mtl'
            },
            'стена круглая': {
                obj: 'model3/walls.obj',
                mtl: 'model3/walls.mtl',            
            },
            'отметка 0': {
                obj: 'model3/glass.obj',
                mtl: 'model3/glass.mtl',                  
            }
        }
    },   
    'model4': {
        name: 'Ковчег',
        project: 'Крепости из дерева',
        preview: 'model4/preview.png',          
        layers: {
            'стены': {
                obj: 'model4/walls.obj',
                mtl: 'model4/walls.mtl',            
            },
            'пол': {
                obj: 'model4/floor.obj',
                mtl: 'model4/floor.mtl',                  
            }
        }
    },  
    'model5': {
        name: 'Арт-обьект',
        project: 'Крепости из дерева',
        preview: 'model5/preview.png',          
        layers: {
            'стены': {
                obj: 'model5/walls.obj',
                mtl: 'model5/walls.mtl',            
            },
            'пол': {
                obj: 'model5/floor.obj',
                mtl: 'model5/floor.mtl',                  
            }
        }
    }             
}