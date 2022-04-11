//Battleship JS Index File

//Ship factory function
function ship(type, length, coordinate) {
        this.type = type;
        this.length = length;
        this.hitsArray = hit(this.length);
        this.hit = function (number) {
            this.hitsArray[number] = 'X';
            this.isSunk = isSunk(this.hitsArray);
        };
        this.isSunk = false;
}

//Hit function to create ship array
function hit(length) {
    const hitsArray = [];
    for (let i =0; i < length; i++) {
        hitsArray[i] = ``;
    }
    return hitsArray;
}

//isSunk function to determine when a ship is sunk
function isSunk() {
    if (hitsArray.every((element) => {
        return element === 'X';
    })
    ) {
        return true;
    } else {
        return false;
    }
}

export default {isSunk, ship,}

