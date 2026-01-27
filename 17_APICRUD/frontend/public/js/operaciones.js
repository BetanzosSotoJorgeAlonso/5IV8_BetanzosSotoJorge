function createNewItem() {
    event.preventDefault();

    const nombre = document.getElementById("newItemName").value;
    const precio = parseFloat(document.getElementById("newItemPrice").value);
    const stock = parseInt(document.getElementById("newItemStock").value);
    const categoryid = parseInt(document.getElementById("newItemCategoryId").value);

    let id = 

    const newItem = {
