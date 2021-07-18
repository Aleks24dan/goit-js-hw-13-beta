
function fetchData() {
    fetch('http://localhost:4040/posts').then(res => res.json())
        .then(console.log)
}

function fetchDataById(id) {
    fetch(`http://localhost:4040/comments/${id}`).then(res => res.json())
        .then(console.log)
}

fetchData();
fetchDataById(1);
