(function () {
'use strict';

var globalWindow = window;

var window$1 = globalWindow;
var navigator$1 = globalWindow.navigator;
var document$1 = globalWindow.document;

var history = globalWindow.history;
var location$1 = globalWindow.location;
var $$1 = window$1['jQuery'];

var msDocs = window$1['msDocs'];

var loc = {
    "africa": "Африка",
    "all": "все",
    "allapis": "Все API",
    "allPackages": "All Packages",
    "americas": "Северная и Южная Америка",
    "apibrowser": "Браузер API",
    "apiReference": "{0} API Reference",
    "apiSearchIsUnavailable": "Поиск API недоступен. Повторите попытку позже.",
    "applies.to": "Касается:",
    "asia": "Азия",
    "author.name": "Имя автора",
    "azureDisclaimer": "Azure Cloud Shell использует существующие подписки Azure. Использование оболочки Cloud Shell и выполнение в ней команд связано с дополнительными расходами.",
    "back.to.top": "Наверх",
    "change.page.locale": "Изменить язык страницы",
    "clearfilter": "Сбросить фильтр",
    "clearterm": "Сбросить условие",
    "close": "Закрыть",
    "cloudShell.accountError": "Возникла ошибка при попытке доступа к вашей учетной записи Azure.",
    "cloudShell.chooseAccount": "Выберите одну из своих учетных записей Azure.",
    "cloudShell.loggingIn": "Вход в Azure Cloud Shell...",
    "cloudShell.pleaseLogin": "Чтобы воспользоваться Azure Cloud Shell, выполните вход со своей учетной записью Azure.",
    "code": "Код",
    "comments": "Комментарии",
    "contributorGuide": "Как стать соавтором",
    "contributors": "Соавторы",
    "cookie.consent.europe": "Посещая этот сайт, вы соглашаетесь на использование файлов cookie для анализа, персонализации содержимого и рекламы.",
    "copy": "Копировать",
    "currentSelection": "Текущий выделенный фрагмент:",
    "dark": "Темная",
    "disable": "Отключить",
    "disclaimer.moniker": "Выбранная платформа не поддерживает этот API.",
    "disclaimer.sxs.human": "Текст статьи на английском языке можно просматривать во всплывающем окне, перемещая курсор мыши по тексту.",
    "disclaimer.sxs.machine": "Эта статья переведена с помощью средств машинного перевода. Текст статьи на английском языке можно просматривать во всплывающем окне, перемещая курсор мыши по тексту.",
    "disclaimer.text": "Это содержимое недоступно на вашем языке. Вот версия на английском языке.",
    "dotnetApiBrowser": ".NET API Browser",
    "downloadPdf": "Скачать PDF",
    "edit": "Изменить",
    "editdesc": "Редактировать этот документ",
    "email": "Адрес электронной почты",
    "enable": "Включить",
    "error": "Ошибка",
    "europe": "Европа",
    "facebook": "Facebook",
    "feedback": "Обратная связь",
    "feedbackCommunityHelp": "Помощь сообщества",
    "feedbackProduct": "Отзыв о продукте",
    "filter.placeholder": "Фильтр",
    "filter.text": "Фильтр",
    "findALanguage": "Найти язык",
    "footer.blog": "Блог",
    "impressum.text": "Impressum",
    "in.this.article": "В этой статье",
    "language": "Язык",
    "last.updated": "обновлено",
    "learnmore": "Подробнее",
    "light": "Светлая",
    "linkedin": "LinkedIn",
    "loading": "Загрузка...",
    "loadMoreResults": "Загрузить другие результаты",
    "login": "Вход",
    "maximize": "Развернуть",
    "middleEast": "Ближний Восток",
    "min.to.read": "продолжительность чтения в минутах",
    "minimize": "Свернуть",
    "moduleReference": "{0} Module Reference",
    "monikerFallback": "Запрашиваемая страница недоступна для {0}. Вас перенаправили на совместимую версию.",
    "more": "Подробнее",
    "msdn.redirection.message": "Вас перенаправили на эту страницу с сайта MSDN.  Мы переносим всю техническую документацию на сайт docs.microsoft.com.",
    "next": "Следующая",
    "no.date": "дата недоступна",
    "no.description": "описание отсутствует",
    "no.results": "Нет результатов",
    "no.search.term": "Условие поиска не задано",
    "noOutput": "Нет выходных данных",
    "null.option.description": "-- Выбрать значение --",
    "options": "Варианты",
    "pacific": "Тихоокеанский регион",
    "platform": "Платформа",
    "powershellModuleBrowser": "PowerShell Module Browser",
    "previous": "Назад",
    "privacy.statement": "Конфиденциальность и файлы cookie",
    "privacystatement": "Заявление о конфиденциальности",
    "product": "Продукт",
    "product.feedback": "Чтобы отправить отзыв о продукте, перейдите по адресу",
    "quickfilters": "Быстрые фильтры",
    "response.code": "Код ответа",
    "response.header": "Заголовок ответа",
    "restart": "Перезагрузить",
    "results.title": "Результаты поиска для",
    "run": "Выполнить",
    "sample.request": "Пример запроса",
    "sample.response": "Пример ответа",
    "search": "Поиск",
    "searchScopeAction": "Коснитесь здесь, чтобы очистить фильтр.",
    "searchScopeInfo": "Текущий фильтр поиска:",
    "selectLocaleInstructions": "Отфильтруйте список языков, выбрав регион или введя название языка либо код языкового стандарта.",
    "share": "Поделиться",
    "sharedArticleSubject": "[Опубликованная статья] {0}",
    "sharedesc": "Поделиться этим документом",
    "slack": "Slack",
    "terms.of.use": "Условия использования",
    "test.request": "Тестовый запрос",
    "theme": "Тема",
    "token.additionalFeaturesAndRequirements": "Дополнительные возможности и требования",
    "token.attributes": "Атрибуты",
    "token.caution": "Внимание!",
    "token.classesInSubtitle": "Классы",
    "token.clsCompliant": "Этот API несовместим с CLS.",
    "token.clsCompliantAlt": "Альтернативный вариант, совместимый с CLS",
    "token.constructorsInSubtitle": "Конструкторы",
    "token.definition": "Определение",
    "token.delegatesInSubtitle": "Делегаты",
    "token.derived": "Производный",
    "token.description": "Описание",
    "token.edit": "Изменить",
    "token.eiisInSubtitle": "Явные реализации интерфейса",
    "token.enumsInSubtitle": "Перечисления",
    "token.eventsInSubtitle": "События",
    "token.examples": "Примеры",
    "token.exceptions": "Исключения",
    "token.extensionMethodsInSubtitle": "Методы расширения",
    "token.fieldsInSubtitle": "Поля",
    "token.implements": "Реализации",
    "token.important": "Важно!",
    "token.inheritance": "Наследование",
    "token.inheritedMembers": "Унаследованные элементы",
    "token.interfacesInSubtitle": "Интерфейсы",
    "token.inThisArticle": "В этой статье",
    "token.loadMore": "Подробнее&#8230;",
    "token.methodsInSubtitle": "Методы",
    "token.name": "Имя",
    "token.namespace": "Пространство имен",
    "token.namespaces": "Namespaces",
    "token.next": "Дальнейшие действия",
    "token.note": "Примечание",
    "token.operatorsInSubtitle": "Операторы",
    "token.overloads": "Перегрузки",
    "token.overrides": "Переопределения",
    "token.package": "Пакет",
    "token.packages": "Packages",
    "token.parameters": "Параметры",
    "token.propertiesInSubtitle": "Свойства",
    "token.remarks": "Комментарии",
    "token.returns": "Возвраты",
    "token.seeAlso": "См. также",
    "token.services": "Службы",
    "token.showAllDerived": "Показать все производные классы",
    "token.structsInSubtitle": "Структуры",
    "token.threadSafety": "Потокобезопасность",
    "token.tip": "Совет",
    "token.tutorial_complete100": "Выполнено на 100 %.",
    "token.tutorial_congratulations": "Поздравляем!",
    "token.tutorial_continueHere": "Продолжить",
    "token.tutorial_furtherReading": "Дополнительные материалы",
    "token.tutorial_introduction": "Введение",
    "token.tutorial_minRemain": "Осталось: {0} мин",
    "token.tutorial_minsRemaining": "Осталось: {0} мин",
    "token.tutorial_minutesToComplete": "{0} мин до завершения",
    "token.tutorial_next": "Следующая",
    "token.tutorial_nextSteps": "Дальнейшие действия",
    "token.tutorial_nextTutorial": "Следующее руководство",
    "token.tutorial_previous": "Назад",
    "token.tutorial_resources": "Ресурсы",
    "token.tutorial_seeAllContributors": "See all {0} or become a contributor by suggesting imporvement on {1}",
    "token.tutorial_youLearned": "Вы узнали, как...",
    "token.tutorial_youveCompleted": "Вы завершили работу с руководством \"{0}\".",
    "token.tutorial_youWillLearn": "Вы узнаете, как...",
    "token.typeParameters": "Параметры типа",
    "token.usage": "Использование",
    "token.value": "Значение",
    "token.warning": "Предупреждение",
    "token.win10Requirements": "Требования для Windows 10",
    "trademarks": "Товарные знаки",
    "try.it": "Попробовать",
    "twitter": "Twitter",
    "type": "Тип",
    "version": "Версия",
    "view.source": "Просмотреть код",
    "worldwide": "По всему миру"
};

var rtlDictionary = {
    'ar-sa': true,
    'he-il': true
};

function detectFeatures() {
    var html = document$1.documentElement;
    var className = html.className.replace('no-js', 'js');
    if (('ontouchstart' in window$1) || window$1.DocumentTouch && document$1 instanceof window$1.DocumentTouch) {
        className += ' hasTouch';
    }
    else {
        className += ' noTouch';
    }
    html.className = className;
}

function detectHighContrast() {
    var div = document$1.createElement('div');
    div.style.cssText = 'position:absolute;top:0;left:-2300px;background-color:#878787';
    div.textContent = 'hc';
    document$1.body.appendChild(div);
    var color = window$1.getComputedStyle(div).backgroundColor.toLowerCase();
    document$1.body.removeChild(div);
    if (color !== '#878787' && color !== 'rgb(135, 135, 135)') {
        document$1.documentElement.className += ' highContrast';
    }
}

function ie10MobileFix() {
    if (navigator$1.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document$1.createElement("style");
        msViewportStyle.appendChild(document$1.createTextNode("@-ms-viewport{width:auto!important}"));
        document$1.getElementsByTagName("head")[0].
            appendChild(msViewportStyle);
    }
}

function fixDate() {
    $$1(".metadata").removeClass("loading");
}

function pluginDomReadyShield() {
    $$1.fn.oldReady = $$1.fn.ready;
    $$1.fn.ready = function (fn) {
        return $$1.fn.oldReady(function () { try {
            if (fn)
                fn.apply($$1, arguments);
        }
        catch (e) {
            console.error(e);
        } });
    };
}

function pluginLALD() {
    var domReady = false;
    var $document = $$1(document$1);
    var handleAttachment = function (selector, event, arg1, arg2, namespace) {
        var namespacedEvent = event + '.' + namespace;
        var data = arg2 ? arg1 : null;
        var handler = arg2 ? arg2 : arg1;
        if (!domReady) {
            if (data) {
                $document.on(namespacedEvent, selector, data, handler);
            }
            else {
                $document.on(namespacedEvent, selector, handler);
            }
        }
        $$1(function () {
            domReady = true;
            $document.off(namespacedEvent, selector, handler);
            if (namespace === 'lald') {
                if (data) {
                    $$1(selector).on(namespacedEvent, data, handler);
                }
                else {
                    $$1(selector).on(namespacedEvent, handler);
                }
            }
        });
    };
    $$1.lald = function (selector, event, arg1, arg2) {
        handleAttachment(selector, event, arg1, arg2, 'lald');
    };
    $$1.lad = function (selector, event, arg1, arg2) {
        handleAttachment(selector, event, arg1, arg2, 'lad');
    };
}

function pluginAddState() {
    $$1.fn.removeState = function (namespace) {
        $$1(this).each(function () {
            var $this = $$1(this);
            if ($this.attr("class") && $this.attr("class").indexOf(namespace) >= 0) {
                var otherClasses = $$1.grep($this.attr("class").split(" "), function (aClass) {
                    return aClass.lastIndexOf(namespace, 0) !== 0;
                });
                $this.attr("class", otherClasses.join(" "));
            }
        });
        return this;
    };
    $$1.fn.addState = function (namespace, state) {
        this.removeState(namespace);
        this.addClass(namespace + state);
        return this;
    };
    $$1.fn.toggleState = function (namespace, state, switchVal) {
        var $this = $$1(this);
        if (typeof switchVal === "boolean") {
            if (switchVal) {
                $this.addState(namespace, state);
            }
            else {
                $this.removeClass(namespace + state);
            }
            return this;
        }
        if ($this.hasClass(namespace + state)) {
            $this.removeClass(namespace + state);
        }
        else {
            $this.addState(namespace, state);
        }
        return this;
    };
}

function pluginIfThen() {
    $$1.fn.extend({
        ifThen: function () {
            var args = arguments;
            if (args.length < 2) {
                return this;
            }
            for (var i = 0; i < args.length; i = i + 2) {
                if (args[i] && jQuery.isFunction(args[i + 1])) {
                    args[i + 1].call(this);
                    return this;
                }
            }
            if (args.length % 2 && (typeof args[args.length - 1] === "function")) {
                args[args.length - 1].call(this);
            }
            return this;
        }
    });
}

var ProtectedLocalStorage = (function () {
    function ProtectedLocalStorage() {
    }
    ProtectedLocalStorage.prototype.setItem = function (key, data) {
        try {
            return window$1.localStorage.setItem(key, data);
        }
        catch (e) {
            return undefined;
        }
    };
    
    ProtectedLocalStorage.prototype.getItem = function (key) {
        try {
            return window$1.localStorage.getItem(key);
        }
        catch (e) {
            return null;
        }
    };
    
    ProtectedLocalStorage.prototype.clear = function () {
        try {
            return window$1.localStorage.clear();
        }
        catch (e) {
            return undefined;
        }
    };
    
    ProtectedLocalStorage.prototype.removeItem = function (key) {
        try {
            return window$1.localStorage.removeItem(key);
        }
        catch (e) {
            return undefined;
        }
    };
    
    Object.defineProperty(ProtectedLocalStorage.prototype, "length", {
        get: function () {
            try {
                return window$1.localStorage.length;
            }
            catch (e) {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    
    ProtectedLocalStorage.prototype.key = function (index) {
        try {
            return window$1.localStorage.key(index);
        }
        catch (e) {
            return null;
        }
    };
    
    return ProtectedLocalStorage;
}());
var localStorage$1 = new ProtectedLocalStorage();
var ProtectedSessionStorage = (function () {
    function ProtectedSessionStorage() {
    }
    ProtectedSessionStorage.prototype.setItem = function (key, data) {
        try {
            return window$1.sessionStorage.setItem(key, data);
        }
        catch (e) {
            return undefined;
        }
    };
    
    ProtectedSessionStorage.prototype.getItem = function (key) {
        try {
            return window$1.sessionStorage.getItem(key);
        }
        catch (e) {
            return null;
        }
    };
    
    ProtectedSessionStorage.prototype.clear = function () {
        try {
            return window$1.sessionStorage.clear();
        }
        catch (e) {
            return undefined;
        }
    };
    
    ProtectedSessionStorage.prototype.removeItem = function (key) {
        try {
            return window$1.sessionStorage.removeItem(key);
        }
        catch (e) {
            return undefined;
        }
    };
    
    Object.defineProperty(ProtectedSessionStorage.prototype, "length", {
        get: function () {
            try {
                return window$1.sessionStorage.length;
            }
            catch (e) {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    
    ProtectedSessionStorage.prototype.key = function (index) {
        try {
            return window$1.sessionStorage.key(index);
        }
        catch (e) {
            return null;
        }
    };
    
    return ProtectedSessionStorage;
}());
var sessionStorage = new ProtectedSessionStorage();

if (typeof CustomEvent !== 'function') {
    window$1.CustomEvent = function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    };
    window$1.CustomEvent.prototype = Event.prototype;
}

function themeSwitcher() {
    var selectorId = 'theme-selector';
    var storageName = 'theme';
    var classNamespace = 'theme';
    var placeholderClass = 'removedOnload';
    var updateThemeClass = function (currentValue) {
        var wasDark = document$1.documentElement.classList.contains('theme_night');
        var currentTheme = currentValue || localStorage$1.getItem(storageName);
        if (currentTheme && currentTheme.length) {
            currentTheme = currentTheme.replace(classNamespace, '');
            $$1('html').addState(classNamespace, currentTheme);
            if (currentTheme === '_night') {
                currentTheme = 'dark';
            }
            msDocs.data.currentTheme = currentTheme;
        }
        else {
            $$1('html').removeState(classNamespace);
            msDocs.data.currentTheme = 'light';
        }
        var isDark = document$1.documentElement.classList.contains('theme_night');
        if (isDark !== wasDark) {
            document$1.documentElement.dispatchEvent(new CustomEvent('theme-changed', { bubbles: true, detail: { isDark: isDark } }));
        }
    };
    $$1.lald('#' + selectorId, 'change', function (e) {
        var currentValue = $$1(this).val();
        if (currentValue && currentValue.length) {
            localStorage$1.setItem(storageName, currentValue);
        }
        else {
            localStorage$1.removeItem(storageName);
        }
        updateThemeClass(currentValue);
    });
    updateThemeClass();
    $$1(function () {
        var $selector = $$1('#' + selectorId);
        $selector.find('.' + placeholderClass).remove();
        var currentTheme = localStorage$1.getItem(storageName);
        if (currentTheme && currentTheme.length) {
            $selector.val(currentTheme);
        }
    });
}

function sharing() {
    var appendCampaignId = function (shareLink, campaignId) {
        if (shareLink.indexOf('?') === -1) {
            return shareLink + "?WT.mc_id=" + campaignId;
        }
        else {
            return shareLink + "&WT.mc_id=" + campaignId;
        }
    };
    var buildTwitterShareUrl = function (shareLink, message) {
        shareLink = encodeURIComponent(appendCampaignId(shareLink, "docs-twitter"));
        return "https://twitter.com/intent/tweet?original_referer=" + shareLink + "&text=" + encodeURIComponent(message) + "&tw_p=tweetbutton&url=" + shareLink;
    };
    var buildLinkedInShareUrl = function (shareLink) {
        shareLink = encodeURIComponent(appendCampaignId(shareLink, "docs-linkedin"));
        return "https://www.linkedin.com/cws/share?url=" + shareLink;
    };
    var buildEmailShareUrl = function (shareLink) {
        var subject = encodeURIComponent(loc.sharedArticleSubject.replace('{0}', document$1.title));
        var body = encodeURIComponent(document$1.title + "\n\n" + appendCampaignId(shareLink, "docs-email"));
        return "mailto:?subject=" + subject + "&body=" + body;
    };
    var buildFacebookShareUrl = function (shareLink) {
        shareLink = encodeURIComponent(appendCampaignId(shareLink, "docs-facebook"));
        return "https://www.facebook.com/sharer/sharer.php?u=" + shareLink;
    };
    var buildWeChatShareUrl = function (shareLink) {
        return appendCampaignId(shareLink, "docs-wechat");
    };
    var shareLink = location.origin + location.pathname + location.search;
    var facebookShareUrl = buildFacebookShareUrl(shareLink);
    var twitterShareUrl = buildTwitterShareUrl(shareLink, document$1.title);
    var linkedinShareUrl = buildLinkedInShareUrl(shareLink);
    var emailShareUrl = buildEmailShareUrl(shareLink);
    $$1(".share-facebook").attr("href", facebookShareUrl);
    $$1(".share-twitter").attr("href", twitterShareUrl);
    $$1(".share-linkedin").attr("href", linkedinShareUrl);
    $$1(".share-email").attr("href", emailShareUrl);
    $$1('body').not('.share-container').click(function () {
        $$1('.share-container').hide();
    });
    $$1('.sharebutton').click(function () {
        var pos = $$1('.sharebutton').position();
        if ($$1('.mainContainer').attr('dir') !== 'rtl') {
            $$1('.share-container').css('left', pos.left);
        }
        $$1('.share-container').css('top', pos.top + 36);
        $$1('.share-container').toggle();
        return false;
    });
    $$1('.share-container > li > a').click(function () {
        window$1.open(this.href, '', 'width=600,height=650');
        return false;
    });
}

function showDisclaimer(message) {
    var disclaimer = document$1.createElement('div');
    disclaimer.classList.add('disclaimer');
    disclaimer.appendChild(document$1.createElement('span'));
    disclaimer.firstElementChild.classList.add('disclaimertext');
    disclaimer.firstElementChild.textContent = message;
    var main = document$1.querySelector('main');
    main.insertBefore(disclaimer, main.firstElementChild);
    return disclaimer;
}

var cookieApi;

(function (factory) {
    cookieApi = factory();
}(function () {
    var extend = function () {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    };
    function init(converter) {
        var api = function (key, value, attributes) {
            var result;
            if (typeof document === 'undefined') {
                return;
            }
            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);
                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                }
                catch (e) { }
                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                }
                else {
                    value = converter.write(value, key);
                }
                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);
                var stringifiedAttributes = '';
                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue;
                    }
                    stringifiedAttributes += '; ' + attributeName;
                    if (attributes[attributeName] === true) {
                        continue;
                    }
                    stringifiedAttributes += '=' + attributes[attributeName];
                }
                return (document.cookie = key + '=' + value + stringifiedAttributes);
            }
            if (!key) {
                result = {};
            }
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;
            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');
                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }
                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                        cookie.replace(rdecode, decodeURIComponent);
                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        }
                        catch (e) { }
                    }
                    if (key === name) {
                        result = cookie;
                        break;
                    }
                    if (!key) {
                        result[name] = cookie;
                    }
                }
                catch (e) { }
            }
            return result;
        };
        api.set = api;
        api.get = function (key) {
            return api.call(api, key);
        };
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};
        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };
        api.withConverter = init;
        return api;
    }
    return init(function () { });
}));
var cookies = cookieApi;

