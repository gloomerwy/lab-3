// Define the number of rows
const numRows = 5;
// Loop through each row
for (let i = 1; i <= numRows; i++) {
let row = '';
// Add "1"s to the row based on the row number
for (let j = 0; j < i ; j++) {
row += '1 ';
}
// Output the row
console.log(row);
}