import _ from 'lodash';
import './style.css';
import Tiger from './tiger_smoke.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myImage = new Image();
    myImage.src = Tiger;

    element.appendChild(myImage);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());