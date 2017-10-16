#!/bin/bash

NOW=$(date +"%Y-%m-%d-%T")
echo $NOW

echo "Syncing buffers to disk"
sync

lvcreate -s /dev/vg_db1/LogVol01 -l 25600 -n mysqlsnapshot

echo "Mounting snapshot"
mount -r /dev/vg_db1/mysqlsnapshot /mnt/mysqlsnapshot

echo "Backing up"
/usr/bin/rsync -azv -l --delete -e 'ssh -p65035' --exclude=/db-1.pid --exclude=/mysql.sock --exclude=/mysqld-bin.* --exclude=/billing_archive /mnt/mysqlsnapshot/lib/mysql/ bkup@10.0.1.3:/var/lib/mysql_backup/

echo "Sleeping 10 seconds"
sleep 10

echo "Unmounting napshot"
umount /mnt/mysqlsnapshot/

echo "Removing Snapshot"
lvremove -f /dev/vg_db1/mysqlsnapshot

NOW=$(date +"%Y-%m-%d-%T")
echo $NOW

echo "==============="
