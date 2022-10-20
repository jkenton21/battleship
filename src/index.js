//Battleship JS Index File

import { createPlayer } from './ship';
import { genPlacementBoard, addButtonFunctionality, removePlacementBoard, genGameBoard, addShipsToPlayerBoard, replayButtonFunctionality } from './dom';
//import './style.css';

replayButtonFunctionality();
genPlacementBoard();
addButtonFunctionality();