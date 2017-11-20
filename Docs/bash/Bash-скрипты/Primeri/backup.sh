#!/bin/bash
date=`date +"%d-%m-%y"`
etc=`ls /etc/*.conf`
dir=/home/ara/
tar -czvf bash${date}.tar.gz ${dir}*.sh $etc

