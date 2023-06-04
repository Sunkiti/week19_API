const posts = document.querySelector('posts');
const btn = document.querySelector('btn');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then((json) => {
        json.forEach ((elem) =>{
            console.log (`${elem.title}`);
            console.log (`${elem.body}`);
            const div = document.createElement('div');
            div.className.add('post__title');
            div.innerHTML = 
                `<p>${elem.title}</p>
                <p>${elem.body}</p>
                `;
                posts.appendChild(div); 
        })
    }) 
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
    });     
