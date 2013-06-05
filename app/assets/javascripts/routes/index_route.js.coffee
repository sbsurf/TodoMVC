App.IndexRoute = Ember.Route.extend {
  redirect: ->
    this.transitionTo('todos');
}
