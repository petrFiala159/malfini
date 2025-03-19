export async function generateRandomNumberTypeOfString(): Promise <string> {
    return Math.floor(Math.random() * 501).toString();
}

export async function generateRandomNumberTypeOfNumber(): Promise <number> {
    return Math.floor(Math.random() * 501);
}

export async function generateRandomDayTypeOfString(): Promise <string> {
    return (Math.floor(Math.random() * 28) + 1).toString();
}

export async function generateRandomDayTypeOfNumber(): Promise <number> {
    return Math.floor(Math.random() * 28) + 1;
}

export async function generateComunityKey(): Promise <string> {
    //0-9
    //has 8 lenght
       // Define a string of all possible characters: numbers and uppercase and lowercase letters
       const characters = '0123456789';
        
       // Helper function to pick a random character from the characters string
       const getRandomCharacter = (): string => characters.charAt(Math.floor(Math.random() * characters.length));
   
       // Generate a string of length 8 by repeating the random character selection
       return Array.from({ length: 8 }, () => getRandomCharacter()).join('');
        
}