const fs = require('node:fs').promises;
const path = require('path')

// const foo = async () =>{
//     const folderPath = path.join(__dirname,'student-boys')
//    const filesGirl = await fs.readdir(folderPath)
//     for(const file of filesGirl){
//         const oldPath =path.join(folderPath, file);
//        const data = await fs.readFile(path.join(oldPath))
//         const student = JSON.parse(data);
//         if(student.gender ==='Female'){
//              await fs.rename(oldPath,path.join(__dirname,'student-girls',file))
//         }
//     }
// }
const foo = async (readFolder,studentGender,newPath) =>{
    const folder1Path = path.join(__dirname,readFolder)

    const files = await fs.readdir(folder1Path)

    for(const file of files){

        const oldPath =path.join(folder1Path, file);
        const data = await fs.readFile(path.join(oldPath))
        const student = JSON.parse(data);

        if(student.gender === studentGender){
            await fs.rename(oldPath,path.join(__dirname,newPath,file))

        }
    }
}

foo('student-boys','Female','student-girls')
foo('student-girls','Male','student-boys')