class Api::V1::TodosController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  respond_to :json

  def index
    respond_with Todo.all
  end

  def show
    respond_with @todo
  end

  def create
    todo = Todo.new

    if todo.update_attributes(todo_params)
      respond_with todo, :location => nil, status => :created
    else
      respond_with todo.errors, status => :unprocessable_entity
    end
  end

  def update
    if @todo.update_attributes(todo_params)
      respond_with @todo, :location => nil, status: :ok
    else
      respond_with @contact.errors, status => :unprocessable_entity
    end
  end

  def destroy
    @todo.destroy
    respond_with :status => :ok
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @todo = Todo.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def todo_params
    params.require(:todo).permit(:title, :is_completed)
  end
end
