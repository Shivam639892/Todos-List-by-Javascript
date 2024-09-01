

update();

function getAndUpdate() {
    console.log("Updating ..")
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem('itemsJson') == null) {
        itemArray = [];
        itemArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemArray))
    }
    else {
        itemArrayStr = localStorage.getItem('itemsJson')
        itemArray = JSON.parse(itemArrayStr);
        itemArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemArray))
    }

    update();
}


function update() {
    if (localStorage.getItem("itemsJson") == null) {
        itemArray = []
        localStorage.setItem("itemsJson", JSON.stringify(itemArray));
        console.log("i executed.")
        // itemArrayStr = localStorage.getItem("itemsJson");
        // itemArray = JSON.parse(itemArrayStr)

    }

    else {
        itemArrayStr = localStorage.getItem("itemsJson");
        itemArray = JSON.parse(itemArrayStr);
    }
    // populating the table
    let tableId = document.getElementById("tableId");
    let str = "";

    // itemArrayStr = localStorage.getItem("itemsJson")
    // itemArray= JSON.parse(itemArrayStr);
    itemArray.forEach((element, index) => {
        str += `
                <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td> 
                <td>${element[1]}</td> 
                <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                </tr>`;
        //yha item array change ni ho rha dynamically element change ho rha apne aapn function ke saath index ke saath saath ok
        console.log("sdfb")

    });
    tableId.innerHTML = str;

}


// function for clearing local storage

cleared = () => {
    if (confirm("Do you want to clear ?")) {
        localStorage.clear()
        update();
    }
}
deleted = (index) => {
    itemArrayStr = localStorage.getItem("itemsJson");
    itemArray = JSON.parse(itemArrayStr);
    itemArray.splice(index, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemArray));
    update();

}


