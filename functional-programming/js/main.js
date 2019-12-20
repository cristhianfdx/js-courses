// const compose = (...functions) => data =>
//     functions.reduceRight((value, func) => func(value), data);

let description = document.querySelector('#description');
let carbs = document.querySelector('#carbs');
let calories = document.querySelector('#calories');
let protein = document.querySelector('#protein');

const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj);
  const attrs = [];

  keys.forEach(key => {
    let attr = key;
    attrs.push(`${attr}="${obj[attr]}"`);
  });

  return attrs.join('');
}

const tagAttrs = obj => (content = "") => `
  <${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>
`;

const tag = t => {
  if (typeof t === 'string') {
    tagAttrs({tag: t});
  }else {
    tagAttrs(t);
  }
};

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
  cleanInputs();
}

const cleanInputs = () => {
  description.value = '';
  calories.value = '';
  carbs.value = '';
  protein.value = '';
}

btnAdd.addEventListener('click', validateInputs);
