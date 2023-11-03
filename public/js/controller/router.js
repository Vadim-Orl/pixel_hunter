import utils from '../utils/utils.js';
import IntroView from '../view/intro-view.js';
import GreetingView from '../view/Greeting-view.js';
import RulesView from '../view/Rules-view.js';
import QuestModel from '../model/quest-model.js';
import FinelyStatisticView from '../view/FinelyStatistic-view.js';
import GameScreen from '../model/game-screen.js';
import HeaderView from '../view/Header-view.js';
import SplashScreen from '../view/Splash-view.js';
import ErrorView from '../view/Error-view.js';
import Loader from '../utils/loader.js';

let questData;
let questResult;

export default class Router {
  static start() {
    Router.load().catch(Router.showError);
  }

  static async load() {
    const splash = new SplashScreen();
    utils.showScreen(utils.newCentralContainer(splash));
    splash.start();
    try {
      questData = await Loader.testData();
      Router.showWellcom();
    } catch (e) {
      Router.showError(e);
    } finally {
      splash.stop()
    }
  }

  static showWellcom() {
    const introScreen = new IntroView()
    utils.showScreen(utils.newCentralContainer(introScreen))
  }

  static showGreeting() {
    const header = new HeaderView();
    const greetingScreen = new GreetingView();

    utils.showScreen(utils.newCentralContainer(header, greetingScreen));
  }

  static showRules() {
    const header = new HeaderView();
    const rulesScreen = new RulesView();

    utils.showScreen(utils.newCentralContainer(header, rulesScreen));
  }

  static showGame(namePlayel) {
    const gameModel = new QuestModel(questData, namePlayel);
    const gameScreen = new GameScreen(gameModel);

    utils.showScreen(utils.newCentralContainer(gameScreen));
    gameScreen.startGame();
  }

  static async showResult(game, isFail) {
    const header = new HeaderView();
    const finelStatistic = new FinelyStatisticView(game, isFail);

    utils.showScreen(utils.newCentralContainer(header, finelStatistic));
    try {
      questResult = await Loader.loadResult();
      finelStatistic.showScores(questResult);
    } catch (e) {
      Router.showError(e);
    }

    Loader.saveResults(game);
  }

  static showError(error) {
    const errorScreen = new ErrorView(error);
    utils.showScreen(utils.newCentralContainer(errorScreen));
  }
}

