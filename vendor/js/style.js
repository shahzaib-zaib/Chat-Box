$(".messages").animate({ scrollTop: $(document).height() }, "fast");
        
        $("#profile-img").click(function() {
            $("#status-options").toggleClass("active");
        });
        
        $("#status-options ul li").click(function() {
            $("#profile-img").removeClass();
            $("#status-online").removeClass("active");
            $("#status-away").removeClass("active");
            $("#status-busy").removeClass("active");
            $("#status-offline").removeClass("active");
            $(this).addClass("active");
            
            if($("#status-online").hasClass("active")) {
                $("#profile-img").addClass("online");
            } else if ($("#status-away").hasClass("active")) {
                $("#profile-img").addClass("away");
            } else if ($("#status-busy").hasClass("active")) {
                $("#profile-img").addClass("busy");
            } else if ($("#status-offline").hasClass("active")) {
                $("#profile-img").addClass("offline");
            } else {
                $("#profile-img").removeClass();
            };
            
            $("#status-options").removeClass("active");
        });

        function newMessage() {
            message = $(".message-input input").val();
            if($.trim(message) == '') {
                return false;
            }
            $('<div class="outgoing-chats"><img src="./Images/Image 1.jpg" alt="" /><p>' + message + '</p></div>').appendTo($('.messages'));
            $('.message-input input').val(null);
            $('.contact.active .preview').html('<span>You: </span>' + message);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        };
        
        $('.submit').click(function() {
          newMessage();
        });
        
        $(window).on('keydown', function(e) {
          if (e.which == 13) {
            newMessage();
            return false;
          }
        });
        
        $('#action_menu_btn').click(function(){
        $('.action_menu').toggleClass("active");
        });