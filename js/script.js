$(document).ready(function() {


    $('#btnsend').click(function () {
        var allInputs = $("input");
        var test = true;

        for (var i = 0; i < allInputs.length && test; i++) {
            var inputValue = $(allInputs[i]).val()
            var input = $(allInputs[i])
            if (inputValue.length == 0) {
                alert('Merci de renseigner TOUS les champs')
                test = false
            }
            else if (inputValue.length < 5) {
                alert('Les champs doivent comporter au moins 5 caractères')
                $(input).css("border", "solid red 2px");
                test = false
            }
            else if (inputValue.length >= 5) {
                $(input).css("border", "solid green 2px");
            }
        }
        var password = $("#password").val()
        var valpassword = $("#valpassword").val()
        var passwordinp = $("#password")
        var valpasswordinp = $("#valpassword")
        if (password == valpassword) {
            console.log('ok');
        }
        else {
            $(passwordinp).css("border", "solid red 5px");
            $(valpasswordinp).css("border", "solid red 5px");
        }

        var username = $('#identifiant').val()
        var usernamebor = $('#identifiant')
        if (username.length > 8) {
            $(usernamebor).css("border", "solid red 5px");
            alert('Votre pseudo ne doit pas dépasser 8 caractères !')
        }

    })
    })
