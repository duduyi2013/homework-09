function getRandom()
{
var min=-100,max=100;
var range=max-min;
var randomOperator=Math.random();
var originRandom=min+range*randomOperator;
var finalRandom=Math.floor(originRandom);
return finalRandom;
}