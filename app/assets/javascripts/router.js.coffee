App.Router.map ->
  @resource "todos",
  {path: "/"},
  ->
    # additional child routes
    @route "active"
    @route "completed"