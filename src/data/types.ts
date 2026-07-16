// Full Enneagram type content: 9 types, 18 wings, and Type-4 compatibility for each.

export interface WingInfo {
  key: string; // e.g. "1w9"
  name: string;
  summary: string;
  traits: string;
}

export interface TypeInfo {
  number: number;
  name: string;
  nickname: string;
  center: string; // Body / Heart / Head
  coreDesire: string;
  coreFear: string;
  keyMotivation: string;
  basicProposition: string;
  overview: string;
  strengths: string[];
  challenges: string[];
  atBest: string;
  underStress: string; // disintegration
  whenGrowing: string; // integration
  wings: WingInfo[];
  // Compatibility of THIS type with a Type 4 partner
  compat4: {
    rating: number; // 1-5
    headline: string;
    strengths: string;
    friction: string;
    tips: string;
  };
}

export const types: Record<number, TypeInfo> = {
  1: {
    number: 1,
    name: "Type One",
    nickname: "The Reformer",
    center: "Body / Gut (Anger)",
    coreDesire: "To be good, right, balanced, and to have integrity.",
    coreFear: "Of being corrupt, defective, evil, or wrong.",
    keyMotivation: "To be right, to improve everything, to be consistent with their ideals, and to justify themselves.",
    basicProposition: "You are good or okay if you do what is right.",
    overview:
      "Ones are principled, purposeful, self-controlled, and perfectionistic. They are guided by a strong inner sense of right and wrong and feel a mission to improve the world and themselves. Conscientious and ethical, they want to live rightly and often become teachers, reformers, and crusaders. Their attention naturally goes to errors and to the gap between how things are and how they should be, which can generate a demanding inner critic.",
    strengths: [
      "High integrity and strong ethical standards",
      "Reliable, responsible, and self-disciplined",
      "Attention to detail and quality",
      "Fair-minded and honest",
      "Committed to improvement and doing things well",
    ],
    challenges: [
      "Harsh self-criticism and criticism of others",
      "Rigidity and difficulty relaxing standards",
      "Suppressed anger that leaks out as resentment",
      "Perfectionism and impatience",
      "Struggle to accept things as they are",
    ],
    atBest: "Wise, discerning, realistic, and accepting — able to be noble and morally heroic while extending grace to imperfection.",
    underStress: "Moves toward Type Four — becoming moody, irrational, and self-conscious, feeling misunderstood and resentful.",
    whenGrowing: "Moves toward Type Seven — becoming more spontaneous, joyful, and open to possibility, releasing rigid control.",
    wings: [
      {
        key: "1w9",
        name: "The Idealist",
        summary: "Cooler, more detached, and more reserved than the 1w2.",
        traits:
          "Combines the One's principled conscience with the Nine's calm, objective distance. More introverted, patient, and diplomatic. Idealistic and philosophical, they seek to embody their ideals quietly rather than crusade for them. Can appear scholarly and self-contained, but may struggle with detachment and a tendency to withdraw.",
      },
      {
        key: "1w2",
        name: "The Advocate",
        summary: "Warmer, more people-oriented, and more actively engaged.",
        traits:
          "Blends the One's standards with the Two's warmth and helpfulness. More interpersonally involved, empathetic, and action-oriented in service of others. They channel their reforming instinct into helping people directly. Can be more openly critical and controlling, and more prone to interpersonal intensity than the 1w9.",
      },
    ],
    compat4: {
      rating: 3,
      headline: "The Idealist and the Individualist — shared depth, different tempos.",
      strengths:
        "Both Ones and Fours are principled idealists who care about meaning, authenticity, and living according to inner values. The One offers the Four stability, follow-through, and grounding structure; the Four helps the One loosen the inner critic, access feeling, and embrace imperfection as beauty. There is genuine mutual respect for depth and sincerity.",
      friction:
        "The One's need for order and correctness can clash with the Four's emotional fluidity and need to honor moods. The One may see the Four as self-indulgent or undisciplined; the Four may experience the One as rigid, judgmental, or emotionally withholding. The One suppresses feeling while the Four amplifies it, so conflict styles diverge sharply.",
      tips:
        "The One should soften judgment and validate the Four's emotional world without trying to fix it. The Four should appreciate the One's reliability and avoid reading structure as coldness. Agree that 'different' is not 'wrong' — the One's standards and the Four's authenticity can reinforce each other.",
    },
  },
  2: {
    number: 2,
    name: "Type Two",
    nickname: "The Helper",
    center: "Heart / Feeling (Shame)",
    coreDesire: "To feel loved and wanted, and to express their feelings for others.",
    coreFear: "Of being unwanted, unworthy of being loved.",
    keyMotivation: "To be loved, needed, appreciated, and to have their feelings for others reciprocated.",
    basicProposition: "You are good or okay if you are loved by others and are close to them.",
    overview:
      "Twos are caring, interpersonal, generous, and people-pleasing. They are empathetic, sincere, and warm-hearted, and they want to be close to others. They express their love through service and often anticipate the needs of those around them. Their focus on others can lead them to neglect their own needs, and they may seek validation by becoming indispensable.",
    strengths: [
      "Warm, empathetic, and emotionally attuned",
      "Generous and genuinely supportive",
      "Skilled at building relationships",
      "Encouraging and affirming of others",
      "Perceptive about people's feelings and needs",
    ],
    challenges: [
      "Difficulty acknowledging their own needs",
      "People-pleasing and loss of self",
      "Hidden pride and expectation of reciprocity",
      "Becoming intrusive or possessive",
      "Resentment when unappreciated",
    ],
    atBest: "Unselfish and altruistic, with unconditional love for others — nurturing, generous, and deeply humble.",
    underStress: "Moves toward Type Eight — becoming aggressive, dominating, and openly demanding when their giving isn't reciprocated.",
    whenGrowing: "Moves toward Type Four — becoming more self-nurturing, emotionally honest, and aware of their own needs and creativity.",
    wings: [
      {
        key: "2w1",
        name: "The Servant",
        summary: "More principled, dutiful, and self-controlled.",
        traits:
          "Combines the Two's warmth with the One's conscience and standards. More serious, responsible, and idealistic about service. They give from a sense of moral obligation and can be more self-critical and reserved. Boundaries are firmer, but they may struggle with guilt and repressed feelings.",
      },
      {
        key: "2w3",
        name: "The Host / Hostess",
        summary: "More ambitious, outgoing, and image-aware.",
        traits:
          "Blends the Two's helpfulness with the Three's drive and charm. More sociable, energetic, and success-oriented. They are excellent networkers who help in visible, admired ways. Can be more concerned with being seen as valuable and more prone to self-promotion beneath the caring exterior.",
      },
    ],
    compat4: {
      rating: 4,
      headline: "The Helper and the Individualist — warmth meets depth.",
      strengths:
        "This is often a rich, emotionally attuned pairing. Both live in the Heart center and value feeling, connection, and being special to each other. The Two offers the Four steady warmth, encouragement, and practical care; the Four offers the Two emotional depth, authenticity, and permission to have their own inner life. The Two feels needed and the Four feels deeply seen.",
      friction:
        "The Two's focus on the relationship and on being appreciated can collide with the Four's self-absorption and withdrawal during dark moods. The Two may over-give and then resent the Four's inward focus; the Four may feel smothered or find the Two's help intrusive. Both can be sensitive to perceived rejection.",
      tips:
        "The Two should give the Four space during emotional processing and tend to their own needs instead of over-giving. The Four should openly appreciate the Two's care and reassure them of their value. Watch the shared sensitivity — name hurt directly rather than withdrawing or guilt-tripping.",
    },
  },
  3: {
    number: 3,
    name: "Type Three",
    nickname: "The Achiever",
    center: "Heart / Feeling (Shame)",
    coreDesire: "To feel valuable, worthwhile, and accepted.",
    coreFear: "Of being worthless or without value apart from achievements.",
    keyMotivation: "To be affirmed, to distinguish themselves, to have attention, and to be admired.",
    basicProposition: "You are good or okay if you are successful and others think well of you.",
    overview:
      "Threes are success-oriented, pragmatic, adaptive, and driven. They are self-assured, ambitious, and competent, focused on goals and on presenting a winning image. Highly attuned to how they are perceived, they adapt themselves to become what will earn approval. Their productivity and charisma are real assets, but they risk losing touch with their authentic feelings beneath the performance.",
    strengths: [
      "Goal-oriented, efficient, and productive",
      "Confident, motivating, and inspiring",
      "Adaptable and socially skilled",
      "Resilient and results-driven",
      "Able to lead and get things done",
    ],
    challenges: [
      "Over-identification with success and image",
      "Difficulty accessing authentic feelings",
      "Workaholism and burnout",
      "Tendency toward self-promotion or deception about self",
      "Fear of failure driving overwork",
    ],
    atBest: "Self-accepting, authentic, and inner-directed — genuinely admirable and inspiring without needing to prove worth.",
    underStress: "Moves toward Type Nine — disengaging, becoming apathetic, and 'checking out' when overwhelmed by pressure to perform.",
    whenGrowing: "Moves toward Type Six — becoming more cooperative, loyal, and committed to others rather than to image.",
    wings: [
      {
        key: "3w2",
        name: "The Charmer",
        summary: "Warmer, more people-focused, and more charismatic.",
        traits:
          "Combines the Three's drive with the Two's warmth. More relational, expressive, and eager to be liked as well as admired. Excellent at motivating and connecting with people. Can be more emotionally engaged but also more concerned with approval and prone to image-based self-presentation.",
      },
      {
        key: "3w4",
        name: "The Professional",
        summary: "More introspective, serious, and focused on substance.",
        traits:
          "Blends the Three's ambition with the Four's depth and individuality. More self-aware, creative, and concerned with the quality and meaning of their work, not just the win. Can be more sensitive and self-doubting, balancing the desire for success with a desire for authentic self-expression.",
      },
    ],
    compat4: {
      rating: 3,
      headline: "The Achiever and the Individualist — image meets authenticity.",
      strengths:
        "Both are Heart-center types who care about identity and being valued. Adjacent on the Enneagram, they understand each other's shame-based drive. The Three brings momentum, optimism, and the ability to make things happen; the Four brings emotional honesty and depth that pull the Three beneath the surface. The Three can help the Four channel creativity into reality, and the Four can help the Three reconnect with genuine feeling.",
      friction:
        "The Three's drive to perform and keep moving can feel superficial or evasive to the Four, who wants emotional presence. The Four's moodiness and inward focus can feel unproductive or draining to the busy Three. The Three avoids painful feelings; the Four insists on them — a core tension.",
      tips:
        "The Three should slow down, be emotionally present, and value the Four's depth over efficiency. The Four should recognize the Three's effort as a form of love and avoid dismissing achievement as fake. Both should distinguish authentic self from performed self and meet there.",
    },
  },
  4: {
    number: 4,
    name: "Type Four",
    nickname: "The Individualist",
    center: "Heart / Feeling (Shame)",
    coreDesire: "To find themselves and their significance — to create an identity.",
    coreFear: "Of having no identity or personal significance; of being fundamentally flawed.",
    keyMotivation: "To express themselves and their individuality, to create beauty, to surround themselves with beauty, and to withdraw to protect their self-image.",
    basicProposition: "You are good or okay if you are true to yourself.",
    overview:
      "Fours are sensitive, introspective, expressive, and dramatic. They are self-aware and honest about their emotions, with a longing for depth, meaning, and authenticity. They feel different from others and often focus on what is missing, which can lead to melancholy and envy but also to remarkable creativity and emotional insight. Fours seek to be true to themselves above all.",
    strengths: [
      "Emotionally deep, honest, and self-aware",
      "Highly creative and expressive",
      "Empathetic toward suffering and complexity",
      "Authentic and unafraid of difficult feelings",
      "Individualistic and original",
    ],
    challenges: [
      "Melancholy, moodiness, and self-absorption",
      "Envy and longing for what's missing",
      "Withdrawal and emotional volatility",
      "Feeling misunderstood or defective",
      "Difficulty with routine and follow-through",
    ],
    atBest: "Inspired, creative, and self-renewing — able to transform their experience into something universal and beautiful, deeply present and equanimous.",
    underStress: "Moves toward Type Two — becoming clingy, over-involved, and needy of others' approval.",
    whenGrowing: "Moves toward Type One — becoming more disciplined, objective, and principled, acting on ideals rather than moods.",
    wings: [
      {
        key: "4w3",
        name: "The Aristocrat",
        summary: "More extroverted, ambitious, and image-conscious.",
        traits:
          "Combines the Four's depth with the Three's drive and social awareness. More energetic, expressive, and oriented toward being seen and accomplishing. They channel emotion into visible creativity and can be flamboyant and competitive. Balances self-expression with a desire for recognition and success.",
      },
      {
        key: "4w5",
        name: "The Bohemian",
        summary: "More introverted, cerebral, and unconventional.",
        traits:
          "Blends the Four's emotionality with the Five's intellect and withdrawal. More private, observant, and idiosyncratic. Deeply original and often drawn to intense, unconventional inner worlds. Quieter and more self-contained than the 4w3, but can be more isolated and detached from others.",
      },
    ],
    compat4: {
      rating: 3,
      headline: "Two Individualists — profound resonance, doubled intensity.",
      strengths:
        "A Four with another Four shares an extraordinary depth of understanding: both value authenticity, emotional truth, beauty, and meaning, and neither shies from the darker registers of feeling. They can create a rich, artistic, deeply intimate bond where each feels finally understood by someone who 'gets it.'",
      friction:
        "Two Fours can amplify each other's moods, melancholy, and self-absorption, spiraling into intensity with no grounding force. Both may compete over who is more misunderstood or withdraw simultaneously, leaving practical life and stability neglected. Shared envy and sensitivity to rejection can create dramatic ruptures.",
      tips:
        "Build in grounding routines and practical structure that neither naturally provides. When both are low, agree not to spiral together — one anchors while the other processes. Celebrate the deep mutual understanding, but resist turning suffering into a competition.",
    },
  },
  5: {
    number: 5,
    name: "Type Five",
    nickname: "The Investigator",
    center: "Head / Thinking (Fear)",
    coreDesire: "To be capable, competent, and self-sufficient.",
    coreFear: "Of being helpless, useless, incapable, or overwhelmed.",
    keyMotivation: "To understand the world, to possess knowledge, to conserve energy and resources, and to defend against intrusion.",
    basicProposition: "You are good or okay if you have mastered something.",
    overview:
      "Fives are perceptive, innovative, secretive, and isolated. They are observant and cerebral, seeking to understand the world through knowledge and analysis. They conserve their energy and resources, prize independence, and can withdraw into their minds. Fives often master complex subjects and offer visionary insight, but may detach from their bodies, feelings, and relationships.",
    strengths: [
      "Perceptive, analytical, and insightful",
      "Independent and self-reliant",
      "Calm and objective under pressure",
      "Deep expertise and original thinking",
      "Respectful of others' autonomy",
    ],
    challenges: [
      "Emotional detachment and isolation",
      "Withholding and stinginess with time/energy",
      "Overthinking rather than acting",
      "Difficulty with intimacy and presence",
      "Sense of scarcity and defensiveness",
    ],
    atBest: "Visionary pioneers — perceptive, open, and able to master a field while staying connected and generous with their gifts.",
    underStress: "Moves toward Type Seven — becoming scattered, hyperactive, and impulsive.",
    whenGrowing: "Moves toward Type Eight — becoming more confident, decisive, grounded in the body, and able to act with authority.",
    wings: [
      {
        key: "5w4",
        name: "The Iconoclast",
        summary: "More creative, emotional, and individualistic.",
        traits:
          "Combines the Five's intellect with the Four's emotional depth and originality. More imaginative, introspective, and drawn to aesthetics and meaning. They blend analysis with feeling, producing highly original creative or intellectual work. Can be more moody and self-conscious than the 5w6.",
      },
      {
        key: "5w6",
        name: "The Problem Solver",
        summary: "More loyal, practical, and cooperative.",
        traits:
          "Blends the Five's analysis with the Six's practicality and skepticism. More oriented toward systems, security, and useful application of knowledge. Better at teamwork and follow-through, more anxious and detail-focused. Often excellent scientists, engineers, and technicians.",
      },
    ],
    compat4: {
      rating: 3,
      headline: "The Investigator and the Individualist — inner worlds meet.",
      strengths:
        "Fives and Fours are neighbors on the Enneagram and share a rich inner life, a love of depth, and a need for space. Both are introspective, unconventional, and drawn to meaning. The Five offers the Four calm objectivity and a steady, non-reactive presence; the Four helps the Five access and value feelings. They can share long, intimate explorations of ideas and emotions and respect each other's need for solitude.",
      friction:
        "The Four wants emotional engagement and reassurance; the Five withdraws into the head and detaches from feeling, which can leave the Four feeling starved and rejected. The Four's emotional intensity can overwhelm the Five and trigger further retreat. Both can isolate, letting the relationship grow distant.",
      tips:
        "The Five should make deliberate emotional investments and stay present when the Four needs connection. The Four should respect the Five's need for space and not read withdrawal as abandonment. Honor both the need for depth and the need for solitude explicitly.",
    },
  },
  6: {
    number: 6,
    name: "Type Six",
    nickname: "The Loyalist",
    center: "Head / Thinking (Fear)",
    coreDesire: "To have security, support, and guidance.",
    coreFear: "Of being without support, security, or guidance; of being unable to survive on their own.",
    keyMotivation: "To have security, to feel supported, to test the attitudes of others, and to defend against anxiety.",
    basicProposition: "You are good or okay if you do what is expected of you.",
    overview:
      "Sixes are committed, security-oriented, engaging, and responsible, but also anxious and suspicious. They are the most loyal type, dedicated to people and causes they trust. Their minds anticipate problems and dangers so they can prepare, which makes them excellent troubleshooters but also prone to worry and doubt. They can be either phobic (avoiding fear) or counterphobic (confronting it head-on).",
    strengths: [
      "Loyal, committed, and trustworthy",
      "Responsible and hardworking",
      "Excellent at anticipating problems",
      "Courageous in defense of others",
      "Warm, witty, and relatable",
    ],
    challenges: [
      "Chronic anxiety and worst-case thinking",
      "Doubt, indecision, and reassurance-seeking",
      "Suspicion and testing of others",
      "Projection of fears onto situations",
      "Ambivalence toward authority",
    ],
    atBest: "Courageous, self-affirming, and trusting — a stable, reliable partner and leader who acts with quiet confidence.",
    underStress: "Moves toward Type Three — becoming competitive, image-conscious, and driven to prove themselves.",
    whenGrowing: "Moves toward Type Nine — becoming more relaxed, trusting, calm, and at peace with uncertainty.",
    wings: [
      {
        key: "6w5",
        name: "The Defender",
        summary: "More independent, intellectual, and reserved.",
        traits:
          "Combines the Six's loyalty with the Five's analysis and self-sufficiency. More serious, cautious, and private. They rely on expertise and systems for security and are often drawn to technical or protective roles. Quieter and more introverted, but can be more distrustful and defensive.",
      },
      {
        key: "6w7",
        name: "The Buddy",
        summary: "More sociable, playful, and outgoing.",
        traits:
          "Blends the Six's loyalty with the Seven's enthusiasm and sociability. More extroverted, warm, and fun-loving, using humor and activity to manage anxiety. Engaging and relatable, they seek security through relationships. Can be more scattered and prone to escapism than the 6w5.",
      },
    ],
    compat4: {
      rating: 3,
      headline: "The Loyalist and the Individualist — loyalty meets longing.",
      strengths:
        "Both Sixes and Fours are emotionally sensitive, introspective, and value depth and sincerity. The Six offers the Four steadfast loyalty, commitment, and practical grounding; the Four offers the Six emotional richness and permission to explore inner life. A Six's devotion can provide the security a Four longs for, and both can bond over honest, vulnerable conversation.",
      friction:
        "The Six's anxiety and need for reassurance can collide with the Four's emotional volatility and self-focus, amplifying each other's insecurity. The Six may find the Four's moods and idealizing/devaluing exhausting; the Four may find the Six's worry and doubt draining or destabilizing. Both can spiral into negative projection.",
      tips:
        "The Six should offer steady reassurance without taking the Four's moods personally. The Four should value the Six's loyalty and avoid testing it through withdrawal or drama. Build shared stability rituals and name anxieties out loud rather than acting them out.",
    },
  },
  7: {
    number: 7,
    name: "Type Seven",
    nickname: "The Enthusiast",
    center: "Head / Thinking (Fear)",
    coreDesire: "To be satisfied, content, and to have their needs fulfilled.",
    coreFear: "Of being deprived, trapped in pain, or missing out on life.",
    keyMotivation: "To maintain freedom and happiness, to avoid missing worthwhile experiences, to keep occupied and excited.",
    basicProposition: "You are good or okay if you get what you need.",
    overview:
      "Sevens are busy, fun-loving, spontaneous, and versatile. They are optimistic and high-spirited, constantly seeking new experiences and possibilities. Quick-thinking and enthusiastic, they keep their options open and their minds racing toward the next exciting thing. This helps them avoid pain and boredom, but can lead to scattered energy, impulsivity, and difficulty committing or sitting with discomfort.",
    strengths: [
      "Optimistic, enthusiastic, and energizing",
      "Quick, versatile, and creative thinkers",
      "Spontaneous and adventurous",
      "Resilient and able to reframe adversity",
      "Fun, engaging, and generous with joy",
    ],
    challenges: [
      "Difficulty with commitment and follow-through",
      "Avoidance of pain and negative feelings",
      "Impulsivity and over-extension",
      "Restlessness and fear of missing out",
      "Trouble being present and going deep",
    ],
    atBest: "Focused, joyful, and deeply appreciative — able to embrace all of life, including its pain, with gratitude and depth.",
    underStress: "Moves toward Type One — becoming critical, perfectionistic, and rigid.",
    whenGrowing: "Moves toward Type Five — becoming more focused, profound, and able to concentrate and go deep.",
    wings: [
      {
        key: "7w6",
        name: "The Entertainer",
        summary: "More responsible, loyal, and relationship-oriented.",
        traits:
          "Combines the Seven's enthusiasm with the Six's loyalty and caution. More people-focused, endearing, and slightly more anxious. They balance fun-seeking with commitment and are often engaging, witty, and productive. More grounded in relationships than the 7w8.",
      },
      {
        key: "7w8",
        name: "The Realist",
        summary: "More assertive, ambitious, and driven.",
        traits:
          "Blends the Seven's energy with the Eight's power and directness. More aggressive, goal-oriented, and materialistic, pursuing experiences with force and confidence. Excellent at making things happen. Can be more impatient, blunt, and prone to excess than the 7w6.",
      },
    ],
    compat4: {
      rating: 3,
      headline: "The Enthusiast and the Individualist — light meets depth.",
      strengths:
        "Sevens and Fours are complementary opposites in mood. The Seven brings the Four lightness, optimism, adventure, and a way out of dark spirals; the Four brings the Seven depth, emotional honesty, and the capacity to stay with meaningful experience. When balanced, the Seven lifts the Four and the Four grounds the Seven, and both are creative and imaginative.",
      friction:
        "The Seven avoids pain while the Four dwells in it — a fundamental clash. The Seven may find the Four's moods heavy or draining and try to fix or flee them; the Four may find the Seven superficial, avoidant, or unable to hold emotional space. The Seven's need for options can threaten the Four's need for deep commitment.",
      tips:
        "The Seven should learn to stay present with the Four's feelings rather than reframing or escaping them. The Four should embrace the Seven's joy without dismissing it as shallow. Balance adventure with depth — plan both playful and meaningful shared experiences.",
    },
  },
  8: {
    number: 8,
    name: "Type Eight",
    nickname: "The Challenger",
    center: "Body / Gut (Anger)",
    coreDesire: "To protect themselves, to be in control of their own life and destiny.",
    coreFear: "Of being harmed, controlled, or violated by others.",
    keyMotivation: "To be self-reliant, to prove their strength, to be important, to dominate their environment, and to stay in control.",
    basicProposition: "You are good or okay if you are strong and in control of your situation.",
    overview:
      "Eights are powerful, dominating, self-confident, decisive, and confrontational. They are assertive and protective, taking charge and standing up for themselves and others. They value strength, directness, and control, and have a large presence and abundant energy. Beneath the tough exterior lies a tender, vulnerable heart they guard closely. Eights make natural leaders but can be intimidating, willful, and combative.",
    strengths: [
      "Strong, decisive, and courageous",
      "Protective of the vulnerable",
      "Direct, honest, and straightforward",
      "Natural leadership and initiative",
      "Resilient, energetic, and empowering of others",
    ],
    challenges: [
      "Domineering and confrontational",
      "Difficulty showing vulnerability",
      "Impatience and intensity that intimidates",
      "Excess and pushing limits",
      "Struggle to yield control or trust",
    ],
    atBest: "Magnanimous, heroic, and self-restrained — using their strength to protect and empower others, with a tender, courageous heart.",
    underStress: "Moves toward Type Five — becoming secretive, withdrawn, and fearful, retreating from engagement.",
    whenGrowing: "Moves toward Type Two — becoming more caring, open-hearted, and generous with their vulnerability.",
    wings: [
      {
        key: "8w7",
        name: "The Maverick",
        summary: "More energetic, adventurous, and enterprising.",
        traits:
          "Combines the Eight's power with the Seven's drive and optimism. More extroverted, ambitious, and fast-moving. Bold risk-takers who pursue big goals with charisma and force. Can be more impulsive, materialistic, and prone to excess than the 8w9.",
      },
      {
        key: "8w9",
        name: "The Bear",
        summary: "More calm, steady, and quietly powerful.",
        traits:
          "Blends the Eight's strength with the Nine's calm and receptivity. More grounded, patient, and approachable, with a slower-burning intensity. Powerful yet steady leaders who can be warm protectors. Can be more stubborn and, when pushed, unleash sudden force.",
      },
    ],
    compat4: {
      rating: 4,
      headline: "The Challenger and the Individualist — intensity meets intensity.",
      strengths:
        "This pairing has strong chemistry and mutual respect for authenticity and directness. Both are intense, passionate, and unafraid of the deep end of experience. The Eight offers the Four protection, strength, stability, and the safety to feel; the Four offers the Eight emotional depth, tenderness, and access to the vulnerable heart the Eight guards. Eights are often deeply drawn to the Four's emotional richness, and Fours feel safe in the Eight's protective power.",
      friction:
        "Both are strong-willed and reactive, so conflicts can be volcanic. The Eight's bluntness can wound the sensitive Four; the Four's moods and withdrawal can frustrate the action-oriented Eight. The Eight may dismiss feelings as weakness while the Four demands emotional engagement — a real clash of values.",
      tips:
        "The Eight should soften delivery and honor the Four's sensitivity as strength, not weakness. The Four should be direct rather than withdrawing, which Eights respect. Channel the shared intensity into passion and honesty rather than power struggles.",
    },
  },
  9: {
    number: 9,
    name: "Type Nine",
    nickname: "The Peacemaker",
    center: "Body / Gut (Anger)",
    coreDesire: "To have inner stability, peace of mind, and harmony.",
    coreFear: "Of loss, separation, fragmentation, and conflict.",
    keyMotivation: "To create harmony in their environment, to avoid conflict and tension, to preserve things as they are, to resist disturbance.",
    basicProposition: "You are good or okay if those around you are good or okay.",
    overview:
      "Nines are receptive, reassuring, agreeable, and complacent. They are easygoing peacemakers who seek harmony and want to avoid conflict. They see and merge with others' points of view, which makes them wonderful mediators, but they can lose touch with their own priorities and desires. To keep the peace, they may become passive, stubborn, or 'numb out,' minimizing problems and their own significance.",
    strengths: [
      "Calm, steady, and accepting",
      "Excellent mediators and peacemakers",
      "Empathetic and open to all perspectives",
      "Supportive, patient, and reassuring",
      "Nonjudgmental and easy to be around",
    ],
    challenges: [
      "Conflict avoidance and passivity",
      "Losing touch with own priorities and desires",
      "Procrastination and inertia",
      "Passive-aggressive stubbornness",
      "Merging with others and self-forgetting",
    ],
    atBest: "Self-possessed, dynamic, and deeply present — able to bring people together and act on their own priorities with quiet strength.",
    underStress: "Moves toward Type Six — becoming anxious, worried, and reactive.",
    whenGrowing: "Moves toward Type Three — becoming more focused, self-developing, energetic, and engaged with their own goals.",
    wings: [
      {
        key: "9w8",
        name: "The Referee",
        summary: "More assertive, energetic, and independent.",
        traits:
          "Combines the Nine's calm with the Eight's strength and directness. More grounded, sociable, and willing to stand their ground. They balance peacemaking with a capacity for assertiveness and leadership. Can be more stubborn and prone to occasional bursts of anger.",
      },
      {
        key: "9w1",
        name: "The Dreamer",
        summary: "More orderly, principled, and idealistic.",
        traits:
          "Blends the Nine's receptivity with the One's conscience and standards. More organized, purposeful, and idealistic about harmony and doing right. Quietly principled and reserved, they seek peace through order. Can be more critical (inwardly) and repressed than the 9w8.",
      },
    ],
    compat4: {
      rating: 3,
      headline: "The Peacemaker and the Individualist — calm meets intensity.",
      strengths:
        "Nines and Fours can balance each other beautifully. The Nine offers the Four a calm, accepting, non-reactive presence that soothes emotional storms and provides steady support; the Four offers the Nine depth, aliveness, and encouragement to find and express their own identity. The Nine's acceptance helps the Four feel safe to be themselves, and both value harmony and authentic connection.",
      friction:
        "The Nine avoids conflict and merges with others; the Four seeks emotional intensity and wants to be met fully. The Four may feel the Nine is emotionally absent or checked out; the Nine may feel overwhelmed or destabilized by the Four's moods and demands for engagement. The Nine's passivity can leave the Four feeling unseen, and unspoken tension can build.",
      tips:
        "The Nine should stay present and engage emotionally rather than numbing out or merging. The Four should invite the Nine's own opinions and avoid overwhelming them with intensity. Address issues gently but directly so tension doesn't quietly accumulate.",
    },
  },
};
