const text="BIL 4 2 5"

writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
    .then(() => readFileAsync(path.resolve(__dirname,"text.txt"))
    .then(data => data.split('').length)
    .then(count => writeFileAsync (path.resolve(__dirname,"count.")))


count FileRead = async () => {
    try{
         await fsPromise.writeFile(path.resolve(__dirname,"text.txt"))
    }
}