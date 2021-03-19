// Write your code here!
const element = document.createElement('div'); 
document.body.appendChild(element); 
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul); 
element.style.backgroundColor = '#666666';
element.style.fontSize = '18px';
element.style.color = '#FFFF00';
element.style.marginLeft = '40px';
element.style.lineHeight = 2;

document.id.remove('main');
////element.nodeName.add(newHeader);
////const H1 = document.getElementById('victory');
element.newHeader.innerHTML('Jede is the Champion');