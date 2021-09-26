var posts = [];
var tempPosts = [];


//Create Post Function
createHTMLContent = (postTitle, postContent) => {
  let postContentFormated = postContent
    .split("\n")
    .map((v) => "<p>" + v)
    .join()
    .replaceAll(",", " ");
  let content = `
                <div class="col my-card">
                    <div>
                        <span class="my-card__icon-close" onclick="remove('${postTitle}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                        <h1 class="text-center my-card__title" id="postTitle">${postTitle}</h1>            
                    </div>
                    <hr class="my-card__separator">
                    <div class="my-card__content">
                        <p>${postContentFormated}</p>
                    <div>
                </div>
           `;
  return content;
};

// Search post function
search = () => {
  let search = document.getElementById("my-search").value;
  tempPosts = [...posts];
  if (search != "") {
    posts = tempPosts.filter((post) => post.title.includes(search) || post.content.includes(search));
  } else {
    posts = [...tempPosts];
  }

  createNewPost();
  posts = [...tempPosts];
};

remove = (post) => {
  let removePost = confirm("Do you wan to remove this post!!!");

  if (removePost) {
    posts = posts.filter((v) => v.title != post);
    createNewPost();
  }
};

//Create new Post Function
createNewPost = (event) => {
  event?.preventDefault();
  let main_content = document.getElementById("main_content");
  main_content.innerHTML = "";

  let postTitle = document.getElementById("post_title").value;
  let postContent = document.getElementById("post_content").value;

  //Save post title and content in posts array
  posts.unshift({
    title: postTitle,
    content: postContent,
  });

  //Print new Post on the website
  posts.forEach((post) => {
    if (post?.title) {
      let div = document.createElement("div");
      div.innerHTML = createHTMLContent(post.title, post.content);
      main_content.appendChild(div);
    }
  });

  //Clear modal form when post
  document.getElementById("post_title").value = "";
  document.getElementById("post_content").value = "";
  document.getElementById("cancelPost").click();
};

//Clear modeal form when cancel
document.getElementById("cancelPost").addEventListener("click", () => {
    document.getElementById("post_title").value = "";
    document.getElementById("post_content").value = "";
});
