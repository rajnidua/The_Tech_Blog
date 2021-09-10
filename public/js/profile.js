const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name").value.trim();
  const content = document.querySelector("#project-funding").value.trim();
  const summary = document.querySelector("#project-desc").value.trim();

  if (title && content && summary) {
    const response = await fetch(`/api/blogpost`, {
      method: "POST",
      body: JSON.stringify({ title, content, summary }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogpost/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);

document
  .querySelector(".project-list")
  .addEventListener("click", updateButtonHandler);
