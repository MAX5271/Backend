import { write } from 'fs';
import {readFile, writeFile} from 'fs/promises';
console.log(import.meta.url);

const filePath = new URL('./index.html',import.meta.url);
let data = await readFile(filePath, {encoding: 'utf-8'});

console.log(data);

const pdata ={
    title: "Hello World!",
    body: "My name is Nitigya Chandel"
}

for(const [key,value] of Object.entries(pdata)){
    data=data.replace(`{${key}}`,value);
}

await writeFile(new URL('./index.html',import.meta.url),data);