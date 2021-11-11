


// DORA INFO AREA
const doraInfo = document.getElementById("doraInfo");
const doraCancelBtn = document.getElementById("doraCancelBtn");
const doraBtn = document.getElementById("doraBtn");


// Event Listeners
doraCancelBtn.addEventListener("click", () =>{
    doraInfo.classList.add('hide');
    
});
doraBtn.addEventListener("click", () =>{
    doraInfo.classList.remove('hide');

});










// function css_browser_selector(u) {
//     var ua = u.toLowerCase(),
//         is = function (t) {
//             return ua.indexOf(t) > -1;
//         },
//         g = 'gecko',
//         w = 'webkit',
//         s = 'safari',
//         o = 'opera',
//         m = 'mobile',
//         h = document.documentElement,
//         b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
//     c = b.join(' ');
//     h.className += ' ' + c;
//     return c;
// }
// css_browser_selector(navigator.userAgent);
// $(document).ready(function () {
//             $.expr[':'].external = function (obj) {
//                 return !obj.href.match(/^mailto\:/) && !obj.href.match(/\.gov/) && !obj.href.match(/\.state\.mo\.us/) && !obj.href.match(/\.us/) && !obj.href.match(/^javascript\:/) && !obj.href.match(/\youtube\.com\/\user\/\mogov1/) && !obj.href.match(/\moguard\.com/) && !obj.href.match(/\modot\.org/) && !obj.href.match(/\local\.dor/);
//             };
//             $('a:external').addClass('external');
//             $("a[href*='twitter.com/MoGov'], " + "a[href*='twitter.com/MoRevenue/'], " + "a[href*='youtube.com/morevenue/'], " + "a[href*='facebook.com/pages/State-of-Missouri/'],  " + "a[href*='https://itunes.apple.com/us/app/id926478267?mt=8'],  " + "a[href*='https://play.google.com/store/apps/details?id=gov.mo.jobs&hl=en'], " + "a[href*='facebook.com/mogov'],a[href*='missouriorgandonor.com'], " + "a[href*='flickr.com/photos/48275616@N07'], " + "a[href*='twitter.com/MissouriRevenue']," + "a[href*='www.facebook.com/MissouriRevenue/']," + "a[href*='https://vimeo.com/missourirevenue']," + "a[href*='https://www.instagram.com/missourirevenue']," + "a[href*='https://dora.chat']," + "a[href*='https://donatelifemissouri.org']," + "a[href*='https://m.facebook.com/MissouriRevenue/']," + "a[href*='www.youtube.com/user/morevenue']").removeClass("external");
//             $("a[href*='http://']:not([href*='" + location.hostname + "'])").not(".external").addClass('new-window');
//             $("a[href*='http://']:not([href*='" + location.hostname + "'])").not(".external").click(function () {
//                 window.open(this.href);
//                 return false;
//             });
//             $('.external').append("<span class='external-link'></span>");
//             $('a[href$=".pdf"],.pdf').addClass("pdf");
//             $('.pdf').append("<span class='pdf-label'><b class='hide'>PDF Document</b></span>");
//             $("a[href$='.xls'], a[href$='.xlsx'],.xls").addClass("xls");
//             $('.xls').append("<span class='xls-label'><b class='hide'>Excel Spreadsheet</b></span>");
//             $("a[href$='.doc'], a[href$='.docx'], a[href$='.txt'],.doc").addClass("doc");
//             $('.doc').append("<span class='doc-label'><b class='hide'>Word Document</b></span>");
//             $("a[href$='.ppt'], a[href$='.pptx'],.ppt").addClass("ppt");
//             $('.ppt').append("<span class='ppt-label'><b class='hide'>Powerpoint Presentation</b></span>");
//             $("a[href$='.zip'], a[href$='.gzip'], a[href$='.rar'],.zip").addClass("zip");
//             $('.zip').append("<span class='zip-label'><b class='hide'>Compressed Archive</b></span>");
//             $("a[href$='.xml'],.xml").addClass("xml");
//             $('.xml').append("<span class='xml-label'><b class='hide'>XML Document</b></span>");
//             $("a.external:has(img) .external-link, #connect:has('.external') .external-link, #toolbar:has('.external') .external-link, a.pdf:has(img) .pdf-label, a.pdf:has(button) .pdf-label, button:has(a) .pdf-label, a.xls:has(img) .xls-label, a.doc:has(img) .doc-label, .share-container ul li .external-link, a.rss .xml-label").remove();
//             if ($(this).width() > 739) {
//                 $('a.external').click(function (e) {
//                     var link = $(this).attr('href');
//                     e.preventDefault();
//                     $('body').append("<div id='modal-content' class='modal fade external-modal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-describedby='external link warning' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='bg-primary'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><div class='modal-title' aria-labelledby='myModalLabel'><b>Warning - Exiting Site</b></div></div></div><div class='modal-body'><p>Beware, you are currently exiting to an external site that is not part of the government(.gov) domain. Please be aware that you will be subject to a wide variety of content and experiences that are beyond our control. Always use good judgement when using these platforms and when following links to other web sites.</p></br></br>Click \"Yes\" to Continue to: <p class='external-warning'><span id='url' class='label label-warning'></span></p></div><div class='modal-footer'><a id='link' class='btn btn-warning' href='" + (link) + "' target='_blank' title='Yes'>Yes</a><a href='#' class='btn btn-primary' title='No' data-dismiss='modal'>No</a></div></div></div>");
//                     $('#modal-content').on('show.bs.modal', function () {
//                         $("#link").attr("href", link);
//                         var msg = (link);
//                         $('#url').text(msg);
//                         $('#link').click(function () {
//                             $('#modal-content').modal('hide');
//                         });
//                     });
//                     $('#modal-content').modal({
//                         show: true,
//                         keyboard: true
//                     });
//                 });
//             }
//             $('.caret-toggler').click(function () {
//                 var $c = $(this).find('.caret');
//                 if ($c.hasClass('flip-180')) {
//                     $c.removeClass('flip-180');
//                 } else {
//                     $c.addClass('flip-180');
//                 }
//             });
//             setMenuButtonActive();
//             generateBreadcrumbs();


