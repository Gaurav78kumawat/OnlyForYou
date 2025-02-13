const febHolidays = [
    "Suno Jaan .....",
    "Yeh pyaar ka cycle hai, achee se feel karna",
    "Dil bhi aap, jaan bhi aap",
    "Meri chahat ki pehchaan bhi aap.",
    "Jeene ki wajah bhi aap bane,",
    "Meri duniya ka armaan bhi aap.",
    "Dukh me aap aur khushi me Aap",
    "Jindagi ke safar me kaafi ho Aap ❤",
    "Maine shiddat se chaha hai aapko, I Love you So muchh mera Baccha ",
    "You're my everything ♾️",
    "You are my soulmate ✨💕",
    "And of course... wait my dear.....",
    "My future wife🙈😘",
    "I will always be there for you🫂",
    "No matter how far we are🥰",
    "I promise I will never multi-thread on you",
    "You're the prettiest, cutest, funniest, and understandable life partner",
    "In one word, you're just perfect.😍",
    "I'm the luckiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "Kabhi khud ko akela mat samjhna hna💓",
    "Main humesa Apke sath hun 🤞🥰",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😨",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "Acche lagte hai wo pal jo apke",
    "sath bitaye hain virtually or offline💓",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete love cycle is just for you, 😘",
    "Please always take care of you my love❤",
    "I'm binary in love; you're the one and only '1 in my life",
    "Thanks to God and Radhika🤓 for helping us,ki hume milaya🥰",
    "You're the love of my life,",
    "I Love You So much Mera Baccha Bhot Saara ♾️😘😘💋💋",
    "Apni Meets Abhi tkk ...",
    " ~ 24 November : Haaye 🤓, Wo Unromantic type road pr 🙈😂",
    "~ 14 & 15 July : Yeh do din toh ese , jinhe hum kabhi nhi bhul skte 🤓",
    "Apna First Kiss , Haaye Milte hi first hug 🙈🤩,Or Bhot Saari baatein.",
    "22 September : Yeh toh wo Din hai jis din me mummy ko btakr aaya ",
    "Apna movie dekhna , or theatre me wo romantic moments 🙈🫠",
    "26 October : Iss din Apna City Park Jana hua , Superb time 🤩🥰😘",
    "28 November : Abhi Sardiyo me Apna College me Time",
    " Spend Karna , Haaye : Saath hi bhot se romantic moments 🙈😘",
    "Yeh sab apni wo yaadein hai jinhe hum ",
    "Zindagi bhar yaad rakhenge jaan 😘🥰",
    "I Promise you my dear wifee Jii",
    "I always take care of you , and i will Never cheat on you 😘🤓🫶😘",
    "I Love You So Much Merii Jaaan 🫴🌍",
    "😘😘😘😘💋💋💋😘😘😘😘",
    "Will You Marry Me Baccha 🥹🫴💍"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  