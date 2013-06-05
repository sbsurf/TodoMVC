App.TodosCompletedRoute = App.TodosActiveRoute.extend(model: ->
  App.Todo.filter (todo) ->
    true  if todo.get("isCompleted")
)