//             function getCurrentViewportSize() {
//                 var size;
//                 $('#size-debug span').each(function () {
//                     if ($(this).css('display') !== 'none') {
//                         size = $(this).html();
//                     }
//                 });
//                 return size.trim();
//             }

//             function generateBreadcrumbs() {
//                 var $bc = $('#breadcrumbs');
//                 if ($bc.length) {
//                     var o = window.location.origin;
//                     var paths = window.location.pathname.split('/');
//                     paths.shift();
//                     var html = '<a href="/">Home</a>';
//                     for (p in paths) {
//                         if (paths[p] !== '' && paths[p] !== 'download.php') {
//                             html += ' Â» ';
//                             html += '<a href="' + (function () {
//                                 var url = o;
//                                 for (var i = 0; i <= p; i++) {
//                                     url += '/' + paths[i];
//                                 }
//                                 return url;
//                             })() + '">' + getCrumbTitle(paths[p]) + '</a>';
//                         }
//                     }
//                     $bc.html(html);
//                 }
//             }

//             function setMenuButtonActive() {
//                 var subDir = window.location.pathname.split('/')[1];
//                 if (in_array(subDir, ['forms', 'online-services', 'taxation', 'driver-license', 'motor-vehicle', 'media', 'resources', 'new-to-missouri'])) {
//                     if (subDir === 'media') {
//                         subDir = 'menu-media'
//                     }
//                     $('.' + subDir + ' .menu-tab').addClass('active-menu-tab');
//                 }
//             }

//             function in_array(needle, haystack) {
//                 return haystack.indexOf(needle) > -1;
//             }

//             function getCrumbURL(o, p, paths) {
//                 var url = o;
//                 for (var i = 0; i <= p; i++) {
//                     url += '/' + paths[i];
//                 }
//                 return url;
//             }

//             function getCrumbTitle(str) {
//                 str = str.split('.')[0];
//                 var words = str.split('-');
//                 var t = "";
//                 for (w in words) {
//                     t += capitalizeFirstLetter(words[w]) + " ";
//                 }
//                 return t;
//             }

//             function capitalizeFirstLetter(string) {
//                 return string.charAt(0).toUpperCase() + string.slice(1);
//             }


//         }