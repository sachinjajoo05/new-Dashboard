// Mobile-toggle-js

$(document).ready(function(){  
    $('#menu-toggle').click( function(e) { 
        e.preventDefault(); 
        e.stopPropagation(); 
        $('#sidebar-wrapper').toggle();  
        $("#wrapper").addClass("toggled");
        $("#overlay").addClass("overlay-bg");  
    });
    $('#sidebar-wrapper').click( function(e) { 
        e.stopPropagation(); 
    });
    $('.profile-dropdown').click( function(e) { 
        $('.profile-dropdown-menu').toggle();
    });
    
    $('body').click( function() {
        $('#sidebar-wrapper').hide(); 
        $("#wrapper").removeClass("toggled");
        $("#overlay").removeClass("overlay-bg");
    }); 
});


// sidebar-toggle-btn-js
$(".profile-dropdown").click(function(){
    $(".dropdown-toggle").toggleClass("toggle-down-arrow");
});

// search-select-js

$(".select2-input").click(function(e) {
    e.preventDefault();
    $(this).parent().find('.select2-list').toggle('active');
});
$(".select2-search").on("keyup", function(e) {
    e.preventDefault();
    var value = $(this).val().toLowerCase();
    $(this).parent().parent().parent().find('.select2-item').filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
$(".select2-item").click(function(e) {
    e.preventDefault();
    $('.select2-input').val($(this).text());
    $('.select2-value').val($(this).data('value'));
    $('.select2-list').toggle('active');
    $('.select2-search').val('');
    $('.select2-item').show();
});

// multiselect-js
$(document).ready(function(){ 
$(".multiple-select").select2({
    closeOnSelect : false,
    placeholder : "Placeholder",
    allowClear: true,
    dropdownCssClass: "multiple-select-dropdown",
    tags: true 
});
});

// check-select-js
$(document).ready(function(){
$('.check-select').select2({
    dropdownCssClass: "check-select-dropdown",
});
});

// property-content-display-hide-js

$(document).ready(function(){
    // water-meter display to block
    $("#water-meter-name").click(function(){
        $(".meter-detail-wrap").css("display", "block");
        $("#water-meter").css("display", "none");
    });
    // water-meter display to none
    $("#back-to-meters").click(function(){
        $("#water-meter").css("display", "block");
        $(".meter-detail-wrap").css("display", "none");
    });


    // Floor-plan-accordion js
    $('#floorplan-accordion').collapse({
       toggle: false
    });


    // Set addunit display to block
    $("#add-unit").click(function(){
        $("#add-unit-form").css("display", "block");
        $("#add-unit").css("display", "none");
    });
    // Set addunit display to none
    $("#cancel-add-floorplan").click(function(){
        $("#add-unit").css("display", "block");
        $("#add-unit-form").css("display", "none");
    });


    // Set editunit display to block
    $("#edit-floorplan").click(function(){
        $("#floorplan-content-hide").css("display", "table-row");
        $("#floorplan-content-display").css("display", "none");
    });
    // Set editunit display to none
    $("#cancel-edit-floorplan").click(function(){
        $("#floorplan-content-display").css("display", "table-row");
        $("#floorplan-content-hide").css("display", "none");
    });  
});




// property-setting-display-hide-js
$(document).ready(function(){

    // overage display to block
    $(".view-more-btn").click(function(){
        $(".overage-table").css("display", "block");
        $(".view-less-btn").css("display", "block");
        $(".view-more-btn").css("display", "none");
    });
    // overage display to none
    $(".view-less-btn").click(function(){
        $(".overage-table").css("display", "none");
        $(".view-less-btn").css("display", "none");
        $(".view-more-btn").css("display", "block");
    });
    
});



// Company-setting content display hide js

$(document).ready(function(){
    // Set div display to block
    $("#edit-property-btn").click(function(){
        $("#property-update").css("display", "block");
        $("#edit-property-btn").css("display", "none");
        $("#days").css("display", "none");
    });
    // Set div display to none
    $("#update-property-btn").click(function(){
        $("#property-update").css("display", "none");
        $("#edit-property-btn").css("display", "block");
        $("#days").css("display", "block");
    }); 
});