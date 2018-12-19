$(document).ready(function(){
$(".lccid").on("change", "input[type=file]", function() {
				$(this).prev().css("opacity","1")
				
 
				var filePath = $(this).val();//读取图片路径
				
				var fr = new FileReader();//创建new FileReader()对象
				var imgObj = this.files[0];//获取图片
				
				fr.readAsDataURL(imgObj);//将图片读取为DataURL
				var obj = $(this).prev()[0];//
			
				if(filePath.indexOf("jpg") != -1 || filePath.indexOf("JPG") != -1 || filePath.indexOf("PNG") != -1 || filePath.indexOf("png") != -1) {
					var arr = filePath.split('\\');
					var fileName = arr[arr.length - 1];
				
					$(this).parent().next().show();
					fr.onload = function() {
						obj.src = this.result;
					};
				} else {
					$(this).parent().next().show();
					$(this).parent().next().children("i").html("您未上传文件，或者您上传文件类型有误！").css("color", "red");
					//$(this).parent().next().html("您未上传文件，或者您上传文件类型有误！").css("color","red");
					return false
				}
			});
});