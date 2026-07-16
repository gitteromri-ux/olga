// 108-item Enneagram inventory — 12 items per type.
// Each item is a first-person statement rated on a 5-point agree/disagree scale.
// `type` indicates which of the nine types the item loads onto.

export interface Question {
  id: number;
  text: string;
  type: number; // 1-9
}

export const questions: Question[] = [
  // ---------------- TYPE 1 — The Reformer ----------------
  { id: 1, type: 1, text: "I have a strong inner sense of right and wrong, and I hold myself to it." },
  { id: 2, type: 1, text: "I notice mistakes and imperfections that other people overlook." },
  { id: 3, type: 1, text: "I feel a duty to improve things and leave them better than I found them." },
  { id: 4, type: 1, text: "I often hear a critical inner voice judging what I do." },
  { id: 5, type: 1, text: "I try hard to be fair, honest, and principled even when it costs me." },
  { id: 6, type: 1, text: "Disorder and sloppiness genuinely bother me." },
  { id: 7, type: 1, text: "I hold back anger because I think I should stay reasonable and in control." },
  { id: 8, type: 1, text: "I believe there is usually a correct way to do things." },
  { id: 9, type: 1, text: "I feel responsible for making sure standards are met." },
  { id: 10, type: 1, text: "I can be hard on myself when I fall short of my own ideals." },
  { id: 11, type: 1, text: "I value self-discipline and dislike wasting time." },
  { id: 12, type: 1, text: "I want to be good and to do the right thing above all." },

  // ---------------- TYPE 2 — The Helper ----------------
  { id: 13, type: 2, text: "I instinctively sense what other people need and try to provide it." },
  { id: 14, type: 2, text: "I feel most valued when I am helping or supporting someone." },
  { id: 15, type: 2, text: "I find it hard to ask for help or admit I have needs of my own." },
  { id: 16, type: 2, text: "I want the people I care about to know how much I do for them." },
  { id: 17, type: 2, text: "I adjust myself to become what others want me to be." },
  { id: 18, type: 2, text: "Being needed matters deeply to me." },
  { id: 19, type: 2, text: "I can become resentful when my care isn't appreciated." },
  { id: 20, type: 2, text: "I am warm, generous, and quick to offer affection." },
  { id: 21, type: 2, text: "I often put others' needs ahead of my own without noticing." },
  { id: 22, type: 2, text: "I like to feel indispensable in people's lives." },
  { id: 23, type: 2, text: "I pride myself on being a caring and giving person." },
  { id: 24, type: 2, text: "I struggle when someone I've helped pulls away from me." },

  // ---------------- TYPE 3 — The Achiever ----------------
  { id: 25, type: 3, text: "I am driven to succeed and to be seen as successful." },
  { id: 26, type: 3, text: "I adapt my image depending on who I'm trying to impress." },
  { id: 27, type: 3, text: "I set goals and work efficiently to accomplish them." },
  { id: 28, type: 3, text: "I fear being seen as a failure more than almost anything." },
  { id: 29, type: 3, text: "I tend to measure my worth by my achievements." },
  { id: 30, type: 3, text: "I can put my feelings aside to keep performing and get things done." },
  { id: 31, type: 3, text: "I want to be admired and recognized for what I accomplish." },
  { id: 32, type: 3, text: "I am competitive and like to come out on top." },
  { id: 33, type: 3, text: "I present a polished, confident version of myself to the world." },
  { id: 34, type: 3, text: "I stay busy and productive; slowing down feels uncomfortable." },
  { id: 35, type: 3, text: "I'm good at motivating people toward a goal." },
  { id: 36, type: 3, text: "I focus on results and on being effective." },

  // ---------------- TYPE 4 — The Individualist ----------------
  { id: 37, type: 4, text: "I feel that I am fundamentally different from other people." },
  { id: 38, type: 4, text: "I am drawn to what is deep, authentic, and emotionally intense." },
  { id: 39, type: 4, text: "I often long for something that is missing in my life." },
  { id: 40, type: 4, text: "My moods and emotions run deep and shape how I see the world." },
  { id: 41, type: 4, text: "I want to express my unique identity and be truly seen." },
  { id: 42, type: 4, text: "I can feel envious of others who seem to have what I lack." },
  { id: 43, type: 4, text: "I am attracted to beauty, art, and meaningful self-expression." },
  { id: 44, type: 4, text: "Ordinary, conventional life feels flat and unsatisfying to me." },
  { id: 45, type: 4, text: "I am comfortable exploring melancholy and difficult feelings." },
  { id: 46, type: 4, text: "I fear that I have no lasting identity or significance of my own." },
  { id: 47, type: 4, text: "I withdraw into my inner world to process my emotions." },
  { id: 48, type: 4, text: "I want my life and my work to be personal and original." },

  // ---------------- TYPE 5 — The Investigator ----------------
  { id: 49, type: 5, text: "I need plenty of private time and space to recharge." },
  { id: 50, type: 5, text: "I prefer to observe and understand before I get involved." },
  { id: 51, type: 5, text: "I feel more secure when I am knowledgeable and prepared." },
  { id: 52, type: 5, text: "I guard my time, energy, and resources carefully." },
  { id: 53, type: 5, text: "I dislike having demands or expectations placed on me." },
  { id: 54, type: 5, text: "I get deeply absorbed in subjects that fascinate me." },
  { id: 55, type: 5, text: "I tend to detach from my emotions and analyze things instead." },
  { id: 56, type: 5, text: "I value competence and independence highly." },
  { id: 57, type: 5, text: "Too much social contact leaves me drained." },
  { id: 58, type: 5, text: "I keep parts of myself private, even from people close to me." },
  { id: 59, type: 5, text: "I like to think things through thoroughly on my own." },
  { id: 60, type: 5, text: "I feel that I never have quite enough resources to feel safe." },

  // ---------------- TYPE 6 — The Loyalist ----------------
  { id: 61, type: 6, text: "I scan for what could go wrong so I can be prepared." },
  { id: 62, type: 6, text: "I value loyalty and being able to trust and be trusted." },
  { id: 63, type: 6, text: "I often question and test whether people are reliable." },
  { id: 64, type: 6, text: "I feel anxious when I'm uncertain about what to expect." },
  { id: 65, type: 6, text: "I look for guidance, rules, or authority I can rely on." },
  { id: 66, type: 6, text: "My mind runs through worst-case scenarios." },
  { id: 67, type: 6, text: "I am committed and dependable once I trust something." },
  { id: 68, type: 6, text: "I can be skeptical of authority even while wanting its support." },
  { id: 69, type: 6, text: "I feel safer when I have a plan and know the risks." },
  { id: 70, type: 6, text: "I second-guess my own decisions and seek reassurance." },
  { id: 71, type: 6, text: "I stand by my people and commitments through hard times." },
  { id: 72, type: 6, text: "Doubt and worry are familiar companions for me." },

  // ---------------- TYPE 7 — The Enthusiast ----------------
  { id: 73, type: 7, text: "I love planning fun experiences and looking forward to what's next." },
  { id: 74, type: 7, text: "I avoid pain and discomfort by keeping my options open." },
  { id: 75, type: 7, text: "I get bored easily and crave variety and stimulation." },
  { id: 76, type: 7, text: "I am optimistic and can find the upside in almost anything." },
  { id: 77, type: 7, text: "I have more ideas and plans than I could ever complete." },
  { id: 78, type: 7, text: "I dislike feeling trapped, limited, or committed too soon." },
  { id: 79, type: 7, text: "I reframe problems quickly so I don't have to sit with them." },
  { id: 80, type: 7, text: "I am spontaneous, energetic, and quick-thinking." },
  { id: 81, type: 7, text: "I want to experience as much of life as possible." },
  { id: 82, type: 7, text: "I struggle to stay with one thing when something exciting appears." },
  { id: 83, type: 7, text: "I use activity and anticipation to keep my spirits up." },
  { id: 84, type: 7, text: "The fear of missing out strongly influences my choices." },

  // ---------------- TYPE 8 — The Challenger ----------------
  { id: 85, type: 8, text: "I take charge naturally and am comfortable with power." },
  { id: 86, type: 8, text: "I protect the people and things that are under my care." },
  { id: 87, type: 8, text: "I say what I think directly and don't shy from confrontation." },
  { id: 88, type: 8, text: "I dislike feeling controlled or dependent on anyone." },
  { id: 89, type: 8, text: "I respect strength and have little patience for weakness or evasion." },
  { id: 90, type: 8, text: "I push hard against obstacles and resistance." },
  { id: 91, type: 8, text: "I hide my vulnerability behind a strong exterior." },
  { id: 92, type: 8, text: "I want to be in control of my own life and destiny." },
  { id: 93, type: 8, text: "I stand up for the underdog and against injustice." },
  { id: 94, type: 8, text: "My presence and energy tend to be large and forceful." },
  { id: 95, type: 8, text: "I trust action and will more than caution." },
  { id: 96, type: 8, text: "I can be intense, blunt, and intimidating without meaning to be." },

  // ---------------- TYPE 9 — The Peacemaker ----------------
  { id: 97, type: 9, text: "I go along with others to keep the peace and avoid conflict." },
  { id: 98, type: 9, text: "I can see and appreciate all sides of an issue." },
  { id: 99, type: 9, text: "I tend to merge with others' agendas and lose track of my own." },
  { id: 100, type: 9, text: "I am easygoing, steady, and hard to rattle." },
  { id: 101, type: 9, text: "I numb out or distract myself to avoid discomfort." },
  { id: 102, type: 9, text: "I dislike being pressured or pushed to decide." },
  { id: 103, type: 9, text: "I long for inner and outer harmony above most things." },
  { id: 104, type: 9, text: "I can be stubborn in a quiet, passive way." },
  { id: 105, type: 9, text: "I struggle to know or assert what I really want." },
  { id: 106, type: 9, text: "I tend to procrastinate on things that feel unimportant to me." },
  { id: 107, type: 9, text: "I have a calming, accepting presence that puts people at ease." },
  { id: 108, type: 9, text: "I minimize my own problems so as not to disturb the peace." },
];

export const scaleLabels = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];
