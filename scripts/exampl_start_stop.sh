#! /bin/sh
case "$1" in
start)
echo "подан сигнал start"
;;
stop)
echo "подан сигнал stop"
;;esac
--------------------------------------------------------------------------------------------------------
#! /bin/sh
### BEGIN INIT INFO
# Provides:          rc.local
# Required-Start:    $all
# Required-Stop:
# Default-Start:     2 3 4 5
# Default-Stop:
# Short-Description: Run /etc/rc.local if it exist
### END INIT INFO
 
 
PATH=/sbin:/usr/sbin:/bin:/usr/bin
 
. /lib/init/vars.sh
. /lib/lsb/init-functions
 
do_start() {
	if [ -x /etc/rc.local ]; then
	        [ "$VERBOSE" != no ] && log_begin_msg "Running local boot scripts (/etc/rc.local)"
		/etc/rc.local
		ES=$?
		[ "$VERBOSE" != no ] && log_end_msg $ES
		return $ES
	fi
}
 
case "$1" in
    start)
	do_start
        ;;
    restart|reload|force-reload)
        echo "Error: argument '$1' not supported" >&2
        exit 3
        ;;
    stop)
        ;;
    *)
        echo "Usage: $0 start|stop" >&2
        exit 3
        ;;
esac

--------------------------------------------------------------------------------------------------------
С описанием
--------------------------------------------------------------------------------------------------------
#!/bin/bash

# chkconfig: 35 99 01
# description: Send system status
# processname: test_script

. /etc/rc.d/init.d/functions

username="around"
lock_file=/var/lock/test_script
log_datetime=`date -u +"%F %T"`

start(){
touch "$lock_file"
daemon --user=$username /usr/local/bin/python2.7 "/home/$username/test.py" "Service started at $log_datetime UTC" &>/dev/null &
}

stop(){
rm -f "$lock_file"
daemon --user=$username /usr/local/bin/python2.7 "/home/$username/test.py" "Service stopped at $log_datetime UTC" &>/dev/null &
}

case "$1" in
start)
start
;;
stop)
stop
;;
*)
echo $"Usage: $0 {start|stop}"
exit 2
esac
exit 0
----------------------------------------------------------------------------------
Настройки того, куда и с какими именами будут создаваться симлинки, задаются в строке "chkconfig: 35 99 01". Это означает, что скрипт будет актуален для запуска системы с уровнем 3 и 5, причем старт осуществлять после загрузки всех сервисов (99), а останавливать в первую очередь (01). Т.е. тебе туда надо chkconfig: 06 01 01

Запуск от имени пользователя осуществляется с помощью конструкции

daemon --user=$username
где "$username" - имя пользователя в системе, а "&>/dev/null" предотвращает вывод скрипта в консоль. Команда "daemon" и другие служебные функции находятся в файле "/etc/rc.d/init.d/functions", поэтому его мы импортируем в самом начале.

"lock_file" - служебный файл, который позволяет системе определять, запущен ли сервис и нужно ли его останавливать, запуская скрипт с параметром "stop" при выключении или презагрузке. Если его не создавать, то будет осуществляться только запуск скрипта, а если не удалять - то только остановка. Для системных сервисов такой файл создается автоматически, для пользовательских же его необходимо создать самостоятельно.

"log_datetime" - это строка даты и времени в UTC для передачи python-скрипту.
----------------------------------------------------------------------------------
chkconfig --add test_script
chkconfig --list test_script
----------------------------------------------------------------------------------
