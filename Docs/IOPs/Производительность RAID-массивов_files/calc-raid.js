$(document).ready(function () {
            // UI Slider Handle
            var read, write, handle = $("#read-write");
            $("#slider").slider({
                value: 20,
                create: function () {
                    read = $(this).slider("value") / 100;
                    write = 1 - read;
                    handle.text($(this).slider("value") + "% / " + (100 - $(this).slider("value")) + "%");
                },
                slide: function (event, ui) {
                    read = ui.value / 100;
                    write = 1 - read;
                    calcIOPS();
                    handle.text(ui.value + "% / " + (100 - ui.value) + "%");
                }
            });

            /*
             RAID 0:  КД x СТД х ЭК
             RAID 1:  (КД x СТД х ПЗ / П + КД х СТД х ПЧ) х ЭК     // КД x СТД х (ПЗ/ П + ПЧ) х ЭК
             RAID 5:  (КД x СТД х ПЗ / П + КД х СТД х ПЧ) х ЭК     // КД x СТД х (ПЗ/ П + ПЧ) х ЭК
             RAID 6:  (КД x СТД х ПЗ / П + КД х СТД х ПЧ) х ЭК     // КД x СТД х (ПЗ/ П + ПЧ) х ЭК
             RAID 10: (КД x СТД х ПЗ / П + КД х СТД х ПЧ) х ЭК     // КД x СТД х (ПЗ/ П + ПЧ) х ЭК
             RAID 50: (КД x СТД х ПЗ / П + КД х СТД х ПЧ) х ЭК х 2 // КД x СТД х (ПЗ/ П + ПЧ) х ЭК х 2
             RAID 60: (КД x СТД х ПЗ / П + КД х СТД х ПЧ) х ЭК х 2 // КД x СТД х (ПЗ/ П + ПЧ) х ЭК х 2
             RAID 61: (КД x СТД х ПЗ / П + КД х СТД х ПЧ) х ЭК     // КД x СТД х (ПЗ/ П + ПЧ) х ЭК
            */

            /* Зависимости */
            // Пенальти от рейда
            var pens = {
                0: 1,
                1: 2,
                5: 4,
                6: 6,
                10: 2,
                50: 4,
                60: 6,
                61: 6
            };
            // Количество ИОПС на диск в среднем и эмпирический коэфициент от типа диска
            var disks = {
                7200: {
                    'iops': 100,
                    'ec': 1.2
                },
                10000: {
                    'iops': 140,
                    'ec': 1
                },
                15000: {
                    'iops': 210,
                    'ec': 1
                },
                'SSD': {
                    'iops': 8600,
                    'ec': 1
                }
            };

            var liveCheck = function (name, flag) {
                return $('input[name="' + name + '"]' + (typeof(flag) == 'undefined' ? ':checked' : '')).val();
            };

            var phrases = {
                'required': "Необходимое количество дисков более ",
                'correct': "Введите корректное количество дисков"
            };

            var calcIOPS = function () {
                var raid = liveCheck('raid'), type = liveCheck('type'), amount = liveCheck('amount', 1), volume = liveCheck('volume', 1),
                    raidVolume, finalIOPS;
                // справедливо, потому что кроме 0 рейда используется одна формула
                finalIOPS = amount * disks[type].iops * (write / pens[raid] + read) * disks[type].ec;
                switch (liveCheck('raid')) {
                    case '0' :
                        raidVolume = amount >= 2 ? volume * amount : phrases.required + 2;
                        finalIOPS = amount * disks[type].iops * disks[type].ec;
                        break;
                    case '1' :
                        raidVolume = amount >= 2 ? volume : phrases.required + 2;
                        break;
                    case '5' :
                        raidVolume = amount >= 3 ? volume * (amount - 1) : phrases.required + 3;
                        break;
                    case '6' :
                        raidVolume = amount >= 4 ? volume * (amount - 2) : phrases.required + 4;
                        break;
                    case '10' :
                        raidVolume = amount >= 4 ? volume * amount / 2 : phrases.required + 4;
                        break;
                    case '50' :
                        raidVolume = amount >= 6 ? volume * (amount - 2) : phrases.required + 6;
                        finalIOPS = finalIOPS * 2;
                        break;
                    case '60' :
                        raidVolume = amount >= 8 ? volume * (amount - 4) : phrases.required + 8;
                        finalIOPS = finalIOPS * 2;
                        break;
                    case '61' :
                        raidVolume = amount >= 8 ? volume * (amount - 2) / 2 : phrases.required + 8;
                        break;
                }

                $('#volume').html(raidVolume);
                $('#iops').html(raidVolume.toString().length < 15 ? Math.round(finalIOPS) : phrases.correct);
            };

            $('input[name="raid"]').click(function () {
                calcIOPS();
            });
            $('input[name="type"]').click(function () {
                calcIOPS();
            });
            $('input[name="amount"]').keyup(function () {
                calcIOPS();
            });

            $('input[name="volume"]').keyup(function () {
                calcIOPS();
            });
            calcIOPS();
        });