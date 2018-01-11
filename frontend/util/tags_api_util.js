export const fetchTags = () => {
  return $.ajax({
    method: "GET",
    url: "api/Tags"
  });
};

export const fetchTag = id => {
  return $.ajax({
    method: "GET",
    url: `api/Tags/${id}`
  });
};

export const createTag = tag => {
  return $.ajax({
    method: "POST",
    url: "api/tags",
    data: { tag }
  });
};

export const updateTag = tag => {
  return $.ajax({
    method: "PATCH",
    url: `api/tags/${tag.id}`,
    data: { tag }
  });
};

export const deleteTag = tagId => {
  return $.ajax({
    method: "DELETE",
    url: `api/tags/${tagId}`
  });
};

export const addTagging = tagging => {
  return $.ajax({
    method: "POST",
    url: 'api/tags/add_tagging',
    data: { tagging }
  });
};

export const removeTagging = tagging => {
  return $.ajax({
    method: "DELETE",
    url: 'api/add_tagging',
    data: { tagging }
  });
};
