var blueberries = {
    scientificidentification: 'Vaccinium corymbosum',
    growsonshrub: 'true',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g',
};

var blueberries = [grapes, redcurrant];

blueberries.forEach(function (item){
document.write('<dl>');
document.write('<dt>scientificidentification:</dt>');    
document.write('<dd>' + item.scientificidentification + '</dd>');
document.write('<dt>growsonshrub:</dt>');    
document.write('<dd>' + item.growsonshrub + '</dd>');
document.write('<dt>energy:</dt>');    
document.write('<dd>' + item.energy + '</dd>');
document.write('<dt>carbohydrates:</dt>');    
document.write('<dd>' + item.carbohydrates + '</dd>');
document.write('<dt>protein:</dt>');    
document.write('<dd>' + item.protein + '</dd>');
document.write('</dl>');

});


var grapes = {
    scientificidentification: 'Vitis Vinifera',
    growsonshrub: false,
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g',
};


var redcurrant = {
    scientificidentification: 'Ribes Rubrum',
    growsonshrub: true,
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g',
};