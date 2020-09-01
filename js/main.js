$(function() {
  // Open external links in a new tab
  $(document).on('click', 'a', function(e) {
    var $link = $(this);

    if ( isExternalLink( $link ) ) {
      window.open( this.href );
      return false;
    }
  });

  // Add an link--external class
  $('a').each(function() {
    var $link = $(this);

    if ( isExternalLink( $link ) ) {
      $link.addClass('link--external');
    }
  });

  function isExternalLink($el) {
    var href = $el.attr('href');
    var link = $el.get(0).href;
    var link_host = link.split('/')[2];
    var document_host = document.location.href.split('/')[2];

    return link_host != document_host && !link.indexOf('mailto:').length;
  };

  $(document).on('click', '.hamburger', function() {
    $('html').toggleClass('mobile-nav-active');
  });

  // $(document).on('mouseenter', 'a', function(){
  //   $('html').addClass('link-active');
  // });

  // $(document).on('mouseleave', 'a', function(){
  //   $('html').removeClass('link-active');
  // });

  $(".hamburger").click(function() {
    $('body').toggleClass('nav-open');
  });

  // Home page blob
  var $blob = $('.home-page-blob');
  if ( $blob.length ) {
    $(window).mousemove(function(e) {
      var x = e.clientX;
      var y = e.clientY;
      var xRatio = x / window.innerWidth;
      var yRatio = y / window.innerHeight;
      // var val1 = 1 * xRatio + (100 * yRatio);
      var val1 = 0;
      var val2 = 50 * xRatio + (50 * yRatio);
      // var val3 = 100 * xRatio + (1 * yRatio);
      var val3 = 100;
      var gradient = 'linear-gradient(180deg, #00E5E1 ' + val1 + '%, #6D61FF ' + val2 + '%, #FFA2E8 ' + val3 + '%)';
      var rotate = 360 * xRatio;

      $blob.css({
        backgroundImage: gradient
      });

      $blob.css({
        width: x,
        height: y,
        transform: 'translate(-50%, -50%) rotate(' + rotate + 'deg)'
      });
    });
  }
});
