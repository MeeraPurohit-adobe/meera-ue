export default function decorate(block) {
  const rows = [...block.children];

  // Find fields by data-aue-prop
  const buttonOneLabel = block.querySelector('[data-aue-prop="buttonOneLable"]');
  const buttonTwoLabel = block.querySelector('[data-aue-prop="buttonTwoLabel"]');

  // Find link rows — they are the sibling divs after label divs
  // Link row has an <a> tag but no data-aue-prop
  const allLinks = [...block.querySelectorAll('a')];

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('hero-buttons');

  // Button One
  if (buttonOneLabel && allLinks[0]) {
    const btn1 = document.createElement('a');
    btn1.href = allLinks[0].href;
    btn1.textContent = buttonOneLabel.textContent.trim();
    btn1.classList.add('button', 'primary');
    buttonWrapper.appendChild(btn1);
    buttonOneLabel.closest('div').remove();
    allLinks[0].closest('div').remove();
  }

  // Button Two
  if (buttonTwoLabel && allLinks[1]) {
    const btn2 = document.createElement('a');
    btn2.href = allLinks[1].href;
    btn2.textContent = buttonTwoLabel.textContent.trim();
    btn2.classList.add('button', 'secondary');
    buttonWrapper.appendChild(btn2);
    buttonTwoLabel.closest('div').remove();
    allLinks[1].closest('div').remove();
  }

  if (buttonWrapper.children.length > 0) {
    block.appendChild(buttonWrapper);
  }
}
