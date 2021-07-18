const BASE_URL = 'http://localhost:4040';
const newDate1 = {
    title: "Tesla",
    author: "Ilon Mask",
};

const newDate2 = {
    title: "Do what you want",
    author: "Piotr I",
};

function addDate(newDate) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(newDate)
    };
    return fetch(`${BASE_URL}/comments`, options).then(res => res.json())
}

addDate(newDate1).then(renderDate);
addDate(newDate2).then(renderDate);

function renderDate() {
    console.log('Render in proces');
}