<!DOCTYPE html>
<html>
<style type="text/css">
#personality:hover{
	background: yellow;
}
#personality{
	background: white;
	float:left;
	display: inline;
	text-align: center;
	width:200px;height:200px;
	margin-top: 200px;
	font-weight: 900;
	font-size: 37px;
	line-height: 90px;
}
#upload:hover{
	background: yellow;
}
#upload{
	background: white;
	float:left;
	display: inline;
	text-align: center;
	width:200px;height:200px;
	margin-top: 200px;
	font-weight: 900;
	font-size: 37px;
}
body{
	background: #dddddd;
}
a{
	text-decoration: none;
	color: black;
}

</style>
<head>
<title>index</title>
<meta http-equiv="Content-Type" content="text/ html;charset=utf-8">
</head>
<body>
	<a href="personalTable.php"><div id="personality" style="margin-left:650px;margin-right:25px;line-height:200px;">自定义</div></a>
	<a id="upload" style="margin-right:650px;margin-left:25px; ">
		<form action="upload.php" method="post" enctype="multipart/form-data" style="margin-top:40px;">
			<input type="file" name="file" id="file"><br>
			<input type="submit" value="上传" >
		</form>
	</a>
</body>
</html>