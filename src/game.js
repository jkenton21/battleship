// Battleship JS file - Game Loop
import { createPlayer } from './ship';
import { coordsStorage, genGameBoard, removePlacementBoard, addShipsToPlayerBoard } from './dom';



const createPlayerHuman = function() {
    const shipLength = [5, 4, 3, 2, 2];
    const coords = coordsStorage.getCoords();
    const orientations = coordsStorage.getOrientations();
    const player = createPlayer('human');
    for (let i = 0; i < coords.length; i++) {
        player.storeShip(shipLength[i], coords[i], orientations[i]);
    }
    return player;
};

const createPlayerComputer = function() {
    const computer = createPlayer('computer');
    computer.AIGenPlacements();
    return computer;
};

export const playerStorage = (() => {
    const players = [];
    const storePlayer = (player) => {
      players.push(player);
    };
    const getPlayers = () => players;
    const clearPlayers = () => {
      while (players.length > 0) players.pop();
    }
    return {
      storePlayer,
      getPlayers,
      clearPlayers
    };
  })();

export const startGame = function() {
    let player = createPlayerHuman();
    let computer = createPlayerComputer();
    playerStorage.storePlayer(player);
    playerStorage.storePlayer(computer);
    removePlacementBoard();
    genGameBoard();
    addShipsToPlayerBoard(player.getNumericalShipCoords());
};