$(document).ready(function () {
    $("select#rules-dropdown").select2();
});

$("select#rules-dropdown").change(function () {
    displayValidationRulesFor($(this).val());
});

function addValidInputValue(valid, values) {
    var myClone = $(valid).clone();
    $(myClone).find(".valid-value").text(values.replace(/'/g, ''));
    $(myClone).find(".text-success").attr('data-value', values);
    $("#valid-input-values-content").append(myClone);
}

function addInvalidInputValue(invalid, values) {
    var myClone = $(invalid).clone();
    $(myClone).find(".invalid-value").text(values.replace(/'/g, ''));
    $(myClone).find(".text-danger").attr('data-value', values);
    $("#invalid-input-values-content").append(myClone);
}

function updateValueToSingleTextBox(event) {
    var clickedValue = $(event).data('value');

    $.each(clickedValue.replace(/'/g, '').split(","), function (i, e) {
        var textInput = $(".html-input").find("input")[i];
        $(textInput).val($.trim(e));

        // Reference: https://stackoverflow.com/questions/2856513/how-can-i-trigger-an-onchange-event-manually
        var eventObject = new Event('input');
        textInput.dispatchEvent(eventObject);
    });
}

function updateValueToSelectBox(event) {
    var clickedValue = $(event).data('value');

    $.each(clickedValue.split(","), function (i, e) {
        $("select option[value='" + $.trim(e) + "']").prop("selected", true)[i];
        var selectInput = $(".html-input select");

        var eventObject = new Event('change');
        selectInput[0].dispatchEvent(eventObject);
    });
}

function updateValueToInArrayBox(event) {
    var clickedValue = $(event).data('value').split(" ");
    var firstValue = $(clickedValue)[0].split(" ");
    var secondValue = $(clickedValue)[1].split(" ");

    $.each(firstValue[0].replace(/[[\]]/g, '').split(","), function (key, value) {
        $("select option[value='" + value + "']").prop("selected", true)[key];
        var selectInput = $(".html-input select");

        var eventObject = new Event('change');
        selectInput[0].dispatchEvent(eventObject);
    });

    removeSecondValueArray = secondValue[0].replace(/[[\]]/g, '');

    var textInput = $('input')[0];
    $(textInput).val(removeSecondValueArray);

    var eventObject = new Event('input');
    textInput.dispatchEvent(eventObject);
}

function updateValueToJsonBox(event) {
    var clickedValue = $(event).data('value');
    var textInput = $('input')[0];

    if (typeof clickedValue !== 'string') {
        $(textInput).val(JSON.stringify(clickedValue));
    } else {
        $(textInput).val(clickedValue);
    }

    var eventObject = new Event('input');
    textInput.dispatchEvent(eventObject);
}

function displayValidationRulesFor(validationRuleId) {
    var selectedRule = rules.filter(function (rule) {
        return rule.key == validationRuleId;
    })[0];

    $("#invalid-value-display").addClass('d-none');
    $("#valid-value-display").addClass('d-none');

    $(".description-value").html(selectedRule['description']);
    $(".accepted-value").html(selectedRule['accepted_value']);
    $(".header-link").attr("href", selectedRule['url']);
    $(".rules-specification").text(`request()->validate([
    `+ selectedRule['rule_spec'] + `
]);`)[0];

    $(".html-code").html(selectedRule['htmlCode'].replace(/<br>/g, ''))[0];
    $(".html-input").html(selectedRule['htmlCode'].replace(/&lt;/g, '<').replace(/&gt;/g, '>'));

    // Apply Code Highlighting
    Prism.highlightAll();

    $(".example-box").remove();

    var validHtml = $("#valid-example").html();
    var invalidHtml = $("#invalid-example").html();

    $.each(selectedRule['valid'], function (key, values) {
        addValidInputValue(validHtml, values);
    });

    $.each(selectedRule['invalid'], function (key, values) {
        addInvalidInputValue(invalidHtml, values);
    });

    $(".btn-link").attr('onclick', selectedRule['exampleValueRender'] + '(this)');
    $(".html-input").find('input').attr('oninput', selectedRule['validateMethodName'] + '(this)');
    $(".html-input").find('select').attr('onchange', selectedRule['validateMethodName'] + '(this)');

    if (selectedRule.hasOwnProperty('removeInvalidInputBody')) {
        $(".valid-section").removeClass('d-none');
        $(".invalid-section").addClass('d-none');

        return;
    }

    if (selectedRule.hasOwnProperty('removeValidAndInvalid')) {
        $(".valid-section").addClass('d-none');
        $(".invalid-section").addClass('d-none');
        $(".demo-section").addClass('d-none');

        return;
    }

    if (selectedRule.hasOwnProperty('removeDemoArrow')) {
        $(".valid-section").removeClass('d-none');
        $(".invalid-section").removeClass('d-none');
        $(".btn-link").addClass('d-none');
        $(".demo-section").addClass('d-none');

        return;
    }

    if (selectedRule.hasOwnProperty('removeArrow')) {
        $(".valid-section").removeClass('d-none');
        $(".invalid-section").removeClass('d-none');
        $(".btn-link").addClass('d-none');

        return;
    }

    $(".valid-section").removeClass('d-none');
    $(".invalid-section").removeClass('d-none');
    $(".demo-section").removeClass('d-none');
    $(".btn-link").removeClass('d-none');
}