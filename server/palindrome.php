<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	$text = key($_POST);
	$text = trim($text);
	$text_proc = str_replace('_', '', $text);
	if ($text_proc === strrev($text_proc)) 
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