var localeNames = {
    "id-id": "Bahasa Indonesia",
    "ms-my": "Bahasa Malaysia",
    "ca-es": "Català",
    "cs-cz": "Čeština",
    "da-dk": "Dansk",
    "de-de": "Deutsch",
    "de-at": "Deutsch (Österreich)",
    "de-ch": "Deutsch (Schweiz)",
    "et-ee": "Eesti",
    "en-au": "English (Australia)",
    "en-ca": "English (Canada)",
    "en-in": "English (India)",
    "en-ie": "English (Ireland)",
    "en-my": "English (Malaysia)",
    "en-nz": "English (New Zealand)",
    "en-sg": "English (Singapore)",
    "en-za": "English (South Africa)",
    "en-gb": "English (United Kingdom)",
    "en-us": "English (United States)",
    "es-es": "Español (España)",
    "es-mx": "Español (México)",
    "eu-es": "Euskara",
    "fr-fr": "Français",
    "fr-be": "Français (Belgique)",
    "fr-ca": "Français (Canada)",
    "fr-ch": "Français (Suisse)",
    "gl-es": "Galego",
    "hr-hr": "Hrvatski",
    "is-is": "Íslenska",
    "it-it": "Italiano",
    "it-ch": "italiano (Svizzera)",
    "lv-lv": "Latviešu",
    "lt-lt": "Lietuvių",
    "hu-hu": "Magyar",
    "nl-nl": "Nederlands",
    "nl-be": "Nederlands (België)",
    "nb-no": "Norsk",
    "pl-pl": "Polski",
    "pt-br": "Português (Brasil)",
    "pt-pt": "Português (Portugal)",
    "ro-ro": "Română",
    "sk-sk": "Slovenčina",
    "sl-si": "Slovenski",
    "fi-fi": "Suomi",
    "sv-se": "Svenska",
    "vi-vn": "Tiếng Việt",
    "tr-tr": "Türkçe",
    "el-gr": "Ελληνικά",
    "bg-bg": "Български",
    "kk-kz": "Қазақ",
    "ru-ru": "Русский",
    "sr-cyrl-rs": "Српски (Србија и Црна Гора)",
    "sr-latn-rs": "Srpski (Srbija i Crna Gora)",
    "uk-ua": "Україньска",
    "he-il": "עברית‏",
    "ar-sa": "العربية",
    "hi-in": "हिंदी",
    "th-th": "ไทย",
    "ko-kr": "한국어",
    "zh-tw": "中文 (台灣)",
    "zh-cn": "中文 (中华人民共和国)",
    "zh-hk": "中文 (香港特別行政區)",
    "ja-jp": "日本語"
};
var pathLocaleRegex = /^\/([a-z]{2}-(?:[a-z]{4}-)?[a-z]{2})(\/|$)/i;
var localeCookieName = 'MarketplaceSelectedLocale';
function getLocaleFromPath(path) {
    var match = pathLocaleRegex.exec(path);
    return match === null ? 'en-us' : match[1];
}
function removeLocaleFromPath(path) {
    return path.replace(pathLocaleRegex, '/');
}
function replaceLocaleInPath(path, locale) {
    return path.replace(pathLocaleRegex, "/" + locale + "$2");
}
function setDocumentLocale() {
    var userLocale = getLocaleFromPath(location.pathname);
    msDocs.data.userLocale = userLocale;
    msDocs.data.userLocaleName = localeNames[userLocale];
    var contentLocale = msDocs.data.contentLocale;
    var contentDir = msDocs.data.contentDir;
    var userDir = 'ltr';
    if (msDocs.data.rtl[userLocale]) {
        userDir = 'rtl';
    }
    $$1('html').attr('lang', userLocale).attr('dir', userDir);
    $$1(function () {
        $$1('html').attr('lang', contentLocale).attr('dir', contentDir);
        $$1('body').attr('lang', userLocale).attr('dir', userDir);
        if (userDir === 'rtl') {
            $$1('#lca-cookie-notification').attr({ 'lang': 'en-us', 'dir': 'ltr' });
            $$1('.az_h').attr({ 'lang': 'en-us', 'dir': 'ltr' });
        }
        if (contentLocale !== userLocale && /^en/.test(contentLocale) && !/^en/.test(userLocale)
            && (msDocs.data.pageTemplate === 'ContentPage' || msDocs.data.pageTemplate === 'Conceptual')) {
            showDisclaimer(loc['disclaimer.text']);
        }
        setupLocaleLink(userLocale);
    });
}
function setLocaleCookie(locale) {
    cookies.set(localeCookieName, locale, { expires: 365 * 10 });
}
function setupLocaleLink(userLocale) {
    var localeSelector = document.getElementById('locale-selector-link');
    if (!localeSelector) {
        return;
    }
    localeSelector.textContent = localeNames[userLocale];
    var path = "/" + userLocale + "/locale";
    localeSelector.href = path + "?target=" + encodeURIComponent(location.pathname + location.search + location.hash);
}

function parseQueryString(queryString) {
    var match;
    var pl = /\+/g;
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); };
    if (queryString === undefined) {
        queryString = location$1.search;
    }
    queryString = queryString.substring(1);
    var urlParams = {};
    while (match = search.exec(queryString)) {
        urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
}
function toQueryString(obj) {
    var parts = [];
    for (var name_1 in obj) {
        if (obj.hasOwnProperty(name_1) && obj[name_1] !== '' && obj[name_1] !== null && obj[name_1] !== undefined) {
            parts.push(encodeURIComponent(name_1) + '=' + encodeURIComponent(obj[name_1]));
        }
    }
    return parts.join('&');
}

var searchMap = parseQueryString(location.search);
var hashMap = parseQueryString(location.hash);
function getParam(name, type) {
    if (type === 'meta') {
        var selector = "meta[name=\"" + name + "\"]";
        var metaTag = document$1.querySelector(selector);
        return metaTag ? metaTag.content : undefined;
    }
    var frag = type === 'hash' ? window$1.location.hash : window$1.location.search;
    if (frag.length > 1) {
        frag = frag.substring(1);
        var cmpstring = name + "=";
        var cmplen = cmpstring.length;
        var temp = frag.split("&");
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].substr(0, cmplen) == cmpstring) {
                return temp[i].substr(cmplen);
            }
        }
    }
    return undefined;
}
function getParams(name, type) {
    var arr = [];
    if (type === 'meta') {
        var selector = "meta[name=\"" + name + "\"]";
        var metaTags = document$1.querySelectorAll(selector);
        if (metaTags.length) {
            for (var i = 0; i < metaTags.length; i++) {
                arr.push(metaTags[i].content);
            }
        }
        return arr;
    }
    var frag = type === 'hash' ? window$1.location.hash : window$1.location.search;
    if (frag.length > 1) {
        frag = frag.substring(1);
        var cmpstring = name + "=";
        var cmplen = cmpstring.length;
        var temp = frag.split("&");
        for (var i_1 = 0; i_1 < temp.length; i_1++) {
            if (temp[i_1].substr(0, cmplen) == cmpstring) {
                arr.push(temp[i_1].substr(cmplen));
            }
        }
    }
    return arr;
}
function installGetParam() {
    msDocs.functions.getParam = getParam;
    msDocs.functions.getParams = getParams;
}

function loadLibrary(url, globalName) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = function () { reject("Failed to load " + url); };
        (document.body || document.head).appendChild(script);
    }).then(function () {
        if (globalName === undefined) {
            return undefined;
        }
        if (window[globalName] === undefined) {
            throw new Error(url + " loaded successfully but " + globalName + " is undefined.");
        }
        return window[globalName];
    });
}

var contentTags = {
    id: 'id',
    name: 'name',
    type: 'type',
    scenario: 'scn',
    scenarioStep: 'scnstp',
    scenarioStepNumber: 'subnm'
};
var contentAttrs = {
    id: 'data-bi-id',
    name: 'data-bi-name',
    type: 'data-bi-type',
    scenario: 'data-bi-scn',
    scenarioStep: 'data-bi-scnstp',
    scenarioStepNumber: 'data-bi-subnm'
};
var jsllUrl = 'https://az725175.vo.msecnd.net/scripts/jsll-4.js';
var jsllConfig = {
    syncMuid: true,
    isLoggedIn: false,
    shareAuthStatus: true,
    authMethod: 1,
    autoCapture: {
        pageView: true,
        onLoad: true,
        click: true,
        scroll: true,
        resize: true,
        jsError: true,
        addin: true,
        msTags: false,
        perf: true,
        assets: false,
        lineage: true
    },
    coreData: {
        appId: {
            'docs.microsoft.com': 'Docs',
            'review.docs.microsoft.com': 'DocsReview',
            'docs.azure.cn': 'DocsCN'
        }[location.hostname] || 'JsllTest',
        pageTags: {}
    }
};
var tagMapping = {
    'ms.assetid': 'asst',
    'audience': 'aud',
    'ms.author': 'pgauth',
    'ms.contentsource': 'pgpubl',
    'document_id': 'pageName',
    'pagetype': 'pageType',
    'ms.topic': 'pgtop'
};
var notifyJsllReady;
function track() {
    return loadLibrary(jsllUrl, 'awa')
        .then(function (awa) {
        mapTags();
        jsllConfig.coreData.pageTags.market = msDocs.data.userLocale;
        awa.init(jsllConfig);
        trackUnhandledExceptionsUsingWedcs(awa);
        trackSelectElementChange(awa);
        trackPageFocus(awa);
        trackPageVisibility(awa);
        trackPrint(awa);
        trackSecondaryContentScroll(awa);
        trackUnload(awa);
        trackUHFSearch(awa);
        trackCtrlF(awa);
        notifyJsllReady(awa);
    });
}
function mapTags() {
    var metas = document$1.querySelectorAll('meta');
    for (var i = 0; i < metas.length; i++) {
        var meta = metas.item(i);
        var awaTag = tagMapping[meta.name];
        if (awaTag) {
            jsllConfig.coreData.pageTags[awaTag] = meta.content;
        }
    }
}
var jsllReady = new Promise(function (resolve) { return notifyJsllReady = resolve; });
function wedcs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof window$1.MscomCustomEvent === 'function') {
        window$1.MscomCustomEvent.apply(window$1, args);
    }
}
function getName(element) {
    while (element && element.hasAttribute && !element.hasAttribute(contentAttrs.name)) {
        element = element.parentElement;
    }
    if (!element) {
        return '';
    }
    return element.getAttribute(contentAttrs.name);
}
function trackSelectElementChange(awa) {
    function handleChange(event) {
        if (!event.isTrusted || !(event.target instanceof HTMLSelectElement) || !event.target.hasAttribute(contentAttrs.name)) {
            return;
        }
        awa.ct.capturePageAction(event.target, {
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.OTHER,
            content: {
                event: 'select-value-changed',
                name: getName(event.target),
                value: event.target.value
            }
        });
        wedcs('ms.switcheventtime', new Date().getTime().toString(), 'ms.switcher', event.target.getAttribute(contentAttrs.name).replace(/^select-/, ''), 'ms.switchervalue', event.target.value);
    }
    document$1.addEventListener('change', handleChange, { passive: true });
}
function trackPageFocus(awa) {
    var previousType = '';
    function reportFocusChanged(event) {
        if (!event.isTrusted || previousType === event.type) {
            return;
        }
        previousType = event.type;
        awa.ct.captureContentPageAction({
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.OTHER,
            content: {
                event: 'page-focus-changed',
                value: event.type
            }
        });
        wedcs('ms.focuseventtime', new Date().getTime().toString(), 'ms.focusorblue', event.type === 'focus' ? 'Focused' : 'Blured');
    }
    var timeout = 0;
    function handleFocusedChanged(event) {
        clearTimeout(timeout);
        timeout = setTimeout(function () { return reportFocusChanged(event); }, 50);
    }
    window$1.addEventListener('focus', handleFocusedChanged, { passive: true });
    window$1.addEventListener('blur', handleFocusedChanged, { passive: true });
}
function trackPageVisibility(awa) {
    function visibilityChanged(event) {
        awa.ct.captureContentPageAction({
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.OTHER,
            content: {
                event: 'page-visibility-changed',
                value: document$1.hidden ? 'hidden' : 'visible'
            }
        });
        wedcs('ms.page-visibility-changed', document$1.hidden ? 'hidden' : 'visible');
    }
    function attach() {
        document$1.addEventListener('visibilitychange', visibilityChanged, { passive: true });
    }
    document$1.readyState === 'interactive' || document$1.readyState === 'complete' ? attach() : document$1.addEventListener('DOMContentLoaded', attach);
}
function trackPrint(awa) {
    if (!window$1.matchMedia) {
        return;
    }
    window$1.matchMedia('print').addListener(function (m) {
        if (!m.matches) {
            return;
        }
        awa.ct.captureContentPageAction({
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.PRINT,
            content: {
                event: 'print'
            }
        });
        wedcs('ms.print', 'print');
    });
}
function trackSecondaryContentScroll(awa) {
    function reportScroll(event) {
        if (!event.isTrusted || !(event.target instanceof HTMLElement)) {
            return;
        }
        var _a = event.target.getBoundingClientRect(), width = _a.width, height = _a.height;
        var _b = event.target, scrollLeft = _b.scrollLeft, scrollTop = _b.scrollTop, scrollWidth = _b.scrollWidth, scrollHeight = _b.scrollHeight;
        awa.ct.capturePageAction(event.target, {
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.OTHER,
            content: {
                event: 'secondary-content-scroll',
                name: getName(event.target),
                viewPortWidth: Math.floor(width),
                viewPortHeight: Math.floor(height),
                contentWidth: Math.floor(scrollWidth),
                contentHeight: Math.floor(scrollHeight),
                horizontalOffset: Math.floor(scrollLeft),
                verticalOffset: Math.floor(scrollTop)
            }
        });
    }
    function handleScroll(event) {
        if (event.target === document$1) {
            return;
        }
        var target = event.target;
        clearTimeout(target.reportScrollTimeout);
        target.reportScrollTimeout = setTimeout(function () { return reportScroll(event); }, 100);
    }
    window$1.addEventListener('scroll', handleScroll, { passive: true, capture: true });
}
function trackUnload(awa) {
    var anchor = false;
    function handleUnload(event) {
        awa.ct.captureContentPageAction({
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.OTHER,
            content: {
                event: 'unload',
                anchor: anchor
            }
        });
        wedcs('ms.pageclosuretime', new Date().getTime().toString(), 'ms.pageclosure', anchor ? 'redirection' : 'closure');
    }
    function handleClick(event) {
        if (event.target instanceof HTMLAnchorElement) {
            anchor = true;
            setTimeout(function () { return anchor = false; });
        }
    }
    function handleKeyDown(event) {
        if (event.target instanceof HTMLAnchorElement) {
            anchor = true;
            setTimeout(function () { return anchor = false; });
        }
    }
    window$1.addEventListener('keydown', handleKeyDown, { capture: true, passive: true });
    window$1.addEventListener('click', handleClick, { capture: true, passive: true });
    window$1.addEventListener('beforeunload', handleUnload, { passive: true });
}
function trackUHFSearch(awa) {
    function handleSubmit(event) {
        var form = event.target;
        if (form.id !== 'searchForm') {
            return;
        }
        var term = form.querySelector('input[name="search"]').value;
        var submitButtonIsFocused = form.querySelector('#search:focus') !== null;
        awa.ct.capturePageAction(form, {
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.SEARCH,
            content: {
                event: 'uhf-search',
                value: term,
                submitButton: submitButtonIsFocused
            }
        });
        wedcs('ms.search.term', term, 'ms.search.formSubmitType', submitButtonIsFocused ? '1' : '0');
    }
    window$1.addEventListener('submit', handleSubmit, { passive: true, capture: true });
}
function trackUnhandledExceptionsUsingWedcs(awa) {
    function handleError(event) {
        var args = [];
        if (event.filename === undefined || event.message === undefined) {
            return;
        }
        if (event.error !== null && event.error !== undefined) {
            args.push('ms.error', event.error.toString().substring(0, 100));
        }
        args.push("ms.errormsg", event.message.substring(0, 30));
        args.push("ms.errorsrc", event.filename);
        args.push("ms.errorlineno", event.lineno.toString(10));
        args.push("ms.errorcolno", event.colno.toString(10));
        wedcs.apply(void 0, args);
    }
    window$1.addEventListener('error', handleError, { passive: true });
}
function trackCtrlF(awa) {
    function handleKeyDown(event) {
        if (event.isTrusted && event.keyCode === 70 && event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
            awa.ct.captureContentPageAction({
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.OTHER,
                content: {
                    event: 'ctrl-f'
                }
            });
            wedcs('ms.ctrl-f', 'ctrl+f');
        }
    }
    window$1.addEventListener('keydown', handleKeyDown, { passive: true });
}

