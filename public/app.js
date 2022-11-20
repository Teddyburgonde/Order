import { Chocolate } from './classes/Chocolate.js';
import { Madeleine } from './classes/Madeleine.js';
import { LisTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs 
const type = document.querySelector('#type');
const delivery = document.querySelector('#delivery');
const amount = document.querySelector('#amount');
// list template instance 
const ul = document.querySelector('ul');
const list = new LisTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // tuples 
    let values;
    values = [delivery.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'chocolate') {
        doc = new Chocolate(...values);
    }
    else {
        doc = new Madeleine(...values);
    }
    list.render(doc, type.value, 'end');
});
