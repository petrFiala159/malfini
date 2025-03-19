export function getCurrentTimeInISO8601(): string {
    //format: YYYY-MM-DDTHH:mm:ss.sssZ
    //exapmle: 2024-02-05T09:28:12.349Z
    const currentTime = new Date();
    const iso8601Time = currentTime.toISOString();
    return iso8601Time;
}

export function generatePastDateInISO8601(): string {
    // Generate a random number of milliseconds between 1970 and now
    const randomMilliseconds = Math.floor(Math.random() * Date.now());
    
    // Calculate a random past date
    const pastDate = new Date(Date.now() - randomMilliseconds);

    // Convert the date to ISO 8601 format
    const iso8601Time = pastDate.toISOString();

    return iso8601Time;
}

export function getCurrentLABDUSDate(): string {
    //current date Format: YYYYMMDDhhmm
    //example: 199201311015
    //used in LABDUS import for import_timestamp
    const currentDate = new Date();
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  
    const formattedDate = `${year}${month}${day}${hours}${minutes}`;
  
    return formattedDate;
}

export function generatePastYear(): string {
    //example: 1981
    const currentYear = new Date().getFullYear();
    const randomYear = Math.floor(Math.random() * (currentYear - 1970 + 1)) + 1970;
    const stringYear = randomYear.toString()
    return stringYear;
}

export function generateUniquePastLABDUSDate(): string{
    // Format: YYYYMMDDhhmm
    // example: 199201281015
    //used in LABDUS import for sampling_timestamp
    const currentUtcTime: Date = new Date();
    const startYear: number = 1970;
    const endYear: number = currentUtcTime.getUTCFullYear();

    let randomYear: number = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    let randomMonth: number = Math.floor(Math.random() * 12) + 1;
    let randomDay: number = Math.floor(Math.random() * 28) + 1; // Assume 28 days for simplicity
    let randomHour: number = Math.floor(Math.random() * 24);
    let randomMinute: number = Math.floor(Math.random() * 60);

    let pastTime: Date = new Date(Date.UTC(randomYear, randomMonth - 1, randomDay, randomHour, randomMinute));

    // Ensure generated time is older than the current time
    while (pastTime >= currentUtcTime) {
        randomYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
        randomMonth = Math.floor(Math.random() * 12) + 1;
        randomDay = Math.floor(Math.random() * 28) + 1;
        randomHour = Math.floor(Math.random() * 24);
        randomMinute = Math.floor(Math.random() * 60);
        pastTime = new Date(Date.UTC(randomYear, randomMonth - 1, randomDay, randomHour, randomMinute));
    }

    return pastTime.toISOString().replace(/\D/g, '').slice(0, -5); 
}

export function getCurrentDateFormatted(): string {
    const date = new Date();
    //dd.mm.yyyy Format
    //04.09.2024

    // Pad the day and month with leading zeros if necessary
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-based
    const year = date.getFullYear();

    // Combine parts into the desired format
    return `${day}.${month}.${year}`;
}

export function getCurrentTime(): string {
    // Output might be something like "07:42"
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  export function getCurrentYear(): string {
    // Output
    const now = new Date();
    const year = now.getFullYear().toString()
    return year;
  }

  export function addOneMinute(time: string): string {
    // Split the time into hours and minutes
    let [hours, minutes] = time.split(':').map(Number);

    // Add one minute
    minutes += 1;

    // Handle overflow (e.g., 60 minutes = 1 hour)
    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }

    // Handle hours overflow (e.g., 24 hours wraps back to 0)
    if (hours === 24) {
        hours = 0;
    }

    // Format the hours and minutes back into a string (e.g., "08:05")
    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');

    return `${hoursString}:${minutesString}`;
}

export function subtractOneMinute(time: string): string {
    // Split the time into hours and minutes
    let [hours, minutes] = time.split(':').map(Number);

    // Subtract one minute
    minutes -= 1;

    // Handle underflow (e.g., -1 minute = 59 minutes and subtract 1 hour)
    if (minutes < 0) {
        minutes = 59;
        hours -= 1;
    }

    // Handle hours underflow (e.g., -1 hour wraps to 23)
    if (hours < 0) {
        hours = 23;
    }

    // Format the hours and minutes back into a string (e.g., "08:03")
    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');

    return `${hoursString}:${minutesString}`;
}