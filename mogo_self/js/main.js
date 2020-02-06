$( document ).ready(function() {
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });
    
    //slick slider initial start
    $('.review-slider').slick({
        nextArrow: '<span class="slider-next-btn slider-nav-btn"><img src="images/icons/arrow-next.svg"></span>',
        prevArrow: '<span class="slider-prev-btn slider-nav-btn"><img src="images/icons/arrow-prev.svg"></span>',
    });
    //slick slider initial end
});