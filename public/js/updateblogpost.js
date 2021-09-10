const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name").value.trim();
  const content = document.querySelector("#project-funding").value.trim();
  const summary = document.querySelector("#project-desc").value.trim();
  const paramValue = document.querySelector("#pickId");
  const post_id = paramValue.dataset.id1;
  console.log("patch request");
  const fetchURL = "/api/blogpost/" + post_id;
  const responseURL = "/blogpost/" + post_id;
  if (title) {
    const response = await fetch(fetchURL, {
      method: "PATCH",
      body: JSON.stringify({ title, content, summary }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(responseURL);
    } else {
      console.log("Something went wrong. Try updating blog post later");
    }
  }
};

document
  .querySelector(".update-blog-form")
  .addEventListener("submit", updateButtonHandler);
