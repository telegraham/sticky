##############################

question_live = Question.create({
  stub: "live",
  name: "Where do you live?"
})

Option.create({
  stub: "liveBigCity",
  question: question_live,
  name: "A big city"
});
Option.create({
  stub: "liveSmallCity",
  question: question_live,
  name: "A small city"
});
Option.create({
  stub: "liveBurb",
  question: question_live,
  name: "A suburb"
});
Option.create({
  stub: "liveTown",
  question: question_live,
  name: "A small town"
});
Option.create({
  stub: "liveRural",
  question: question_live,
  name: "A rural area"
});

##############################

question_shirt = Question.create({
  stub: "shirt",
  name: "Where was your shirt made?",
  subtitle: "Odds are it wasn't made in the same place you bought it."
})

Option.create({
  stub: "shirtNA",
  question: question_shirt,
  name: "North America"
})
Option.create({
  stub: "shirtCA",
  question: question_shirt,
  name: "Central America"
})
Option.create({
  stub: "shirtSA",
  question: question_shirt,
  name: "South America"
})
Option.create({
  stub: "shirtEurope",
  question: question_shirt,
  name: "Europe"
})
Option.create({
  stub: "shirtAsia",
  question: question_shirt,
  name: "Asia"
})
Option.create({
  stub: "shirtAfrica",
  question: question_shirt,
  name: "Africa"
})
Option.create({
  stub: "shirtAustralia",
  question: question_shirt,
  name: "Australia"
})
Option.create({
  stub: "shirtOceania",
  question: question_shirt,
  name: "Oceania"
})
Option.create({
  stub: "shirtOther",
  question: question_shirt,
  name: "Other"
})

##############################
question_consumed = Question.create({
  stub: "consumed",
  name: "Which of these have you consumed in the past day?",
  subtitle: "In Chicago, these have to be imported."
})

Option.create({
  stub: "consumedChocolate",
  question: question_consumed,
  name: "Chocolate"
})
Option.create({
  stub: "consumedCoffee",
  question: question_consumed,
  name: "Coffee"
})
Option.create({
  stub: "consumedSeafood",
  question: question_consumed,
  name: "Seafood"
})
Option.create({
  stub: "consumedAvocados",
  question: question_consumed,
  name: "Avocados"
})
Option.create({
  stub: "consumedTea",
  question: question_consumed,
  name: "Tea"
})
Option.create({
  stub: "consumedRice",
  question: question_consumed,
  name: "Rice"
})
Option.create({
  stub: "consumedTobacco",
  question: question_consumed,
  name: "Tobacco"
})
Option.create({
  stub: "consumedOJ",
  question: question_consumed,
  name: "Orange Juice"
})
Option.create({
  stub: "consumedNone",
  question: question_consumed,
  name: "None of the above"
})

##############################
question_born = Question.create({
  stub: "born",
  name: "Where were you born?",
  subtitle: "Maybe you've lived in the same place all your life—maybe you've moved."
})

Option.create({
  stub: "bornBigCity",
  question: question_born,
  name: "A big city"
})
Option.create({
  stub: "bornSmallCity",
  question: question_born,
  name: "A small city"
})
Option.create({
  stub: "bornBurb",
  question: question_born,
  name: "A suburb"
})
Option.create({
  stub: "bornTown",
  question: question_born,
  name: "A small town"
})
Option.create({
  stub: "bornRural",
  question: question_born,
  name: "A rural area"
})

##############################
question_identify = Question.create({
  stub: "identify",
  name: "With which ethnic backgrounds do you most identify?",
  subtitle: "You may not have moved far in your life, but maybe your ancestors did."
})

