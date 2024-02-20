import { IWritable, Menu } from "./interface/Interfaces";
import { appendFile, writeFile } from 'fs/promises'
import path from 'node:path'
import {EOL} from 'node:os'

export default class TextWriter implements IWritable{
    async write(menuData :Menu) {
        const filePath = path.join(__dirname,"menu","Menu.txt")

        await writeFile(filePath, "") // erase pre-existing data

        for(let category of Object.keys(menuData)) {
            await appendFile(filePath, `${EOL}* ${category} *${EOL}`) // add Category
            for (let menuItem of menuData[category]) {
                await appendFile(filePath, `${menuItem}\n`) // add items in category
            }
        }
    }
}