notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :user_id, :notebook_id, :title, :content
  end
end
