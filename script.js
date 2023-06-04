const posts = document.querySelector('.posts');
const btn = document.querySelector('.btn');
function add () {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then((json) => {
            json.forEach ((elem) =>{
                console.log (`${elem.title}`);
                console.log (`${elem.completed}`);
                const div = document.createElement('div');
                div.classList.add('post__title');
                div.innerHTML = 
                    `<p>${elem.title}</p>
                    <p>${elem.completed}</p>
                    `;
                    posts.appendChild(div); 
            })
        });
        // .catch((err) => {
        //     console.log('Ошибка. Запрос не выполнен');
        // }); 
    }  
btn.addEventListener ('click', add);



