const table = document.querySelector('#table');

let gridDivEl = [];




for(let i=0 ; i<256 ; i++){
    const div = document.createElement('div');
    div.classList.add('grid');
    table.appendChild(div);
    div.style.flex = `1 0 6.25%`;
    //push to the array
    gridDivEl.push(div);
}

gridDivEl.forEach(div => div.addEventListener('mouseover', function(){
    let runDCR = Math.floor(Math.random() * 255);
    let runDCG = Math.floor(Math.random() * 255);
    let runDCB = Math.floor(Math.random() * 255);
    div.style.backgroundColor =`rgb(${runDCR}, ${runDCG}, ${runDCB})`;
}))

function gridSetUp(row , column){
    table.textContent='';
    let numOfDivs = row * column ;
    let widthOfDivs = 100/row;

    let gridDivEl = [];

    for(let i=0 ; i<numOfDivs ; i++){
        const div = document.createElement('div');
        div.classList.add('grid');
        table.appendChild(div);
        div.style.flex = `1 0 ${widthOfDivs}%`;
        //push to the array
        gridDivEl.push(div);
    }
    gridDivEl.forEach(div => div.addEventListener('mouseover', function(){
        let runDCR = Math.floor(Math.random() * 255);
        let runDCG = Math.floor(Math.random() * 255);
        let runDCB = Math.floor(Math.random() * 255);
        div.style.backgroundColor =`rgb(${runDCR}, ${runDCG}, ${runDCB})`;
    }))
}


const GridSet = document.querySelector('.gridSet');

GridSet.addEventListener('click', () =>{
    // Prompt the user for the number of squares in a row
    let gridRow = prompt('Please enter the number of squares you want in a row:');

    // Prompt the user for the number of squares in a column
    let gridColumn = prompt('Please enter the number of squares you want in a column:');

    gridRow = Number(gridRow);
    gridColumn = Number(gridColumn);

   // Check if the inputs are valid numbers and within the specified range
    if (isNaN(gridRow) || isNaN(gridColumn) || gridRow > 100 || gridColumn > 100) {
        alert('Invalid input. Please enter a number less than or equal to 100 for both row and column.');
    } else {
        console.log(`You have entered ${gridRow} squares for the row and ${gridColumn} squares for the column.`);
        gridSetUp(gridRow, gridColumn)

    }

})