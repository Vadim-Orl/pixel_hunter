import { isGameModel } from "../types/type-guards.js";
import { CONSTANTS } from "./constants.js";
const INITIAL_GAME = Object.freeze({
    results: new Array(CONSTANTS.OPTION_GAME.MAX_QUESTIONS).fill(CONSTANTS.LIBRARY_TYPE_ANSWERS.unknown),
    level: CONSTANTS.OPTION_GAME.START_LEVEL,
    lives: CONSTANTS.OPTION_GAME.MAX_LIVES,
    time: CONSTANTS.OPTION_GAME.TIME_FOR_QUESTION,
    questions: CONSTANTS.OPTION_GAME.MAX_QUESTIONS
});
const resultGame = (game) => {
    if (game.results.length < CONSTANTS.OPTION_GAME.MAX_QUESTIONS) {
        return -1;
    }
    let summ = 0;
    game.results.forEach((element) => {
        summ += CONSTANTS.LIBRARY_ANSWER_POINT[element];
        element === CONSTANTS.LIBRARY_TYPE_ANSWERS.fast || element === CONSTANTS.LIBRARY_TYPE_ANSWERS.slow ? summ += 100 : summ;
    });
    summ += game.lives * CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint;
    return summ;
};
const changeLevel = (game, level) => {
    if (level < 0) {
        return game.level;
    }
    if (level >= game.questions) {
        return 0;
    }
    const newLevel = level;
    const newGame = { ...game, level: newLevel };
    return newGame;
};
const decLives = (game) => {
    if (game.lives < 1) {
        return new Error('Error lives < 1');
    }
    console.log(game);
    const newLives = game.lives - 1;
    console.log('hello ' + newLives);
    const newGame = { ...game, lives: newLives };
    return newGame;
};
const tick = (game) => {
    const newGame = { ...game };
    newGame.time -= 1;
    return newGame;
};
const answer = (game, isCorrectAnsw, timeAnswer) => {
    let newGame = JSON.parse(JSON.stringify(game));
    if (!isCorrectAnsw) {
        newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.wrong;
        const tmpNewGame = decLives(newGame);
        if (isGameModel(tmpNewGame)) {
            newGame = tmpNewGame;
        }
    }
    else {
        switch (true) {
            case (timeAnswer <= 3): {
                newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.fast;
                break;
            }
            case (timeAnswer > 5): {
                newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.slow;
                break;
            }
            default: {
                newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.correct;
            }
        }
    }
    return newGame;
};
export { INITIAL_GAME, changeLevel, decLives, tick, resultGame, answer };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Jpc25lc0Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsTUFBTSxZQUFZLEdBQWUsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztJQUNwRyxLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXO0lBQ3hDLEtBQUssRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVM7SUFDdEMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCO0lBQzdDLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWE7Q0FDL0MsQ0FBQyxDQUFDO0FBRUgsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFnQixFQUFVLEVBQUU7SUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtRQUN2QyxJQUFJLElBQUksU0FBUyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sS0FBSyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxJQUFJLE9BQU8sS0FBSyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFD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Q1IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztZQUMxRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUE7QUFFRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJ1dGlscy9iaXNuZXNGdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzR2FtZU1vZGVsIH0gZnJvbSBcIi4uL3R5cGVzL3R5cGUtZ3VhcmRzLmpzXCI7XG5pbXBvcnQgeyBJU3RhdGVHYW1lLCBUUmVzdWwgfSBmcm9tIFwiLi4vdHlwZXMvdHlwZXMuanNcIjtcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBJTklUSUFMX0dBTUU6IElTdGF0ZUdhbWUgPSBPYmplY3QuZnJlZXplKHtcbiAgcmVzdWx0czogbmV3IEFycmF5KENPTlNUQU5UUy5PUFRJT05fR0FNRS5NQVhfUVVFU1RJT05TKS5maWxsKENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy51bmtub3duKSxcbiAgbGV2ZWw6IENPTlNUQU5UUy5PUFRJT05fR0FNRS5TVEFSVF9MRVZFTCxcbiAgbGl2ZXM6IENPTlNUQU5UUy5PUFRJT05fR0FNRS5NQVhfTElWRVMsXG4gIHRpbWU6IENPTlNUQU5UUy5PUFRJT05fR0FNRS5USU1FX0ZPUl9RVUVTVElPTixcbiAgcXVlc3Rpb25zOiBDT05TVEFOVFMuT1BUSU9OX0dBTUUuTUFYX1FVRVNUSU9OU1xufSk7XG5cbmNvbnN0IHJlc3VsdEdhbWUgPSAoZ2FtZTogSVN0YXRlR2FtZSk6IG51bWJlciA9PiB7XG4gIGlmIChnYW1lLnJlc3VsdHMubGVuZ3RoIDwgQ09OU1RBTlRTLk9QVElPTl9HQU1FLk1BWF9RVUVTVElPTlMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGxldCBzdW1tID0gMDtcbiAgZ2FtZS5yZXN1bHRzLmZvckVhY2goKGVsZW1lbnQ6IFRSZXN1bCkgPT4ge1xuICAgIHN1bW0gKz0gQ09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5UW2VsZW1lbnRdO1xuICAgIGVsZW1lbnQgPT09IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy5mYXN0IHx8IGVsZW1lbnQgPT09IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy5zbG93ID8gc3VtbSArPSAxMDAgOiBzdW1tO1xuICB9KTtcblxuICBzdW1tICs9IGdhbWUubGl2ZXMgKiBDT05TVEFOVFMuTElCUkFSWV9BTlNXRVJfUE9JTlQuYmFsYW5jZUxpdmVQb2ludDtcblxuICByZXR1cm4gc3VtbTtcbn1cblxuXG5jb25zdCBjaGFuZ2VMZXZlbCA9IChnYW1lOiBJU3RhdGVHYW1lLCBsZXZlbDogbnVtYmVyKTogbnVtYmVyIHwgSVN0YXRlR2FtZSA9PiB7XG4gIGlmIChsZXZlbCA8IDApIHtcbiAgICByZXR1cm4gZ2FtZS5sZXZlbDtcbiAgfVxuXG4gIGlmIChsZXZlbCA+PSBnYW1lLnF1ZXN0aW9ucykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29uc3QgbmV3TGV2ZWwgPSBsZXZlbDtcblxuICBjb25zdCBuZXdHYW1lID0geyAuLi5nYW1lLCBsZXZlbDogbmV3TGV2ZWwgfTtcbiAgcmV0dXJuIG5ld0dhbWU7XG59XG5cbmNvbnN0IGRlY0xpdmVzID0gKGdhbWU6IElTdGF0ZUdhbWUpOiBJU3RhdGVHYW1lIHwgRXJyb3IgPT4ge1xuICBpZiAoZ2FtZS5saXZlcyA8IDEpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdFcnJvciBsaXZlcyA8IDEnKVxuICB9XG4gIGNvbnNvbGUubG9nKGdhbWUpXG4gIGNvbnN0IG5ld0xpdmVzID0gZ2FtZS5saXZlcyAtIDE7XG4gIGNvbnNvbGUubG9nKCdoZWxsbyAnICsgbmV3TGl2ZXMpXG5cbiAgY29uc3QgbmV3R2FtZSA9IHsgLi4uZ2FtZSwgbGl2ZXM6IG5ld0xpdmVzIH07XG4gIHJldHVybiBuZXdHYW1lO1xufVxuXG5jb25zdCB0aWNrID0gKGdhbWU6IElTdGF0ZUdhbWUpID0+IHtcbiAgY29uc3QgbmV3R2FtZSA9IHsgLi4uZ2FtZSB9O1xuICBuZXdHYW1lLnRpbWUgLT0gMTtcbiAgcmV0dXJuIG5ld0dhbWU7XG59XG5cbmNvbnN0IGFuc3dlciA9IChnYW1lOiBJU3RhdGVHYW1lLCBpc0NvcnJlY3RBbnN3OiBib29sZWFuLCB0aW1lQW5zd2VyOiBudW1iZXIpID0+IHtcbiAgbGV0IG5ld0dhbWU6IElTdGF0ZUdhbWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWUpKVxuXG4gIGlmICghaXNDb3JyZWN0QW5zdykge1xuICAgIG5ld0dhbWUucmVzdWx0c1tuZXdHYW1lLmxldmVsXSA9IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy53cm9uZztcblxuICAgIGNvbnN0IHRtcE5ld0dhbWU6IEVycm9yIHwgSVN0YXRlR2FtZSA9IGRlY0xpdmVzKG5ld0dhbWUpO1xuXG4gICAgaWYgKGlzR2FtZU1vZGVsKHRtcE5ld0dhbWUpKXtcbiAgICAgIG5ld0dhbWUgPSB0bXBOZXdHYW1lXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSAodGltZUFuc3dlciA8PSAzKToge1xuICAgICAgICBuZXdHYW1lLnJlc3VsdHNbbmV3R2FtZS5sZXZlbF0gPSBDT05TVEFOVFMuTElCUkFSWV9UWVBFX0FOU1dFUlMuZmFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICh0aW1lQW5zd2VyID4gNSk6IHtcbiAgICAgICAgbmV3R2FtZS5yZXN1bHRzW25ld0dhbWUubGV2ZWxdID0gQ09OU1RBTlRTLkxJQlJBUllfVFlQRV9BTlNXRVJTLnNsb3c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBuZXdHYW1lLnJlc3VsdHNbbmV3R2FtZS5sZXZlbF0gPSBDT05TVEFOVFMuTElCUkFSWV9UWVBFX0FOU1dFUlMuY29ycmVjdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3R2FtZTtcbn1cblxuZXhwb3J0IHsgSU5JVElBTF9HQU1FLCBjaGFuZ2VMZXZlbCwgZGVjTGl2ZXMsIHRpY2ssIHJlc3VsdEdhbWUsIGFuc3dlciB9O1xuXG4iXX0=