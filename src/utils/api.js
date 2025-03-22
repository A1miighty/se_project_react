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
  const deleteURL = `${baseURL}/items/${itemId}`;
  console.log("Attempting to delete at URL:", deleteURL);
  console.log("ItemId received:", itemId);
  console.log("ItemId type:", typeof itemId); // Add this line
  return request(deleteURL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { getItems, addItem, deleteItem, request };
