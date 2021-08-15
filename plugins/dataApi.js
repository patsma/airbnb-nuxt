
export default function (context, inject) {
  const appId = "EYHE1Y8SW9";
  const apiKey = "deb5eed87e05a025752e5d14b88ae64b";

  inject("dataApi", {
    getHome,
  });

  async function getHome(homeId) {
    const response = await fetch(
      `https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
      {
        headers: {
          "X-Algolia-API-Key": apiKey,
          "X-Algolia-Application-Id": appId,
        },
      }
    );
    const json = await response.json();
    return json;
  }
}