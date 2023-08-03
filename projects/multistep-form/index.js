const state = {
  planType: 0
};


const updateSwitch = () => {
  const ele = document.querySelector('.billing-length .switch span');
  console.log(ele);
  if (state.planType) {
    if (!ele.classList.contains('checked')) {
      ele.classList.add('checked');
    }
  } else {
    ele.classList.remove('checked');
  }
};

const renderUpdates = () => {
  updateSwitch();
};

const toggleSwitch = (event) => {
  state.planType = event.target.checked ? 1 : 0;
  renderUpdates();
};