const BASE_URL = 'http://localhost:4040';



function patchDate(newDate) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ skill: newDate })
    };
    return fetch(`${BASE_URL}/comments/4`, options).then(res => res.json());
}


patchDate('boxing').then(console.log);
