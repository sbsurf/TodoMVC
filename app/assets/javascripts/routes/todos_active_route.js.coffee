App.TodosActiveRoute = Ember.Route.extend(
  model: ->
    App.Todo.filter (todo) ->
      true  unless todo.get("isCompleted")


  renderTemplate: (controller) ->
    @render "todos/index",
      controller: controller

)