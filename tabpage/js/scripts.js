

var $ = function (id) {
    return document.getElementById(id);
};

var bangs = [

    ["!d", "https://duckduckgo.com/?q=", "DuckDuckGo"],
    ["!g", "https://www.google.ca/#q=", "Google"],
    ["!i", "http://www.imdb.com/find?q=", "IMDB"],
    ["!w", "http://en.wikipedia.org/w/index.php?search=", "Wikipedia"],
    ["!y", "https://www.youtube.com/results?search_query=", "YouTube"]
];

var mnus = [ // mnu Titles "Title",
    "Work",
    "Media",
    "Torrents",
    "News",
    "Network",
    "Misc"
];

var showFavicon = true; // Enable/Disable Favicons

// Link setup (separate with ["", "", ""],)
// Format: ["Name", "URL", "Custom Favicon"],
var links = [
    // work
    ["gmail",                      "https://mail.google.com/mail/u/0/#inbox",                ""],
    ["school email",                "https://mail.google.com/mail/u/1/#inbox",                  ""],
    ["doc",                 "https://docs.google.com/document/u/0/",              ""],
    ["myconcordia",          "https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG",     ""],
    ["anthromatters",                    "http://www.anthromatters.com/",             ""],
    ["globalborders",                    "https://globalorders.wordpress.com/",             ""],
    ["cultural imp",                    "https://culturalimperialism.wordpress.com/",             ""],
    ["concordia library",                    "http://library.concordia.ca/",             ""],
    ["STM 129",                    "http://www.stm.info/en/info/networks/bus/local/line-129-south/56207",             ""],
    
    ["", "", ""], //media
    
    ["Reddit",                      "http://reddit.com",                    ""],
    ["YouTube",                     "http://youtube.com",                   ""],
    ["4chan",                  "http://www.4chan.org/",               ""],
    ["animeland",                    "http://www2.animeland.tv/",                  ""],
    ["cricfree",                    "http://cricfree.tv/",                  ""],    
    ["123movies",                    "https://123movies.is",                  ""],
    ["netflix",                    "https://www.netflix.com/",                  ""],
  
    ["", "", ""], //torrent
    
    ["TPB",         "https://thepiratebay.se/",          ""],
    ["rarbg",                "http://rarbg.to/index8.php",          ""],
    ["extratorrent",                 "http://extratorrent.cc/",          ""],
    ["1337x",            "http://1337x.to/",          ""],
    ["yts",    "https://yts.ag/",         ""],
    
    ["", "", ""], //news
    
    ["googlenews",                        "https://news.google.com/",                   ""],
    ["arstechnica",                    "http://arstechnica.com/",          ""],
    ["torrentfreak",                       "https://torrentfreak.com/",       ""],
    ["linuxtoday",                "http://www.linuxtoday.com/",        ""],
    ["omgubuntu",                "http://www.omgubuntu.co.uk/",        ""],  
    ["distrowatch",                "https://distrowatch.com/",        ""],  
    ["aintitcool",                "http://www.aintitcool.com/",        ""],
    ["imdb",                "http://www.imdb.com/",        ""],
    ["boxofficemojo",                "http://www.boxofficemojo.com/",        ""],


    ["", "", ""], //network
    
    ["router",                      "http://192.168.1.1",                   ""],
    ["bell router",                    "http://192.168.2.1",                  ""],
    ["DNS",                    "http://192.168.1.129/admin",                 ""],
    ["NAS",               "http://192.168.1.101",            ""],
    ["stream",                     "http://192.168.1.5",                   ""],
    ["github",                   "https://github.com/chadowmari16",            ""],
    ["digitalocean",                  "https://www.digitalocean.com/",               ""],
    ["cloudflare",                  "https://www.cloudflare.com/",               ""],
    ["gnome extensions",                  "https://extensions.gnome.org/",               ""],
    ["noip",                  "https://my.noip.com/#!/",               ""],
    
    ["", "", ""], //misc
    
    ["parent futee",          "http://cuisinefuteeparentspresses.telequebec.tv/recettes",   ""],
    ["trois fois par jour",           "http://www.troisfoisparjour.com",                     ""],
    ["allrecipes",                      "http://allrecipes.com/",               ""],
    ["shutupandeat",                "http://www.shutupandeat.ca/",              ""],
    ["amazon",                     "https://www.amazon.ca/",              ""],
    ["ebay",                     "http://www.ebay.ca/",                   ""],
    ["newegg",                     "http://www.newegg.ca/",              ""],
    ["kijiji",            "http://www.kijiji.ca/",                    ""]
  //  ["google maps",     "https://www.google.ca/maps/@45.5163825,-73.6065395,14z",                    ""]
   // ["citymapper",            "https://citymapper.com/montreal",                    ""]
   // ["openstreetmap",            "https://www.openstreetmap.org/#map=5/51.500/-0.100",                    ""]
];

