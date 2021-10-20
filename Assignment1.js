
let id = 0;
let oid



document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id',`item-${id}`);
    row.insertCell(0).innerHTML = `order-${id}`;
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('item-name').value;
    row.insertCell(3).innerHTML= document.getElementById('quantity').value;
    row.insertCell(4).innerHTML= document.getElementById('due-date').value;
    row.insertCell(5).innerHTML = `$${multiply()}`
    row.insertCell(6).innerHTML= document.getElementById('comments').value;
    let actions = row.insertCell(7);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('item-name').value = '';

})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML= 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id : item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

function multiply() {
    let price = document.getElementById('item-price').value;
    let quantity = document.getElementById('quantity').value;
    let totalPrice = price * quantity;
    console.log(totalPrice)
    return totalPrice
     }