/**
 * Created by yuguo on 2017/10/18.
 */
var fs=require("fs"),
    gulp=require("gulp"),
    path=require("path"),
    url=require("url"),
    server=require("gulp-webserver");

gulp.task("webserver", function () {
    gulp.src("./")
        .pipe(server({
            port:"8866",
            livereload:true,
            directoryListing:{
                path:"./",
                enable:true
            },
            middleware: function (req,res) {
                var ourl=url.parse(req.url);
                var mockfile=path.join(__dirname,"Data",ourl.query+".json");
                fs.exists(mockfile, function (exist) {
                    if(!exist){
                        var data={
                            isSuccess:false,
                            errMsg:"",
                            errCode:1,
                            data:null
                        };
                        res.writeHead(404,{
                            "Content-Type":"text/json,charset=UTF-8",
                            "Access-Control-Allow-Origin":"*"
                        });
                        res.end(JSON.stringify(data))
                    }else{
                        fs.readFile(mockfile,function(err,result){
                            if(err) return console.error(err)
                            var data={
                                isSuccess:true,
                                errMsg:"",
                                errCode:1,
                                data:result.toString()
                            };
                            res.writeHead(200,{
                                "Content-Type":"text/json,charset=UTF-8",
                                "Access-Control-Allow-Origin":"*"
                            });
                            res.end(data.data)
                        })
                    }
                })
            }
        }))
});