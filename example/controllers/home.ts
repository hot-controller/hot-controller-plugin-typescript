import { Controller, Route } from 'hot-controller';

@Controller('/home')
export default class HomeController {
  @Route.GET('/')
  index(req, res) {
    // index
    res.send('Welcome home');
  }
}
