<?php 
//Read the images and convert them into base64 encoded strings.
$images = array('htmlCSSJS01.jpg', 'htmlCSSJS02.jpg');

foreach ($images as $key => $imageFileName) {
	$imagefh = fopen($imageFileName, 'r');
	$imageData = fread($imagefh, filesize($imageFileName));
	fclose($imagefh);
	$imageEncoded[] = base64_encode($imageData);
}
//Roll up those strings into one long string and output it.
$newline = chr(1); // This character won't appear naturally in any base64 string.
echo implode($newline, $imageEncoded);

