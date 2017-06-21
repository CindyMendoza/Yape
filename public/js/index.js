'use strict'

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (state.selectedYape) {
    case null:
      wrapper.append(carousel(_ => render(root)));
      root.append(wrapper);
      break;

    case 1:
      wrapper.append(validNumber(_ => render(root)));
      root.append(wrapper);
      break;

    case 2:
      wrapper.append(enterYourCode(_ => render(root)));
      root.append(wrapper);
      break;

    case 3:
      wrapper.append(createYourUser(_ => render(root)));
      root.append(wrapper);
      break;

    case 4:
      wrapper.append(youCanUse(_ => render(root)));
      root.append(wrapper);
      break;

    case 5:
      wrapper.append(registerYourDebitCard(_ => render(root)));
      root.append(wrapper);
      break;

    case 6:
      wrapper.append(enterYourPasswordCard(_ => render(root)));
      root.append(wrapper);
      break;

    case 7:
      wrapper.append(lastMoves());
      root.append(wrapper);
      break;

    default:

  }
}

const state = {
  yape: null,
  selectedYape: null
};

$( document ).ready(function() {
  const root = $('.root');
  render(root);
});
