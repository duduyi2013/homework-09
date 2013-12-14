
signal_X=1;
signal_Y=1;
runOrnot=false;
indexOfStep=0;
inBackStepOrNot=false;
maxStep=-1;
function buttonCreate(name,attribute,funcName,orderOfButton){
	var buttonNode=document.createElement("button");
	var buttonText=document.createTextNode(name);
	buttonNode.appendChild(buttonText);
	document.getElementsByTagName("body")[0].appendChild(buttonNode);
	document.getElementsByTagName("button")[orderOfButton].setAttribute(attribute,funcName);

}

function calculate(){
	generate();
	var buttonNum=document.getElementsByTagName("button").length;
	document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("button")[buttonNum-1]);
	preRun();
	buttonCreate("下一步","onclick","nextStep()",buttonNum-1);
	buttonCreate("自动运行","onclick","run()",buttonNum);
	buttonCreate("停止自动运行","onclick","stopRun()",buttonNum+1);
	buttonCreate("上一步","onclick","lastStep()",buttonNum+2);
}
function run(){
	runOrnot=true;
	handle=setInterval(function(){nextStep();},2400);
}
function stopRun(){
	clearInterval(handle);
}

function generate(){
	matrix=new Array();
	var rowIndex=document.getElementsByTagName("tr");
	for(var i=0;i<row;i++)
	{
		matrix[i]=new Array();
		var colunmIndex=rowIndex[i].getElementsByTagName("td");
		for(var j=0;j<column;j++)
		{
			if(randomOrNot==false)
			{
				matrix[i][j]=colunmIndex[j].getElementsByTagName("input")[0].value;
				colunmIndex[j].innerHTML=matrix[i][j];
			}
			else
			{
				matrix[i][j]=colunmIndex[j].innerHTML;
			}
		}
	}
	changeMatrix(matrix);
}

