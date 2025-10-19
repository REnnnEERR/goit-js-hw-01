function getElementWidth(conten, padding, border) {
    const contenn = Number.parseFloat(conten);
    const paddingn = Number.parseFloat(padding);
    const bordern = Number.parseFloat(border);

    const borderBox = contenn + (paddingn * 2) + (bordern * 2) ;

    return `${borderBox}`;
    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
    