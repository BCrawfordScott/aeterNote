class Api::TagsController < ApplicationController


def index
  
end

def show
end

def create
end

def update
end

def destroy
end



private
def tag_params
  params.require(:tag).permit(:label, :note_id)
end




end
