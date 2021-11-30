import Head from 'next/head'
import Nav from './Nav'

const Layout = ({children}) => {

    return (
        <>
            <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <title>e Learn - Online Training Bootstrap Education Theme</title>
            <meta name="description" content="UX designer and web developer"/>
            <meta name="author" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" type="text/css" media="screen" href="assets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" media="screen" href="assets/css/main.css"/>
            <link rel="stylesheet" type="text/css" media="screen" href="assets/css/skins/default.css" data-name="skins"/>
            <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'/>
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,400italic,600italic,600,700italic,700' rel='stylesheet' type='text/css'/>
            <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,400italic,500,300italic,300,100,500italic' rel='stylesheet' type='text/css'/>
            <link rel="stylesheet" href="assets/css/font-awesome.min.css"/>

            <script type="text/javascript" src="js/modernizr.custom.26633.js"></script> 
            
            <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script> 
            <script src="js/bootstrap.min.js"></script> 

          
            <script type="text/javascript" src="js/jquery.placeholder.js"></script> 

          
            <script type="text/javascript" src="js/stickUp.js"></script> 
            <script src="js/jquery.superslides.js" type="text/javascript" charset="utf-8"></script> 
            <script src="js/jquery.isotope.js" type="text/javascript"></script>
            <link type="text/css" rel="stylesheet" property="stylesheet" id="theme" href="assets/css/jquery-ui-1.8.16.custom.css"/>
            <link type="text/css" rel="stylesheet" property="stylesheet" href="assets/css/lightbox.min.css"/>
            <script type="text/javascript" src="js/jquery.ui.widget.min.js"></script> 
            <script type="text/javascript" src="js/jquery.ui.rlightbox.js"></script> 
            <link rel="stylesheet" property="stylesheet" href="assets/css/prettyPhoto.css" type="text/css" media="screen" title="prettyPhoto main stylesheet" charset="utf-8" />
            <script src="js/jquery.prettyPhoto.js" type="text/javascript"></script>
            <script type="text/javascript" src="js/jquery.contact.js"></script> 
            <script type="text/javascript" src="js/jquery.subscribe.js"></script> 
<script src="http://maps.google.com/maps?file=api&amp;v=2.x&amp;key=ABQIAAAAjU0EJWnWPMv7oQ-jjS7dYxSPW5CJgpdgO_s4yyMovOaVh_KvvhSfpvagV18eOyDWu7VytS6Bi1CWxw" type="text/javascript"></script> 

            <script src="js/jquery.classyloader.min.js"></script> 
            <script defer src="js/jquery.flexslider.js"></script> 
            <script src="js/jquery.easing.js"></script> 
            <script src="js/jquery.mousewheel.js"></script> 
            <script defer src="js/slideroption.js"></script> 
            <script type="text/javascript" src="js/jquery.countTo.js"></script> 
            <script src="js/new.js" type="text/javascript" charset="utf-8"></script> 
            <script src="js/custom.js"></script>

            </Head>
            <Nav/>
            {children}
            
        </>
    )
}

export default Layout