#!/bin/bash
RemoteServer=srv0,srv1,srv2,srv3,srv4,srv5,sr6v,srv7,sr8v,srv9,srv10

for server in $RemoteServer
do

echo $server

#####################################################################
#Add repos
#####################################################################

ssh su_user@server 'sudo yum update | sudo yum install -y epel-release | sudo wget http://rpms.remirepo.net/enterprise/remi-release-7.rpm | sudo rpm -Uvh remi-release-7*.rpm | sudo yum --enablerepo=remi update remi-release | sudo systemctl stop httpd  | sudo systemctl stop php-fpm | sudo yum update | 

#####################################################################
#Php
#####################################################################

sudo yum -y remove php | command2 | sudo yum -y --enablerepo=remi-php70 install php70-php php70-php-bcmath php70-php-pdo php70-php-pear php70-php-pecl-imagick php70-php-pecl-amqp php70-php-mysqlnd | sudo rm -f /usr/bin/php | sudo ln -s /usr/bin/php70 /usr/bin/php | sudo systemctl start php70-php-fpm | sudo systemctl enable php70-php-fpm | 

#####################################################################
#MySQL
#####################################################################

sudo rpm -Uvh http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm | sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm | sudo yum update | sudo yum-config-manager --disable mysql57-community | sudo yum-config-manager --enable mysql56-community | sudo systemctl stop mysqld | sudo systemctl disable mysqld | sudo remove -y mysql-server | sudo yum install -y mysql-community-server | sudo systemctl start mysqld | sudo systemctl enable mysqld | 

#####################################################################
#Nginx
#####################################################################

sudo yum install -y nginx | sudo systemctl start nginx | sudo systemctl enable nginx | 

####################################################################
#phpMyAdmin
#####################################################################

sudo yum install-y phpmyadmin | command2 | sudo chown -R www-data:www-data /usr/share/phpMyAdmin | sudo chmod -R 755 /usr/share/phpMyAdmin | sudo systemctl restart nginx | sudo systemctl restart php70-php-fpm | 

#####################################################################
#Redis
#####################################################################

sudo yum install -y redis | sudo systemctl start redis | sudo systemctl enable redis'

done



#####################################################################
#Необходима предварительная подготовка для
#1.Подключение к серверу без пароля с использование ключа по ssh
#####################################################################

#Сгенерируем ключи аутентификации для SSH
#ssh-keygen -t rsa 

#Устанавливаем открытый ключ на удаленном сервере
#ssh-copy-id -i ~/.ssh/id_rsa.pub su_user@RemoteServer

#####################################################################
#2.Для выполнения sudo команд без спользования пароля,
#предварительно производится на удаленных серверах
#####################################################################

#    useradd -G wheel -c "Sudo user" su_user
#    visudo
#    uncomment this line - %wheel ALL=(ALL) NOPASSWD: ALL
#    usermod -G wheel -a su_user
#    systemctl restart sshd
#    ssh login as su_user and type 'sudo bash'
#####################################################################

#For Firewalld
#sudo firewall-cmd --permanent --zone=public --add-service=http 
#sudo firewall-cmd --permanent --zone=public --add-service=https
#sudo firewall-cmd --reload

#For Iptables
# iptables -A IN_public_allow -p tcp -m tcp --dport 80 -m conntrack --ctstate NEW -j ACCEPT
# iptables-save > /etc/sysconfig/iptables

# http://ip-адрес-сервера/

#####################################################################
# Необходимо включить поддержку php-fpm в /etc/nginx/nginx.conf

#server {
#         listen 80 default_server;
#         listen [::]:80 default_server;
#         server_name _;
#         root /usr/share/nginx/html;
#         index index.php index.html index.htm;

#         location ~ \.php$ {
#         fastcgi_pass 127.0.0.1:9000;
#         fastcgi_index index.php;
#         include fastcgi_params;
#         fastcgi_param SCRIPT_FILENAME $request_filename;
#         fastcgi_ignore_client_abort off;
#         }

#         include /etc/nginx/default.d/*.conf;

#         location / {
#         }

#         error_page 404 /404.html;
#         location = /40x.html {
#         }

#         error_page 500 502 503 504 /50x.html;
#         location = /50x.html {
#         }
#}

#####################################################################
#Необходим vi /etc/nginx/conf.d/phpMyAdmin.conf

#server {
#	listen   80;
#	server_name phpmyadmin.itzgeek.com;
#	root /usr/share/phpMyAdmin;

#	location / {
#		index  index.php;
#	}

## Images and static content is treated different
#	location ~* ^.+.(jpg|jpeg|gif|css|png|js|ico|xml)$ {
#		access_log        off;
#		expires           30d;
#	}

#	location ~ /\.ht {
#			deny  all;
#	}

#	location ~ /(libraries|setup/frames|setup/libs) {
#			deny all;
#			return 404;
#	}

#	location ~ \.php$ {
#		include /etc/nginx/fastcgi_params;
#		fastcgi_pass 127.0.0.1:9000;
#		fastcgi_index index.php;
#		fastcgi_param SCRIPT_FILENAME /usr/share/phpMyAdmin$fastcgi_script_name;
#	}
#}

# http://ip-адрес-сервера/phpmyadmin

#####################################################################
#redis-cli ping
#/etc/redis.conf
#    appendonly yes
#    appendfsync everysec

#sudo sysctl vm.overcommit_memory=1
#/etc/sysctl.conf
#    vm.overcommit_memory = 1

#sudo systemctl restart redis
#####################################################################