/*
NOTES

The idea of weighting the levels of agreement,
was because of more radical questions I've seen
on other quizes. 

Such as the race one on the OG test. 
Agreeing that your race is "superior"
than another should sink your social
score like a rock, while disagreeing
to it, at any level, should be near zero

While this method of writing questions
sure is more verbose, I think it *could*
make a better result than other methods

Well, if it doesn't, I'm blaming my
sketti code

TEMPLATE QUESTION
use this to copy and paste
{
        "id": NUMBER_HERE,
        "question": "QUESTION_HERE",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": 0
            }
        }
    }
*/

questions =  [
    {
        "id": 0, 
        "question": "Freedom of business is the best practical way a society can prosper.", 
        "effects": {
            "strongly_agree": {
                "economic": 1,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": .5,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -1,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 1,
        "question": "Charity is a better way of helping those in need than social welfare.",
        // grading: economic obvious, but power; the idea is that this would reduce the power of the gov
        // welcoming input
        "effects": {
            "strongly_agree": {
                "economic": 1,
                "power": -.5,
                "social": 0
            },
            "agree": {
                "economic": 0.5,
                "power": -.25,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.5,
                "power": .25,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -1,
                "power": .5,
                "social": 0
            }
        }
    },
    {
        "id": 2,
        "question": "Wages are always fair, as employers know best what a worker's labour is worth.",
        "effects": {
            "strongly_agree": {
                "economic": 1,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": .5,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -1,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 3,
        "question": "It is \"human nature\" to be greedy.",
        "effects": {
            "strongly_agree": {
                "economic": 1.25,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": .75,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -1,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 4,
        "question": "\"Exploitation\" is an outdated term, as the struggles of 1800s capitalism doesn't exist anymore.",
        "effects": {
            "strongly_agree": {
                "economic": 2,
                "power": 0,
                "social": -1
            },
            "agree": {
                "economic": 1,
                "power": 0,
                "social": -.5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.75,
                "power": 0,
                "social": .5
            },
            "strongly_disagree": {
                "economic": -1.25,
                "power": 0,
                "social": 1
            }
        }
    },
    {
        "id": 5,
        "question": "Communism is an ideal that can never work in practice.",
        // Notes: 
        // I weighed this higher on the left wing
        // cause generally (in an American persepective)
        // it has been tried and failed
        // also, gave strongly_agree a slight social
        // conservative bump, b/c those who are that adamant
        // and love "owning those dumm sjws!" and watch ben shapiro
        // tend to be more conservative (shocking!)
        "effects": {
            "strongly_agree": {
                "economic": .5,
                "power": 0,
                "social": -.5
            },
            "agree": {
                "economic": .25,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -2.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -5,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 6,
        "question": "Taxation of the wealthy is a bad idea, society would be better off without it.",
        "effects": {
            "strongly_agree": {
                "economic": 2,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": 1,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -1,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -2,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 7,
        "question": "The harder you work, the more you progress up the social ladder.",
        "effects": {
            "strongly_agree": {
                "economic": 1,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": 0.5,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -1,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 8,
        "question": "Organisations and corporations cannot be trusted and need regulating by the government.",
        "effects": {
            "strongly_agree": {
                "economic": -1,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -1,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 9,
        "question": "A government that provides for everyone is an inherently good idea.",
        "effects": {
            "strongly_agree": {
                "economic": -1,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": .25,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": .5,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 10,
        "question": "The current welfare system should be expanded to further combat inequality.",
        "effects": {
            "strongly_agree": {
                "economic": -1,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0.75,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 1.25,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 11,
        "question": "Land should not be a commodity to be bought and sold.",
        "effects": {
            "strongly_agree": {
                "economic": -3,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": -1.5,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 1,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 12,
        "question": "All industry and the bank should be nationalised.",
        "effects": {
            "strongly_agree": {
                "economic": -3,
                "power": 1.5,
                "social": 0
            },
            "agree": {
                "economic": -1.5,
                "power": .75,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0.75,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 1,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 13,
        "question": "Class is the primary division of society.",
        "effects": {
            "strongly_agree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": -.25,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0.25,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0.5,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 14,
        "question": "Economic inequality is too high in the world.",
        "effects": {
            "strongly_agree": {
                "economic": -0.75,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": -0.33,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0.33,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0.75,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 15,
        "question": "Sometimes it is right that the government may spy on its citizens to combat extremists and terrorists.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 2,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -2,
                "social": 0
            }
        }
    },
    {
        "id": 16,
        "question": "Authority figures, if morally correct, are a good thing for society.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            }
        }
    },
    {
        "id": 17,
        "question": "Strength is necessary for any government to succeed.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1.5,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": .75,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.75,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1.5,
                "social": 0
            }
        }
    },
    {
        "id": 18,
        "question": "Only the government can fairly and effectively regulate organisations.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.75,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1.5,
                "social": 0
            }
        }
    },
    {
        "id": 19,
        "question": "Society requires structure and bureaucracy in order to function.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -2,
                "social": 0
            }
        }
    },
    {
        "id": 20,
        "question": "Mandatory IDs should be used to ensure public safety.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            }
        }
    },
    {
        "id": 21,
        "question": "In times of crisis, safety becomes more important than civil liberties.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1.25,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": .66,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            }
        }
    },
    {
        "id": 22,
        "question": "If you have nothing to hide, you have nothing to fear.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            }
        }
    },
    {
        "id": 23,
        "question": "The government should be less involved in the day to day life of its citizens.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -.5,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": -.25,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0.25,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            }
        }
    },
    {
        "id": 24,
        "question": "Jury nullification should be legal.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -1,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": -.5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            }
        }
    },
    {
        "id": 25,
        "question": "The smaller the government, the freer the people.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -1.5,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": -.75,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": .75,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 1.5,
                "social": 0
            }
        }
    },
    {
        "id": 26,
        "question": "The government should, at most, provide emergency services and law enforcement.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -3,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": -1.5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 1,
                "social": 0
            }
        }
    },
    {
        "id": 27,
        "question": "The police was not made to protect the people, but to uphold the status-quo by force.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -1.5,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": -.75,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 1,
                "social": 0
            }
        }
    },
    {
        "id": 28,
        "question": "State schools are a bad idea because our state shouldn't be influencing our children.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -2,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": .5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": .75,
                "social": 0
            }
        }
    },
    {
        "id": 29,
        "question": "Two consenting individuals should be able to do whatever they want with each other, even if it makes me uncomfortable.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0.75,
                "social": 1
            },
            "agree": {
                "economic": 0,
                "power": -.25,
                "social": 0.75
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": .75,
                "social": -.75
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 1.15,
                "social": -1.25
            }
        }
    },
    {
        "id": 30,
        "question": "An individual's body is their own property, and they should be able to do anything they desire to it.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -.75,
                "social": 0.25
            },
            "agree": {
                "economic": 0,
                "power": -.25,
                "social": .15
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0.75,
                "social": -.25
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 1.15,
                "social": -.5
            }
        }
    },
    {
        "id": 31,
        "question": "A person should be able to worship whomever or whatever they want.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": -.25,
                "social": .5
            },
            "agree": {
                "economic": 0,
                "power": -.15,
                "social": 0.25
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": .5,
                "social": -1
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 1.5,
                "social": -1.5
            }
        }
    },
    {
        "id": 32,
        "question": "Animals deserve certain universal rights.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": 0.75
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": 0.25
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": -.25
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": -.75
            }
        }
    },
    {
        "id": 33,
        "question": "Gender is a social construct, not a natural state of affairs.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": 1.5
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": 0.75
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": .75
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": 1
            }
        }
    },
    {
        "id": 34,
        "question": "Laws based on cultural values, rather than ethical ones, aren't justice.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": 1
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": 0.5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": -.75
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": -1.15
            }
        }
    },
    {
        "id": 35,
        "question": "Autonomy of body extends even to minors, the mentally ill, and serious criminals.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": 1
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": 0.5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": -.5
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": -1
            }
        }
    },
    {
        "id": 36,
        "question": "Homosexuality is against my values.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": -2
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": -1
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": .25
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": .5
            }
        }
    },
    {
        "id": 37,
        "question": "Transgender individuals should not be able to adopt children.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": -1.5
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": -.75
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": .75
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": 1
            }
        }
    },
    {
        "id": 38,
        "question": "Drugs are harmful and should be banned.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1,
                "social": -1
            },
            "agree": {
                "economic": 0,
                "power": .5,
                "social": -.5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.5,
                "social": .5
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": 1
            }
        }
    },
    {
        "id": 39,
        "question": "The death penalty should exist for certain crimes.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1.25,
                "social": -.25
            },
            "agree": {
                "economic": 0,
                "power": .5,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -.75,
                "social": .25
            }
        }
    },
    {
        "id": 40,
        "question": "Victimless crimes should still be punished.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1.25,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": .75,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -0.5,
                "social": 0
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": 0
            }
        }
    },
    {
        "id": 41,
        "question": "One cannot be moral without religion.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": -1.75
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": -1
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": .5
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": 1.25
            }
        }
    },
    {
        "id": 42,
        "question": "Parents should hold absolute power over their children, as they are older and more experienced.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": -1
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": -.5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": .5
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": 1
            }
        }
    },
    {
        "id": 43,
        "question": "Multiculturalism is bad.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": -1.5
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": -.75
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": .5
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": 1
            }
        }
    },
    {
        "id": 44,
        "question": "Redistributing wealth away from the wealthy through taxes is a viable way of defeating inequality.",
        "effects": {
            "strongly_agree": {
                "economic": -1.25,
                "power": 0,
                "social": 1.75
            },
            "agree": {
                "economic": -.75,
                "power": 0,
                "social": 1
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.5,
                "power": 0,
                "social": -.25
            },
            "strongly_disagree": {
                "economic": -1.25,
                "power": 0,
                "social": -.5
            }
        }
    },
    {
        "id": 45,
        "question": "If economic globalisation is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations.",
        "effects": {
            "strongly_agree": {
                "economic": -.75,
                "power": 0,
                "social": 1
            },
            "agree": {
                "economic": -.5,
                "power": 0,
                "social": .5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": .5,
                "power": 0,
                "social": -.5
            },
            "strongly_disagree": {
                "economic": .75,
                "power": 0,
                "social": -.5
            }
        }
    },
    {
        "id": 46,
        "question": "I’d always support my country, whether it was right or wrong. No matter what.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1.5,
                "social": -1
            },
            "agree": {
                "economic": 0,
                "power": 1,
                "social": -.5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.75,
                "social": .25
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": .25
            }
        }
    },
    {
        "id": 47,
        "question": "No one chooses their country of birth, so it’s foolish to be proud of it.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": .75
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": 0.25
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": -.25
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": -.75
            }
        }
    },
    {
        "id": 48,
        "question": "Our race has many superior qualities, compared with other races.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 0,
                "social": -10
            },
            "agree": {
                "economic": 0,
                "power": 0,
                "social": -5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": 0,
                "social": .5
            },
            "strongly_disagree": {
                "economic": 0,
                "power": 0,
                "social": .75
            }
        }
    },
    {
        "id": 49,
        "question": "Military action that defies international law is sometimes justified.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": 1,
                "social": -1
            },
            "agree": {
                "economic": 0,
                "power": .5,
                "social": -.5
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.5,
                "social": .5
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -1,
                "social": .5
            }
        }
    },
    {
        "id": 50,
        "question": "Workplace democracy is a fundamentally good idea.",
        "effects": {
            "strongly_agree": {
                "economic": -1.5,
                "power": -.25,
                "social": 0
            },
            "agree": {
                "economic": -.75,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": .5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": .75,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 51,
        "question": "Protectionism is sometimes necessary in trade.",
        "effects": {
            "strongly_agree": {
                "economic": 0,
                "power": .75,
                "social": -.25
            },
            "agree": {
                "economic": 0,
                "power": .25,
                "social": -.125
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": 0,
                "power": -.25,
                "social": .125
            },
            "strongly_disagree": {
                "economic": 0,
                "power": -.75,
                "social": .25
            }
        }
    },
    {
        "id": 52,
        "question": "The only social responsibility of a company should be to deliver a profit to its shareholders.",
        "effects": {
            "strongly_agree": {
                "economic": 1.5,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": 1,
                "power": 0,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -.5,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -.75,
                "power": 0,
                "social": 0
            }
        }
    },
    {
        "id": 53,
        "question": "The rich are too highly taxed.",
        "effects": {
            "strongly_agree": {
                "economic": 1.5,
                "power": 0,
                "social": 0
            },
            "agree": {
                "economic": 0,
                "power": 1,
                "social": 0
            },
            "neutral": {
                "economic": 0,
                "power": 0,
                "social": 0
            },
            "disagree": {
                "economic": -1,
                "power": 0,
                "social": 0
            },
            "strongly_disagree": {
                "economic": -1.5,
                "power": 0,
                "social": 0
            }
        }
    }
];