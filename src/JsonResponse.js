const test = async () => {
  let res = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=82f3d3f42e2d415ebedbcef46a5e284f"
  );
  if (!response.ok) throw new Error(response.statusText);
  let json = await res.json();
  return json;
};
console.log(test());
