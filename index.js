
var posts = [];

//create New Post Frame
createHTMLContent = (postTitle, postContent) => {
    let content = `
        <div class="col">
            <h1 class="h1 text-center" id="postTitle">${postTitle}</h1>
        </div>
        <hr>
        <div class="card">
            <p>${postContent}</p>
            </div>
        </div>`;

        return content;
};

//Create new Post Function
createNewPost = (event) => {
    event.preventDefault();
    let main_content = document.getElementById('main_content');
    main_content.innerHTML = '';  

    let postTitle = document.getElementById('post_title').value;
    let postContent = document.getElementById('post_content').value;

    //Save post title and content in posts array
    posts.unshift({
        title: postTitle,
        content: postContent        
    });

    //Print new Post on the website
    posts.forEach(p => {
        let div = document.createElement('div');
        div.innerHTML = createHTMLContent(p.title, p.content);;      
        main_content.appendChild(div)
    });
    
    document.getElementById('post_title').value = '';
    document.getElementById('post_content').value = '';
    document.getElementById('cancelPost').click();
};






