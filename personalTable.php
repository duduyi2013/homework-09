<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/ html;charset=utf-8">
	<title>展示</title>
</head>
<body>
<h1><span style="color:yellow;">黄色</span>表示当前扫描的块</h1>
<h1><span style="color:red;">红色</span>表示除正在扫描的块以外当前最大值的块</h1>
<h1><span style="color:green;">绿色</span>表示如果当前最大值的块变化的话，显示变化后的最大块</h1>
<h1>请保持两次单步之间时间间隔大于1s，使动态画面能够全部展示出来</h1>
	Rows:<input type="text" id="rowSum" value="4"><br>
	Columns:<input type="text" id="columnSum" value="4"><br>
	<form>
	<input type="radio" name="method" value="ordinary" checked="true">普通矩阵
	<input type="radio" name="method" value="close_H">联通矩阵-h
	<input type="radio" name="method" value="close_V">联通矩阵-v
	<input type="radio" name="method" value="close_HV">联通矩阵-hv
	</form>
	<button onclick="getTable()">手动生成</button>
	<button onclick="randomGenerate()">随机生成</button>
	<table id="tablelist" border=1 cellpadding="25px">
		
	</table>
	<p id="p1"></p>
	<p id="p2"></p>
	<p id="p3"></p>
	<p id="p4"></p>
	<p id="p5"></p>
	<p id="p6"></p>
	<p id="p7"></p>
	<p id="p8"></p>
</body>

<script type="text/javascript" src="dataStruct.js"></script>
<script type="text/javascript" src="random.js"></script>
<script type="text/javascript">
	randomOrNot=false;
	function randomGenerate(){
		randomOrNot=true;
		getTable();
	}
	function getTable(){
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
		row=document.getElementById("rowSum").value;
		column=document.getElementById("columnSum").value;
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
				if(randomOrNot==false)
				{
					curRow.getElementsByTagName("td")[j].innerHTML="<input>";
					curRow.getElementsByTagName("td")[j].getElementsByTagName("input")[0].setAttribute("value","-1");
				}
				else
				{
					var randomNumber=getRandom();
					curRow.getElementsByTagName("td")[j].innerHTML=randomNumber;
				}
			}
		}
		var buttonNum=document.getElementsByTagName("button").length;
		buttonCreate("提交","onclick","calculate()",buttonNum);
	}
}


</script>
<script type="text/javascript" src="homeworkProcess.js"></script>
</html>