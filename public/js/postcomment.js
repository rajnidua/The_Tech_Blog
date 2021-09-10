const signupFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#name-signup").value.trim();

  const paramValue = document.querySelector("#pickId");
  const post_id = paramValue.dataset.id1;
  const commented_by = paramValue.dataset.id2;

  console.log("postidvalue" + post_id);
  console.log("createdbyvalue" + commented_by);
  if (content && post_id && commented_by) {
    const baseUrl = "/api/blogpost/";
    const paramPart = post_id;
    const lastPart = "/postcomment";
    const fetchUrl = baseUrl + paramPart + lastPart;
    const response = await fetch(fetchUrl, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });
    const redirectUrl = "/blogpost/" + post_id;
    if (response.ok) {
      document.location.replace(redirectUrl);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
