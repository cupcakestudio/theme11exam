<!doctype html>
<html lang="en">
  <head>
	 <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="images/favicon_k2.png" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=DM+Serif+Text:400,700&display=swap"
    />
	  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/customheaderfooter.css ">
    
  
  </head>
	
  <body  <?php body_class(); ?>>
	  
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'twentytwentyone' ); ?></a>
	  
    <header>
      <a href="https://thlstudios.dk/kea/theme11exam-wp">
        <img src="https://thlstudios.dk/kea/theme11exam-wp/wp-content/uploads/2023/12/logo.png" alt="homeknap" id="home"
      /></a>
      <nav class="mobile-nav">
        <button class="burgermenu" onclick="navbartoggle()">
          <i class="fa fa-bars"></i>
        </button>
        <ul id="navbar" class="links">
          <li>
            <a href="https://thlstudios.dk/kea/theme11exam-wp/behandlinger/"
              >Behandlinger</a
            >
          </li>
          <li>
            <a href="https://thlstudios.dk/kea/theme11exam-wp/booking/"
              >Book tid
            </a>
          </li>
          <li>
            <a href="https://thlstudios.dk/kea/theme11exam-wp/om-klinikken/"
              >Om os</a
            >
          </li>
        </ul>
      </nav>

      <nav class="desktop-nav">
        <ul class="links">
          <li>
            <a href="https://thlstudios.dk/kea/theme11exam-wp/behandlinger/"
              >Behandlinger</a
            >
          </li>
          <li>
            <a href="https://thlstudios.dk/kea/theme11exam-wp/booking/"
              >Book tid</a
            >
          </li>
          <li>
            <a href="https://thlstudios.dk/kea/theme11exam-wp/om-klinikken/"
              >Om os</a
            >
          </li>
        </ul>
      </nav>
    </header>

    <script>
      //funktionen kører kun på mobilformen
      function navbartoggle() {
        //variablen trækker på id'et navbar
        var navbar = document.getElementById("navbar");
        //Hvis betingelsen kan blive opfyldt, så vises navbaren ikke. Så display none bliver anvendt.
        if (navbar.style.display === "block") {
          navbar.style.display = "none";
        }
        // Hvis man ikke kan se burgermenuen (linksne i block format), sørger den for at den kommer frem når man trykker.
        else {
          navbar.style.display = "block";
        }
      }
    </script>
  </body>
</html>
	<?php wp_head(); ?>
