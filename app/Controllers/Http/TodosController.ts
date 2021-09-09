// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TodosController {

  public async store({request}) {

    return request.only('title');

  }

}

