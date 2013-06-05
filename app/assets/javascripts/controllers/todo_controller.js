App.TodoController = Ember.ObjectController.extend({
    isCompleted: function (key, value) {
        var model = this.get('model');

        if (value === undefined) {
            //getter:
            return model.get('isCompleted');
        }
        else {
            //setter:
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted'),
//    The property method defines the function as a computed property, and defines its dependencies.

    isEditing: false,

    editTodo: function () {
        this.set('isEditing', true);
    },

    acceptChanges: function () {
        this.set('isEditing', false);
        this.get('model').save();
    },

    removeTodo: function () {
        var model = this.get('model');
        model.deleteRecord();
        model.save();
    }
});