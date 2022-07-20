function sleep(delay = 3000) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}

async function sendMultipleRequest(urlList, windowSize = 5) {
  function createReq(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => res?.message);
  }
  let len = Math.ceil(urlList.length / windowSize);
  let resList = new Array(len).fill(0).map(() => new Array());

  for (let i = 0; i < urlList.length; i++) {
    let groupIndex = Math.floor(i / windowSize);
    resList[groupIndex].push(createReq(urlList[i]));
  }
  let infos = [];

  for (let i = 0; i < resList.length; i++) {
    let res = await Promise.all(resList[i]);
    await sleep();
    infos = infos.concat([...res]);
  }
  return infos;
}

(async function () {
  const url = "https://dog.ceo/api/breeds/image/random";
  let res = await sendMultipleRequest(new Array(7).fill(url), 3);
  console.log("batch res is", res);
})();




