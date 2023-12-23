// Paer 11
function phoneBook (firstName, lastName, phoneNo)
{
    this.name = firstName,
    this.last = lastName,
    this.phone = phoneNo

    // this.addToArray = function()
    // {
    //     return `User Name: ${this.name}, User Lastname: ${this.last}`
    // }
};


let userArray = [];
let butonClicked = document.getElementById("btnSave");

butonClicked.addEventListener("click", function()
{
    let name = document.getElementById("txtFirstName").value;
    let lastName = document.getElementById("txtLastName").value;
    let phone = document.getElementById("phoneNo").value;

    let user = new phoneBook(name, lastName, phone);
    userArray.push(user);

    let listUsersTable = document.getElementById("results");
    
    // let test = listUsersTable.appendChild(createTr).appendChild(createTd);
    if(userArray.length === 0)
    {
        test.appendChild(document.createTextNode(`No users entered.`));
    }
    else
    {
        let createTrHead = document.createElement("tr");
        createTrHead.setAttribute("id", "resultHead");
        if(!document.getElementById("resultHead"))
        {
            let createTd = document.createElement("td");
            let createTd1 = document.createElement("td");
            let createTd2 = document.createElement("td");
            createTd.appendChild(document.createTextNode("User Name"));
            createTrHead.appendChild(createTd);

            createTd1.appendChild(document.createTextNode("User Lastname"));
            createTrHead.appendChild(createTd1);

            createTd2.appendChild(document.createTextNode("User Phone"));
            createTrHead.appendChild(createTd2);
            listUsersTable.appendChild(createTrHead);
        }
        
        for(let i = 0; i < userArray.length; i++)
        {
            let createTr = document.createElement("tr");
            let createTd = document.createElement("td");
            let createTd1 = document.createElement("td");
            let createTd2 = document.createElement("td");

            createTd.appendChild(document.createTextNode(userArray[i]["name"]));
            createTr.appendChild(createTd);

            createTd1.appendChild(document.createTextNode(userArray[i]["last"]));
            createTr.appendChild(createTd1);

            createTd2.appendChild(document.createTextNode(userArray[i]["phone"]));
            createTr.appendChild(createTd2);
            listUsersTable.appendChild(createTr);
        }
        listUsersTable.setAttribute("border", "1");
        
    }
});

// Part 12

let toDoArray = [];
function toDo (name, isChecked)
{
    this.propertyName = name,
    this.checked = isChecked
}

let butonToDoClicked = document.getElementById("btnAdd");

butonToDoClicked.addEventListener("click", function()
{
    let div = document.getElementById("divToDoList");
    let list = document.createElement("ul");
    div.appendChild(list);
    list.innerHTML = ``;

        let check = "<input type=\"checkbox\" name=\"\" id=\"\"></input>";
        let tasks = document.getElementById("txtToDo").value;
        let tasks1 = document.getElementById("txtToDo");
        let task = new toDo (tasks, false);
        toDoArray.push(task);

        for(let i = 0; i < toDoArray.length; i++)
        {
            list.innerHTML = `<li id=\"${i}\"> ${tasks} ${check}</li>`;
            
        }
    tasks1.value=""
});