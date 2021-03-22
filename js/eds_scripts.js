console.log('The customization script is loading.');

setTimeout(function() {

jQuery(document).ready(function() {

	var pageName = window.location.hostname;

	// Is this the resolver screen? If so, let's clean up this terrible mess.

	if(pageName.indexOf('resolver') > -1) {

		console.log('This is the Link Resolver.');

		// First, remove the existing styles
		jQuery('head').find('link').remove();
		console.log('Removing default stylesheets');

		// Now, add in the GVSU template
		jQuery('head').append('<meta http-equiv="cache-control" content="no-cache"><meta http-equiv="pragma" content="no-cache"><meta name="viewport" content="width=device-width, initial-scale=1"><link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=EB+Garamond|Lato:400,700"><link type="text/css" rel="stylesheet" href="https://prod.library.gvsu.edu/libs/fontawesome/fontawesome-all.min.css"><link type="text/css" rel="stylesheet" href="https://gvsu.edu/cms4/skeleton/2/files/css/styles.css"><link type="text/css" rel="stylesheet" href="https://gvsu.edu/library/files/css/base.css"><link type="text/css" rel="stylesheet" href="https://prod.library.gvsu.edu/labs/eds_files/css/eds_styles.css"><script src="https://gvsu.edu/cms4/skeleton/2/files/js/cms4.2.min.js"></script><script src="https://prod.library.gvsu.edu/labs/template_hours/hours.js"></script>');

		jQuery('body').prepend('<div role="banner"> <a href="#main" class="focus-inverted">Skip to main content</a> <div class="header"> <div class="row content"> <div class="col-5 col-sm-12 logo"> <div class="col-12 col-sm-9"> <h1> <a href="https://www.gvsu.edu"> <!--[if lte IE 8|!IE]> <img src="/homepage/files/img/gvsu_logo_white.png" alt="Grand Valley State University Logo" /> <![endif]--> <!--[if gte IE 9|!IE]><!--> <img src="https://gvsu.edu/homepage/files/img/gvsu_logo_white.svg" alt="Grand Valley State University Logo" onerror="this.onerror=null;this.src=\'https://gvsu.edu/homepage/files/img/gvsu_logo_white.png\'"> <!--<![endif]--> <span id="gv-logo-label" class="sr-only" aria-hidden="true">Grand Valley State University</span> </a> </h1> </div> <div class="hide-lg hide-md col-sm-3"> <a id="gv-hamburger" role="button" tabindex="0" aria-label="Menu" aria-controls="cms-navigation-mobile"> <img src="https://prod.library.gvsu.edu/labs/cms4.1_files/menu.png" alt="" style="width:auto;min-width:auto;" aria-hidden="true"></span> </a> </div> </div> <div class="col-7 col-sm-12 quick hide-print hide-sm"> </div> </div> </div> <div class="site"> <div class="row content"> <div class="col-8 col-sm-12"> <h1 class="h2 serif padding-none"> <a href="https://www.gvsu.edu/library"> University Libraries </a> </h1> <h2 class="sr-only">Search</h2> <form action="https://searchbox.ebsco.com/search/" method="get" class="library-search" role="search"> <input name="direct" type="hidden" value="true"> <input name="schemaId" value="search" type="hidden" /> <input type="hidden" name="custid" value="s8484662"> <input name="scope" type="hidden" value="site"> <input name="proxy" value="http://ezproxy.gvsu.edu/login?url={targetURL}" type="hidden" /><input name="site" type="hidden" value="eds-live"> <input name="profid" type="hidden" value="eds"> <input name="groupid" type="hidden" value="main"> <input name="authtype" type="hidden" value="ip,guest"> <p> <label for="s.q" class="sr-only"> Search the Library for Articles, Books, and More </label> <input type="text" id="s.q" name="bquery" placeholder="Find articles, books, &amp; more" size="45"><button type="submit">Find It!</button> </p> </form> <div class="library-nav"> <h3>More research tools:</h3> <ul> <li> <a href="https://libguides.gvsu.edu/az.php">Databases</a> </li> <li> <a href="https://www.gvsu.edu/library/findbooks">Books</a> </li> <li> <a href="https://www.gvsu.edu/library/findjournals">Journals</a> </li> <li> <a href="https://libguides.gvsu.edu/">Subject Guides</a> </li> </ul> </div> </div> <div class="col-4 col-sm-12 library-hours"> </div> </div> </div> <div id="cms-navigation" class="navigation hide-sm hide-print"> <div class="content"> <div role="navigation"> <ul role="menubar"> <li> <a href="https://gvsu.edu/library/find-materials-2.htm" target="_self"> Find Materials </a> </li> <li> <a href="https://gvsu.edu/library/services-4.htm" target="_self"> Services </a> </li> <li> <a href="https://gvsu.edu/library/about-the-university-libraries-3.htm" target="_self"> About Us </a> </li> <li> <a href="https://help.library.gvsu.edu" target="_self"> Help </a> </li> <li> <a href="https://www.gvsu.edu/library/myaccount" target="_self"> My Account </a> </li> </ul> </div> </div> </div> </div>');
		jQuery('body').append('<div class="clear hide-sm"></div> <div class="hide-print content"> <br> <hr> <div class="row"> <div class="col-6"> </div> <div class="col-6 text-right"> <a href="https://prod.library.gvsu.edu/status/?problem" class="cms-report-problem" id="problem-link">Report a problem with this page</a> </div> </div> </div> <script> var thisUrl = encodeURI(window.location); document.getElementById(\'problem-link\').href = \'https://prod.library.gvsu.edu/status/?problem&url=\' + thisUrl; </script> </div> </div> </div> <div role="contentinfo"> <div class="footer hide-print"> <div class="content"> <h1 class="sr-only">Footer</h1> <div class="row-gutter"> <div class="col-3 col-md-4 col-sm-6"> <h2 class="padding-none color-white"> Contact </h2> <p class="vcard"> <span class="tel"> <span class="value"> <a href="tel:616-331-3500">(616) 331-3500</a> </span> </span> <br> <a href="mailto:library@gvsu.edu" class="email">library@gvsu.edu</a> <br> </p> <br> <p class="vcard"> <span class="fn">Text Us!</span> <br> <span class="tel"> <span class="value"> <a href="sms:616-818-0219">(616) 818-0219</a> </span> </span> <br> </p> </div> <div class="col-3 col-md-4 col-sm-6"> <h2 class="padding-none color-white"> Social Media </h2> <p> <a href="https://twitter.com/gvsulib" title="Twitter" class="text-nodecoration" target="_blank"> <img src="https://prod.library.gvsu.edu/labs/cms4.1_files/twitter.png" alt="" style="width:auto;min-width:auto;" /> <span class="sr-only">https://twitter.com/gvsulib</span> </a> <a href="https://youtube.com/user/gvsulib" title="YouTube" class="text-nodecoration" target="_blank"> <img src="https://prod.library.gvsu.edu/labs/cms4.1_files/youtube.png" alt="" style="width:auto;min-width:auto;" /> <span class="sr-only">https://youtube.com/user/gvsulib</span> </a> <a href="https://instagram.com/gvsulib" title="Instagram" class="text-nodecoration" target="_blank"> <img src="https://prod.library.gvsu.edu/labs/cms4.1_files/instagram.png" alt="" style="width:auto;min-width:auto;" /> <span class="sr-only">https://instagram.com/gvsulib</span> </a> </p> <br class="hide-lg hide-md"> </div> <div class="col-3 col-md-4 col-sm-6"> <h2 class="padding-none color-white"> Committed to Equality </h2> <a href="https://gvsu.edu/library/acrl" target="_blank"> <img src="https://www.gvsu.edu/cms4/asset/0862059E-9024-5893-1B5AAAC2F83BDDD8/acrl.png" alt="ACRL Diversity Alliance Logo" style="width:auto;max-width:100%;"> </a> </div> <div class="col-3 col-md-4 col-sm-6"> <h2 class="padding-none color-white"> Federal Depository Library Program </h2> <a href="https://gvsu.edu/library/govdoc" target="_blank"> <img src="https://www.gvsu.edu/cms4/asset/0862059E-9024-5893-1B5AAAC2F83BDDD8/fdlp-new.png" alt="Federal Depository Library Program Logo" style="width:auto;max-width:100%;"> </a> </div> </div> </div> </div> <div class="bottom hide-print"> <div class="content"> <div class="row-gutter"> <div class="col-12 legal"> <h2 class="sr-only">Legal</h2> <ul> <li> <a href="https://gvsu.edu/affirmativeactionstatement.htm"><span class="hide-sm hide-md">GVSU is an </span>AA/EO Institution</a> </li> <li> <a href="https://gvsu.edu/privacystatement.htm">Privacy Policy</a> </li> <li> <a href="https://gvsu.edu/disclosures">Disclosures</a> </li> <li> <span class="hide-sm hide-md">Copyright </span>© 2018 GVSU </li> </ul> </div> </div> </div> </div> </div> <script src="https://prod.library.gvsu.edu/labs/chatbutton/chatbutton.js"></script>');
		

		// Now, make a few changes to the interface to fix conflicts between their template and ours.
		jQuery('header#header').find('div.header').removeClass('header');
		jQuery('header#header').removeAttr('role').removeAttr('id');
		jQuery('span.logo').remove();
		jQuery('ul.ftf-links:first-child').remove();
		jQuery('.open-url-resolver').addClass('content').attr('id','cms-content');
		jQuery('ul.basic-list').find('li:first-child').find('a').addClass('btn-lg').addClass('btn-primary').css('margin-bottom', '1.5em');

		if(jQuery('.ftf-results ul.basic-list > li').length > 1) {
					jQuery('.ftf-results ').find('ul.basic-list > li:first-child').after('<h1 class="h3 more-options">More Sources</h1>');
		}

		// Move the Revise Results link into the other tools
		var reviseLink = jQuery('ul.ftf-links a[data-auto="nav-revise-link"]').href;	
		jQuery('ul.ftf-links').hide();
		jQuery('ul.toolbar-tools').prepend('<li><a data-auto="nav-revise-link" href="' + reviseLink + '" class="nav-link color-s1">Revise Request</a></li>');

	} else {

		// Hide the Guest Access Banner
		/*if(jQuery('.guest-login').length > 0) {
			console.log('Removing the guest banner.');
			jQuery('.guest-login').hide();
		}*/

		// Change Ask a Librarian Link - the settings don't appear to work.

		if(jQuery('#itemAskLibrarian').length > 0) {

			console.log ('Fixing the Ask a Librarian link');
			jQuery('#itemAskLibrarian a').text('Ask a Question');
		}

		if(jQuery('a[data-auto="ep_link"').length > 0) {

			if(jQuery('dt:contains("Online Access:")').length > 0) {

			var onlineLink = jQuery('dt:contains("Online Access:")').next().find('a').attr('href');
			var onlineLinkLabel = jQuery('dt:contains("Online Access:")').next().find('a').text();


			var onlineLinkLabel = jQuery('a[data-auto="ep_link"').text();
			jQuery('ul.format-control').append('<li class="custom-link-item" data-auto="item_link"><span class="custom-link" data-auto="custom_link"><a data-auto="ep_image_link" href="' + onlineLink + '" target="_new" class="btn btn-primary ils-link">' + onlineLinkLabel + '</a></span></li><style>.btn-primary {background: #1b6ec2; color: #fff !important; } .btn {text-decoration: none; display: inline-block; border: 1px solid transparent; font-weight: normal; font-size: 1em; font-family: "Lato",sans-serif; padding: .325em .85em; -webkit-border-radius: 3.625px; -moz-border-radius: 3.625px; -ms-border-radius: 3.625px; border-radius: 3.625px; cursor: pointer; line-height: 1.65em; -webkit-transition: background 0.15s ease,color 0.15s ease,transform 0.15s ease; -moz-transition: background 0.15s ease,color 0.15s ease,transform 0.15s ease; -ms-transition: background 0.15s ease,color 0.15s ease,transform 0.15s ease; -o-transition: background 0.15s ease,color 0.15s ease,transform 0.15s ease; transition: background 0.15s ease,color 0.15s ease,transform 0.15s ease; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.05); box-shadow: inset 0 1px 1px rgba(0,0,0,0.05); vertical-align: middle; text-align: center; }</style>');

		}
	
		} 

		// Don't proxy links to our own website, dude (we can't neverproxy this because of reasons)

		if(jQuery('[href*="https://www-gvsu-edu.ezproxy.gvsu.edu/library"]').length > 0) {
			jQuery('a[href*="https://www-gvsu-edu.ezproxy.gvsu.edu/library"]').attr('href', 'https://www.gvsu.edu/library');
		}

		jQuery('.customerLogo').find('a').attr('href', 'https://www.gvsu.edu/library');
		jQuery('head').append('<style>.color-p4{color:#005bc6 !important;}</style>');
		jQuery('#footerLinks').append('<li><a href="https://gvsu.edu/library/support">Report a Problem</a></li>');

	}


});

}, 200);

