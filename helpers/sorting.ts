import { Page, expect } from "@playwright/test";
import { Env } from "../utils/env";
import { waitForRequestToEndpoint } from "./interceptRoutes";

export async function sortDateStringsAsc(dateStrings: string[]): Promise<string[]> {
    // Function to parse date strings into Date objects
    function parseDateTime(dateTimeString: string): Date {
      const [date, time] = dateTimeString.split(', ');
      const [day, month, year] = date.split('.');
      const [hours, minutes] = time.split(':');
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes));
    }
  
    // Sort the array using the parsed Date objects
    const sortedDates = dateStrings.sort((a, b) => {
      const dateA = parseDateTime(a);
      const dateB = parseDateTime(b);
      return dateA.getTime() - dateB.getTime();
    });
  
    return sortedDates;
  }


  
  