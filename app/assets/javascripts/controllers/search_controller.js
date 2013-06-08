App.SearchController = Ember.ObjectController.create({
    searchText: '',
    search: function () {
        console.log('search for %@'.fmt(this.get('searchText')));

//        console.log(this.get('store'));
//        App.Store.find(App.Todo, {title: 'test'});
    }
});