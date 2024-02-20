import CsvMenuParser from './CsvMenuParser'
import HtmlWriter from './HtmlWriter'
import TextWriter from './TextWriter'
import path from 'path'

async function main() {
    const menu = await CsvMenuParser.buildMenu(path.join(__dirname, "menu",'menu.csv'))
    menu.writeMenu(new TextWriter)
    menu.writeMenu(new HtmlWriter)
}

main()