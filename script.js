document.querySelector('.menu-container').addEventListener('click', handleDropdown)

function handleDropdown() {
  const links = document.querySelector('.link-container');
  if (links.classList.contains('closed')) {
    links.classList.remove('closed');
    links.classList.add('opened');
  } else {
    links.classList.remove('opened');
    links.classList.add('closed');
  }
};

