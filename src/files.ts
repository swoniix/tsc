import * as fs from "node:fs/promises"
import * as readline from "node:readline/promises"
import {stdout as output, stdin as input } from "node:process"
export async function writeToFile(filePath:string, content:string): Promise<void>{
    try{
        await fs.appendFile(filePath, content+'\n', 'utf-8')
        console.log("Success")
    }
    catch(error){
        console.log("not found")
    }
}

export async function getContent():Promise<string>{
    const rl = readline.createInterface({input, output})
    try{
        const content:string = await rl.question("Enter your content: ")  
        return content

    }catch(error){
        console.log("no data")
        return ''
    }
    finally{
        rl.close
    }
}

export default class FileWorker
{
    private static path_to_file:string;
    public static set path(path:string){
        FileWorker.path_to_file = path;
    }
    public static async getContent():Promise<string>{
    const rl = readline.createInterface({input,output})
    try{
        const content:string =  await rl.question("Enter your content: ")
        return content
 
    }catch(error){
        console.log(`no data ${error}`)
        return ''
    }
    finally{
        rl.close()
    }
}
 
public static async writeToFile(filePath:string, content:string):Promise<void>{
    try{
        await fs.appendFile(filePath, content+'\n', 'utf-8')
        //await fs.writeFile(filePath, content+'\n', 'utf-8')
        console.log("Файл успішно збережено")
    }
    catch(error){
        console.log("Файл не збережено")
    }
}
public static async readFile(filePath:string):Promise<string> { //error
    try{
        return await fs.readFile(filePath)
    }catch(error){
        console.error(`My error ${error}`)
    }
  }
}