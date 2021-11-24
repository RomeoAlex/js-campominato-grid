// IMPORTANTE SCRIVERE LA STRATEGIA DI APPROCCIO
// constante per evidenziare l'id del bottone play
const playButton = document.getElementById('play-button'); 
// creo la funzione che mi popola il box di quadrati
// funzione che crea 100 quadrati

// function box100(){
// const createBox = document.querySelector('.box-container');
// for( i = 1; i<= 100; i++){
//     // myValue = i;
//     const newBox = document.createElement('div');
//     newBox.classList.add('box-100');
//     const textInside = document.createElement('span');
// textInside.append(myValue);
//     newBox.append(textInside);
//     createBox.append(newBox);
    
// }
// }
// function box81(){
// const createBox = document.querySelector('.box-container');
// for( i = 1; i<= 81; i++){
//     // myValue = i;
//     const newBox = document.createElement('div');
//     newBox.classList.add('box-81');
//     const textInside = document.createElement('span');
        // textInside.append(myValue);
    // newBox.append(textInside);
//     createBox.append(newBox);
    
// }
// }
// function box49(){
const createBox = document.querySelector('.box-container');
for( i = 1; i<= 49; i++){
    myValue = i;
    const newBox = document.createElement('div');
    newBox.classList.add('box-49');
    const textInside = document.createElement('span');
    textInside.append(myValue);
    newBox.append(textInside);
    createBox.append(newBox);

}
// }