let head = document.querySelector(".head");
let tail = document.querySelector(".tail");
let coin = document.querySelector(".coins");

let selection = document.querySelector(".selection");
let selectiontitle = document.querySelector(".selecttitle");
let tosstitle = document.querySelector(".tosstitle");
let bat = document.querySelector(".bat");
let ball = document.querySelector(".ball");

let score = document.querySelector(".score");
let shottitle = document.querySelector(".shottitle");
let shotbtn = document.querySelectorAll(".shotbtn");
let runscore = 0;
let ballscore = 0;
const runscorenum = document.querySelector(".runscore");
const ballscorenum = document.querySelector(".ballscore");
let notice = document.querySelector(".notice");
let aishot = document.querySelector(".aishot");
let target = document.querySelector(".target");
let secondinnings = document.querySelector(".secondinnings");
let defend = document.querySelector(".defend");
let chase = document.querySelector(".chase");

let playgameagain = document.querySelector(".status");
let msg = document.querySelector(".msg");
let playbtn = document.querySelector(".playagain");
let aiselectmsg = document.querySelector(".aiselectmsg");
let userselectmsg = document.querySelector(".userselectmsg");
let gamecontainer = document.querySelector(".gamecontainer");
let userwin = 0;
let aiwin = 0;
let draw = 0;
const userwinsum = document.querySelector(".userwins");
const aiwinsum = document.querySelector(".aiwins");
const draws = document.querySelector(".draws");
let result = document.querySelector(".results");

const aishotselection = () => {
  const selectoptions = [1, 2, 3, 4, 5, 6];
  const randIdx = Math.floor(Math.random() * 6);
  return selectoptions[randIdx];
};

const aiselect = () => {
  const tossopt = ["bat", "ball"];
  const randIdx = Math.floor(Math.random() * 2);
  return tossopt[randIdx];
};

const coinflip = () => {
  const tossopt = ["head", "tail"];
  const randIdx = Math.floor(Math.random() * 2);
  return tossopt[randIdx];
};
aiselectmsg.classList.remove("hide");
userselectmsg.classList.remove("hide");
head.addEventListener("click", () => {
  const usertoss = head.getAttribute("class");
  const coinflipped = coinflip();
  usertossedhead(usertoss, coinflipped);
});

tail.addEventListener("click", () => {
  const usertoss = tail.getAttribute("class");
  const coinflipped = coinflip();
  usertossedtail(usertoss, coinflipped);
});

const showSelectionmsg = () => {
    aiselectmsg.classList.remove("hide");
    userselectmsg.classList.remove("hide");
};

const hideSelectionsmsg = () => {
  setTimeout(()=>{
    aiselectmsg.classList.add("hide");
    userselectmsg.classList.add("hide");
  },3000);
};

const usertossedhead = (usertoss, coinflipped) => {
  if (usertoss === coinflipped) {
    coin.style.display = "none";
    tosstitle.style.display = "none";
    selectiontitle.classList.remove("hide");
    selection.classList.remove("hide");
    selectiontitle.innerText = "You Won, What Would you like to do?";
  } else {
    showSelectionmsg();
    coin.style.display = "none";
    tosstitle.style.display = "none";
    const aiselection = aiselect();
    aiselectmsg.innerText = `You lose, Ai selected to ${aiselection} first`;
    score.classList.remove("hide");
    gamecontainer.classList.add("move-to-top");
    notice.innerText = `NOTE: This is one over game. Ai selected to ${aiselection} first.`;
    secondinnings.display = "none";
    defend.style.display = "none";
    chase.style.display = "none";
    hideSelectionsmsg();
    if (aiselection === "bat") {
      notice.innerText += "Try to restrict AI as early as possible.";
      secondinnings.style.display = "flex";
      userbowling();
    } else {
      notice.innerText += "Try to bat nice and put high on the board.";
      secondinnings.style.display = "flex";
      userbatting();
    }
  }
};

const usertossedtail = (usertoss, coinflipped) => {
  if (usertoss === coinflipped) {
    coin.style.display = "none";
    tosstitle.style.display = "none";
    selectiontitle.classList.remove("hide");
    selection.classList.remove("hide");
    selectiontitle.innerText = "You Won, What Would you like to do?";
  } else {
    showSelectionmsg();
    coin.style.display = "none";
    tosstitle.style.display = "none";
    const aiselection = aiselect();
    aiselectmsg.innerText = `You lose, Ai selected to ${aiselection} first`;
    score.classList.remove("hide");
    gamecontainer.classList.add("move-to-top");
    notice.innerText = `NOTE: This is one over game. Ai selected to ${aiselection} first.`;
    secondinnings.display = "none";
    defend.style.display = "none";
    chase.style.display = "none";
    hideSelectionsmsg();
    if (aiselection === "bat") {
      notice.innerText += "Try to restrict AI as early as possible.";
      secondinnings.style.display = "flex";
      userbowling();
    } else {
      notice.innerText += "Try to bat nice and put high on the board.";
      secondinnings.style.display = "flex";
      userbatting();
    }
  }
};

