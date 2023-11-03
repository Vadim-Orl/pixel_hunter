import AbstractView from './Abstract-view.js'

export default class StatisticView extends AbstractView {
  constructor(state) {
    super('div', { classes: ['stats'] })

    this.state = state;
  }

  get template() {
    return `
            <ul class="stats">
            ${this.state.results.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}

    </ul>
  `
  }
}

//# sourceMappingURL=Statistic-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L1N0YXRpc3RpYy12aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3Ioc3RhdGUpIHtcbiAgICBzdXBlcignZGl2JywgeyBjbGFzc2VzOiBbJ3N0YXRzJ10gfSlcblxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICR7dGhpcy5zdGF0ZS5yZXN1bHRzLm1hcCgoZWwpID0+IHtcbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tJHtlbH1cIj48L2xpPmBcbiAgfSl9XG5cbiAgICA8L3VsPlxuICBgXG4gIH1cbn1cbiJdLCJmaWxlIjoiU3RhdGlzdGljLXZpZXcuanMifQ==
