export default function decorate(block) {
  // Get button fields
  const buttonOneLabel = block.querySelector('[data-aue-prop="buttonOneLable"]');
  const buttonOneLink = block.querySelector('[data-aue-prop="buttonOneLink"]');
  const buttonTwoLabel = block.querySelector('[data-aue-prop="buttonTwoLabel"]');
  const buttonTwoLink = block.querySelector('[data-aue-prop="buttonTwoLink"]');

  // Create button wrapper
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('hero-buttons');

  // Button One
  if (buttonOneLabel?.textContent.trim() && buttonOneLink?.textContent.trim()) {
    const btn1 = document.createElement('a');
    btn1.href = buttonOneLink.textContent.trim();
    btn1.textContent = buttonOneLabel.textContent.trim();
    btn1.classList.add('button', 'primary');
    buttonWrapper.appendChild(btn1);
    buttonOneLabel.remove();
    buttonOneLink.remove();
  }

  // Button Two
  if (buttonTwoLabel?.textContent.trim() && buttonTwoLink?.textContent.trim()) {
    const btn2 = document.createElement('a');
    btn2.href = buttonTwoLink.textContent.trim();
    btn2.textContent = buttonTwoLabel.textContent.trim();
    btn2.classList.add('button', 'secondary');
    buttonWrapper.appendChild(btn2);
    buttonTwoLabel.remove();
    buttonTwoLink.remove();
  }

  if (buttonWrapper.children.length > 0) {
    block.appendChild(buttonWrapper);
  }
}