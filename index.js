let activeButtonID = "";

const ACTIVE_BUTTON = 'active-tab-button';
const ACTIVE_PANEL = 'active-panel';

const switchActiveElement = (currentID, nextID, className) => {
  const currentElement = currentID && document.getElementById(currentID);
  const nextElement = document.getElementById(nextID);

  if (currentElement && currentElement.classList.contains(className)) {
    currentElement.classList.remove(className);
  }

  if (!nextElement.classList.contains(className)) {
    nextElement.classList.add(className);
  }
} 

const setSelectedButton = (currentID, nextID) => switchActiveElement(currentID, nextID, ACTIVE_BUTTON)
const setActivePanel = (currentID, nextID) => switchActiveElement(currentID, nextID, ACTIVE_PANEL);

const buttonToPanelMap = {
  button_1: 'panel_1',
  button_2: 'panel_2',
  button_3: 'panel_3',
  button_4: 'panel_4',
  button_5: 'panel_5',
}

const onButtonClick = (nextID) => {
  setSelectedButton(activeButtonID, nextID);
  setActivePanel(buttonToPanelMap[activeButtonID], buttonToPanelMap[nextID]);
  activeButtonID = nextID;
}
