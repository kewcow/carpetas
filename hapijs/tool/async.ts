const products: any = async () => {
  try {
    const response: any = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const json: any = await response.json();
    console.log(json[0].name);
  }
  catch(err: any) {
    console.log(`could no get products: ${err}`);
  }
}

products();
