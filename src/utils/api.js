const baseURL = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseURL}/items`);
}

function addItem(item) {
  return request(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((res) => res.json())
    .then((data) => ({
      _id: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      weather: data.weather,
    }));
}

function deleteItem(itemId) {
  return request(`${baseURL}/items/${itemId}`, {
    method: "DELETE",
  });
}

export { getItems, addItem, deleteItem };
