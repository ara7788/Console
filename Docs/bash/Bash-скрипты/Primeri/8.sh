#!/bin/bash
x=0
#backup=`/home/ara/./backup.sh`
while [ true ]
do
	for((i=0; i<9; i++))
  	do
		echo -n "*"
	done
	echo
	echo "x = "
	read x
	if [ $x -eq 9 ]
		
		then $(/home/ara/./backup.sh) && break
	elif [ $x -eq 0 ]
		then break
	else
		echo "Good"
	fi
done
