const BASE_URL = 'http://localhost:4040'

function remove() {
    const options = {
        method: 'DELETE',
    }
    fetch(`${BASE_URL}/comments/4`, options).then(res => res.json())
}
remove()