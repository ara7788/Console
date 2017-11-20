#!/bin/bash
for u in $(cat /home/ara/users.txt)
do
p=$(for p in $(pwgen); do echo "$p"; done)
useradd -g users -s /bin/bash -p "$(mkpasswd --method=sha-512 $p)" -d /home/$u -m $u
echo "$u:$p" >> /home/ara/users.txt 
echo
# for u in $(cat /home/ara/users_d.txt); do userdel -r $u; done 
#cat /etc/passwd

done
