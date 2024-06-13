let toDO = async () => {
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Narendra",
      body: "This is from Narendra",
      UserId: "4",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let response = await p.json();
  let data = await response;
  console.log(data);
};

toDO();
