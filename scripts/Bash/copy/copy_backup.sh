#!/bin/bash

scp -P 65035 userpriv@31.28.25.68:/home/userpriv/backup/* /home/rantonov/backup/db-new
scp -P 65035 userpriv@62.152.54.190:/home/userpriv/backup/* /home/rantonov/backup/web1
scp -P 65035 userpriv@62.152.53.210:/home/userpriv/backup/* /home/rantonov/backup/web2
scp -P 65035 userpriv@62.152.54.174:/home/userpriv/backup/* /home/rantonov/backup/db-1
scp -P 65035 userpriv@31.28.25.127:/home/userpriv/backup/* /home/rantonov/backup/node-5

