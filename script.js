$(document).ready(function() {
    $('#one').click(function() {
        document.forms.display.value += 1;
    });
    $('#two').click(function () {
        document.forms.display.value += 2;
    });
    $('#three').click(function () {
        document.forms.display.value += 3;
    });
    $('#four').click(function () {
        document.forms.display.value += 4;
    });
    $('#five').click(function () {
        document.forms.display.value += 5;
    });
    $('#six').click(function () {
        document.forms.display.value += 6;
    });
    $('#seven').click(function () {
        document.forms.display.value += 7;
    });
    $('#eight').click(function () {
        document.forms.display.value += 8;
    });
    $('#nine').click(function () {
        document.forms.display.value += 9;
    });
    $('#zero').click(function () {
        document.forms.display.value += 0;
    });
    $('#add').click(function () {
        document.forms.display.value += '+';
    });
    $('#subs').click(function () {
        document.forms.display.value += '-';
    });
    $('#multi').click(function () {
        document.forms.display.value += '*';
    });
    $('#divide').click(function () {
        document.forms.display.value += '/';
    });
    $('#dot').click(function () {
        document.forms.display.value += '.';
    });
    $('#equal').click(function () {
        if(display.value == "") {
            alert('Please enter any numbers to calculate!');
        } else {
            document.forms.display.value = 
            eval(document.forms.display.value);
        }
    });
    $('#clear').click(function () {
        document.forms.display.value = "";
    });

    $('body').on({
        mouseenter: function() {
            $(this).css('background', 'linear-gradient(#0c0c0c, #023e8a, #0c0c0c)');
        },
        mouseleave: function() {
            $(this).css('background', 'linear-gradient(#0c0c0c, #f8e002, #0c0c0c)');
        }
    });

    $('#equal').on({
        mouseenter: function() {
            $(this).css('background', '#f8e002');
        },
        mouseleave: function() {
            $(this).css('background', '#023e8a');
        }
    });

    $('#clear').on({
        mouseenter: function() {
            $(this).css('background', '#f8e002');
        },
        mouseleave: function() {
            $(this).css('background', '#023e8a');
        }
    });

    $('#show').click(function() {
        $('p').show('slow', function() {
            alert('The paragraph is now visible');
        });
    })

    $('#hide').click(function() {
        $('p').hide('slow', function() {
            alert('The paragraph is now hidden');
        });
    })

    $('#show').on({
        mouseenter: function() {
            $(this).css('cursor', 'pointer');
        },
        mouseleave: function() {
            $(this).css('cursor', 'default');
        }
    })

    $('#hide').on({
        mouseenter: function() {
            $(this).css('cursor', 'pointer');
        },
        mouseleave: function() {
            $(this).css('cursor', 'default');
        }
    })

    $('body').on({
        mouseenter: function() {
            $(this).css('color', '#fff');
        },
        mouseleave: function() {
            $(this).css('color', '#000');
        }
    });
})