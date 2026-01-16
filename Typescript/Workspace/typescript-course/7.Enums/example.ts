// Numerical Enums
enum Direction{
    Up,
    Down,
    Left,
    Right   

}

function move(direction: Direction){
    console.log(`Moving in direction:   ${Direction[direction].toLowerCase()}`);
}

move(Direction.Up);