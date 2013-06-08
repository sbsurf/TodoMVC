App.SearchView = Ember.TextField.extend(Ember.TargetActionSupport, {
    valueBinding: 'App.SearchController.searchText',
    insertNewline: function() {
        this.triggerAction();
    }
});