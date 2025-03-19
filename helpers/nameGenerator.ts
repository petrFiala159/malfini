export async function generateFacilityName(facility: string): Promise<string> {
    interface EmojiMap {
        [key: string]: string;
    }
    const animalEmojis: EmojiMap = {
        'Hundisch': '🐕',
        'Kätzisch': '🐈',
        'Mäusisch': '🐁',
        'Pferdisch': '🐎',
        'Kuhig': '🐄',
        'Löwisch': '🦁',
        'Tigerhaft': '🐅',
        'Bärig': '🐻',
        'Äffisch': '🐒',
        'Elefantisch': '🐘',
        'Entig': '🦆',
        'Fuchsig': '🦊',
        'Wölfisch': '🐺',
        'Froschig': '🐸',
        'Außerirdisch': '👾',
        'Schlangisch': '🐍',
        'Lieblich': '❤️',
        'Eichhörnchenhaft': '🐿️',
        'Papageienhaft': '🦜'
    };

    const halloweenEmojis: EmojiMap = {
        'Geisterhund': '👻', // Ghost
        'Zauberhexe': '🧙‍♀️', // Witch
        'Zombie': '🧟', // Zombie
        'Kürbisgeist': '🎃', // Jack-o'-lantern
        'Teufelchen': '👹', // Little Devil
        'Vampirfledermaus': '🦇', // Vampire Bat
        'Schwarze Katze': '🐈‍⬛', // Black Cat
        'Spukgeist': '👻', // Haunting Ghost
        'Werwolf': '🐺', // Werewolf
        'Grabstein': '🪦', // Tombstone
        'Nachtspinne': '🕷️', // Night Spider
        'Vampir': '🧛', // Vampire
        'Sarg': '⚰️', // Coffin       
        'Schwarzes Herz': '🖤', // Black Heart
        'Schwarzer Vogel': '🐦‍⬛', // Black Bird     
    };

    const formalMap: EmojiMap = {
        'Hundisch': '',
        'Kätzisch': '',
        'Mäusisch': '',
        'Pferdisch': '',
        'Kuhig': '',
        'Löwisch': '',
        'Tigerhaft': '',
        'Bärig': '',
        'Äffisch': '',
        'Elefantisch': '',
        'Entig': '',
        'Fuchsig': '',
        'Wölfisch': '',
        'Froschig': '',
        'Außerirdisch': '',
        'Schlangisch': '',
        'Lieblich': '',
        'Eichhörnchenhaft': '',
        'Papageienhaft': ''   
    };
    
        // Get keys from the EmojiMap
    const keys = Object.keys(halloweenEmojis);
    // const keys = Object.keys(halloweenEmojis);
    // const keys = Object.keys(formalMap);

    // Randomly select a name
    const randomAnimal = keys[Math.floor(Math.random() * keys.length)];
    // Get the emoji for the randomly selected map key
    const emoji = halloweenEmojis[randomAnimal];
    // Generate a random number between 1 and 999
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    // Concatenate emoji, animal name, random number, and "Anlage"
    return `${randomAnimal} ${facility} Nr. ${randomNumber} ${emoji}`;
}

export async function generateShortFacilityName(facility: string): Promise<string> {
    interface EmojiMap {
        [key: string]: string;
    }
    const animalEmojis: EmojiMap = {
        'Hundisch': '🐕',
        'Kätzisch': '🐈',
        'Mäusisch': '🐁',
        'Pferdisch': '🐎',
        'Kuhig': '🐄',
        'Löwisch': '🦁',
        'Tigerhaft': '🐅',
        'Bärig': '🐻',
        'Äffisch': '🐒',
        'Elefantisch': '🐘',
        'Entig': '🦆',
        'Fuchsig': '🦊',
        'Wölfisch': '🐺',
        'Froschig': '🐸',
        'Außerirdisch': '👾',
        'Schlangisch': '🐍',
        'Lieblich': '❤️',
        'Eichhörnchenhaft': '🐿️',
        'Papageienhaft': '🦜'
    };

    const halloweenEmojis: EmojiMap = {
        'Geisterhund': '👻', // Ghost
        'Zauberhexe': '🧙‍♀️', // Witch
        'Zombie': '🧟', // Zombie
        'Kürbisgeist': '🎃', // Jack-o'-lantern
        'Teufelchen': '👹', // Little Devil
        'Vampirfledermaus': '🦇', // Vampire Bat
        'Schwarze Katze': '🐈‍⬛', // Black Cat
        'Spukgeist': '👻', // Haunting Ghost
        'Werwolf': '🐺', // Werewolf
        'Grabstein': '🪦', // Tombstone
        'Nachtspinne': '🕷️', // Night Spider
        'Totenkopf': '💀', // Skull
        'Vampir': '🧛', // Vampire
        'Sarg': '⚰️', // Coffin       
        'Schwarzes Herz': '🖤', // Black Heart
        'Schwarzer Vogel': '🐦‍⬛', // Black Bird     
    };

    const formalMap: EmojiMap = {
        'Hundisch': 'ABC',
        'Kätzisch': 'ABB',
        'Mäusisch': 'ACC',
        'Pferdisch': 'BCD',
        'Kuhig': 'BCC',
        'Löwisch': 'BDD',
        'Tigerhaft': 'CDE',
        'Bärig': 'CDD',
        'Äffisch': 'CEE',
        'Elefantisch': 'DEF',
        'Entig': 'DEE',
        'Fuchsig': 'DFF',
        'Wölfisch': 'EFG',
        'Froschig': 'EFF',
        'Außerirdisch': 'EGG',
        'Schlangisch': 'FGH',
        'Lieblich': 'FGG',
        'Eichhörnchenhaft': 'FHH'
    };
    
        // Get keys from the EmojiMap
    const keys = Object.keys(halloweenEmojis);
    // const keys = Object.keys(halloweenEmojis);
    // const keys = Object.keys(formalMap);
    // Randomly select an animal name
    const randomAnimal = keys[Math.floor(Math.random() * keys.length)];
    // Get the emoji for the randomly selected animal
    const emoji = halloweenEmojis[randomAnimal];
    // Concatenate emoji, animal name, random number, and "Anlage"
    return `${facility} ${emoji}`;
}