function uhf() {
    var updateSearchForm = function () {
        var $searchForm = $$1('#searchForm');
        $searchForm.attr('action', 'https://docs.microsoft.com/' + msDocs.data.userLocale + '/search/index')
            .find('#search').removeAttr('name');
        var scopes = msDocs.functions.getParam('scope', 'meta');
        var hideScope = msDocs.functions.getParam('hideScope', 'meta');
        var isSearchPage = msDocs.functions.getParam('ms.pagetype', 'meta') === 'search';
        if (isSearchPage) {
            var queryString = parseQueryString();
            scopes = queryString.scope;
            var searchValue = queryString.search;
            if (searchValue !== undefined && searchValue.length > 0) {
                $searchForm.find('input[name="search"]').val(searchValue);
            }
        }
        if (hideScope === 'true') {
            scopes = undefined;
        }
        if (scopes != undefined) {
            var scopesArr = scopes.split(", ");
            if (scopesArr.length) {
                var searchScopeInfo = "Search filter set to ";
                var searchScopeAction = "Tap to remove filter.";
                var scopeStr = scopesArr[scopesArr.length - 1];
                var $link = $$1("<a>")
                    .addClass("searchScope")
                    .attr("href", "#")
                    .on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $$1(this).remove();
                    $searchForm.find('input[name="scope"]').remove();
                    $searchForm.find('input[name="search"]').animate({ 'padding-left': '10px' }, 'fast');
                    jsllReady.then(function (awa) { return awa.ct.capturePageAction(e.target, {
                        actionType: awa.actionType.CLICKLEFT,
                        behavior: awa.behavior.OTHER,
                        content: {
                            event: 'uhf-search-scope-removed',
                            name: 'uhf-search-scope-link',
                            value: scopeStr
                        }
                    }); });
                    wedcs('ms.uhf-search-scope-removed', scopeStr);
                })
                    .attr("title", searchScopeInfo + " '" + scopeStr + "'. " + searchScopeAction)
                    .text(scopeStr);
                $searchForm.append($link);
                $searchForm.find('input[name="search"]').css("padding-left", ($link.width() + 34) + 'px');
                var $input = $$1("<input>")
                    .attr('type', 'hidden')
                    .attr('name', 'scope')
                    .attr('value', scopeStr);
                $searchForm.append($input);
            }
        }
    };
    var loadUhfCss = function (uhfData, callback) {
        if (!uhfData || !uhfData.cssIncludes || !uhfData.cssIncludes.length) {
            return;
        }
        if (document$1.createStyleSheet) {
            for (var i = 0; i < uhfData.cssIncludes.length; i++) {
                document$1.createStyleSheet(uhfData.cssIncludes[i]);
            }
        }
        else {
            var $head = $$1("head");
            for (var i = 0; i < uhfData.cssIncludes.length; i++) {
                $head.append($$1('<link rel="stylesheet" href="' + uhfData.cssIncludes[i] + '" type="text/css" media="all" />'));
            }
        }
        var cssUrl = uhfData.cssIncludes[0];
        var img = document$1.createElement('img');
        img.onerror = function () {
            if (callback) {
                callback(uhfData);
            }
        };
        img.src = cssUrl;
    };
    var getUhfData = function () {
        if (msDocs.data.brand === 'azure') {
            return;
        }
        var uhfHeaderId = msDocs.functions.getParam('uhfHeaderId', 'meta');
        if (!uhfHeaderId) {
            uhfHeaderId = 'MSDocsHeader-DocsL1';
        }
        var uhfUrl = 'https://docs.microsoft.com/api/GetUHF?locale=' + msDocs.data.userLocale + '&headerId=' + uhfHeaderId + '&footerId=MSDocsFooter';
        $$1.ajax({
            url: uhfUrl,
            dataType: 'json',
            timeout: 10000
        })
            .done(function (data, textStatus, jqXHR) {
            var uhfData = jqXHR.responseJSON;
            loadUhfCss(uhfData, function (uhfData) {
                $$1(function () {
                    $$1('#uhfPlaceHolder').replaceWith($$1(uhfData.headerHTML));
                    updateSearchForm();
                    var shellOptions = {
                        as: {
                            callback: function () { }
                        }
                    };
                    if (window$1.msCommonShell) {
                        window$1.msCommonShell.load(shellOptions);
                    }
                    else {
                        window$1.onShellReadyToLoad = function () {
                            window$1.onShellReadyToLoad = null;
                            window$1.msCommonShell.load(shellOptions);
                        };
                    }
                });
            });
        });
    };
    getUhfData();
}

var fetchToExport = typeof fetch == 'function' ? fetch : function (url, options) {
    options = options || {};
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(options.method || 'get', url);
        for (var i in options.headers) {
            request.setRequestHeader(i, options.headers[i]);
        }
        request.withCredentials = options.credentials == 'include';
        request.onload = function () {
            resolve(response());
        };
        request.onerror = reject;
        request.send(options.body);
        function response() {
            var keys = [], all = [], headers = {}, header;
            request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, (function (m, key, value) {
                keys.push(key = key.toLowerCase());
                all.push([key, value]);
                header = headers[key];
                headers[key] = header ? header + "," + value : value;
            }));
            return {
                ok: (request.status / 200 | 0) == 1,
                status: request.status,
                statusText: request.statusText,
                url: request.responseURL,
                clone: response,
                text: function () { return Promise.resolve(request.responseText); },
                json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
                xml: function () { return Promise.resolve(request.responseXML); },
                blob: function () { return Promise.resolve(new Blob([request.response])); },
                headers: {
                    keys: function () { return keys; },
                    entries: function () { return all; },
                    get: function (n) { return headers[n.toLowerCase()]; },
                    has: function (n) { return n.toLowerCase() in headers; }
                }
            };
        }
    });
};

var apiBase = 'https://docs.microsoft.com/api/';
var apiTimeout = 30 * 1000;
function fetchPlatform(platform) {
    return fetchWithTimeout(apiBase + "monikers/platforms/" + encodeURIComponent(platform))
        .then(function (response) { return response.json(); })
        .then(function (platform) { return flattenPlatform(platform); });
}
function search(platform, _a) {
    var moniker = _a.moniker, term = _a.term;
    var url = apiBase + "apibrowser/" + platform + "/search?api-version=0.2&search=" + encodeURIComponent(term);
    if (moniker !== '') {
        url += "&$filter=monikers/any(t: t eq '" + encodeURIComponent(moniker) + "')";
    }
    return fetchWithTimeout(url).then(function (response) { return response.json(); });
}
function fetchNamespaces(platform, moniker) {
    var namespacesPath = platform === 'dotnet' ? 'namespaces' : 'modules';
    return fetchWithTimeout(apiBase + "apibrowser/" + encodeURIComponent(platform) + "/" + namespacesPath + "?moniker=" + encodeURIComponent(moniker) + "&api-version=0.2")
        .then(function (response) { return response.json(); });
}
function fetchFamilyByMoniker(moniker) {
    return fetchWithTimeout(apiBase + "monikers/families/getfamilybymoniker?moniker=" + encodeURIComponent(moniker) + "&api-version=0.2")
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(null);
    })
        .then(function (_a) {
        var family = _a.family;
        return flattenPlatform({ platformId: family.platform, displayName: family.platform, families: [family] });
    });
}
function flattenPlatform(platform) {
    var platformId = platform.platformId, displayName = platform.displayName, families = platform.families;
    var packages = [];
    var packagesByMoniker = {};
    var products = [];
    for (var i = 0; i < families.length; i++) {
        var family = families[i];
        for (var j = 0; j < family.products.length; j++) {
            var product = family.products[j];
            products.push(product);
            for (var k = 0; k < product.packages.length; k++) {
                var _a = product.packages[k], moniker = _a.moniker, displayName_1 = _a.displayName, versionDisplayName = _a.versionDisplayName, isDefault = _a.isDefault;
                var pkg = { platform: platform, family: family, product: product, moniker: moniker, displayName: displayName_1, versionDisplayName: versionDisplayName, isDefault: isDefault };
                packages.push(pkg);
                packagesByMoniker[pkg.moniker] = pkg;
            }
        }
    }
    return { platformId: platformId, displayName: displayName, families: families, products: products, packages: packages, packagesByMoniker: packagesByMoniker };
}
var fetchWithTimeout = function (url, init) {
    return new Promise(function (resolve, reject) {
        fetchToExport(url, init).then(resolve, reject);
        setTimeout(function () { return reject('timeout'); }, apiTimeout);
    });
};

var pageMonikers = {};
var hasPageMonikers = false;
function readPageMonikers() {
    var tags = document$1.querySelectorAll('meta[name=monikers]');
    hasPageMonikers = tags.length > 0;
    for (var i = 0; i < tags.length; i++) {
        pageMonikers[tags.item(i).content] = true;
    }
}
readPageMonikers();
var monikerStyle = document$1.createElement('style');
document$1.head.appendChild(monikerStyle);
var monikerDisclaimer = null;
function updateMonikerSpecificContent() {
    var moniker = parseQueryString().view;
    if (moniker === undefined) {
        return;
    }
    $$1(function () {
        if (monikerDisclaimer) {
            monikerDisclaimer.parentElement.removeChild(monikerDisclaimer);
            monikerDisclaimer = null;
        }
        if (hasPageMonikers && !pageMonikers[moniker]) {
            monikerDisclaimer = showDisclaimer(loc['disclaimer.moniker']);
        }
    });
    if (!pageMonikers[moniker]) {
        return;
    }
    monikerStyle.textContent = "\n        [data-moniker]:not([data-moniker~='" + moniker + "']) {\n            display: none;\n        }\n    ";
    var links = document$1.querySelectorAll("a[href*='view=']");
    var i = links.length;
    while (i--) {
        var a = links.item(i);
        if (a.search === '') {
            continue;
        }
        var query = parseQueryString(a.search);
        if (query.view === undefined) {
            continue;
        }
        query.view = moniker;
        a.search = toQueryString(query);
    }
}
function switchView(moniker, isClientSide) {
    var args = parseQueryString();
    if (args.view === moniker) {
        return;
    }
    args.view = moniker;
    var queryString = '?' + toQueryString(args);
    var url = location$1.protocol + "//" + location$1.host + location$1.pathname + queryString + location$1.hash;
    if (isClientSide) {
        history.pushState(args, document$1.title, url);
        updateMonikerSpecificContent();
    }
    else {
        location$1.href = url;
    }
}
var fallbackDisclaimer;
function displayMonikerFallbackMessage() {
    if (fallbackDisclaimer) {
        fallbackDisclaimer.parentElement.removeChild(fallbackDisclaimer);
        fallbackDisclaimer = null;
    }
    var moniker = parseQueryString().viewFallbackFrom;
    if (!moniker) {
        return Promise.resolve();
    }
    return fetchFamilyByMoniker(moniker)
        .then(function (platform) { return platform.packagesByMoniker[moniker].displayName; }, function () { return moniker; })
        .then(function (displayName) {
        fallbackDisclaimer = showDisclaimer(loc.monikerFallback.replace('{0}', displayName));
    });
}

var breakTextRegexDots = /([A-Z]\.|[a-z]\.)([A-Z]|[a-z])/g;
var breakTextRegexCase = /([a-z])([A-Z]+[a-z])/g;
var breakTextReplace = '$1\u200B$2';
var unbreakTextRegex = /\u200B/g;
function breakText(str) {
    if (str && str.length) {
        return str.replace(breakTextRegexDots, breakTextReplace).replace(breakTextRegexCase, breakTextReplace);
    }
    return str;
}
function unbreakText(str) {
    return str.replace(unbreakTextRegex, '');
}
function cleanText(value) {
    if (value && value.length) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/&amp;lrm;/g, '&lrm;');
    }
    return value;
}
var htmlEscapes = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    "'": '&#39'
};
var reUnescapedHtml = /[&<>"']/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape$1(string) {
    return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, function (chr) { return htmlEscapes[chr]; })
        : string;
}

function getPdfUrl(pdfName) {
    var urlTemplate = getParam('pdf_url_template', 'meta');
    if (urlTemplate !== undefined) {
        var branchName = cookies.get('CONTENT_BRANCH');
        if (branchName === undefined) {
            branchName = 'live';
        }
        var url = urlTemplate.replace(/\{branchName\}/, branchName);
        url = url.replace(/\{pdfName\}/, pdfName);
        return url;
    }
    return null;
}
function renderPdfLink(pdfName) {
    var url = getPdfUrl(pdfName);
    if (url === null) {
        return;
    }
    var holder = document$1.querySelector('.pdfDownloadHolder');
    if (!holder) {
        return;
    }
    var a = document$1.createElement('a');
    a.href = url;
    a.textContent = loc.downloadPdf;
    a.setAttribute('ms.cmpnm', 'downloadPdf');
    a.setAttribute(contentAttrs.name, 'downloadPdf');
    holder.style.display = 'block';
    holder.appendChild(a);
}

