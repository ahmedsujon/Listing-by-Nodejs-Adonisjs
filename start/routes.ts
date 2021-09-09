
import Route from '@ioc:Adonis/Core/Route'


Route.get('/', 'HomeController.index');
Route.get('/about', 'HomeController.about');

Route.post('/todo', 'TodosController.store');
