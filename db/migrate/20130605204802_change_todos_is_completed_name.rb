class ChangeTodosIsCompletedName < ActiveRecord::Migration
  def change
    rename_column :todos, :isCompleted, :is_completed
  end
end
