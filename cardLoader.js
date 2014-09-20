//Taken from - http://hearthstonejson.com/
//            - robert@cosmicrealms.com
//            - https://github.com/Sembiance/hearthstonejson

function createCards(){
  var toReturn = {
    "Basic": [
        {
            "id": "GAME_004",
            "name": "AFK",
            "type": "Enchantment",
            "text": "Your turns are shorter."
        },
        {
            "id": "EX1_066",
            "name": "Acidic Swamp Ooze",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "text": "<b>Battlecry:</b> Destroy your opponent's weapon.",
            "flavor": "Oozes love Flamenco.  Don't ask.",
            "artist": "Chris Rahn",
            "collectible": true,
            "howToGetGold": "Unlocked at Rogue Level 57.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_041",
            "name": "Ancestral Healing",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 0,
            "text": "Restore a minion to full Health and give it <b>Taunt</b>.",
            "flavor": "I personally prefer some non-ancestral right-the-heck-now healing, but maybe that is just me.",
            "artist": "Dan Scott",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "CS2_041e",
            "name": "Ancestral Infusion",
            "type": "Enchantment",
            "text": "Taunt.",
            "playerClass": "Shaman",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "HERO_09",
            "name": "Anduin Wrynn",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "NEW1_031",
            "name": "Animal Companion",
            "type": "Spell",
            "rarity": "Common",
            "cost": 3,
            "text": "Summon a random Beast Companion.",
            "flavor": "You could summon Misha, Leokk, or Huffer!  Huffer is more trouble than he's worth.",
            "artist": "Wei Wang",
            "collectible": true,
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 45."
        },
        {
            "id": "CS2_025",
            "name": "Arcane Explosion",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Deal $1 damage to all enemy minions.",
            "flavor": "This spell is much better than Arcane Implosion.",
            "artist": "Howard Lyon",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 28."
        },
        {
            "id": "CS2_023",
            "name": "Arcane Intellect",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 3,
            "text": "Draw 2 cards.",
            "flavor": "Playing this card makes you SMARTER.  And let's face it: we could all stand to be a little smarter.",
            "artist": "Dave Berggren",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "EX1_277",
            "name": "Arcane Missiles",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Deal $3 damage randomly split among enemy characters.",
            "flavor": "You'd think you'd be able to control your missiles a little better since you're a powerful mage and all.",
            "artist": "Warren Mahy",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 32.",
            "mechanics": [
                "ImmuneToSpellpower"
            ]
        },
        {
            "id": "DS1_185",
            "name": "Arcane Shot",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Deal $2 damage.",
            "flavor": "Magi conjured arcane arrows to sell to hunters, until hunters learned just enough magic to do it themselves.  The resulting loss of jobs sent Stormwind into a minor recession.",
            "artist": "Luca Zontini",
            "collectible": true,
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 32."
        },
        {
            "id": "CS2_112",
            "name": "Arcanite Reaper",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "attack": 5,
            "durability": 2,
            "flavor": "No… actually you should fear the Reaper.",
            "artist": "Stefan Kopinski",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 51."
        },
        {
            "id": "CS2_155",
            "name": "Archmage",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 6,
            "attack": 4,
            "health": 7,
            "text": "<b>Spell Damage +1</b>",
            "flavor": "You earn the title of Archmage when you can destroy anyone who calls you on it.",
            "artist": "Steve Ellis",
            "collectible": true,
            "howToGetGold": "Unlocked at Mage Level 57.",
            "mechanics": [
                "Spellpower"
            ]
        },
        {
            "id": "CS2_102",
            "name": "Armor Up!",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nGain 2 Armor.",
            "playerClass": "Warrior"
        },
        {
            "id": "CS2_080",
            "name": "Assassin's Blade",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "attack": 3,
            "durability": 4,
            "flavor": "Guaranteed to have been owned by a real assassin.   Certificate of authenticity included.",
            "artist": "Brian Huang",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 32."
        },
        {
            "id": "CS2_076",
            "name": "Assassinate",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 5,
            "text": "Destroy an enemy minion.",
            "flavor": "If you don't want to be assassinated, move to the Barrens and change your name. Good luck!",
            "artist": "Glenn Rane",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "GAME_002",
            "name": "Avatar of the Coin",
            "type": "Minion",
            "rarity": "Free",
            "cost": 0,
            "attack": 1,
            "health": 1,
            "text": "<i>You lost the coin flip, but gained a friend.</i>"
        },
        {
            "id": "CS2_072",
            "name": "Backstab",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 0,
            "text": "Deal $2 damage to an undamaged minion.",
            "flavor": "It's funny how often yelling \"Look over there!\" gets your opponent to turn around.",
            "artist": "Michael Sutfin",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "EX1_399e",
            "name": "Berserking",
            "type": "Enchantment",
            "text": "This minion has increased Attack."
        },
        {
            "id": "CS2_092",
            "name": "Blessing of Kings",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "text": "Give a minion +4/+4. <i>(+4 Attack/+4 Health)</i>",
            "flavor": "Given the number of kings who have been assassinated, are you sure you want their blessing?",
            "artist": "Lucas Graciano",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 49."
        },
        {
            "id": "CS2_092e",
            "name": "Blessing of Kings",
            "type": "Enchantment",
            "text": "+4/+4.",
            "playerClass": "Paladin"
        },
        {
            "id": "CS2_087",
            "name": "Blessing of Might",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Give a minion +3 Attack.",
            "flavor": "\"As in, you MIGHT want to get out of my way.\" - Toad Mackle, recently buffed.",
            "artist": "Zoltan Boros",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 45."
        },
        {
            "id": "CS2_087e",
            "name": "Blessing of Might",
            "type": "Enchantment",
            "faction": "Neutral",
            "text": "+3 Attack.",
            "playerClass": "Paladin"
        },
        {
            "id": "CS2_172",
            "name": "Bloodfen Raptor",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Free",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "flavor": "\"Kill 30 raptors.\" - Hemet Nesingwary",
            "artist": "Dan Brereton",
            "collectible": true,
            "race": "Beast",
            "howToGetGold": "Unlocked at Hunter Level 57."
        },
        {
            "id": "CS2_046e",
            "name": "Bloodlust",
            "type": "Enchantment",
            "text": "+3 Attack this turn.",
            "playerClass": "Shaman",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "CS2_046",
            "name": "Bloodlust",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "text": "Give your minions +3 Attack this turn.",
            "flavor": "blaarghghLLGHRHARAAHAHHH!!",
            "artist": "Luca Zontini",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 40."
        },
        {
            "id": "CS2_173",
            "name": "Bluegill Warrior",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 1,
            "text": "<b>Charge</b>",
            "flavor": "He just wants a hug.   A sloppy... slimy... hug.",
            "artist": "Jakub Kasper",
            "collectible": true,
            "race": "Murloc",
            "howToGetGold": "Unlocked at Paladin Level 53.",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "CS2_boar",
            "name": "Boar",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "race": "Beast"
        },
        {
            "id": "CS2_187",
            "name": "Booty Bay Bodyguard",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 5,
            "attack": 5,
            "health": 4,
            "text": "<b>Taunt</b>",
            "flavor": "You can hire him... until someone offers him enough gold to turn on you.",
            "artist": "Matt Cavotta",
            "collectible": true,
            "howToGetGold": "Unlocked at Shaman Level 55.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_200",
            "name": "Boulderfist Ogre",
            "type": "Minion",
            "rarity": "Free",
            "cost": 6,
            "attack": 6,
            "health": 7,
            "flavor": "\"ME HAVE GOOD STATS FOR THE COST\"",
            "artist": "Brian Despain",
            "collectible": true,
            "howToGetGold": "Unlocked at Warlock Level 51."
        },
        {
            "id": "CS2_103e",
            "name": "Charge",
            "type": "Enchantment",
            "text": "Minions have <b>Charge</b> this turn.",
            "playerClass": "Warrior",
            "mechanics": [
                "GrantCharge",
                "OneTurnEffect"
            ]
        },
        {
            "id": "CS2_103",
            "name": "Charge",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 3,
            "text": "Give a friendly minion +2 Attack and <b>Charge</b>.",
            "flavor": "\"Guys! Guys! Slow down!\" - some kind of non-warrior minion",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 23."
        },
        {
            "id": "CS2_103e2",
            "name": "Charge",
            "type": "Enchantment",
            "text": "+2 Attack and <b>Charge</b>.",
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_084e",
            "name": "Charge",
            "type": "Enchantment",
            "text": "This minion has <b>Charge</b>.",
            "playerClass": "Warrior"
        },
        {
            "id": "DS1_178e",
            "name": "Charge",
            "type": "Enchantment",
            "text": "Tundra Rhino grants <b>Charge</b>.",
            "playerClass": "Hunter"
        },
        {
            "id": "CS2_182",
            "name": "Chillwind Yeti",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "health": 5,
            "flavor": "He always dreamed of coming down from the mountains and opening a noodle shop, but he never got the nerve.",
            "artist": "Mauro Cascioli",
            "collectible": true,
            "howToGetGold": "Unlocked at Warrior Level 55."
        },
        {
            "id": "CS2_005",
            "name": "Claw",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Give your hero +2 Attack this turn and 2 Armor.",
            "flavor": "The claw decides who will stay and who will go.",
            "artist": "Dany Orizio",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 32."
        },
        {
            "id": "CS2_005o",
            "name": "Claw",
            "type": "Enchantment",
            "text": "+2 Attack this turn.",
            "playerClass": "Druid",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "CS2_017o",
            "name": "Claws",
            "type": "Enchantment",
            "text": "Your hero has +1 Attack this turn.",
            "playerClass": "Druid",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "CS2_114",
            "name": "Cleave",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Deal $2 damage to two random enemy minions.",
            "flavor": "Hey you two…could you stand next to each other for a second…",
            "artist": "Phroilan Gardner",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 40."
        },
        {
            "id": "EX1_019e",
            "name": "Cleric's Blessing",
            "type": "Enchantment",
            "text": "+1/+1.",
            "playerClass": "Priest"
        },
        {
            "id": "GAME_003",
            "name": "Coin's Vengeance",
            "type": "Enchantment",
            "text": "Going second makes your first minion stronger."
        },
        {
            "id": "GAME_003e",
            "name": "Coin's Vengence",
            "type": "Enchantment",
            "text": "Going second makes your first minion stronger."
        },
        {
            "id": "CS2_226o",
            "name": "Commanding",
            "type": "Enchantment",
            "text": "Frostwolf Warlord has increased Attack and Health."
        },
        {
            "id": "CS2_093",
            "name": "Consecration",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "text": "Deal $2 damage to all enemies.",
            "flavor": "Consecrated ground glows with Holy energy.  But it smells a little, too.",
            "artist": "Vance Kovacs",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 43."
        },
        {
            "id": "CS2_201",
            "name": "Core Hound",
            "type": "Minion",
            "rarity": "Common",
            "cost": 7,
            "attack": 9,
            "health": 5,
            "flavor": "You don’t tame a Core Hound. You just train it to eat someone else before it eats you.",
            "artist": "E.M. Gist",
            "collectible": true,
            "race": "Beast",
            "howToGetGold": "Unlocked at Hunter Level 51."
        },
        {
            "id": "CS2_063",
            "name": "Corruption",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Choose an enemy minion.   At the start of your turn, destroy it.",
            "flavor": "It starts with stealing a pen from work, and before you know it, BOOM!  Corrupted!",
            "artist": "Wayne Reynolds",
            "collectible": true,
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 32."
        },
        {
            "id": "CS2_063e",
            "name": "Corruption",
            "type": "Enchantment",
            "text": "At the start of the corrupting player's turn, destroy this minion.",
            "playerClass": "Warlock"
        },
        {
            "id": "CS2_083b",
            "name": "Dagger Mastery",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nEquip a 1/2 Dagger.",
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_582",
            "name": "Dalaran Mage",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 1,
            "health": 4,
            "text": "<b>Spell Damage +1</b>",
            "flavor": "You don't see a lot of Dalaran warriors.",
            "artist": "Jim Nelson",
            "collectible": true,
            "howToGetGold": "Unlocked at Mage Level 59.",
            "mechanics": [
                "Spellpower"
            ]
        },
        {
            "id": "DS1_055",
            "name": "Darkscale Healer",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 5,
            "text": "<b>Battlecry:</b> Restore 2 Health to all friendly characters.",
            "flavor": "Healing is just something she does in her free time.  It's more of a hobby really.",
            "artist": "Jesper Ejsing",
            "collectible": true,
            "howToGetGold": "Unlocked at Priest Level 55.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_074e",
            "name": "Deadly Poison",
            "type": "Enchantment",
            "text": "+2 Attack."
        },
        {
            "id": "CS2_074",
            "name": "Deadly Poison",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Give your weapon +2 Attack.",
            "flavor": "Rogues guard the secrets to poison-making carefully, lest magi start incorporating poison into their spells.  Poisonbolt? Rain of Poison?  Poison Elemental?  Nobody wants that.",
            "artist": "Trevor Jacobs",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 43."
        },
        {
            "id": "CS2_236e",
            "name": "Divine Spirit",
            "type": "Enchantment",
            "text": "This minion has double Health.",
            "playerClass": "Priest"
        },
        {
            "id": "CS2_236",
            "name": "Divine Spirit",
            "type": "Spell",
            "rarity": "Common",
            "cost": 2,
            "text": "Double a minion's Health.",
            "flavor": "Double the trouble. Double the fun!",
            "artist": "Jim Pavelec",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 28."
        },
        {
            "id": "EX1_025",
            "name": "Dragonling Mechanic",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 4,
            "attack": 2,
            "health": 4,
            "text": "<b>Battlecry:</b> Summon a 2/1 Mechanical Dragonling.",
            "flavor": "She is still working on installing the rocket launcher add-on for Mr. Bitey.",
            "artist": "Warren Mahy",
            "collectible": true,
            "howToGetGold": "Unlocked at Mage Level 53.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_061",
            "name": "Drain Life",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 3,
            "text": "Deal $2 damage. Restore #2 Health to your hero.",
            "flavor": "\"I've just sucked one year of your life away.\"",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 45."
        },
        {
            "id": "CS2_064",
            "name": "Dread Infernal",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 6,
            "attack": 6,
            "health": 6,
            "text": "<b>Battlecry:</b> Deal 1 damage to ALL other characters.",
            "flavor": "\"INFERNOOOOOOOOOO!\" - Jaraxxus, Eredar Lord of the Burning Legion",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 23.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_189",
            "name": "Elven Archer",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b>Battlecry:</b> Deal 1 damage.",
            "flavor": "Don't bother asking her out on a date.  She'll shoot you down.",
            "artist": "Steve Prescott",
            "collectible": true,
            "howToGetGold": "Unlocked at Druid Level 57.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_122e",
            "name": "Enhanced",
            "type": "Enchantment",
            "text": "Raid Leader is granting this minion +1 Attack."
        },
        {
            "id": "CS2_013t",
            "name": "Excess Mana",
            "type": "Spell",
            "cost": 0,
            "text": "Draw a card. <i>(You can only have 10 Mana in your tray.)</i>",
            "playerClass": "Druid"
        },
        {
            "id": "CS2_108",
            "name": "Execute",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Destroy a damaged enemy minion.",
            "flavor": "It's okay, he deserved it.",
            "artist": "Dany Orizio",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "NEW1_033o",
            "name": "Eye In The Sky",
            "type": "Enchantment",
            "text": "Leokk is granting this minion +1 Attack.",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_129",
            "name": "Fan of Knives",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "Deal $1 damage to all enemy minions. Draw a card.",
            "flavor": "I wouldn't say I LOVE knives, but I'm definitely a fan.",
            "artist": "Andrew Robinson",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 29."
        },
        {
            "id": "CS2_106",
            "name": "Fiery War Axe",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "attack": 3,
            "durability": 2,
            "flavor": "During times of tranquility and harmony, this weapon was called by its less popular name, Chilly Peace Axe.",
            "artist": "Lucas Graciano",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 49."
        },
        {
            "id": "CS2_042",
            "name": "Fire Elemental",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 6,
            "attack": 6,
            "health": 5,
            "text": "<b>Battlecry:</b> Deal 3 damage.",
            "flavor": "He can never take a bath. Ewww.",
            "artist": "Ralph Horsley",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 49.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_029",
            "name": "Fireball",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 4,
            "text": "Deal $6 damage.",
            "flavor": "This spell is useful for burning things.  If you're looking for spells that toast things, or just warm them a little, you're in the wrong place.",
            "artist": "Ralph Horsley",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 44."
        },
        {
            "id": "CS2_034",
            "name": "Fireblast",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nDeal 1 damage.",
            "playerClass": "Mage"
        },
        {
            "id": "CS2_032",
            "name": "Flamestrike",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 7,
            "text": "Deal $4 damage to all enemy minions.",
            "flavor": "When the ground is on fire, you should <i>not</i> stop, drop, and roll.",
            "artist": "Romain De Santi",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 51."
        },
        {
            "id": "EX1_565o",
            "name": "Flametongue",
            "type": "Enchantment",
            "text": "+2 Attack from Flametongue Totem.",
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_565",
            "name": "Flametongue Totem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 0,
            "health": 3,
            "text": "Adjacent minions have +2 Attack.",
            "inPlayText": "Flametongue",
            "flavor": "Totemsmiths like to use the rarest woods for their totems.  There are even rumors of totems made of Ironbark Protectors.",
            "artist": "Jonathan Ryder",
            "collectible": true,
            "race": "Totem",
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 43.",
            "mechanics": [
                "AdjacentBuff",
                "Aura"
            ]
        },
        {
            "id": "hexfrog",
            "name": "Frog",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "attack": 0,
            "health": 1,
            "text": "<b>Taunt</b>",
            "race": "Beast",
            "mechanics": [
                "Taunt"
            ],
            "cost": 0
        },
        {
            "id": "CS2_026",
            "name": "Frost Nova",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "<b>Freeze</b> all enemy minions.",
            "flavor": "Hey man, that's cold.  Literally and metaphorically.",
            "artist": "Josh Tallman",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 23.",
            "mechanics": [
                "Freeze"
            ]
        },
        {
            "id": "CS2_037",
            "name": "Frost Shock",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Deal $1 damage to an enemy character and <b>Freeze</b> it.",
            "flavor": "FROST SHOCK!",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 32.",
            "mechanics": [
                "Freeze"
            ]
        },
        {
            "id": "CS2_024",
            "name": "Frostbolt",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Deal $3 damage to a character and <b>Freeze</b> it.",
            "flavor": "It is customary to yell \"Chill out!\" or \"Freeze!\" or \"Ice ice, baby!\" when you play this card.",
            "artist": "Steve Ellis",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 40.",
            "mechanics": [
                "Freeze"
            ]
        },
        {
            "id": "CS2_226e",
            "name": "Frostwolf Banner",
            "type": "Enchantment",
            "text": "Increased stats."
        },
        {
            "id": "CS2_121",
            "name": "Frostwolf Grunt",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Taunt</b>",
            "flavor": "Grunting is what his father did and his father before that.   It's more than just a job.",
            "artist": "Richie Marella",
            "collectible": true,
            "howToGetGold": "Unlocked at Shaman Level 57.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_226",
            "name": "Frostwolf Warlord",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "<b>Battlecry:</b> Gain +1/+1 for each other friendly minion on the battlefield.",
            "inPlayText": "Warlord",
            "flavor": "The Frostwolves are locked in combat with the Stormpike Expedition over control of Alterac Valley.  Every attempt at peace-talks has ended with Captain Galvangar killing the mediator.",
            "artist": "James Ryman",
            "collectible": true,
            "howToGetGold": "Unlocked at Shaman Level 53.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "DS1_175o",
            "name": "Furious Howl",
            "type": "Enchantment",
            "text": "This Beast has +1 Attack from Timber Wolf.",
            "playerClass": "Hunter"
        },
        {
            "id": "HERO_01",
            "name": "Garrosh Hellscream",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "CS2_147",
            "name": "Gnomish Inventor",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 4,
            "attack": 2,
            "health": 4,
            "text": "<b>Battlecry:</b> Draw a card.",
            "flavor": "She's never quite sure what she's making, she just knows it's AWESOME!",
            "artist": "Court Jones",
            "collectible": true,
            "howToGetGold": "Unlocked at Priest Level 57.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS1_042",
            "name": "Goldshire Footman",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 2,
            "text": "<b>Taunt</b>",
            "flavor": "If 1/2 minions are all that is defending Goldshire, you would think it would have been overrun years ago.",
            "artist": "Donato Giancola",
            "collectible": true,
            "howToGetGold": "Unlocked at Paladin Level 57.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_508",
            "name": "Grimscale Oracle",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "ALL other Murlocs have +1 Attack.",
            "inPlayText": "Argalagblbl",
            "flavor": "These are the brainy murlocs.  It turns out that doesn’t mean much.",
            "artist": "Phil Saunders",
            "collectible": true,
            "race": "Murloc",
            "howToGetGold": "Unlocked at Warlock Level 53.",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "CS2_088",
            "name": "Guardian of Kings",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 7,
            "attack": 5,
            "health": 6,
            "text": "<b>Battlecry:</b> Restore 6 Health to your hero.",
            "flavor": "Holy beings from the beyond are so cliché!",
            "artist": "E.M. Gist",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 47.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "HERO_07",
            "name": "Gul'dan",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_399",
            "name": "Gurubashi Berserker",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "attack": 2,
            "health": 7,
            "text": "Whenever this minion takes damage, gain +3 Attack.",
            "flavor": "No Pain, No Gain.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "howToGetGold": "Unlocked at Warlock Level 57."
        },
        {
            "id": "CS2_094",
            "name": "Hammer of Wrath",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 4,
            "text": "Deal $3 damage.  Draw a card.",
            "flavor": "A good paladin has many tools.  Hammer of Wrath, Pliers of Vengeance, Hacksaw of Justice, etc.",
            "artist": "Efrem Palacios",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 32."
        },
        {
            "id": "EX1_371",
            "name": "Hand of Protection",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Give a minion <b>Divine Shield</b>.",
            "flavor": "This spell has been renamed so many times, even paladins don’t know what it should be called anymore.",
            "artist": "Clint Langley",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 23."
        },
        {
            "id": "NEW1_009",
            "name": "Healing Totem",
            "type": "Minion",
            "rarity": "Free",
            "cost": 1,
            "attack": 0,
            "health": 2,
            "text": "At the end of your turn, restore 1 Health to all friendly minions.",
            "race": "Totem",
            "playerClass": "Shaman"
        },
        {
            "id": "CS2_007",
            "name": "Healing Touch",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 3,
            "text": "Restore #8 Health.",
            "flavor": "8 Health, no waiting.",
            "artist": "Cyril Van Der Haegen",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "CS2_062",
            "name": "Hellfire",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 4,
            "text": "Deal $3 damage to ALL characters.",
            "flavor": "It's spells like these that make it hard for Warlocks to get decent help.",
            "artist": "Brian 'Chippy' Dugan",
            "collectible": true,
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 49."
        },
        {
            "id": "CS2_105",
            "name": "Heroic Strike",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Give your hero +4 Attack this turn.",
            "flavor": "Really, if you're a hero, this is <i>every</i> strike.",
            "artist": "Jonboy Meyers",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "CS2_105e",
            "name": "Heroic Strike",
            "type": "Enchantment",
            "text": "+4 Attack this turn.",
            "playerClass": "Warrior",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_246",
            "name": "Hex",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 3,
            "text": "Transform a minion into a 0/1 Frog with <b>Taunt</b>.",
            "flavor": "If you Hex a Murloc... it really isn't much of a change, is it?",
            "artist": "Steve Hui",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "EX1_246e",
            "name": "Hexxed",
            "type": "Enchantment",
            "text": "This minion has been transformed!",
            "playerClass": "Shaman",
            "mechanics": [
                "Morph"
            ]
        },
        {
            "id": "CS2_089",
            "name": "Holy Light",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Restore #6 Health.",
            "flavor": "If you are often bathed in Holy Light, you should consider wearing sunscreen.",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "CS1_112",
            "name": "Holy Nova",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "text": "Deal $2 damage to all enemies.  Restore #2 Health to all  friendly characters.",
            "flavor": "If the Holy Light forsakes you, good luck casting this spell.  Also, you're probably a jerk.",
            "artist": "Luca Zontini",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 45."
        },
        {
            "id": "CS1_130",
            "name": "Holy Smite",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Deal $2 damage.",
            "flavor": "It doesn't matter how pious you are.  Everyone needs a good smiting now and again.",
            "artist": "Steve Ellis",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 23."
        },
        {
            "id": "DS1_070",
            "name": "Houndmaster",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 4,
            "attack": 4,
            "health": 3,
            "text": "<b>Battlecry:</b> Give a friendly Beast +2/+2 and <b>Taunt</b>.",
            "inPlayText": "Beastmaster",
            "flavor": "\"Who let the dogs out?\" he asks.  It's rhetorical.",
            "artist": "Dan Brereton",
            "collectible": true,
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 28.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_034",
            "name": "Huffer",
            "type": "Minion",
            "rarity": "Common",
            "cost": 3,
            "attack": 4,
            "health": 2,
            "text": "<b>Charge</b>",
            "race": "Beast",
            "playerClass": "Hunter",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "EX1_360",
            "name": "Humility",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Change a minion's Attack to 1.",
            "flavor": "This card makes something really damp.  Oh wait.  That's \"Humidity.\"",
            "artist": "Daren Bader",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 28."
        },
        {
            "id": "EX1_360e",
            "name": "Humility",
            "type": "Enchantment",
            "faction": "Neutral",
            "text": "Attack has been changed to 1.",
            "playerClass": "Paladin"
        },
        {
            "id": "CS2_084",
            "name": "Hunter's Mark",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "Change a minion's Health to 1.",
            "flavor": "Never play 'Hide and Go Seek' with a Hunter.",
            "artist": "Jimmy Lo",
            "collectible": true,
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 40."
        },
        {
            "id": "CS2_084e",
            "name": "Hunter's Mark",
            "type": "Enchantment",
            "text": "This minion has 1 Health.",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_169",
            "name": "Innervate",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 0,
            "text": "Gain 2 Mana Crystals this turn only.",
            "flavor": "Some druids still have flashbacks from strangers yelling \"Innervate me!!\" at them.",
            "artist": "Doug Alexander",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "CS2_232",
            "name": "Ironbark Protector",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 8,
            "attack": 8,
            "health": 8,
            "text": "<b>Taunt</b>",
            "flavor": "I <i>dare</i> you to attack Darnassus.",
            "artist": "Dave Allsop",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 49.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_141",
            "name": "Ironforge Rifleman",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 2,
            "text": "<b>Battlecry:</b> Deal 1 damage.",
            "flavor": "\"Ready! Aim! Drink!\"",
            "artist": "Tooth",
            "collectible": true,
            "howToGetGold": "Unlocked at Mage Level 55.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_125",
            "name": "Ironfur Grizzly",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Taunt</b>",
            "flavor": "\"Bear Carcass 1/10\"",
            "artist": "Lars Grant-West",
            "collectible": true,
            "race": "Beast",
            "howToGetGold": "Unlocked at Hunter Level 59.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "HERO_08",
            "name": "Jaina Proudmoore",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Mage"
        },
        {
            "id": "EX1_539",
            "name": "Kill Command",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "Deal $3 damage.  If you have a Beast, deal $5 damage instead.",
            "flavor": "\"Kill!\", he commanded.",
            "artist": "Gabe from Penny Arcade",
            "collectible": true,
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 49."
        },
        {
            "id": "CS2_142",
            "name": "Kobold Geomancer",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Spell Damage +1</b>",
            "flavor": "In the old days, Kobolds were the finest candle merchants in the land. Then they got pushed too far...",
            "artist": "Gabor Szikszai",
            "collectible": true,
            "howToGetGold": "Unlocked at Warlock Level 59.",
            "mechanics": [
                "Spellpower"
            ]
        },
        {
            "id": "NEW1_011",
            "name": "Kor'kron Elite",
            "type": "Minion",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "health": 3,
            "text": "<b>Charge</b>",
            "flavor": "The Kor'kron are the elite forces of Garrosh Hellscream. Let's just say you don't want to run into these guys while wearing a blue tabard.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 44.",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "NEW1_033",
            "name": "Leokk",
            "type": "Minion",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 4,
            "text": "Other friendly minions have +1 Attack.",
            "race": "Beast",
            "playerClass": "Hunter"
        },
        {
            "id": "CS1h_001",
            "name": "Lesser Heal",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nRestore 2 Health.",
            "playerClass": "Priest"
        },
        {
            "id": "CS2_056",
            "name": "Life Tap",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nDraw a card and take 2 damage.",
            "playerClass": "Warlock"
        },
        {
            "id": "CS2_091",
            "name": "Light's Justice",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "durability": 4,
            "flavor": "Prince Malchezaar was a collector of rare weapons. He'd animate them and have them dance for him.",
            "artist": "Glenn Rane",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "CS2_162",
            "name": "Lord of the Arena",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 6,
            "attack": 6,
            "health": 5,
            "text": "<b>Taunt</b>",
            "flavor": "He used to be a 2100+ rated arena player, but that was years ago and nobody can get him to shut up about it.",
            "artist": "E.M. Gist",
            "collectible": true,
            "howToGetGold": "Unlocked at Priest Level 59.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "GAME_001",
            "name": "Luck of the Coin",
            "type": "Enchantment",
            "text": "Going second grants you increased Health."
        },
        {
            "id": "CS2_118",
            "name": "Magma Rager",
            "type": "Minion",
            "rarity": "Free",
            "cost": 3,
            "attack": 5,
            "health": 1,
            "flavor": "He likes to think he is powerful, but pretty much anyone can solo Molten Core now.",
            "artist": "Matt Gaser",
            "collectible": true,
            "howToGetGold": "Unlocked at Shaman Level 51."
        },
        {
            "id": "HERO_06",
            "name": "Malfurion Stormrage",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "CS2_009e",
            "name": "Mark of the Wild",
            "type": "Enchantment",
            "text": "This minion has +2/+2 and <b>Taunt</b>.",
            "playerClass": "Druid"
        },
        {
            "id": "CS2_009",
            "name": "Mark of the Wild",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Give a minion <b>Taunt</b> and +2/+2.<i> (+2 Attack/+2 Health)</i>",
            "flavor": "Not to be confused with Jim of the Wild.",
            "artist": "Brad Vancata",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 28."
        },
        {
            "id": "DS1_070o",
            "name": "Master's Presence",
            "type": "Enchantment",
            "text": "+2/+2 and <b>Taunt</b>.",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_025t",
            "name": "Mechanical Dragonling",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1
        },
        {
            "id": "CS2_222o",
            "name": "Might of Stormwind",
            "type": "Enchantment",
            "text": "Has +1/+1."
        },
        {
            "id": "DS1_233",
            "name": "Mind Blast",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Deal $5 damage to the enemy hero.",
            "flavor": "This spell blasts you directly in the MIND.",
            "artist": "Dave Allsop",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "CS1_113",
            "name": "Mind Control",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 10,
            "text": "Take control of an enemy minion.",
            "flavor": "Nominated as \"Spell Most Likely to Make Your Opponent Punch the Wall.\"",
            "artist": "Sean O’Daniels",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 49."
        },
        {
            "id": "CS1_113e",
            "name": "Mind Control",
            "type": "Enchantment",
            "faction": "Neutral",
            "rarity": "Common",
            "text": "This minion has switched controllers.",
            "playerClass": "Priest"
        },
        {
            "id": "CS2_003",
            "name": "Mind Vision",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Put a copy of a random card in your opponent's hand into your hand.",
            "flavor": "I see what you did there.",
            "artist": "Michael Komarck",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 32."
        },
        {
            "id": "CS2_mirror",
            "name": "Mirror Image",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "attack": 0,
            "health": 2,
            "text": "<b>Taunt</b>",
            "playerClass": "Mage",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_027",
            "name": "Mirror Image",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Summon two 0/2 minions with <b>Taunt</b>.",
            "flavor": "Oh hey it's Mirror Image! !egamI rorriM s'ti yeh hO",
            "artist": "Jim Nelson",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "NEW1_032",
            "name": "Misha",
            "type": "Minion",
            "rarity": "Common",
            "cost": 3,
            "attack": 4,
            "health": 4,
            "text": "<b>Taunt</b>",
            "race": "Beast",
            "playerClass": "Hunter",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_508o",
            "name": "Mlarggragllabl!",
            "type": "Enchantment",
            "text": "This Murloc has +1 Attack."
        },
        {
            "id": "CS2_008",
            "name": "Moonfire",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "Deal $1 damage.",
            "flavor": "\"Cast Moonfire, and never stop.\" - How to Be a Druid, Chapter 5, Section 3",
            "artist": "Richard Wright",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 40."
        },
        {
            "id": "EX1_302",
            "name": "Mortal Coil",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Deal $1 damage to a minion. If that kills it, draw a card.",
            "flavor": "If your spells look like horrifying skulls, let's be honest, you should get to draw some cards.",
            "artist": "Matt Gaser",
            "collectible": true,
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 43."
        },
        {
            "id": "DS1_183",
            "name": "Multi-Shot",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 4,
            "text": "Deal $3 damage to two random enemy minions.",
            "flavor": "You see, it's all about <i>throughput</i>.",
            "artist": "Benjamin Zhang",
            "collectible": true,
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "CS2_168",
            "name": "Murloc Raider",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Free",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "flavor": "Mrrraggglhlhghghlgh, mrgaaag blarrghlgaahahl mrgggg glhalhah a bghhll graggmgmg Garrosh mglhlhlh mrghlhlhl!!",
            "artist": "Dan Scott",
            "collectible": true,
            "race": "Murloc",
            "howToGetGold": "Unlocked at Priest Level 51."
        },
        {
            "id": "EX1_506a",
            "name": "Murloc Scout",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "attack": 1,
            "health": 1,
            "race": "Murloc"
        },
        {
            "id": "EX1_506",
            "name": "Murloc Tidehunter",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 1,
            "text": "<b>Battlecry:</b> Summon a 1/1 Murloc Scout.",
            "flavor": "\"Death will rise, from the tides!\"",
            "artist": "Dan Scott",
            "collectible": true,
            "race": "Murloc",
            "howToGetGold": "Unlocked at Rogue Level 53.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "GAME_006",
            "name": "NOOOOOOOOOOOO",
            "type": "Spell",
            "cost": 2,
            "text": "Somehow, the card you USED to have has been deleted.  Here, have this one instead!",
            "flavor": "Even your flavor text has been deleted. Dang."
        },
        {
            "id": "EX1_593",
            "name": "Nightblade",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "<b>Battlecry: </b>Deal 3 damage to the enemy hero.",
            "flavor": "Your face is the place you'd probably least like a dagger, and where rogues are most likely to deliver them.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "howToGetGold": "Unlocked at Druid Level 53.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_235",
            "name": "Northshire Cleric",
            "type": "Minion",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "health": 3,
            "text": "Whenever a minion is healed, draw a card.",
            "flavor": "They help the downtrodden and distressed.  Also they sell cookies.",
            "artist": "Terese Nielsen",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 40.",
            "mechanics": [
                "HealTarget"
            ]
        },
        {
            "id": "EX1_015",
            "name": "Novice Engineer",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Free",
            "cost": 2,
            "attack": 1,
            "health": 1,
            "text": "<b>Battlecry:</b> Draw a card.",
            "flavor": "\"Half of this class will not graduate… since they'll have been turned to chickens.\" - Tinkmaster Overspark, teaching Gizmos 101.",
            "artist": "Karl Richardson",
            "collectible": true,
            "howToGetGold": "Unlocked at Druid Level 59.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_119",
            "name": "Oasis Snapjaw",
            "type": "Minion",
            "rarity": "Free",
            "cost": 4,
            "attack": 2,
            "health": 7,
            "flavor": "His dreams of flying and breathing fire like his idol will never be realized.",
            "artist": "Ittoku Seta",
            "collectible": true,
            "race": "Beast",
            "howToGetGold": "Unlocked at Druid Level 51."
        },
        {
            "id": "CS2_197",
            "name": "Ogre Magi",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "health": 4,
            "text": "<b>Spell Damage +1</b>",
            "flavor": "Training Ogres in the art of spellcasting is a questionable decision.",
            "artist": "James Ryman",
            "collectible": true,
            "howToGetGold": "Unlocked at Warlock Level 55.",
            "mechanics": [
                "Spellpower"
            ]
        },
        {
            "id": "CS2_022e",
            "name": "Polymorph",
            "type": "Enchantment",
            "faction": "Neutral",
            "rarity": "Common",
            "text": "This minion has been transformed into a 1/1 Sheep.",
            "playerClass": "Mage",
            "mechanics": [
                "Morph"
            ]
        },
        {
            "id": "CS2_022",
            "name": "Polymorph",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 4,
            "text": "Transform a minion into a 1/1 Sheep.",
            "flavor": "There was going to be a pun in this flavor text, but it just came out baa-d.",
            "artist": "Vance Kovacs",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "CS2_004",
            "name": "Power Word: Shield",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Give a minion +2 Health.\\nDraw a card.",
            "flavor": "Sure the extra protection is nice, but the shield really reduces visibility.",
            "artist": "Jessica Jung",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "CS2_004e",
            "name": "Power Word: Shield",
            "type": "Enchantment",
            "text": "+2 Health.",
            "playerClass": "Priest"
        },
        {
            "id": "CS2_122",
            "name": "Raid Leader",
            "type": "Minion",
            "rarity": "Free",
            "cost": 3,
            "attack": 2,
            "health": 2,
            "text": "Your other minions have +1 Attack.",
            "inPlayText": "Lead",
            "flavor": "\"That's a 50 DKP minus!\"",
            "artist": "Phill Gonzales",
            "collectible": true,
            "howToGetGold": "Unlocked at Warrior Level 57.",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "CS2_196",
            "name": "Razorfen Hunter",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "<b>Battlecry:</b> Summon a 1/1 Boar.",
            "flavor": "Someone did mess with Tuskerr once.  ONCE.",
            "artist": "Clint Langley",
            "collectible": true,
            "howToGetGold": "Unlocked at Hunter Level 55.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_213",
            "name": "Reckless Rocketeer",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Free",
            "cost": 6,
            "attack": 5,
            "health": 2,
            "text": "<b>Charge</b>",
            "flavor": "One Insane Rocketeer.   One Rocket full of Explosives.   Infinite Fun.",
            "artist": "John \"JP\" Polidora",
            "collectible": true,
            "howToGetGold": "Unlocked at Shaman Level 59.",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "CS2_101",
            "name": "Reinforce",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nSummon a 1/1 Silver Hand Recruit.",
            "playerClass": "Paladin"
        },
        {
            "id": "HERO_05",
            "name": "Rexxar",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "CS2_120",
            "name": "River Crocolisk",
            "type": "Minion",
            "rarity": "Free",
            "cost": 2,
            "attack": 2,
            "health": 3,
            "flavor": "Edward \"Lefty\" Smith tried to make luggage out of a river crocolisk once.",
            "artist": "Daren Bader",
            "collectible": true,
            "race": "Beast",
            "howToGetGold": "Unlocked at Druid Level 55."
        },
        {
            "id": "CS2_045e",
            "name": "Rockbiter Weapon",
            "type": "Enchantment",
            "text": "This character has +3 Attack this turn.",
            "playerClass": "Shaman",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "CS2_045",
            "name": "Rockbiter Weapon",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Give a friendly character +3 Attack this turn.",
            "flavor": "This would be real handy if your enemy is made of rock.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "NEW1_003",
            "name": "Sacrificial Pact",
            "type": "Spell",
            "rarity": "Common",
            "cost": 0,
            "text": "Destroy a Demon. Restore #5 Health to your hero.",
            "flavor": "This is the reason that Demons never really become friends with Warlocks.",
            "artist": "Jim Nelson",
            "collectible": true,
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "EX1_581",
            "name": "Sap",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Return an enemy minion to your opponent's hand.",
            "flavor": "Rogues love sappy movies.",
            "artist": "Scott Altmann",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 40."
        },
        {
            "id": "CS2_011o",
            "name": "Savage Roar",
            "type": "Enchantment",
            "text": "+2 Attack this turn.",
            "playerClass": "Druid",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "CS2_011",
            "name": "Savage Roar",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "Give your characters +2 Attack this turn.",
            "flavor": "What do they roar? Nobody can quite tell, but it sounds like \"Elephant Macho Breeze\".  It's probably not that, though.",
            "artist": "Grace Liu",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 43."
        },
        {
            "id": "CS2_050",
            "name": "Searing Totem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "race": "Totem",
            "playerClass": "Shaman"
        },
        {
            "id": "CS2_179",
            "name": "Sen'jin Shieldmasta",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Free",
            "cost": 4,
            "attack": 3,
            "health": 5,
            "text": "<b>Taunt</b>",
            "flavor": "Sen'jin Villiage is nice, if you like trolls and dust.",
            "artist": "Brian Despain",
            "collectible": true,
            "howToGetGold": "Unlocked at Rogue Level 59.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_057",
            "name": "Shadow Bolt",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 3,
            "text": "Deal $4 damage to a minion.",
            "flavor": "It’s a Bolt.   Its made out of Shadow.   What more do you need to know!",
            "artist": "Dave Allsop",
            "collectible": true,
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "EX1_622",
            "name": "Shadow Word: Death",
            "type": "Spell",
            "rarity": "Common",
            "cost": 3,
            "text": "Destroy a minion with an Attack of 5 or more.",
            "flavor": "If you miss, it leaves a lightning-bolt-shaped scar on your target.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 43."
        },
        {
            "id": "CS2_234",
            "name": "Shadow Word: Pain",
            "type": "Spell",
            "rarity": "Free",
            "cost": 2,
            "text": "Destroy a minion with 3 or less Attack.",
            "flavor": "A step up from a spell cast by many beginning acolytes: \"Shadow Word: Annoy\".",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Priest",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "CS2_017",
            "name": "Shapeshift",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\n+1 Attack this turn.\\n+1 Armor.",
            "playerClass": "Druid"
        },
        {
            "id": "CS2_083e",
            "name": "Sharpened",
            "type": "Enchantment",
            "text": "+1 Attack this turn.",
            "playerClass": "Rogue",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_019",
            "name": "Shattered Sun Cleric",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 3,
            "health": 2,
            "text": "<b>Battlecry:</b> Give a friendly minion +1/+1.",
            "flavor": "They always have a spare flask of Sunwell Energy Drink™!",
            "artist": "Doug Alexander",
            "collectible": true,
            "howToGetGold": "Unlocked at Priest Level 53.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_tk1",
            "name": "Sheep",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "attack": 1,
            "health": 1,
            "race": "Beast",
            "cost": 0
        },
        {
            "id": "EX1_606",
            "name": "Shield Block",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "Gain 5 Armor.  Draw a card.",
            "flavor": "Shields were invented because Face Block is USELESS.",
            "artist": "Michael Komarck",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 28."
        },
        {
            "id": "EX1_278",
            "name": "Shiv",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Deal $1 damage. Draw a card.",
            "flavor": "Rogues are experts at SHIV-al-ry.",
            "artist": "Alex Garner",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 45."
        },
        {
            "id": "CS2_101t",
            "name": "Silver Hand Recruit",
            "type": "Minion",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "playerClass": "Paladin"
        },
        {
            "id": "CS2_127",
            "name": "Silverback Patriarch",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 3,
            "attack": 1,
            "health": 4,
            "text": "<b>Taunt</b>",
            "flavor": "He likes to act like he's in charge, but the silverback matriarch actually runs things.",
            "artist": "Daren Bader",
            "collectible": true,
            "race": "Beast",
            "howToGetGold": "Unlocked at Warrior Level 53.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_075",
            "name": "Sinister Strike",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Deal $3 damage to the enemy hero.",
            "flavor": "There's something about this strike that just feels off.  Sinister, even.",
            "artist": "Frank Cho",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "skele11",
            "name": "Skeleton",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b></b>"
        },
        {
            "id": "EX1_308",
            "name": "Soulfire",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "Deal $4 damage. Discard a random card.",
            "flavor": "Are you lighting a soul on fire? Or burning someone with your OWN soul? This seems like an important distinction.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 28."
        },
        {
            "id": "CS2_077",
            "name": "Sprint",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 7,
            "text": "Draw 4 cards.",
            "flavor": "Rogues are not good joggers.",
            "artist": "James Zhang",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 10.",
            "howToGetGold": "Unlocked at Level 49."
        },
        {
            "id": "EX1_173",
            "name": "Starfire",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 6,
            "text": "Deal $5 damage.  Draw a card.",
            "flavor": "Balance is important to druids.  This card is perfectly balanced.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 45."
        },
        {
            "id": "CS2_237",
            "name": "Starving Buzzard",
            "type": "Minion",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 1,
            "text": "Whenever you summon a Beast, draw a card.",
            "inPlayText": "Soaring",
            "flavor": "If you feed him, he loses his whole <i>identity</i>.",
            "artist": "Bernie Kang",
            "collectible": true,
            "race": "Beast",
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 4.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "DS1h_292",
            "name": "Steady Shot",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nDeal 2 damage to the enemy hero.",
            "playerClass": "Hunter"
        },
        {
            "id": "CS2_051",
            "name": "Stoneclaw Totem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 0,
            "health": 2,
            "text": "<b>Taunt</b>",
            "race": "Totem",
            "playerClass": "Shaman",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_171",
            "name": "Stonetusk Boar",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b>Charge</b>",
            "flavor": "This card is boaring.",
            "artist": "Howard Lyon",
            "collectible": true,
            "race": "Beast",
            "howToGetGold": "Unlocked at Hunter Level 53.",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "CS2_150",
            "name": "Stormpike Commando",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 2,
            "text": "<b>Battlecry:</b> Deal 2 damage.",
            "flavor": "The Stormpike Commandos are demolition experts.  They also bake a mean cupcake.",
            "artist": "Kev Walker",
            "collectible": true,
            "howToGetGold": "Unlocked at Paladin Level 51.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_222",
            "name": "Stormwind Champion",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 7,
            "attack": 6,
            "health": 6,
            "text": "Your other minions have +1/+1.",
            "inPlayText": "For the Alliance!",
            "flavor": "When Deathwing assaulted the capital, this soldier was the only member of his squad to survive. Now he's all bitter and stuff.",
            "artist": "Doug Alexander",
            "collectible": true,
            "howToGetGold": "Unlocked at Paladin Level 59.",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "CS2_131",
            "name": "Stormwind Knight",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 4,
            "attack": 2,
            "health": 5,
            "text": "<b>Charge</b>",
            "flavor": "They're still embarassed about \"The Deathwing Incident\".",
            "artist": "Ladronn",
            "collectible": true,
            "howToGetGold": "Unlocked at Paladin Level 55.",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "EX1_306",
            "name": "Succubus",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "attack": 4,
            "health": 3,
            "text": "<b>Battlecry:</b> Discard a random card.",
            "flavor": "Warlocks have it pretty good.",
            "artist": "Matt Dixon",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 40.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_012",
            "name": "Swipe",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "text": "Deal $4 damage to an enemy and $1 damage to all other enemies.",
            "flavor": "When a bear rears back and extends his arms, he's about to Swipe!  ... or hug.",
            "artist": "Sean O’Daniels",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 47."
        },
        {
            "id": "GAME_005",
            "name": "The Coin",
            "type": "Spell",
            "text": "Gain 1 Mana Crystal this turn only."
        },
        {
            "id": "GAME_005e",
            "name": "The Coin",
            "type": "Enchantment"
        },
        {
            "id": "HERO_02",
            "name": "Thrall",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "DS1_175",
            "name": "Timber Wolf",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "Your other Beasts have +1 Attack.",
            "flavor": "Other beasts totally dig hanging out with timber wolves.",
            "artist": "Malcolm Davis",
            "collectible": true,
            "race": "Beast",
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 23.",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "CS2_049",
            "name": "Totemic Call",
            "type": "Hero Power",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nSummon a random Totem.",
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_244e",
            "name": "Totemic Might",
            "type": "Enchantment",
            "text": "+2 Health.",
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_244",
            "name": "Totemic Might",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "Give your Totems +2 Health.",
            "flavor": "Totem-stomping is no longer recommended.",
            "artist": "Trent Kaniuga",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 28."
        },
        {
            "id": "DS1_184",
            "name": "Tracking",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "text": "Look at the top three cards of your deck. Draw one and discard the others.",
            "flavor": "For the person who just cannot decide what card to put into a deck!",
            "artist": "Mauro Cascioli",
            "collectible": true,
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 15."
        },
        {
            "id": "CS2_097",
            "name": "Truesilver Champion",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "durability": 2,
            "text": "Whenever your hero attacks, restore 2 Health to it.",
            "flavor": "It Slices, it Dices. You can cut a tin can with it. (But you wouldn't want to.)",
            "artist": "Ryan Sook",
            "collectible": true,
            "playerClass": "Paladin",
            "howToGet": "Unlocked at Level 2.",
            "howToGetGold": "Unlocked at Level 40."
        },
        {
            "id": "DS1_178",
            "name": "Tundra Rhino",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "attack": 2,
            "health": 5,
            "text": "Your Beasts have <b>Charge</b>.",
            "flavor": "Tundra rhinos are often mistaken for kodos.  Or am I mistaken?",
            "artist": "Lars Grant-West",
            "collectible": true,
            "race": "Beast",
            "playerClass": "Hunter",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 43."
        },
        {
            "id": "HERO_04",
            "name": "Uther Lightbringer",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "HERO_03",
            "name": "Valeera Sanguinar",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Free",
            "health": 30,
            "collectible": true,
            "playerClass": "Rogue"
        },
        {
            "id": "NEW1_004",
            "name": "Vanish",
            "type": "Spell",
            "rarity": "Common",
            "cost": 6,
            "text": "Return all minions to their owner's hand.",
            "artist": "Sean O’Daniels",
            "collectible": true,
            "playerClass": "Rogue",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 23."
        },
        {
            "id": "CS2_065",
            "name": "Voidwalker",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "health": 3,
            "text": "<b>Taunt</b>",
            "flavor": "No relation to \"The Voidsteppers\", the popular Void-based dance troupe.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36.",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_011",
            "name": "Voodoo Doctor",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Free",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "text": "<b>Battlecry:</b> Restore 2 Health.",
            "flavor": "Voodoo is an oft-misunderstood art. But it <i>is</i> art.",
            "artist": "Karl Richardson",
            "collectible": true,
            "howToGetGold": "Unlocked at Rogue Level 55.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_186",
            "name": "War Golem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 7,
            "attack": 7,
            "health": 7,
            "flavor": "Golems are not afraid, but for some reason they still run when you cast Fear on them.  Instinct, maybe?  A desire to blend in?",
            "artist": "Dave Kendall",
            "collectible": true,
            "howToGetGold": "Unlocked at Rogue Level 51."
        },
        {
            "id": "EX1_084",
            "name": "Warsong Commander",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "Whenever you summon a minion with 3 or less Attack, give it <b>Charge</b>.",
            "flavor": "The Warsong clan is <i>such drama</i>. It's really not worth it to become a commander.",
            "artist": "Wei Wang",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 36."
        },
        {
            "id": "CS2_033",
            "name": "Water Elemental",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 3,
            "health": 6,
            "text": "<b>Freeze</b> any character damaged by this minion.",
            "inPlayText": "Frostbolt",
            "flavor": "Don't summon a water elemental at a party.  It'll dampen the mood.",
            "artist": "John Avon",
            "collectible": true,
            "playerClass": "Mage",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 49.",
            "mechanics": [
                "Freeze"
            ]
        },
        {
            "id": "EX1_400",
            "name": "Whirlwind",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Deal $1 damage to ALL minions.",
            "flavor": "The way to tell seasoned warriors from novice ones: the novices yell \"wheeeee\" while whirlwinding.",
            "artist": "Jonboy Meyers",
            "collectible": true,
            "playerClass": "Warrior",
            "howToGet": "Unlocked at Level 6.",
            "howToGetGold": "Unlocked at Level 32."
        },
        {
            "id": "CS2_082",
            "name": "Wicked Knife",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 1,
            "durability": 2,
            "playerClass": "Rogue"
        },
        {
            "id": "CS2_013",
            "name": "Wild Growth",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Gain an empty Mana Crystal.",
            "flavor": "Grow your own mana crystals with this Mana Crystal Growth Kit, only 39.99!",
            "artist": "James Ryman",
            "collectible": true,
            "playerClass": "Druid",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 23."
        },
        {
            "id": "CS2_039",
            "name": "Windfury",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 2,
            "text": "Give a minion <b>Windfury</b>.",
            "flavor": "Windfury is like Earthfury and Firefury, but more light and airy.",
            "artist": "Justin Sweet",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 1.",
            "howToGetGold": "Unlocked at Level 23."
        },
        {
            "id": "EX1_587",
            "name": "Windspeaker",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Give a friendly minion <b>Windfury</b>.",
            "flavor": "Is there anything worse than a Windspeaker with halitosis?",
            "artist": "Vance Kovacs",
            "collectible": true,
            "playerClass": "Shaman",
            "howToGet": "Unlocked at Level 8.",
            "howToGetGold": "Unlocked at Level 45.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_124",
            "name": "Wolfrider",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Free",
            "cost": 3,
            "attack": 3,
            "health": 1,
            "text": "<b>Charge</b>",
            "flavor": "Orcish raiders ride wolves because they are well adapted to harsh environments, and because they are soft and cuddly.",
            "artist": "Dany Orizio",
            "collectible": true,
            "howToGetGold": "Unlocked at Warrior Level 59.",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "CS2_052",
            "name": "Wrath of Air Totem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Free",
            "cost": 1,
            "attack": 0,
            "health": 2,
            "text": "<b>Spell Damage +1</b>",
            "race": "Totem",
            "playerClass": "Shaman",
            "mechanics": [
                "Spellpower"
            ]
        }
    ],
    "Credits": [
        {
            "id": "CRED_15",
            "name": "Andy Brock",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 1,
            "attack": 1,
            "health": 3,
            "text": "Can't be <b>Silenced. Divine Shield, Stealth.</b>",
            "elite": true
        },
        {
            "id": "CRED_08",
            "name": "Ben Brode",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 3,
            "attack": 4,
            "health": 1,
            "text": "Your volume can't be reduced below maximum.",
            "elite": true
        },
        {
            "id": "CRED_09",
            "name": "Ben Thompson",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 4,
            "health": 7,
            "text": "<b>Battlecry:</b> Draw some cards. With a pen.",
            "elite": true
        },
        {
            "id": "CRED_03",
            "name": "Bob Fitch",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 3,
            "attack": 2,
            "health": 4,
            "text": "<b>Super Taunt</b> <i>(EVERY character must attack this minion.)</i>",
            "elite": true
        },
        {
            "id": "CRED_13",
            "name": "Brian Schwab",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 10,
            "attack": 10,
            "health": 10,
            "text": "At the end of your turn, give a random minion +1 Attack.",
            "elite": true
        },
        {
            "id": "CRED_06",
            "name": "Derek Sakamoto",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 1,
            "attack": 3,
            "health": 1,
            "text": "<i>The notorious Footclapper.</i>",
            "elite": true
        },
        {
            "id": "CRED_02",
            "name": "Eric Dodds",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 5,
            "health": 5,
            "text": "<b>Battlecry:</b> Summon a 2/2 Pirate and destroy all Ninjas.",
            "elite": true
        },
        {
            "id": "CRED_16",
            "name": "Hamilton Chu",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 7,
            "attack": 9,
            "health": 5,
            "text": "<i>Was successfully NOT part of the problem! ...most of the time.</i>",
            "elite": true
        },
        {
            "id": "CRED_01",
            "name": "Jason Chayes",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 7,
            "health": 6,
            "text": "<b>Enrage:</b> Just kidding! He never Enrages.",
            "elite": true
        },
        {
            "id": "CRED_11",
            "name": "Jay Baxter",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 4,
            "attack": 1,
            "health": 4,
            "text": "<b>Battlecry:</b> Summon FIVE random Inventions.",
            "elite": true
        },
        {
            "id": "CRED_05",
            "name": "Kyle Harrison",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 3,
            "attack": 5,
            "health": 4,
            "text": "<i>3 for a 5/4? That's a good deal!</i>",
            "elite": true
        },
        {
            "id": "CRED_10",
            "name": "Michael Schweitzer",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>C-C-C-COMBO:</b> Destroy a minion.",
            "elite": true
        },
        {
            "id": "CRED_12",
            "name": "Rachelle Davis",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 1,
            "health": 2,
            "text": "<b>Battlecry:</b> Draw TWO cards. <i>She's not a novice engineer.</i>",
            "elite": true
        },
        {
            "id": "CRED_17",
            "name": "Rob Pardo",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 9,
            "health": 9,
            "text": "You can't start a game without this minion in your deck.",
            "elite": true
        },
        {
            "id": "CRED_04",
            "name": "Steven Gabriel",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 1,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Summon a frothy beverage.",
            "elite": true
        },
        {
            "id": "CRED_14",
            "name": "Yong Woo",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 5,
            "attack": 3,
            "health": 2,
            "text": "Your other minions have +3 Attack and <b>Charge</b>.",
            "elite": true
        },
        {
            "id": "CRED_07",
            "name": "Zwick",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Battlecry:</b> Complain about bacon prices.",
            "elite": true
        }
    ],
    "Expert": [
        {
            "id": "CS2_188o",
            "name": "'Inspired'",
            "type": "Enchantment",
            "text": "This minion has +2 Attack this turn.",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_097",
            "name": "Abomination",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "<b>Taunt</b>. <b>Deathrattle:</b> Deal 2 damage to ALL characters.",
            "flavor": "Abominations enjoy Fresh Meat and long walks on the beach.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "mechanics": [
                "Deathrattle",
                "Taunt"
            ]
        },
        {
            "id": "CS2_188",
            "name": "Abusive Sergeant",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "text": "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
            "flavor": "ADD ME TO YOUR DECK, MAGGOT!",
            "artist": "Luca Zontini",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_007",
            "name": "Acolyte of Pain",
            "type": "Minion",
            "rarity": "Common",
            "cost": 3,
            "attack": 1,
            "health": 3,
            "text": "Whenever this minion takes damage, draw a card.",
            "flavor": "He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.",
            "artist": "Dave Kendall",
            "collectible": true
        },
        {
            "id": "NEW1_006",
            "name": "Adrenaline Rush",
            "type": "Spell",
            "rarity": "Epic",
            "cost": 1,
            "text": "Draw a card. <b>Combo:</b> Draw 2 cards instead.",
            "flavor": "Rogues don't need to jump from the top of the 1000 Needles to get a burst of adrenaline.",
            "artist": "Jonboy Meyers",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "NEW1_010",
            "name": "Al'Akir the Windlord",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 8,
            "attack": 3,
            "health": 5,
            "text": "<b>Windfury, Charge, Divine Shield, Taunt</b>",
            "flavor": "He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "elite": true,
            "playerClass": "Shaman",
            "mechanics": [
                "Charge",
                "Divine Shield",
                "Taunt",
                "Windfury"
            ]
        },
        {
            "id": "EX1_006",
            "name": "Alarm-o-Bot",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 3,
            "attack": 0,
            "health": 3,
            "text": "At the start of your turn, swap this minion with a random one in your hand.",
            "flavor": "WARNING.  WARNING.  WARNING.",
            "artist": "Sean O’Daniels",
            "collectible": true
        },
        {
            "id": "EX1_382",
            "name": "Aldor Peacekeeper",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Change an enemy minion's Attack to 1.",
            "flavor": "The Aldor hate two things: the Scryers and smooth jazz.",
            "artist": "Dany Orizio",
            "collectible": true,
            "playerClass": "Paladin",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_561",
            "name": "Alexstrasza",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 8,
            "health": 8,
            "text": "<b>Battlecry:</b> Set a hero's remaining Health to 15.",
            "flavor": "Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "elite": true,
            "race": "Dragon",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_561e",
            "name": "Alexstrasza's Fire",
            "type": "Enchantment",
            "text": "Health set to 15."
        },
        {
            "id": "EX1_393",
            "name": "Amani Berserker",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 3,
            "text": "<b>Enrage:</b> +3 Attack",
            "flavor": "If an Amani berserker asks \"Joo lookin' at me?!\", the correct response is \"Nah, mon\".",
            "artist": "Brian 'Chippy' Dugan",
            "collectible": true,
            "mechanics": [
                "Enrage"
            ]
        },
        {
            "id": "CS2_038",
            "name": "Ancestral Spirit",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "text": "Give a minion \"<b>Deathrattle:</b> Resummon this minion.\"",
            "flavor": "It was just a flesh wound.",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "CS2_038e",
            "name": "Ancestral Spirit",
            "type": "Enchantment",
            "text": "<b>Deathrattle:</b> Resummon this minion.",
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_057",
            "name": "Ancient Brewmaster",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 4,
            "attack": 5,
            "health": 4,
            "text": "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
            "flavor": "Most pandaren say his brew tastes like yak.  But apparently that's a compliment.",
            "artist": "Bernie Kang",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_584",
            "name": "Ancient Mage",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "attack": 2,
            "health": 5,
            "text": "<b>Battlecry:</b> Give adjacent minions <b>Spell Damage +1</b>.",
            "flavor": "Sometimes he forgets and just wanders into someone else's game.",
            "artist": "Howard Lyon",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_008b",
            "name": "Ancient Secrets",
            "type": "Spell",
            "text": "Restore 5 Health.",
            "playerClass": "Druid"
        },
        {
            "id": "NEW1_008a",
            "name": "Ancient Teachings",
            "type": "Spell",
            "text": "Draw 2 cards.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_045",
            "name": "Ancient Watcher",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 2,
            "attack": 4,
            "health": 5,
            "text": "Can't Attack.",
            "flavor": "Why do its eyes seem to follow you as you walk by?",
            "artist": "Richard Wright",
            "collectible": true
        },
        {
            "id": "NEW1_008",
            "name": "Ancient of Lore",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 7,
            "attack": 5,
            "health": 5,
            "text": "<b>Choose One -</b> Draw 2 cards; or Restore 5 Health.",
            "flavor": "Go ahead, carve your initials in him.",
            "artist": "Patrik Hjelm",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_178",
            "name": "Ancient of War",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 7,
            "attack": 5,
            "health": 5,
            "text": "<b>Choose One</b> -\\n+5 Attack; or +5 Health and <b>Taunt</b>.",
            "flavor": "Young Night Elves love to play \"Who can get the Ancient of War to Uproot?\"  You lose if you get crushed to death.",
            "artist": "Sean O’Daniels",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_009",
            "name": "Angry Chicken",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b>Enrage:</b> +5 Attack.",
            "flavor": "There is no beast more frightening (or ridiculous) than a fully enraged chicken.",
            "artist": "Mike Sass",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Enrage"
            ]
        },
        {
            "id": "EX1_398",
            "name": "Arathi Weaponsmith",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Equip a 2/2 weapon.",
            "flavor": "50% off fist weapons, limited time only!",
            "artist": "Samwise Didier",
            "collectible": true,
            "playerClass": "Warrior",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_089",
            "name": "Arcane Golem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 4,
            "health": 2,
            "text": "<b>Charge</b>. <b>Battlecry:</b> Give your opponent a Mana Crystal.",
            "flavor": "Having Arcane golems at home really classes up the place, and as a bonus they are great conversation pieces.",
            "artist": "Sedhayu Ardian",
            "collectible": true,
            "mechanics": [
                "Battlecry",
                "Charge"
            ]
        },
        {
            "id": "EX1_559",
            "name": "Archmage Antonidas",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 7,
            "attack": 5,
            "health": 7,
            "text": "Whenever you cast a spell, add a 'Fireball' spell to your hand.",
            "inPlayText": "Grand Magus",
            "flavor": "Antonidas was the Grand Magus of the Kirin Tor, and Jaina's mentor.  This was a big step up from being Grand Magus of Jelly Donuts.",
            "artist": "Wayne Reynolds",
            "collectible": true,
            "elite": true,
            "playerClass": "Mage"
        },
        {
            "id": "EX1_067",
            "name": "Argent Commander",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 6,
            "attack": 4,
            "health": 2,
            "text": "<b>Charge</b>, <b>Divine Shield</b>",
            "flavor": "The Argent Dawn stands vigilant against the Scourge, as well as people who cut in line at coffee shops.",
            "artist": "James Ryman",
            "collectible": true,
            "mechanics": [
                "Charge",
                "Divine Shield"
            ]
        },
        {
            "id": "EX1_362",
            "name": "Argent Protector",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Battlecry:</b> Give a friendly minion <b>Divine Shield</b>.",
            "flavor": "\"I'm not saying you can dodge fireballs.  I'm saying with this shield, you won't have to.\"",
            "artist": "Doug Alexander",
            "collectible": true,
            "playerClass": "Paladin",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_008",
            "name": "Argent Squire",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b>Divine Shield</b>",
            "flavor": "\"I solemnly swear to uphold the Light, purge the world of darkness, and to eat only burritos.\" - The Argent Dawn Oath",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "mechanics": [
                "Divine Shield"
            ]
        },
        {
            "id": "EX1_402",
            "name": "Armorsmith",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "attack": 1,
            "health": 4,
            "text": "Whenever a friendly minion takes damage, gain 1 Armor.",
            "inPlayText": "Smithing",
            "flavor": "She accepts guild funds for repairs!",
            "artist": "Greg Hildebrandt",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_383t",
            "name": "Ashbringer",
            "type": "Weapon",
            "rarity": "Legendary",
            "cost": 5,
            "attack": 5,
            "durability": 3,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_591",
            "name": "Auchenai Soulpriest",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "attack": 3,
            "health": 5,
            "text": "Your cards and powers that restore Health now deal damage instead.",
            "flavor": "The Auchenai know the end is coming, but they're not sure when.",
            "artist": "Doug Alexander",
            "collectible": true,
            "playerClass": "Priest",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "EX1_384",
            "name": "Avenging Wrath",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 6,
            "text": "Deal $8 damage randomly split among enemy characters.",
            "flavor": "Wham! Wham! Wham! Wham! Wham! Wham! Wham! Wham!",
            "artist": "Alex Garner",
            "collectible": true,
            "playerClass": "Paladin",
            "mechanics": [
                "ImmuneToSpellpower"
            ]
        },
        {
            "id": "EX1_284",
            "name": "Azure Drake",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "<b>Spell Damage +1</b>. <b>Battlecry:</b> Draw a card.",
            "flavor": "They initially planned to be the Beryl or Cerulean drakes, but those felt a tad too pretentious.",
            "artist": "Ben Zhang",
            "collectible": true,
            "race": "Dragon",
            "mechanics": [
                "Battlecry",
                "Spellpower"
            ]
        },
        {
            "id": "EX1_110t",
            "name": "Baine Bloodhoof",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 4,
            "attack": 4,
            "health": 5,
            "elite": true
        },
        {
            "id": "EX1_014te",
            "name": "Bananas",
            "type": "Enchantment",
            "text": "Has +1/+1."
        },
        {
            "id": "EX1_014t",
            "name": "Bananas",
            "type": "Spell",
            "cost": 1,
            "text": "Give a minion +1/+1."
        },
        {
            "id": "EX1_320",
            "name": "Bane of Doom",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 5,
            "text": "Deal $2 damage to a character.  If that kills it, summon a random Demon.",
            "flavor": "My advice to you is to avoid Doom, if possible.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_249",
            "name": "Baron Geddon",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 7,
            "attack": 7,
            "health": 5,
            "text": "At the end of your turn, deal 2 damage to ALL other characters.",
            "flavor": "Baron Geddon was Ragnaros's foremost lieutenant, until he got FIRED.",
            "artist": "Ian Ameling",
            "collectible": true,
            "elite": true
        },
        {
            "id": "EX1_398t",
            "name": "Battle Axe",
            "type": "Weapon",
            "cost": 1,
            "attack": 2,
            "durability": 2,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_392",
            "name": "Battle Rage",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Draw a card for each damaged friendly character.",
            "flavor": "\"You won't like me when I'm angry.\"",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_165b",
            "name": "Bear Form",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "text": "+2 Health and <b>Taunt</b>.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_604o",
            "name": "Berserk",
            "type": "Enchantment",
            "text": "Increased Attack.",
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_549",
            "name": "Bestial Wrath",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 1,
            "text": "Give a Beast +2 Attack and <b>Immune</b> this turn.",
            "flavor": "The seething wrath is just beneath the surface.  Beneath that is wild abandon, followed by slight annoyance.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_549o",
            "name": "Bestial Wrath",
            "type": "Enchantment",
            "text": "+2 Attack and <b>Immune</b> this turn.",
            "playerClass": "Hunter",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_126",
            "name": "Betrayal",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Force an enemy minion to deal its damage to the minions next to it.",
            "flavor": "Everyone has a price. Gnomes, for example, can be persuaded by stuffed animals and small amounts of chocolate.",
            "artist": "Lucas Graciano",
            "collectible": true,
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_005",
            "name": "Big Game Hunter",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 3,
            "attack": 4,
            "health": 2,
            "text": "<b>Battlecry:</b> Destroy a minion with an Attack of 7 or more.",
            "flavor": "Mere devilsaurs no longer excite him.  Soon he'll be trying to catch Onyxia with only a dull Krol Blade.",
            "artist": "Chris Seaman",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_570e",
            "name": "Bite",
            "type": "Enchantment",
            "text": "+4 Attack this turn.",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_570",
            "name": "Bite",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "text": "Give your hero +4 Attack this turn and 4 Armor.",
            "flavor": "Chew your food!",
            "artist": "Tom Baxa",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "CS2_233",
            "name": "Blade Flurry",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "text": "Destroy your weapon and deal its damage to all enemies.",
            "flavor": "\"Look, it's not just about waving daggers around really fast.  It's a lot more complicated than that.\" - Shan, Rogue Trainer",
            "artist": "Hideaki Takamura",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "AffectedBySpellPower"
            ]
        },
        {
            "id": "EX1_509e",
            "name": "Blarghghl",
            "type": "Enchantment",
            "text": "Increased Attack."
        },
        {
            "id": "EX1_355",
            "name": "Blessed Champion",
            "type": "Spell",
            "rarity": "Rare",
            "cost": 5,
            "text": "Double a minion's Attack.",
            "flavor": "This card causes double the trouble AND double the fun.",
            "artist": "Tyler Walpole",
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_363",
            "name": "Blessing of Wisdom",
            "type": "Spell",
            "rarity": "Common",
            "cost": 1,
            "text": "Choose a minion.  Whenever it attacks, draw a card.",
            "flavor": "Apparently with wisdom comes the knowledge that you should probably be attacking every turn.",
            "artist": "Brian 'Chippy' Dugan",
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_363e2",
            "name": "Blessing of Wisdom",
            "type": "Enchantment",
            "text": "When this minion attacks, the enemy player draws a card.",
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_363e",
            "name": "Blessing of Wisdom",
            "type": "Enchantment",
            "text": "When this minion attacks, the player who blessed it draws a card.",
            "playerClass": "Paladin"
        },
        {
            "id": "CS2_028",
            "name": "Blizzard",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 6,
            "text": "Deal $2 damage to all enemy minions and <b>Freeze</b> them.",
            "flavor": "This spell can be very Entertaining.",
            "artist": "Chris Seaman",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Freeze"
            ]
        },
        {
            "id": "EX1_323w",
            "name": "Blood Fury",
            "type": "Weapon",
            "cost": 3,
            "attack": 3,
            "durability": 8,
            "playerClass": "Warlock"
        },
        {
            "id": "CS2_059",
            "name": "Blood Imp",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 0,
            "health": 1,
            "text": "<b>Stealth</b>. At the end of your turn, give another random friendly minion +1 Health.",
            "inPlayText": "Blood Pact",
            "flavor": "Imps are content to hide and viciously taunt everyone nearby.",
            "artist": "Bernie Kang",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "mechanics": [
                "Stealth"
            ]
        },
        {
            "id": "EX1_590",
            "name": "Blood Knight",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> All minions lose <b>Divine Shield</b>. Gain +3/+3 for each Shield lost.",
            "flavor": "The Blood Knights get their holy powers from the Sunwell, which you should NOT bathe in.",
            "artist": "Trent Kaniuga",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS2_059o",
            "name": "Blood Pact",
            "type": "Enchantment",
            "text": "Increased Health.",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_012",
            "name": "Bloodmage Thalnos",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 1,
            "health": 1,
            "text": "<b>Spell Damage +1</b>. <b>Deathrattle:</b> Draw a card.",
            "flavor": "He's in charge of the Annual Scarlet Monastery Blood Drive!",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Deathrattle",
                "Spellpower"
            ]
        },
        {
            "id": "EX1_411e",
            "name": "Bloodrage",
            "type": "Enchantment",
            "text": "No durability loss.",
            "playerClass": "Warrior"
        },
        {
            "id": "NEW1_025",
            "name": "Bloodsail Corsair",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 1,
            "attack": 1,
            "health": 2,
            "text": "<b>Battlecry:</b> Remove 1 Durability from your opponent's weapon.",
            "flavor": "Every pirate uses the same four digits to access Automated Gold Dispensers.  It's called the \"Pirate's Code\".",
            "artist": "Randy Gallegos",
            "collectible": true,
            "race": "Pirate",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_018",
            "name": "Bloodsail Raider",
            "type": "Minion",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 3,
            "text": "<b>Battlecry:</b> Gain Attack equal to the Attack of your weapon.",
            "flavor": "\"I only plunder on days that end in 'y'.\"",
            "artist": "Jim Nelson",
            "collectible": true,
            "race": "Pirate",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_025e",
            "name": "Bolstered",
            "type": "Enchantment",
            "text": "Increased Health."
        },
        {
            "id": "EX1_407",
            "name": "Brawl",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 5,
            "text": "Destroy all minions except one.  (chosen randomly)",
            "flavor": "Do you know the first rule of Brawl Club?",
            "artist": "Wayne Reynolds",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_091o",
            "name": "Cabal Control",
            "type": "Enchantment",
            "text": "This minion has been stolen by Cabal Shadow Priest.",
            "playerClass": "Priest"
        },
        {
            "id": "EX1_091",
            "name": "Cabal Shadow Priest",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 6,
            "attack": 4,
            "health": 5,
            "text": "<b>Battlecry:</b> Take control of an enemy minion that has 2 or less Attack.",
            "flavor": "You never know who may be secretly working for the Cabal....",
            "artist": "Brian 'Chippy' Dugan",
            "collectible": true,
            "playerClass": "Priest",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_110",
            "name": "Cairne Bloodhoof",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 4,
            "health": 5,
            "text": "<b>Deathrattle:</b> Summon a 4/5 Baine Bloodhoof.",
            "flavor": "Cairne was killed by Garrosh, so... don't put this guy in a Warrior deck.  It's pretty insensitive.",
            "artist": "Wayne Reynolds",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "tt_004o",
            "name": "Cannibalize",
            "type": "Enchantment",
            "text": "Increased Attack."
        },
        {
            "id": "NEW1_024",
            "name": "Captain Greenskin",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 5,
            "attack": 5,
            "health": 4,
            "text": "<b>Battlecry:</b> Give your weapon +1/+1.",
            "flavor": "He was <i>this close</i> to piloting a massive juggernaut into Stormwind Harbor. If it weren't for those pesky kids!",
            "artist": "Dan Scott",
            "collectible": true,
            "elite": true,
            "race": "Pirate",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_165a",
            "name": "Cat Form",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "text": "<b>Charge</b>",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_573",
            "name": "Cenarius",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 5,
            "health": 8,
            "text": "<b>Choose One</b> - Give your other minions +2/+2; or Summon two 2/2 Treants with <b>Taunt</b>.",
            "inPlayText": "Demigod",
            "flavor": "Yes, he's a demigod. No, he doesn't need to wear a shirt.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "elite": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_621",
            "name": "Circle of Healing",
            "type": "Spell",
            "rarity": "Common",
            "cost": 0,
            "text": "Restore #4 Health to ALL minions.",
            "flavor": "It isn't really a circle.",
            "artist": "Mike 'Daarken' Lim",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "CS2_073",
            "name": "Cold Blood",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Give a minion +2 Attack. <b>Combo:</b> +4 Attack instead.",
            "flavor": "\"I'm cold blooded, check it and see!\"",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "CS2_073e",
            "name": "Cold Blood",
            "type": "Enchantment",
            "text": "+2 Attack.",
            "playerClass": "Rogue"
        },
        {
            "id": "CS2_073e2",
            "name": "Cold Blood",
            "type": "Enchantment",
            "text": "+4 Attack.",
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_050",
            "name": "Coldlight Oracle",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 2,
            "health": 2,
            "text": "<b>Battlecry:</b> Each player draws 2 cards.",
            "flavor": "They can see the future.   In that future both players draw more cards.   Spoooky.",
            "artist": "Steve Prescott",
            "collectible": true,
            "race": "Murloc",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_103",
            "name": "Coldlight Seer",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "<b>Battlecry:</b> Give ALL other Murlocs +2 Health.",
            "flavor": "The Coldlight murlocs reside in the darkest pits of the Abyssal Depths.  So no, there's no getting away from murlocs.",
            "artist": "Arthur Gimaldinov",
            "collectible": true,
            "race": "Murloc",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_036",
            "name": "Commanding Shout",
            "type": "Spell",
            "rarity": "Rare",
            "cost": 2,
            "text": "Your minions can't be reduced below 1 Health this turn.  Draw a card.",
            "flavor": "\"Shout! Shout! Let it all out!\" - Advice to warriors-in-training",
            "artist": "Wayne Reynolds",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "NEW1_036e",
            "name": "Commanding Shout",
            "type": "Enchantment",
            "text": "Can't be reduced below 1 Health this turn.",
            "playerClass": "Warrior",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "NEW1_036e2",
            "name": "Commanding Shout",
            "type": "Enchantment",
            "text": "Your minions can't be reduced below 1 Health this turn.",
            "playerClass": "Warrior",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_128",
            "name": "Conceal",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Give your minions <b>Stealth</b> until your next turn.",
            "flavor": "Rogues conceal everything but their emotions.  You can't get 'em to shut up about feelings.",
            "artist": "Steve Hui",
            "collectible": true,
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_128e",
            "name": "Concealed",
            "type": "Enchantment",
            "text": "Stealthed until your next turn.",
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_275",
            "name": "Cone of Cold",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "text": "<b>Freeze</b> a minion and the minions next to it, and deal $1 damage to them.",
            "flavor": "Magi of the Kirin Tor were casting Cubes of Cold for many years before Cones came into fashion some 90 years ago.",
            "artist": "Leo Che",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Freeze"
            ]
        },
        {
            "id": "EX1_304e",
            "name": "Consume",
            "type": "Enchantment",
            "text": "Increased stats.",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_287",
            "name": "Counterspell",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "text": "<b>Secret:</b> When your opponent casts a spell, <b>Counter</b> it.",
            "flavor": "What's the difference between a mage playing with Counterspell and a mage who isn't?  The mage who isn't is getting Pyroblasted in the face.",
            "artist": "Jason Chan",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_059",
            "name": "Crazed Alchemist",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Battlecry:</b> Swap the Attack and Health of a minion.",
            "flavor": "\"You'll <i>love</i> my new recipe!\" he says... especially if you're not happy with your current number of limbs.",
            "artist": "Tom Fleming",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_603",
            "name": "Cruel Taskmaster",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Battlecry:</b> Deal 1 damage to a minion and give it +2 Attack.",
            "flavor": "\"I'm going to need you to come in on Sunday.\" - Cruel Taskmaster",
            "artist": "Phroilan Gardner",
            "collectible": true,
            "playerClass": "Warrior",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_595",
            "name": "Cult Master",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "health": 2,
            "text": "Whenever one of your other minions dies, draw a card.",
            "inPlayText": "Cultist",
            "flavor": "She may be an evil cult master, but she still calls her parents once a week.",
            "artist": "Raymond Swanland",
            "collectible": true
        },
        {
            "id": "skele21",
            "name": "Damaged Golem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1
        },
        {
            "id": "EX1_334e",
            "name": "Dark Command",
            "type": "Enchantment",
            "text": "This minion has switched controllers this turn.",
            "playerClass": "Priest"
        },
        {
            "id": "EX1_046",
            "name": "Dark Iron Dwarf",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "health": 4,
            "text": "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
            "flavor": "Guardians of Dark Iron Ore.  Perhaps the most annoying ore, given where you have to forge it.",
            "artist": "Scott Hampton",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_617",
            "name": "Deadly Shot",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "Destroy a random enemy minion.",
            "flavor": "Accuracy is not a highly valued trait among the mok'nathal.  Deadliness is near the top, though.",
            "artist": "Steve Prescott",
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "NEW1_030",
            "name": "Deathwing",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 10,
            "attack": 12,
            "health": 12,
            "text": "<b>Battlecry:</b> Destroy all other minions and discard your hand.",
            "flavor": "Once a noble dragon known as Neltharion, Deathwing lost his mind and shattered Azeroth before finally being defeated.  Daddy issues?",
            "artist": "Bernie Kang",
            "collectible": true,
            "elite": true,
            "race": "Dragon",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_130a",
            "name": "Defender",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_093",
            "name": "Defender of Argus",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 4,
            "attack": 2,
            "health": 3,
            "text": "<b>Battlecry:</b> Give adjacent minions +1/+1 and <b>Taunt</b>.",
            "flavor": "You wouldn’t think that Argus would need this much defending.  But it does.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_131t",
            "name": "Defias Bandit",
            "type": "Minion",
            "faction": "Neutral",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_131",
            "name": "Defias Ringleader",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Combo:</b> Summon a 2/1 Defias Bandit.",
            "flavor": "He stole the deed to town years ago, so technically the town <i>is</i> his. He just calls people Scrub to be mean.",
            "artist": "Dany Orizio",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "EX1_573ae",
            "name": "Demigod's Favor",
            "type": "Enchantment",
            "faction": "Neutral",
            "text": "+2/+2.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_573a",
            "name": "Demigod's Favor",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Give your other minions +2/+2.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_102",
            "name": "Demolisher",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 1,
            "health": 4,
            "text": "At the start of your turn, deal 2 damage to a random enemy.",
            "inPlayText": "Catapult",
            "flavor": "Laying siege isn't fun for anyone.  It's not even all that effective, now that everyone has a flying mount.",
            "artist": "Raymond Swanland",
            "collectible": true
        },
        {
            "id": "EX1_596",
            "name": "Demonfire",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Deal $2 damage to a minion.   If it’s a friendly Demon, give it +2/+2 instead.",
            "flavor": "Demonfire is like regular fire except for IT NEVER STOPS BURNING HELLLPPP",
            "artist": "Ben Wootten",
            "collectible": true,
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_596e",
            "name": "Demonfire",
            "type": "Enchantment",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "This Demon has +2/+2.",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_161o",
            "name": "Demoralizing Roar",
            "type": "Enchantment",
            "text": "This minion has -3 Attack this turn.",
            "playerClass": "Druid",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_tk29",
            "name": "Devilsaur",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "attack": 5,
            "health": 5,
            "race": "Beast"
        },
        {
            "id": "EX1_162",
            "name": "Dire Wolf Alpha",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "Adjacent minions have +1 Attack.",
            "inPlayText": "Alpha Dog",
            "flavor": "We are pretty excited about the upcoming release of Dire Wolf Beta, just repost this sign for a chance at a key.",
            "artist": "John Dickenson",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "AdjacentBuff",
                "Aura"
            ]
        },
        {
            "id": "EX1_166b",
            "name": "Dispel",
            "type": "Spell",
            "faction": "Neutral",
            "text": "<b>Silence</b> a minion.",
            "playerClass": "Druid",
            "mechanics": [
                "Silence"
            ]
        },
        {
            "id": "EX1_349",
            "name": "Divine Favor",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "text": "Draw cards until you have as many in hand as your opponent.",
            "flavor": "This is not just a favor, but a divine one, like helping someone move a couch with a fold out bed!",
            "artist": "Lucas Graciano",
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_310",
            "name": "Doomguard",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 5,
            "attack": 5,
            "health": 7,
            "text": "<b>Charge</b>. <b>Battlecry:</b> Discard two random cards.",
            "flavor": "Summoning a doomguard is risky. <i>Someone</i> is going to die.",
            "artist": "Lucas Graciano",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "mechanics": [
                "Battlecry",
                "Charge"
            ]
        },
        {
            "id": "EX1_567",
            "name": "Doomhammer",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 5,
            "attack": 2,
            "durability": 8,
            "text": "<b>Windfury, Overload:</b> (2)",
            "flavor": "Orgrim Doomhammer gave this legendary weapon to Thrall.  His name is a total coincidence.",
            "artist": "John \"JP\" Polidora",
            "collectible": true,
            "playerClass": "Shaman",
            "mechanics": [
                "Windfury"
            ]
        },
        {
            "id": "NEW1_021",
            "name": "Doomsayer",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 2,
            "attack": 0,
            "health": 7,
            "text": "At the start of your turn, destroy ALL minions.",
            "flavor": "He's almost been right so many times. He was <i>sure</i> it was coming during the Cataclysm.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true
        },
        {
            "id": "NEW1_022",
            "name": "Dread Corsair",
            "type": "Minion",
            "rarity": "Common",
            "cost": 4,
            "attack": 3,
            "health": 3,
            "text": "<b>Taunt.</b> Costs (1) less per Attack of your weapon.",
            "flavor": "\"Yarrrr\" is a pirate word that means \"Greetings, milord.\"",
            "artist": "Trent Kaniuga",
            "collectible": true,
            "race": "Pirate",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "DREAM_04",
            "name": "Dream",
            "type": "Spell",
            "cost": 0,
            "text": "Return a minion to its owner's hand.",
            "playerClass": "Dream"
        },
        {
            "id": "EX1_165t2",
            "name": "Druid of the Claw",
            "type": "Minion",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 6,
            "text": "<b>Taunt</b>",
            "playerClass": "Druid",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_165t1",
            "name": "Druid of the Claw",
            "type": "Minion",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "<b>Charge</b>",
            "playerClass": "Druid",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "EX1_165",
            "name": "Druid of the Claw",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "<b>Choose One -</b> <b>Charge</b>; or +2 Health and <b>Taunt</b>.",
            "flavor": "Cat or Bear?  Cat or Bear?!  I just cannot CHOOSE!",
            "artist": "Luca Zontini",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_243",
            "name": "Dust Devil",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 3,
            "health": 1,
            "text": "<b>Windfury</b>. <b>Overload:</b> (2)",
            "flavor": "Westfall is full of dust devils. And buzzards. And crazed golems. And pirates. Why does anyone live here?",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Shaman",
            "mechanics": [
                "Windfury"
            ]
        },
        {
            "id": "EX1_536",
            "name": "Eaglehorn Bow",
            "type": "Weapon",
            "rarity": "Rare",
            "cost": 3,
            "attack": 3,
            "durability": 2,
            "text": "Whenever a friendly <b>Secret</b> is revealed, gain +1 Durability.",
            "flavor": "First Lesson: Put the pointy end in the other guy.",
            "artist": "Cyril Van Der Haegen",
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_250",
            "name": "Earth Elemental",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 5,
            "attack": 7,
            "health": 8,
            "text": "<b>Taunt</b>. <b>Overload:</b> (3)",
            "flavor": "Nothing beats rock.",
            "artist": "Dan Scott",
            "collectible": true,
            "playerClass": "Shaman",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_245",
            "name": "Earth Shock",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "<b>Silence</b> a minion, then deal $1 damage to it.",
            "flavor": "Earth Shock? Shouldn't it be \"Azeroth Shock\"?",
            "artist": "Kevin Chin",
            "collectible": true,
            "playerClass": "Shaman",
            "mechanics": [
                "Silence"
            ]
        },
        {
            "id": "CS2_117",
            "name": "Earthen Ring Farseer",
            "type": "Minion",
            "rarity": "Common",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Restore 3 Health.",
            "flavor": "He can see really far, and he doesn't use a telescope like those filthy pirates.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_613",
            "name": "Edwin VanCleef",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 3,
            "attack": 2,
            "health": 2,
            "text": "<b>Combo:</b> Gain +2/+2 for each card played earlier this turn.",
            "flavor": "He led the Stonemasons in the reconstruction of Stormwind, and when the nobles refused to pay, he founded the Defias Brotherhood to, well, <i>deconstruct</i> Stormwind.",
            "artist": "Efrem Palacios",
            "collectible": true,
            "elite": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "EX1_004e",
            "name": "Elune's Grace",
            "type": "Enchantment",
            "text": "Increased Health."
        },
        {
            "id": "DREAM_03",
            "name": "Emerald Drake",
            "type": "Minion",
            "cost": 4,
            "attack": 7,
            "health": 6,
            "race": "Dragon",
            "playerClass": "Dream"
        },
        {
            "id": "EX1_170",
            "name": "Emperor Cobra",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "Destroy any minion damaged by this minion.",
            "inPlayText": "Fanged",
            "flavor": "The Sholazar Basin is home to a lot of really horrible things. If you're going to visit, wear bug spray.  And plate armor.",
            "artist": "Lars Grant-West",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Poisonous"
            ]
        },
        {
            "id": "EX1_055o",
            "name": "Empowered",
            "type": "Enchantment",
            "text": "Mana Addict has increased Attack.",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_619e",
            "name": "Equality",
            "type": "Enchantment",
            "text": "Health changed to 1.",
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_619",
            "name": "Equality",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "text": "Change the Health of ALL minions to 1.",
            "flavor": "We are all special unique snowflakes... with 1 Health.",
            "artist": "Michal Ivan",
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "NEW1_037e",
            "name": "Equipped",
            "type": "Enchantment",
            "text": "Increased Attack.",
            "collectible": false
        },
        {
            "id": "EX1_274",
            "name": "Ethereal Arcanist",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 4,
            "attack": 3,
            "health": 3,
            "text": "If you control a <b>Secret</b> at the end of your turn, gain +2/+2.",
            "flavor": "The ethereals are wrapped in cloth to give form to their non-corporeal bodies. Also because it's nice and soft.",
            "artist": "Michael Komarck",
            "collectible": true,
            "elite": false,
            "playerClass": "Mage"
        },
        {
            "id": "EX1_124",
            "name": "Eviscerate",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Deal $2 damage. <b>Combo:</b> Deal $4 damage instead.",
            "flavor": "There is a high cost to Eviscerating your opponent:  It takes a long time to get blood stains out of leather armor.",
            "artist": "Ariel Olivetti",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "EX1_059e",
            "name": "Experiments!",
            "type": "Enchantment",
            "text": "Attack and Health have been swapped by Crazed Alchemist."
        },
        {
            "id": "EX1_059e2",
            "name": "Experiments!",
            "type": "Enchantment",
            "text": "Attack and Health have been swapped by Crazed Alchemist."
        },
        {
            "id": "EX1_537",
            "name": "Explosive Shot",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 5,
            "text": "Deal $5 damage to a minion and $2 damage to adjacent ones.",
            "flavor": "Pull the pin, count to 5, then shoot.  Then duck.",
            "artist": "Tom Baxa",
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_610",
            "name": "Explosive Trap",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "<b>Secret:</b> When your hero is attacked, deal $2 damage to all enemies.",
            "flavor": "It traps your food AND cooks it for you!",
            "artist": "Brandon Kitkouski",
            "collectible": true,
            "playerClass": "Hunter",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_132",
            "name": "Eye for an Eye",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "<b>Secret:</b> When your hero takes damage, deal that much damage to the enemy hero.",
            "flavor": "Justice sometimes takes the form of a closed fist into a soft cheek.",
            "artist": "James Ryman",
            "collectible": true,
            "playerClass": "Paladin",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_564",
            "name": "Faceless Manipulator",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 5,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Choose a minion and become a copy of it.",
            "flavor": "The Faceless Ones are servants of Yogg-Saron, and they feed on fear. Right now they are feeding on your fear of accidentally disenchanting all your good cards.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_023",
            "name": "Faerie Dragon",
            "type": "Minion",
            "rarity": "Common",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "text": "Can't be targeted by spells or Hero Powers.",
            "flavor": "Adorable.  Immune to Magic.  Doesn't pee on the rug.  The perfect pet!",
            "artist": "Samwise Didier",
            "collectible": true,
            "race": "Dragon"
        },
        {
            "id": "CS2_053e",
            "name": "Far Sight",
            "type": "Enchantment",
            "text": "One of your cards costs (3) less.",
            "artist": "Lars Grant-West",
            "playerClass": "Shaman"
        },
        {
            "id": "CS2_053",
            "name": "Far Sight",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 3,
            "text": "Draw a card. That card costs (3) less.",
            "flavor": "Drek'thar can't see, but he can <i>see</i>. You know what I mean? It's ok if you don't.",
            "artist": "Lars Grant-West",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_301",
            "name": "Felguard",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 3,
            "health": 5,
            "text": "<b>Taunt</b>. <b>Battlecry:</b> Destroy one of your Mana Crystals.",
            "flavor": "Yes, he'll fight for you.  BUT HE'S NOT GOING TO LIKE IT.",
            "artist": "John 'JP' Polidora",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "mechanics": [
                "Battlecry",
                "Taunt"
            ]
        },
        {
            "id": "CS1_069",
            "name": "Fen Creeper",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 5,
            "attack": 3,
            "health": 6,
            "text": "<b>Taunt</b>",
            "flavor": "He used to be called Bog Beast, but it confused people because he wasn't an actual beast.   Boom, New Name!",
            "artist": "Monica Langlois",
            "collectible": true,
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_248",
            "name": "Feral Spirit",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "text": "Summon two 2/3 Spirit Wolves with <b>Taunt</b>. <b>Overload:</b> (2)",
            "flavor": "Spirit wolves are like regular wolves with pom-poms.",
            "artist": "Clint Langley",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_finkle",
            "name": "Finkle Einhorn",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 3,
            "health": 3,
            "elite": true
        },
        {
            "id": "EX1_319",
            "name": "Flame Imp",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 3,
            "health": 2,
            "text": "<b>Battlecry:</b> Deal 3 damage to your hero.",
            "flavor": "Imps like being on fire.  They just do.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_614t",
            "name": "Flame of Azzinoth",
            "type": "Minion",
            "cost": 1,
            "attack": 2,
            "health": 1
        },
        {
            "id": "EX1_544",
            "name": "Flare",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 1,
            "text": "All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card.",
            "flavor": "Not only does it reveal your enemies, but it's also great for parties!",
            "artist": "Tyler Walpole",
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "tt_004",
            "name": "Flesheating Ghoul",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "Whenever a minion dies, gain +1 Attack.",
            "inPlayText": "Cannibalism",
            "flavor": "'Flesheating' is an unfair name.  It's just that there's not really much else for him to eat.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true
        },
        {
            "id": "EX1_571",
            "name": "Force of Nature",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 6,
            "text": "Summon three 2/2 Treants with <b>Charge</b> that die at the end of the turn.",
            "flavor": "\"I think I'll just nap under these trees. Wait... AAAAAHHH!\" - Blinkfizz, the Unfortunate Gnome",
            "artist": "Trevor Jacobs",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_251",
            "name": "Forked Lightning",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Deal $2 damage to 2 random enemy minions. <b>Overload:</b> (2)",
            "flavor": "If you combine it with Spooned Lightning and Knived Lightning, you have the full dining set.",
            "artist": "Ralph Horsley",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_611",
            "name": "Freezing Trap",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "<b>Secret:</b> When an enemy minion attacks, return it to its owner's hand and it costs (2) more.",
            "flavor": "\"Dang, that's cold.\" - appropriate response to Freezing Trap, or a mean joke.",
            "artist": "Matt Gaser",
            "collectible": true,
            "playerClass": "Hunter",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_283",
            "name": "Frost Elemental",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 6,
            "attack": 5,
            "health": 5,
            "text": "<b>Battlecry:</b> <b>Freeze</b> a character.",
            "flavor": "When a Water elemental and an Ice elemental love each other VERY much...",
            "artist": "Dan Scott",
            "collectible": true,
            "mechanics": [
                "Battlecry",
                "Freeze"
            ]
        },
        {
            "id": "EX1_604",
            "name": "Frothing Berserker",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 2,
            "health": 4,
            "text": "Whenever a minion takes damage, gain +1 Attack.",
            "inPlayText": "Berserk",
            "flavor": "He used to work as an accountant before he tried his hand at Berserkering.",
            "artist": "Simon Bisley",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "NEW1_017e",
            "name": "Full Belly",
            "type": "Enchantment",
            "text": "+2/+2.  Full of Murloc."
        },
        {
            "id": "CS2_181e",
            "name": "Full Strength",
            "type": "Enchantment",
            "text": "This minion has +2 Attack."
        },
        {
            "id": "EX1_095",
            "name": "Gadgetzan Auctioneer",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "Whenever you cast a spell, draw a card.",
            "inPlayText": "Auctioning",
            "flavor": "He used to run the black market auction house, but there was just too much violence and he had to move.",
            "artist": "Matt Dixon",
            "collectible": true
        },
        {
            "id": "DS1_188",
            "name": "Gladiator's Longbow",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 7,
            "attack": 5,
            "durability": 2,
            "text": "Your hero is <b>Immune</b> while attacking.",
            "flavor": "The longbow allows shots to be fired from farther away and is useful for firing on particularly odorous targets.",
            "artist": "Peter C. Lee",
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "NEW1_040t",
            "name": "Gnoll",
            "type": "Minion",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "<b>Taunt</b>",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_411",
            "name": "Gorehowl",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 7,
            "attack": 7,
            "durability": 1,
            "text": "Attacking a minion costs 1 Attack instead of 1 Durability.",
            "flavor": "Grommash Hellscream's famous axe.  Somehow this ended up in Prince Malchezaar's possession.  Quite the mystery!",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "NEW1_024o",
            "name": "Greenskin's Command",
            "type": "Enchantment",
            "text": "+1/+1."
        },
        {
            "id": "EX1_414",
            "name": "Grommash Hellscream",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 8,
            "attack": 4,
            "health": 9,
            "text": "<b>Charge</b>.  <b>Enrage:</b> +6 Attack",
            "flavor": "Grommash drank the tainted blood of Mannoroth, dooming the orcs to green skin and red eyes!  Maybe not his best decision.",
            "artist": "Glenn Rane",
            "collectible": true,
            "elite": true,
            "playerClass": "Warrior",
            "mechanics": [
                "Charge",
                "Enrage"
            ]
        },
        {
            "id": "NEW1_038o",
            "name": "Growth",
            "type": "Enchantment",
            "text": "Gruul is growing..."
        },
        {
            "id": "NEW1_038",
            "name": "Gruul",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 8,
            "attack": 7,
            "health": 7,
            "text": "At the end of each turn, gain +1/+1 .",
            "inPlayText": "Growth",
            "flavor": "He's Gruul \"the Dragonkiller\".  He just wanted to cuddle them… he never meant to…",
            "artist": "Kev Walker",
            "collectible": true,
            "elite": true
        },
        {
            "id": "EX1_093e",
            "name": "Hand of Argus",
            "type": "Enchantment",
            "text": "+1/+1 and <b>Taunt</b>."
        },
        {
            "id": "EX1_558",
            "name": "Harrison Jones",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 5,
            "attack": 5,
            "health": 4,
            "text": "<b>Battlecry:</b> Destroy your opponent's weapon and draw cards equal to its Durability.",
            "flavor": "“That belongs in the Hall of Explorers!”",
            "artist": "Matt Dixon",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_556",
            "name": "Harvest Golem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "<b>Deathrattle:</b> Summon a 2/1 Damaged Golem.",
            "flavor": "\"Overheat threshold exceeded. System failure. Wheat clog in port two. Shutting down.\"",
            "artist": "Brian Despain",
            "collectible": true,
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "EX1_137",
            "name": "Headcrack",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "text": "Deal $2 damage to the enemy hero. <b>Combo:</b> Return this to your hand next turn.",
            "flavor": "When all else fails, nothing beats a swift whack upside the head.",
            "artist": "James Zhang",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "EX1_409t",
            "name": "Heavy Axe",
            "type": "Weapon",
            "cost": 1,
            "attack": 1,
            "durability": 3,
            "playerClass": "Warrior"
        },
        {
            "id": "NEW1_040",
            "name": "Hogger",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 4,
            "health": 4,
            "text": "At the end of your turn, summon a 2/2 Gnoll with <b>Taunt</b>.",
            "flavor": "Hogger is super powerful. If you kill him, it's because he <i>let</i> you.",
            "artist": "Laurel \"LD\" Austin",
            "collectible": true,
            "elite": true
        },
        {
            "id": "EX1_624",
            "name": "Holy Fire",
            "type": "Spell",
            "rarity": "Rare",
            "cost": 6,
            "text": "Deal $5 damage.  Restore #5 Health to your hero.",
            "flavor": "Often followed by Holy Smokes!",
            "artist": "Miguel Coimbra",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_365",
            "name": "Holy Wrath",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 5,
            "text": "Draw a card and deal damage equal to its cost.",
            "flavor": "C'mon Molten Giant!!",
            "artist": "Justin Sweet",
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_538t",
            "name": "Hound",
            "type": "Minion",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b>Charge</b>",
            "race": "Beast",
            "playerClass": "Hunter",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "EX1_043e",
            "name": "Hour of Twilight",
            "type": "Enchantment",
            "text": "Increased Health."
        },
        {
            "id": "NEW1_017",
            "name": "Hungry Crab",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 1,
            "attack": 1,
            "health": 2,
            "text": "<b>Battlecry:</b> Destroy a Murloc and gain +2/+2.",
            "flavor": "Murloc.  It's what's for dinner.",
            "artist": "Jaemin Kim",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_534t",
            "name": "Hyena",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "artist": "Andrew Robinson",
            "race": "Beast",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_tk33",
            "name": "INFERNO!",
            "type": "Hero Power",
            "faction": "Neutral",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nSummon a 6/6 Infernal.",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_289",
            "name": "Ice Barrier",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "<b>Secret:</b> When your hero is attacked, gain 8 Armor.",
            "flavor": "This is Rank 1.  Rank 2 is Chocolate Milk Barrier.",
            "artist": "Alex Garner",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_295",
            "name": "Ice Block",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 3,
            "text": "<b>Secret:</b> When your hero takes fatal damage, prevent it and become <b>Immune</b> this turn.",
            "flavor": "Ice is nice, and will suffice!",
            "artist": "Carl Frank",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_295o",
            "name": "Ice Block",
            "type": "Enchantment",
            "text": "Your hero is <b>Immune</b> this turn.",
            "playerClass": "Mage",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "CS2_031",
            "name": "Ice Lance",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "<b>Freeze</b> a character. If it was already <b>Frozen</b>, deal $4 damage instead.",
            "flavor": "The trick is not to break the lance.  Otherwise, you have \"Ice Pieces.\"  Ice Pieces aren't as effective.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Freeze"
            ]
        },
        {
            "id": "EX1_614",
            "name": "Illidan Stormrage",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 7,
            "health": 5,
            "text": "Whenever you play a card, summon a 2/1 Flame of Azzinoth.",
            "flavor": "Illidan's brother, Malfurion, imprisoned him beneath Hyjal for 10,000 years.  Stormrages are not good at letting go of grudges.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "elite": true,
            "race": "Demon"
        },
        {
            "id": "EX1_598",
            "name": "Imp",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "race": "Demon"
        },
        {
            "id": "EX1_597",
            "name": "Imp Master",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 1,
            "health": 5,
            "text": "At the end of your turn, deal 1 damage to this minion and summon a 1/1 Imp.",
            "inPlayText": "Imp Master",
            "flavor": "She would enjoy the job a lot more if she just could get the imps to QUIT BITING HER.",
            "artist": "Mark Gibbons",
            "collectible": true
        },
        {
            "id": "EX1_tk34",
            "name": "Infernal",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 6,
            "attack": 6,
            "health": 6,
            "race": "Demon",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_623e",
            "name": "Infusion",
            "type": "Enchantment",
            "text": "+3 Health.",
            "playerClass": "Priest"
        },
        {
            "id": "CS2_181",
            "name": "Injured Blademaster",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Rare",
            "cost": 3,
            "attack": 4,
            "health": 7,
            "text": "<b>Battlecry:</b> Deal 4 damage to HIMSELF.",
            "inPlayText": "Weakened",
            "flavor": "He claims it is an old war wound, but we think he just cut himself shaving.",
            "artist": "Samwise Didier",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "CS1_129e",
            "name": "Inner Fire",
            "type": "Enchantment",
            "text": "This minion's Attack is equal to its Health.",
            "playerClass": "Priest"
        },
        {
            "id": "CS1_129",
            "name": "Inner Fire",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Change a minion's Attack to be equal to its Health.",
            "flavor": "Good idea: Buffing your minions.  Bad idea: Starting a conversation in the Barrens.",
            "artist": "Steve Prescott",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_607",
            "name": "Inner Rage",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "Deal $1 damage to a minion and give it +2 Attack.",
            "flavor": "They're only smiling on the outside.",
            "artist": "Slawomir Maniak",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_607e",
            "name": "Inner Rage",
            "type": "Enchantment",
            "text": "+2 Attack.",
            "playerClass": "Warrior"
        },
        {
            "id": "CS2_203",
            "name": "Ironbeak Owl",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 1,
            "text": "<b>Battlecry:</b> <b>Silence</b> a minion.",
            "flavor": "Their wings are silent but their screech is... whatever the opposite of silent is.",
            "artist": "Trevor Jacobs",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_017",
            "name": "Jungle Panther",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 3,
            "attack": 4,
            "health": 2,
            "text": "<b>Stealth</b>",
            "flavor": "Stranglethorn is a beautiful place to visit, but you wouldn't want to live there.",
            "artist": "Jaemin Kim",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Stealth"
            ]
        },
        {
            "id": "EX1_366e",
            "name": "Justice Served",
            "type": "Enchantment",
            "text": "Has +1/+1.",
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_166",
            "name": "Keeper of the Grove",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "attack": 2,
            "health": 4,
            "text": "<b>Choose One</b> - Deal 2 damage; or <b>Silence</b> a minion.",
            "flavor": "These guys just show up and start Keeping your Groves without even asking.",
            "artist": "Gabor Szikszai",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_080o",
            "name": "Keeping Secrets",
            "type": "Enchantment",
            "text": "Increased stats."
        },
        {
            "id": "NEW1_005",
            "name": "Kidnapper",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 6,
            "attack": 5,
            "health": 3,
            "text": "<b>Combo:</b> Return a minion to its owner's hand.",
            "flavor": "He just wants people to see his vacation photos.",
            "artist": "Dave Allsop",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "NEW1_029t",
            "name": "Kill Millhouse!",
            "type": "Enchantment",
            "rarity": "Legendary",
            "text": "Spells cost (0) this turn!"
        },
        {
            "id": "EX1_543",
            "name": "King Krush",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 8,
            "health": 8,
            "text": "<b>Charge</b>",
            "flavor": "The best defense against King Krush is to have someone you don’t like standing in front of you.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "elite": true,
            "race": "Beast",
            "playerClass": "Hunter",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "EX1_014",
            "name": "King Mukla",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 3,
            "attack": 5,
            "health": 5,
            "text": "<b>Battlecry:</b> Give your opponent 2 Bananas.",
            "flavor": "King Mukla wanders Jaguero Isle, searching for love.",
            "artist": "Sunny Gho",
            "collectible": true,
            "elite": true,
            "race": "Beast",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_612",
            "name": "Kirin Tor Mage",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 4,
            "health": 3,
            "text": "<b>Battlecry:</b> The next <b>Secret</b> you play this turn costs (0).",
            "flavor": "The Kirin Tor reside in the floating city of Dalaran.  How do you make a Dalaran float?  Two scoops of ice cream, one scoop of Dalaran.",
            "artist": "Popo Wei",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_019",
            "name": "Knife Juggler",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "text": "After you summon a minion, deal 1 damage to a random enemy.",
            "inPlayText": "Juggler",
            "flavor": "Ambitious Knife Jugglers sometimes graduate to Bomb Jugglers.    They never last long enough to make it onto a card though.",
            "artist": "Matt Cavotta",
            "collectible": true
        },
        {
            "id": "DREAM_01",
            "name": "Laughing Sister",
            "type": "Minion",
            "cost": 3,
            "attack": 3,
            "health": 5,
            "text": "Can't be targeted by spells or Hero Powers.",
            "inPlayText": "Quick",
            "playerClass": "Dream"
        },
        {
            "id": "EX1_241",
            "name": "Lava Burst",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "text": "Deal $5 damage. <b>Overload:</b> (2)",
            "flavor": "It's like an ocean of liquid magma in your mouth!",
            "artist": "Dan Scott",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_354",
            "name": "Lay on Hands",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 8,
            "text": "Restore #8 Health. Draw 3 cards.",
            "flavor": "A grammatically awkward life saver.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_160be",
            "name": "Leader of the Pack",
            "type": "Enchantment",
            "text": "+1/+1",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_160b",
            "name": "Leader of the Pack",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Give your minions +1/+1.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_116",
            "name": "Leeroy Jenkins",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Legendary",
            "cost": 4,
            "attack": 6,
            "health": 2,
            "text": "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
            "flavor": "At least he has Angry Chicken.",
            "artist": "Gabe from Penny Arcade",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Battlecry",
                "Charge"
            ]
        },
        {
            "id": "EX1_029",
            "name": "Leper Gnome",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "text": "<b>Deathrattle:</b> Deal 2 damage to the enemy hero.",
            "flavor": "He really just wants to be your friend, but the constant rejection is starting to really get to him.",
            "artist": "Glenn Rane",
            "collectible": true,
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "EX1_044e",
            "name": "Level Up!",
            "type": "Enchantment",
            "text": "Increased Attack and Health."
        },
        {
            "id": "EX1_238",
            "name": "Lightning Bolt",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Deal $3 damage. <b>Overload:</b> (1)",
            "flavor": "Lightning Bolt! Lightning Bolt! Lightning Bolt!",
            "artist": "Mike \"Daarken\" Lim",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_259",
            "name": "Lightning Storm",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "text": "Deal $2-$3 damage to all enemy minions. <b>Overload:</b> (2)",
            "flavor": "An umbrella won't be effective, I'm afraid.",
            "artist": "Christopher Moeller",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_335",
            "name": "Lightspawn",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 0,
            "health": 5,
            "text": "This minion's Attack is always equal to its Health.",
            "flavor": "Spawn of the Light? Or Pawn of the Lights?",
            "artist": "Daarken",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_001",
            "name": "Lightwarden",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 1,
            "attack": 1,
            "health": 2,
            "text": "Whenever a character is healed, gain +2 Attack.",
            "flavor": "She’s smaller than her sisters Mediumwarden and Heavywarden.",
            "artist": "Erik Ko",
            "collectible": true
        },
        {
            "id": "EX1_341",
            "name": "Lightwell",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "attack": 0,
            "health": 5,
            "text": "At the start of your turn, restore 3 Health to a damaged friendly character.",
            "inPlayText": "Healing",
            "flavor": "It isn't clear if people ignore the Lightwell, or if it is just invisible.",
            "artist": "Blizzard Entertainment",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_096",
            "name": "Loot Hoarder",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 1,
            "text": "<b>Deathrattle:</b> Draw a card.",
            "flavor": "Always roll need.",
            "artist": "Jim Nelson",
            "collectible": true,
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "EX1_323h",
            "name": "Lord Jaraxxus",
            "type": "Hero",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 0,
            "attack": 0,
            "health": 15,
            "race": "Demon",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_323",
            "name": "Lord Jaraxxus",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 3,
            "health": 15,
            "text": "<b>Battlecry:</b> Destroy your hero and replace it with Lord Jaraxxus.",
            "flavor": "\"TRIFLING GNOME! YOUR ARROGANCE WILL BE YOUR UNDOING!!!!\"",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "elite": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_100",
            "name": "Lorewalker Cho",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 0,
            "health": 4,
            "text": "Whenever a player casts a spell, put a copy into the other player’s hand.",
            "inPlayText": "Meditate",
            "flavor": "Lorewalker Cho archives and shares tales from the land of Pandaria, but his favorite story is the one where Joey and Phoebe go on a road trip.",
            "artist": "Mark Zug",
            "collectible": true,
            "elite": true
        },
        {
            "id": "EX1_082",
            "name": "Mad Bomber",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "text": "<b>Battlecry:</b> Deal 3 damage randomly split between all other characters.",
            "flavor": "He's not really all that crazy, he is just not as careful with explosives as he should be.",
            "artist": "Mike Sass",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_563",
            "name": "Malygos",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 4,
            "health": 12,
            "text": "<b>Spell Damage +5</b>",
            "flavor": "Malygos hates it when mortals use magic.  He gets so mad!",
            "artist": "Michael Komarck",
            "collectible": true,
            "elite": true,
            "race": "Dragon",
            "mechanics": [
                "Spellpower"
            ]
        },
        {
            "id": "EX1_055",
            "name": "Mana Addict",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 2,
            "attack": 1,
            "health": 3,
            "text": "Whenever you cast a spell, gain +2 Attack this turn.",
            "inPlayText": "Addicted",
            "flavor": "She’s trying to kick the habit, but still takes some mana whenever she has a stressful day.",
            "artist": "Hideaki Takamura",
            "collectible": true
        },
        {
            "id": "NEW1_012o",
            "name": "Mana Gorged",
            "type": "Enchantment",
            "text": "Increased attack.",
            "playerClass": "Mage"
        },
        {
            "id": "EX1_575",
            "name": "Mana Tide Totem",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 0,
            "health": 3,
            "text": "At the end of your turn, draw a card.",
            "flavor": "It is said that some shaman can say \"Floatin' totem\" 10 times, fast.",
            "artist": "Scott Altmann",
            "collectible": true,
            "race": "Totem",
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_616",
            "name": "Mana Wraith",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "ALL minions cost (1) more.",
            "flavor": "They come out at night to eat leftover mana crystals. \"Mmmmmm,\" they say.",
            "artist": "Luca Zontini",
            "collectible": true,
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "NEW1_012",
            "name": "Mana Wyrm",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 3,
            "text": "Whenever you cast a spell, gain +1 Attack.",
            "inPlayText": "Gorging",
            "flavor": "These wyrms feed on arcane energies, and while they are generally considered a nuisance rather than a real threat, you really shouldn't leave them alone with a bucket of mana.",
            "artist": "Blizzard Cinematics",
            "collectible": true,
            "playerClass": "Mage"
        },
        {
            "id": "EX1_155ae",
            "name": "Mark of Nature",
            "type": "Enchantment",
            "text": "This minion has +4 Attack.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_155be",
            "name": "Mark of Nature",
            "type": "Enchantment",
            "text": "This minion has +4 Health and <b>Taunt</b>.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_155",
            "name": "Mark of Nature",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "<b>Choose One</b> - Give a minion +4 Attack; or +4 Health and <b>Taunt</b>.",
            "flavor": "Druids call it the \"Mark of Nature.\"  Everyone else calls it \"needing a bath.\"",
            "artist": "Clint Langley",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_155b",
            "name": "Mark of Nature",
            "type": "Spell",
            "faction": "Neutral",
            "text": "+4 Health and <b>Taunt</b>.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_155a",
            "name": "Mark of Nature",
            "type": "Spell",
            "faction": "Neutral",
            "text": "+4 Attack.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_626",
            "name": "Mass Dispel",
            "type": "Spell",
            "rarity": "Rare",
            "cost": 4,
            "text": "<b>Silence</b> all enemy minions. Draw a card.",
            "flavor": "It dispels buffs, powers, hopes, and dreams.",
            "artist": "Sean O'Daniels",
            "collectible": true,
            "playerClass": "Priest",
            "mechanics": [
                "Silence"
            ]
        },
        {
            "id": "NEW1_037",
            "name": "Master Swordsmith",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 2,
            "attack": 1,
            "health": 3,
            "text": "At the end of your turn, give another random friendly minion +1 Attack.",
            "inPlayText": "Smithing",
            "flavor": "He's currently trying to craft a \"flail-axe\", but all the other swordsmiths say it can't be done.",
            "artist": "E.M. Gist",
            "collectible": true
        },
        {
            "id": "NEW1_014",
            "name": "Master of Disguise",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 4,
            "attack": 4,
            "health": 4,
            "text": "<b>Battlecry:</b> Give a friendly minion <b>Stealth</b>.",
            "flavor": "She's actually a male tauren.  People don't call him \"Master of Disguise\" for nothing.",
            "artist": "Ron Spencer",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "NEW1_029",
            "name": "Millhouse Manastorm",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 4,
            "health": 4,
            "text": "<b>Battlecry:</b> Enemy spells cost (0) next turn.",
            "flavor": "\"I'm gonna light you up, sweetcheeks!\"",
            "artist": "Jim Nelson",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_085",
            "name": "Mind Control Tech",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> If your opponent has 4 or more minions, take control of one at random.",
            "flavor": "Mind Control technology is getting better, but that's not saying much.",
            "artist": "Leo Che",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_tk31",
            "name": "Mind Controlling",
            "type": "Enchantment",
            "faction": "Neutral",
            "rarity": "Common",
            "playerClass": "Priest",
            "mechanics": [
                "Summoned"
            ]
        },
        {
            "id": "EX1_625t2",
            "name": "Mind Shatter",
            "type": "Hero Power",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nDeal 3 damage.",
            "playerClass": "Priest"
        },
        {
            "id": "EX1_625t",
            "name": "Mind Spike",
            "type": "Hero Power",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nDeal 2 damage.",
            "playerClass": "Priest"
        },
        {
            "id": "EX1_345",
            "name": "Mindgames",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 4,
            "text": "Put a copy of a random minion from your opponent's deck into the battlefield.",
            "flavor": "Sometimes it feels like this is all a game.",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_294",
            "name": "Mirror Entity",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "<b>Secret:</b> When your opponent plays a minion, summon a copy of it.",
            "flavor": "\"You go first.\" - Krush'gor the Behemoth, to his pet boar.",
            "artist": "Raven Mimura",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_533",
            "name": "Misdirection",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "text": "<b>Secret:</b> When a character attacks your hero, instead he attacks another random character.",
            "flavor": "Sometimes it's as simple as putting on a fake mustache and pointing at someone else.",
            "artist": "Daren Bader",
            "collectible": true,
            "playerClass": "Hunter",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_396",
            "name": "Mogu'shan Warden",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 1,
            "health": 7,
            "text": "<b>Taunt</b>",
            "flavor": "All these guys ever do is talk about the Thunder King.   BOOOORRRINNG!",
            "artist": "Cole Eastburn",
            "collectible": true,
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_620",
            "name": "Molten Giant",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 20,
            "attack": 8,
            "health": 8,
            "text": "Costs (1) less for each damage your hero has taken.",
            "flavor": "He gets terrible heartburn.  BECAUSE HE IS FULL OF LAVA.",
            "artist": "Glenn Rane",
            "collectible": true
        },
        {
            "id": "EX1_166a",
            "name": "Moonfire",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Deal 2 damage.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_408",
            "name": "Mortal Strike",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "text": "Deal $4 damage.  If you have 12 or less Health, deal $6 instead.",
            "flavor": "\"If you only use one ability, use Mortal Strike.\" - The Warrior Code, Line 6",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_105",
            "name": "Mountain Giant",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 12,
            "attack": 8,
            "health": 8,
            "text": "Costs (1) less for each other card in your hand.",
            "flavor": "His mother said that he was just big boned.",
            "artist": "Samwise Didier",
            "collectible": true
        },
        {
            "id": "EX1_507e",
            "name": "Mrgglaargl!",
            "type": "Enchantment",
            "text": "Murloc Warleader is granting +2/+1."
        },
        {
            "id": "EX1_103e",
            "name": "Mrghlglhal",
            "type": "Enchantment",
            "text": "+2 Health."
        },
        {
            "id": "EX1_509",
            "name": "Murloc Tidecaller",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 1,
            "attack": 1,
            "health": 2,
            "text": "Whenever a Murloc is summoned, gain +1 Attack.",
            "flavor": "This guy gets crazy strong at family reunions.",
            "artist": "Jaemin Kim",
            "collectible": true,
            "race": "Murloc"
        },
        {
            "id": "EX1_507",
            "name": "Murloc Warleader",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "ALL other Murlocs have +2/+1.",
            "flavor": "Do Murlocs ever get tired of making the same old sound?  Nope!  Mrglglrglglglglglglgl!",
            "artist": "Tim McBurnie",
            "collectible": true,
            "race": "Murloc",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "EX1_557",
            "name": "Nat Pagle",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 2,
            "attack": 0,
            "health": 4,
            "text": "At the start of your turn, you have a 50% chance to draw an extra card.",
            "inPlayText": "Fishing",
            "flavor": "Nat Pagle, Azeroth's premier fisherman!  He invented the Auto-Angler 3000, the Extendo-Pole 3000, and the Lure-o-matic 2099 (still in testing).",
            "artist": "Steve Prescott",
            "collectible": true,
            "elite": true
        },
        {
            "id": "EX1_161",
            "name": "Naturalize",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Destroy a minion. Your opponent draws 2 cards.",
            "flavor": "Another one bites the dust.",
            "artist": "Leo Che",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_411e2",
            "name": "Needs Sharpening",
            "type": "Enchantment",
            "text": "Decreased Attack.",
            "playerClass": "Warrior"
        },
        {
            "id": "DREAM_05e",
            "name": "Nightmare",
            "type": "Enchantment",
            "text": "This minion has +5/+5, but will be destroyed soon."
        },
        {
            "id": "DREAM_05",
            "name": "Nightmare",
            "type": "Spell",
            "cost": 0,
            "text": "Give a minion +5/+5.  At the start of your next turn, destroy it.",
            "playerClass": "Dream"
        },
        {
            "id": "EX1_130",
            "name": "Noble Sacrifice",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "<b>Secret:</b> When an enemy attacks, summon a 2/1 Defender as the new target.",
            "flavor": "We will always remember you, \"Defender!\"",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "playerClass": "Paladin",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_164",
            "name": "Nourish",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 5,
            "text": "<b>Choose One</b> - Gain 2 Mana Crystals; or Draw 3 cards.",
            "flavor": "Druids take nourishment from many things: the power of nature, the songbird's chirp, a chocolate cake.",
            "artist": "Terese Nielsen",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_164b",
            "name": "Nourish",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Draw 3 cards.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_164a",
            "name": "Nourish",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Gain 2 Mana Crystals.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_560",
            "name": "Nozdormu",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 8,
            "health": 8,
            "text": "Players only have 15 seconds to take their turns.",
            "inPlayText": "Aspect of Time",
            "flavor": "Time to write some flavor text.",
            "artist": "James Ryman",
            "collectible": true,
            "elite": true,
            "race": "Dragon"
        },
        {
            "id": "EX1_562",
            "name": "Onyxia",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 8,
            "health": 8,
            "text": "<b>Battlecry:</b> Summon 1/1 Whelps until your side of the battlefield is full.",
            "flavor": "Onyxia long manipulated the Stormwind Court by disguising herself as Lady Katrana Prestor.   You would have thought that the giant wings and scales would have been a giveaway.",
            "artist": "Dany Orizio",
            "collectible": true,
            "elite": true,
            "race": "Dragon",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_258e",
            "name": "Overloading",
            "type": "Enchantment",
            "text": "Increased stats.",
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_160t",
            "name": "Panther",
            "type": "Minion",
            "rarity": "Common",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "race": "Beast",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_522",
            "name": "Patient Assassin",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 2,
            "attack": 1,
            "health": 1,
            "text": "<b>Stealth</b>. Destroy any minion damaged by this minion.",
            "inPlayText": "Sharpening",
            "flavor": "He’s not really that patient. It just takes a while for someone to walk by that he can actually reach.",
            "artist": "Ben Olson",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Poisonous",
                "Stealth"
            ]
        },
        {
            "id": "EX1_133",
            "name": "Perdition's Blade",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 2,
            "durability": 2,
            "text": "<b>Battlecry:</b> Deal 1 damage. <b>Combo:</b> Deal 2 instead.",
            "flavor": "Perdition's Blade is Ragnaros's back-up weapon while Sulfuras is in the shop.",
            "artist": "Daren Bader",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Battlecry",
                "Combo"
            ]
        },
        {
            "id": "EX1_076",
            "name": "Pint-Sized Summoner",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "The first minion you play each turn costs (1) less.",
            "inPlayText": "Ritual",
            "flavor": "She's quite jealous of the Gallon-Sized Summoner.",
            "artist": "Ron Spears",
            "collectible": true,
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "EX1_313",
            "name": "Pit Lord",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 4,
            "attack": 5,
            "health": 6,
            "text": "<b>Battlecry:</b> Deal 5 damage to your hero.",
            "flavor": "Mannoroth, Magtheridon, and Brutallus may be dead, but it turns out there are a LOT of pit lords.",
            "artist": "Glenn Rane",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_316",
            "name": "Power Overwhelming",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.",
            "flavor": "We cannot even describe how horrible the death is.  It's CRAZY bad!  Maybe worse than that.  Just don't do it.",
            "artist": "Tom Baxa",
            "collectible": true,
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_316e",
            "name": "Power Overwhelming",
            "type": "Enchantment",
            "faction": "Neutral",
            "text": "This minion has +4/+4, but will die a horrible death at the end of the turn.",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_612o",
            "name": "Power of the Kirin Tor",
            "type": "Enchantment",
            "text": "Your next Secret costs (0).",
            "playerClass": "Mage",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_160",
            "name": "Power of the Wild",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "<b>Choose One</b> - Give your minions +1/+1; or Summon a 3/2 Panther.",
            "flavor": "Never look a panther in the eye.  Or is it 'Always look a panther in the eye'?  Well, it's one of those.",
            "artist": "Steve Tappin",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_145",
            "name": "Preparation",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 0,
            "text": "The next spell you cast this turn costs (3) less.",
            "flavor": "\"Be Prepared\" - Rogue Motto",
            "artist": "Clint Langley",
            "collectible": true,
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_145o",
            "name": "Preparation",
            "type": "Enchantment",
            "text": "The next spell you cast this turn costs (3) less.",
            "playerClass": "Rogue",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_583",
            "name": "Priestess of Elune",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 6,
            "attack": 5,
            "health": 4,
            "text": "<b>Battlecry:</b> Restore 4 Health to your hero.",
            "flavor": "If she threatens to \"moon\" you, it's not what you think.",
            "artist": "Dan Scott",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_350",
            "name": "Prophet Velen",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 7,
            "attack": 7,
            "health": 7,
            "text": "Double the damage and healing of your spells and Hero Power.",
            "flavor": "He's been exiled from his home, and all his brothers turned evil, but otherwise he doesn't have a lot to complain about.",
            "artist": "Wei Wang",
            "collectible": true,
            "elite": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_279",
            "name": "Pyroblast",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 10,
            "text": "Deal $10 damage.",
            "flavor": "Take the time for an evil laugh after you draw this card.",
            "artist": "Luca Zontini",
            "collectible": true,
            "playerClass": "Mage"
        },
        {
            "id": "EX1_044",
            "name": "Questing Adventurer",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 3,
            "attack": 2,
            "health": 2,
            "text": "Whenever you play a card, gain +1/+1.",
            "inPlayText": "Questing",
            "flavor": "\"Does anyone have some extra Boar Pelts?\"",
            "artist": "Attila Adorjany",
            "collectible": true
        },
        {
            "id": "EX1_412",
            "name": "Raging Worgen",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Enrage:</b> <b>Windfury</b> and +1 Attack",
            "flavor": "If he's raging now, just wait until he gets nerfed.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "mechanics": [
                "Enrage"
            ]
        },
        {
            "id": "EX1_298",
            "name": "Ragnaros the Firelord",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 8,
            "attack": 8,
            "health": 8,
            "text": "Can't Attack.  At the end of your turn, deal 8 damage to a random enemy.",
            "flavor": "Ragnaros was summoned by the Dark Iron dwarves, who were eventually enslaved by the Firelord.  Summoning Ragnaros often doesn’t work out the way you want it to.",
            "artist": "Greg Staples",
            "collectible": true,
            "elite": true
        },
        {
            "id": "CS2_104e",
            "name": "Rampage",
            "type": "Enchantment",
            "text": "+3/+3.",
            "playerClass": "Warrior"
        },
        {
            "id": "CS2_104",
            "name": "Rampage",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Give a damaged minion +3/+3.",
            "flavor": "Minion get ANGRY.   Minion SMASH!",
            "artist": "Jonboy Meyers",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "CS2_161",
            "name": "Ravenholdt Assassin",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 7,
            "attack": 7,
            "health": 5,
            "text": "<b>Stealth</b>",
            "flavor": "Just mail him a package with a name and 10,000 gold.  He'll take care of the rest.",
            "artist": "Ralph Horsley",
            "collectible": true,
            "mechanics": [
                "Stealth"
            ]
        },
        {
            "id": "EX1_274e",
            "name": "Raw Power!",
            "type": "Enchantment",
            "text": "Increased stats.",
            "playerClass": "Mage"
        },
        {
            "id": "EX1_136",
            "name": "Redemption",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "<b>Secret:</b> When one of your minions dies, return it to life with 1 Health.",
            "flavor": "I am not sure how you get demptioned the first time.  It’s a mystery!",
            "artist": "Ittoku Seta",
            "collectible": true,
            "playerClass": "Paladin",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_379",
            "name": "Repentance",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "<b>Secret:</b> When your opponent plays a minion, reduce its Health to 1.",
            "flavor": "Repentance often comes in the moment before obliteration. Curious.",
            "artist": "Gonzalo Ordonez",
            "collectible": true,
            "playerClass": "Paladin",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_379e",
            "name": "Repentance",
            "type": "Enchantment",
            "text": "Health reduced to 1.",
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_178a",
            "name": "Rooted",
            "type": "Spell",
            "faction": "Neutral",
            "text": "+5 Health and <b>Taunt</b>.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_178ae",
            "name": "Rooted",
            "type": "Enchantment",
            "text": "+5 Health and <b>Taunt</b>.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_134",
            "name": "SI:7 Agent",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Combo:</b> Deal 2 damage.",
            "flavor": "The agents of SI:7 are responsible for Stormwind's covert activities.  Their duties include espionage, assassination, and throwing surprise birthday parties for the royal family.",
            "artist": "Chris Moeller",
            "collectible": true,
            "playerClass": "Rogue",
            "mechanics": [
                "Combo"
            ]
        },
        {
            "id": "EX1_578",
            "name": "Savagery",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 1,
            "text": "Deal damage equal to your hero's Attack to a minion.",
            "flavor": "It is true that some druids are savage, but others still enjoy a quiet moment and a spot of tea.",
            "artist": "Dave Rapoza",
            "collectible": true,
            "playerClass": "Druid",
            "mechanics": [
                "AffectedBySpellPower"
            ]
        },
        {
            "id": "EX1_534",
            "name": "Savannah Highmane",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 6,
            "attack": 6,
            "health": 5,
            "text": "<b>Deathrattle:</b> Summon two 2/2 Hyenas.",
            "inPlayText": "Master",
            "flavor": "In the jungle, the mighty jungle, the lion gets slowly consumed by hyenas.",
            "artist": "Milivoj Ceran",
            "collectible": true,
            "race": "Beast",
            "playerClass": "Hunter",
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "EX1_020",
            "name": "Scarlet Crusader",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 3,
            "attack": 3,
            "health": 1,
            "text": "<b>Divine Shield</b>",
            "flavor": "Never wash your whites with a Scarlet Crusader.",
            "artist": "Gonzalo Ordonez",
            "collectible": true,
            "mechanics": [
                "Divine Shield"
            ]
        },
        {
            "id": "EX1_531",
            "name": "Scavenging Hyena",
            "type": "Minion",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2,
            "text": "Whenever a friendly Beast dies, gain +2/+1.",
            "inPlayText": "Scavenging",
            "flavor": "Hyenas prefer the bones of kodos or windserpents, but they'll eat pretty much anything.  Even Brussels sprouts.",
            "artist": "Jim Nelson",
            "collectible": true,
            "race": "Beast",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_586",
            "name": "Sea Giant",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 10,
            "attack": 8,
            "health": 8,
            "text": "Costs (1) less for each other minion on the battlefield.",
            "flavor": "See?  Giant.",
            "artist": "Svetlin Velinov",
            "collectible": true
        },
        {
            "id": "EX1_080",
            "name": "Secretkeeper",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 1,
            "attack": 1,
            "health": 2,
            "text": "Whenever a <b>Secret</b> is played, gain +1/+1.",
            "inPlayText": "Firey",
            "flavor": "She promises not to tell anyone about that thing you did last night with that one person.",
            "artist": "Gonzalo Ordonez",
            "collectible": true
        },
        {
            "id": "EX1_317",
            "name": "Sense Demons",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "Put 2 random Demons from your deck into your hand.",
            "flavor": "Generally demons are pretty obvious and you don’t need a spell to sense them.",
            "artist": "Raven Mimura",
            "collectible": true,
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_334",
            "name": "Shadow Madness",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "text": "Gain control of an enemy minion with 3 or less Attack until end of turn.",
            "flavor": "You can rationalize it all you want, it's still a mean thing to do.",
            "artist": "Mark Gibbons",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_345t",
            "name": "Shadow of Nothing",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 0,
            "attack": 0,
            "health": 1,
            "text": "Mindgames whiffed! Your opponent had no minions!",
            "playerClass": "Priest"
        },
        {
            "id": "EX1_303",
            "name": "Shadowflame",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "text": "Destroy a friendly minion and deal its Attack damage to all enemy minions.",
            "flavor": "Start with a powerful minion and stir in Shadowflame and you have a good time!",
            "artist": "Dave Kendall",
            "collectible": true,
            "playerClass": "Warlock",
            "mechanics": [
                "AffectedBySpellPower"
            ]
        },
        {
            "id": "EX1_625",
            "name": "Shadowform",
            "type": "Spell",
            "rarity": "Epic",
            "cost": 3,
            "text": "Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.",
            "flavor": "If a bright light shines on a priest in Shadowform… do they cast a shadow?",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_590e",
            "name": "Shadows of M'uru",
            "type": "Enchantment",
            "rarity": "Common",
            "text": "This minion has consumed Divine Shields and has increased Attack and Health."
        },
        {
            "id": "EX1_144",
            "name": "Shadowstep",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "Return a friendly minion to your hand. It costs (2) less.",
            "flavor": "Rogue dance troops will sometimes Shadowstep away at the end of a performance.  Crowds love it.",
            "artist": "Graven Tung",
            "collectible": true,
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_573b",
            "name": "Shan'do's Lesson",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Summon two 2/2 Treants with <b>Taunt</b>.",
            "playerClass": "Druid"
        },
        {
            "id": "CS2_221e",
            "name": "Sharp!",
            "type": "Enchantment",
            "text": "+2 Attack from Spiteful Smith."
        },
        {
            "id": "CS2_146o",
            "name": "Sharpened",
            "type": "Enchantment",
            "text": "+1 Durability."
        },
        {
            "id": "EX1_410",
            "name": "Shield Slam",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 1,
            "text": "Deal 1 damage to a minion for each Armor you have.",
            "flavor": "\"What is a better weapon? The sharp one your enemies expect, or the blunt one they ignore?\" - The Art of Warrior, Chapter 9",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Warrior",
            "mechanics": [
                "AffectedBySpellPower"
            ]
        },
        {
            "id": "EX1_405",
            "name": "Shieldbearer",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 0,
            "health": 4,
            "text": "<b>Taunt</b>",
            "flavor": "Have you seen the size of the shields in this game??  This is no easy job.",
            "artist": "Carl Critchlow",
            "collectible": true,
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_332",
            "name": "Silence",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "text": "<b>Silence</b> a minion.",
            "flavor": "Reserved for enemy spellcasters, evil liches from beyond the grave, and karaoke nights at the Grim Guzzler.",
            "artist": "Zoltan & Gabor",
            "collectible": true,
            "playerClass": "Priest",
            "mechanics": [
                "Silence"
            ]
        },
        {
            "id": "CS2_151",
            "name": "Silver Hand Knight",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 4,
            "text": "<b>Battlecry:</b> Summon a 2/2 Squire.",
            "flavor": "It's good to be a knight.   Less so to be one's squire.",
            "artist": "Matt Starbuck",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_023",
            "name": "Silvermoon Guardian",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 4,
            "attack": 3,
            "health": 3,
            "text": "<b>Divine Shield</b>",
            "flavor": "The first time they tried to guard Silvermoon against the scourge, it didn’t go so well…",
            "artist": "Phroilan Gardner",
            "collectible": true,
            "mechanics": [
                "Divine Shield"
            ]
        },
        {
            "id": "EX1_309",
            "name": "Siphon Soul",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 6,
            "text": "Destroy a minion. Restore #3 Health to your hero.",
            "flavor": "You probably should avoid siphoning your own soul.  You might create some kind of weird infinite loop.",
            "artist": "Tyler Walpole",
            "collectible": true,
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_016t",
            "name": "Skeleton",
            "type": "Minion",
            "cost": 3,
            "attack": 3,
            "health": 3
        },
        {
            "id": "EX1_391",
            "name": "Slam",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Deal $2 damage to a minion.  If it survives, draw a card.",
            "flavor": "\"Dun da dun, dun da dun\": if you've heard an ogre sing this, it's too late.",
            "artist": "E.M. Gist",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_554t",
            "name": "Snake",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "attack": 1,
            "health": 1,
            "race": "Beast",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_554",
            "name": "Snake Trap",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 2,
            "text": "<b>Secret:</b> When one of your minions is attacked, summon three 1/1 Snakes.",
            "flavor": "Why did it have to be snakes?",
            "artist": "Bernie Kang",
            "collectible": true,
            "playerClass": "Hunter",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_609",
            "name": "Snipe",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "<b>Secret:</b> When your opponent plays a minion, deal $4 damage to it.",
            "flavor": "A great sniper hits the spot.  Just like a delicious flank of boar. Mmmmm.",
            "artist": "Lorenzo Minaca",
            "collectible": true,
            "playerClass": "Hunter",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "EX1_608",
            "name": "Sorcerer's Apprentice",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "text": "Your spells cost (1) less.",
            "flavor": "Apprentices are great for bossing around.  \"Conjure me some mana buns! And a coffee!  Make that a mana coffee!\"",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "EX1_158e",
            "name": "Soul of the Forest",
            "type": "Enchantment",
            "text": "Deathrattle: Summon a 2/2 Treant.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_158",
            "name": "Soul of the Forest",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "text": "Give your minions \"<b>Deathrattle:</b> Summon a 2/2 Treant.\"",
            "flavor": "\"Reforestation\" is suddenly a terrifying word.",
            "artist": "Markus Erdt",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "NEW1_027",
            "name": "Southsea Captain",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "Your other Pirates have +1/+1.",
            "flavor": "When he saves enough plunder, he's going to commission an enormous captain's hat.  He has hat envy.",
            "artist": "Ken Steacy",
            "collectible": true,
            "race": "Pirate",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "CS2_146",
            "name": "Southsea Deckhand",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "text": "Has <b>Charge</b> while you have a weapon equipped.",
            "flavor": "Pirates are into this new fad called \"Planking\".",
            "artist": "Dan Brereton",
            "collectible": true,
            "race": "Pirate"
        },
        {
            "id": "tt_010",
            "name": "Spellbender",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 3,
            "text": "<b>Secret:</b> When an enemy casts a spell on a minion, summon a 1/3 as the new target.",
            "flavor": "While it's fun to intercept enemy lightning bolts, a spellbender much prefers to intercept opposing Marks of the Wild.  It just feels meaner.  And blood elves... well, they're a little mean.",
            "artist": "Gonzalo Ordonez",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "tt_010a",
            "name": "Spellbender",
            "type": "Minion",
            "rarity": "Epic",
            "attack": 1,
            "health": 3,
            "playerClass": "Mage",
            "cost": 0
        },
        {
            "id": "EX1_048",
            "name": "Spellbreaker",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "health": 3,
            "text": "<b>Battlecry:</b> <b>Silence</b> a minion.",
            "flavor": "Spellbreakers can rip enchantments from magic-wielders.  The process is painless and can be performed on an outpatient basis.",
            "artist": "Matt Cavotta",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_tk11",
            "name": "Spirit Wolf",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 2,
            "attack": 2,
            "health": 3,
            "text": "<b>Taunt</b>",
            "playerClass": "Shaman",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "CS2_221",
            "name": "Spiteful Smith",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 5,
            "attack": 4,
            "health": 6,
            "text": "<b>Enrage:</b> Your weapon has +2 Attack.",
            "inPlayText": "Summoning",
            "flavor": "She'll craft you a sword, but you'll need to bring her 5 Steel Ingots, 3 Motes of Earth, and the scalp of her last customer.",
            "artist": "Justin Sweet",
            "collectible": true,
            "mechanics": [
                "Enrage"
            ]
        },
        {
            "id": "CS2_152",
            "name": "Squire",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 2
        },
        {
            "id": "EX1_tk28",
            "name": "Squirrel",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "race": "Beast"
        },
        {
            "id": "NEW1_041",
            "name": "Stampeding Kodo",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 5,
            "attack": 3,
            "health": 5,
            "text": "<b>Battlecry:</b> Destroy a random enemy minion with 2 or less Attack.",
            "flavor": "This Kodo is so big that he can stampede by <i>himself</i>.",
            "artist": "Daren Bader",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_382e",
            "name": "Stand Down!",
            "type": "Enchantment",
            "text": "Attack changed to 1.",
            "playerClass": "Paladin"
        },
        {
            "id": "NEW1_007b",
            "name": "Starfall",
            "type": "Spell",
            "text": "Deal $5 damage to a minion.",
            "playerClass": "Druid"
        },
        {
            "id": "NEW1_007a",
            "name": "Starfall",
            "type": "Spell",
            "text": "Deal $2 damage to all enemy minions.",
            "playerClass": "Druid"
        },
        {
            "id": "NEW1_007",
            "name": "Starfall",
            "type": "Spell",
            "rarity": "Rare",
            "cost": 5,
            "text": "<b>Choose One -</b> Deal $5 damage to a minion; or $2 damage to all enemy minions.",
            "flavor": "Is the sky falling?  Yes.  Yes it is.",
            "artist": "Richard Wright",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "EX1_247",
            "name": "Stormforged Axe",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "durability": 3,
            "text": "<b>Overload:</b> (1)",
            "flavor": "Yo, that's a nice axe.",
            "artist": "Nathan Bowden",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_028",
            "name": "Stranglethorn Tiger",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 5,
            "attack": 5,
            "health": 5,
            "text": "<b>Stealth</b>",
            "flavor": "The wonderful thing about tigers is tigers are wonderful things!",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Stealth"
            ]
        },
        {
            "id": "EX1_162o",
            "name": "Strength of the Pack",
            "type": "Enchantment",
            "text": "Dire Wolf Alpha is granting +1 Attack to this minion."
        },
        {
            "id": "EX1_160a",
            "name": "Summon a Panther",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Summon a 3/2 Panther.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_315",
            "name": "Summoning Portal",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 4,
            "attack": 0,
            "health": 4,
            "text": "Your minions cost (2) less, but not less than (1).",
            "inPlayText": "Summoning",
            "flavor": "NOT LESS THAN 1!  Don't get any ideas!",
            "artist": "Tyler Walpole",
            "collectible": true,
            "playerClass": "Warlock",
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "EX1_058",
            "name": "Sunfury Protector",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 2,
            "attack": 2,
            "health": 3,
            "text": "<b>Battlecry:</b> Give adjacent minions <b>Taunt</b>.",
            "flavor": "She carries a shield, but only so she can give it to someone she can stand behind.",
            "artist": "James Ryman",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_032",
            "name": "Sunwalker",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Rare",
            "cost": 6,
            "attack": 4,
            "health": 5,
            "text": "<b>Taunt</b>. <b>Divine Shield</b>",
            "flavor": "She doesn’t ACTUALLY walk on the Sun.  It's just a name.  Don’t worry!",
            "artist": "Andrea Uderzo",
            "collectible": true,
            "mechanics": [
                "Divine Shield",
                "Taunt"
            ]
        },
        {
            "id": "EX1_366",
            "name": "Sword of Justice",
            "type": "Weapon",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 3,
            "attack": 1,
            "durability": 5,
            "text": "Whenever you summon a minion, give it +1/+1 and this loses 1 Durability.",
            "flavor": "I dub you Sir Loin of Beef!",
            "artist": "Efrem Palacios",
            "collectible": true,
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_016",
            "name": "Sylvanas Windrunner",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 5,
            "health": 5,
            "text": "<b>Deathrattle:</b> Take control of a random enemy minion.",
            "flavor": "Sylvanas was turned into the Banshee Queen by Arthas, but he probably should have just killed her because it just pissed her off.",
            "artist": "Glenn Rane",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "EX1_390",
            "name": "Tauren Warrior",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "<b>Taunt</b>. <b>Enrage:</b> +3 Attack",
            "flavor": "Tauren Warrior: Champion of Mulgore, Slayer of Quilboar, Rider of Thunderbluff Elevators.",
            "artist": "Paul Warzecha",
            "collectible": true,
            "mechanics": [
                "Enrage",
                "Taunt"
            ]
        },
        {
            "id": "EX1_584e",
            "name": "Teachings of the Kirin Tor",
            "type": "Enchantment",
            "text": "<b>Spell Damage +1</b>."
        },
        {
            "id": "EX1_046e",
            "name": "Tempered",
            "type": "Enchantment",
            "text": "+2 Attack this turn.",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "EX1_355e",
            "name": "Templar's Verdict",
            "type": "Enchantment",
            "text": "This minion's Attack has been doubled.",
            "playerClass": "Paladin"
        },
        {
            "id": "EX1_623",
            "name": "Temple Enforcer",
            "type": "Minion",
            "rarity": "Common",
            "cost": 6,
            "attack": 6,
            "health": 6,
            "text": "<b>Battlecry:</b> Give a friendly minion +3 Health.",
            "flavor": "He also moonlights Thursday nights as a bouncer at the Pig and Whistle Tavern.",
            "artist": "Daren Bader",
            "collectible": true,
            "playerClass": "Priest",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_577",
            "name": "The Beast",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 9,
            "health": 7,
            "text": "<b>Deathrattle:</b> Summon a 3/3 Finkle Einhorn for your opponent.",
            "flavor": "He lives in Blackrock Mountain.  He eats Gnomes.  That's pretty much it.",
            "artist": "Glenn Rane",
            "collectible": true,
            "elite": true,
            "race": "Beast",
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "EX1_002",
            "name": "The Black Knight",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 4,
            "health": 5,
            "text": "<b>Battlecry:</b> Destroy an enemy minion with <b>Taunt</b>.",
            "flavor": "He was sent by the Lich King to disrupt the Argent Tournament.   We can pretty much mark that a failure.",
            "artist": "Alex Horley Orlandelli",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_339",
            "name": "Thoughtsteal",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "text": "Copy 2 cards from your opponent's deck and put them into your hand.",
            "flavor": "\"What do you get when you cast Thoughtsteal on an Orc?  Nothing!\" - Tauren joke",
            "artist": "Alex Garner",
            "collectible": true,
            "playerClass": "Priest"
        },
        {
            "id": "EX1_021",
            "name": "Thrallmar Farseer",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 3,
            "text": "<b>Windfury</b>",
            "flavor": "He's stationed in the Hellfire Peninsula, but he's hoping for a reassignment closer to Orgrimmar, or really anywhere the ground is less on fire.",
            "artist": "Efrem Palacios",
            "collectible": true,
            "mechanics": [
                "Windfury"
            ]
        },
        {
            "id": "EX1_083",
            "name": "Tinkmaster Overspark",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Legendary",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Transform another random minion into a 5/5 Devilsaur or a 1/1 Squirrel.",
            "flavor": "Tinkmaster Overspark nearly lost his Tinker's license after the Great Ironforge Squirrel Stampede of '09.",
            "artist": "Tom Baxa",
            "collectible": true,
            "elite": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_383",
            "name": "Tirion Fordring",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 8,
            "attack": 6,
            "health": 6,
            "text": "<b>Divine Shield</b>. <b>Taunt</b>. <b>Deathrattle:</b> Equip a 5/3 Ashbringer.",
            "flavor": "If you haven't heard the Tirion Fordring theme song, it's because it doesn't exist.",
            "artist": "Brom",
            "collectible": true,
            "elite": true,
            "playerClass": "Paladin",
            "mechanics": [
                "Deathrattle",
                "Divine Shield",
                "Taunt"
            ]
        },
        {
            "id": "EX1_611e",
            "name": "Trapped",
            "type": "Enchantment",
            "text": "Will be <b>Frozen</b> again at the start of the next turn.",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_tk9",
            "name": "Treant",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 2,
            "text": "<b>Charge</b>.  At the end of the turn, destroy this minion.",
            "playerClass": "Druid",
            "mechanics": [
                "Charge"
            ]
        },
        {
            "id": "EX1_573t",
            "name": "Treant",
            "type": "Minion",
            "cost": 1,
            "attack": 2,
            "health": 2,
            "text": "<b>Taunt</b>",
            "playerClass": "Druid",
            "mechanics": [
                "Taunt"
            ]
        },
        {
            "id": "EX1_158t",
            "name": "Treant",
            "type": "Minion",
            "faction": "Neutral",
            "cost": 1,
            "attack": 2,
            "health": 2,
            "playerClass": "Druid"
        },
        {
            "id": "NEW1_018e",
            "name": "Treasure Crazed",
            "type": "Enchantment",
            "text": "Increased Attack."
        },
        {
            "id": "EX1_043",
            "name": "Twilight Drake",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 4,
            "attack": 4,
            "health": 1,
            "text": "<b>Battlecry:</b> Gain +1 Health for each card in your hand.",
            "flavor": "Twilight drakes feed on Mystical Energy.  And Tacos.",
            "artist": "Jaemin Kim",
            "collectible": true,
            "race": "Dragon",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_312",
            "name": "Twisting Nether",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 8,
            "text": "Destroy all minions.",
            "flavor": "The Twisting Nether is a formless place of magic and illusion and destroyed minions.",
            "artist": "Dave Allsop",
            "collectible": true,
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_258",
            "name": "Unbound Elemental",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 3,
            "attack": 2,
            "health": 4,
            "text": "Whenever you play a card with <b>Overload</b>, gain +1/+1.",
            "flavor": "Unlike bound elementals, Unbound ones really enjoy a night on the town.",
            "artist": "Matt Gaser",
            "collectible": true,
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_538",
            "name": "Unleash the Hounds",
            "type": "Spell",
            "rarity": "Common",
            "cost": 3,
            "text": "For each enemy minion, summon a 1/1 Hound with <b>Charge</b>.",
            "flavor": "You must read the name of this card out loud each time you play it.",
            "artist": "Linggar Bramanty",
            "collectible": true,
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_409",
            "name": "Upgrade!",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 1,
            "text": "If you have a weapon, give it +1/+1.  Otherwise equip a 1/3 weapon.",
            "flavor": "Easily worth 50 DKP.",
            "artist": "Matt Cavotta",
            "collectible": true,
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_536e",
            "name": "Upgraded",
            "type": "Enchantment",
            "text": "Increased Durability.",
            "playerClass": "Hunter"
        },
        {
            "id": "EX1_409e",
            "name": "Upgraded",
            "type": "Enchantment",
            "text": "+1 Attack and +1 Durability.",
            "playerClass": "Warrior"
        },
        {
            "id": "EX1_178b",
            "name": "Uproot",
            "type": "Spell",
            "faction": "Neutral",
            "text": "+5 Attack.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_178be",
            "name": "Uprooted",
            "type": "Enchantment",
            "text": "+5 Attack.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_613e",
            "name": "VanCleef's Vengeance",
            "type": "Enchantment",
            "text": "This minion has increased Attack and Health.",
            "playerClass": "Rogue"
        },
        {
            "id": "EX1_594",
            "name": "Vaporize",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Rare",
            "cost": 3,
            "text": "<b>Secret:</b> When a minion attacks your hero, destroy it.",
            "flavor": "Rumor has it that Deathwing brought about the Cataclysm after losing a game to this card.  We may never know the truth.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Mage",
            "mechanics": [
                "Secret"
            ]
        },
        {
            "id": "CS2_227",
            "name": "Venture Co. Mercenary",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 5,
            "attack": 7,
            "health": 6,
            "text": "Your minions cost (3) more.",
            "inPlayText": "Power",
            "flavor": "No Job is too big.  No fee is too big.",
            "artist": "John \"JP\" Polidora",
            "collectible": true,
            "mechanics": [
                "Aura"
            ]
        },
        {
            "id": "NEW1_026t",
            "name": "Violet Apprentice",
            "type": "Minion",
            "cost": 0,
            "attack": 1,
            "health": 1
        },
        {
            "id": "NEW1_026",
            "name": "Violet Teacher",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 4,
            "attack": 3,
            "health": 5,
            "text": "Whenever you cast a spell, summon a 1/1 Violet Apprentice.",
            "flavor": "If you don't pay attention, you may be turned into a pig.  And then you get your name on the board.",
            "artist": "James Ryman",
            "collectible": true
        },
        {
            "id": "EX1_304",
            "name": "Void Terror",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 3,
            "attack": 3,
            "health": 3,
            "text": "<b>Battlecry:</b> Destroy the minions on either side of this minion and gain their Attack and Health.",
            "flavor": "If you put this into your deck, you WILL lose the trust of your other minions.",
            "artist": "Alexander Alexandrov",
            "collectible": true,
            "race": "Demon",
            "playerClass": "Warlock",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_001e",
            "name": "Warded",
            "type": "Enchantment",
            "text": "Increased Attack."
        },
        {
            "id": "EX1_531e",
            "name": "Well Fed",
            "type": "Enchantment",
            "text": "Increased Attack and Health.",
            "playerClass": "Hunter"
        },
        {
            "id": "ds1_whelptoken",
            "name": "Whelp",
            "type": "Minion",
            "faction": "Neutral",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "race": "Dragon"
        },
        {
            "id": "EX1_116t",
            "name": "Whelp",
            "type": "Minion",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "race": "Dragon"
        },
        {
            "id": "EX1_603e",
            "name": "Whipped Into Shape",
            "type": "Enchantment",
            "text": "+2 Attack.",
            "playerClass": "Warrior"
        },
        {
            "id": "NEW1_020",
            "name": "Wild Pyromancer",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "text": "After you cast a spell, deal 1 damage to ALL minions.",
            "flavor": "BOOM BABY BOOM!  BAD IS GOOD!  DOWN WITH GOVERNMENT!",
            "artist": "Alex Horley Orlandelli",
            "collectible": true
        },
        {
            "id": "EX1_587e",
            "name": "Windfury",
            "type": "Enchantment",
            "text": "This minion has Windfury.",
            "playerClass": "Shaman"
        },
        {
            "id": "EX1_033",
            "name": "Windfury Harpy",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 6,
            "attack": 4,
            "health": 5,
            "text": "<b>Windfury</b>",
            "flavor": "Harpies are not pleasant sounding.  That's the nicest I can put it.",
            "artist": "Luke \"Mr. Jack\" Mancini",
            "collectible": true,
            "mechanics": [
                "Windfury"
            ]
        },
        {
            "id": "CS2_231",
            "name": "Wisp",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "attack": 1,
            "health": 1,
            "flavor": "If you hit an Eredar Lord with enough Wisps, it will explode.   But why?",
            "artist": "Malcolm Davis",
            "collectible": true
        },
        {
            "id": "EX1_010",
            "name": "Worgen Infiltrator",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "text": "<b>Stealth</b>",
            "flavor": "If you want to stop a worgen from infiltrating, just yell, \"No! Bad boy!\"",
            "artist": "Raymond Swanland",
            "collectible": true,
            "mechanics": [
                "Stealth"
            ]
        },
        {
            "id": "EX1_317t",
            "name": "Worthless Imp",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<i>You are out of demons! At least there are always imps...</i>",
            "race": "Demon",
            "playerClass": "Warlock"
        },
        {
            "id": "EX1_154a",
            "name": "Wrath",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Deal $3 damage to a minion.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_154b",
            "name": "Wrath",
            "type": "Spell",
            "faction": "Neutral",
            "text": "Deal $1 damage to a minion. Draw a card.",
            "playerClass": "Druid"
        },
        {
            "id": "EX1_154",
            "name": "Wrath",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "<b>Choose One</b> - Deal $3 damage to a minion; or $1 damage and draw a card.",
            "flavor": "The talk around the Ratchet Inn is that this card is too good and should be a Legendary.",
            "artist": "Raymond Swanland",
            "collectible": true,
            "playerClass": "Druid"
        },
        {
            "id": "NEW1_027e",
            "name": "Yarrr!",
            "type": "Enchantment",
            "text": "Southsea Captain is granting +1/+1."
        },
        {
            "id": "CS2_169",
            "name": "Young Dragonhawk",
            "type": "Minion",
            "faction": "Horde",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b>Windfury</b>",
            "flavor": "They were the inspiration for the championship Taurenball team: The Dragonhawks.",
            "artist": "Greg Hildebrandt",
            "collectible": true,
            "race": "Beast",
            "mechanics": [
                "Windfury"
            ]
        },
        {
            "id": "EX1_004",
            "name": "Young Priestess",
            "type": "Minion",
            "rarity": "Rare",
            "cost": 1,
            "attack": 2,
            "health": 1,
            "text": "At the end of your turn, give another random friendly minion +1 Health.",
            "flavor": "She can't wait to learn Power Word: Fortitude Rank 2.",
            "artist": "Vance Kovacs",
            "collectible": true
        },
        {
            "id": "EX1_049",
            "name": "Youthful Brewmaster",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 2,
            "attack": 3,
            "health": 2,
            "text": "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
            "flavor": "His youthful enthusiasm doesn’t always equal excellence in his brews.   Don’t drink the Mogu Stout!",
            "artist": "Wei Wang",
            "collectible": true,
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_572",
            "name": "Ysera",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 9,
            "attack": 4,
            "health": 12,
            "text": "At the end of your turn, draw a Dream Card.",
            "flavor": "Ysera rules the Emerald Dream.  Which is some kind of green-mirror-version of the real world, or something?",
            "artist": "Gabor Szikszai",
            "collectible": true,
            "elite": true,
            "race": "Dragon"
        },
        {
            "id": "DREAM_02",
            "name": "Ysera Awakens",
            "type": "Spell",
            "cost": 2,
            "text": "Deal $5 damage to all characters except Ysera.",
            "playerClass": "Dream"
        }
    ],
    "Missions": [
        {
            "id": "TU4c_006e",
            "name": "Bananas",
            "type": "Enchantment",
            "text": "This minion has +1/+1. <i>(+1 Attack/+1 Health)</i>"
        },
        {
            "id": "TU4c_006",
            "name": "Bananas",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Give a friendly minion +1/+1. <i>(+1 Attack/+1 Health)</i>"
        },
        {
            "id": "TU4c_003",
            "name": "Barrel",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 0,
            "health": 2,
            "text": "Is something in this barrel?",
            "inPlayText": "Breakable",
            "mechanics": [
                "Deathrattle"
            ]
        },
        {
            "id": "TU4c_002",
            "name": "Barrel Toss",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 1,
            "text": "Deal 2 damage."
        },
        {
            "id": "TU4f_005",
            "name": "Brewmaster",
            "type": "Minion",
            "rarity": "Common",
            "cost": 4,
            "attack": 4,
            "health": 4
        },
        {
            "id": "TU4d_002",
            "name": "Crazed Hunter",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1
        },
        {
            "id": "TU4f_007",
            "name": "Crazy Monkey",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 2,
            "text": "<b>Battlecry:</b> Throw Bananas.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "TU4e_007",
            "name": "Dual Warglaives",
            "type": "Weapon",
            "rarity": "Common",
            "cost": 6,
            "attack": 4,
            "durability": 2
        },
        {
            "id": "TU4e_005",
            "name": "Flame Burst",
            "type": "Spell",
            "rarity": "Common",
            "cost": 3,
            "text": "Shoot 5 missiles at random enemies for $1 damage each."
        },
        {
            "id": "TU4e_002t",
            "name": "Flame of Azzinoth",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1
        },
        {
            "id": "TU4e_002",
            "name": "Flames of Azzinoth",
            "type": "Hero Power",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nSummon two 2/1 minions."
        },
        {
            "id": "TU4a_003",
            "name": "Gnoll",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1
        },
        {
            "id": "TU4d_001",
            "name": "Hemet Nesingwary",
            "type": "Hero",
            "rarity": "Common",
            "health": 20,
            "playerClass": "Hunter"
        },
        {
            "id": "TU4c_005",
            "name": "Hidden Gnome",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "attack": 1,
            "health": 3,
            "text": "Was hiding in a barrel!"
        },
        {
            "id": "TU4a_001",
            "name": "Hogger",
            "type": "Hero",
            "rarity": "Common",
            "health": 10
        },
        {
            "id": "TU4a_004",
            "name": "Hogger SMASH!",
            "type": "Spell",
            "rarity": "Common",
            "cost": 3,
            "text": "Deal 4 damage."
        },
        {
            "id": "TU4e_001",
            "name": "Illidan Stormrage",
            "type": "Hero",
            "health": 30,
            "playerClass": "Hunter"
        },
        {
            "id": "TU4a_006",
            "name": "Jaina Proudmoore",
            "type": "Hero",
            "rarity": "Common",
            "health": 27,
            "playerClass": "Mage"
        },
        {
            "id": "TU4c_001",
            "name": "King Mukla",
            "type": "Hero",
            "rarity": "Common",
            "health": 26
        },
        {
            "id": "TU4f_004o",
            "name": "Legacy of the Emperor",
            "type": "Enchantment",
            "text": "Has +2/+2. <i>(+2 Attack/+2 Health)</i>"
        },
        {
            "id": "TU4f_004",
            "name": "Legacy of the Emperor",
            "type": "Spell",
            "rarity": "Common",
            "cost": 3,
            "text": "Give your minions +2/+2. <i>(+2 Attack/+2 Health)</i>"
        },
        {
            "id": "TU4f_001",
            "name": "Lorewalker Cho",
            "type": "Hero",
            "health": 25
        },
        {
            "id": "TU4a_005",
            "name": "Massive Gnoll",
            "type": "Minion",
            "rarity": "Common",
            "cost": 4,
            "attack": 5,
            "health": 2
        },
        {
            "id": "TU4c_008e",
            "name": "Might of Mukla",
            "type": "Enchantment",
            "text": "King Mukla has +8 Attack this turn.",
            "mechanics": [
                "OneTurnEffect"
            ]
        },
        {
            "id": "TU4b_001",
            "name": "Millhouse Manastorm",
            "type": "Hero",
            "rarity": "Common",
            "health": 20,
            "playerClass": "Mage"
        },
        {
            "id": "TU4c_007",
            "name": "Mukla's Big Brother",
            "type": "Minion",
            "rarity": "Common",
            "cost": 6,
            "attack": 10,
            "health": 10,
            "text": "So strong! And only 6 Mana?!"
        },
        {
            "id": "TU4e_003",
            "name": "Naga Myrmidon",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "text": "<b></b>"
        },
        {
            "id": "TU4f_002",
            "name": "Pandaren Scout",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 1,
            "health": 1
        },
        {
            "id": "TU4a_002",
            "name": "Riverpaw Gnoll",
            "type": "Minion",
            "rarity": "Common",
            "cost": 1,
            "attack": 2,
            "health": 1
        },
        {
            "id": "TU4f_003",
            "name": "Shado-Pan Monk",
            "type": "Minion",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "health": 2
        },
        {
            "id": "TU4d_003",
            "name": "Shotgun Blast",
            "type": "Hero Power",
            "rarity": "Common",
            "cost": 2,
            "text": "<b>Hero Power</b>\\nDeal 1 damage.",
            "playerClass": "Hunter"
        },
        {
            "id": "TU4c_004",
            "name": "Stomp",
            "type": "Spell",
            "faction": "Neutral",
            "rarity": "Common",
            "cost": 2,
            "text": "Deal 2 damage to all enemies."
        },
        {
            "id": "TU4f_006",
            "name": "Transcendence",
            "type": "Spell",
            "rarity": "Common",
            "cost": 1,
            "text": "Until you kill Cho's minions, he can't be attacked."
        },
        {
            "id": "TU4f_006o",
            "name": "Transcendence",
            "type": "Enchantment",
            "text": "Until you kill Cho's minions, he can't be attacked."
        },
        {
            "id": "TU4e_004",
            "name": "Warglaive of Azzinoth",
            "type": "Weapon",
            "rarity": "Common",
            "cost": 2,
            "attack": 2,
            "durability": 2
        },
        {
            "id": "TU4c_008",
            "name": "Will of Mukla",
            "type": "Spell",
            "rarity": "Common",
            "cost": 3,
            "text": "Restore 8 Health."
        }
    ],
    "Promotion": [
        {
            "id": "Mekka4t",
            "name": "Chicken",
            "type": "Minion",
            "cost": 0,
            "attack": 1,
            "health": 1,
            "text": "<i>Hey Chicken!</i>",
            "race": "Beast"
        },
        {
            "id": "PRO_001",
            "name": "Elite Tauren Chieftain",
            "type": "Minion",
            "rarity": "Legendary",
            "cost": 5,
            "attack": 5,
            "health": 5,
            "text": "<b>Battlecry:</b> Give both players the power to ROCK! (with a Power Chord card)",
            "flavor": "He's looking for a drummer.  The current candidates are: Novice Engineer, Sen'jin Shieldmasta', and Ragnaros the Firelord.",
            "artist": "Samwise Didier",
            "collectible": true,
            "elite": true,
            "howToGetGold": "Awarded at BlizzCon 2013.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "Mekka3e",
            "name": "Emboldened!",
            "type": "Enchantment",
            "text": "Increased Stats."
        },
        {
            "id": "Mekka3",
            "name": "Emboldener 3000",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 0,
            "health": 4,
            "text": "At the end of your turn, give a random minion +1/+1.",
            "inPlayText": "Emboldening"
        },
        {
            "id": "EX1_112",
            "name": "Gelbin Mekkatorque",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Legendary",
            "cost": 6,
            "attack": 6,
            "health": 6,
            "text": "<b>Battlecry:</b> Summon an AWESOME invention.",
            "flavor": "He's the leader of the gnomes, and an incredible inventor.  He's getting better, too; He turns things into chickens WAY less than he used to.",
            "artist": "Ludo Lullabi",
            "collectible": true,
            "elite": true,
            "howToGetGold": "This was rewarded to players who helped test the Store during the Beta.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "Mekka1",
            "name": "Homing Chicken",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 0,
            "health": 1,
            "text": "At the start of your turn, destroy this minion and draw 3 cards.",
            "inPlayText": "Pecking"
        },
        {
            "id": "PRO_001a",
            "name": "I Am Murloc",
            "type": "Spell",
            "cost": 4,
            "text": "Summon three, four, or five 1/1 Murlocs."
        },
        {
            "id": "PRO_001at",
            "name": "Murloc",
            "type": "Minion",
            "cost": 1,
            "attack": 1,
            "health": 1,
            "race": "Murloc"
        },
        {
            "id": "Mekka4",
            "name": "Poultryizer",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 0,
            "health": 3,
            "text": "At the start of your turn, transform a random minion into a 1/1 Chicken.",
            "inPlayText": "Poultryizing"
        },
        {
            "id": "PRO_001c",
            "name": "Power of the Horde",
            "type": "Spell",
            "cost": 4,
            "text": "Summon a random Horde Warrior."
        },
        {
            "id": "Mekka2",
            "name": "Repair Bot",
            "type": "Minion",
            "faction": "Alliance",
            "rarity": "Common",
            "cost": 1,
            "attack": 0,
            "health": 3,
            "text": "At the end of your turn, restore 6 Health to a damaged character.",
            "inPlayText": "Repairin'"
        },
        {
            "id": "PRO_001b",
            "name": "Rogues Do It...",
            "type": "Spell",
            "cost": 4,
            "text": "Deal $4 damage. Draw a card."
        },
        {
            "id": "Mekka4e",
            "name": "Transformed",
            "type": "Enchantment",
            "text": "Has been transformed into a chicken!",
            "mechanics": [
                "Morph"
            ]
        }
    ],
    "Reward": [
        {
            "id": "NEW1_016",
            "name": "Captain's Parrot",
            "type": "Minion",
            "rarity": "Epic",
            "cost": 2,
            "attack": 1,
            "health": 1,
            "text": "<b>Battlecry:</b> Put a random Pirate from your deck into your hand.",
            "flavor": "Pirates and Parrots go together like Virmen and Carrots.",
            "artist": "Daren Bader",
            "collectible": true,
            "race": "Beast",
            "howToGet": "Unlocked when you have all the Pirates from the Expert Set.",
            "howToGetGold": "Unlocked when you have all the Golden Pirates from the Expert Set.",
            "mechanics": [
                "Battlecry"
            ]
        },
        {
            "id": "EX1_062",
            "name": "Old Murk-Eye",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Legendary",
            "cost": 4,
            "attack": 2,
            "health": 4,
            "text": "<b>Charge</b>. Has +1 Attack for each other Murloc on the battlefield.",
            "inPlayText": "Marglahg",
            "flavor": "He's a legend among murlocs.  \"Mrghllghghllghg!\", they say.",
            "artist": "Dan Scott",
            "collectible": true,
            "elite": true,
            "race": "Murloc",
            "howToGet": "Unlocked when you have all the Murlocs from the Expert Set.",
            "howToGetGold": "Unlocked when you have all the Golden Murlocs from the Expert and Basic Sets.",
            "mechanics": [
                "Charge"
            ]
        }
    ],
    "System": [
        {
            "id": "PlaceholderCard",
            "name": "Placeholder Card",
            "type": "Minion",
            "faction": "Neutral",
            "rarity": "Epic",
            "cost": 9,
            "attack": 6,
            "health": 8,
            "text": "Battlecry: Someone remembers to publish this card.",
            "playerClass": "Mage"
        }
    ]
};
  
  return toReturn;
}