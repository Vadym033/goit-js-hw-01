'use strict';

function getElementWidth(content, padding, border) {
  let result =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;
  console.log(result);
}

let content = '50px';
let padding = '8px';
let border = '4px';

getElementWidth(content, padding, border);

content = '60px';
padding = '12px';
border = '8.5px';

getElementWidth(content, padding, border);

content = '200px';
padding = '0px';
border = '0px';

getElementWidth(content, padding, border);

/* console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200 */
