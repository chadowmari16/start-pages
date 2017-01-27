// All the variable for the app
// Their name are explicit

var username = "Simon"
var clientid = "be212a58528168962a39c64052c1d88e";
var redirecturi = "http://localhost:8002/callback.html";
var locations = [
  "3534",
  
];
var images = [
  "1412446496031.jpg",
  "1417804954510.jpg",
  "1424655132831.jpg",
  "1429482830109.jpg",
  "1429569823779.jpg",
  "1437167260211.jpg",
  "1437214448937.jpg",
  "1437214448937.jpg",
  "1444816416285.jpg",
  "1444827390885.jpg",
  "1444827771939.jpg",
  "1445223050369.jpg",
  "1445705808951.jpg",
  "1445713184723.jpg",
  "1448399280112.jpg",
  "1450066383293.jpg",
  "1450074394745.jpg"
];
var searchs = [
  ["!g", "https://www.google.ca/#q="],
  ["!y", "https://www.youtube.com/results?search_query="],
  ["!w", "https://en.wikipedia.org/w/index.php?search="]
];
var favorites = [
  [ "School",
    [
      ["gmail" , "https://mail.google.com/mail/u/0/#inbox", "g"],
      ["school email" , "https://mail.google.com/mail/u/1/#inbox", "sg"],
      ["doc" , "https://docs.google.com/document/u/0/", "d"],
      ["myconcordia" , "https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG", "mc"],
      ["anthromatters" , "http://www.anthromatters.com/", "am"],
      ["globalborders" , "https://globalorders.wordpress.com/", "gb"],
      ["cultural imperialism" , "https://culturalimperialism.wordpress.com/", "ci"],
      ["concordia library" , "http://library.concordia.ca/", "cl"],
      ["STM 129" , "http://www.stm.info/en/info/networks/bus/local/line-129-south/56207", "129"]
    ]
  ],
  [ "media",
    [
      ["reddit" , "http://reddit.com", "r"],
      ["youtube" , "http://youtube.com", "y"],
      ["4chan" , "http://www.4chan.org/" , "4"],
      ["Netflix", "http://netflix.com",  "n"],
      ["animeland","http://www2.animeland.tv/", "a"],
      ["cricfree", "http://cricfree.tv/", "cf"],
      ["123movies" , "https://123movies.is", "123"]
    ]
  ],
  [ "Torrent",
    [
      ["thepiratebay", "http://thepiratebay.se", "t"],
      ["RARBG", "http://rarbg.to/index8.php", "ra"],
      ["Extratorrent",  "http://extratorrent.cc/", "ex"],
      ["1337x", "http://1337x.to/", "1337"],
      ["yts", "https://yts.ag/", "yts"]
    ]
  ],
  [ "Network/dev",
    [
      ["Router",                      "http://192.168.1.1", "ro"],
      ["Bell router",                       "http://192.168.2.1", "br"],
      ["DNS",                           "http://192.168.1.129/admin", "dns"],
      ["NAS",                        "http://192.168.1.101", "nas"],
      ["Stream",                        "http://192.168.1.5", "stream"],
      ["Cam",                             "http://192.168.1.35", "cam"],
      ["Github",                       "https://github.com/chadowmari16", "git"],
      ["digitalocean",                             "https://www.digitalocean.com/", "di"],
      ["cloudflare",                              "https://www.cloudflare.com/", "cl"],
      ["Gnome extensions",                    "https://extensions.gnome.org/", "ge"],
      ["noip",                              "https://my.noip.com/#!/", "ni"],   
      ["namecheap",                              "https://www.namecheap.com/", "nc"]       	
    ]
  ],
  [ "news",
    [
      ["googlenews",                      "https://news.google.com/", "gn"],
      ["arstechnica",                       "http://arstechnica.com/", "ar"],
      ["Torrentfreak",                           "https://torrentfreak.com/", "tf"],
      ["linuxtoday",                        "http://www.linuxtoday.com/", "lt"],
      ["omgubuntu",                        "http://www.omgubuntu.co.uk/", "ob"],
      ["distrowatch",                             "https://distrowatch.com/", "dw"],
      ["aintitcool",                       "http://www.aintitcool.com/", "aic"],
      ["boxofficemojo",                             "http://www.boxofficemojo.com/", "bom"],
      ["latenightlinux",                        "http://latenightlinux.com/", "ln"]
    ]
  ],
  [ "misc",
    [
      ["googlemaps",   "https://www.google.ca/maps/@45.5163825,-73.6065395,14z", "gm"],
      ["citymapper",   "https://citymapper.com/montreal", "cm"],
      ["openstreetmap",    "https://www.openstreetmap.org/#map=5/51.500/-0.100", "osm"],
      ["Waybackmachine",    "https://archive.org/web/", "wbm"],
      ["Amazon",                      "https://www.amazon.ca/", "am"],
      ["ebay",                       "http://www.ebay.ca/", "e"],
      ["Newegg",                           "http://www.newegg.ca/", "ne"],
      ["kijiji",                        "http://www.kijiji.ca/", "k"],
      ["parent futee", "http://cuisinefuteeparentspresses.telequebec.tv/recettes", "pf"],
      ["trois fois par jour", "http://www.troisfoisparjour.com", "tfpj"],
      ["All recipes",   "http://allrecipes.com/"],
      ["shutupandeat",    "http://www.shutupandeat.ca/", "su"]
    

    ]
  ]
];
var feeds = [
  ["Movies","https://thepiratebay.org/rss/top100/205"],
  ["TV", "https://thepiratebay.org/rss/top100/201"],
  ["BBC", "http://feeds.bbci.co.uk/news/rss.xml"]
];