//# sourceMappingURL=router.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250cm9sbGVyL3JvdXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuaW1wb3J0IEludHJvVmlldyBmcm9tICcuLi92aWV3L2ludHJvLXZpZXcuanMnO1xuaW1wb3J0IEdyZWV0aW5nVmlldyBmcm9tICcuLi92aWV3L0dyZWV0aW5nLXZpZXcuanMnO1xuaW1wb3J0IFJ1bGVzVmlldyBmcm9tICcuLi92aWV3L1J1bGVzLXZpZXcuanMnO1xuaW1wb3J0IFF1ZXN0TW9kZWwgZnJvbSAnLi4vbW9kZWwvcXVlc3QtbW9kZWwuanMnO1xuaW1wb3J0IEZpbmVseVN0YXRpc3RpY1ZpZXcgZnJvbSAnLi4vdmlldy9GaW5lbHlTdGF0aXN0aWMtdmlldy5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuLi9tb2RlbC9nYW1lLXNjcmVlbi5qcyc7XG5pbXBvcnQgSGVhZGVyVmlldyBmcm9tICcuLi92aWV3L0hlYWRlci12aWV3LmpzJztcbmltcG9ydCBTcGxhc2hTY3JlZW4gZnJvbSAnLi4vdmlldy9TcGxhc2gtdmlldy5qcyc7XG5pbXBvcnQgRXJyb3JWaWV3IGZyb20gJy4uL3ZpZXcvRXJyb3Itdmlldy5qcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL3V0aWxzL2xvYWRlci5qcyc7XG5cbmxldCBxdWVzdERhdGE7XG5sZXQgcXVlc3RSZXN1bHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG4gIHN0YXRpYyBzdGFydCgpIHtcbiAgICBSb3V0ZXIubG9hZCgpLmNhdGNoKFJvdXRlci5zaG93RXJyb3IpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGxvYWQoKSB7XG4gICAgY29uc3Qgc3BsYXNoID0gbmV3IFNwbGFzaFNjcmVlbigpO1xuICAgIHV0aWxzLnNob3dTY3JlZW4odXRpbHMubmV3Q2VudHJhbENvbnRhaW5lcihzcGxhc2gpKTtcbiAgICBzcGxhc2guc3RhcnQoKTtcbiAgICB0cnkge1xuICAgICAgcXVlc3REYXRhID0gYXdhaXQgTG9hZGVyLnRlc3REYXRhKCk7XG4gICAgICBSb3V0ZXIuc2hvd1dlbGxjb20oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBSb3V0ZXIuc2hvd0Vycm9yKGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzcGxhc2guc3RvcCgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNob3dXZWxsY29tKCkge1xuICAgIGNvbnN0IGludHJvU2NyZWVuID0gbmV3IEludHJvVmlldygpXG4gICAgdXRpbHMuc2hvd1NjcmVlbih1dGlscy5uZXdDZW50cmFsQ29udGFpbmVyKGludHJvU2NyZWVuKSlcbiAgfVxuXG4gIHN0YXRpYyBzaG93R3JlZXRpbmcoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlclZpZXcoKTtcbiAgICBjb25zdCBncmVldGluZ1NjcmVlbiA9IG5ldyBHcmVldGluZ1ZpZXcoKTtcblxuICAgIHV0aWxzLnNob3dTY3JlZW4odXRpbHMubmV3Q2VudHJhbENvbnRhaW5lcihoZWFkZXIsIGdyZWV0aW5nU2NyZWVuKSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd1J1bGVzKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXJWaWV3KCk7XG4gICAgY29uc3QgcnVsZXNTY3JlZW4gPSBuZXcgUnVsZXNWaWV3KCk7XG5cbiAgICB1dGlscy5zaG93U2NyZWVuKHV0aWxzLm5ld0NlbnRyYWxDb250YWluZXIoaGVhZGVyLCBydWxlc1NjcmVlbikpO1xuICB9XG5cbiAgc3RhdGljIHNob3dHYW1lKG5hbWVQbGF5ZWwpIHtcbiAgICBjb25zdCBnYW1lTW9kZWwgPSBuZXcgUXVlc3RNb2RlbChxdWVzdERhdGEsIG5hbWVQbGF5ZWwpO1xuICAgIGNvbnN0IGdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbihnYW1lTW9kZWwpO1xuXG4gICAgdXRpbHMuc2hvd1NjcmVlbih1dGlscy5uZXdDZW50cmFsQ29udGFpbmVyKGdhbWVTY3JlZW4pKTtcbiAgICBnYW1lU2NyZWVuLnN0YXJ0R2FtZSgpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNob3dSZXN1bHQoZ2FtZSwgaXNGYWlsKSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlclZpZXcoKTtcbiAgICBjb25zdCBmaW5lbFN0YXRpc3RpYyA9IG5ldyBGaW5lbHlTdGF0aXN0aWNWaWV3KGdhbWUsIGlzRmFpbCk7XG5cbiAgICB1dGlscy5zaG93U2NyZWVuKHV0aWxzLm5ld0NlbnRyYWxDb250YWluZXIoaGVhZGVyLCBmaW5lbFN0YXRpc3RpYykpO1xuICAgIHRyeSB7XG4gICAgICBxdWVzdFJlc3VsdCA9IGF3YWl0IExvYWRlci5sb2FkUmVzdWx0KCk7XG4gICAgICBmaW5lbFN0YXRpc3RpYy5zaG93U2NvcmVzKHF1ZXN0UmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBSb3V0ZXIuc2hvd0Vycm9yKGUpO1xuICAgIH1cblxuICAgIExvYWRlci5zYXZlUmVzdWx0cyhnYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93RXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvclNjcmVlbiA9IG5ldyBFcnJvclZpZXcoZXJyb3IpO1xuICAgIHV0aWxzLnNob3dTY3JlZW4odXRpbHMubmV3Q2VudHJhbENvbnRhaW5lcihlcnJvclNjcmVlbikpO1xuICB9XG59XG4iXSwiZmlsZSI6InJvdXRlci5qcyJ9
