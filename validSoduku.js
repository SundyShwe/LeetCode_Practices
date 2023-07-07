/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        let col = new Set();
        let box = new Set();
    
        for (let j = 0; j < 9; j++) {
          let row_item = board[i][j];
          let col_item = board[j][i];
          let subbox = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
          
          
          if(row_item != '.' && row_item >= 1 && row_item <= 9){
            if (row.has(row_item)) return false;
            row.add(row_item);
          }
          if(col_item != '.' && col_item >= 1 && col_item <= 9){
            if (col.has(col_item)) return false;
            col.add(col_item);
          }
          if(subbox != '.' && subbox >= 1 && subbox <= 9){
            if (box.has(subbox)) return false;
            box.add(subbox);
          } 
        }
      }
      return true;
}

const board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const board3 = [
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]
    ]

console.log(isValidSudoku(board3));