function normalizeToc(toc) {
    if (Array.isArray(toc)) {
        return toc;
    }
    if (Array.isArray(toc.items)) {
        return toc.items;
    }
    return [];
}
function toc() {
    var urlTocQueryName = 'toc';
    var urlTocMetaName = 'toc_rel';
    var urlBcQueryName = 'bc';
    var urlBcMetaName = 'breadcrumb_path';
    var pagetypeMetaName = 'pagetype';
    var selectedClass = 'selected';
    var selectedHolderClass = 'selectedHolder';
    var rotateClass = 'rotate';
    var noSubsClass = 'noSubs';
    var noSibsClass = 'noSibs';
    var filterClassName = 'tocFilter';
    var emptyFilterClassName = 'emptyFilter';
    var emptyFilterMessageClassName = 'emptyFilterMessage';
    var hideFocusClass = 'hideFocus';
    var groupClass = 'group';
    var tocHolderSelector = '.toc';
    var filterHolderSelector = '.filterHolder';
    var breadcrumbClass = 'breadcrumbs';
    var eventNamespace = 'msDocs';
    var mTocSubNodeIndent = '&nbsp;&nbsp;&nbsp;';
    var noLinkClass = 'noLink';
    var mTocDropdownSelector = '#menu-nav > .mobilenavi > select';
    var isTouchEvent = false;
    var timeout = 10000;
    var otherTocDelay = 510;
    var relativeCanonicalUrl = '';
    var relativeCanonicalUrlNoQuery = '';
    var relativeCanonicalUrlNoQueryWithHash;
    var relativeCanonicalUrlUniformIndexWithHash;
    var relativeCanonicalUrlUniformIndex = '';
    var tocUrl = '';
    var tocFolder = '';
    var bcUrl = '';
    var bcFolder = '';
    var locale = '';
    var locationFolder = '';
    var $savedToc;
    var tocJson = [];
    var nodes_to_expand = [];
    var hasNodesToExpand = false;
    var tocQueryUrl = msDocs.functions.getParam(urlTocQueryName);
    var tocMetaUrl = msDocs.functions.getParam(urlTocMetaName, 'meta');
    var hasMoniker = false;
    var view = msDocs.functions.getParam('view');
    var monikerParams = '';
    if (view && view.length) {
        hasMoniker = true;
        view = view.toLowerCase();
        view = view.replace(/[^\w.|-]+/g, '');
        monikerParams = 'view=' + view;
    }
    var bcQueryUrl = msDocs.functions.getParam(urlBcQueryName);
    if (bcQueryUrl) {
        bcQueryUrl = decodeURIComponent(bcQueryUrl);
    }
    var bcMetaUrl = msDocs.functions.getParam(urlBcMetaName, 'meta');
    var pagetype = msDocs.functions.getParam(pagetypeMetaName, 'meta');
    var tocBestMatch = [];
    var tocFinished = $$1.Deferred();
    var bcFinished = $$1.Deferred();
    function scrollSelectedNodeIntoView() {
        var selectedNode = document$1.querySelector(".toc ." + selectedClass);
        if (selectedNode === null) {
            return;
        }
        var alignToTop = false;
        selectedNode.scrollIntoView(alignToTop);
    }
    tocFinished.then(function () { return setTimeout(scrollSelectedNodeIntoView); });
    var resolveRelativePath = function (path, folder) {
        if (!path || !path.length) {
            return path;
        }
        if (typeof folder !== 'string') {
            folder = locationFolder;
        }
        var firstChar = path.charAt(0);
        if (firstChar === '/') {
            if ((path.charAt(6) === '/') && (path.charAt(3) === '-')) {
                return path;
            }
            return '/' + locale + path;
        }
        if ((path.substr(0, 7) === 'http://') || (path.substr(0, 8) === 'https://')) {
            return path;
        }
        if (firstChar !== '.') {
            return '/' + locale + folder + '/' + path;
        }
        if (path.substr(0, 3) === '../') {
            return resolveRelativePath(path.substr(3), getFolder(folder));
        }
        if (path.substr(0, 2) === './') {
            return '/' + locale + folder + '/' + path.substr(2);
        }
        return path;
    };
    var removeQueryString = function (path) {
        if (path && path.length) {
            var index = path.indexOf('?');
            if (index > 0) {
                var hashIndex = path.indexOf('#');
                if (hashIndex === -1) {
                    path = path.substring(0, index);
                }
                else {
                    path = path.substring(0, index) + path.substring(hashIndex);
                }
            }
        }
        return path;
    };
    var getUniformIndex = function (path) {
        if (path && path.length) {
            path = removeQueryString(path);
            if ((path.charAt(path.length - 1) == '/') || (path.indexOf('/#') > 0)) {
                return path;
            }
            var whackIndex = path.lastIndexOf('/');
            var indexIndex = path.indexOf('index', whackIndex);
            if (indexIndex > 0) {
                var hashIndex = path.indexOf('#');
                if (hashIndex === -1) {
                    if (indexIndex == path.length - 5) {
                        return path.substring(0, indexIndex);
                    }
                    var dotIndex = path.indexOf('.', whackIndex);
                    if (dotIndex > 0) {
                        path = path.substring(0, dotIndex);
                        if (path.substring(path.length - 6) == '/index') {
                            return path.substring(0, path.length - 5);
                        }
                    }
                }
                else {
                    var hash = path.substring(hashIndex);
                    path = path.substring(0, hashIndex);
                    if (indexIndex == path.length - 5) {
                        return path.substring(0, indexIndex) + hash;
                    }
                    var dotIndex = path.indexOf('.', whackIndex);
                    if (dotIndex > 0) {
                        path = path.substring(0, dotIndex);
                        if (path.substring(path.length - 6) == '/index') {
                            return path.substring(0, path.length - 5) + hash;
                        }
                    }
                }
            }
        }
        return '';
    };
    var getRelativeCanonicalUrl = function (removeTheQueryString) {
        var canonicalUrl = $$1('link[rel="canonical"]').attr('href');
        if (canonicalUrl && canonicalUrl.length) {
            if ((canonicalUrl.substr(0, 7) === 'http://') || (canonicalUrl.substr(0, 8) === 'https://')) {
                canonicalUrl = canonicalUrl.substring(canonicalUrl.indexOf('//') + 2);
                canonicalUrl = canonicalUrl.substring(canonicalUrl.indexOf('/'));
            }
        }
        else {
            canonicalUrl = document$1.location.pathname;
        }
        canonicalUrl = removeLocaleFromPath(canonicalUrl);
        if (removeTheQueryString) {
            canonicalUrl = removeQueryString(canonicalUrl);
        }
        return canonicalUrl;
    };
    var getFolder = function (path) {
        return path.substring(0, path.lastIndexOf('/'));
    };
    var thisIsMe = function (href) {
        if (href && href.length) {
            var hrefNoQuery = removeQueryString(removeLocaleFromPath(href.toLowerCase()));
            if (relativeCanonicalUrlNoQuery === hrefNoQuery) {
                return true;
            }
            if (relativeCanonicalUrlNoQueryWithHash && (relativeCanonicalUrlNoQueryWithHash === hrefNoQuery)) {
                return true;
            }
            if (relativeCanonicalUrlUniformIndex) {
                var hrefUniformIndex = getUniformIndex(hrefNoQuery);
                if (hrefUniformIndex.length > 0) {
                    if (relativeCanonicalUrlUniformIndex === hrefUniformIndex) {
                        return true;
                    }
                    if (relativeCanonicalUrlUniformIndexWithHash && (relativeCanonicalUrlUniformIndexWithHash === hrefUniformIndex)) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    msDocs.functions.toggleAriaExpanded = function (el) {
        var $el = $$1(el);
        var $tempEl;
        var tempHeight;
        var hasGrandKids = false;
        if ($el.attr('aria-expanded') == 'true') {
            $el.addClass(rotateClass).children('ul').each(function (i, el) {
                var $tempEl = $$1(el);
                $tempEl.css({ 'height': $tempEl.height() }).animate({ 'height': 0 }, 200, function () {
                    $$1(this).css('height', '');
                    $el.attr('aria-expanded', 'false').removeClass(rotateClass);
                });
            });
        }
        else {
            var $ulKids = $el.children('ul');
            $el.attr('aria-expanded', 'true');
            $ulKids.find('li').css('display', '');
            $ulKids.each(function (i, el) {
                var $tempEl = $$1(el);
                tempHeight = $tempEl.height();
                $tempEl.css({ 'height': '0' }).animate({ 'height': tempHeight }, 200, function () {
                    $$1(this).css('height', '');
                });
            });
        }
    };
    msDocs.functions.stopSomePropagation = function (e, direction) {
        switch (direction) {
            case 'top':
                if (isTouchEvent) {
                    if (e.offsetY > 20) {
                        e.stopPropagation();
                    }
                }
                else {
                    e.stopPropagation();
                }
                break;
            case 'left':
                if (isTouchEvent) {
                    if (e.offsetX > 15) {
                        e.stopPropagation();
                    }
                }
                else {
                    e.stopPropagation();
                }
                break;
        }
    };
    var drawToc = function (json) {
        var createTocNode = function (node, ul, nodeMap, isRoot) {
            var aNode;
            var href;
            var pieces;
            var aCleanTitle;
            var displayName;
            nodeMap.push(-1);
            ul.setAttribute('aria-treegrid', 'true');
            ul.setAttribute('onclick', 'msDocs.functions.stopSomePropagation(event, "top")');
            for (var i = 0; i < node.length; i++) {
                aNode = node[i];
                aCleanTitle = cleanText(aNode.toc_title);
                if (aNode.displayName && aNode.displayName.length) {
                    displayName = cleanText(aNode.displayName);
                }
                else {
                    displayName = "";
                }
                nodeMap[nodeMap.length - 1] = i;
                var nextNode = document$1.createElement('li');
                var titleHolder;
                if (aNode.href && aNode.href.length) {
                    href = aNode.href;
                    titleHolder = document$1.createElement('a');
                    if (i == 0) {
                        titleHolder.setAttribute('onclick', 'msDocs.functions.stopSomePropagation(event, "left")');
                    }
                    titleHolder.setAttribute('tabindex', '0');
                    if (aNode.thisIsMe) {
                        titleHolder.classList.add(selectedClass);
                        titleHolder.setAttribute('data-showme', 'true');
                        if (!nodeMap.length || (tocBestMatch.length < nodeMap.length)) {
                            tocBestMatch = nodeMap.slice(0);
                        }
                    }
                    if (hasMoniker || aNode.maintainContext) {
                        pieces = href.split('#');
                        titleHolder.setAttribute('href', pieces[0] + ((pieces[0].indexOf('?') > -1) ? '&' : '?') + (aNode.maintainContext ? maintainContextParams + (hasMoniker ? '&' : '') : '') + (hasMoniker ? monikerParams : '') + (pieces[1] ? '#' + pieces[1] : ''));
                    }
                    else {
                        titleHolder.setAttribute('href', href);
                    }
                }
                else {
                    titleHolder = document$1.createElement('span');
                }
                if (aNode.expanded) {
                    titleHolder.setAttribute('data-showme', 'true');
                }
                titleHolder.setAttribute('data-text', aCleanTitle.toLowerCase() + " " + displayName.toLowerCase());
                titleHolder.innerHTML = breakText(aCleanTitle);
                nextNode.appendChild(titleHolder);
                if (aNode.newGroup) {
                    nextNode.classList.add(groupClass);
                }
                if (aNode.children && aNode.children.length) {
                    nextNode.setAttribute('aria-expanded', 'false');
                    nextNode.setAttribute('tabindex', '0');
                    nextNode.setAttribute('aria-treeitem', 'true');
                    nextNode.setAttribute('onclick', 'event.stopPropagation();msDocs.functions.toggleAriaExpanded(this)');
                    var hasGrandKids = false;
                    for (var j = 0; j < aNode.children.length; j++) {
                        if (aNode.children[j].children && aNode.children[j].children.length) {
                            hasGrandKids = true;
                            break;
                        }
                    }
                    if (!hasGrandKids) {
                        nextNode.classList.add(noSubsClass);
                    }
                    var nextUL = document$1.createElement('ul');
                    createTocNode(aNode.children, nextUL, nodeMap.slice(0), false);
                    nextNode.appendChild(nextUL);
                }
                ul.appendChild(nextNode);
            }
        };
        var createFilter = function () {
            var $filter = $$1('<form>')
                .addClass(filterClassName)
                .submit(function (e) {
                e.preventDefault();
            })
                .append($$1('<input>')
                .attr('placeholder', loc['filter.placeholder'])
                .attr('aria-label', loc['filter.text'])
                .attr('type', 'search')
                .keypress(function (e) {
                if (e.which === 13) {
                    e.preventDefault();
                    return;
                }
            })
                .keyup(function () {
                filterToc(this);
            }))
                .append($$1('<a>')
                .attr('href', '#')
                .attr('title', loc.clearfilter)
                .addClass('clearInput')
                .html('<span class="screenReader">' + loc.clearfilter + '</span>')
                .on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                var ipt = $$1('.' + filterClassName + ' input[type=search]');
                ipt.val('');
                filterToc(ipt);
            }));
            var $noResults = $$1('<div>')
                .addClass(emptyFilterMessageClassName)
                .html(loc['no.results']);
            return [$filter, $noResults];
        };
        var maintainContextParams = urlTocQueryName + '=' + encodeURIComponent(tocUrl) + '&' + urlBcQueryName + '=' + encodeURIComponent(bcUrl);
        var toc = document$1.createElement('ul');
        createTocNode(json, toc, [], true);
        var $toc = $$1(toc);
        $toc.find('.' + selectedClass).parent().addClass(selectedHolderClass);
        $toc.find('[data-showme]').parents('li[aria-expanded="false"]').attr('aria-expanded', 'true');
        $toc.on('touchstart pointerdown MSPointerDown', function (e) {
            if (e.type == 'touchstart' || (((e.type == 'pointerdown') || (e.type == 'MSPointerDown')) && (e.originalEvent.pointerType == 'touch'))) {
                isTouchEvent = true;
                setTimeout(function () {
                    isTouchEvent = false;
                }, 700);
            }
        })
            .on('mousedown', function (e) {
            $$1(this).addClass(hideFocusClass);
        })
            .on('mouseup', function (e) {
            $$1(e.target).blur().parent().blur();
            $$1(this).removeClass(hideFocusClass);
        })
            .on('keydown', 'a', function (e) {
            if (e.which === 13) {
                document$1.location.href = $$1(e.target).attr('href');
                e.stopPropagation();
                return false;
            }
        })
            .on('keydown', 'li', function (e) {
            if (e.which === 13 && !$toc.hasClass(noSibsClass)) {
                e.stopPropagation();
                msDocs.functions.toggleAriaExpanded($$1(this));
            }
        });
        if (json.length == 1) {
            $toc.addClass(noSibsClass);
            $toc.children('li').attr('aria-expanded', 'true').off('click.' + eventNamespace).removeAttr('tabindex');
        }
        var arrfilter;
        if (!msDocs.data.useApiBrowserVersionPicker) {
            arrfilter = createFilter();
        }
        $$1(function () {
            $$1(tocHolderSelector).attr('role', 'application')[0].appendChild(toc);
            if (!msDocs.data.useApiBrowserVersionPicker) {
                $$1(filterHolderSelector).append(arrfilter);
            }
            tocFinished.resolve();
        });
    };
    var drawMToc = function (json) {
        var createMTocNode = function (node, indent, $mToc) {
            var aNode;
            var href;
            var pieces;
            for (var i = 0; i < node.length; i++) {
                aNode = node[i];
                $mToc
                    .append($$1('<option>')
                    .html(indent + cleanText(aNode.toc_title))
                    .ifThen((aNode.href && aNode.href.length), function () {
                    href = aNode.href;
                    if (hasMoniker || aNode.maintainContext) {
                        pieces = href.split('#');
                        this.attr('value', pieces[0] + ((pieces[0].indexOf('?') > -1) ? '&' : '?') + (aNode.maintainContext ? maintainContextParams + (hasMoniker ? '&' : '') : '') + (hasMoniker ? monikerParams : '') + (pieces[1] ? '#' + pieces[1] : ''));
                    }
                    else {
                        this.attr('value', href);
                    }
                    if (aNode.thisIsMe) {
                        this.attr('selected', 'selected');
                    }
                }, function () {
                    this.addClass(noLinkClass);
                }))
                    .ifThen((aNode.children && aNode.children.length), function () {
                    createMTocNode(aNode.children, indent + mTocSubNodeIndent, $mToc);
                });
            }
        };
        var maintainContextParams = urlTocQueryName + '=' + encodeURIComponent(tocUrl) + '&' + urlBcQueryName + '=' + encodeURIComponent(bcUrl);
        var $mToc = $$1('<select>')
            .on('change', function () {
            var target = $$1(this).find('option:selected').attr('value');
            if (target && target.length) {
                $$1(location).attr('href', target);
            }
        });
        createMTocNode(json, '', $mToc);
        $$1(function () {
            $$1(mTocDropdownSelector).replaceWith($mToc);
        });
    };
    var filterToc = function (inputField) {
        var val = cleanText($$1(inputField).val().toLowerCase());
        var $tocHolder = $$1(tocHolderSelector);
        var $filterHolder = $$1(filterHolderSelector);
        $filterHolder.removeClass(emptyFilterClassName);
        if (val && val.length) {
            $$1('.' + filterClassName).addClass('clearFilter');
            var resultIsEmpty = true;
            var $currentToc = $tocHolder.children('ul[aria-treegrid="true"]').detach();
            if (!$savedToc) {
                $savedToc = $currentToc.clone(true, true);
            }
            $currentToc.find('li').css('display', 'none').filter('[aria-expanded]').attr('aria-expanded', 'false');
            var $this;
            $currentToc.find('a, span').each(function (a) {
                $this = $$1(this);
                if ($this.attr('data-text').indexOf(val) !== -1) {
                    resultIsEmpty = false;
                    $this.parents('li').css('display', '').filter('[aria-expanded]').not($this.parent()).attr('aria-expanded', 'true');
                }
            });
            $tocHolder.append($currentToc);
            if (resultIsEmpty) {
                $filterHolder.addClass(emptyFilterClassName);
            }
        }
        else if ($savedToc) {
            $$1('.' + filterClassName).removeClass('clearFilter');
            $tocHolder.children('ul[aria-treegrid="true"]').replaceWith($savedToc);
            $savedToc = null;
        }
    };
    var getDataFromToc = function (tocJson, nodeName) {
        if (tocJson && tocJson.length && nodeName && nodeName.length && tocJson[0][nodeName] && tocJson[0][nodeName].length) {
            return tocJson[0][nodeName];
        }
        return null;
    };
    var gatherAllTocFiles = function (pageTocJson, pageTocFolder) {
        var uniRefTocUrl = getDataFromToc(tocJson, 'universal_ref_toc');
        var uniConTocUrl = getDataFromToc(tocJson, 'universal_conceptual_toc');
        var updateAllHrefs = function (json, folder, checkThisIsMe) {
            for (var i = 0; i < json.length; i++) {
                if (json[i].href) {
                    json[i].href = resolveRelativePath(json[i].href, folder);
                    if (checkThisIsMe && thisIsMe(json[i].href)) {
                        json[i].thisIsMe = true;
                    }
                    if (hasNodesToExpand) {
                        for (var j = 0; j < nodes_to_expand.length; j++) {
                            if (nodes_to_expand[j] === json[i].href) {
                                json[i].expanded = true;
                            }
                        }
                    }
                }
                if (json[i].children) {
                    updateAllHrefs(json[i].children, folder, checkThisIsMe);
                }
            }
        };
        var drawTocBasedOnWidth = function (completeTocJson) {
            tocJson = completeTocJson;
            if (window$1.matchMedia("(max-width: 768px)").matches) {
                drawMToc(completeTocJson);
                $$1(function () {
                    setTimeout(function () {
                        drawToc(completeTocJson);
                    }, otherTocDelay);
                });
            }
            else {
                drawToc(completeTocJson);
                $$1(function () {
                    setTimeout(function () {
                        drawMToc(completeTocJson);
                    }, otherTocDelay);
                });
            }
        };
        if (uniRefTocUrl || uniConTocUrl) {
            var uniRefTocFinished = $$1.Deferred();
            var uniConTocFinished = $$1.Deferred();
            uniRefTocUrl = resolveRelativePath(uniRefTocUrl, tocFolder);
            uniConTocUrl = resolveRelativePath(uniConTocUrl, tocFolder);
            if (uniRefTocUrl) {
                $$1.ajax({
                    url: uniRefTocUrl,
                    dataType: 'json',
                    timeout: timeout
                }).done(function (data, textStatus, jqXHR) {
                    var uniRefTocFolder = getFolder(removeLocaleFromPath(resolveRelativePath(uniRefTocUrl)));
                    var uniRefTocJson = normalizeToc(jqXHR.responseJSON);
                    updateAllHrefs(uniRefTocJson, uniRefTocFolder);
                    uniRefTocFinished.resolve(uniRefTocJson);
                }).fail(function () {
                    uniRefTocFinished.resolve(null);
                });
            }
            else {
                uniRefTocFinished.resolve(null);
            }
            if (uniConTocUrl) {
                $$1.ajax({
                    url: uniConTocUrl,
                    dataType: 'json',
                    timeout: timeout
                }).done(function (data, textStatus, jqXHR) {
                    var uniConTocFolder = getFolder(removeLocaleFromPath(resolveRelativePath(uniConTocUrl)));
                    var uniConTocJson = normalizeToc(jqXHR.responseJSON);
                    updateAllHrefs(uniConTocJson, uniConTocFolder);
                    uniConTocFinished.resolve(uniConTocJson);
                }).fail(function () {
                    uniConTocFinished.resolve(null);
                });
            }
            else {
                uniConTocFinished.resolve(null);
            }
            updateAllHrefs(pageTocJson, pageTocFolder, true);
            $$1.when(uniRefTocFinished, uniConTocFinished).then(function (uniRefTocJson, uniConTocJson) {
                var combinedToc;
                var matchAndMerge = function (hrefToMatch, json, childJson) {
                    for (var i = 0; i < json.length; i++) {
                        if (json[i].href === hrefToMatch) {
                            json[i] = childJson;
                            break;
                        }
                        if (json[i].children) {
                            matchAndMerge(hrefToMatch, json[i].children, childJson);
                        }
                    }
                };
                if (uniRefTocJson && uniConTocJson) {
                    uniRefTocJson[0].newGroup = true;
                    var hrefToMatch = pageTocJson[0].href;
                    matchAndMerge(hrefToMatch, uniRefTocJson, pageTocJson[0]);
                    combinedToc = uniConTocJson.concat(uniRefTocJson);
                }
                else if (uniConTocJson) {
                    pageTocJson[0].newGroup = true;
                    combinedToc = uniConTocJson.concat(pageTocJson);
                }
                else if (uniRefTocJson) {
                    uniRefTocJson[0].newGroup = true;
                    combinedToc = pageTocJson.concat(uniRefTocJson);
                }
                else {
                    combinedToc = pageTocJson;
                }
                drawTocBasedOnWidth(combinedToc);
            });
        }
        else {
            updateAllHrefs(pageTocJson, pageTocFolder, true);
            drawTocBasedOnWidth(pageTocJson);
        }
    };
    var getTocData = function (url, fallbackToMeta) {
        $$1.ajax({
            url: url,
            dataType: 'json',
            timeout: timeout
        })
            .done(function (data, textStatus, jqXHR) {
            tocUrl = resolveRelativePath(url);
            tocFolder = getFolder(removeLocaleFromPath(tocUrl));
            tocJson = normalizeToc(jqXHR.responseJSON);
            gatherAllTocFiles(tocJson, tocFolder);
            var pdfName = getDataFromToc(tocJson, 'pdf_name');
            if (pdfName && pdfName.length) {
                $$1(function () { return renderPdfLink(pdfName); });
            }
        })
            .fail(function () {
            if (fallbackToMeta && tocMetaUrl && tocMetaUrl.length) {
                getTocData(tocMetaUrl);
            }
            
        });
    };
    var extendBc = function () {
        var $breadcrumbs = $$1('.' + breadcrumbClass);
        var addNodeToBc = function (node, bestMatch) {
            var href = node.href;
            var aCleanTitle = breakText(cleanText(node.toc_title));
            var pieces;
            $breadcrumbs.ifThen(node.thisIsMe || !href || !href.length || (!bestMatch.length && (relativeCanonicalUrlUniformIndex === getUniformIndex(node.href).toLowerCase())), function () {
                this.append($$1('<li>').html(aCleanTitle));
            }, function () {
                href = resolveRelativePath(href, tocFolder);
                this.append($$1('<li>').append($$1('<a>')
                    .ifThen(hasMoniker, function () {
                    pieces = href.split('#');
                    this.attr('href', pieces[0] + ((pieces[0].indexOf('?') > -1) ? '&' : '?') + monikerParams + (pieces[1] ? '#' + pieces[1] : ''));
                }, function () {
                    this.attr('href', href);
                })
                    .html(aCleanTitle)));
            });
            if (bestMatch.length && node.children && node.children.length) {
                addNodeToBc(node.children[bestMatch.shift()], bestMatch);
            }
        };
        if (tocBestMatch.length) {
            addNodeToBc(tocJson[tocBestMatch.shift()], tocBestMatch);
        }
    };
    var drawBc = function (json) {
        var relativeCanonicaFolder = getFolder(relativeCanonicalUrlNoQuery) + '/';
        var bestMatch = [];
        var $breadcrumbs = $$1('<ul>').addClass(breadcrumbClass);
        var node;
        var nodeHrefNoQuery;
        var findBestMatch = function (json, nodeMap) {
            nodeMap.push(-1);
            for (var i = 0; i < json.length; i++) {
                node = json[i];
                nodeMap[nodeMap.length - 1] = i;
                if (!nodeMap.length || (bestMatch.length < nodeMap.length)) {
                    if (node.href) {
                        nodeHrefNoQuery = node.href.split('?')[0].toLowerCase();
                        if (relativeCanonicaFolder.indexOf(nodeHrefNoQuery) === 0 || relativeCanonicalUrlNoQuery === nodeHrefNoQuery) {
                            bestMatch = nodeMap.slice(0);
                        }
                    }
                }
                if (node.children && node.children.length) {
                    findBestMatch(node.children, nodeMap.slice(0));
                }
            }
        };
        var makeDisplayHtml = function ($breadcrumbs, node, bestMatch) {
            var href = node.homepage || node.href || '';
            var aCleanTitle = breakText(cleanText(node.toc_title));
            var pieces;
            $breadcrumbs.ifThen(!href || !href.length || (!bestMatch.length && (relativeCanonicalUrlUniformIndex === getUniformIndex(node.href).toLowerCase())), function () {
                this.append($$1('<li>').html(aCleanTitle));
            }, function () {
                href = resolveRelativePath(href, bcFolder);
                this.append($$1('<li>').append($$1('<a>')
                    .ifThen(hasMoniker, function () {
                    pieces = href.split('#');
                    this.attr('href', pieces[0] + ((pieces[0].indexOf('?') > -1) ? '&' : '?') + monikerParams + (pieces[1] ? '#' + pieces[1] : ''));
                }, function () {
                    this.attr('href', href);
                })
                    .html(aCleanTitle)));
            });
            if (bestMatch.length && node.children && node.children.length) {
                makeDisplayHtml($breadcrumbs, node.children[bestMatch.shift()], bestMatch);
            }
        };
        findBestMatch(json, []);
        if (bestMatch.length) {
            makeDisplayHtml($breadcrumbs, json[bestMatch.shift()], bestMatch);
        }
        $$1(function () {
            $$1('.' + breadcrumbClass).replaceWith($breadcrumbs);
            bcFinished.resolve();
        });
    };
    var getBcData = function (url, fallbackToMeta) {
        var hideBc = msDocs.functions.getParam('hide_bc', 'meta');
        if (hideBc === undefined || hideBc !== 'true') {
            $$1.ajax({
                url: resolveRelativePath(url),
                dataType: 'json',
                timeout: timeout
            })
                .done(function (data, textStatus, jqXHR) {
                bcFolder = getFolder(removeLocaleFromPath(bcUrl));
                drawBc(normalizeToc(jqXHR.responseJSON));
            })
                .fail(function () {
                if (fallbackToMeta && bcMetaUrl && bcMetaUrl.length) {
                    getBcData(bcMetaUrl);
                }
                
            });
        }
    };
    var initVersionPicker = function () {
        if (!hasMoniker || msDocs.data.useApiBrowserVersionPicker) {
            return;
        }
        var selectedClass = 'selected';
        var viewHref = '?' + monikerParams;
        var prefix = view.replace(/[0-9.]+(?:-.+)?/, '').substring(0, view.lastIndexOf('-'));
        var $versionPicker = $$1('.versionPicker');
        var $versionPickerSummary = $versionPicker.find('summary');
        var $versionPickerAnchors = $versionPicker.find('a');
        var $versionPickerFamily = $versionPicker.add($versionPickerSummary).add($versionPickerAnchors);
        var $versionLis = $versionPicker.find('li');
        var $tempLi;
        var tempHref;
        var $tempA;
        $versionLis.each(function () {
            $tempLi = $$1(this);
            $tempA = $tempLi.find('a');
            tempHref = $tempA.attr('href');
            if (tempHref.indexOf(prefix) === 6) {
                $tempLi.addClass('inGroup');
            }
            if (viewHref === tempHref) {
                $versionLis.removeClass(selectedClass);
                $tempLi.addClass(selectedClass);
                $versionPickerSummary.html($tempA.data('label').replace(/\|(.+)/, ': <span>$1</span>'));
                $versionPicker.addClass('multipleVersions');
            }
        });
        if (prefix === 'azurermps') {
            $$1('.versionPickerHelp').addClass('hasHelp');
        }
        else {
            $$1('.versionPickerHelp').removeClass('hasHelp');
        }
        var openDetails = function () {
            if (!$versionPicker.data('animating')) {
                $versionPicker.data('animating', true).attr('open', '').addClass('open');
                var $tempDetails = $versionPicker.clone().attr('open', '').insertAfter($versionPicker);
                var tempHeight = $tempDetails.find('ol').css('display', 'flex').height();
                $tempDetails.remove();
                $versionPicker.find('ol').css({ 'height': '0' }).animate({ 'height': tempHeight }, 200, function () {
                    $$1(this).css('height', '');
                    $versionPicker.data('animating', false);
                });
            }
        };
        var closeDetails = function () {
            if (!$versionPicker.data('animating')) {
                $versionPicker.data('animating', true);
                var $OL = $versionPicker.find('ol');
                $OL.css({ 'height': $OL.height() }).animate({ 'height': 0 }, 200, function () {
                    $$1(this).css('height', '');
                    $versionPicker.removeAttr('open').removeClass('open');
                    $versionPicker.data('animating', false);
                });
            }
        };
        $versionPickerSummary.click(function (e) {
            e.preventDefault();
            if ($$1(this).parent().hasClass('open')) {
                closeDetails();
            }
            else {
                openDetails();
            }
        });
        $versionPickerSummary.focus(function (e) {
            if (!$$1(this).parent().hasClass('open')) {
                openDetails();
            }
        });
        $versionPickerFamily.focus(function (e) {
            $$1(this).data('hasFocus', true);
        });
        $versionPickerFamily.blur(function (e) {
            $versionPickerFamily.data('hasFocus', false);
            setTimeout(function () {
                if (!$versionPickerFamily.filter(function () { return $$1(this).data('hasFocus') == true; }).length) {
                    closeDetails();
                }
            }, 10);
        });
        $versionPickerAnchors.click(function (e) {
            closeDetails();
            switchView($$1(e.target).attr('href').substr(6), false);
            return false;
        });
    };
    locale = getLocaleFromPath(document$1.location.pathname);
    locationFolder = getFolder(removeLocaleFromPath(document$1.location.pathname));
    if (document$1.documentElement.classList.contains('hasSidebar')) {
        nodes_to_expand = msDocs.functions.getParams('nodes_to_expand', 'meta');
        if (nodes_to_expand.length) {
            for (var i = 0; i < nodes_to_expand.length; i++) {
                nodes_to_expand[i] = resolveRelativePath(nodes_to_expand[i]);
            }
            hasNodesToExpand = true;
        }
        relativeCanonicalUrl = getRelativeCanonicalUrl();
        relativeCanonicalUrlNoQuery = getRelativeCanonicalUrl(true).toLowerCase();
        relativeCanonicalUrlUniformIndex = getUniformIndex(relativeCanonicalUrlNoQuery);
        if (document$1.location.hash) {
            relativeCanonicalUrlNoQueryWithHash = relativeCanonicalUrlNoQuery + document$1.location.hash;
            relativeCanonicalUrlUniformIndexWithHash = relativeCanonicalUrlUniformIndex + document$1.location.hash;
        }
        if (tocQueryUrl && tocQueryUrl.length) {
            tocQueryUrl = decodeURIComponent(tocQueryUrl);
            tocQueryUrl = resolveRelativePath(tocQueryUrl);
            getTocData(tocQueryUrl, true);
        }
        else if (tocMetaUrl && tocMetaUrl.length) {
            getTocData(tocMetaUrl);
        }
        if (hasMoniker) {
            $$1(function () {
                initVersionPicker();
            });
        }
    }
    if (bcQueryUrl && bcQueryUrl.length) {
        bcUrl = bcQueryUrl;
        getBcData(bcQueryUrl, true);
    }
    else if (bcMetaUrl && bcMetaUrl.length) {
        bcUrl = bcMetaUrl;
        getBcData(bcMetaUrl);
    }
    else {
        bcUrl = '';
    }
    if (msDocs.settings.extendBreadcrumb) {
        $$1(function () {
            $$1.when(tocFinished, bcFinished).done(function () {
                extendBc();
            });
        });
    }
}

var platformConfig = {
    dotnet: {
        switchViewClientSide: true,
        validSearchTerm: /^[A-Za-z][A-Za-z0-9.<>,]{2,255}$/,
        namespaceIcon: 'Namespace',
        title: loc.dotnetApiBrowser,
        allApisLabel: loc.allapis,
        resultsHeadingTemplate: loc.apiReference
    },
    powershell: {
        switchViewClientSide: false,
        validSearchTerm: /^[A-Za-z][A-Za-z0-9.-]{2,255}$/,
        namespaceIcon: 'Module',
        title: loc.powershellModuleBrowser,
        allApisLabel: loc.allPackages,
        resultsHeadingTemplate: loc.moduleReference
    }
};

var blockName = 'api-search-field';
var bigX = '<svg viewBox="0 0 24 24"><g><path class="bar" d="M6,6l14,14Z" /></g><g><path class="bar" d="M20,6l-14,14Z" /></g></svg>';
var littleX = '<svg viewBox="0 0 24 24"><g><path class="bar" d="M8,8l10,10Z" /></g><g><path class="bar" d="M18,8l-10,10Z" /></g></svg>';
function createSearchField(config) {
    var form = document.createElement('form');
    form.classList.add(blockName);
    form.classList.add(config.standalone ? 'standalone' : 'reference');
    form.classList.add('all-apis');
    form.setAttribute('ms.cmpnm', blockName);
    form.setAttribute(contentAttrs.name, blockName);
    form.action = 'javascript:';
    form.addEventListener('submit', function (event) { return event.preventDefault(); });
    var productSelect = document.createElement('select');
    productSelect.disabled = true;
    productSelect.setAttribute(contentAttrs.name, 'product');
    if (config.standalone) {
        var option = document.createElement('option');
        option.value = '';
        option.textContent = platformConfig[config.platformId].allApisLabel;
        option.packages = [];
        productSelect.appendChild(option);
    }
    var packageSelect = document.createElement('select');
    packageSelect.disabled = true;
    packageSelect.setAttribute(contentAttrs.name, 'moniker');
    var termInput = document.createElement('input');
    termInput.disabled = true;
    termInput.type = 'search';
    termInput.classList.add('empty');
    var clearAnchor = document.createElement('a');
    clearAnchor.href = '#';
    clearAnchor.title = loc.clearterm;
    clearAnchor.innerHTML = config.standalone ? bigX : littleX;
    clearAnchor.addEventListener('click', function () {
        termInput.value = '';
        termInput.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    });
    var group = document.createElement('label');
    group.classList.add('component-group');
    var span = document.createElement('span');
    span.classList.add('screenReader');
    span.textContent = loc.product;
    group.appendChild(span);
    group.appendChild(productSelect);
    group.appendChild(makeCaret('select-caret', '\ue011'));
    form.appendChild(group);
    group = document.createElement('label');
    group.classList.add('component-group');
    span = document.createElement('span');
    span.classList.add('screenReader');
    span.textContent = loc.version;
    group.appendChild(span);
    group.appendChild(packageSelect);
    group.appendChild(makeCaret('select-caret', '\ue011'));
    form.appendChild(group);
    group = document.createElement('label');
    group.classList.add('component-group');
    span = document.createElement('span');
    span.classList.add('screenReader');
    span.textContent = loc.search;
    group.appendChild(span);
    group.appendChild(termInput);
    group.appendChild(clearAnchor);
    form.appendChild(group);
    if (config.container.firstChild) {
        config.container.insertBefore(form, config.container.firstChild);
    }
    else {
        config.container.appendChild(form);
    }
    var heading = null;
    if (config.standalone) {
        heading = document.createElement('h1');
        heading.classList.add('api-search-heading');
        heading.textContent = platformConfig[config.platformId].title;
        config.container.insertBefore(heading, form);
    }
    return createInit(config, { form: form, productSelect: productSelect, packageSelect: packageSelect, termInput: termInput, heading: heading });
}
function createInit(config, _a) {
    var form = _a.form, productSelect = _a.productSelect, packageSelect = _a.packageSelect, termInput = _a.termInput, heading = _a.heading;
    return function (platform, initialQuery) {
        var productFamily = null;
        if (!config.standalone && initialQuery.moniker !== '') {
            productFamily = platform.packagesByMoniker[initialQuery.moniker].family;
        }
        for (var i = 0; i < platform.products.length; i++) {
            var product = platform.products[i];
            if (!product.packages.length) {
                continue;
            }
            if (productFamily) {
                var family = platform.packagesByMoniker[product.packages[0].moniker].family;
                if (family !== productFamily) {
                    continue;
                }
            }
            var option = document.createElement('option');
            option.value = product.displayName;
            option.textContent = product.displayName;
            option.packages = product.packages;
            productSelect.appendChild(option);
        }
        function updatePackageSelectOptions() {
            packageSelect.innerHTML = '';
            var packages = productSelect.options.item(productSelect.selectedIndex).packages;
            for (var i = 0; i < packages.length; i++) {
                var pkg_1 = packages[i];
                var option = document.createElement('option');
                option.value = pkg_1.moniker;
                option.textContent = pkg_1.versionDisplayName;
                packageSelect.appendChild(option);
                if (pkg_1.isDefault) {
                    option.selected = true;
                }
            }
            if (packages.length) {
                form.classList.remove('all-apis');
            }
            else {
                packageSelect.value = '';
                form.classList.add('all-apis');
            }
        }
        var pkg = platform.packagesByMoniker[initialQuery.moniker];
        if (pkg) {
            productSelect.value = pkg.product.displayName;
            updatePackageSelectOptions();
            packageSelect.value = pkg.moniker;
        }
        else {
            updatePackageSelectOptions();
        }
        termInput.value = initialQuery.term;
        function updateTermInputEmptyState() {
            if (termInput.value === '') {
                termInput.classList.add('empty');
            }
            else {
                termInput.classList.remove('empty');
            }
        }
        updateTermInputEmptyState();
        var callbacks = [];
        var api = {
            subscribe: function (callback) { return callbacks.push(callback); },
            selectMoniker: function (moniker) {
                var pkg = platform.packagesByMoniker[moniker];
                productSelect.value = pkg.product.displayName;
                productSelect.dispatchEvent(new CustomEvent('change', { bubbles: true }));
                packageSelect.value = pkg.moniker;
                packageSelect.dispatchEvent(new CustomEvent('change', { bubbles: true }));
            },
            selectQuery: function (query) {
                if (query.moniker === '') {
                    productSelect.value = '';
                    productSelect.dispatchEvent(new CustomEvent('change', { bubbles: true }));
                }
                else {
                    api.selectMoniker(query.moniker);
                }
                termInput.value = query.term;
                termInput.dispatchEvent(new CustomEvent('change', { bubbles: true }));
            },
            focus: function () {
                termInput.focus();
                productSelect.dispatchEvent(new CustomEvent('focus'));
                termInput.selectionStart = termInput.selectionEnd = termInput.value.length;
            }
        };
        var previousQuery = initialQuery;
        var handleInput = function (event) {
            if (event.target === productSelect) {
                updatePackageSelectOptions();
            }
            if (event.target === termInput) {
                updateTermInputEmptyState();
            }
            var query = {
                moniker: packageSelect.value,
                term: termInput.value.trim()
            };
            if (query.term === previousQuery.term && query.moniker === previousQuery.moniker) {
                return;
            }
            previousQuery = query;
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i](query);
            }
        };
        form.addEventListener('change', handleInput);
        form.addEventListener('input', handleInput);
        form.addEventListener('focus', function () { return form.classList.add('focused'); }, true);
        form.addEventListener('blur', function () { return form.classList.remove('focused'); }, true);
        productSelect.disabled = false;
        packageSelect.disabled = false;
        termInput.disabled = false;
        return api;
    };
}
function makeCaret(className, textContent) {
    var caret = document.createElement('i');
    caret.classList.add(className);
    caret.textContent = textContent;
    return caret;
}

