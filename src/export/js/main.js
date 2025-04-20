
$(document).ready(function() {
    // Mobile menu toggle
    $('.mobile-menu-button').click(function() {
        $('.mobile-menu').toggleClass('hidden');
    });

    // Form validation
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        $('.error-message').remove();
        $('.form-input').removeClass('border-red-500');

        let hasError = false;
        
        // Basic validation
        $(this).find('[required]').each(function() {
            if (!$(this).val()) {
                hasError = true;
                $(this).addClass('border-red-500');
                $(this).after('<p class="text-red-500 text-sm mt-1 error-message">This field is required</p>');
            }
        });

        // Email validation
        const emailInput = $(this).find('input[type="email"]');
        if (emailInput.length && emailInput.val()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.val())) {
                hasError = true;
                emailInput.addClass('border-red-500');
                emailInput.after('<p class="text-red-500 text-sm mt-1 error-message">Please enter a valid email address</p>');
            }
        }

        if (!hasError) {
            // Show success message
            const successMessage = $('<div class="alert alert-success">Form submitted successfully!</div>');
            $(this).prepend(successMessage);
            
            // Clear form
            this.reset();
            
            // Remove success message after 3 seconds
            setTimeout(function() {
                successMessage.fadeOut('slow', function() {
                    $(this).remove();
                });
            }, 3000);
        }
    });

    // Dynamic content loading
    $('[data-load-content]').each(function() {
        const target = $(this);
        const url = target.data('load-content');
        
        $.get(url, function(response) {
            target.html(response);
        }).fail(function() {
            target.html('Error loading content');
        });
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });

    // Tooltips
    $('[data-tooltip]').hover(
        function() {
            const tooltip = $('<div class="tooltip"></div>');
            tooltip.text($(this).data('tooltip'));
            $('body').append(tooltip);
            
            const pos = $(this).offset();
            tooltip.css({
                top: pos.top + $(this).outerHeight() + 10,
                left: pos.left + ($(this).outerWidth() / 2) - (tooltip.outerWidth() / 2)
            });
            
            tooltip.fadeIn('fast');
        },
        function() {
            $('.tooltip').remove();
        }
    );
});
