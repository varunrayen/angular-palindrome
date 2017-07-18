<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	//$text = json_decode(file_get_contents("php://input"));
	//$text = "null";
	$text = key($_POST);
	$text = trim($text);
	if ($text === strrev($text)) 
	{
		//echo "TRUE";	
		echo json_encode(TRUE);
	}
	else 
	{
		//echo "FALSE";
		echo json_encode(FALSE);
	}

?> 