App.TodosRoute = Ember.Route.extend(model: ->
  App.Todo.find()
)