#!/bin/bash
echo "Start script"
#===============
#RSYNC of site
#===============
date
#/home/bitrix/ext_www/dev.fishingstock.ua/ -> /home/bitrix/ext_www/dev.fishingstock.ua/
#/home/bitrix/www/ -> /home/bitrix/www/

#Exept /home/bitrix/ext_www/dev.fishingstock.ua/bitrix/.settings.php
#Exept /home/bitrix/ext_www/dev.fishingstock.ua/bitrix/php_interface/dbconn.php

#/home/bitrix/www/
rsync -ravh --exclude 'dbconn.php' --exclude '.settings.php' root@88.99.47.51:/home/bitrix/www/ /home/bitrix/www/ && \
cd /home/bitrix/www/ &&  chown -R bitrix:bitrix .

#/home/bitrix/ext_www/dev.fishingstock.ua/
rsync -ravh --exclude 'dbconn.php' --exclude '.settings.php' root@88.99.47.51:/home/bitrix/ext_www/dev.fishingstock.ua/ /home/bitrix/ext_www/dev.fishingstock.ua/ && \
cd /home/bitrix/ext_www/dev.fishingstock.ua/ &&  chown -R bitrix:bitrix .
echo "End script"
date