bat.addEventListener("click", () => {
  showSelectionmsg();
  const userbat = bat.getAttribute("class");
  bat.style.pointerEvents = "none";
  ball.style.pointerEvents = "none";
  userselectmsg.innerText = `You selected to, ${userbat} first`;
  selectiontitle.classList.add("hide");
  selection.classList.add("hide");
  score.classList.remove("hide");
  secondinnings.display = "none";
  defend.style.display = "none";
  chase.style.display = "none";
  gamecontainer.classList.add("move-to-top");
  hideSelectionsmsg();
  notice.innerText = `NOTE: This is one over game. You selected to ${userbat} first. Try to bat nice and put high on the board.`;
  userbatting();
});

ball.addEventListener("click", () => {
  showSelectionmsg();
  const userball = ball.getAttribute("class");
  bat.style.pointerEvents = "none";
  ball.style.pointerEvents = "none";
  userselectmsg.innerText = `You selected to, ${userball} first`;
  selectiontitle.classList.add("hide");
  selection.classList.add("hide");
  score.classList.remove("hide");
  secondinnings.display = "none";
  defend.style.display = "none";
  chase.style.display = "none";
  gamecontainer.classList.add("move-to-top");
  hideSelectionsmsg();
  notice.innerText = `NOTE: This is one over game. You selected to ${userball} first. Try to restrict AI as low as possible.`;
  userbowling();
});

const disableShotButtons = () => {
  shotbtn.forEach((btn) => {
    btn.style.pointerEvents = "none";
  });
};

const enableShotButtons = () => {
  shotbtn.forEach((btn) => {
    btn.style.pointerEvents = "visible";
  });
};

const userbatting = () => {
  shotbtn.forEach((btn) => {
    btn.onclick = null;
    btn.onclick = () => {
      handleUserBatting(btn);
    };
  });
};

const userbowling = () => {
  shotbtn.forEach((btn) => {
    btn.onclick = () => {
      handleUserBowling(btn);
    };
  });
};

const handleUserBatting = (btn) => {
  const userselect = parseInt(btn.innerText);
  const aiselect = parseInt(aishotselection());
  aishot.innerText = `AI chosen ${aiselect}`;
  secondinnings.style.display = "flex";
  if (userselect === aiselect) {
    target.innerText = `Oh no, AI restricted you to ${runscore} runs.`;
    ballscorenum.innerText = "0";
    ballscore++;
    ballscorenum.innerText = `${ballscore}`;
    runscorenum.innerText = `${runscore}`;
    runscore++;
    target.innerText += ` You need to defend ${runscore} runs in 6 balls`;
    disableShotButtons();
    defend.style.display = "block";
    defend.onclick = () => {
      secondbatinning(runscore);
    };
  } else {
    ballscorenum.innerText = "0";
    ballscore++;
    ballscorenum.innerText = `${ballscore}`;
    runscore += userselect;
    runscorenum.innerText = `${runscore}`;
    if (ballscore === 6) {
      runscore++;
      target.innerText = `Over ends, You need to defend ${runscore} runs in 6 balls`;
      disableShotButtons();
      defend.style.display = "block";
      defend.onclick = () => {
        secondbatinning(runscore);
      };
    }
  }
};

const handleUserBowling = (btn) => {
  const userselect = parseInt(btn.innerText);
  const aiselect = parseInt(aishotselection());
  aishot.innerText = `AI chosen ${aiselect}`;
  secondinnings.style.display = "flex";
  if (aiselect === userselect) {
    target.innerText = `Hurray, You restricted AI to ${runscore} runs.`;
    ballscorenum.innerText = "0";
    ballscore++;
    ballscorenum.innerText = `${ballscore}`;
    runscorenum.innerText = `${runscore}`;
    runscore++;
    target.innerText += ` You need to chase ${runscore} runs in 6 balls`;
    disableShotButtons();
    chase.style.display = "block";
    chase.onclick = () => {
      secondballinning(runscore);
    };
  } else {
    ballscorenum.innerText = "0";
    ballscore++;
    ballscorenum.innerText = `${ballscore}`;
    runscore += aiselect;
    runscorenum.innerText = `${runscore}`;
    if (ballscore === 6) {
      runscore++;
      target.innerText = `Over ends, You need to chase ${runscore} runs in 6 balls`;
      disableShotButtons();
      chase.style.display = "block";
      chase.onclick = () => {
        secondballinning(runscore);
      };
    }
  }
};

const secondbatinning = (runscore) => {
  let defendruns = runscore;
  runscore = 0;
  ballscore = 0;
  runscorenum.innerText = runscore;
  ballscorenum.innerText = ballscore;
  notice.innerText = "";
  target.innerText = "";
  aishot.innerText = "";
  defend.style.display = "none";
  enableShotButtons();
  aibatting(defendruns);
};

