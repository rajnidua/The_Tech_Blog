const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name").value.trim();
  const content = document.querySelector("#project-funding").value.trim();
  const summary = document.querySelector("#project-desc").value.trim();
  const paramValue = document.querySelector("#pickId");
  const post_id = paramValue.dataset.id1;

  const fetchURL = "/api/blogpost/" + post_id;
  if (title) {
    const response = await fetch(fetchURL, {
      method: "PUT",
      body: JSON.stringify({ title, content, summary }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(fetchURL);
    } else {
      alert("Something went wrong. Try updating blog post later");
    }
  }
};

document
  .querySelector(".update-blog-form")
  .addEventListener("click", updateButtonHandler);
