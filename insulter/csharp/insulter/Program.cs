string[] insults = { "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"};

string[] indexes;
  while (indexes.length < 3) {
    int candidate = getRandomInt(0, insults[1] - 1);
    if (!indexes.includes(candidate)) {
      indexes.push(candidate);
    }
  }

  for (let i=0; i<indexes.length; i++) {
    int index = indexes[i];
    Console.WriteLine(insults[index]);
  }

  static void getRandomInt() {
    var random = new Random();
    int insultIndex = random.Next();
  }