var blockName$1 = 'api-search-quick-filter';
var platforms = {
    dotnet: [
        ['netframework-4.6.2', 'netframework-4.7', 'netcore-2.0', 'netstandard-2.0'],
        ['xamarinios-10.8', 'xamarinandroid-7.1', 'xamarinmac-3.0'],
        ['azuremgmtresourcemanager-1.5.0-preview', 'appinsights-2.3.0-beta3']
    ],
    powershell: [
        ['powershell-6'], ['azurermps-4.2.0'], ['']
    ]
};
function createQuickFilter(config) {
    var blockDiv = document.createElement('div');
    blockDiv.classList.add(blockName$1);
    blockDiv.setAttribute('ms.cmpnm', blockName$1);
    blockDiv.setAttribute(contentAttrs.name, blockName$1);
    var heading = document.createElement('h2');
    heading.textContent = loc.quickfilters;
    heading.classList.add('api-search-heading');
    blockDiv.appendChild(heading);
    var columns = platforms[config.platform.platformId];
    for (var c = 0; c < columns.length; c++) {
        var rows = columns[c];
        var columnDiv = document.createElement('div');
        blockDiv.appendChild(columnDiv);
        var _loop_1 = function (r) {
            var moniker = rows[r];
            var pkg = config.platform.packagesByMoniker[moniker];
            if (!pkg) {
                console.warn("Quick Filter: no package with moniker \"" + moniker + "\" was found.");
                return "continue";
            }
            var button = document.createElement('button');
            button.textContent = breakText(pkg.displayName);
            button.addEventListener('click', function (event) {
                jsllReady.then(function (awa) { return awa.ct.capturePageAction(button, {
                    actionType: awa.actionType.OTHER,
                    behavior: awa.behavior.OTHER,
                    content: {
                        event: 'api-browser-quickfilter',
                        value: pkg.moniker
                    }
                }); });
                wedcs('ms.quickfilter', pkg.moniker);
                api.onChange(pkg);
            });
            columnDiv.appendChild(button);
        };
        for (var r = 0; r < rows.length; r++) {
            _loop_1(r);
        }
    }
    config.container.appendChild(blockDiv);
    var api = {
        onChange: null,
        show: function () { return blockDiv.removeAttribute('hidden'); },
        hide: function () { return blockDiv.setAttribute('hidden', 'true'); }
    };
    return api;
}

