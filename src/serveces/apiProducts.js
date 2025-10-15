const URL = "http://localhost:9000";
const URL_BLOG = "http://localhost:9090";
const URL_COMMENT = "http://localhost:9050";
export async function fetchDataProducts() {
  const res = await fetch(`${URL}/Clothing`);
  const data = await res.json();
  return data;
}

export async function fetchOneDataProduct(id) {
  const res = await fetch(`${URL}/Clothing/${id}`);
  const data = await res.json();
  return data;
}

export async function fetchFillterDataProduct(type) {
  try {
    const res = await fetch(
      `${URL}/Clothing${type == "all" ? "" : "?type=" + type}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function fetchDataArticles() {
  const res = await fetch(`${URL_BLOG}/Blog`);
  const data = await res.json();
  return data;
}

export async function fetchDataArticle(id) {
  const res = await fetch(`${URL_BLOG}/Blog/${id}`);
  const data = await res.json();
  return data;
}

export async function setComments(newComment) {
  const res = await fetch(`${URL_COMMENT}/Comments`, {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
