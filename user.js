//
/****************************************************************************
 * BetterFox                                                                *
 * name: yokoffing user.js                                                  *
 * version: 27 September 2020                                               *
 * url: https://github.com/yokoffing/Better-Fox                             *
 * license: https://github.com/yokoffing/Better-Fox/blob/master/LICENSE     *
 * README: https://github.com/yokoffing/Better-Fox/blob/master/README.md    *
 * "Ad meliora."                                                            *
****************************************************************************/


/****************************************************************************
 * START: FASTFOX                                                           *
****************************************************************************/
user_pref("gfx.webrender.all", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("dom.image-lazy-loading.enabled", true);

/****************************************************************************
 * START: SECUREFOX                                                         *
****************************************************************************/
/***NATIVE TRACKING PROTECTION***/
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", false);
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("pref.privacy.disable_button.cookie_exceptions", false);
user_pref("network.cookie.cookieBehavior", 5);
user_pref("privacy.purge_trackers.enabled", true);

/*** LINK PREFETCHING ***/
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);

/*** HYPERLINK AUDITING ***/
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

/*** DNS PREFETCHING ***/
user_pref("network.dns.disablePrefetch", true); 
user_pref("network.dns.disablePrefetchFromHTTPS", true);

/*** PRELOAD THE AUTOCOMPLETE URL ***/
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/*** NETWORK PREDICTOR ***/
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/*** LINK REL=PRELOAD ***/
user_pref("network.preload", true);

/*** NTP ***/
user_pref("browser.newtab.preload", true);

/*** SEARCH***/
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("security.insecure_connection_text.enabled", true);

/***PASSWORDS AND AUTOFILL***/
user_pref("signon.management.page.breach-alerts.enabled", true);
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
user_pref("signon.schemeUpgrades", false);
user_pref("signon.showAutoCompleteFooter", false);
user_pref("signon.autologin.proxy", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.debug", false);
user_pref("signon.importedFromSqlite", false);
user_pref("signon.recipes.path", "");
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.autocompleteOff", true);
user_pref("signon.showAutoCompleteOrigins", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);

/***GOOGLE SAFE BROWSING***/
user_pref("browser.safebrowsing.allowOverride", true);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

/***GEO MOZILLA INSTEAD OF GOOGLE***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.network.logging.enabled", false);

/***FIREFOX TELEMETRY AND ANNOYANCES***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("default-browser-agent.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("browser.ping-centre.telemetry", false);

/****************************************************************************
 * START: PESKYFOX                                                          *
****************************************************************************/

/*** FOR USERCHROME ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

/***POCKET***/
// user_pref("browser.pocket.enabled", false);\

/***DISABLE AUTOFILL***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);

/***OTHER***/
user_pref("accessibility.force_disabled", 1);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.display.show_image_placeholders", true);
user_pref("browser.download.folderList", 0);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.startup.page", 3);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", -1);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("media.autoplay.default", 1);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("browser.backspace_action", 2);
user_pref("ui.key.menuAccessKey", 0);
user_pref("findbar.highlightAll", true);
user_pref("layout.spellcheckDefault", 2);
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("editor.truncate_user_pastes", false);
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

/****************************************************************************
 * START: SMOOTHFOX                                                         *
****************************************************************************/
/***General smooth scrolling improvements***/
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);
user_pref("mousewheel.min_line_scroll_amount", 35);


****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
