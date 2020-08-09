const searchField = document.querySelector('#searchField');
const searchButton = document.querySelector('#searchButton');
const addField = document.querySelector('#addField');
const addButton = document.querySelector('#addButton');
const para = document.querySelector('p');
const list = document.querySelector('ol');
const baseUrl = "http://localhost:3001/";

async function func() {
    const { data } = await axios.get(baseUrl + "products");
    for (let i = 0; i < data.length; i++) {
        const product = data[i].name;
        const li = document.createElement('li');
        li.id = i + 1;
        li.innerHTML = product;
        let deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.innerHTML = "Delete";
        list.append(li);
        li.append(deleteButton);
        // console.log(data[i].id);
        deleteButton.onclick = () => {
            list.removeChild(li);
            axios.delete(`http://localhost:3001/products/${data[i].id}`, {
                });
        };
    }       
}

document.addEventListener('DOMContentLoaded', () => {
    func() 
   });

addButton.addEventListener('click', () => {
    const product = addField.value;
    const li = document.createElement('li');
    li.innerHTML = product;
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "Delete";
    list.append(li);
    li.append(deleteButton);
    addField.value = "";
    axios.post(`http://localhost:3001/products`, {
    name: `${product}`
    })
    .then (
        product =>  {
            deleteButton.onclick = () => {
            list.removeChild(li);
            axios.delete(`http://localhost:3001/products/${product.data.id}`);
        }
    });
});

function searchId() {
    var textSearch = searchField.value;
    let filter = textSearch.toUpperCase();
    
}




// function addFunc() {
//     if (addField.value.length > 0) { 
//         const product = addField.value;
//         const li = document.createElement('li');
//         li.innerHTML = product;
//         const deleteButton = document.createElement("button");
//         deleteButton.className = "deleteButton";
//         deleteButton.innerHTML = "Delete";
//         list.prepend(li);
//         li.append(deleteButton);
//     }
// }





