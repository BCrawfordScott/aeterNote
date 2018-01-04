class Api::NotebooksController < ApplicationController

  before_action :require_logged_in
  before_action :proper_ownership, except: [ :index ]

  def index
    @notebooks = Notebook.where(user_id: current_user.id)
  end

  def show
    @notebook = Notebook.find_by(id: params[:id])
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find_by(id: params[:id])
    if @notebook.update(notebook_params)
      render :show
    else
      reder json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find_by(id: params[:id])
    @track.destroy
    render :index
  end

  private

  def notebook_params
   params.require(:notebook).permit(:title)
  end

  def proper_ownership
   unless current_user.owns_notebook?(Notebook.find_by(id: params[:id]))
     return render json: ['Permission denied: you do not own these notebooks'], status: 401
   end
  end
end
