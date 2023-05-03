let myForm = document.querySelector('form')
let inpTask = document.getElementById('task');
let inpPriority = document.querySelector('select')
let tbody = document.querySelector('tbody');

let dataArr = []

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
   let data = {
        task: inpTask.value,
        priority: inpPriority.value
        
        } 
   
   dataArr.push(data)
   console.log(dataArr)
   tbody.innerHTML = ""
    for (let i = 0; i < dataArr.length; i++){
        let tr = document.createElement('tr');
        let tdTask = document.createElement('td')
        let tdPriority = document.createElement('td')
        
tdTask.innerText = dataArr[i].task
tdPriority.innerText = dataArr[i].priority
console.log(tdPriority)
tr.append(tdTask, tdPriority)
        tbody.append(tr)
        console.log(tbody)
    }
})


