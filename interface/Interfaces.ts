export interface IWritable {
    write(menuData: Menu) : Promise<void>
}
export interface Menu {
    [key:string]: string[][]
}