
$(document).ready(function () {
    //$(selector).val(value);
    //$("#bp").prop("checked");
    $("#cenaF").click(function () {
        mn = +$("#kr").val();
        k = +$("#kgZ").val();
        c = k * mn;
        $(this).val(c);
        console.log(mn);
    });
    $(".celkF").click(function () {
        krm = +$("#kr").val();
        mno = +$("#kgZ").val();
        zakKrm = krm * mno;
    
        c111 = 0; c211 = 0; c311 = 0; c411 = 0;
        if ($("#bioZ").prop("checked")) {
            c111 = zakKrm * +$("#bioZ").val() / 100;
        }
        if ($("#premZ").prop("checked")) {
            c211 = zakKrm * +$("#premZ").val() / 100;
        }
        if ($("#chZ").prop("checked")) {
            c311 = zakKrm * +$("#chZ").val() / 100;
        }
        if ($("#dZ").prop("checked")) {
            c411 = +$("#dZ").val();
        }
        v1 = zakKrm + c111 + c211 + c311 + c411;

        // var d = document.getElementsByName("dopr"); FUNGUJE ALE NIZE DRUHE RESENI
        // console.log(d);
        // d111 = 0; d211 = 0; d311 = 0;
        // if (d[0].checked) {
        //     d111 = 0;
        // }
        // if (d[1].checked) {
        //     d211 = v1 * +$("#kur").val() / 100;
        // }
        // if (d[2].checked) {
        //     d311 += +$("#cp").val();
        // }
        
        d111 = 0; d211 = 0; d311 = 0;
        if ($("#bp").prop("checked")) {
            d111 = 0;
        }
        if ($("#kur").prop("checked")) {
            d211 = v1 * +$("#kur").val() / 100;
        }
        if ($("#cp").prop("checked")) {
            d311 += +$("#cp").val();
        }
        v2 = d111 + d211 + d311;
        v = v1 + v2;
        console.log(v1);
        console.log(v2);
        console.log(v);
        $("#celkemZ").val(v);

    });

    $("#okF").click(function () {
        ok1 = +$("#okZ").val();
        if (ok1 >= v) {
            $("#okZ").val("Mate dost penez");
        } else {
            $("#okZ").val("Mate malo penez");
        }

    });
    $("#emailKontrolaF").click(function () {
        stringVstup = $("#emZ").val();
        znaky = /^[0-9a-zA-Z]+$/;
        if (znaky.test(stringVstup)) {
            alert('Email v poradku');
        } else {
            alert('Spatny znak - zadej email znovu');
        }
    });
});