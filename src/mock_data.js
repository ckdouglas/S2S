export const wears = [

  { 
    id:idGenerator(),
    uri: 'http://www.esincer.com/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/1/5/1503546678_6.jpg'
  },

  {  id:idGenerator(),
     uri: 'https://www.dhresource.com/0x0/f2/albu/g5/M00/76/48/rBVaJFkHPHyAUMGsAALjdnI3P7c489.jpg'
  },

  {  id:idGenerator(),
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AAjFR-IAEskCMs-DI9dWCAjjhivHbXDAoVOzKfiiNdg5DRoX'
  },
  
  {  id:idGenerator(),
     url: 'https://i.pinimg.com/originals/b8/e1/0c/b8e10c3c5238bc4be0ab20ffbd4ec627.jpg'
  },
   
  { id:idGenerator(),
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMu0q9QgmlGqFeYabsAhqvfWOA7ktFuJbRPdfxflh-dbVwGgH'
  }, 
]

function idGenerator(){
    return Math.random().toString().substr(2,9);
}