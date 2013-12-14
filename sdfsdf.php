<?php
$line=array(array('haha','hehe','wawa'));
$haha1 = array('red','blue','green');
$haha2 = array('yellow','purple','black');
$arr = array (array('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5));
$arr1 = array ('a1'=>1,'b1'=>2,'c1'=>3,'d1'=>4,'e1'=>5);
$arr2 = array ('a2'=>1,'b2'=>2,'c2'=>3,'d2'=>4,'e2'=>5);
$arr3 = array (array(1,2,3,4,5),array(1,2,3,4,5),array(1,2,3,4,5),array(1,2,3,4,5),array(1,2,3,4,5));
array_push($line, $haha1,$haha2);
array_push($arr, $arr1,$arr2,$arr3);

$string="1 2 3  4   5";
$stringArray=explode(" ", $string);
print_r($stringArray);

echo "<br><br><br><br><br><br><br>";
print_r($line);
echo "<br>";
$bubu=array();
array_push($bubu, 'blue');

print_r($bubu);
function get(){
	static $j=1;
	echo $j;
	$j++;
}
?>
<!DOCTYPE html>
<html>
<body>
	<p id="p1"></p>
	<p id="p2"></p>
	<p id="p3"></p>
	<p id="p4"></p>
	<p id="p5"></p>
	<p id="p6"></p>
	<p id="p7"></p>
	<p id="p8"></p>
	<p id="p9"></p>
</body>
<script type="text/javascript">
var i=0;
function func(line){
	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			document.getElementById("p"+(i+1)).innerHTML=line[i][j];
			i++;
		}
	}		
}
</script>
</html>