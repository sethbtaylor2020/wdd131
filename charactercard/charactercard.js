const aCard = {
  name: 'Character Card',
  sections: [
    { Class: 'Swamp Beast Diplomat', Level: 6, Health: 100 }
  ],

  attack: function () {
    this.sections[0].Health -= 20;
    if (this.sections[0].Health < 0) {
      this.sections[0].Health = 0;
    }

    renderSections(this.sections);
  },
   levelUp: function () {
    this.sections[0].Level += 1;
    renderSections(this.sections);
  }
};
function renderSections(sections) {
  document.getElementById("health").textContent = sections[0].Health;
  document.getElementById("level").textContent = sections[0].Level;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("attackButton")
    .addEventListener("click", function () {
      aCard.attack();
    });

  document
    .getElementById("levelupButton")
    .addEventListener("click", function () {
      aCard.levelUp();
    });

  renderSections(aCard.sections);
});