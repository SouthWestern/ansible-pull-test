// This file can be used to configure global preferences for Firefox
// Example: Homepage
//pref("browser.startup.homepage", "http://www.weebls-stuff.com/wab/");
//global preferences for firfox
pref("general.config.obscure_value", 0);
pref("general.config.filename", "firefox.cfg");

pref("network.proxy.type", 1, locked);
pref("network.proxy.http", "lightspeed.swsd.k12.pa.us", locked);
pref("network.proxy.http_port", 8080, locked);
pref("network.proxy.https", "lightspeed.swsd.k12.pa.us", locked);
pref("network.proxy.https_port", 8080, locked);
pref("network.proxy.ssl", "lightspeed.swsd.k12.pa.us", locked);
pref("network.proxy.ssl_port", 8080, locked);
pref("network.proxy.share_proxy_settings", true, locked);
pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1, .swsd.k12.pa.us, 10.144.0.0/12", locked);

pref("privacy.donottrackheader.enabled", true, locked);

