class Api::V1::JokeContentsController < ApplicationController
  before_action :set_joke_content, only: [:show, :update, :destroy]

  # GET /joke_contents
  # GET /joke_contents.json
  def index
    @joke_contents = JokeContent.all

    render json: @joke_contents
  end

  # GET /joke_contents/1
  # GET /joke_contents/1.json
  def show
    render json: @joke_content
  end

  # POST /joke_contents
  # POST /joke_contents.json
  def create
    @joke_content = JokeContent.new(joke_content_params)

    if @joke_content.save
      render json: @joke_content, status: :created, location: @joke_content
    else
      render json: @joke_content.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /joke_contents/1
  # PATCH/PUT /joke_contents/1.json
  def update
    @joke_content = JokeContent.find(params[:id])

    if @joke_content.update(joke_content_params)
      head :no_content
    else
      render json: @joke_content.errors, status: :unprocessable_entity
    end
  end

  # DELETE /joke_contents/1
  # DELETE /joke_contents/1.json
  def destroy
    @joke_content.destroy

    head :no_content
  end

  private

    def set_joke_content
      @joke_content = JokeContent.find(params[:id])
    end

    def joke_content_params
      params.require(:joke_content).permit(:title, :content)
    end
end
