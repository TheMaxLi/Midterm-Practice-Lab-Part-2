import {IWritable, Menu} from "./interface/Interfaces";
import {readFile} from 'node:fs/promises'
import {EOL} from 'node:os'
import path from 'node:path'


export default class CsvMenuParser {
    public _menuData: Menu

    private constructor(menuData: Menu) { 
        this._menuData = menuData
    }

    static async buildMenu(filePath: string){
        let menu: Menu = {} 
        try {
            let menuData = await readFile(filePath, 'utf-8')

            menuData.split(EOL).map((menuItem) => {
                let itemArray = menuItem.split(",")
                let category = itemArray.splice(0,1)[0] // get rid of category in the array

                if(category in menu) {
                    menu[category].push(itemArray)
                } else {
                    menu[category] = []
                    menu[category].push(itemArray)
                }
            })
        } catch (err) {
            console.log(err)
        }
        return new CsvMenuParser(menu)
    }

    public async writeMenu(writer: IWritable) {
        writer.write(this._menuData)
    }   
}
