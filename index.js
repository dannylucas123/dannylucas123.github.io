let activeButtonID = "";

const ACTIVE_BUTTON = 'active-tab-button';
const setSelectedButtonStyling = (next) => {
  const currentActiveButton = activeButtonID && document.getElementById(activeButtonID);
  const nextActiveButton = document.getElementById(next);

  if (currentActiveButton && currentActiveButton.classList.contains(ACTIVE_BUTTON)) {
    currentActiveButton.classList.remove(ACTIVE_BUTTON);
  }

  if (!nextActiveButton.classList.contains(ACTIVE_BUTTON)) {
    nextActiveButton.classList.add(ACTIVE_BUTTON);
  }
}

const onButtonClick = (id) => {
  setSelectedButtonStyling(id);
  activeButtonID = id;
}
