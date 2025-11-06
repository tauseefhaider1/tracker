let input1 = document.querySelector('.inp1');
let input2 = document.querySelector('.inp2');
let select = document.querySelector('.sel');
let button = document.querySelector('.add');
let income = document.querySelector('.income p');
let expense = document.querySelector('.expense p');
let balance = document.querySelector('.balance p');
let record = document.querySelector('.record');

let totalincome = 0;
let totalexpense = 0;

button.addEventListener('click', () => {
  let inps1 = input1.value.trim();
  let inps2 = input2.value.trim();
  let sell = select.value;

  if (!inps1 || !inps2 || !sell) {
    alert("⚠️ Please fill all fields before adding!");
    return;
  }

  // Create a new record row
  let row = document.createElement('div');
  row.classList.add('row', sell);

  let title = document.createElement('p');
  title.textContent = inps1;

  let price = document.createElement('p');
  price.textContent = "Rs " + inps2;

  row.append(title, price);
  record.appendChild(row);

  // Update totals
  if (sell === 'income') {
    totalincome += Number(inps2);
  } else {
    totalexpense += Number(inps2);
  }

  income.textContent = totalincome;
  expense.textContent = totalexpense;
  balance.textContent = totalincome - totalexpense;

  // Clear inputs
  input1.value = '';
  input2.value = '';
  select.value = '';
});
