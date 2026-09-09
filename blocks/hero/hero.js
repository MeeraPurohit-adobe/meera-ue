const buttonOneLabel = block.querySelector('[data-aue-prop="buttonOneLabel"]')?.textContent;
const buttonOneLink = block.querySelector('[data-aue-prop="buttonOneLink"]')?.textContent;
const buttonTwoLabel = block.querySelector('[data-aue-prop="buttonTwoLabel"]')?.textContent;
const buttonTwoLink = block.querySelector('[data-aue-prop="buttonTwoLink"]')?.textContent;

if (buttonOneLabel && buttonOneLink) {
  const btn1 = document.createElement('a');
  btn1.href = buttonOneLink;
  btn1.textContent = buttonOneLabel;
  btn1.classList.add('button', 'button-one');
  block.appendChild(btn1);
}

if (buttonTwoLabel && buttonTwoLink) {
  const btn2 = document.createElement('a');
  btn2.href = buttonTwoLink;
  btn2.textContent = buttonTwoLabel;
  btn2.classList.add('button', 'button-two');
  block.appendChild(btn2);
}