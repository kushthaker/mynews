json.array!(@articles) do |article|
  json.extract! article, :article_type, :content, :url, :user_id
end

