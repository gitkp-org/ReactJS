export const fetchGetMod = async url => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export const fetchPostMod = async (url, body) => {
  body.id = 123;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  const data = await resp.json();
  return data;
};
