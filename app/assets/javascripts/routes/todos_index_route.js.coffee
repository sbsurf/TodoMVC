App.TodosIndexRoute = Ember.Route.extend(model: ->
  App.Todo.find()
)