function renderResults(platform, query, results, container, standalone, moreUrl) {
    container.innerHTML = '';
    if (results.length === 0) {
        container.textContent = loc['no.results'];
        return;
    }
    if (standalone) {
        renderHeading(platform, query, container);
    }
    var table = document.createElement('table');
    table.classList.add('api-search-results');
    table.setAttribute('ms.cmpnm', 'api-search-results');
    table.setAttribute(contentAttrs.name, 'api-search-results');
    if (standalone) {
        table.classList.add('standalone');
    }
    var thead = document.createElement('thead');
    table.appendChild(thead);
    var theadrow = document.createElement('tr');
    thead.appendChild(theadrow);
    var th = document.createElement('th');
    th.textContent = loc.type;
    theadrow.appendChild(th);
    th = document.createElement('th');
    th.textContent = loc['token.name'];
    theadrow.appendChild(th);
    th = document.createElement('th');
    th.textContent = loc['token.description'];
    theadrow.appendChild(th);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    appendResultsToTable(tbody, platform.platformId, query, results);
    container.appendChild(table);
    if (moreUrl && standalone) {
        var moreButton_1 = document.createElement('button');
        moreButton_1.classList.add('secondary-action');
        moreButton_1.textContent = loc.loadMoreResults;
        moreButton_1.setAttribute(contentAttrs.name, 'api-browser-load-more-results');
        moreButton_1.addEventListener('click', function () {
            fetchWithTimeout(moreUrl).then(function (response) { return response.json(); })
                .then(function (result) {
                moreUrl = result['@nextLink'];
                if (moreUrl === undefined) {
                    container.removeChild(moreButton_1);
                }
                appendResultsToTable(tbody, platform.platformId, query, result.results);
            });
            wedcs('ms.api-browser-load-more-results');
        });
        container.appendChild(moreButton_1);
    }
}
function appendResultsToTable(tbody, platformId, query, results) {
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        var resultType = result.itemType || result.itemKind || platformConfig[platformId].namespaceIcon;
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var td = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = resultIcons[resultType];
        icon.alt = resultType;
        icon.title = resultType;
        icon.width = 18;
        icon.height = 18;
        td.appendChild(icon);
        tr.appendChild(td);
        td = document.createElement('td');
        var a = document.createElement('a');
        a.setAttribute('ms.title', result.displayName);
        a.href = processUrl(result.url, query.moniker);
        a.textContent = breakText(result.displayName);
        td.appendChild(a);
        tr.appendChild(td);
        td = document.createElement('td');
        td.textContent = result.description;
        tr.appendChild(td);
        tr.appendChild(td);
    }
}
function displayLoadingIndicator(container) {
    container.innerHTML = "\n        <div class=\"c-progress f-indeterminate-regional\" role=\"progressbar\" aria-valuetext=\"Loading...\" tabindex=\"0\" aria-label=\"indeterminate regional progress bar\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>";
}
function renderHeading(platform, query, container) {
    var displayName;
    var versionDisplayName;
    if (query.moniker === '') {
        displayName = platform.displayName;
        versionDisplayName = null;
    }
    else {
        var pkg = platform.packagesByMoniker[query.moniker];
        displayName = pkg.product.displayName;
        versionDisplayName = pkg.versionDisplayName;
    }
    var heading = document.createElement('h2');
    heading.classList.add('api-search-results-heading');
    heading.innerHTML = platformConfig[platform.platformId].resultsHeadingTemplate.replace('{0}', displayName);
    if (versionDisplayName !== null) {
        heading.innerHTML += " <span class=\"moniker-version\">version " + versionDisplayName + "</span>";
    }
    container.appendChild(heading);
}
var resultIcons = {
    Namespace: 'https://docs.microsoft.com/en-us/media/toolbars/namespace.svg',
    Member: 'https://docs.microsoft.com/en-us/media/toolbars/member.svg',
    Type: 'https://docs.microsoft.com/en-us/media/toolbars/type.svg',
    Module: 'https://docs.microsoft.com/en-us/media/toolbars/module.svg',
    Cmdlet: 'https://docs.microsoft.com/en-us/media/toolbars/cmdlet.svg',
};
function processUrl(url, moniker) {
    if (moniker !== '' && !/[?&]view=/i.test(url)) {
        var _a = url.split('#'), path = _a[0], hash = _a[1];
        hash = hash === undefined ? '' : '#' + hash;
        url = path + "?view=" + encodeURIComponent(moniker) + hash;
    }
    if (/^https:\/\/docs.microsoft.com/.test(url)) {
        url = url.substr('https://docs.microsoft.com'.length);
    }
    return url;
}

function readQueryString(platform) {
    var _a = parseQueryString(), term = _a.term, view = _a.view;
    if (term === undefined) {
        term = '';
    }
    else {
        term = term.trim();
    }
    var moniker = '';
    if (view !== undefined) {
        var pkg = platform.packagesByMoniker[view];
        if (pkg) {
            moniker = view;
        }
    }
    return { moniker: moniker, term: term };
}
function updateQueryString(query) {
    var queryString = toQueryString({ view: query.moniker, term: query.term });
    if (queryString.length) {
        queryString = '?' + queryString;
    }
    var url = location$1.protocol + "//" + location$1.host + location$1.pathname + queryString + location$1.hash;
    if (location$1.href === url) {
        return;
    }
    history.pushState(query, document$1.title, url);
}
function subscribeToPopState(initialQuery, callback) {
    history.replaceState(initialQuery, document$1.title, location$1.href);
    window$1.addEventListener('popstate', function (event) {
        var query = event.state || {};
        if ('moniker' in query && 'term' in query) {
            callback(event.state);
        }
    });
}

function createApiBrowser(config) {
    var initSearchField = createSearchField({
        platformId: config.platform,
        container: config.searchFieldContainer,
        standalone: config.standalone
    });
    if (config.standalone) {
        displayLoadingIndicator(config.resultsContainer);
    }
    return fetchPlatform(config.platform).then(function (platform) {
        config.resultsContainer.innerHTML = '';
        var _a = getSearchFunction(config, platform), immediateSearch = _a.immediateSearch, scheduleSearch = _a.scheduleSearch;
        var initialQuery = readQueryString(platform);
        var searchField = initSearchField(platform, initialQuery);
        searchField.subscribe(scheduleSearch);
        if (config.standalone) {
            searchField.focus();
            var quickFilter_1 = createQuickFilter({
                container: config.searchFieldContainer,
                platform: platform
            });
            if (!queryIsBlank(initialQuery)) {
                quickFilter_1.hide();
            }
            quickFilter_1.onChange = function (pkg) {
                searchField.selectMoniker(pkg.moniker);
                setTimeout(searchField.focus);
            };
            searchField.subscribe(function (query) { return queryIsBlank(query) ? quickFilter_1.show() : quickFilter_1.hide(); });
            subscribeToPopState(initialQuery, function (query) { return searchField.selectQuery(query); });
            if (!queryIsBlank(initialQuery)) {
                return immediateSearch(initialQuery);
            }
        }
        else {
            var isClientSide_1 = platformConfig[config.platform].switchViewClientSide;
            searchField.subscribe(function (query) { return switchView(query.moniker, isClientSide_1); });
        }
        return Promise.resolve();
    }, function (error) { return config.resultsContainer.textContent = loc.apiSearchIsUnavailable; });
}
function getSearchFunction(config, platform) {
    function immediateSearch(query) {
        if (queriesAreEqual(query, config.previousQuery)) {
            return Promise.resolve();
        }
        config.previousQuery = query;
        if (config.standalone) {
            updateQueryString(query);
        }
        if (config.standalone && query.moniker !== '' && query.term === '') {
            displayLoadingIndicator(config.resultsContainer);
            config.onResultContent(true);
            return fetchNamespaces(config.platform, query.moniker).then(function (result) {
                if (!queriesAreEqual(config.previousQuery, query)) {
                    return;
                }
                if (result.apiItems.length === 0) {
                    config.resultsContainer.textContent = 'No namespaces';
                    return;
                }
                renderResults(platform, query, result.apiItems, config.resultsContainer, config.standalone, null);
            }, function (error) {
                config.resultsContainer.textContent = loc.apiSearchIsUnavailable;
            });
        }
        if (query.term.length < 3) {
            config.resultsContainer.innerHTML = '';
            config.onResultContent(false);
            return Promise.resolve();
        }
        if (!platformConfig[config.platform].validSearchTerm.test(query.term)) {
            renderResults(platform, query, [], config.resultsContainer, config.standalone, null);
            return Promise.resolve();
        }
        displayLoadingIndicator(config.resultsContainer);
        config.onResultContent(true);
        return search(config.platform, query).then(function (result) {
            if (!queriesAreEqual(config.previousQuery, query)) {
                return;
            }
            jsllReady.then(function (awa) { return awa.ct.captureContentPageAction({
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.SEARCH,
                content: {
                    event: 'api-browser-search',
                    moniker: query.moniker,
                    term: query.term,
                    results: result.count
                }
            }); });
            wedcs('ms.apisearch.moniker', query.moniker, 'ms.apisearch.term', query.term, 'ms.apisearch.results', result.count.toString(10));
            renderResults(platform, query, result.results, config.resultsContainer, config.standalone, result['@nextLink']);
        }, function (error) {
            config.resultsContainer.textContent = loc.apiSearchIsUnavailable;
        });
    }
    var timeoutId = 0;
    function scheduleSearch(query) {
        clearTimeout(timeoutId);
        var delay = query.term.length === 0 ? 20 : config.searchDelay;
        timeoutId = setTimeout(function () { return immediateSearch(query); }, delay);
    }
    return { immediateSearch: immediateSearch, scheduleSearch: scheduleSearch };
}
function queryIsBlank(query) {
    return query.moniker === '' && query.term === '';
}
function queriesAreEqual(query1, query2) {
    return query1 === query2
        || query1 && query2 && query1.moniker === query2.moniker && query1.term === query2.term;
}

var clipboardCopySupported = document$1.queryCommandSupported && document$1.queryCommandSupported('copy');
function clipboardCopy(text, owner) {
    if (!clipboardCopySupported) {
        return false;
    }
    var txt = document$1.createElement('textarea');
    txt.setAttribute(contentAttrs.name, getName(owner));
    txt.textContent = text;
    txt.classList.add('screenReader');
    document$1.body.appendChild(txt);
    txt.select();
    try {
        return document$1.execCommand('copy');
    }
    catch (ex) {
        return false;
    }
    finally {
        document$1.body.removeChild(txt);
    }
}
var unprintable = false;
function interceptCopy() {
    function handleCopy(event) {
        var value = window$1.getSelection().toString();
        var cleanValue = unbreakText(value);
        if (clipboardCopySupported && value !== cleanValue && !unprintable) {
            unprintable = true;
            clipboardCopy(cleanValue, event.target);
            return;
        }
        jsllReady.then(function (awa) { return awa.ct.capturePageAction(event.target, {
            actionType: awa.actionType.OTHER,
            behavior: awa.behavior.COPY,
            content: {
                event: 'copy',
                name: getName(event.target),
                value: value,
                unprintable: unprintable
            }
        }); });
        wedcs('ms.copyeventtime', new Date().getTime().toString(), 'ms.copycontent', value.substr(0, 20), 'ms.copycontentlength', value.length.toString(), 'ms.copyunprintable', unprintable.toString());
        unprintable = false;
    }
    document$1.addEventListener('copy', handleCopy, { passive: true });
}

var interactiveTypes = {};

var globalScriptTag = document.querySelector("script[src*='/global.min.js']");
function relativeToGlobal(relativePath, includeVersionArg) {
    if (globalScriptTag) {
        if (includeVersionArg) {
            return globalScriptTag.src.replace('js/global.min.js', relativePath);
        }
        else {
            return globalScriptTag.src.replace(/js\/global\.min.*$/, relativePath);
        }
    }
    return relativePath;
}

function affix() {
    var main = document$1.querySelector('main');
    var left = document$1.getElementById('sidebarContent');
    var right = document$1.getElementById('page-actions-content');
    var footer = document$1.querySelector('.footerContainer');
    var isFixedHeight = document$1.querySelector('html').classList.contains('isFixedHeight');
    if (isFixedHeight) {
        var header = document$1.querySelector('#headerAreaHolder');
        var mainContainer = document$1.querySelector('.mainContainer');
        var pageActions = document$1.querySelector('.pageActions');
        var sidebar = document$1.querySelector('.sidebar');
    }
    
    if (left === null && right === null && !isFixedHeight) {
        return;
    }
    function update() {
        var footerContainerMarginTop = 24;
        var viewportHeight = document$1.documentElement.offsetHeight;
        var _a = main.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, mainHeight = _a.height;
        top = Math.max(0, top);
        bottom = Math.max(footerContainerMarginTop, viewportHeight - bottom);
        if (!isFixedHeight) {
            if (mainHeight < viewportHeight) {
                if (left !== null) {
                    left.style.position = 'relative';
                    left.style.top = '';
                    left.style.bottom = '';
                }
                if (right !== null) {
                    right.style.position = 'relative';
                    right.style.top = '';
                    right.style.bottom = '';
                    right.style.overflowY = 'visible';
                }
            }
            else {
                if (left !== null) {
                    left.style.position = '';
                    left.style.top = top + "px";
                    left.style.bottom = bottom + "px";
                }
                if (right !== null) {
                    right.style.position = '';
                    right.style.top = top + "px";
                    right.style.bottom = bottom + "px";
                    right.style.overflowY = '';
                }
            }
        }
        else if (window$1.matchMedia("(min-width: 767px)").matches) {
            var breadcrumbs = document$1.querySelector('.breadcrumbs');
            var hasTerminal = document$1.querySelector('html').classList.contains('hasTerminal');
            var footerHeight = footer ? footer.getBoundingClientRect().height : 0;
            var headerHeight = header ? header.getBoundingClientRect().height : 0;
            var breadcrumbsHeight = breadcrumbs ? breadcrumbs.getBoundingClientRect().height : 0;
            var mainTopMargin = main ? parseInt(window$1.getComputedStyle(main).marginTop.replace(/[^-\d\.]/g, '')) : 0;
            var mainContainerHeight = Math.floor(viewportHeight - footerHeight - headerHeight);
            var columnHeightStr = '100%';
            if (hasTerminal) {
                columnHeightStr = mainContainerHeight - breadcrumbsHeight - mainTopMargin + "px";
                pageActions.style.height = null;
            }
            else if (window$1.matchMedia("(min-width: 1200px)").matches || hasTerminal) {
                columnHeightStr = mainContainerHeight - breadcrumbsHeight + "px";
                pageActions.style.height = columnHeightStr;
            }
            else {
                columnHeightStr = mainContainerHeight - breadcrumbsHeight - (pageActions ? pageActions.getBoundingClientRect().height : 0) - mainTopMargin + "px";
                pageActions.style.height = null;
            }
            mainContainer.style.height = mainContainerHeight + "px";
            main.style.height = columnHeightStr;
            sidebar.style.height = columnHeightStr;
        }
        else {
            pageActions.style.height = null;
            mainContainer.style.height = null;
            main.style.height = null;
            sidebar.style.height = null;
        }
    }
    var animationFrame = 0;
    function scheduleUpdate() {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(update);
    }
    window$1.addEventListener('scroll', scheduleUpdate, { passive: true });
    window$1.addEventListener('resize', scheduleUpdate, { passive: true });
    window$1.addEventListener('content-update', scheduleUpdate);
    update();
    window$1.addEventListener('load', update, false);
    window$1.addEventListener('DOMContentLoaded', update, false);
}
function notifyContentUpdated() {
    window$1.dispatchEvent(new CustomEvent('content-update'));
}

