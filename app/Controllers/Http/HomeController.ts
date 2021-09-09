import View from "@ioc:Adonis/Core/View"

export default class HomeController {

  public async index({view}) {

    return view.render('welcome')

  }

  public async about({view}) {

    return view.render('about')

  }

}