function turnColor(coloredMaxMatrix,color){	
	if(coloredMaxMatrix!=undefined)
	{
		if(coloredMaxMatrix.rowOrdinateStart<=coloredMaxMatrix.rowOrdinateEnd&&coloredMaxMatrix.columnOrdinateStart<=coloredMaxMatrix.columnOrdinateEnd)
		{
			var coloredRow=document.getElementsByTagName("tr");
			for(var i=coloredMaxMatrix.rowOrdinateStart;i<=coloredMaxMatrix.rowOrdinateEnd;i++)
			{
				var coloredColumn=coloredRow[i].getElementsByTagName("td");
				for(var j=coloredMaxMatrix.columnOrdinateStart;j<=coloredMaxMatrix.columnOrdinateEnd;j++)
				{
					coloredColumn[j].style.background=color;
				}
			}
		}
		else if(coloredMaxMatrix.rowOrdinateStart>coloredMaxMatrix.rowOrdinateEnd&&coloredMaxMatrix.columnOrdinateStart<=coloredMaxMatrix.columnOrdinateEnd)
		{
			var coloredRow=document.getElementsByTagName("tr");
			for(var i=coloredMaxMatrix.rowOrdinateStart;i<row;i++)
			{
				var coloredColumn=coloredRow[i].getElementsByTagName("td");
				for(var j=coloredMaxMatrix.columnOrdinateStart;j<=coloredMaxMatrix.columnOrdinateEnd;j++)
				{
					coloredColumn[j].style.background=color;
				}
			}
			for(var i=0;i<=coloredMaxMatrix.rowOrdinateEnd;i++)
			{
				var coloredColumn=coloredRow[i].getElementsByTagName("td");
				for(var j=coloredMaxMatrix.columnOrdinateStart;j<=coloredMaxMatrix.columnOrdinateEnd;j++)
				{
					coloredColumn[j].style.background=color;
				}
			}
		}
		else if(coloredMaxMatrix.rowOrdinateStart<=coloredMaxMatrix.rowOrdinateEnd&&coloredMaxMatrix.columnOrdinateStart>coloredMaxMatrix.columnOrdinateEnd)
		{
			var coloredRow=document.getElementsByTagName("tr");
			for(var i=coloredMaxMatrix.rowOrdinateStart;i<=coloredMaxMatrix.rowOrdinateEnd;i++)
			{
				var coloredColumn=coloredRow[i].getElementsByTagName("td");
				for(var j=coloredMaxMatrix.columnOrdinateStart;j<column;j++)
				{
					coloredColumn[j].style.background=color;
				}
				for(var j=0;j<=coloredMaxMatrix.columnOrdinateEnd;j++)
				{
					coloredColumn[j].style.background=color;
				}
			}
		}
		else if(coloredMaxMatrix.rowOrdinateStart>coloredMaxMatrix.rowOrdinateEnd&&coloredMaxMatrix.columnOrdinateStart>coloredMaxMatrix.columnOrdinateEnd)
		{
			var coloredRow=document.getElementsByTagName("tr");
			for(var i=coloredMaxMatrix.rowOrdinateStart;i<row;i++)
			{
				var coloredColumn=coloredRow[i].getElementsByTagName("td");
				for(var j=coloredMaxMatrix.columnOrdinateStart;j<column;j++)
				{
					coloredColumn[j].style.background=color;
				}
				for(var j=0;j<=coloredMaxMatrix.columnOrdinateEnd;j++)
				{
					coloredColumn[j].style.background=color;
				}
			}
			for(var i=0;i<=coloredMaxMatrix.rowOrdinateEnd;i++)
			{
				var coloredColumn=coloredRow[i].getElementsByTagName("td");
				for(var j=coloredMaxMatrix.columnOrdinateStart;j<column;j++)
				{
					coloredColumn[j].style.background=color;
				}
				for(var j=0;j<=coloredMaxMatrix.columnOrdinateEnd;j++)
				{
					coloredColumn[j].style.background=color;
				}
			}
		}
	}
}
function resetColor(coloredMaxMatrix)
{
	turnColor(coloredMaxMatrix,"white");
}
function preRun(){
	maxLength=0,tempLength=0;
    limit_Y=row;

	maxofall = 0;
	maxofallMatrix= new maxMatrix();

	startrow = 0;
	if (signal_Y == 2)
		limit_Y = parseInt(startrow) + parseInt(row);
	else
		limit_Y = row;//new
	singlemax = matrix[0][0];	
	singleOrdinateX=0;
	singleOrdinateY=0;
	for(var i=0;i<row;i++)
	{
		for(var j=0;j<column;j++)
		{
			if (singlemax<matrix[i][j]){
				singlemax = matrix[i][j];
				singleOrdinateX=j;
				singleOrdinateY=i;
			}
		}	
	}
	numcopy=new Array();
	for (var i = 0; i<parseInt(column)*signal_X; i++){
		numcopy[i] = 0;
	}
	rowend=startrow;
	orderColumnStart=0;
	for (var i = 0; i<parseInt(column)*signal_X; i++){
		numcopy[i] = parseInt(numcopy[i]) + parseInt(matrix[rowend][i]);
	}
	maxinperiod = 0, addornot = 0, breakornot = 0;
	step=new Array(); //back
}
function changeMatrix(inputMatrix){
	if(signal_X==2)//-h
	{
		for(var i=0;i<row;i++)
			for(var j=column;j<2*parseInt(column);j++)
			{
				inputMatrix[i][j]=inputMatrix[i][j-parseInt(column)];
			}
	}
	if(signal_Y==2)//-v
	{
		for(var i=row;i<2*parseInt(row);i++)
		{
			inputMatrix[i]=new Array();
			for(var j=0;j<column;j++)
				inputMatrix[i][j]=inputMatrix[i-parseInt(row)][j];
		}
	}
	if(signal_Y==2&&signal_X==2)
	{
		for(var i=row;i<2*parseInt(row);i++)
			for(var j=column;j<2*parseInt(column);j++)
				inputMatrix[i][j]=inputMatrix[i-parseInt(row)][j-parseInt(column)];
	}
}
function lastStep(){
	if(maxStep==-1)
		alert("还没开始走呢！！！！");
	else
	{
		indexOfStep--; //back 重置所有
		if(indexOfStep==maxStep)
			indexOfStep--;
		inBackStepOrNot=true;
		if(indexOfStep<0)
		{
			alert("已经退到最开始了！！！");
			if(maxStep==0)
			{
				inBackStepOrNot=false;
				indexOfStep=1;		
			}
		}
		else
		{
			fullMatrix=new maxMatrix(0,parseInt(column)-1,0,parseInt(row)-1,0);
			resetColor(fullMatrix);
			turnColor(step[indexOfStep].basecurMatrix,"yellow");
			setTimeout(function(){resetColor(step[indexOfStep].basecurMatrix);turnColor(step[indexOfStep].basetempMatrix,"red");},600);
			setTimeout(function(){resetColor(step[indexOfStep].basetempMatrix);turnColor(step[indexOfStep].basemaxofallMatrix,"green");},1200);
			document.getElementById("p1").innerHTML="当前最大值:"+step[indexOfStep].basetempMatrix.value+'<br>'+"正在扫描的块的值:"+step[indexOfStep].basemaxinperiod+'<br>'+"扫描后最大块的值:"+step[indexOfStep].basemaxofallMatrix.value;
		}
	}
}
var processOneOrNot=false;
var index=0;
function nextStep(){
	fullMatrix=new maxMatrix(0,parseInt(column)-1,0,parseInt(row)-1,0);
	resetColor(fullMatrix);
	processOneOrNot=false;
	if(inBackStepOrNot==true)
	{
		indexOfStep++;
		fullMatrix=new maxMatrix(0,parseInt(column)-1,0,parseInt(row)-1,0);
		resetColor(fullMatrix);
		turnColor(step[indexOfStep].basecurMatrix,"yellow");
		setTimeout(function(){resetColor(step[indexOfStep].basecurMatrix);turnColor(step[indexOfStep].basetempMatrix,"red");},600);
		setTimeout(function()
			{
				resetColor(step[indexOfStep].basetempMatrix);
				turnColor(step[indexOfStep].basemaxofallMatrix,"green");
				if(indexOfStep==maxStep)
				{
					indexOfStep++;
					inBackStepOrNot=false;
				}
			},1200);
		document.getElementById("p1").innerHTML="当前最大值:"+step[indexOfStep].basetempMatrix.value+'<br>'+"正在扫描的块的值:"+step[indexOfStep].basemaxinperiod+'<br>'+"扫描后最大块的值:"+step[indexOfStep].basemaxofallMatrix.value;
		
	}
	else
	{
		if (singlemax<=0){
			
			maxofallMatrix.columnOrdinateStart=singleOrdinateX;
			maxofallMatrix.columnOrdinateEnd=singleOrdinateX;
			maxofallMatrix.rowOrdinateStart=singleOrdinateY;
			maxofallMatrix.rowOrdinateEnd=singleOrdinateY;
			maxofallMatrix.value=singlemax;
			turnColor(maxofallMatrix,"green");
			alert("结束");
			//
		}
		while(startrow<row&&processOneOrNot==false)
		{
			while(rowend<limit_Y&&processOneOrNot==false)
			{	
				while(index<parseInt(column)*signal_X){			
					if (maxinperiod == 0){
						if(index>=column)
						{
							index=parseInt(column)*signal_X;//add
							break;//add
						}	
						else if(numcopy[index]>0){
							maxinperiod = numcopy[index];
							breakornot = numcopy[index];
							orderColumnStart=index;
							maxLength = 1;//add
							if((index+1)==parseInt(column)*signal_X)
							{
								processOneOrNot=true;
								curMatrix=new maxMatrix(orderColumnStart,orderColumnStart+maxLength-1,startrow,rowend,maxinperiod);
								turnColor(curMatrix,"yellow");
								tempMatrix=maxofallMatrix;
								setTimeout(function(){resetColor(curMatrix);turnColor(tempMatrix,"red");},600);
								if (maxofall<maxinperiod)
								{
									maxofall = maxinperiod;
									maxofallMatrix=curMatrix;
								}
								setTimeout(function(){resetColor(tempMatrix);turnColor(maxofallMatrix,"green");},1200);
								document.getElementById("p1").innerHTML="当前最大值:"+tempMatrix.value+'<br>'+"正在扫描的块的值:"+maxinperiod+'<br>'+"扫描后最大块的值:"+maxofallMatrix.value;
								
								step[indexOfStep++]=new baseInfo();//back
								maxStep++;

								maxinperiod = 0;
								tempLength = 0;//add
								addornot = 0;//add
								breakornot=0;
								index++;
								break;
							}
						}
						index++;
						continue;
						
					}	
					addornot = parseInt(addornot) + parseInt(numcopy[index]);
					tempLength++;//add
					if (addornot >= 0){
						maxinperiod = parseInt(maxinperiod) +parseInt(addornot);
						addornot = 0;
						maxLength = parseInt(maxLength) + parseInt(tempLength);//add
						tempLength = 0;//add
					}
					breakornot = parseInt(breakornot) + parseInt(numcopy[index]);
					if (breakornot <= 0 || index == parseInt(column)*signal_X - 1||parseInt(maxLength)+parseInt(tempLength)==column){//add
						processOneOrNot=true;
						curMatrix=new maxMatrix(orderColumnStart,orderColumnStart+maxLength-1,startrow,rowend,maxinperiod);				
						turnColor(curMatrix,"yellow");
						tempMatrix=maxofallMatrix;
						setTimeout(function(){resetColor(curMatrix);turnColor(tempMatrix,"red");},600);
						if (maxofall<maxinperiod)
						{
							maxofall = maxinperiod;
							maxofallMatrix=curMatrix;
						}
						setTimeout(function(){resetColor(tempMatrix);turnColor(maxofallMatrix,"green");},1200);
						document.getElementById("p1").innerHTML="当前最大值:"+tempMatrix.value+'<br>'+"正在扫描的块的值:"+maxinperiod+'<br>'+"扫描后最大块的值:"+maxofallMatrix.value;
						step[indexOfStep++]=new baseInfo();//back
						maxStep++;

						maxinperiod = 0;
						tempLength = 0;//add
						addornot = 0;//add
						breakornot=0;
						if (parseInt(index) + 1 >= column)//add
						{
							index=parseInt(column)*signal_X;//add
							break;//add
						}
						index++;

						break;
					}
					index++;
				}
				if(index>=parseInt(column)*signal_X)
				{	

					rowend++;
					orderColumnStart=0;
					if(rowend<limit_Y)
					{
						for (var i = 0; i<column*signal_X; i++){
							numcopy[i] = parseInt(numcopy[i]) + parseInt(matrix[rowend][i]);
						}
						addornot = 0,maxinperiod = 0, breakornot = 0;
						index=0;
					}
				}
			}
			if(rowend>=limit_Y)
			{
				startrow++;	
				if(startrow<row)
				{
					numcopy=new Array();
					for (var i = 0; i<parseInt(column)*signal_X; i++){
						numcopy[i] = 0;
					}

					if (signal_Y == 2)
						limit_Y = parseInt(startrow) + parseInt(row);
					else
						limit_Y = row;//new
					rowend=startrow;
					orderColumnStart=0;
					if(rowend<limit_Y)
					{
						for (var i = 0; i<column*signal_X; i++){
							numcopy[i] = parseInt(numcopy[i]) + parseInt(matrix[rowend][i]);
						}
						maxinperiod = 0,addornot = 0, breakornot = 0;
						index=0;
					}
				}
			}
		}
		if(startrow>=row){
			turnColor(maxofallMatrix,"red");
			if(runOrnot==true)
				stopRun();
			setTimeout(function(){alert("结束");},1200);
			//show the max matrix
		}
						
	} 
}