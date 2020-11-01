const child_process=require('child_process')
for(var i=0;i<3;i++){
    var workerprocess=child_process.exec('node fss.js',function (err,stdout,stderr){
        if(err){
            console.log(err)
        }else{
            console.log('stdout',stdout)
            console.log('stdout',stderr)
        }
    })
}