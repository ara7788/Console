#!/bin/bash

NOW=$(date +"%Y-%m-%d-%T")
echo $NOW

echo "Temporary file creation"
TMP_FILE="/tmp/msqlbackup-$$.sql"

cat > $TMP_FILE <<EOD
FLUSH TABLES WITH READ LOCK;
\! sync
\! lvcreate -s /dev/vg_db1/LogVol01 -l 25600 -n mysqlsnapshot
UNLOCK TABLES;
EOD

echo "Locking MySQL"
echo "Syncing buffers to disk"
echo "Creating snapshot"

mysql -ubkup -p2wsxcvnm1QAZ3EDC4rfv < $TMP_FILE

echo "Deleting temporary file"
rm $TMP_FILE

echo "Sleeping 5 seconds"
sleep 5

echo "Syncing buffers to disk"
sync

echo "Mounting snapshot"
mount -r /dev/vg_db1/mysqlsnapshot /mnt/mysqlsnapshot

echo "Backing up"
/usr/bin/rsync -azv -l --delete -e 'ssh -p65035' --exclude=/db-1.pid --exclude=/mysql.sock --exclude=/billing_archive --exclude=/daily_logs --exclude=/mysqld-bin.* --exclude=/billing/ym_shop_goods_log.* /mnt/mysqlsnapshot/lib/mysql/ bkup@10.0.1.2:/var/lib/mysql_backup/

echo "Sleeping 5 seconds"
sleep 5

echo "Unmounting napshot"
umount /mnt/mysqlsnapshot/

echo "Removing Snapshot"
lvremove -f /dev/vg_db1/mysqlsnapshot

NOW=$(date +"%Y-%m-%d-%T")
echo $NOW

echo "==============="
