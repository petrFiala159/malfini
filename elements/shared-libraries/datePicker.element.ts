import { Locator, Page, expect } from "@playwright/test";
import { BaseElement } from "../base.element";

export class DatePicker extends BaseElement {
    readonly ogdCalendar: string;
    readonly ogdDatePicker: string;
    readonly chevronLeft: string;
    readonly chevronRight: string;
    readonly chevronDown: string;
    readonly calendarHeader: string;
    readonly dateCellSelector: string;
    readonly hoursElem: string;
    readonly minutesElem: string;
    readonly currentDay: string;
    readonly exitButton: string;
    readonly yearOption: string
    
    constructor(locator: Locator) {
      super(locator);  // Initialize with the BaseElement constructor
      this.ogdCalendar = "ogd-calendar"
      this.ogdDatePicker = 'ogd-date-picker'
      this.chevronLeft = '[icon="chevron-left"]'
      this.chevronRight = '[icon="chevron-right"]'
      this.chevronDown = '[data-mat-icon-name="chevron-down"]'
      this.calendarHeader = '[class="date-picker__header-clickable"]'
      this.dateCellSelector = '.date-picker__day'
      this.hoursElem = '[data-cy="hoursInput"]'
      this.minutesElem = '[data-cy="minutesInput"]'
      this.currentDay = '[class="date-picker__day ogd-text-sm-regular day-current ng-star-inserted"]'
      this.yearOption = '[class="date-picker__year-calendar-content ng-star-inserted"]'
      this.exitButton = '[data-mat-icon-name="x"]'
}
  
   // Funkce pro výběr data s podmínkou pro dnešní den v měsíci 28, 29, 30 nebo 31
  async selectDate(page: Page, dayNumber: string) {
        await this.element.click()
        const dateCellSelector = page.locator(this.dateCellSelector)
        const dateToSelect = dateCellSelector.getByText(dayNumber, {exact: true}).nth(0)
        await dateToSelect.click()        
   }

   async selectDateAndTime(page: Page, dayNumber: string, hours: string, minutes: string) {
    //time format 02:30 --> hours "02", minutes "30"
    //date and time from current month
    await this.element.click()
    const dateCellSelector = page.locator(this.dateCellSelector)
    const dateToSelect = dateCellSelector.getByText(dayNumber, {exact: true}).nth(0)
    await dateToSelect.click()        
    const hoursElem = page.locator(this.hoursElem)
    await hoursElem.clear()
    await hoursElem.fill(hours)
    const minutesElem = page.locator(this.minutesElem)
    await minutesElem.clear()
    await minutesElem.fill(minutes)
}

async selectPreviousMonthDateAndTime(page: Page, dayNumber: string, hours: string, minutes: string) {
    //time format 02:30 --> hours "02", minutes "30"
    //date and time from current month
    await this.element.click()
    const leftChevron = page.locator(this.ogdDatePicker).locator(this.chevronLeft)
    await leftChevron.click()
    const dateCellSelector = page.locator(this.dateCellSelector)
    const dateToSelect = dateCellSelector.getByText(dayNumber, {exact: true}).nth(0)
    await dateToSelect.click()        
    const hoursElem = page.locator(this.hoursElem)
    await hoursElem.clear()
    await hoursElem.fill(hours)
    const minutesElem = page.locator(this.minutesElem)
    await minutesElem.clear()
    await minutesElem.fill(minutes)
}

async selectNextMonthDateAndTime(page: Page, dayNumber: string, hours: string, minutes: string) {
    //time format 02:30 --> hours "02", minutes "30"
    //date and time from current month
    await this.element.click()
    const rightChevron = page.locator(this.ogdDatePicker).locator(this.chevronRight)
    await rightChevron.click()
    const dateCellSelector = page.locator(this.dateCellSelector)
    const dateToSelect = dateCellSelector.getByText(dayNumber, {exact: true}).nth(0)
    await dateToSelect.click()        
    const hoursElem = page.locator(this.hoursElem)
    await hoursElem.clear()
    await hoursElem.fill(hours)
    const minutesElem = page.locator(this.minutesElem)
    await minutesElem.clear()
    await minutesElem.fill(minutes)
}

   async selectDateFromPreviousMonth(page: Page, dayNumber: string) {
    await this.element.click()
    const leftChevron = page.locator(this.ogdDatePicker).locator(this.chevronLeft)
    await leftChevron.click()
    const dateCellSelector = page.locator(this.dateCellSelector)
    const dateToSelect = dateCellSelector.getByText(dayNumber, {exact: true})
    const selectedDayCount = await dateToSelect.count()
    if(selectedDayCount > 1){
        await dateToSelect.nth(0).click()
    }else{
        dateToSelect.click()
    }      
}

async selectDateFromNexMonth(page: Page, dayNumber: string) {
    await this.element.click()
    const rightChevron = page.locator(this.ogdDatePicker).locator(this.chevronRight)
    await rightChevron.click()
    const dateCellSelector = page.locator(this.dateCellSelector)
    const dateToSelect = dateCellSelector.getByText(dayNumber, {exact: true})
    const selectedDayCount = await dateToSelect.count()
    if(selectedDayCount > 1){
        await dateToSelect.nth(1).click()
    }else{
        dateToSelect.nth(0).click()
    }      
}

async selectYearMonthDay(page: Page, year: string, month: string, dayNumber: string) {
    //Please select month from: ["Januar", "Februar", "März","April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

    const monthArray = ["Januar", "Februar", "März","April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
    await this.element.click()
    const downChevron = page.locator(this.ogdDatePicker).locator(this.chevronDown)
    await downChevron.click()
    const yearElem = page.locator(this.ogdDatePicker).locator(this.yearOption).getByText(year, {exact: true})
    await yearElem.click()
    const calendarHeader = page.locator(this.ogdDatePicker).locator(this.calendarHeader)
    const textInCalendarHeader = await calendarHeader.innerText()
    const currenthMonth = textInCalendarHeader.replace(" "+year, "");
    console.log(`This is current month: ${currenthMonth}`)

    const indexOfCurrentMonth = monthArray.indexOf(currenthMonth);
    const indexOfDesiredMonth = monthArray.indexOf(month);

    const indexDifference = indexOfCurrentMonth - indexOfDesiredMonth
    if(indexDifference > 0){
        for (let i = 0; i < indexDifference; i++) {
            const leftChevron = page.locator(this.ogdDatePicker).locator(this.chevronLeft)
            await leftChevron.click({force:true})
            console.log(`Clicked ${i + 1} times`);
        }
    }else if(indexDifference < 0){
        for (let i = 0; i < Math.abs(indexDifference); i++) {
            const rightChevron = page.locator(this.ogdDatePicker).locator(this.chevronRight)
            await rightChevron.click({force:true})
            console.log(`Clicked ${i + 1} times`);
        }
    }
    const dateCellSelector = page.locator(this.dateCellSelector)
    const dateToSelect = dateCellSelector.getByText(dayNumber, {exact: true}).nth(0)
    await dateToSelect.click()        
}

   async selectCurrentDate(page: Page) {
    await this.element.click()
    // const currentDayOfMonth = new Date().getDate();
    // const date = currentDayOfMonth.toString()
    const optionsListLocator = page.locator(this.currentDay)
    await optionsListLocator.click();
    }

    async clearDate() {
        const dateElement = this.element
        const exitButton = dateElement.locator(this.exitButton)
        await exitButton.click()
    }

    async click() {
        await this.element.click()
    }
    async expectDatepickerIsVisible(){
        expect(this.element).toBeVisible({visible: true})
    }   
    

}
