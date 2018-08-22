// sidenav for mobile mode
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false, // the 3 dots
  height: 500,
  transition: 500,
  interval: 6000 // 6 seconds
});

// autocomplete
const autocompSearch = document.querySelector('.autocomplete');
M.Autocomplete.init(autocompSearch, {
  // show data
  data: {
    "Yangon": null,
    "Bangkok": null,
    "Chiang Mai": null,
    "Luangprabang": null,
    "Mandalay": null,
    "Vientiane": null,
    "Pattaya": null,
    "Phi Phi Islands": null
  }
})