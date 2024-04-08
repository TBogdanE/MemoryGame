import { config } from "./config";

let API_KEY = config.unsplashApiKey;

async function searchImage(search) {
  try {
    const imageResponse =
      await fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=${API_KEY}
`);

    const data = await imageResponse.json();

    console.log("data", data);
  } catch (error) {
    console.error("Invalid image:", error);
  }
}

export { searchImage };
