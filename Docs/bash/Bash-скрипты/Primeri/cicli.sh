#!/bin/bash
IFS=$'\n'
for v1 in $(cat /etc/passwd | grep ara)
do
echo $v1
IFS=:
for v2 in $v1; do echo $v2; done
done

