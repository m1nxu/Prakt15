const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');
const itemBlock = document.getElementById('items');

function setLightTheme() {
    document.body.style.backgroundColor = '#f6f6f6';
    itemBlock.style.color = '#141414';
}

function setDarkTheme() {
    document.body.style.backgroundColor = '#141414';
    itemBlock.style.color = '#f6f6f6';
}

lightModeButton.addEventListener('click', setLightTheme);
darkModeButton.addEventListener('click', setDarkTheme);

const categories = {
  costume: ["1", "2", "3"],
  chaussures: ["4", "5", "6"],
  accessories: ["7", "8", "9"],
};

function updateProductCards(event) {
  const category = event.target.id;
  const ids = categories[category];

  Array.from(itemBlock.children).forEach((div) => {
    const div_id = div.id;
    if (ids.includes(div_id)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

costume.addEventListener("click", updateProductCards);
chaussures.addEventListener("click", updateProductCards);
accessories.addEventListener("click", updateProductCards);