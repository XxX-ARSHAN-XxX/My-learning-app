const myCards = [
  {
    title: "System 1 vs. System 2",
    body: "Your brain has two gears. System 1 is fast and instinctive. System 2 is slower and logical.",
    source: "Thinking, Fast and Slow",
    color: "#0f3460",
    vocab: []
  },
  {
    title: "Law 9: Win Through Actions",
    body: "Any momentary triumph you think you gain through argument is really a Pyrrhic victory. Demonstrate, do not explicate.",
    source: "The 48 Laws of Power",
    color: "#2c0000",
    vocab: [
      { word: "Pyrrhic", def: "A win that comes at a massive cost." },
      { word: "Explicate", def: "To analyze and develop an idea or principle in detail." }
    ]
  },
  {
    title: "Three People Inside You",
    body: "You operate from three distinct psychological states: a critical parent, a logical adult, or an emotional child. Notice which state dominates your reactions during sudden conflicts. Force your logical adult to take charge when emotions run high.",
    source: "Games People Play",
    color: "#1a1a2e",
    vocab: []
  },
  {
    title: "Why Communication Breaks",
    body: "Conversations collapse when you address someone's logic, but their emotional child or critical parent answers instead. This crossed transaction halts all productive discussion immediately. Suspend your argument until you can realign their state of mind by matching it or shifting your own.",
    source: "Games People Play",
    color: "#16213e",
    vocab: [
      { word: "Suspend", def: "To temporarily stop or delay an action." },
      { word: "Realign", def: "To bring back into proper order or agreement." }
    ]
  },
  {
    title: "The Need For Strokes",
    body: "You crave social recognition just as fiercely as your body craves food. Any social contact, even a hostile argument, feels biologically better to you than being ignored. Feed your peers with positive recognition so they do not provoke negative attention.",
    source: "Games People Play",
    color: "#0f3460",
    vocab: [
      { word: "Provoke", def: "To deliberately cause a strong reaction or emotion." }
    ]
  },
  {
    title: "The Hidden Conversation",
    body: "Many conversations operate on two levels simultaneously: a polite social surface and a hidden psychological trap. The hidden psychological level always dictates the final outcome of the interaction. Train yourself to listen to the unspoken demands rather than the polite words.",
    source: "Games People Play",
    color: "#533483",
    vocab: [
      { word: "Simultaneously", def: "Happening at exactly the same time." },
      { word: "Dictate", def: "To control or determine how something happens." }
    ]
  },
  {
    title: "Emotional Accounting",
    body: "Casual greetings function as a strict, subconscious accounting system of social debts. If you fail to return the exact level of enthusiasm expected, the other person feels deprived and slighted. Match the social energy of your acquaintances to maintain stable alliances.",
    source: "Games People Play",
    color: "#2d132c",
    vocab: [
      { word: "Subconscious", def: "Operating just below the level of active awareness." },
      { word: "Slighted", def: "Treated with disrespect or indifference." }
    ]
  },
  {
    title: "The Purpose of Small Talk",
    body: "People use complaints and small talk at social gatherings to secretly audition you for deeper psychological games. Your responses tell them exactly how easily you can be manipulated later. Decline to participate in endless complaining to protect yourself from toxic entanglements.",
    source: "Games People Play",
    color: "#1b3a2f",
    vocab: [
      { word: "Audition", def: "To test someone's suitability for a role or relationship." },
      { word: "Toxic", def: "Highly harmful or destructive to your well-being." }
    ]
  },
  {
    title: "The Anatomy of a Game",
    body: "Psychological games are not played for fun, but are dishonest maneuvers designed to trap you into a predictable emotional payoff. The player tricks you into a reaction that confirms their deepest insecurities. Refuse to offer the expected emotional reaction to neutralize the snare.",
    source: "Games People Play",
    color: "#3c1518",
    vocab: [
      { word: "Maneuvers", def: "Carefully planned actions or strategies." },
      { word: "Neutralize", def: "To make something harmless or ineffective." }
    ]
  },
  {
    title: "Fear of Unstructured Time",
    body: "You play psychological games primarily to avoid the terrifying boredom of unstructured time and the vulnerability of true intimacy. These games serve as a safe, predictable substitute for real human connection. Risk genuine intimacy instead of settling for manufactured drama.",
    source: "Games People Play",
    color: "#22223b",
    vocab: [
      { word: "Vulnerability", def: "Being open to emotional exposure or potential harm." }
    ]
  },
  {
    title: "The Real Hangover",
    body: "People playing the victim do not seek the initial pleasure of their bad habits, but the self-pity and scolding that follow. They maneuver you into the role of a persecutor or a rescuer to validate their misery. Refuse to scold or rescue them, and their self-destructive game will collapse.",
    source: "Games People Play",
    color: "#2f3e46",
    vocab: [
      { word: "Maneuver", def: "To skillfully guide or manipulate someone into a specific position." },
      { word: "Validate", def: "To prove that something is reasonable or acceptable." }
    ]
  },
  {
    title: "The Purpose of Debt",
    body: "Taking on massive financial or social obligations is often a subconscious strategy to give an otherwise aimless life immediate purpose. As long as you owe someone, your daily struggle feels justified and structured. Recognize when you are using artificial burdens to avoid finding genuine meaning.",
    source: "Games People Play",
    color: "#4a1c40",
    vocab: [
      { word: "Subconscious", def: "Operating just below the level of active awareness." },
      { word: "Artificial", def: "Created intentionally rather than occurring naturally." }
    ]
  },
  {
    title: "Inviting Rejection",
    body: "If you constantly find yourself rejected or fired, you are likely signaling a silent plea for others to abuse you. You unconsciously escalate your provocative behavior until someone finally complies and proves your worldview right. Break this cycle by examining how your own actions orchestrate your misfortunes.",
    source: "Games People Play",
    color: "#1a1a2e",
    vocab: [
      { word: "Provocative", def: "Intended to cause anger or a strong reaction." },
      { word: "Orchestrate", def: "To secretly arrange a situation to produce a desired result." }
    ]
  },
  {
    title: "The Justified Rage",
    body: "You may secretly delight when someone breaks a promise or makes a minor error because it grants you a license to vent years of pent-up anger. You exploit their trivial mistake to completely destroy their character. Deny others this unearned leverage by maintaining absolute correctness in your professional dealings.",
    source: "Games People Play",
    color: "#16213e",
    vocab: [
      { word: "Pent-up", def: "Held back and not expressed for a long time." },
      { word: "Leverage", def: "An advantage that gives you power to influence others." }
    ]
  },
  {
    title: "Blaming the Intruder",
    body: "When you want to be left alone but fear asking for space, you wait for an interruption and intentionally make a mistake. This allows you to furiously blame the intruder for your slip and permanently eject them. Claim your need for solitude directly instead of orchestrating angry accidents.",
    source: "Games People Play",
    color: "#0f3460",
    vocab: [
      { word: "Intruder", def: "Someone who enters a place where they are not wanted." },
      { word: "Eject", def: "To force someone to leave." }
    ]
  },
  {
    title: "The Impossible Choice",
    body: "Some people trap you by demanding a specific behavior, only to aggressively criticize you the moment you comply. They engineer this double-bind to avoid intimacy while making you look like the villain. Expose the trap by taking their contradictory statements entirely at face value.",
    source: "Games People Play",
    color: "#533483",
    vocab: [
      { word: "Double-bind", def: "A situation where any choice you make will be wrong." },
      { word: "Contradictory", def: "Asserting the opposite of what has just been said." }
    ]
  },
  {
    title: "The Endless Trial",
    body: "Couples often use third parties as judges to score points in a perpetual argument rather than seeking a true resolution. The plaintiff outwardly demands victory but secretly believes they are in the wrong. Refuse to play the jury, and force them to address each other directly.",
    source: "Games People Play",
    color: "#2d132c",
    vocab: [
      { word: "Perpetual", def: "Never ending or changing." },
      { word: "Plaintiff", def: "A person who brings a case or complaint against another." }
    ]
  },
  {
    title: "The Breaking Point",
    body: "You may accept every conflicting role and demand placed upon you until you reach a state of total, justifiable collapse. This calculated failure allows you to punish your dependents while appearing completely blameless. Set strict limits on your availability before your suppressed resentment forces a breakdown.",
    source: "Games People Play",
    color: "#1b3a2f",
    vocab: [
      { word: "Conflicting", def: "Clashing or being completely different from each other." },
      { word: "Suppressed", def: "Forcibly put an end to or kept hidden." }
    ]
  },
  {
    title: "The Theatrical Illusion",
    body: "Create an illusion that offers endless variety and adventure to capture attention. Combine heightened sexual allure with a regal, theatrical manner to trap your target. Keep up the distractions and never let them see who you really are.",
    source: "The Art of Seduction",
    color: "#1a1a2e",
    vocab: [
      { word: "Allure", def: "The quality of being powerfully and mysteriously attractive." },
      { word: "Regal", def: "Of, resembling, or fit for a monarch, especially in being magnificent." }
    ]
  },
  {
    title: "The Ambiguous Voice",
    body: "Cultivate a voice that is calm, unhurried, and highly suggestive. Speak sweetly so that listeners remember how you sounded rather than what you actually said. Hint at the erotic subliminally to mesmerize your target.",
    source: "The Art of Seduction",
    color: "#16213e",
    vocab: [
      { word: "Subliminally", def: "Below the threshold of conscious perception." }
    ]
  },
  {
    title: "Strategic Adornment",
    body: "Use clothing and makeup to create a heightened, goddess-like appearance that astonishes and bewitches. Ensure your overall ensemble is harmonious so no single ornament distracts from your charged presence. Reveal only specific parts of your body to stir the imagination.",
    source: "The Art of Seduction",
    color: "#0f3460",
    vocab: [
      { word: "Ensemble", def: "A group of items viewed as a whole rather than individually." },
      { word: "Harmonious", def: "Forming a pleasing or consistent whole." }
    ]
  },
  {
    title: "Languorous Movement",
    body: "Move gracefully and unhurriedly to project an air of abundant time and pleasure. Give your gestures an ambiguity that suggests something both innocent and erotic. Fascinate your targets by ensuring your manner cannot be immediately understood.",
    source: "The Art of Seduction",
    color: "#533483",
    vocab: [
      { word: "Languorous", def: "Characterized by tiredness or inactivity, especially of a pleasurable kind." },
      { word: "Ambiguity", def: "The quality of being open to more than one interpretation." }
    ]
  },
  {
    title: "The Element of Danger",
    body: "Keep your target at a proper distance by suddenly changing your moods. Intimidate them occasionally with capricious behavior to instill a seductive fear. Hint at an irrational, dangerous element to overwhelm their cautious nature.",
    source: "The Art of Seduction",
    color: "#2d132c",
    vocab: [
      { word: "Capricious", def: "Given to sudden and unaccountable changes of mood or behavior." },
      { word: "Irrational", def: "Not logical or reasonable." }
    ]
  },
  {
    title: "The Innocent Vulnerability",
    body: "Combine a highly sexual presence with an air of coy, naive vulnerability. Emanate a deep need for love to give your target the illusion that they are the protector. Hide your control over the dynamic behind a delightfully innocent facade.",
    source: "The Art of Seduction",
    color: "#1b3a2f",
    vocab: [
      { word: "Emanate", def: "To issue or spread out from a source." },
      { word: "Facade", def: "A deceptive outward appearance." }
    ]
  },
  {
    title: "The Uncontrollable Desire",
    body: "Abandon all restraint and let yourself be entirely consumed by your desire for your target. Show that you cannot control yourself to disguise your calculated seduction. Convince them that you exist for them alone in that specific moment.",
    source: "The Art of Seduction",
    color: "#3c1518",
    vocab: [
      { word: "Restraint", def: "Unemotional, dispassionate, or moderate behavior." }
    ]
  },
  {
    title: "Exploiting Obstacles",
    body: "Never worry about resistance, but use it as a spur to inflame your passion further. Use physical barriers or jealous rivals as opportunities to prove your devotion. If no obstacles face you, deliberately create them to heighten the romantic tension.",
    source: "The Art of Seduction",
    color: "#22223b",
    vocab: [
      { word: "Spur", def: "A thing that prompts or encourages someone." }
    ]
  },
  {
    title: "The Demonic Voice",
    body: "Use language as a powerful sensual distraction to persuade and flatter rather than to convey information. Craft poetic, alliterative phrases that melt your target's heart and stir emotional turmoil. Focus entirely on how your words make them feel rather than what they mean.",
    source: "The Art of Seduction",
    color: "#2f3e46",
    vocab: [
      { word: "Alliterative", def: "Relating to the occurrence of the same letter or sound at the beginning of adjacent words." },
      { word: "Turmoil", def: "A state of great disturbance, confusion, or uncertainty." }
    ]
  },
  {
    title: "Supreme Insolence",
    body: "Disdain convention and ignore what other people think to make yourself stand out. Display a rebellious, slightly cruel streak that appeals to repressed desires. Offer the forbidden thrill of breaking taboos to captivate the virtuous.",
    source: "The Art of Seduction",
    color: "#4a1c40",
    vocab: [
      { word: "Insolence", def: "Rude and disrespectful behavior." },
      { word: "Convention", def: "A way in which something is usually done, especially within a particular area or activity." }
    ]
  },
  {
    title: "The Need for Reform",
    body: "Exploit the universal desire to tame and reform a rebellious spirit. Fall back on your inability to change when caught in your indiscretions. Claim that you are the victim of your own weaknesses to quickly secure their indulgence and help.",
    source: "The Art of Seduction",
    color: "#1a1a2e",
    vocab: [
      { word: "Indiscretions", def: "Behavior or speech that is indiscreet or displays a lack of good judgment." },
      { word: "Indulgence", def: "The act of allowing oneself to enjoy the pleasure of something." }
    ]
  },
  {
    title: "Crafting the Reputation",
    body: "Embrace and broadcast your reputation for incorrigible amorality and irresistible attractiveness. Make your conquests public to excite competitive desires among potential targets. Craft your bad name with the care of an artist to draw targets toward your dangerous aura.",
    source: "The Art of Seduction",
    color: "#16213e",
    vocab: [
      { word: "Incorrigible", def: "Not able to be corrected, improved, or reformed." },
      { word: "Amorality", def: "An absence of, indifference towards, or disregard for morality." }
    ]
  },
  {
    title: "Fulfilling the Void",
    body: "Fathom the broken dreams and missing elements in your target's life. Focus intensely on their subtle gestures and tones to uncover what they truly lack. Adapt yourself to perfectly reflect their specific yearnings and ideals.",
    source: "The Art of Seduction",
    color: "#0f3460",
    vocab: [
      { word: "Fathom", def: "Understand a difficult problem or an enigmatic person after much thought." }
    ]
  },
  {
    title: "Elevating the Target",
    body: "Appeal to their higher self to make the sensual seduction feel deeply spiritual. Hold up a mirror that reflects their crushed aspirations for greatness. Make them feel noble and lofty to ensure your power over them becomes limitless.",
    source: "The Art of Seduction",
    color: "#533483",
    vocab: [
      { word: "Aspirations", def: "A hope or ambition of achieving something." }
    ]
  },
  {
    title: "The Patient Courtship",
    body: "Transform your courtship into a prolonged aesthetic experience by showing scrupulous attention to detail. Prove your absolute devotion through self-sacrificing actions. Use patient attentiveness to mask your maneuvers and lower their defenses.",
    source: "The Art of Seduction",
    color: "#2d132c",
    vocab: [
      { word: "Scrupulous", def: "Diligent, thorough, and extremely attentive to details." },
      { word: "Aesthetic", def: "Concerned with beauty or the appreciation of beauty." }
    ]
  },
  {
    title: "The Spiritual Illusion",
    body: "Combine sensitivity to physical pleasures with an air of poetic innocence. Mix the high and the low to create an ambiguously enchanting presence. Cultivate an aesthetic or intellectual depth to elevate the sexual tension.",
    source: "The Art of Seduction",
    color: "#1b3a2f",
    vocab: [
      { word: "Ambiguously", def: "In a way that is open to more than one interpretation." }
    ]
  },
  {
    title: "Mirroring the Spirit",
    body: "Enter the spirit of your target by enjoying what they enjoy and adapting to their moods. Stroke their deep-rooted narcissism to bypass their rational defenses. Indulge their whims so completely that they find nothing to resist.",
    source: "The Art of Seduction",
    color: "#3c1518",
    vocab: [
      { word: "Narcissism", def: "Excessive interest in or admiration of oneself." },
      { word: "Indulge", def: "Allow oneself to enjoy the pleasure of." }
    ]
  },
  {
    title: "Preserving the Fantasy",
    body: "Maintain a physical or emotional distance whenever reality threatens to expose your imperfections. Select targets whose circumstances naturally limit your time together to intensify the idealization. Prevent long, intimate exposure from dulling the perfection of the illusion you have crafted.",
    source: "The Art of Seduction",
    color: "#22223b",
    vocab: [
      { word: "Idealization", def: "The action of regarding or representing something as perfect or better than in reality." }
    ]
  },
  {
    title: "The Fluid Persona",
    body: "Refuse to conform to standard social roles and instead flaunt a fluid, ambiguous difference. Poke fun at current trends by taking your style in a completely novel direction. Express yourself with total confidence to command admiration and imitation.",
    source: "The Art of Seduction",
    color: "#2f3e46",
    vocab: [
      { word: "Fluid", def: "Able to flow easily; not settled or stable." },
      { word: "Conform", def: "Comply with rules, standards, or laws." }
    ]
  },
  {
    title: "The Subtle Aesthetic",
    body: "Show your disdain for convention through subtle, unique touches rather than flagrant costumes. Adapt prevailing styles into something completely your own to avoid looking desperate for attention. Make every detail of your life an aesthetic adventure to alleviate the boredom of others.",
    source: "The Art of Seduction",
    color: "#4a1c40",
    vocab: [
      { word: "Flagrant", def: "Conspicuously or obviously offensive." },
      { word: "Prevailing", def: "Existing at a particular time; current." }
    ]
  },
  {
    title: "Supreme Impudence",
    body: "Show a total lack of concern for what others think and never try too hard to please. Tease the powerful with a theatrical insolence that delights the socially oppressed. Displease your targets slightly to paradoxically increase your seductive appeal.",
    source: "The Art of Seduction",
    color: "#1a1a2e",
    vocab: [
      { word: "Impudence", def: "The quality of being impertinent or insolent." },
      { word: "Oppressed", def: "Subject to harsh and authoritarian treatment." }
    ]
  },
  {
    title: "Mental Transvestism",
    body: "Adopt the psychological traits of the opposite sex to appeal to their inherent narcissism. Enter their spirit and mirror their attitudes to disarm their natural defenses. Use this deep empathy to mesmerize your target before making a bold move.",
    source: "The Art of Seduction",
    color: "#16213e",
    vocab: [
      { word: "Transvestism", def: "The practice of adopting the behaviors or dress of the opposite sex." },
      { word: "Empathy", def: "The ability to understand and share the feelings of another." }
    ]
  },
  {
    title: "The Androgynous Allure",
    body: "Play delightfully with gender to release others from their repressed social constraints. Combine a familiar, graceful presence with a hint of danger or cruelty. Radiate an ambiguous sexuality that acts powerfully on the unconscious.",
    source: "The Art of Seduction",
    color: "#0f3460",
    vocab: [
      { word: "Androgynous", def: "Partly male and partly female in appearance; of indeterminate sex." },
      { word: "Constraints", def: "A limitation or restriction." }
    ]
  },
  {
    title: "Enduring the Envy",
    body: "Accept the inevitable resentment of your own sex with grace and unbothered insolence. Never attempt to prove your masculinity or femininity when challenged by insecure moralists. Maintain your independent pose because your power stems from your complete indifference.",
    source: "The Art of Seduction",
    color: "#533483",
    vocab: [
      { word: "Insolence", def: "Rude and disrespectful behavior." },
      { word: "Moralists", def: "People who teach or promote morality, often aggressively." }
    ]
  },
  {
    title: "The Illusion of Childhood",
    body: "Exaggerate your natural weaknesses to effortlessly elicit sympathy and protective feelings. Retain a playful, spontaneous spirit to transport your target back to a golden age. Mask your conscious manipulations behind a delightfully innocent facade.",
    source: "The Art of Seduction",
    color: "#2d132c",
    vocab: [
      { word: "Elicit", def: "Evoke or draw out a response or fact from someone." },
      { word: "Spontaneous", def: "Performed or occurring as a result of a sudden inner impulse or inclination." }
    ]
  },
  {
    title: "The Fearless Imp",
    body: "Infect others with a brazen, lighthearted energy that disregards potential consequences. Act uncontrollably foolish to offer a breath of fresh air in a cautious world. Keep a mischievous glint in your eye to show that you take nothing seriously.",
    source: "The Art of Seduction",
    color: "#1b3a2f",
    vocab: [
      { word: "Brazen", def: "Bold and without shame." }
    ]
  },
  {
    title: "The Effortless Wonder",
    body: "Display a sudden burst of improvisational skill to appear talented beyond your years. Hide the sweat and practice behind your work so your actions seem remarkably spontaneous. Fascinate your targets with an unpretentious ease that defies logical explanation.",
    source: "The Art of Seduction",
    color: "#3c1518",
    vocab: [
      { word: "Improvisational", def: "Created and performed spontaneously or without preparation." },
      { word: "Unpretentious", def: "Not attempting to impress others with an appearance of greater importance." }
    ]
  },
  {
    title: "The Undefensive Stance",
    body: "Lower the inhibitions of your target by remaining completely open and receptive to experience. Bend instead of resisting to neutralize the natural defensiveness of others. Treat resistance gracefully to prevent your target from testing your confidence.",
    source: "The Art of Seduction",
    color: "#22223b",
    vocab: [
      { word: "Inhibitions", def: "A feeling that makes one self-conscious and unable to act in a relaxed and natural way." },
      { word: "Receptive", def: "Willing to consider or accept new suggestions and ideas." }
    ]
  },
  {
    title: "The Spoiled Attitude",
    body: "Radiate a bold, demanding independence that challenges others to try and tame you. Act as if you expect the world to spoil you and people will naturally comply. Lose interest the moment they try to change your terms to keep them desperately pursuing you.",
    source: "The Art of Seduction",
    color: "#2f3e46",
    vocab: [
      { word: "Radiate", def: "Clearly emanate a strong feeling or quality through expression or bearing." },
      { word: "Comply", def: "Act in accordance with a wish or command." }
    ]
  },
  {
    title: "The Self-Contained Fantasy",
    body: "Construct a joyful, self-reliant world of your own making and inhabit it with total conviction. Ignore the ugliness around you to make your presence feel authentic and refreshing. Draw people in like a magnet by refusing to compromise your exotic, playful reality.",
    source: "The Art of Seduction",
    color: "#4a1c40",
    vocab: [
      { word: "Self-reliant", def: "Reliant on one's own powers and resources rather than those of others." },
      { word: "Authentic", def: "Of undisputed origin; genuine." }
    ]
  },
  {
    title: "The Art of Withdrawal",
    body: "Bait your target with the promise of immense pleasure, then suddenly step back and turn cold. Postpone their satisfaction to plunge them into a state of insecure pursuit. Alternate heat and coolness to keep the initiative entirely on your side.",
    source: "The Art of Seduction",
    color: "#1a1a2e",
    vocab: [
      { word: "Postpone", def: "Cause or arrange for something to take place at a time later than that first scheduled." },
      { word: "Initiative", def: "The power or opportunity to act or take charge before others do." }
    ]
  },
  {
    title: "Narcissistic Self-Sufficiency",
    body: "Project a fundamental self-sufficiency that shows you have no emotional need for other people. Make your target envious of your blissful self-involvement so they strive to burst your bubble. Suppress any needy behaviors that might shatter your powerful illusion of independence.",
    source: "The Art of Seduction",
    color: "#16213e",
    vocab: [
      { word: "Self-sufficiency", def: "Needing no outside help in satisfying one's basic needs." },
      { word: "Illusion", def: "A false idea or belief." }
    ]
  },
  {
    title: "The Ambiguous Tease",
    body: "Send contrary signals that stimulate hope while simultaneously causing deep frustration. Combine tasteful appearances with slightly unkempt details to create an intoxicating tension. Avoid obvious flirting and remain entirely elusive to mask your aggressive intentions.",
    source: "The Art of Seduction",
    color: "#0f3460",
    vocab: [
      { word: "Intoxicating", def: "Exhilarating or exciting." },
      { word: "Elusive", def: "Difficult to find, catch, or achieve." }
    ]
  },
  {
    title: "Manufactured Guilt",
    body: "Produce sudden tears or inexplicable anger to force your target into desperate attempts to please you. Blame them harshly for trivial mistakes to orchestrate a dramatic reconciliation. Utilize the joys of making up to forge an even stronger emotional attachment.",
    source: "The Art of Seduction",
    color: "#533483",
    vocab: [
      { word: "Inexplicable", def: "Unable to be explained or accounted for." },
      { word: "Orchestrate", def: "Plan or coordinate the elements of a situation to produce a desired effect." }
    ]
  },
  {
    title: "The Triangle of Desire",
    body: "Incite intense jealousy by paying sudden, focused attention to a third party. Signal that you might lose interest to trigger their innate fear of abandonment. Maintain an aloof distance to start a fierce competition for your favor.",
    source: "The Art of Seduction",
    color: "#2d132c",
    vocab: [
      { word: "Incite", def: "Encourage or stir up violent or unlawful behavior." },
      { word: "Innate", def: "Inborn; natural." }
    ]
  },
  {
    title: "The Political Coquette",
    body: "Excite the masses with rousing rhetoric, then disappear from sight to become an object of worship. Alternate between emotional identification and icy detachment to control the group dynamic. Keep your inner self entirely detached so you can play their emotions flawlessly.",
    source: "The Art of Seduction",
    color: "#1b3a2f",
    vocab: [
      { word: "Detachment", def: "The state of being objective or aloof." }
    ]
  },
  {
    title: "The Focused Mirror",
    body: "Deflect all attention away from yourself and focus entirely on your target's spirit. Listen carefully to uncover their hidden strengths and specific insecurities. Tailor your flatteries directly to their weaknesses to validate their fragile self-worth.",
    source: "The Art of Seduction",
    color: "#3c1518",
    vocab: [
      { word: "Deflect", def: "Cause something to change direction by interposing something." },
      { word: "Validate", def: "Check or prove the validity or accuracy of something." }
    ]
  },
  {
    title: "The Supplier of Pleasure",
    body: "Distract your targets from their daily troubles by providing a constant, lighthearted warmth. Cultivate an energetic, elegant style to banish any hint of social boredom. Feed them grand illusions and moral uplifts rather than harsh realities.",
    source: "The Art of Seduction",
    color: "#22223b",
    vocab: [
      { word: "Cultivate", def: "Try to acquire or develop a quality, sentiment, or skill." }
    ]
  },
  {
    title: "Yielding to Conquer",
    body: "Smooth out all conflict by yielding indulgently to those who act aggressively. Never criticize someone overtly; instead, plant ideas and insinuate your suggestions. Steal their ability to resist by agreeing with their opinions and tastes.",
    source: "The Art of Seduction",
    color: "#2f3e46",
    vocab: [
      { word: "Insinuate", def: "Suggest or hint something bad or reprehensible in an indirect and unpleasant way." }
    ]
  },
  {
    title: "The Comforting Echo",
    body: "Lull your targets into a relaxed state by mirroring their moods and echoing their values. Show that you prefer their customs to stroke their deepest narcissistic tendencies. Avoid any pestering or persistence that might disrupt the comfortable spell you have cast.",
    source: "The Art of Seduction",
    color: "#4a1c40",
    vocab: [
      { word: "Lull", def: "Calm or send to sleep, typically with soothing sounds or movements." },
      { word: "Disrupt", def: "Interrupt an event, activity, or process by causing a disturbance or problem." }
    ]
  },
  {
    title: "Poise in Adversity",
    body: "Maintain a calm, unruffled exterior in the face of setbacks to put everyone at ease. Use crisis situations to display your magnanimity and supreme patience. Never whine or attempt to justify yourself, allowing the contrast to highlight your superiority.",
    source: "The Art of Seduction",
    color: "#1a1a2e",
    vocab: [
      { word: "Magnanimity", def: "The fact or condition of being magnanimous; generosity." },
      { word: "Unruffled", def: "Not disordered or disarranged." }
    ]
  },
  {
    title: "The Web of Usefulness",
    body: "Create a wide network of allies so you can seamlessly link people together. Make their lives easier by following through on your promises with concrete actions. Express your gratitude for favors with real helpfulness rather than empty smoke.",
    source: "The Art of Seduction",
    color: "#16213e",
    vocab: [
      { word: "Concrete", def: "Existing in a material or physical form; real or solid; not abstract." }
    ]
  },
  {
    title: "The Illusion of Purpose",
    body: "Radiate a single-minded self-assurance to convince others you possess a definitive plan. Use moments of panic to display decisiveness, drawing the desperate to your cause. Make your confidence seem like a mysterious gift from beyond your control.",
    source: "The Art of Seduction",
    color: "#0f3460",
    vocab: [
      { word: "Definitive", def: "Done or reached decisively and with authority." }
    ]
  },
  {
    title: "The Mystery of Contradiction",
    body: "Combine opposing traits like cruelty and kindness to make yourself unfathomable. Reveal your contradictions slowly to add richness to your character and keep people talking. Issue authoritative predictions to create an uncanny aura of psychic power.",
    source: "The Art of Seduction",
    color: "#533483",
    vocab: [
      { word: "Unfathomable", def: "Incapable of being fully explored or understood." },
      { word: "Uncanny", def: "Strange or mysterious, especially in an unsettling way." }
    ]
  },
  {
    title: "The Demonic Orator",
    body: "Deploy rhythmic repetitions and loaded catchwords to stir deep emotional turmoil. Believe your own rhetoric so fiercely that your audience has no choice but to follow. Use a slow, hypnotic delivery to cast a subtly spellbinding effect over the crowd.",
    source: "The Art of Seduction",
    color: "#2d132c",
    vocab: [
      { word: "Rhetoric", def: "The art of effective or persuasive speaking or writing." }
    ]
  },
  {
    title: "The Uninhibited Screen",
    body: "Display a dangerous, unbridled energy that invites the repressed to project their secret fantasies onto you. Show an absolute fearlessness to make people believe you are far more powerful than you are. Project a dreamlike fluidity that demonstrates your total openness to the unconscious.",
    source: "The Art of Seduction",
    color: "#1b3a2f",
    vocab: [
      { word: "Unbridled", def: "Uncontrolled; unconstrained." },
      { word: "Repressed", def: "Restrained, inhibited, or oppressed." }
    ]
  },
  {
    title: "The Vulnerable Lover",
    body: "Reveal a deep need for the affection of your audience to soften your fanatical exterior. Feed off the energy of the crowd to spark an electrifying chain reaction. Treat your public like a single person you are wooing to make them feel uniquely desired.",
    source: "The Art of Seduction",
    color: "#3c1518",
    vocab: [
      { word: "Fanatical", def: "Filled with excessive and single-minded zeal." }
    ]
  },
  {
    title: "The Magnetic Gaze",
    body: "Develop a piercing stare that disturbs your target's emotions without a single word. Exert quiet force by ensuring your eyes never betray fear or nervousness. Practice your gaze in the mirror to maintain absolute self-control over your physical aura.",
    source: "The Art of Seduction",
    color: "#22223b",
    vocab: [
      { word: "Aura", def: "The distinctive atmosphere or quality that seems to surround and be generated by a person." }
    ]
  }
];
{
title: "Fast and Slow Thinking",
body: "System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control. System 2 allocates attention to effortful mental activities, including complex computations. Learn to recognize when your automatic impulses are taking over and deliberately engage your slow, reasoning mind.",
source: "Thinking, Fast and Slow",
color: "#1a1a2e",
vocab: [
{ word: "Allocates", def: "Distributes resources or duties for a particular purpose." }
]
},
{
title: "The Invisible Gorilla",
body: "Intense focusing on a task can make people effectively blind, even to stimuli that normally attract attention. We are not only blind to the obvious, but we are also completely blind to our blindness. Step back from highly absorbing tasks occasionally to ensure you are not missing critical changes in your environment.",
source: "Thinking, Fast and Slow",
color: "#16213e",
vocab: [
{ word: "Stimuli", def: "Things or events that evoke a specific functional reaction in an organ or tissue." }
]
},
{
title: "The Illusion of Control",
body: "We identify with our conscious, reasoning System 2, but the automatic System 1 is actually the secret author of many of our choices. Most of what you think and do originates as impressions and feelings generated silently in the background. Acknowledge that your snap judgments dictate much more of your life than your logic does.",
source: "Thinking, Fast and Slow",
color: "#0f3460",
vocab: []
},
{
title: "Division of Labor",
body: "When all goes smoothly, your conscious mind adopts the suggestions of your automatic system with little or no modification. You generally believe your impressions and act on your desires without questioning them. Train yourself to actively cross-examine your initial impressions before converting them into firm beliefs.",
source: "Thinking, Fast and Slow",
color: "#533483",
vocab: []
},
{
title: "Cognitive Illusions",
body: "Just as your eyes can be fooled by visual tricks, your mind is deeply susceptible to illusions of thought. Because your automatic system cannot be turned off at will, these errors of intuitive thought are difficult to prevent. You must learn to recognize the warning signs of cognitive traps and slow down when the stakes are high.",
source: "Thinking, Fast and Slow",
color: "#2d132c",
vocab: [
{ word: "Susceptible", def: "Likely or liable to be influenced or harmed by a particular thing." }
]
},
{
title: "The Autonomy of System 1",
body: "You cannot refrain from understanding simple sentences in your own language or from noticing hostility in a voice. These mental actions are completely involuntary and run on automatic pilot. Since you cannot prevent these rapid assessments, build environments that minimize the risk of acting poorly on them.",
source: "Thinking, Fast and Slow",
color: "#1b3a2f",
vocab: [
{ word: "Autonomy", def: "The right or condition of self-government; independence." }
]
},
{
title: "The Law of Least Effort",
body: "If there are several ways of achieving the same goal, people will eventually gravitate to the least demanding course of action. Laziness is built deep into our nature, and effort is viewed as a cost. Design your workflows and habits so that the correct choice requires the least amount of mental friction.",
source: "Thinking, Fast and Slow",
color: "#3c1518",
vocab: [
{ word: "Gravitate", def: "Move toward or be attracted to a place, person, or thing." }
]
},
{
title: "The Currency of Attention",
body: "You dispose of a limited budget of attention, and if you try to go beyond your budget, you will inevitably fail. It is the mark of effortful activities that they interfere with each other. Never attempt to combine highly demanding mental tasks, as your brain simply cannot process them simultaneously.",
source: "Thinking, Fast and Slow",
color: "#22223b",
vocab: []
},
{
title: "Task Switching",
body: "Switching from one mental task to another is highly effortful, especially under time pressure. Modern cognitive tests prove that repeatedly switching focus drains your working memory and intelligence. Protect your mental energy by grouping similar tasks together and completing them sequentially.",
source: "Thinking, Fast and Slow",
color: "#2f3e46",
vocab: [
{ word: "Sequentially", def: "By forming or following a logical order or sequence." }
]
},
{
title: "Mental Sprints",
body: "When you engage in intense mental work, your pupils dilate and your heart rate increases significantly. You cannot sustain this peak level of effort for long before your mind simply gives up. Avoid mental overload by dividing complex tasks into multiple easy steps and writing down intermediate results.",
source: "Thinking, Fast and Slow",
color: "#4a1c40",
vocab: [
{ word: "Dilate", def: "Make or become wider, larger, or more open." }
]
},
{
title: "The Time Pressure Trap",
body: "Any task that requires you to keep several ideas in mind at the same time has a hurried, exhausting character. The rapid rate at which material decays in your memory forces the pace of your thinking. Always externalize your thoughts to paper or digital notes to relieve the pressure on your working memory.",
source: "Thinking, Fast and Slow",
color: "#1a1a2e",
vocab: [
{ word: "Externalize", def: "Give external existence or form to something." }
]
},
{
title: "Expert Efficiency",
body: "As you become highly skilled in a task, its demand for mental energy diminishes significantly. Highly intelligent or well-practiced individuals require far less effort to solve the same problems. Master the fundamental basics of your field until they become completely automatic, freeing up cognitive space for higher-level strategy.",
source: "Thinking, Fast and Slow",
color: "#16213e",
vocab: []
},
{
title: "Ego Depletion",
body: "An effort of will or self-control is physically tiring; forcing yourself to do something reduces your ability to exert self-control later. The exertion of self-control is depleting and unpleasant, leading to impulsive behavior. Schedule your most critical and demanding decisions for times when you are fully rested.",
source: "Thinking, Fast and Slow",
color: "#0f3460",
vocab: [
{ word: "Depletion", def: "Reduction in the number or quantity of something." }
]
},
{
title: "The Sweet Tooth of System 1",
body: "When your mind is loaded with a demanding cognitive task, you are far more likely to yield to temptations. Cognitively busy people are more likely to make selfish choices, use sexist language, and make superficial judgments. Avoid highly demanding environments when you know you need to exert strict self-discipline.",
source: "Thinking, Fast and Slow",
color: "#533483",
vocab: [
{ word: "Superficial", def: "Existing or occurring at or on the surface; lacking depth." }
]
},
{
title: "The Cost of Blood Sugar",
body: "Effortful mental activity is expensive and measurably drops your blood glucose levels. Tired and hungry decision-makers tend to fall back on the easiest, default position to avoid mental strain. Never make a critical choice or negotiate an important deal on an empty stomach.",
source: "Thinking, Fast and Slow",
color: "#2d132c",
vocab: []
},
{
title: "The Lazy Monitor",
body: "Many people are overconfident and place too much faith in their intuitions, finding cognitive effort mildly unpleasant. They readily endorse an intuitive answer that could have been rejected with just a few seconds of mental work. Actively force yourself to pause and verify your easiest, most appealing snap judgments.",
source: "Thinking, Fast and Slow",
color: "#1b3a2f",
vocab: [
{ word: "Endorse", def: "Declare one's public approval or support of." }
]
},
{
title: "The Danger of Plausibility",
body: "When people believe a conclusion is true, they are very likely to believe flawed arguments that appear to support it. If the automatic system is involved, the conclusion comes first and the supporting arguments follow. Deliberately question and test the arguments supporting your most cherished beliefs to avoid logical blindness.",
source: "Thinking, Fast and Slow",
color: "#3c1518",
vocab: [
{ word: "Plausibility", def: "The quality of seeming reasonable or probable." }
]
},
{
title: "The Engaged Mind",
body: "Intelligence is not only the ability to reason; it is also the ability to deploy attention and search memory when needed. Those who avoid intellectual sloth are more alert, intellectually active, and skeptical about their intuitions. Cultivate rationality by refusing to be satisfied with superficially attractive answers.",
source: "Thinking, Fast and Slow",
color: "#22223b",
vocab: [
{ word: "Sloth", def: "Reluctance to work or make an effort; laziness." }
]
},
{
title: "Associative Activation",
body: "An idea that has been activated triggers a spreading cascade of activity in your brain, evoking linked memories and emotions. This process yields a self-reinforcing pattern of cognitive and physical responses that is both diverse and integrated. Be highly mindful of the environments and media you consume, as they secretly program your thoughts.",
source: "Thinking, Fast and Slow",
color: "#2f3e46",
vocab: [
{ word: "Cascade", def: "A process whereby something, typically information or knowledge, is successively passed on." }
]
},
{
title: "The Ideomotor Effect",
body: "Your actions and your emotions can be primed by events of which you are not even aware. Reading words related to old age can unconsciously cause people to walk down a hallway significantly more slowly. Surround yourself with positive, energetic triggers to passively influence your own behavior for the better.",
source: "Thinking, Fast and Slow",
color: "#4a1c40",
vocab: [
{ word: "Primed", def: "Prepared for a particular situation or task." }
]
},
{
title: "Reciprocal Priming",
body: "Common physical gestures can unconsciously influence our thoughts and feelings. Forcing your face into a smile actually makes you find things funnier, and nodding your head makes you more likely to accept a message. Act calm and kind regardless of how you feel, and your mind will eventually align with your body.",
source: "Thinking, Fast and Slow",
color: "#1a1a2e",
vocab: [
{ word: "Reciprocal", def: "Given, felt, or done in return." }
]
},
{
title: "The Money Prime",
body: "Merely seeing subtle reminders of money primes individualism, making people more self-reliant but also more selfish and aloof. People primed with money are less willing to spend time helping others and prefer to be alone. Remove toxic or isolating cues from your workspace to foster collaboration and teamwork.",
source: "Thinking, Fast and Slow",
color: "#16213e",
vocab: [
{ word: "Aloof", def: "Not friendly or forthcoming; cool and distant." }
]
},
{
title: "The Lady Macbeth Effect",
body: "Feeling that one's soul is stained by an unethical act appears to trigger a strong, unconscious desire to cleanse one's body. Cognition is embodied; you think with your body, not only with your brain. Recognize when intense physical urges or habits are actually masking unresolved emotional guilt.",
source: "Thinking, Fast and Slow",
color: "#0f3460",
vocab: [
{ word: "Embodied", def: "Given a tangible or visible form to an idea, quality, or feeling." }
]
},
{
title: "The Unconscious Storyteller",
body: "When faced with completely unexpected events, your automatic system immediately creates a context by linking them in a causal story. It treats the mere conjunction of two words as representations of reality, preparing you for future threats. Accept that the world makes much less sense than your coherence-seeking brain wants you to believe.",
source: "Thinking, Fast and Slow",
color: "#533483",
vocab: [
{ word: "Conjunction", def: "The action or an instance of two or more events or things occurring at the same point in time or space." }
]
}
