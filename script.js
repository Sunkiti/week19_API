const posts = document.querySelector('.posts');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
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
// в конце добавляет то, что введено в json 
function addNewPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: 'sne hgerhihei',
        body: 'sejfh uwerhuruuwr8RUFwufhwufhUFHUWhfuhwufhuhghai h',
        userId: 1
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then((json) => {
        console.log(json.title)
        console.log(json.body)
        const div1 = document.createElement('div');
        div1.classList.add('new_message');
        div1.innerHTML = 
            `<p>${json.title}</p>
            <p>${json.body}</p>
            `;
            posts.appendChild(div1); 
    })
}
btn1.addEventListener ('click', addNewPost);
// код для показа только 1 элемента
// function addOneMessage () {
//     fetch('https://jsonplaceholder.typicode.com/todos/1/')
//         .then(response => response.json())
//         .then(data => {
//             console.log (`${data.title}`);
//             console.log (`${data.completed}`);
//             const div = document.createElement('div');
//             div.classList.add('post__title');
//             div.innerHTML = 
//                 `<p>${data.title}</p>
//                 <p>${data.completed}</p>
//                 `;
//                 posts.appendChild(div); 
//             })
//         };
//         // .catch((err) => {
//         //     console.log('Ошибка. Запрос не выполнен');
//         // }); 

