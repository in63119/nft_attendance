export const when = () => {
  const result = {
    result: false,
    img: "",
    date: "",
  };

  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const dateKo = `${month}월 ${date}일`;

  for (const day in schedule) {
    const eachDate = schedule[day].date;

    if (dateKo === eachDate) {
      result.date = dateKo;
      result.img = schedule[day].img;
      result.result = true;
    }
  }

  return result;
};

const schedule = {
  day1: {
    date: "10월 10일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/X9RtYCvKXi0WkBrZFSXaY-1696588036259.jpg",
  },
  day2: {
    date: "10월 11일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/ou5duqDamzGRCbAq10nXi-1696591729943.jpg",
  },
  day3: {
    date: "10월 12일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/AcxZVI_KSKoZBITqr1nk1-1696591739725.jpg",
  },
  day4: {
    date: "10월 13일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/nsNOrRcwpBnBUt0jNZHgy-1696591750932.jpg",
  },
  day5: {
    date: "10월 16일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/rJZzh1uZCTdLID6gcxzJ7-1696592418531.jpg",
  },
  day6: {
    date: "10월 17일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/_GXDLARKibpFQYb_B2CBc-1696592428719.jpg",
  },
  day7: {
    date: "10월 18일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/mCHqaqPWC0eCpyilS1QRB-1696592441363.jpg",
  },
  day8: {
    date: "10월 19일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/7gVey50d5or09RCG1fVMr-1696592450544.jpg",
  },
  day9: {
    date: "10월 20일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/37p2O11m6SgnHRJAxK1n2-1696592493179.jpg",
  },
  day10: {
    date: "10월 23일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/AiRNuogaRT117EP9fCEa3-1696592478112.jpg",
  },
  day11: {
    date: "10월 24일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/1W4cF3lmdnYNMnRabG4vI-1696592531827.jpg",
  },
  day12: {
    date: "10월 25일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/KTjJm5bwg09wE2-FnpDc1-1696592538442.jpg",
  },
  day13: {
    date: "10월 26일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/QL5xL_H2A6Y-RkU8wXOV1-1696592549018.jpg",
  },
  day14: {
    date: "10월 27일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/pPi5zKWiiftCThbYCF6NA-1696592557198.jpg",
  },
  day15: {
    date: "10월 30일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/zgOJKyF5sTj3QJfu33Rbz-1696592564196.jpg",
  },
  day16: {
    date: "10월 31일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/Gur5YyGNrBEsb_4rDV4AK-1696592571774.jpg",
  },
  day17: {
    date: "11월 1일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/kaIRjBAwaXN-JSiwMuKs0-1696592585558.jpg",
  },
  day18: {
    date: "11월 2일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/1moEVqROwE6wvCc2ers5e-1696592592970.jpg",
  },
  day19: {
    date: "11월 3일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/9B3A8_sh69nKSkkeg25LD-1696592600984.jpg",
  },
  day20: {
    date: "11월 6일",
    img: "https://s3.ap-northeast-2.amazonaws.com/urclass-images/YnrntsTgEkJnx2TqDZyU5-1696592618588.jpg",
  },
};
