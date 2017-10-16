#!/bin/bash
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "			START BACKUP_DEV"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo ""
echo ""
date
echo ""
echo ""
echo ""

echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "---------------------CLEARING DIR------------------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

cd /home/rantonov/backup/developer/
rm -R -f dev/
rm -f /home/rantonov/backup/developer/backup_dev.tar.gz


echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "-------------------------MKDIR---------------------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"



cd /home/rantonov/backup/developer/

echo "mkdir /dev"
mkdir dev
cd dev
echo "Good"

echo "mkdir /dev/etc"
mkdir etc
echo "Good"

echo "mkdir /dev/root"
mkdir root
cd root
mkdir easy-rsa
mkdir mercurial
mkdir openvpn
mkdir squid
mkdir .ssh
echo "Good"

cd /home/rantonov/backup/developer/dev/
echo "mkdir /dev/var"
mkdir var

cd var
mkdir svn
mkdir lib
mkdir log
cd log
mkdir openvpn
#mkdir rkhunter
#mkdir audit
cd ..
cd lib
mkdir mercurial-server
echo "Good"


cd /home/rantonov/backup/developer/
#mkdir Key
#echo "mkdir Key is Good"

#mkdir www
#cd www
#echo "mkdir www is Good"
#mkdir system
#echo "mkdir system is Good"

#cd /home/rantonov/backup/dev/
#mkdir opt
#cd opt
#mkdir remi
#pwd
#echo "mkdir opt/remi is Good"



echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "-----------------------COPY------------------------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
pwd
echo "cp /etc"
cp -R /etc/* /home/rantonov/backup/developer/dev/etc
echo "Good"




echo "cp /root"
cp /root/*.sh /home/rantonov/backup/developer/dev/root/
cp /root/svn.* /home/rantonov/backup/developer/dev/root/
cp /root/.bash_history /home/rantonov/backup/developer/dev/root/
cp /root/.mysql_history /home/rantonov/backup/developer/dev/root/
cp -R /root/.ssh/* /home/rantonov/backup/developer/dev/root/.ssh/
cp -R /root/easy-rsa/* /home/rantonov/backup/developer/dev/root/easy-rsa/
cp -R /root/mercurial/* /home/rantonov/backup/developer/dev/root/mercurial/
cp -R /root/openvpn/* /home/rantonov/backup/developer/dev/root/openvpn/
cp -R /root/squid/* /home/rantonov/backup/developer/dev/root/squid/
echo "Good"

echo "cp /var"
#cp /var/log/audit/audit.log /home/rantonov/backup/developer/dev/var/log/audit/
#cp /var/log/rkhunter/rkhunter.log /home/rantonov/backup/developer/dev/var/log/rkhunter/
#cp /var/log/secure /home/rantonov/backup/developer/dev/var/log/
cp /var/log/auth.log /home/rantonov/backup/developer/dev/var/log/
cp -R /var/log/openvpn/* /home/rantonov/backup/developer/dev/var/log/openvpn/
#cp -R /var/svn/* /home/rantonov/backup/developer/dev/var/svn/
cp -R /var/lib/mercurial-server/* /home/rantonov/backup/developer/dev/var/lib/mercurial-server/
echo "Good"





#echo "cp Key is Good"

#cp -R /www/system/* /home/rantonov/backup/developer/dev/www/system/
#echo "cp www/system is Good"

#cp -R /opt/remi/* /home/rantonov/backup/developer/dev/opt/remi/
#echo "cp PHP is Good"








echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "----------------------Collect HW Info--------------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
pwd
cd /home/rantonov/backup/developer
./hw_info.sh



echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "----------------------Dumping SVN repos------------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
pwd
cd /home/rantonov/backup/developer
./svn_dump.sh


echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "----------------------Archiving with ZIP-----------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

cd /home/rantonov/backup/developer
tar -czf backup_dev.tar.gz dev/
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "tar BACKUP_DEV is Good"


echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "-----------------------CLEARING DIR----------------------------"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "Remove folder dev"
cd /home/rantonov/backup/developer/
rm -R -f dev/
echo ""
echo ""
date
echo ""
echo ""
echo ""
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "			FINISH BACKUP_DEV"
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"