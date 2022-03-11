"use strict";
const products = async () => {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    console.log(json[0].name);
  }
  catch (err) {
    console.log(`could no get products: ${err}`);
  }
};
products();