const secondballinning = (runscore) => {
  let chaseruns = runscore;
  runscore = 0;
  ballscore = 0;
  runscorenum.innerText = runscore;
  ballscorenum.innerText = ballscore;
  notice.innerText = "";
  target.innerText = "";
  aishot.innerText = "";
  chase.style.display = "none";
  enableShotButtons();
  aibowling(chaseruns);
};

const aibatting = (defendruns) => {
  enableShotButtons();
  notice.innerText = "Second Innings, Ai Batting Now";
  target.innerText = `Defend ${defendruns} runs`;
  runscore = 0;
  ballscore = 0;
  runscorenum.innerText = runscore;
  ballscorenum.innerText = ballscore;
  shotbtn.forEach((btn) => {
    btn.onclick = () => {
      handleAIBatting(defendruns, btn);
    };
  });
};

const handleAIBatting = (defendruns, btn) => {
  const userselect = parseInt(btn.innerText);
  const aiselect = parseInt(aishotselection());
  aishot.innerText = `AI chosen ${aiselect}`;
  secondinnings.style.display = "flex";
  ballscore++;
  ballscorenum.innerText = ballscore.toString();
  if (aiselect !== userselect) {
    runscore += aiselect;
    runscorenum.innerText = runscore.toString();
  }

  if (aiselect === userselect) {
    target.innerText = `Hurray!! You beat AI by ${
      defendruns - runscore
    } run(s)`;
    notice.innerText = `${defendruns} run(s) defended successfully`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    userwin++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  }
  if (runscore > defendruns) {
    target.innerText = `Oh no AI chase ${defendruns} run(s)`;
    notice.innerText = `${defendruns} runs chased by AI`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    aiwin++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  } else if (ballscore === 6 && runscore < defendruns) {
    target.innerText = `Hurray!! You beat AI by ${defendruns - runscore} run(s)`;
    notice.innerText = `${defendruns} run(s) defended successfully`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    userwin++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  } else if (
    defendruns === runscore &&
    ballscore === 6 &&
    aiselect === userselect
  ) {
    target.innerText = `That Was Close. You Bowled Well`;
    notice.innerText = `Match Drawn. AI made ${runscore} run(s)`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    draw++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  }
};

const aibowling = (chaseruns) => {
  enableShotButtons();
  notice.innerText = "Second Innings, Ai Bowling Now";
  target.innerText = `Chase ${chaseruns} runs`;
  runscore = 0;
  ballscore = 0;
  runscorenum.innerText = runscore;
  ballscorenum.innerText = ballscore;
  shotbtn.forEach((btn) => {
    btn.onclick = () => {
      handleAIbowling(chaseruns, btn);
    };
  });
};

const handleAIbowling = (chaseruns, btn) => {
  const userselect = parseInt(btn.innerText);
  const aiselect = parseInt(aishotselection());
  aishot.innerText = `AI chosen ${aiselect}`;
  secondinnings.style.display = "flex";

  ballscore++;
  ballscorenum.innerText = ballscore.toString();
  if (aiselect !== userselect) {
    runscore += userselect;
    runscorenum.innerText = runscore.toString();
  }
  if (aiselect === userselect) {
    target.innerText = `Oh no!! AI beat you by ${chaseruns - runscore} run(s)`;
    notice.innerText = `${chaseruns} runs defended by AI`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    aiwin++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  }
  if (runscore > chaseruns) {
    target.innerText = `Hurray, You chase ${chaseruns} run(s)`;
    notice.innerText = `${chaseruns} runs chased by you`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    userwin++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  } else if (ballscore === 6 && runscore < chaseruns) {
    target.innerText = `Oh no!! AI beat you by ${chaseruns - runscore} run(s)`;
    notice.innerText = `${chaseruns} runs defended by AI`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    aiwin++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  } else if (
    defendruns === runscore &&
    ballscore === 6 &&
    aiselect === userselect
  ) {
    target.innerText = `That Was Close. You Bowled Well`;
    notice.innerText = `Match Drawn. AI made ${runscore} run(s)`;
    result.classList.remove("hide");
    playgameagain.classList.remove("hide");
    draw++;
    userwinsum.innerText = `${userwin}`;
    aiwinsum.innerText = `${aiwin}`;
    draws.innerText = `${draw}`;
    disableShotButtons();
    playagain();
  }
};

const playagain = () => {
  playbtn.onclick = () => {
    enableShotButtons();
    runscore = 0;
    ballscore = 0;
    runscorenum.innerText = runscore;
    ballscorenum.innerText = ballscore;
    notice.innerText = "";
    target.innerText = "";
    aishot.innerText = "";
    coin.style.display = "block";
    tosstitle.style.display = "block";
    selectiontitle.classList.add("hide");
    selection.classList.add("hide");
    bat.style.pointerEvents = "auto";
    ball.style.pointerEvents = "auto";
    score.classList.add("hide");
    shottitle.classList.add("hide");
    result.classList.add("hide");
    playgameagain.classList.add("hide");
    gamecontainer.classList.remove("move-to-top");
    aiselectmsg.innerText = "";
    userselectmsg.innerText = "";
  };
};

/*---------END----------*/
