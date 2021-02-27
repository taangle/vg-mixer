import { games } from "../domain/games.js";

export function newGame() {
    // pick two games
    let game0 = choose(games);
    let game1 = choose(games);
    while (game0 === game1) game1 = choose(games);

    // pick a feature from each game
    let feature0 = choose(game0.features);
    let feature1 = choose(game1.features);
    while (feature0 === feature1) {
        if (game0.features.length > 1) {
            feature0 = choose(game0.features);
        }
        else {
            feature1 = choose(game1.features);
        }
    }

    return `A game with the ${feature0} from ${game0.name} and the ${feature1} from ${game1.name}.`;
}

function choose(arrToChooseFrom) {
    const index = Math.floor(Math.random() * arrToChooseFrom.length);
    return arrToChooseFrom[index];
}
