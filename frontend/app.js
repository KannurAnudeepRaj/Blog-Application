document.addEventListener('DOMContentLoaded', function () {
    // Mock data for testing
    const mockBlogs = [
        { title: 'Blog 1', content: 'This is the content of Blog 1.' },
        { title: 'Blog 2', content: 'This is the content of Blog 2.' },
        // Add more mock blogs as needed
    ];

    const mockComments = [
        { username: 'User1', text: 'This is a comment on Blog 1.' },
        { username: 'User2', text: 'Great post! Thanks for sharing.' },
        // Add more mock comments as needed
    ];

    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const blogCreationForm = document.getElementById('blogCreationForm');
    const blogList = document.getElementById('blogList');
    const commentList = document.getElementById('commentList');
    const commentForm = document.getElementById('commentForm');

    // Function to create a blog item
    function createBlogItem(blog) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${blog.title}</strong>: ${blog.content} <a href="#">Read more</a>`;
        return listItem;
    }

    // Function to create a comment item
    function createCommentItem(comment) {
        const commentItem = document.createElement('div');
        commentItem.innerHTML = `<strong>${comment.username}:</strong> ${comment.text}`;
        return commentItem;
    }

    // Populate the blog list
    mockBlogs.forEach(blog => {
        blogList.appendChild(createBlogItem(blog));
    });

    // Populate the comment list
    mockComments.forEach(comment => {
        commentList.appendChild(createCommentItem(comment));
    });

    // Event listener for registration form submission
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate server-side registration logic
        console.log('User registration request:');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        alert('User registered successfully!');
        // You can redirect the user or perform additional actions here
    });

    // Event listener for login form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Simulate server-side login logic
        console.log('User login request:');
        console.log('Username:', loginUsername);
        console.log('Password:', loginPassword);

        alert('User logged in successfully!');
        // You can redirect the user or perform additional actions here
    });

    // Event listener for blog creation form submission
    blogCreationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;

        // Simulate server-side blog creation logic
        console.log('Blog creation request:');
        console.log('Title:', blogTitle);
        console.log('Content:', blogContent);

        alert('Blog created successfully!');
        // You can redirect the user or perform additional actions here
    });

    // Event listener for comment form submission
    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const commentText = document.getElementById('commentText').value;

        // Simulate server-side comment creation logic
        console.log('Comment creation request:');
        console.log('Comment Text:', commentText);

        // Add the new comment to the comment list
        commentList.appendChild(createCommentItem({ username: 'CurrentUser', text: commentText }));

        // Clear the comment form
        commentForm.reset();
    });
});
