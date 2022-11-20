import { Chocolate } from './classes/Chocolate.js';
import { Madeleine } from './classes/Madeleine.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { LisTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs 
const type = document.querySelector('#type') as HTMLInputElement;
const delivery = document.querySelector('#delivery') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement; 

// list template instance 
const ul = document.querySelector('ul')!;
const list = new LisTemplate(ul);

form.addEventListener('submit', (e: Event) => {
e.preventDefault();
    
    // tuples 

    let values: [string, number];
    values = [delivery.value, amount.valueAsNumber]
    let doc: HasFormatter;
    if (type.value === 'chocolate'){
        doc = new Chocolate(...values)
    } else { 
        doc = new Madeleine(...values)
    }
    
    list.render(doc, type.value, 'end');
});