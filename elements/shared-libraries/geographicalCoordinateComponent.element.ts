import { Page , expect} from "@playwright/test";
import { Locator } from "@playwright/test";

export class GeographicalCoordinatesComponent {
    element: Locator;

    constructor()
    {
        this.element;
    }

    async fillGeographicalCoordinates(page:Page, dezimalgradBreite: number, dezimalgradLänge: number, beschreibungzurLokalisierung: string){
        const geoCoordinateButton = page.locator('[data-cy="addGeoLocationButton"]')
        const geoCoordinateButtonVisibility = await geoCoordinateButton.isVisible()
        if(geoCoordinateButtonVisibility){
            await geoCoordinateButton.click()
            await page.waitForSelector('app-geographic-coordinates')
        }
        const elemDezimalgradBreite = page.locator('input[data-cy="geoCoordinateLatitudeInput"]')
        await elemDezimalgradBreite.clear()
        await elemDezimalgradBreite.click()
        await elemDezimalgradBreite.fill(dezimalgradBreite.toString())

        const elemDezimalgradLänge = page.locator('input[data-cy="geoCoordinateLongitudeInput"]')
        await elemDezimalgradLänge.clear()
        await elemDezimalgradLänge.click()
        await elemDezimalgradLänge.fill(dezimalgradLänge.toString())
    
        const elemBeschreibungzurLokalisierung = page.locator('input[data-cy="geoLocationDescriptionInput"]')
        await elemBeschreibungzurLokalisierung.clear()
        await elemBeschreibungzurLokalisierung.click()
        await elemBeschreibungzurLokalisierung.fill(beschreibungzurLokalisierung)
    }

    async fillGeographicalCoordinatesEBW(page:Page, dezimalgradBreite: number, dezimalgradLänge: number, beschreibungzurLokalisierung: string){
        const geoCoordinateButton = page.locator('[data-cy="addGeoLocationButton"]')
        const geoCoordinateButtonVisibility = await geoCoordinateButton.isVisible()
        if(geoCoordinateButtonVisibility){
            await geoCoordinateButton.click()
            await page.waitForSelector('app-geographic-coordinates')
        }
        const elemDezimalgradBreite = page.locator('input[data-cy="geoCoordinateLatitudeInput"]').nth(1)
        await elemDezimalgradBreite.clear()
        await elemDezimalgradBreite.click()
        await elemDezimalgradBreite.fill(dezimalgradBreite.toString())

        const elemDezimalgradLänge = page.locator('input[data-cy="geoCoordinateLongitudeInput"]').nth(1)
        await elemDezimalgradLänge.clear()
        await elemDezimalgradLänge.click()
        await elemDezimalgradLänge.fill(dezimalgradLänge.toString())
    
        const elemBeschreibungzurLokalisierung = page.locator('input[data-cy="geoLocationDescriptionInput"]').nth(1)
        await elemBeschreibungzurLokalisierung.clear()
        await elemBeschreibungzurLokalisierung.click()
        await elemBeschreibungzurLokalisierung.fill(beschreibungzurLokalisierung)
    }

    generateGermanLongitude():number {
        const minLong = 5.8663;
        const maxLong = 15.0418;
        return parseFloat((Math.random() * (maxLong - minLong) + minLong).toFixed(6));
    }

    generateGermanLatitude():number{
        const minLat = 47.2701;
        const maxLat = 55.0583;
        return parseFloat((Math.random() * (maxLat - minLat) + minLat).toFixed(6));
    }
}
