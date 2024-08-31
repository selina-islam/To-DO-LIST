const inputTask = document.getElementById("itemInput");
const addButton = document.getElementById("add-item");
const showItem = document.getElementById("showItem");
let count = 0;

addButton.addEventListener("click", function(e){
        e.preventDefault();
        let text = inputTask.value.trim();
        if (text === "") return alert("Enter your task");
        let li = document.createElement ("li");
        li.classList.add("li");
        let index = document.createElement("h1");
        count += 1;
        index.innerHTML = count;
        li.appendChild(index);
        let span = document.createElement("span");
        span.textContent = text;
        li.appendChild(span);
        let remove = document.createElement("button");
        remove.addEventListener("click", function(){
                li.remove();
                count -= 1;
                index.innerHTML = count;
        })
        remove.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        li.appendChild(remove);
        let edit = document.createElement("button");
        edit.addEventListener("click", function(){
                const newTaskText = prompt("Edit your task:", span.textContent);
                span.textContent = newTaskText.trim();
        })
        edit.innerHTML =`<i class="fa-solid fa-pen-to-square"></i>`;
        li.appendChild(edit);
        showItem.appendChild(li);
        inputTask.value="";
})