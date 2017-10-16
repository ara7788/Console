#!/bin/bash
rm -f /home/rantonov/backup/developer/dev/hw_info.txt
echo "" > /home/rantonov/backup/developer/dev/hw_info.txt
cd /home/rantonov/backup/developer/dev/




echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "" >> hw_info.txt
echo "-----------------------------------------------" >> hw_info.txt
echo "	HardWare Info FILE Start System Scan" >> hw_info.txt
echo "-----------------------------------------------" >> hw_info.txt
echo "" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt


echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "---------------------DATA----------------------" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "" >> hw_info.txt
date >> hw_info.txt
echo "" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "--------------------NAME-----------------------" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "" >> hw_info.txt
uname -a >> hw_info.txt
echo "" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "--------------------Kernel---------------------" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "" >> hw_info.txt
cat /etc/issue >> hw_info.txt
echo "" >> hw_info.txt


echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "------------------CPU,MEMORY,UPTIME------------" >>hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "CPU" >> hw_info.txt
cat /proc/cpuinfo >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "MEMORY" >> hw_info.txt
cat /proc/meminfo >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "UPTIME/86400" >> hw_info.txt
cat /proc/uptime >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt

echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "------------------Temperature C----------------" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "" >> hw_info.txt
sensors >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt



echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "---------------HARDWARE SUMMARY----------------" >>hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "HW lshw short" >> hw_info.txt
lshw -short >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt


echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "-----------------------RAID--------------------" >>hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "HW lshw -c disk" >> hw_info.txt
lshw -C disk >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "HW lshw -c storage" >> hw_info.txt
lshw -C storage >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt



echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "----------------------HDD----------------------" >>hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt

echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "HDD blkid" >> hw_info.txt
blkid >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "HDD fdisk-l" >> hw_info.txt
fdisk -l >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "HDD df-h" >> hw_info.txt
df -h >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt



echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "-------------------Smart Info------------------" >>hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt

echo "" >> hw_info.txt
echo "" >> hw_info.txt
smartctl -a /dev/sg1 >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
smartctl -a /dev/sg2 >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
smartctl -a /dev/sg3 >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
smartctl -a /dev/sg4 >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
smartctl -a /dev/sg5 >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt









echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "----------------------LAN---------------------" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "LAN ifconfig" >> hw_info.txt
ifconfig >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "LAN ip addr show" >> hw_info.txt
ip addr show >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "ROUTES" >> hw_info.txt
route -n >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "IPTABLES -nL" >> hw_info.txt
iptables -nL >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "IPTABLES -S" >> hw_info.txt
iptables -S >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "IPTABLES -t nat -nL" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
iptables -t nat -nL >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "IPTABLES -S -t nat" >> hw_info.txt
iptables -S -t nat >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt



echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >>hw_info.txt
echo "----------------------LVM---------------------" >> hw_info.txt
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "PVSCAN" >> hw_info.txt
pvscan >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "LPVSCAN" >> hw_info.txt
lvscan >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "VGS" >> hw_info.txt
vgs >> hw_info.txt

echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt
echo "" >> hw_info.txt

echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
echo ""
echo "-----------------------------------------------" >> hw_info.txt
echo "	HardWare Info FILE Finish System Scan" >> hw_info.txt
echo "-----------------------------------------------" >> hw_info.txt
echo ""
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" >> hw_info.txt
