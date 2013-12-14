<?php
$rows=0;$columns=0;
$nums=array(array());
if($_FILES["file"]["error"]>0)
{
	echo "<script>alert('upload file fail please reload the page and tye again')</script>";
}
else
{
	global $uploadFile;
	$uploadFile=$_FILES['file'];
	if($uploadFile["type"]!="text/plain")
		echo "<script>alert('this kind of file is not allowed')</script>";
	else
	{
		/*if(file_exists("upload/".$uploadFile["name"]))
			echo "<script>alert('file has existed')</script>";
		else*/
		{
			move_uploaded_file($uploadFile["tmp_name"], "upload/".$uploadFile["name"]);

			$file=fopen("upload/".$uploadFile["name"],"r");
			
			while(!feof($file))
			{

				$line=fgets($file);
				$line=chop($line);
				global $rows;
				$rows++;
				if($rows==1)
				{
					array_pop($nums);
					array_push($nums,explode(" ", $line));
				}
				else
					array_push($nums,explode(" ", $line));
			}
			$columns=count($nums[0]);
		}
	}
}
$objNum=json_encode($nums);
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/ html;charset=utf-8">
	<title>展示</title>
</head>
<body onload="getTable()">
<h1><span style="color:yellow;">黄色</span>表示当前扫描的块</h1>
<h1><span style="color:red;">红色</span>表示除正在扫描的块以外当前最大值的块</h1>
<h1><span style="color:green;">绿色</span>表示如果当前最大值的块变化的话，显示变化后的最大块</h1>
<h1>请保持两次单步之间时间间隔大于1s，使动态画面能够全部展示出来</h1>
	<table id="tablelist" border=1 cellpadding="25px">
		
	</table>
	<form>
	<input type="radio" name="method" value="ordinary" checked="true">普通矩阵
	<input type="radio" name="method" value="close_H">联通矩阵-h
	<input type="radio" name="method" value="close_V">联通矩阵-v
	<input type="radio" name="method" value="close_HV">联通矩阵-hv
	</form>
	<p id="p1"></p>
	<p id="p2"></p>
	<p id="p3"></p>
	<p id="p4"></p>
</body>

<script type="text/javascript" src="dataStruct.js"></script>
<script type="text/javascript">
var originalNum=(<?php echo $objNum;?>);
randomOrNot=true;
function getTable(){
	row=<?php echo $rows;?>;
	column=<?php echo $columns?>;
	for(var i=0;i<row;i++)
	{
		var rowNode=document.createElement("tr");
		var rowTextNode=document.createTextNode("");
		rowNode.appendChild(rowTextNode);
		document.getElementById("tablelist").appendChild(rowNode);
		var curRow=document.getElementsByTagName("tr")[i];
		for(var j=0;j<column;j++)
		{
			var columnNode=document.createElement("td");
			var columnTextNode=document.createTextNode("");
			columnNode.appendChild(columnTextNode);
			curRow.appendChild(columnNode);
			curRow.getElementsByTagName("td")[j].innerHTML=originalNum[i][j];
		}
	}
	var buttonNum=document.getElementsByTagName("button").length;
	buttonCreate("提交","onclick","preCalculate()",buttonNum);
}
function preCalculate(){
	checkOrNot=false;
	mapType=document.forms[0].method;
	for(method=0;method<4;method++)
	{
		if(mapType[method].checked==true)
		{
			checkOrNot=true;
			break;
		}
	}
	if(checkOrNot!=true)
		alert("请选择方式");
	else{
		switch (method)
		{
			case 0:break;
			case 1:signal_X=2;break;
			case 2:signal_Y=2;break;
			case 3:signal_X=2;signal_Y=2;break;	
		}
		calculate();
	}

}
</script>
<script type="text/javascript" src="homeworkProcess.js"></script>

</html>