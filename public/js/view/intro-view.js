import AbstractView from './Abstract-view.js';
import Application from '../controller/router.js';

export default class IntroView extends AbstractView {
  constructor() {
    super('div', { classes: ['intro'] })
  }

  get template() {
    return ` <h1 class="intro__asterisk">*</h1>
              <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    `
  }

  onAnswer() {
    Application.showGreeting();
  }

  bind() {
    this._element.querySelector('.intro__asterisk').addEventListener('click', (evt) => {
      evt.preventDefault();
      this.onAnswer()
    })
  }
}

//# sourceMappingURL=intro-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L2ludHJvLXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0VmlldyBmcm9tICcuL0Fic3RyYWN0LXZpZXcuanMnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL2NvbnRyb2xsZXIvcm91dGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50cm9WaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2RpdicsIHsgY2xhc3NlczogWydpbnRybyddIH0pXG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGAgPGgxIGNsYXNzPVwiaW50cm9fX2FzdGVyaXNrXCI+KjwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm9fX21vdHRvXCI+PHN1cD4qPC9zdXA+INCt0YLQviDQvdC1INGE0L7RgtC+LiDQrdGC0L4g0YDQuNGB0YPQvdC+0Log0LzQsNGB0LvQvtC8INC90LjQtNC10YDQu9Cw0L3QtNGB0LrQvtCz0L4g0YXRg9C00L7QttC90LjQutCwLdGE0L7RgtC+0YDQtdCw0LvQuNGB0YLQsCBUamFsZiBTcGFybmFheS48L3A+XG4gICAgYFxuICB9XG5cbiAgb25BbnN3ZXIoKSB7XG4gICAgQXBwbGljYXRpb24uc2hvd0dyZWV0aW5nKCk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvX19hc3RlcmlzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm9uQW5zd2VyKClcbiAgICB9KVxuICB9XG59XG4iXSwiZmlsZSI6ImludHJvLXZpZXcuanMifQ==
