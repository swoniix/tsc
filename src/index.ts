// class Player{
//     private name :string
//     private hp: number
//     private score : number
//     constructor(name:string , hp:number , score:number )
//     {
//         this.name = name;
//         this.hp = hp;
//         this.score = score
//     }
// }
// abstract class Weapon{
//     private type: string;
//     constructor(type: string){
//         this.type = type
//     }
//     abstract attack():void
// }

// class Dagger extends Weapon{
//     constructor(type:string){
//         super(type)
//     }
//     attack(): void {
//         console.log("Attack by dagger")
//     }
// }

// class Revolvet extends Weapon{
//     constructor(type:string){
//         super(type)
//     }
//     attack(): void{
//         console.log("Attack by revolvet")
//     }
// }
// class Gun extends Weapon{
//     constructor(type:string){
//         super(type)
//     }
//     attack(): void{
//         console.log("Attck by gun")
//     }
// }
import {getContent, writeToFile} from "./files.js"
import * as path from "node:path"
//interface for console without data
import { write } from "node:fs";
import FileWorker from "./files.js"

const FILE_TO_PATH = path.join('logs','logs.txt')

FileWorker.path = FILE_TO_PATH
let content:string|undefined = await FileWorker.getContent()
await FileWorker.writeToFile(FILE_TO_PATH, content)
content = (await FileWorker.readFile(FILE_TO_PATH))?.toString('utf-8') 
console.log(`Content from file: ${content}`)
//1
// stdout.write("enter content: ")
// stdin.on('data', (data:Buffer)=>{
//     console.log("bit",data)
//     const content:string = data.toString('utf-8')
//     console.log("Content",content)
//     writeToFile(FILE_TO_PATH, content).then(_=>{
 
// })
// })


