'use strict'

// const render = (root) => {
//   root.empty();
//   const wrapper = $('<div class="wrapper"></div>');
//   wrapper.append(Header(_ => render(root)));
//   if (state.selectedYape == null) {
//     wrapper.append(Search(_ => render(root)));
//     root.append(wrapper);
//   }else {
//     const showMap = GoogleMap();
//     wrapper.append(showMap);
//     wrapper.append(StationDetails(_ => render(root)));
//     root.append(wrapper);
//       showMap.initMap();
//   }
// }

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (state.selectedYape) {
    case null:
      wrapper.append(carousel(_ => render(root)));
      root.append(wrapper);
      break;

    case 1:
      wrapper.append(validNumber());
      root.append(wrapper);
      break;

    default:

  }
}

const state = {
  yape: null,
  selectedYape: null
};

// $(function() {
//   // getJSON('stations.json', (err, json) => {
//   //
//   //   if (err) { return alert(err.message);}
//   //
//   //   state.yape = json;
//   //
//   //   const root = $('.root');
//   //   render(root);
//   // });
//   const root = $('.root');
//   render(root);
//
//   // $.post("api/registerNumber",
//   // {"phone": 940246971, "terms": true},
//   // (Obj)=>{ console.log(Obj.data);},
//   // "json");
//   // $('.carousel.carousel-slider').carousel({fullWidth: true});
//   // $('.carousel.carousel-slider').carousel({fullWidth: true});
//
//
//
// });
$( document ).ready(function() {
  const root = $('.root');
  render(root);
});
