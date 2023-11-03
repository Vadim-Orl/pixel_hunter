import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js'
import Application from '../controller/router.js';

export default class RulesView extends AbstractView {
  constructor() {
    super('div', { classes: ['rules'] })
  }

  get template() {
    return `
             <h1 class="rules__title">Правила</h1>
             <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
               src="img/photo_icon.png" width="16" height="16"> или рисунок <img
               src="img/paint_icon.png" width="16" height="16" alt="">.<br>
               Фотографиями или рисунками могут быть оба изображения.<br>
               На каждую попытку отводится 30 секунд.<br>
               Ошибиться можно не более 3 раз.<br>
               <br>
               Готовы?
             </p>
             <form class="rules__form">
               <input class="rules__input" type="text" placeholder="Ваше Имя" required>
               <button class="rules__button  continue" type="submit" disabled>Go!</button>
             </form>
              `
  }

  onAnswer(inputName) {
    Application.showGame(inputName);
  }

  bind() {
    const rulesForm = this._element.querySelector('.rules__form');
    const inputName = rulesForm.querySelector('.rules__input')
    const btnSubmitForm = rulesForm.querySelector('button');

    const onNameInputValid = (evt) => {
      evt.stopPropagation();
      inputName.setCustomValidity('');

      if (inputName.value.length > CONSTANTS.OPTION_GAME.MAX_CHAR_NAME_AMOUNT) {
        inputName.setCustomValidity(`Имя не должно быть больше чем ${CONSTANTS.MAX_CHAR_NAME_AMOUNT} символов`);
      }

      if (inputName.value.length <= 0) {
        inputName.setCustomValidity('Заполните поле');
      }

      if (inputName.validity.customError) {
        inputName.style.outlineColor = 'red';
        btnSubmitForm.disabled = true;
      } else {
        inputName.style.outlineColor = '';
        btnSubmitForm.disabled = false;
      }

      inputName.reportValidity();
    }

    inputName.addEventListener('input', onNameInputValid)

    rulesForm.onsubmit = () => {
      return false
    }

    btnSubmitForm.addEventListener('click', () => {
      this.onAnswer(inputName.value)
    })
  }
}

//# sourceMappingURL=Rules-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L1J1bGVzLXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0VmlldyBmcm9tICcuL0Fic3RyYWN0LXZpZXcuanMnO1xuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL2NvbnRyb2xsZXIvcm91dGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZXNWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2RpdicsIHsgY2xhc3NlczogWydydWxlcyddIH0pXG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgICA8aDEgY2xhc3M9XCJydWxlc19fdGl0bGVcIj7Qn9GA0LDQstC40LvQsDwvaDE+XG4gICAgICAgICAgICAgPHAgY2xhc3M9XCJydWxlc19fZGVzY3JpcHRpb25cIj7Qo9Cz0LDQtNCw0LkgMTAg0YDQsNC3INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+IDxpbWdcbiAgICAgICAgICAgICAgIHNyYz1cImltZy9waG90b19pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPiDQuNC70Lgg0YDQuNGB0YPQvdC+0LogPGltZ1xuICAgICAgICAgICAgICAgc3JjPVwiaW1nL3BhaW50X2ljb24ucG5nXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgYWx0PVwiXCI+Ljxicj5cbiAgICAgICAgICAgICAgINCk0L7RgtC+0LPRgNCw0YTQuNGP0LzQuCDQuNC70Lgg0YDQuNGB0YPQvdC60LDQvNC4INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7QsdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8uPGJyPlxuICAgICAgICAgICAgICAg0J3QsCDQutCw0LbQtNGD0Y4g0L/QvtC/0YvRgtC60YMg0L7RgtCy0L7QtNC40YLRgdGPIDMwINGB0LXQutGD0L3QtC48YnI+XG4gICAgICAgICAgICAgICDQntGI0LjQsdC40YLRjNGB0Y8g0LzQvtC20L3QviDQvdC1INCx0L7Qu9C10LUgMyDRgNCw0LcuPGJyPlxuICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAg0JPQvtGC0L7QstGLP1xuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJ1bGVzX19mb3JtXCI+XG4gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJydWxlc19faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0JjQvNGPXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicnVsZXNfX2J1dHRvbiAgY29udGludWVcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ+R28hPC9idXR0b24+XG4gICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICBgXG4gIH1cblxuICBvbkFuc3dlcihpbnB1dE5hbWUpIHtcbiAgICBBcHBsaWNhdGlvbi5zaG93R2FtZShpbnB1dE5hbWUpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBydWxlc0Zvcm0gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ydWxlc19fZm9ybScpO1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IHJ1bGVzRm9ybS5xdWVyeVNlbGVjdG9yKCcucnVsZXNfX2lucHV0JylcbiAgICBjb25zdCBidG5TdWJtaXRGb3JtID0gcnVsZXNGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG4gICAgY29uc3Qgb25OYW1lSW5wdXRWYWxpZCA9IChldnQpID0+IHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlucHV0TmFtZS5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cbiAgICAgIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoID4gQ09OU1RBTlRTLk9QVElPTl9HQU1FLk1BWF9DSEFSX05BTUVfQU1PVU5UKSB7XG4gICAgICAgIGlucHV0TmFtZS5zZXRDdXN0b21WYWxpZGl0eShg0JjQvNGPINC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINCx0L7Qu9GM0YjQtSDRh9C10LwgJHtDT05TVEFOVFMuTUFYX0NIQVJfTkFNRV9BTU9VTlR9INGB0LjQvNCy0L7Qu9C+0LJgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPD0gMCkge1xuICAgICAgICBpbnB1dE5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5wdXROYW1lLnZhbGlkaXR5LmN1c3RvbUVycm9yKSB7XG4gICAgICAgIGlucHV0TmFtZS5zdHlsZS5vdXRsaW5lQ29sb3IgPSAncmVkJztcbiAgICAgICAgYnRuU3VibWl0Rm9ybS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dE5hbWUuc3R5bGUub3V0bGluZUNvbG9yID0gJyc7XG4gICAgICAgIGJ0blN1Ym1pdEZvcm0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXROYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25OYW1lSW5wdXRWYWxpZClcblxuICAgIHJ1bGVzRm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGJ0blN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uQW5zd2VyKGlucHV0TmFtZS52YWx1ZSlcbiAgICB9KVxuICB9XG59XG4iXSwiZmlsZSI6IlJ1bGVzLXZpZXcuanMifQ==
