function togglevisibility(obj)

{
	if (document.getElementById(obj).className=='visibleitem') 
	{document.getElementById(obj).className='hiddenitem'}
	else {document.getElementById(obj).className='visibleitem'}
}
function toggledropdown(obj)

{
	if (document.getElementById(obj).className=='dropdownitem') 
	{document.getElementById(obj).className='hiddenitem'}
	else {document.getElementById(obj).className='dropdownitem'}
}

function toggledropdown_smiles(obj)

{
  if (document.getElementById(obj).className=='dropdownitem_smiles')
  {document.getElementById(obj).className='hiddenitem'}
  else {document.getElementById(obj).className='dropdownitem_smiles'}
}

