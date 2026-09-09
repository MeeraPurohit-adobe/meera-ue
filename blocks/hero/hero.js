export default function decorate(block) {
  // Enable Universal Editor + Add button
  block.dataset.aueFilter = 'hero';

  // Wrap all buttons in a button container
  const buttons = [...block.querySelectorAll('a')];
  if (buttons.length > 0) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('hero-buttons');
    buttons.forEach((btn) => buttonWrapper.appendChild(btn));
    block.appendChild(buttonWrapper);
  }
}
