App.TodosController = Ember.ArrayController.extend({
    createTodo: function () {
        var title = this.get('newTitle');
        if (!title.trim()) {
            return;
        }

        var todo = App.Todo.createRecord({
            title: title,
            isCompleted: false
        });

        this.set('newTitle', '');

        todo.save();
    },

    remaining: function () {
        return this.filterProperty('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    completed: function () {
        return this.filterProperty('isCompleted', true).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),

    hasCompleted: function () {
        return this.get('completed') > 0;
    }.property('completed'),

    clearCompleted: function () {
        var completed = this.filterProperty('isCompleted', true);
        completed.invoke('deleteRecord');

        this.get('store').commit();
    },

    allAreDone: function (key, value) {
        if (value === undefined) {
            //getter
            return !!this.get('length') && this.everyProperty('isCompleted', true);
        }
        else {
            //setter
            this.setEach('isCompleted', value);
            this.get('store').save();
            return value;
        }
    }.property('@each.isCompleted')
});