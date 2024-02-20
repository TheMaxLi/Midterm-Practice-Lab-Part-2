import { IWritable, Menu } from "./interface/Interfaces";
import { writeFile } from 'fs/promises'
import path from 'node:path'

export default class HtmlWriter implements IWritable{
    async write(menuData :Menu) {
        let html = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>`

        const filePath = path.join(__dirname,"menu", "menu.html")

        await writeFile(filePath, "")
        for(let category of Object.keys(menuData)) {
            html += `<h1> ${category} items </h1> <table>`
            for (let menuItem of menuData[category]) {
                html += `<tr>`
                for (let itemInfo of menuItem) {
                    html += `<td>${itemInfo}</td>`
                }
                html += `</tr>`
            }
            html += `</table>`
        }
        html += `</body></html>`
        await writeFile(filePath, html)
    }
}