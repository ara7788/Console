#!/bin/bash
echo "Start script"
#===============
#RSYNC of site
#===============
: << COMMENTBLOCK
#/home/bitrix/ext_www/dev.fishingstock.ua/ -> /home/admin/web/dev.fishingstock.ua/public_html/
#/home/bitrix/www/ -> /home/admin/web/fishingstock.ua/public_html/
#Exept /home/bitrix/ext_www/dev.fishingstock.ua/bitrix/.settings.php
#Exept /home/bitrix/ext_www/dev.fishingstock.ua/bitrix/php_interface/dbconn.php

#/home/bitrix/www/
rsync -ravh --exclude 'dbconn.php' --exclude '.settings.php' root@88.99.47.51:/home/bitrix/www/ /home/admin/web/fishingstock.ua/public_html/ && \
cd /home/admin/web/fishingstock.ua/public_html/ &&  chown -R admin:admin .

#/home/bitrix/ext_www/dev.fishingstock.ua/
rsync -ravh --exclude 'dbconn.php' --exclude '.settings.php' root@88.99.47.51:/home/bitrix/ext_www/dev.fishingstock.ua/ /home/admin/web/dev.fishingstock.ua/public_html/ && \
cd /home/admin/web/dev.fishingstock.ua/public_html/ &&  chown -R admin:admin .


#===============
#DUMP mysql db
#===============

echo "Clear local dump dir"
rm -f /root/db_backup/*
echo "Start dump"
date
#sitemanager0
ssh root@88.99.47.51 'mysqldump -u dbuser -pGwD9LJrPVU4twM27nL6B -r /root/db_backup/sitemanager0.sql -f sitemanager0' && \
#dbdev
ssh root@88.99.47.51 'mysqldump -u userdev -pC781035501FBEA -r /root/db_backup/dbdev.sql -f dbdev' && \
echo "Dump is ready" && \
rsync -ravh --progress root@88.99.47.51:/root/db_backup/ /root/db_backup/ && \
echo "Dump is sync" && \
ssh root@88.99.47.51 'rm -f /root/db_backup/*' && \
echo "Clear remote dump dir"

#===============
#RESTORE mysql db
#===============

echo "Start restore"
date
mysql -u admin_main -p7o8RXT6zpT admin_main < /root/db_backup/sitemanager0.sql && \
mysql -u admin_dev -pntZfClXk400 admin_dev < /root/db_backup/dbdev.sql && \
echo "End script"
COMMENTBLOCK

