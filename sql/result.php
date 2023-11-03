<?php
$searchtype = $_POST['searchtype'];
$searchterm = trim($_POST['searchterm']);
if(!$searchterm||!$searchtype){
    echo("Please go back and try again");
    exit();
}

if(!get_magic_qoutes_gpc()){ //是否自动完成引号
    $searchterm = addcslashes($searchterm);
    $searchtype = addslashes($searchtype);
}

@ $db = new mysqli('localhost' ,'xxxx' , 'xxxx', 'xxx');

if(mysqli_connect_errno()){
    echo('Error');
    exit();
}

$query = "select * from books where ".$searchtype."like '%".$searchterm."%'";
$result = $db->query($query);

echo "<p>Number of studys found </p>";

for($i = 0;$i < $num_results;$i++){
    $row = $result->fech_assoc();
    
}