/* share42.com | 13.11.2011 | (c) Dimox */
function share42(f,u,t,m1,m2){if(!u)u=location.href;if(!t)t=document.title;u=encodeURIComponent(u);t=encodeURIComponent(t);if(!m1)m1=150;if(!m2)m2=20;document.write('<span id="share42">');var s=new Array('"#" onclick="window.open(\'http://www.facebook.com/sharer.php?u='+u+'&t='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=200, top=200, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"','"http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+u+'&title='+t+'" title="Сохранить закладку в Google"','"http://connect.mail.ru/share?url='+u+'&title='+t+'" title="Поделиться в Моем Мире@Mail.Ru"','"#" onclick="window.open(\'http://twitter.com/share?text='+t+'&url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=200, top=200, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"','"#" onclick="window.open(\'http://vkontakte.ru/share.php?url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=200, top=200, width=554, height=421, toolbar=0, status=0\');return false" title="Поделиться В Контакте"','"http://zakladki.yandex.ru/newlink.xml?url='+u+'&name='+t+'" title="Добавить в Яндекс.Закладки"');for(i=0;i<s.length;i++)document.write('<a rel="nofollow" style="display:block;width:32px;height:32px;margin:0 0 6px;outline:none;background:url('+f+'icons.png) -'+32*i+'px 0" href='+s[i]+' target="_blank"></a>');document.write('</span>'); window.onload=function(){var p=document.getElementById('share42');function m(){var top=Math.max(document.body.scrollTop,document.documentElement.scrollTop);if(top+m2<m1){p.style.top=m1-top+'px';}else{p.style.top=m2+'px';}}m();window.onscroll=m;}}