const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];

const rowLength = board.length;
const colLength = board[0].length;

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
function moveRight() {
	if (col < colLength) {
		col++;
		moves.push(board[row][col]);
	} else {
		console.log("Invalid Move");
	}
}

function moveLeft() {
	if (col < colLength) {
	col--;
	moves.push(board[row][col]);
	} else {
		console.log("Invalid Move");
	}
}

function moveUp() {
	if (row < rowLength) {
	row--;
	moves.push(board[row][col]);
	} else {
		console.log("Invalid Move");
	}
}

function moveDown() {
	if (row < rowLength) {
	row++;
	moves.push(board[row][col]);
	} else {
		console.log("Invalid Move");
	}
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E



console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
