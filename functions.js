//2
const list = (arr) => arr.map(c => `<li class="list-group-item d-flex justify-content-between" data-index="${c.index}">
    ${c.name}
    <strong>$ ${c.balance}</strong>
  </li>`).join('')

//3  
const order = (arr, prop) => arr.sort((a, b) => a[prop] > b[prop] ? 1 : -1)
  
//4
const total = (arr) => arr.reduce((acc, c) => acc + c.balance, 0)

//5
const info = (i) => clients.find(c => c.index === i)

//6
const search = (q) => clients.filter(c => c.name.toLowerCase().includes(q.toLowerCase()))