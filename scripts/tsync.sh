#!/bin/bash
touch date.log
date >> date.log
#: << COMMENTBLOCK
rm -r /home/ara/dir1/*
for((i=1;i<=9;i++))
do
touch /home/ara/dir1/file$i
done
#COMMENTBLOCK
rsync -ravh --progress /home/ara/dir1/ /home/ara/dir2/
