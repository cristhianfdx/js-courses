const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data);

const description = document.querySelector('#description');
const carbs = document.querySelector('#carbs');
const calories = document.querySelector('#calories');
const protein = document.querySelector('#protein');

// Imperativa
// const attrsToString = (obj = {}) => {
//   const keys = Object.keys(obj);
//   const attrs = [];

//   keys.forEach(key => {
//     let attr = key;
//     attrs.push(`${attr}="${obj[attr]}"`);
//   });

//   return attrs.join('');
// }

// declarativa
const attrsToString = (obj = {}) =>
  Object.keys(obj)
  .map(attr => `${attr}="${obj[attr]}"`)
  .join('');

const tagAttrs = obj => (content = "") => `
  <${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>
`;

const tag = t => typeof t === 'string' ? tagAttrs({tag: t}) : tagAttrs(t);

const trashicon = tag({tag: 'i', attrs: {class: 'fas fa-trash-alt'}})('');

const tableRowTag = tag('tr');
const tableRow = items => compose(tableRowTag, tableCells)(items);

const tableCell = tag('td');
const tableCells = items => items.map(tableCell).join('');

let list = [];

// Inputs Validate
const btnAdd = document.querySelector('#btn-add');

description.onkeypress = () => description.classList.remove('is-invalid');
carbs.onkeypress = () => carbs.classList.remove('is-invalid');
calories.onkeypress = () => calories.classList.remove('is-invalid');
protein.onkeypress = () => protein.classList.remove('is-invalid');

const validateInputs = () => {
  description.value ? '' : description.classList.add('is-invalid');
  carbs.value ? '' : carbs.classList.add('is-invalid');
  calories.value ? '' : calories.classList.add('is-invalid');
  protein.value ? '' : protein.classList.add('is-invalid');

  if (description.value && carbs.value && calories.value && protein.value) {
    add();
  }
};

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value)
  };

  list.push(newItem);
  updateTotal();
  cleanInputs();
  renderItems();
}

const updateTotal = () => {
  let calories = 0;
  let carbs = 0;
  let protein = 0;

  list.map(item => {
    calories += item.calories;
    carbs += item.carbs;
    protein += item.protein;
  });

  document.querySelector('#totalCalories').innerHTML = calories;
  document.querySelector('#totalCarbs').innerHTML = carbs;
  document.querySelector('#totalProtein').innerHTML = protein;

}

const cleanInputs = () => {
  description.value = '';
  calories.value = '';
  carbs.value = '';
  protein.value = '';
}

const renderItems = () => {
  const tbody = document.getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';
  const rows = list.map((item, index) => {
    const removeButton = tag({
      tag: 'button',
      attrs: {
        class: 'btn btn-outline-danger',
        onclick: `removeItem(${index})`
      }
    })(trashicon);
    const { description, calories, carbs, protein } = item;
    return tableRow([description, calories, carbs, protein, removeButton]);
  });

  tbody.innerHTML = rows.join('');
}

const removeItem = (index)=> {
  list.splice(index, 1);
  updateTotal();
  renderItems();
}

btnAdd.addEventListener('click', validateInputs);