var workerUrl = relativeToGlobal('js/worker.js', true);
var worker = new Worker(workerUrl);
var languageFriendlyNames = {
    'vb': 'VB',
    'csharp': 'C#',
    'cs': 'C#',
    'dotnetcli': '.NET Console',
    'fsharp': 'F#',
    'azurecli': 'Azure CLI',
    'azurepowershell': 'Azure PowerShell',
    'json': 'JSON',
    'cpp': 'C++',
    'java': 'Java',
    'objc': 'Objective-C',
    'ruby': 'Ruby',
    'php': 'PHP',
    'powershell': 'PowerShell',
    'js': 'JavaScript',
    'javascript': 'JavaScript',
    'azcopy': 'AzCopy',
    'python': 'Python',
    'nodejs': 'NodeJS',
    'xaml': 'XAML',
    'xml': 'XML',
    'sql': 'SQL',
    'swift': 'Swift',
    'md': 'Markdown'
};
var cookieDevLang = 'proglang';
var devLangInfo = {
    selectionAvailable: false,
    userLang: undefined,
    defaultLang: undefined,
    langs: []
};
var noToggleClassName = 'noToggle';
var codeLangIsToggleQuery = 'code[class*="lang-"]:not(.' + noToggleClassName + ')';
var spanLangIsToggleQuery = 'span[class*="lang-"]:not(.' + noToggleClassName + ')';
var codeHeaderIsToggleQuery = 'div.codeHeader[class*="lang-"]:not(.' + noToggleClassName + ')';
function highlightCodeBlock(block, isFromWorker) {
    addCodeHeader(block, msDocs.data.contentDir, devLangInfo);
    highlightLines(block);
    notifyContentUpdated();
}
function highlightLines(block) {
    if (block.innerHTML === "") {
        return;
    }
    var lines = block.innerHTML.split('\n');
    var queryString = block.getAttribute('highlight-lines');
    if (!queryString) {
        return;
    }
    var ranges = queryString.split(',');
    for (var j = 0, range; range = ranges[j++];) {
        var found = range.match(/^(\d+)\-(\d+)?$/);
        var start = 0;
        var end = 0;
        if (found) {
            start = +found[1];
            end = +found[2];
            if (isNaN(end) || end > lines.length) {
                end = lines.length;
            }
        }
        else {
            if (isNaN(range)) {
                continue;
            }
            start = +range;
            end = start;
        }
        if (start <= 0 || end <= 0 || start > end || start > lines.length) {
            continue;
        }
        lines[start - 1] = '<span class="line-highlight">' + lines[start - 1];
        lines[end - 1] = lines[end - 1] + '</span>';
    }
    block.innerHTML = lines.join('\n');
}
function runHighlightWorker() {
    var blocks = [];
    var rawTexts = [];
    $('pre code').each(function (i, block) {
        block.setAttribute(contentAttrs.name, 'code-block');
        blocks.push(block);
        var contents = block.innerHTML;
        contents = contents.replace(/<br>/gi, '\n');
        block.innerHTML = contents;
        rawTexts.push(block.textContent);
        var language = block.className || "";
        if (language === 'azurepowershell') {
            language = 'powershell';
        }
        rawTexts.push(language);
    });
    worker.onmessage = function (event) {
        var len = event.data.length;
        for (var i = 0; i < len; i++) {
            if (event.data[i] !== '--') {
                blocks[i].innerHTML = event.data[i];
            }
            highlightCodeBlock(blocks[i], true);
        }
    };
    worker.postMessage(rawTexts);
}
function getLanguageClass(className) {
    return (/(?:^| )(lang-[^ $]+)/.exec(className) || [])[1] || '';
}
function getLanguageName(languageClass) {
    var languageId = languageClass.length === 0 ? '' : languageClass.substr(5);
    return languageFriendlyNames[languageId] || languageId || '';
}
function getLanguageNameRtlHtml(languageName, contentDir) {
    if (contentDir == 'rtl') {
        return languageName.replace(/(^|\s|\>)(C#|F#|C\+\+)(\s*|[.!?;:]*)(\<|[\n\r]|$)/gi, '$1$2&lrm;$3$4');
    }
    return languageName;
}
function addCodeHeader(code, contentDir, devLangInfo) {
    var pre = code.parentElement;
    if (!pre) {
        return;
    }
    var header = document$1.createElement('div');
    header.classList.add('codeHeader');
    header.setAttribute(contentAttrs.name, 'code-header');
    var languageClass = getLanguageClass(code.className);
    if (languageClass.length > 0) {
        header.classList.add(languageClass);
    }
    var languageName = document$1.createElement('span');
    languageName.classList.add('language');
    languageName.innerHTML = getLanguageNameRtlHtml(getLanguageName(languageClass), contentDir);
    header.appendChild(languageName);
    if (clipboardCopySupported) {
        var copyButton = document$1.createElement('button');
        copyButton.classList.add('action');
        copyButton.classList.add('copy');
        copyButton.innerHTML = '<span>' + loc.copy + '</span>';
        copyButton.addEventListener('click', function () {
            copyCodeBlockToClipboard(code, languageClass);
        });
        copyButton.setAttribute(contentAttrs.name, 'copy');
        header.appendChild(copyButton);
    }
    var interactiveTypeId = code.getAttribute('data-interactive') || code.parentElement.getAttribute('data-interactive');
    var interactiveType = interactiveTypes[interactiveTypeId];
    if (interactiveType) {
        var buttonConfig = interactiveType.activateButtonConfig;
        var activateButton_1 = document$1.createElement('button');
        activateButton_1.classList.add('action');
        activateButton_1.classList.add(buttonConfig.iconClass);
        var span = document$1.createElement('span');
        span.textContent = buttonConfig.name;
        activateButton_1.appendChild(span);
        for (var _i = 0, _a = buttonConfig.attributes; _i < _a.length; _i++) {
            var attr = _a[_i];
            activateButton_1.setAttribute(attr.name, attr.value);
        }
        activateButton_1.addEventListener('click', function () {
            activateButton_1.classList.add('busy');
            activateButton_1.disabled = true;
            interactiveType.activateCodeBlock(pre)
                .catch(function () { })
                .then(function () {
                activateButton_1.classList.remove('busy');
                activateButton_1.disabled = false;
            });
            wedcs('ms.code-header-try-it', interactiveTypeId);
        });
        activateButton_1.setAttribute(contentAttrs.name, 'code-header-try-it-' + interactiveTypeId);
        header.appendChild(activateButton_1);
    }
    if (devLangInfo.selectionAvailable) {
        var isToggable = !code.classList.contains(noToggleClassName)
            && devLangInfo.langs.indexOf(languageClass) !== -1;
        if (isToggable) {
            if (devLangInfo.userLang !== undefined) {
                header.hidden = languageClass !== devLangInfo.userLang;
            }
            else {
                header.hidden = languageClass !== devLangInfo.defaultLang;
            }
        }
        else {
            header.classList.add(noToggleClassName);
        }
    }
    pre.classList.remove('loading');
    pre.parentElement.insertBefore(header, pre);
}
function copyCodeBlockToClipboard(codeBlock, langClass) {
    var text = codeBlock.textContent.trim();
    if (langClass.toLowerCase() === 'lang-powershell') {
        text = text.replace(/\bPS [a-z]:\\>\s?/gi, '');
    }
    return clipboardCopy(text, codeBlock);
}
var initDevLangSelector = function (devLangs) {
    var $selector = $("#lang-selector");
    if ($selector.length) {
        if (devLangInfo.userLang !== undefined) {
            $selector.val(devLangInfo.userLang);
        }
        else {
            $selector.val(devLangInfo.defaultLang);
        }
        var selectedDevLang = $selector.val();
        if (selectedDevLang) {
            updateCodeTags();
            updateSpanTags();
            toggleDevLang(selectedDevLang);
        }
        $selector.change(function () {
            var newUserDevLang = $selector.val();
            toggleDevLang(newUserDevLang);
            localStorage$1.setItem(cookieDevLang, newUserDevLang);
        });
    }
};
var tagHasDevLangAndNoToggle = function ($el) {
    if ($el) {
        var className = $el.attr('class');
        if (typeof className === 'undefined') {
            return true;
        }
        else if (className && className.indexOf('lang-') !== -1) {
            var isFound = false;
            for (var i = 0; i < devLangInfo.langs.length; i++) {
                if ($el.hasClass(devLangInfo.langs[i])) {
                    isFound = true;
                    break;
                }
            }
            return !isFound;
        }
    }
    return true;
};
var updateCodeTags = function () {
    var isFound = false;
    var $this = null;
    $('code[class*="lang"]').each(function (index) {
        isFound = false;
        $this = $(this);
        for (var i = 0; i < devLangInfo.langs.length; i++) {
            if ($this.hasClass(devLangInfo.langs[i])) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            $this.addClass(noToggleClassName);
        }
        else {
            var $prev = $this.prev();
            var $next = $this.next();
            var prevName = $prev[0] ? $prev[0].tagName.toLowerCase() : '';
            var nextName = $next[0] ? $next[0].tagName.toLowerCase() : '';
            if (prevName !== 'code' && nextName !== 'code') {
                var $parent = $this.parent('pre');
                if ($parent) {
                    $prev = $parent.prev();
                    $next = $parent.next();
                    prevName = $prev[0] ? $prev[0].tagName.toLowerCase() : '';
                    nextName = $next[0] ? $next[0].tagName.toLowerCase() : '';
                    if (prevName !== 'pre' && nextName !== 'pre') {
                        $this.addClass(noToggleClassName);
                    }
                    else {
                        var noToggleCount = 0;
                        if (prevName === 'pre') {
                            var $child = $($prev.children()[0]);
                            if ($child && $child.hasClass(noToggleClassName)) {
                                noToggleCount++;
                            }
                        }
                        else {
                            noToggleCount++;
                        }
                        if (nextName === 'pre') {
                            if (tagHasDevLangAndNoToggle($($next.children()[0]))) {
                                noToggleCount++;
                            }
                        }
                        else {
                            noToggleCount++;
                        }
                        if (noToggleCount === 2) {
                            $this.addClass(noToggleClassName);
                        }
                    }
                }
            }
        }
    });
};
var updateSpanTags = function () {
    var isFound = false;
    var $this = null;
    $('span[class*="lang"]').each(function (index) {
        isFound = false;
        $this = $(this);
        for (var i = 0; i < devLangInfo.langs.length; i++) {
            if ($this.hasClass(devLangInfo.langs[i])) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            $this.addClass(noToggleClassName);
        }
        else {
            var $prev = $this.prev();
            var $next = $this.next();
            var prevName = $prev[0] ? $prev[0].tagName.toLowerCase() : '';
            var nextName = $next[0] ? $next[0].tagName.toLowerCase() : '';
            if (prevName !== 'span' && nextName !== 'span') {
                $this.addClass(noToggleClassName);
            }
            else {
                var noToggleCount = 0;
                if (prevName === 'span') {
                    if ($prev.attr('class').indexOf('lang-') !== -1 && $prev.hasClass(noToggleClassName)) {
                        noToggleCount++;
                    }
                }
                else {
                    noToggleCount++;
                }
                if (nextName === 'span') {
                    if (tagHasDevLangAndNoToggle($next)) {
                        noToggleCount++;
                    }
                }
                else {
                    noToggleCount++;
                }
                if (noToggleCount === 2) {
                    $this.addClass(noToggleClassName);
                }
            }
        }
    });
};
var toggleDevLang = function (devLang) {
    $(codeLangIsToggleQuery).prop('hidden', true).parent('pre').prop('hidden', false);
    $(spanLangIsToggleQuery).prop('hidden', true);
    $(codeHeaderIsToggleQuery).prop('hidden', true);
    $('.' + devLang).prop('hidden', false);
    $('code[class*="lang"]').each(function () {
        if (!$(this).parent('pre').find(':visible').length) {
            $(this).parent('pre').prop('hidden', true);
        }
    });
};
function makeCodeBlocks() {
    devLangInfo.selectionAvailable = $("#lang-selector").length > 0;
    if (devLangInfo.selectionAvailable) {
        devLangInfo.userLang = localStorage$1.getItem(cookieDevLang);
        if (msDocs.settings.defaultDevLang) {
            devLangInfo.defaultLang = "lang-" + msDocs.settings.defaultDevLang;
        }
        var langOptions = $("#lang-selector option");
        if (langOptions.length) {
            var userFound = false;
            var defaultFound = false;
            var devLang = '';
            for (var i = 0; i < langOptions.length; i++) {
                devLang = $(langOptions[i]).val();
                if (devLang === devLangInfo.userLang) {
                    userFound = true;
                }
                if (devLang === devLangInfo.defaultLang) {
                    defaultFound = true;
                }
                devLangInfo.langs.push(devLang);
            }
            if (!userFound) {
                devLangInfo.userLang = undefined;
            }
            if (!defaultFound) {
                devLangInfo.defaultLang = $(langOptions[0]).val();
            }
        }
        initDevLangSelector(devLangInfo.langs);
    }
    runHighlightWorker();
}

function getPlatform() {
    var navigatorPlatforms = {
        'iPhone': 'ios',
        'iPad': 'ios',
        'iPod': 'ios',
        'Macintosh': 'macos',
        'MacIntel': 'macos',
        'MacPPC': 'macos',
        'Mac68K': 'macos',
        'Win32': 'windows',
        'Win64': 'windows',
        'Windows': 'windows',
        'WinCE': 'windows',
    };
    var platform = navigatorPlatforms[navigator.platform];
    if (platform !== undefined) {
        return platform;
    }
    if (/Android/.test(navigator.userAgent)) {
        return 'android';
    }
    if (/Linux/.test(navigator.platform)) {
        return 'linux';
    }
    return null;
}
function isPlatform(s) {
    return /android|ios|linux|macos|windows/.test(s);
}
var platform = getPlatform();
var platformStorageKey = 'preferred-platform';
function getPreferredPlatform() {
    var raw = localStorage$1.getItem(platformStorageKey);
    if (raw !== null && isPlatform(raw)) {
        return raw;
    }
    return null;
}
var preferredPlatform = getPreferredPlatform();
function setPreferredPlatform(platform) {
    localStorage$1.setItem(platformStorageKey, platform);
}

var Tab = (function () {
    function Tab(li, a, section) {
        this.li = li;
        this.a = a;
        this.section = section;
    }
    Object.defineProperty(Tab.prototype, "tabId", {
        get: function () { return this.a.getAttribute('data-tab'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "condition", {
        get: function () { return this.a.getAttribute('data-condition'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "visible", {
        get: function () { return !this.li.hasAttribute('hidden'); },
        set: function (value) {
            if (value) {
                this.li.removeAttribute('hidden');
                this.li.removeAttribute('aria-hidden');
            }
            else {
                this.li.setAttribute('hidden', 'hidden');
                this.li.setAttribute('aria-hidden', 'true');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "selected", {
        get: function () { return !this.section.hasAttribute('hidden'); },
        set: function (value) {
            if (value) {
                this.a.setAttribute('aria-selected', 'true');
                this.a.tabIndex = 0;
                this.section.removeAttribute('hidden');
                this.section.removeAttribute('aria-hidden');
            }
            else {
                this.a.setAttribute('aria-selected', 'false');
                this.a.tabIndex = -1;
                this.section.setAttribute('hidden', 'hidden');
                this.section.setAttribute('aria-hidden', 'true');
            }
        },
        enumerable: true,
        configurable: true
    });
    Tab.prototype.focus = function () {
        this.a.focus();
    };
    return Tab;
}());
function updateVisibilityAndSelection(group, state) {
    var anySelected = false;
    var platformTab;
    var firstVisibleTab;
    for (var _i = 0, _a = group.tabs; _i < _a.length; _i++) {
        var tab = _a[_i];
        tab.visible = tab.condition === null || state.selectedTabs.indexOf(tab.condition) !== -1;
        if (tab.visible) {
            if (!firstVisibleTab) {
                firstVisibleTab = tab;
            }
            if (!platformTab && tab.tabId === (preferredPlatform || platform)) {
                platformTab = tab;
            }
        }
        tab.selected = tab.visible && state.selectedTabs.indexOf(tab.tabId) !== -1;
        anySelected = anySelected || tab.selected;
    }
    if (!anySelected) {
        for (var _b = 0, _c = group.tabs; _b < _c.length; _b++) {
            var tab_1 = _c[_b];
            var index = state.selectedTabs.indexOf(tab_1.tabId);
            if (index === -1) {
                continue;
            }
            state.selectedTabs.splice(index, 1);
        }
        var tab = platformTab || firstVisibleTab;
        tab.selected = true;
        state.selectedTabs.push(tab.tabId);
    }
}
function initTabGroup(element, state) {
    var group = { tabs: [] };
    var li = element.firstElementChild.firstElementChild;
    while (li) {
        var a = li.firstElementChild;
        var section = document$1.getElementById(a.getAttribute('aria-controls'));
        var tab = new Tab(li, a, section);
        group.tabs.push(tab);
        li = li.nextElementSibling;
    }
    updateVisibilityAndSelection(group, state);
    element.setAttribute(contentAttrs.name, 'tab-group');
    element.setAttribute('ms.cmpgrp', 'tab-group');
    element.tabGroup = group;
    state.groups.push(group);
}
function initTabs() {
    var queryStringTabs = readTabsQueryStringParam();
    var elements = document$1.querySelectorAll('.tabGroup');
    var state = { groups: [], selectedTabs: [] };
    for (var i = 0; i < elements.length; i++) {
        initTabGroup(elements.item(i), state);
    }
    if (state.groups.length === 0) {
        return state;
    }
    document$1.body.addEventListener('click', function (event) { return handleClick(event, state); });
    document$1.body.addEventListener('keydown', function (event) { return handleKeyDown(event, state); });
    selectTabs(queryStringTabs);
    updateTabsQueryStringParam(state);
    return state;
}
function getTabInfoFromEvent(event) {
    if (!(event.target instanceof HTMLAnchorElement)) {
        return null;
    }
    var tabId = event.target.getAttribute('data-tab');
    if (tabId === null) {
        return null;
    }
    var group = event.target.parentElement.parentElement.parentElement.tabGroup;
    return { tabId: tabId, group: group };
}
function handleClick(event, state) {
    var info = getTabInfoFromEvent(event);
    if (info === null) {
        return;
    }
    event.preventDefault();
    var tabId = info.tabId, group = info.group;
    if (state.selectedTabs.indexOf(tabId) !== -1) {
        return;
    }
    var previousTabId = group.tabs.filter(function (t) { return t.selected; })[0].tabId;
    state.selectedTabs.splice(state.selectedTabs.indexOf(previousTabId), 1, tabId);
    updateTabsQueryStringParam(state);
    for (var _i = 0, _a = state.groups; _i < _a.length; _i++) {
        var group_1 = _a[_i];
        updateVisibilityAndSelection(group_1, state);
    }
    if (isPlatform(tabId)) {
        setPreferredPlatform(tabId);
    }
}
var keyCode = {
    left: 37,
    right: 39,
    home: 36,
    end: 35
};
function handleKeyDown(event, state) {
    var info = getTabInfoFromEvent(event);
    if (info === null) {
        return;
    }
    var tabId = info.tabId, group = info.group;
    var key = event.which;
    if (!event.altKey && (key === keyCode.left || key === keyCode.right || key === keyCode.home || key === keyCode.end)) {
        event.preventDefault();
        var isLeft = key === keyCode.left || key === keyCode.home;
        var index = void 0;
        if (event.ctrlKey || key === keyCode.home || key === keyCode.end) {
            var increment = isLeft ? 1 : -1;
            index = isLeft ? 0 : group.tabs.length - 1;
            while (!group.tabs[index].visible) {
                index += increment;
            }
        }
        else {
            var increment = isLeft ? -1 : 1;
            index = isLeft ? group.tabs.length - 1 : 0;
            while (group.tabs[index].tabId !== tabId || !group.tabs[index].visible) {
                index += increment;
            }
            do {
                index += increment;
                if (index === -1) {
                    index = group.tabs.length - 1;
                }
                else if (index === group.tabs.length) {
                    index = 0;
                }
            } while (!group.tabs[index].visible);
        }
        group.tabs[index].focus();
        return;
    }
}
function selectTabs(tabIds) {
    for (var _i = 0, tabIds_1 = tabIds; _i < tabIds_1.length; _i++) {
        var tabId = tabIds_1[_i];
        var a = document$1.querySelector(".tabGroup > ul > li > a[data-tab=\"" + tabId + "\"]:not([hidden])");
        if (a === null) {
            return;
        }
        a.dispatchEvent(new CustomEvent('click', { bubbles: true }));
    }
}
function readTabsQueryStringParam() {
    var qs = parseQueryString();
    var t = qs.tabs;
    if (t === undefined || t === '') {
        return [];
    }
    return t.split(',');
}
function updateTabsQueryStringParam(state) {
    var qs = parseQueryString();
    qs.tabs = state.selectedTabs.join();
    var url = location$1.protocol + "//" + location$1.host + location$1.pathname + "?" + toQueryString(qs) + location$1.hash;
    if (location$1.href === url) {
        return;
    }
    history.replaceState({}, document$1.title, url);
}

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            var len = o.length >>> 0;
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var thisArg = arguments[1];
            var k = 0;
            while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                k++;
            }
            return undefined;
        }
    });
}

var DockPanel = (function () {
    function DockPanel() {
        var _this = this;
        this.element = document.createElement('div');
        this.element.id = 'dockpanel';
        this.element.tabIndex = -1;
        this.element.classList.add('dockpanel');
        this.element.setAttribute('aria-role', 'application');
        this.element.setAttribute('aria-hidden', 'true');
        var headerContainer = document.createElement('div');
        headerContainer.classList.add('dockpanel-header');
        this.element.appendChild(headerContainer);
        this.titleElement = document.createElement('h2');
        headerContainer.appendChild(this.titleElement);
        var minimize = document.createElement('button');
        minimize.classList.add('flat-button');
        minimize.classList.add('minimize');
        minimize.innerHTML = '<span class="screenReader">' + loc.minimize + '</span>';
        minimize.title = loc.minimize;
        minimize.setAttribute(contentAttrs.name, 'minimize');
        minimize.onclick = function () { return _this.minimize(); };
        headerContainer.appendChild(minimize);
        var close = document.createElement('button');
        close.classList.add('flat-button');
        close.classList.add('close');
        close.innerHTML = '<span class="screenReader">' + loc.close + '</span>';
        close.title = loc.close;
        close.setAttribute(contentAttrs.name, 'close');
        close.onclick = function () { return _this.close(); };
        headerContainer.appendChild(close);
        this.bodyElement = document.createElement('div');
        this.bodyElement.classList.add('dockpanel-body');
        this.element.appendChild(this.bodyElement);
        document.body.appendChild(this.element);
    }
    DockPanel.prototype.maximize = function () {
        this.element.classList.add('dockpanel-maximized');
        this.element.setAttribute('aria-hidden', 'false');
        this.bodyElement.focus();
    };
    DockPanel.prototype.minimize = function () {
        this.element.classList.remove('dockpanel-maximized');
        this.element.setAttribute('aria-hidden', 'true');
    };
    Object.defineProperty(DockPanel.prototype, "component", {
        get: function () {
            return this.comp;
        },
        set: function (value) {
            var _this = this;
            this.titleElement.textContent = '';
            this.bodyElement.innerHTML = '';
            this.element.removeAttribute(contentAttrs.name);
            while (this.titleElement.previousElementSibling) {
                this.titleElement.parentElement.removeChild(this.titleElement.previousElementSibling);
            }
            if (this.comp) {
                this.comp.dispose();
            }
            this.comp = value;
            if (value === null) {
                return;
            }
            this.titleElement.textContent = value.title;
            this.bodyElement.appendChild(value.element);
            this.element.setAttribute(contentAttrs.name, value.biName);
            value.commands.forEach(function (c) { return _this.createCommandElement(c); });
        },
        enumerable: true,
        configurable: true
    });
    DockPanel.prototype.createCommandElement = function (command) {
        var el = document.createElement(command.type);
        el.classList.add('flat-button');
        el.classList.add(command.className);
        el.innerHTML = '<span class="screenReader">' + command.name + '</span>';
        el.title = command.name;
        if (command.type === 'a') {
            el.setAttribute('href', command.href);
            el.setAttribute('target', '_blank');
        }
        else {
            el.onclick = command.execute;
        }
        this.titleElement.parentElement.insertBefore(el, this.titleElement);
    };
    DockPanel.prototype.close = function () {
        var _this = this;
        this.minimize();
        setTimeout(function () { return _this.component = null; }, 100);
    };
    DockPanel.prototype.internals = function () {
        return {
            element: this.element,
            titleElement: this.titleElement,
            bodyElement: this.bodyElement
        };
    };
    return DockPanel;
}());
var dockPanel = null;
function getDockPanel() {
    if (dockPanel === null) {
        dockPanel = new DockPanel();
    }
    return dockPanel;
}

var cliPageOrigin = 'https://ux.console.azure.com';
var cliPageUrl = cliPageOrigin + "/index.html?trustedAuthority=" + location$1.origin + "&embed=true";
var powershellArg = '&feature.azureconsole.ostype=windows';
var loginReturnUrl = relativeToGlobal('azure-cli-authorized.html', false);
var CloudShell = (function () {
    function CloudShell(isPowerShell, requestClose) {
        var _this = this;
        this.isPowerShell = isPowerShell;
        this.requestClose = requestClose;
        this.title = 'Azure Cloud Shell';
        this.biName = 'azure-cli';
        this.commands = [
            {
                type: 'button',
                className: 'refresh',
                name: loc.restart,
                biName: 'restart',
                execute: function () { return _this.restart(); }
            },
            {
                type: 'a',
                className: 'feedback',
                name: loc.feedback,
                biName: 'feedback',
                href: 'https://aka.ms/cloudshellfeedback'
            },
        ];
        this.messageHandler = function (_a) {
            var _b = _a.data, signature = _b.signature, type = _b.type, audience = _b.audience;
            if (signature !== 'portalConsole') {
                return;
            }
            if (type === 'getToken') {
                if (audience !== '') {
                    return;
                }
                if (_this.token) {
                    _this.replyToken();
                    return;
                }
                _this.loadToken();
                return;
            }
            if (type === 'close') {
                _this.requestClose();
                return;
            }
        };
        window$1.addEventListener('message', this.messageHandler);
        this.element = document$1.createElement('div');
        this.element.classList.add('cloud-shell');
        this.element.classList.add(isPowerShell ? 'powershell' : 'cli');
        this.element.innerHTML = "\n            <div class=\"message-container\">\n                <h3></h3>\n                <div class=\"c-progress f-indeterminate-local f-progress-large\" role=\"progressbar\" tabindex=\"0\" aria-valuetext=\"" + loc['cloudShell.loggingIn'] + "\" aria-label=\"" + loc['cloudShell.loggingIn'] + "\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n                <a " + contentAttrs.name + "=\"login\" class=\"cloud-shell-login\" href=\"#\" hidden>\n                    " + loc.login + "\n                </a>\n                <div class=\"cloud-shell-tokens\" hidden>\n                </div>\n                <p>" + loc.azureDisclaimer + "</p>\n            </div>";
        this.messageContainer = this.element.firstElementChild;
        this.consoleFrame = document$1.createElement('iframe');
        this.consoleFrame.classList.add('cli-frame');
        this.consoleFrame.hidden = true;
        this.consoleFrame.frameBorder = '0';
        this.consoleFrame.src = cliPageUrl + (isPowerShell ? powershellArg : '');
        this.element.appendChild(this.consoleFrame);
        this.message = {};
        this.message.header = this.messageContainer.firstElementChild;
        this.message.progress = this.message.header.nextElementSibling;
        this.message.loginAnchor = this.message.progress.nextElementSibling;
        this.message.tokens = this.message.loginAnchor.nextElementSibling;
        this.message.description = this.message.tokens.nextElementSibling;
        var loginWindow = null;
        window$1.azureCliAuthorized = function (query) {
            if (loginWindow === null) {
                return;
            }
            loginWindow.close();
            loginWindow = null;
            _this.showLoggingIn();
            _this.loadToken();
            jsllReady.then(function (awa) {
                return awa.ct.capturePageAction(_this.element, {
                    behavior: awa.behavior.COMPLETEPROCESS,
                    actionType: awa.actionType.OTHER,
                    contentTags: (_a = {},
                        _a[contentTags.scenario] = 'azure-cli-login',
                        _a[contentTags.scenarioStep] = 'authorized',
                        _a)
                });
                var _a;
            });
            wedcs('ms.azure-cli-login', 'authorized');
        };
        this.message.loginAnchor.addEventListener('click', function (event) {
            event.preventDefault();
            loginWindow = window$1.open("https://token.docs.microsoft.com/signin?returnUrl=" + encodeURIComponent(loginReturnUrl), '_blank');
            jsllReady.then(function (awa) {
                return awa.ct.capturePageAction(_this.element, {
                    behavior: awa.behavior.PROCESSCHECKPOINT,
                    actionType: awa.actionType.CLICKLEFT,
                    contentTags: (_a = {},
                        _a[contentTags.scenario] = 'azure-cli-login',
                        _a[contentTags.scenarioStep] = 'login',
                        _a)
                });
                var _a;
            });
            wedcs('ms.azure-cli-login', 'login');
        });
        this.showLoggingIn();
    }
    CloudShell.prototype.restart = function () {
        if (this.consoleFrame.hidden) {
            return;
        }
        this.consoleFrame.contentWindow.postMessage({
            signature: 'portalConsole',
            type: 'restart'
        }, cliPageOrigin);
    };
    CloudShell.prototype.dispose = function () {
        window$1.azureCliAuthorized = null;
        window$1.removeEventListener('message', this.messageHandler);
        this.requestClose = null;
    };
    CloudShell.prototype.showLoggingIn = function () {
        this.messageContainer.hidden = false;
        this.consoleFrame.hidden = true;
        this.message.header.textContent = loc['cloudShell.loggingIn'];
        this.message.progress.hidden = false;
        this.message.loginAnchor.hidden = true;
        this.message.tokens.hidden = true;
        this.message.description.textContent = loc.azureDisclaimer;
        this.message.description.hidden = false;
    };
    CloudShell.prototype.showLoginButton = function () {
        var _this = this;
        this.messageContainer.hidden = false;
        this.consoleFrame.hidden = true;
        this.message.header.textContent = loc['cloudShell.pleaseLogin'];
        this.message.progress.hidden = true;
        this.message.loginAnchor.hidden = false;
        this.message.tokens.hidden = true;
        this.message.description.textContent = loc.azureDisclaimer;
        this.message.description.hidden = false;
        jsllReady.then(function (awa) {
            return awa.ct.capturePageAction(_this.element, {
                behavior: awa.behavior.STARTPROCESS,
                actionType: awa.actionType.CLICKLEFT,
                contentTags: (_a = {},
                    _a[contentTags.scenario] = 'azure-cli-login',
                    _a[contentTags.scenarioStep] = 'login-prompt',
                    _a)
            });
            var _a;
        });
        wedcs('ms.azure-cli-login', 'login-prompt');
    };
    CloudShell.prototype.showTokenSelector = function (tokens) {
        var _this = this;
        this.messageContainer.hidden = false;
        this.consoleFrame.hidden = true;
        this.message.header.textContent = loc['cloudShell.chooseAccount'];
        this.message.progress.hidden = true;
        this.message.loginAnchor.hidden = true;
        this.message.tokens.hidden = false;
        this.message.description.textContent = loc.azureDisclaimer;
        this.message.description.hidden = false;
        this.message.tokens.innerHTML = '';
        var _loop_1 = function (i) {
            var token = tokens[i];
            var button = document$1.createElement('button');
            button.appendChild(document$1.createElement('span'));
            button.firstElementChild.textContent = token.display_name;
            button.appendChild(document$1.createElement('span'));
            button.lastElementChild.textContent = token.default_domain;
            button.setAttribute(contentAttrs.name, 'token');
            button.addEventListener('click', function () {
                _this.token = token.access_token;
                _this.replyToken();
            });
            this_1.message.tokens.appendChild(button);
        };
        var this_1 = this;
        for (var i = 0; i < tokens.length; i++) {
            _loop_1(i);
        }
    };
    CloudShell.prototype.showError = function (message) {
        this.messageContainer.hidden = false;
        this.consoleFrame.hidden = true;
        this.message.header.textContent = loc.error;
        this.message.progress.hidden = true;
        this.message.loginAnchor.hidden = true;
        this.message.tokens.hidden = true;
        this.message.description.textContent = message;
        this.message.description.hidden = false;
    };
    CloudShell.prototype.replyToken = function () {
        this.consoleFrame.contentWindow.postMessage({
            signature: 'portalConsole',
            type: 'postToken',
            audience: '',
            message: 'Bearer ' + this.token
        }, cliPageOrigin);
        this.messageContainer.hidden = true;
        this.consoleFrame.hidden = false;
    };
    CloudShell.prototype.loadToken = function () {
        var _this = this;
        fetchToExport('https://token.docs.microsoft.com/accesstokens', { method: 'POST', mode: 'cors', credentials: 'include' })
            .then(function (response) {
            if (response.ok) {
                return response.json().then(function (tokens) {
                    if (tokens.length === 0) {
                        _this.showError('Error logging in');
                        return;
                    }
                    if (tokens.length === 1) {
                        _this.token = tokens[0].access_token;
                        _this.replyToken();
                        return;
                    }
                    _this.showTokenSelector(tokens);
                });
            }
            if (response.status === 401) {
                _this.showLoginButton();
                return;
            }
            _this.showError('Error logging in');
        })
            .catch(function (err) {
            if (err.toString() === 'TypeMismatchError') {
                _this.showLoginButton();
                return;
            }
            throw err;
        });
    };
    CloudShell.prototype.internals = function () {
        return {
            message: this.message,
            messageContainer: this.messageContainer,
            consoleFrame: this.consoleFrame
        };
    };
    return CloudShell;
}());
function showCloudShell(isPowerShell) {
    var dockPanel = getDockPanel();
    var current = dockPanel.component;
    if (current && current instanceof CloudShell && current.isPowerShell === isPowerShell) {
        dockPanel.maximize();
    }
    else {
        dockPanel.component = new CloudShell(isPowerShell, function () { return dockPanel.close(); });
        setTimeout(function () { return dockPanel.maximize(); });
    }
    return Promise.resolve();
}
var activateButtonConfig = {
    name: loc['try.it'],
    iconClass: 'tryIt',
    attributes: [
        { name: 'aria-haspopup', value: 'true' },
        { name: 'aria-controls', value: 'dockpanel' }
    ]
};
interactiveTypes['azurecli'] = {
    activateButtonConfig: activateButtonConfig,
    activateCodeBlock: function () { return showCloudShell(false); }
};
interactiveTypes['azurepowershell'] = {
    activateButtonConfig: activateButtonConfig,
    activateCodeBlock: function () { return showCloudShell(true); }
};

function scrollTo(y, duration) {
    var startingY = window.pageYOffset;
    var diff = y - startingY;
    var start;
    function step(timestamp) {
        if (!start) {
            start = timestamp;
        }
        var elapsed = timestamp - start;
        var targetPercentComplete = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startingY + diff * targetPercentComplete);
        if (elapsed < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

var dotNetOnlineOrigin = 'https://trydotnet.azurewebsites.net';
interactiveTypes['csharp'] = {
    activateButtonConfig: {
        name: loc.run,
        iconClass: 'run',
        attributes: []
    },
    activateCodeBlock: function (codeBlock) { return activateCodeBlock(codeBlock, 'csharp'); }
};
var activatedCodeBlocks = [];
function activateCodeBlock(codeBlock, language) {
    var instance = activatedCodeBlocks.find(function (x) { return x.element.parentElement === codeBlock.parentElement; });
    if (instance) {
        return instance.run();
    }
    var _a = wrapCodeBlock(codeBlock), blockWrapper = _a.wrapper, codeBody = _a.body;
    var _b = blockWrapper.getBoundingClientRect(), height = _b.height, top = _b.top;
    blockWrapper.style.cssText = "height: " + height + "px";
    var viewportHeight = document$1.documentElement.clientHeight;
    var targetHeight = Math.min(height + 91, Math.floor(viewportHeight * 0.85));
    var scrollAmount = Math.floor(viewportHeight - top - targetHeight - 12);
    if (scrollAmount < 0) {
        scrollTo(window$1.pageYOffset - scrollAmount, 200);
    }
    instance = new DotNetOnline(language, codeBlock.textContent.trim());
    activatedCodeBlocks.push(instance);
    codeBody.appendChild(instance.element);
    return instance.ready.then(function () {
        blockWrapper.classList.add('interactive');
        blockWrapper.style.cssText = "height: " + targetHeight + "px";
        setTimeout(function () {
            instance.focus();
            codeBlock.style.display = 'none';
        }, 500);
        return instance.run();
    });
}
function wrapCodeBlock(codeBlock) {
    var header = codeBlock.previousElementSibling;
    if (!header.classList.contains('codeHeader')) {
        throw new Error('Code block header is missing.');
    }
    var wrapper = document$1.createElement('div');
    wrapper.classList.add('codeBlock');
    header.parentElement.insertBefore(wrapper, header);
    header.parentElement.removeChild(header);
    wrapper.appendChild(header);
    var body = document$1.createElement('div');
    body.classList.add('codeBody');
    wrapper.appendChild(body);
    codeBlock.parentElement.removeChild(codeBlock);
    body.appendChild(codeBlock);
    return { wrapper: wrapper, header: header, body: body };
}
var DotNetOnline = (function () {
    function DotNetOnline(language, code) {
        var _this = this;
        this.language = language;
        this.code = code;
        this.pendingMessages = {};
        this.configured = false;
        this.messageHandler = function (_a) {
            var data = _a.data, origin = _a.origin, source = _a.source;
            if (origin !== dotNetOnlineOrigin || source !== _this.editor.contentWindow || !_this.pendingMessages[data.type]) {
                return;
            }
            var resolvePendingMessage = _this.pendingMessages[data.type];
            delete _this.pendingMessages[data.type];
            resolvePendingMessage(data);
        };
        this.themeHandler = function (event) {
            _this.setTheme();
        };
        this.element = document$1.createElement('div');
        this.element.classList.add('dotnet-online');
        this.element.innerHTML = "\n\t\t\t<iframe class=\"editor\" src=\"" + dotNetOnlineOrigin + "/editor?hostOrigin=" + encodeURIComponent(location.origin) + "&waitForConfiguration=true&debug=true\"></iframe>\n\t\t\t<pre class=\"output\"></pre>";
        this.editor = this.element.firstElementChild;
        this.output = this.element.lastElementChild;
        window$1.addEventListener('message', this.messageHandler);
        window$1.addEventListener('theme-changed', this.themeHandler);
        this.ready = this.waitForMessage('HostListenerReady')
            .then(function () { return Promise.all([_this.setCode(code), _this.setTheme()]); })
            .then(function () { return _this.showEditor(); });
    }
    DotNetOnline.prototype.waitForMessage = function (type) {
        var _this = this;
        return new Promise(function (resolve) { return _this.pendingMessages[type] = resolve; });
    };
    DotNetOnline.prototype.setTheme = function () {
        var isDark = document$1.documentElement.classList.contains('theme_night');
        var theme = isDark ? 'vs-dark' : 'vs-light';
        this.editor.contentWindow.postMessage({ type: 'configureMonacoEditor', editorOptions: { theme: theme, scrollBeyondLastLine: true, minimap: { enabled: false } }, theme: theme }, dotNetOnlineOrigin);
        return Promise.resolve();
    };
    DotNetOnline.prototype.setCode = function (code) {
        this.editor.contentWindow.postMessage({ type: 'setSourceCode', sourceCode: code }, dotNetOnlineOrigin);
        return this.waitForMessage('CodeModified');
    };
    DotNetOnline.prototype.showEditor = function () {
        this.editor.contentWindow.postMessage({ type: 'showEditor' }, dotNetOnlineOrigin);
        return this.waitForMessage('MonacoEditorReady');
    };
    DotNetOnline.prototype.focus = function () {
        this.editor.contentWindow.postMessage({ type: 'focusEditor' }, dotNetOnlineOrigin);
        return Promise.resolve();
    };
    DotNetOnline.prototype.run = function () {
        var _this = this;
        if (this.runPromise) {
            return this.runPromise;
        }
        this.output.classList.remove('error');
        this.output.textContent = '';
        var interval = setInterval(function () {
            _this.output.textContent += '.';
            if (_this.output.textContent.length > 3) {
                _this.output.textContent = '';
            }
        }, 200);
        this.editor.contentWindow.postMessage({ type: 'run' }, dotNetOnlineOrigin);
        this.runPromise = this.waitForMessage('RunCompleted')
            .then(function (result) {
            _this.runPromise = null;
            clearInterval(interval);
            switch (result.outcome) {
                case 'CompilationError':
                    _this.output.classList.add('error');
                    _this.output.textContent = result.output.join('\n');
                    break;
                case 'Exception':
                    _this.output.classList.add('error');
                    _this.output.textContent = 'An exception occurred.\n' + result.output.join('\n');
                    break;
                case 'Success':
                    _this.output.classList.remove('error');
                    var output = result.output.join('\n');
                    if (output.length === 0) {
                        output = loc.noOutput;
                    }
                    _this.output.textContent = output;
                    break;
                default:
                    throw new Error("Unexpected run result: " + _this.output);
            }
        });
        return this.runPromise;
    };
    DotNetOnline.prototype.dispose = function () {
        window$1.removeEventListener('message', this.messageHandler);
        window$1.removeEventListener('theme-changed', this.themeHandler);
    };
    return DotNetOnline;
}());

msDocs.loc = loc;
msDocs.data.rtl = rtlDictionary;
var hasApiPlatform = !!getParam('apiPlatform', 'meta');
var pageTemplate = msDocs.data.pageTemplate;
var pageType = getParam('pagetype', 'meta');
msDocs.data.useApiBrowserVersionPicker =
    pageTemplate === 'Reference' && hasApiPlatform
        || pageTemplate === 'Conceptual' && pageType === 'Reference' && hasApiPlatform;
msDocs.functions.showDisclaimer = showDisclaimer;
msDocs.data.jsllReady = jsllReady;
msDocs.functions.wedcs = wedcs;
msDocs.functions.notifyContentUpdated = notifyContentUpdated;
msDocs.functions.createApiBrowser = createApiBrowser;
msDocs.functions.escape = escape$1;
msDocs.functions.cookies = cookies;
msDocs.functions.makeCodeBlocks = makeCodeBlocks;
msDocs.functions.loadLibrary = loadLibrary;
msDocs.functions.replaceLocaleInPath = replaceLocaleInPath;
msDocs.functions.setLocaleCookie = setLocaleCookie;
msDocs.functions.parseQueryString = parseQueryString;
if (msDocs.data.useApiBrowserVersionPicker) {
    updateMonikerSpecificContent();
}
detectFeatures();
$$1(detectHighContrast);
ie10MobileFix();
$$1(fixDate);
pluginDomReadyShield();
pluginLALD();
pluginAddState();
pluginIfThen();
themeSwitcher();
$$1(sharing);
setDocumentLocale();
installGetParam();
uhf();
toc();
$$1(affix);
$$1(displayMonikerFallbackMessage);
$$1(initTabs);
track();
interceptCopy();

}());
