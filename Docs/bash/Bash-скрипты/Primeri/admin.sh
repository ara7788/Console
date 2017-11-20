#!/bin/bash
x=0
#backup=`/home/ara/./backup.sh`
while [ true ]
do
	echo
	echo "==========Menu=========="
	echo "1. OS"
	echo "2. SECURITY"
	echo "3. LAN"
	echo "4. Disk"
	echo "5. Commands"
	echo "6. LAEMP"
	echo "7. SERVICES"
	echo "8. UPDATE"
	echo "9. MONITORING"
	echo "10. Backup"
	echo "0. Exit"
	echo
	echo "What is your choice?:"
	read x
	echo "========================"
	echo
	case $x in
	1)
		uname -a
		;;
	2)
		cat /etc/passwd
		;;
	3)
		while [ true ] 
		do 
			echo "==========LAN=========="
			echo "1. Interfaces, IPv4, IPv6, conf, hostname"
			echo "2. Route, DNS, DHCP"
			echo "3. Firewall,fail2ban"
			echo "4. Files: ssh, sftp, wget, rsync, ftp"
			echo "5. Monitoring"
			echo "6. Scan: nmap, tcpdump"
			echo "7. Mail: smtp, imap, pop"
			echo "8. VPN: key, cert"
			echo "9. SNMP"
			echo "10. Backup"
			echo "0. Exit"
			echo
			echo "What is your choice?:" 
			read x
			echo "========================"			
			case $x in
			1)
				ifconfig -a
				;;
			2)
				route -n
				;;
			0)
				break
				;;
			*)
				echo "Your choice can be from 1 to 10"
				;;
			esac
		done
		;;
	4)
		fdisk -l && df -h
		;;
	5)
		man bash
		;;
	6)
		curl -i http://i.ua
		;;
	7)
		netstat -tulpn
		;;
	8)
		apt update
		;;
	9)
		htop
		;;
	10)
		/home/ara/./backup.sh
		;;

	0)
		break
		;;
	*)
		echo "Your choice can be from 1 to 10"
		;;

	esac
	echo
	
done
