App.EditTodoView = Ember.TextField.extend({
    classNames: ['edit'],

    insertNewline: function () {
        //on Enter press
        this.get('controller').acceptChanges();
    },

    focusOut: function () {
        //on lost focus
        this.get('controller').acceptChanges();
    },

    didInsertElement: function () {
        //when input (textfield) is inserted into page
        this.$().focus();
    }
});