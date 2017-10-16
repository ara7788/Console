PAUSE

net localgroup 1C_Call-center /add /comment:"Call-center"
net localgroup 1C_Accounting /add /comment:"Accounting"
net localgroup 1C_Bookkeeper_department /add /comment:"Bookkeeper department"
net localgroup 1C_Production /add /comment:"Production"
net localgroup 1C_HR /add /comment:"Human Resources Department"

net user user19_1 ohkio2Ah /add /fullname:"Operator1"
net user user19_2 eish3Hut /add /fullname:"Operator2 "
net user user19_3 soCh6Ahw /add /fullname:"Operator3"
net user user19_4 Quo8quoo /add /fullname:"Operator4"
net user user19_5 wo5Deifi /add /fullname:"Operator5"
net user user19_6 ooshae8O /add /fullname:"Head Call-center"
net user user19_7 ooniX8ax /add /fullname:"Chief Accountant"
net user user19_8 ru4Wae3s /add /fullname:"Accountant1"
net user user19_9 bai7Eiph /add /fullname:"Accountant2"
net user user19_10 oeQu6xoo /add /fullname:"Accountant3"
net user user19_11 fie7Eiha /add /fullname:"Bookkeeper1"
net user user19_12 fie7Eiha /add /fullname:"Bookkeeper2"
net user user19_13 eiC4Jai8 /add /fullname:"Quality manager"
net user user19_14 koWoh8qu /add /fullname:"Head of Human Resources Department"
net user user19_15 ao9Vies2 /add /fullname:"Sidorenko my PC"

net localgroup 1C_Call-center user19_1 user19_2 user19_3 user19_4 user19_5 user19_6 /add
net localgroup 1C_Accounting user19_10 user19_7 user19_8 user19_9 /add
net localgroup 1C_Bookkeeper_department user19_11 user19_12 /add
net localgroup 1C_Production user19_13 /add
net localgroup 1C_HR user19_14 user19_15 /add

PAUSE