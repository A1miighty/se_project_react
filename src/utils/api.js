const baseURL = "http://localhost:3001";

function checkResponse(res) {
  return res
    .text() // Read response as text first
    .then((text) => {
      try {
        return JSON.parse(text); // Try parsing JSON
      } catch {
        return Promise.reject(`Invalid JSON response: ${text}`);
      }
    })
    .catch((err) => Promise.reject(`Error: ${err}`));
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
  });
}

function deleteItem(itemId) {
  return request(`${baseURL}/items/${itemId}`, {
    method: "DELETE",
  });
}

export { getItems, addItem, deleteItem };
