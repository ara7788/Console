#!/bin/bash

echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "------------------START DUMP SVN--------------------------"
date
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"


echo "billing"
svnadmin dump /var/svn/billing/ > /home/rantonov/backup/developer/dev/var/svn/billing.dump

echo "calltracking"
svnadmin dump /var/svn/calltracking/ > /home/rantonov/backup/developer/dev/var/svn/calltracking.dump

echo "contextmotor"
svnadmin dump /var/svn/contextmotor/ > /home/rantonov/backup/developer/dev/var/svn/contextmotor.dump

echo "megamorphy"
svnadmin dump /var/svn/megamorphy/ > /home/rantonov/backup/developer/dev/var/svn/megamorphy.dump

echo "client"
svnadmin dump /var/svn/client/ > /home/rantonov/backup/developer/dev/var/svn/client.dump

echo "login"
svnadmin dump /var/svn/login/ > /home/rantonov/backup/developer/dev/var/svn/login.dump

echo "origami"
svnadmin dump /var/svn/origami/ > /home/rantonov/backup/developer/dev/var/svn/origami.dump

echo "common_includes"
svnadmin dump /var/svn/common_includes/ > /home/rantonov/backup/developer/dev/var/svn/common_includes.dump

echo "market"
svnadmin dump /var/svn/market/ > /home/rantonov/backup/developer/dev/var/svn/market.dump

echo "smonitor"
svnadmin dump /var/svn/smonitor/ > /home/rantonov/backup/developer/dev/var/svn/smonitor.dump

echo "web-svn"
svnadmin dump /var/svn/web-svn/ > /home/rantonov/backup/developer/dev/var/svn/web-svn.dump


echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
date
echo "------------------FINISH DUMP SVN--------------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"