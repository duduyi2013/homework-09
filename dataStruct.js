
function maxMatrix(columnOrdinateStart,columnOrdinateEnd,rowOrdinateStart,rowOrdinateEnd,value)
{
	if(columnOrdinateEnd>=column)
		columnOrdinateEnd=columnOrdinateEnd-column;
	if(rowOrdinateEnd>=row)
		rowOrdinateEnd=rowOrdinateEnd-row;
	this.columnOrdinateStart=columnOrdinateStart;
	this.columnOrdinateEnd=columnOrdinateEnd;
	this.rowOrdinateStart=rowOrdinateStart;
	this.rowOrdinateEnd=rowOrdinateEnd;
	this.value=value;
}


function baseInfo(){
	this.basecurMatrix=curMatrix;
	this.basetempMatrix=tempMatrix;
	this.basemaxofallMatrix= maxofallMatrix;
	this.basemaxinperiod = maxinperiod;
}


	