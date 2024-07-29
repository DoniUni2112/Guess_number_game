introCard.onclick = () => {
    new Audio("./assets/title.mp3").play();
    mysteryNumber = Math.floor(Math.random() * 100) + 1;
    console.log(mysteryNumber);
    live = 5;
    document.documentElement.style.setProperty(
      "--tube-percentage",
      (5 - live) * 20 + "%"
    );
    // start the game
    introCard.classList.add("zoomOutAndFadeOut");
    setTimeout(() => {
      introCard.style.display = "none";
      indicatorWave.style.display = tmpIndicatorDisplatType;
      guessCard.style.display = tmpGuessCardDisplatType;
      gameOverCard.style.display = "none";
      winCard.style.display = "none";
      canvas.style.display = "none";
    }, 1000);
  };