var hlpMnuMaxHgt = 86;

var ss = ""; //Leave empty
var defss = "!g"; //default bang

function init() {

    for (var i = 0; i < bangs.length; i++) {
        if (bangs[i][0] === defss) {
            ss=bangs[i][1];
            $('qry').placeholder = bangs[i][2];
            break;
        }
    }

    if (ss === "") { alert("Error: Missing default search engine!"); }

    hlpMnuMaxHgt += (bangs.length * 15);

    build();
    $('qry').value = "";
}

function build() { /*Code heavily based off of Twily's v4 homepage.*/

    // Build Bang List
    for (var i = 0; i < bangs.length; i++) {
        $('bngLst').innerHTML += "<li><b>" + bangs[i][0] + "</b> - " + bangs[i][2] + "</li>";
    }

    // Build categoryList
    $('mnu').innerHTML = "";
    if (mnus.length > 8) {
        alert("Too many menu Categories. Please restrict to 6 or less.");
        return;
    }

    for (i = 0; i < mnus.length; i++) { // Build mnu buttons
        if (mnus[i].length > 10) {
            alert("group label \"" + mnus[i] + "\" is too long. Please restrict to 10 or less characters. Skipping group label.");
            continue;
        } else {
            $('mnu').innerHTML += "<li id=\"mnuItm_" + (i+1) + "\" class=\"mnuItm\"><label id=\"mnuItmLbl_" + (i+1) + "\">" + mnus[i] + "</label><div class=\"subMnuCon\"><ul id=\"subMnu_" + (i+1) + "\" class=\"subMnu con\"></ul></div></li>";
        }
    }


    //Build mnus
    var m = 1,
        skip = false;

    for (i = 0; i < links.length; i++) { // mnu links
        if (links[i][0] === "" && links[i][1] === "") {
            skip = true;
        }

        if (!skip) {
            var printimg = "";

            if (showFavicon) {
                var favicon = "";
                if (links[i][2] !== "") {
                    favicon = links[i][2];
                } else {
                    favicon = getFavicon(links[i][1]);
                }
                
                printimg = "<img id=\"img_" + i + "\" src=\"" + favicon + "\"" + " onload=\"javascript:this.style.visibility='inherit';\" /> ";
            }


            $('subMnu_' + m).innerHTML += "<li class='subMnuItm'><a href=\"" + links[i][1] + "\" target=\"_self\">" + printimg + links[i][0] + "</a></li>";
        } else {
            skip = false;
            m++;
        }
    }
}

function handleQuery(e, q) { // Handle search query. based off of twily's v4 homepage.
    var key = e.keyCode || e.which;

    if (key === 13) { // enter
        var qList = q.split(" ");

        if (qList[0].charAt(0) === "!") { //does the query call a bang

            for (var i = 0; i < bangs.length; i++) { //find which bang was called
                if (bangs[i][0] === qList[0]) {
                    ss = bangs[i][1];
                    $('qry').placeholder = bangs[i][2];
                    break;
                }
            }

            if (qList.length > 1) {
                qList.splice(0,1);
                window.location = ss + qList.join(" ").replace(/&/g, "%26").trim();
            } else {
                $('qry').value = "";
            }
        } else { // where bang not specified, use selected search
            window.location = ss + q.replace(/&/g, "%26");
        }
    }
}

var m = false;

function toggleHelp() { // Toggle help
    m = !m;
    if (m) {
        $('hlpCon').style.opacity = "1";
        $('hlpCon').style.maxHeight = hlpMnuMaxHgt + "px";
        $('hlpCon').style.marginTop = "0";

    } else {
        $('hlpCon').style.opacity = "0";
        $('hlpCon').style.maxHeight = 0;
        $('hlpCon').style.marginTop = "-14px";
    }
}

function getFavicon(url) {
    var l = document.createElement("a");
    l.href = url;

    return l.protocol + "//" + l.hostname + "/favicon.ico";
}
