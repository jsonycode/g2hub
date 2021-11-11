console.log('Dom file');

const body = document.querySelector('body');

const bodyStyle = ()=>{
    body.style.backgroundColor = 'peachpuff';
    body.style.textAlign = 'center';
}

const titleText = (text)=>{
    const title = document.createElement('h2');
    title.textContent = text;
    body.appendChild(title);
}


export {bodyStyle, titleText};