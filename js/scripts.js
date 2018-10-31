jQuery(document).ready(function() {
    $cms = jQuery('.field--name-field-icon img');

    $cms.each(function() {
        switch (this.alt) {
            case 'WordPress Logo':
                row = this.closest('.views-row');
                row.childNodes[0].style.backgroundColor = '#585858';
                break;
            case "Drupal Logo":
                row = this.closest('.views-row');
                row.childNodes[0].style.backgroundColor = '#0644BE';
                break;
            case "HTML 5 Logo":
                row = this.closest('.views-row');
                row.childNodes[0].style.backgroundColor = '#666';
                break;
        }
    });

    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if (parseInt(jQuery(window).width()) >= 1440) {
            jQuery(".hero-0").css({
                backgroundSize: (100 + scroll / 15) + "%",
                top: -(scroll / 20) + "%",
            });
        }
    });
});
