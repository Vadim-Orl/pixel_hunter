import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js';

const statsBonusHtml = {
  bonusSpeed: (countFast) => {
    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${countFast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.fast}</td>
              <td class="result__total">${countFast * CONSTANTS.LIBRARY_ANSWER_POINT.fast}</td>
            </tr>`
  },
  bonusLives: (coutLives) => {
    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${coutLives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
              <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint}</td>
              <td class="result__total">${coutLives * CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint}</td>
            </tr>`
  },
  fineSlow: (countSlow) => {
    return ` <tr>
                <td></td>
                <td class="result__extra">Штраф за медлительность:</td>
                <td class="result__extra">${countSlow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.slow}</td>
                <td class="result__total">${countSlow * CONSTANTS.LIBRARY_ANSWER_POINT.slow}</td>
              </tr>`
  },
}

export default class FinelyStatisticView extends AbstractView {
  constructor(game, isFail) {
    super('div', { classes: ['result'] })

    this.isFail = isFail;
    this.game = game;
    this.setStats = game.state.results;
  }

  get template() {
    if (this.isFail) {
      return `
      <h1>${this.game.playerName}, Вы проиграли!</h1>
      <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td>
          <ul class="stats">
          ${this.game.state.results.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    <div class = "scoreBoard"><p> Загрузка результатов... </p></div>
      `
    }

    const countFast = (this.setStats.filter((el) => el === CONSTANTS.LIBRARY_TYPE_ANSWERS.fast)).length
    console.log(countFast)

    const countSlow = (this.setStats.filter((el) => el === CONSTANTS.LIBRARY_TYPE_ANSWERS.slow)).length
    console.log(countSlow)

    const countCorrect = (this.setStats.filter((el) => el !== CONSTANTS.LIBRARY_TYPE_ANSWERS.wrong && el !== CONSTANTS.LIBRARY_TYPE_ANSWERS.unknown)).length
    console.dir(countCorrect)

    return `

    <h1>${this.game.playerName}, Вы победили!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${this.setStats.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}
          </ul>
        </td>
        <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.correct}</td>
        <td class="result__total">${countCorrect * CONSTANTS.LIBRARY_ANSWER_POINT.correct}</td>
      </tr>
         ${countFast ? statsBonusHtml.bonusSpeed(countFast) : ''}
         ${countSlow ? statsBonusHtml.fineSlow(countSlow) : ''}
         ${this.game.getLives() ? statsBonusHtml.bonusLives(this.game.getLives()) : ''}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.game.resultPoints}</td>
      </tr>
    </table>
    <div class = "scoreBoard"><p> Загрузка результатов... </p></div>
    `
  }

  bind() {
    this._scoreBoardContainer = this.element.querySelector('div.scoreBoard')
  }

  showScores(scores) {
    this._scoreBoardContainer.innerHTML = `
    <table class="result__table">
      ${scores.reverse().map((it, i) => `
      <tr>
        <td class="result__number">${i + 2}.</td>
        <td>
          <ul class="stats">
          ${it.results.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}
          </ul>
        </td>
        <td class="result__total">${it.resultPoints}</td>
        <td class="result__total  result__total--final">${!it.isFail ? 'WIN' : 'FAIL'}</td>
        </tr>
        `).join('')}

    </table>`
  }
}
