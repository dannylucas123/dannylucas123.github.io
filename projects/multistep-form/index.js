const state = {
  planType: 0,
  step: 0,
  pricePlan: -1,
  addons: []
};

const prices = [9, 12, 15];


const monthlyPrices = ['$9/mo', '$12/mo', '$15/mo'];
const yearlyPrices = ['$90/y', '$120/y', '$150/y'];

const updateElement = (ele, check, className) => {
  if (check) {
    if (!ele.classList.contains(className)) {
      ele.classList.add(className);
    }
  } else {
    ele.classList.remove(className);
  }
}

const setPriceSelectors = () => {
  document.querySelectorAll('.plan-button .free').forEach(ele => updateElement(ele, state.planType === 0, 'hidden'));
  document.querySelectorAll('.plan-button .price').forEach((ele, index) => ele.innerHTML = state.planType ? yearlyPrices[index] : monthlyPrices[index]);
}

const updateAddon = (selected) => {

}

const updateSwitch = () => {
  updateElement(document.querySelector('.billing-length .switch span'), state.planType, 'checked');
};

const updateText = () => {
  updateElement(document.getElementById('yearly'), state.planType, 'highlight');
  updateElement(document.getElementById('monthly'), state.planType === 0, 'highlight');
};

const updateSelectedPricePlan = () => {
  updateElement(document.getElementById('plan-arcade'), state.pricePlan === 0, 'selected');
  updateElement(document.getElementById('plan-advanced'), state.pricePlan === 1, 'selected');
  updateElement(document.getElementById('plan-pro'), state.pricePlan === 2, 'selected');
}

const renderUpdates = () => {
  updateSwitch();
  updateText();
  updateSelectedPricePlan();
  setPriceSelectors();
};

const togglePricePlan = (priceplan) => {
  state.pricePlan = priceplan;
  renderUpdates();
}

const toggleSwitch = (event) => {
  state.planType = event.target.checked ? 1 : 0;
  renderUpdates();
};

const navigate = () => {
  updateElement(document.getElementById('previous'), state.step < 1, 'hidden');
  updateElement(document.getElementById('next'), state.step > 2, 'hidden');
  updateElement(document.getElementById('content-personal'), state.step === 0, 'active');
  updateElement(document.getElementById('step-orb-1'), state.step === 0, 'activated');
  updateElement(document.getElementById('content-billing'), state.step === 1, 'active');
  updateElement(document.getElementById('step-orb-2'), state.step === 1, 'activated');
  updateElement(document.getElementById('content-addons'), state.step === 2, 'active');
  updateElement(document.getElementById('step-orb-3'), state.step === 2, 'activated');
  updateElement(document.getElementById('content-finish'), state.step === 3, 'active');
  updateElement(document.getElementById('step-orb-4'), state.step === 3, 'activated');
}

const navigateForward = () => {
  state.step = state.step + 1;
  navigate();
}

const navigateBack = () => {
  state.step = state.step - 1;
  navigate();
}