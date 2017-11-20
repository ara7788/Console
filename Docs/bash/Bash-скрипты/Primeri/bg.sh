#!/bin/bash
/dev/null > test_bg.txt
count=1
while [ $count -le 30 ]
do
echo "Loop #$count"
sleep 1
count=$(( $count + 1 ))
echo "count: $count" >> ./test_bg.txt
done