Option.create({
  stub: "identifyAfrican",
  question: question_identify,
  name: "African"
})
Option.create({
  stub: "identifyAsian",
  question: question_identify,
  name: "Asian"
})
Option.create({
  stub: "identifyEuropean",
  question: question_identify,
  name: "European"
})
Option.create({
  stub: "identifyIndigenous",
  question: question_identify,
  name: "Indigenous American/Alaskan"
})
Option.create({
  stub: "identifyLatino",
  question: question_identify,
  name: "Latino/a or Chicano/a"
})
Option.create({
  stub: "identifyMiddleEastern",
  question: question_identify,
  name: "Middle Eastern"
})
Option.create({
  stub: "identifyPacificIslander",
  question: question_identify,
  name: "Pacific Islander"
})
Option.create({
  stub: "identifyOther",
  question: question_identify,
  name: "Other"
})

##############################
question_speak = Question.create({
  stub: "speak",
  name: "How many languages do you speak?",
  subtitle: "Maybe you learned another language in school, or from your family."
})

Option.create({
  stub: "speak1",
  question: question_speak,
  name: "1"
})
Option.create({
  stub: "speak2",
  question: question_speak,
  name: "2"
})
Option.create({
  stub: "speak3",
  question: question_speak,
  name: "3"
})
Option.create({
  stub: "speak4",
  question: question_speak,
  name: "4"
})
Option.create({
  stub: "speak5",
  question: question_speak,
  name: "5+"
})

##############################
question_raised = Question.create({
  stub: "raised",
  name: "In which religion were you raised, if any?"
})

Option.create({
  stub: "raisedBuddhism",
  question: question_raised,
  name: "Buddhism"
})
Option.create({
  stub: "raisedChristianity",
  question: question_raised,
  name: "Christianity"
})
Option.create({
  stub: "raisedHinduism",
  question: question_raised,
  name: "Hinduism"
})
Option.create({
  stub: "raisedIndigenousReligion",
  question: question_raised,
  name: "Indigenous Religion"
})
Option.create({
  stub: "raisedIslam",
  question: question_raised,
  name: "Islam"
})
Option.create({
  stub: "raisedJudaism",
  question: question_raised,
  name: "Judaism"
})
Option.create({
  stub: "raisedPaganWiccan",
  question: question_raised,
  name: "Pagan/Wiccan"
})
Option.create({
  stub: "raisedSikhism",
  question: question_raised,
  name: "Sikhism"
})
Option.create({
  stub: "raisedOther",
  question: question_raised,
  name: "Other"
})
Option.create({
  stub: "raisedNoReligion",
  question: question_raised,
  name: "No Religion"
})

##############################
question_practice = Question.create({
  stub: "practice",
  name: "What religion do you practice now, if any?"
})






Option.create({
  stub: "practiceBuddhism",
  question: question_practice,
  name: "Buddhism"
})
Option.create({
  stub: "practiceChristianity",
  question: question_practice,
  name: "Christianity"
})
Option.create({
  stub: "practiceHinduism",
  question: question_practice,
  name: "Hinduism"
})
Option.create({
  stub: "practiceIndigenousReligion",
  question: question_practice,
  name: "Indigenous Religion"
})
Option.create({
  stub: "practiceIslam",
  question: question_practice,
  name: "Islam"
})
Option.create({
  stub: "practiceJudaism",
  question: question_practice,
  name: "Judaism"
})
Option.create({
  stub: "practicePaganWiccan",
  question: question_practice,
  name: "Pagan/Wiccan"
})
Option.create({
  stub: "practiceSikhism",
  question: question_practice,
  name: "Sikhism"
})
Option.create({
  stub: "practiceOther",
  question: question_practice,
  name: "Other"
})
Option.create({
  stub: "practiceNoReligion",
  question: question_practice,
  name: "No Religion"
})

#################################

RESPONSE_DISTRIBUTION = [1, 1, 1, 1, 1, 1, 1, 2, 2, 3]

100.times do
  user = User.create
  Question.all.each do |question|
    response_count = RESPONSE_DISTRIBUTION.sample
    options = question.options.sample(response_count)
    options.each do |option|
      Response.create(option: option, user: user)
    end
  end
end
