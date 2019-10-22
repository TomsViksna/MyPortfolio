$(function () {
$(document).ready(function () {
    $(function () {



        $("#applicationform").submit(function (e) {
            if ($('#g-recaptcha-response').val().length < 1) {
                $(".warning1").removeClass("hidden");
            } else {
                $(".warning1").addClass("hidden");
            };
            e.preventDefault(e)
        });

    });




$('#applicationform').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later

        fields: {
            inputFirstName: {
                validators: {
                    stringLength: {
                        min: 2,
                        max: 20,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Simbolu skaits no 2-20</div>',

                    },
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Ievadiet savu vārdu</div>'
                    },
                    regexp: {
                        regexp: /[A-Za-z]/i,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Jūs varat lietot tikai latīņu burtus</div>'
                    },


                }
            },
            inputSecondName: {
                validators: {
                    stringLength: {
                        min: 2,
                        max: 20,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Simbolu skaits no 2-20</div>',

                    },
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Ievadiet savu uzvārdu</div>'
                    },

                    regexp: {
                        regexp: /[A-Za-z]/i,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Jūs varat lietot tikai latīņu simbolus</div>'
                    },
                }
            },


            dd: {
                validators: {
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Norādiet dienu</div>'
                    },
                }
            },

            mm: {
                validators: {
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Norādiet mēnesi</div>'
                    },
                }
            },

            yy: {
                validators: {
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Norādiet gadu</div>'
                    },
                }
            },

            inputCountry: {
                validators: {


                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Ievadiet valsti</div>'

                    },
                }
            },

            inputPhone: {
                validators: {
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Lūdzu ievadiet savu telefona numuru</div>'
                    },
                    phone: {
                        country: 'US',
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Lūdzu ievadiet derīgu numuru ar vietējo kodu</div>'
                    },

                    regexp: {
                        regexp: /\d/,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Jūs varat lietot tikai ciparus</div>'
                    },



                }
            },
            inputAddress1: {
                validators: {
                    stringLength: {

                        max: 30,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Adrese ir ierakstīta nepareizi (lauks 1).Var izmantot tikai latīņu burtus. Maksimālais simbolu skaits 30.</div>'
                    },

                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Ievadiet adresi</div>'
                    },
                    regexp: {
                        regexp: /[A-Za-z]/i,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Adrese ir ierakstīta nepareizi (lauks 1).Var izmantot tikai latīņu burtus. Maksimālais simbolu skaits 30.</div>'
                    },
                }

            },




            inputCity: {
                validators: {
                    stringLength: {
                        min: 3,
                        max: 25,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Pilsēta ir ievadīta nepareizi. Maksimālais simbolu skaits 25.</div>'
                    },
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Lūdzu norādiet pilsētu</div>'
                    },
                    regexp: {
                        regexp: /[A-Za-z]/i,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Var izmantot tikai latīņu burtus.</div>'
                    },


                }
            },
            inputAnswer: {
                validators: {
                    stringLength: {
                        max: 255,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Nepareiza drošības jautājuma atbilde. Atbildes laukā var izmantot tikai latīņu burtus un ",.?@#-" Maksimālais simbolu skaits 255.</div>'
                    },


                    notEmpty: {
                        message:

                            '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Lūdzu ievadiet atbildi</div>'
                    }
                }
            },
            inputPostalCode: {
                validators: {
                    stringLength: {
                        min: 4,
                        max: 6,
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;"> Pasta indekss ir norādīts nepareizi. Var izmantot tikai latīņu burtus. Maksimālais simbolu skaits 6. Piemēram, LV1011.</div>'
                    },

                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Ievadiet pasta indeksu</div>'
                    },

                }
            },

            inputEmail: {
                validators: {
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Lūdzu ievadiet savu e-pastu</div>'
                    },
                    emailAddress: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Lūdzu ievadiet derīgu e-pastu. Šis e-pasts vai telefona numurs jau ir reģistrēts. Lūdzu, piesakiet kontu ar citu e-pastu vai tālruņa numuru.</div>'
                    }
                }
            },




            inputSecurityQuestion: {
                validators: {
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Ievadiet drošības jautājumu</div>'

                    },
                }
            },

            inputTerms: {
                validators: {
                    notEmpty: {
                        message: '<div style="background-color:#f2dede; padding:5px; border-radius: 5px; border-color: #ebccd1; color: #a94442;">Lai varētu pieteikties kartes saņemšanai, lūdzu, atzīmējiet lauku, ka esat iepazinies ar "Noteikumiem un Nosacījumiem".</div>'

                    },
                }
            },



        }
    })


    .on('success.form.bv', function (e) {
        $('#success_message').slideDown({
            opacity: "show"
        }, "slow") // Do something ...
        $('#applicationform').data('bootstrapValidator').resetForm();

        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function (result) {
            console.log(result);
        }, 'json');
    });
});
});