#!/bin/bash
#===============
#DUMP mysql db
#===============
touch mysqldump.log
date >> /root/script/mysqldump.log
echo "Clear local dump dir"
rm -f /root/db_backup/*
echo "Start dump" >> /root/script/mysqldump.log
date >> /root/script/mysqldump.log
#sitemanager0
ssh root@88.99.47.51 'mysqldump -u dbuser -pGwD9LJrPVU4twM27nL6B -r /root/db_backup/sitemanager0.sql -f sitemanager0' && \
#dbdev
ssh root@88.99.47.51 'mysqldump -u userdev -pC781035501FBEA -r /root/db_backup/dbdev.sql -f dbdev' && \
echo "Dump is ready" && \
rsync -ravh --progress root@88.99.47.51:/root/db_backup/ /root/db_backup/ && \
echo "Dump is sync" && \
ssh root@88.99.47.51 'rm -f /root/db_backup/*' && \
echo "Clear remote dump dir"
echo "End dump" >> /root/script/mysqldump.log
date >> /root/script/mysqldump.log
#===============
#RESTORE mysql db
#===============
echo "Start restore"
echo "Start restore" >> /root/script/mysqldump.log
date >> /root/script/mysqldump.log
mysql -u dbuser -pGwD9LJrPVU4twM27nL6B sitemanager0 < /root/db_backup/sitemanager0.sql && \
mysql -u userdev -pveechi4Ohth8 dbdev < /root/db_backup/dbdev.sql && \
echo "End restore"
echo "End restore" >> /root/script/mysqldump.log
echo "End script"

