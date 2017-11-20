#!/bin/bash
#echo 'Hello world!'
for((i=0; i<9; i++))
do
echo -n "*"
done
echo
x=0
#echo "Please, input x:"
#read x
#echo "x: $x"
date=`date +"%d-%m-%y"`
etc=`ls /etc/*.conf`
dir=/home/ara/
echo $dir
echo $date
tar -czvf bash${date}.tar.gz ${dir}*.sh $etc
tarball=`ls -lah | grep *.gz`
echo "$tarball"
for((i=0; i<9; i++))
do
echo -n "*"
done
echo

