function validatedAcceptedRule(element) {
    compareValidInputAndTextInput(element, 'yes', 'on', '1', 'true');
}

function validatedActiveUrlRule(element) {
    compareValidInputAndTextInput(element, window.location.href, window.location.href + 'function');
}

function validatedAfterRule(element) {
    var inputValue = $(element).val();
    var pickedDate = Date.parse(inputValue.replace("///".g, ""));

    currentDate = date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate;
    parseCurrentDate = Date.parse(currentDate.replace("///".g, ""))

    if (pickedDate > parseCurrentDate) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedAfterOrEqualRule(element) {
    var inputValue = $(element).val();
    var pickedDate = Date.parse(inputValue.replace(/-/.g, ""));

    var currentDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate;
    var parseCurrentDate = Date.parse(currentDate.replace(/-/.g, ""));

    if (pickedDate >= parseCurrentDate) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedAlphaRule(element) {
    validateRegexPattern(element, /^[a-zA-Z]*$/);
}

function validatedAlphaDashRule(element) {
    validateRegexPattern(element, /^[a-zA-Z0-9-_]*$/);
}

function validatedAlphaNumericRule(element) {
    validateRegexPattern(element, /^[a-zA-Z0-9]*$/);
}

function validatedArrayRule(element) {
    var inputValue = $(element).val()[0];
    var hobbyArray = ['football', 'cricket'];

    if (hobbyArray.includes(inputValue)) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
}

function validatedBailRule(element) {
    var inputValue = $(element).val();
    if (inputValue != '' || inputValue == '') {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
}

function validatedBeforeRule(element) {
    var inputValue = $(element).val();
    var pickedDate = Date.parse(inputValue.replace("///".g, ""))

    currentDate = date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate;
    parseCurrentDate = Date.parse(currentDate.replace("///".g, ""))

    if (pickedDate < parseCurrentDate) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedBeforeOrEqualRule(element) {
    var inputValue = $(element).val();
    var pickedDate = Date.parse(inputValue.replace("///".g, ""));

    var currentDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate;
    var parseCurrentDate = Date.parse(currentDate.replace("///".g, ""));

    if (pickedDate <= parseCurrentDate) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedBetweenRule(element) {
    var inputValue = $(element).val();
    if (/(^([0-9]+)$)/u.test(inputValue)) {
        if (inputValue >= 18 && inputValue <= 60) {
            $("#invalid-value-display").addClass('d-none');
            $("#valid-value-display").removeClass('d-none');
            return;
        }
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedBooleanRule(element) {
    compareValidInputAndTextInput(element, 'true', 'false', 1, 0, '1', '0');
}

function validatedConfirmedRule() {
    compareTwoInputValue();
}

function validatedDateRule(element) {
    var inputValue = $(element).val();

    if (
        /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/.test(inputValue)
    )
    {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedDateEqualsRule(element) {
    var inputValue = $(element).val();
    var pickedDate = Date.parse(new Date(inputValue + ' 00:00:00'));

    var currentDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate;
    var parseCurrentDate = Date.parse(currentDate+' 00:00:00');

    if (pickedDate == parseCurrentDate) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedDateFormatRule(element) {
    var inputValue = $(element).val();

    if (/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/g.test(inputValue))
    {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedDifferentRule(element) {
    differenceTwoInputValue();
}

function validatedDigitsRule(element) {
    var inputValue = $(element).val();
    if (/(^([0-9]+)$)/u.test(inputValue)) {
        if (inputValue.length === 8) {
            $("#invalid-value-display").addClass('d-none');
            $("#valid-value-display").removeClass('d-none');
            return;
        }
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedDigitsBetweenRule(element) {
    var inputValue = $(element).val();
    if (/(^([0-9]+)$)/u.test(inputValue)) {
        if (inputValue.length >=1 && inputValue.length <= 8) {
            $("#invalid-value-display").addClass('d-none');
            $("#valid-value-display").removeClass('d-none');
            return;
        }
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedDimensionsRule(element) {
    var _URL = window.URL || window.webkitURL;

    var file = $(element)[0].files[0];

    img = new Image();
    var imgWidth = 0;
    var imgHeight = 0;
    var maxwidth = 200;
    var maxheight = 150;

    img.src = _URL.createObjectURL(file);
    img.onload = function () {
        imgWidth = this.width;
        imgHeight = this.height;

        if (imgWidth <= maxwidth && imgHeight <= maxheight) {
            $("#invalid-value-display").addClass('d-none');
            $("#valid-value-display").removeClass('d-none');
            return;
        }
        $("#valid-value-display").addClass('d-none');
        $("#invalid-value-display").removeClass('d-none');
    };
}

function validatedDistinctRule(element) {
    differenceTwoInputValue();
}

function validatedEmailRule(element) {
    validateRegexPattern(element, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

function validatedEndsWithRule(element) {
    var inputValue = $(element).val();
    if (inputValue.endsWith('.com') || inputValue.endsWith('.in')) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedExistsRule(element) {
    compareValidInputAndTextInput(element, 'cricket', 'football', 'volleyball', 'tennis');
}

function validatedFileRule(element) {
    validateFileExtension(element);
}

function validatedFilledRule(element) {
    validateFilledInputValue(element);
}

function validatedGreaterThanRule(element) {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue.length < secondInputValue.length) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedGreaterThanOrEqualRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue.length <= secondInputValue.length) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedImageRule(element) {
    var inputValue = $(element).val();
    var allowedExtensions = /(\.jpeg|\.png|\.bmp|\.gif|\.svg|\.webp)$/i;
    if (allowedExtensions.exec(inputValue)) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedInRule(element) {
    compareValidInputAndTextInput(element, 'first-zone', 'second-zone');
}

function validatedInArrayRule() {
    var inputValue = $('input').val();
    var hobbyArray = ['cricket', 'tennis'];

    if (hobbyArray.includes(inputValue)) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedIntegerRule(element) {
    validateRegexPattern(element, /^[0-9]*$/);
}

function validatedIpRule(element) {
    validateRegexPattern(
        element, /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))$/
    );
}

function validatedIp4Rule(element) {
    validateRegexPattern(
        element, /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    );
}

function validatedIp6Rule(element) {
    validateRegexPattern(
        element, /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/
    );
}

function validatedJsonRule(element) {
    var inputValue = $(element).val();
    try {
        JSON.parse(inputValue);
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    } catch (e) {
        $("#valid-value-display").addClass('d-none');
        $("#invalid-value-display").removeClass('d-none');
    }
}

function validatedLessThanRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue.length > secondInputValue.length) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedLessThanOrEqualRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue.length >= secondInputValue.length) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedMaxRule(element) {
    var inputValue = $(element).val();
    if (inputValue.length >= 1 && inputValue.length <= 5) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedMimeTypesRule(element) {
    var inputValue = $(element).val();
    var allowedExtensions = /(\.avi|\.mpeg|\.mp4)$/i;
    if (allowedExtensions.exec(inputValue)) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedMimeTypesFileRule(element) {
    validateFileExtension(element);
}

function validatedMinRule(element) {
    var inputValue = $(element).val();
    if (inputValue.length >= 5) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedNotInRule(element) {
    var inputValue = $(element).val();
    if (inputValue === 'black' || inputValue === 'white') {
        $("#valid-value-display").addClass('d-none');
        $("#invalid-value-display").removeClass('d-none');
        return;
    }
    $("#invalid-value-display").addClass('d-none');
    $("#valid-value-display").removeClass('d-none');
}

function validatedNotRegexRule(element) {
    validateRegexPattern(element, /(^([a-zA-Z]+)$)/u);
}

function validatedNullableRule(element) {
    validateBlankInputValue(element);
}

function validatedNumericRule(element) {
    validateRegexPattern(element, /^[0-9]+\.?[0-9]*$/);
}

function validatedPresentRule(element) {
    validateBlankInputValue(element);
}

function validatedRegexRule(element) {
    validateRegexPattern(element, /(^([a-zA-Z0-9]+)(d+)?$)/u);
}

function validatedRequiredRule(element) {
    validateFilledInputValue(element);
}

function validatedRequiredIfRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if ((firstInputValue == 'For Sale' && secondInputValue != '') || (firstInputValue != 'For Sale' && secondInputValue == '')) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedRequiredUnlessRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue == 'Minor' && secondInputValue == '' || firstInputValue != '' && secondInputValue != '') {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedRequiredWithRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue != '' && secondInputValue != '') {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedRequiredWithAllRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();
    var thirdInputValue = $('input:first-child').next().next().next().next().val();

    if (firstInputValue != '' && secondInputValue != '' && thirdInputValue != '' ||
        firstInputValue != '' && secondInputValue == '' && thirdInputValue != ''
    ) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedRequiredWithoutRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();
    var thirdInputValue = $('input:first-child').next().next().next().next().val();

    if (firstInputValue != '' && secondInputValue != '' && thirdInputValue != '' ||
        firstInputValue != '' && secondInputValue != '' && thirdInputValue == ''
    ) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedRequiredWithoutAllRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();
    var thirdInputValue = $('input:first-child').next().next().next().next().val();

    if (firstInputValue == '' && secondInputValue == '' && thirdInputValue != '' ||
        firstInputValue != '' && secondInputValue == '' && thirdInputValue == '' ||
        firstInputValue != '' && secondInputValue != '' && thirdInputValue == ''
    ) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedSameRule() {
    compareTwoInputValue();
}

function validatedSizeRule(element) {
    if (element.files.length > 0) {
        for (var i = 0; i <= element.files.length - 1; i++) {
            var fileSize = element.files.item(i).size;
            var file = Math.round((fileSize / 1024));
            if (file <= 1024) {
                $("#invalid-value-display").addClass('d-none');
                $("#valid-value-display").removeClass('d-none');
                return;
            }
            $("#valid-value-display").addClass('d-none');
            $("#invalid-value-display").removeClass('d-none');
        }
    }
}

function validatedSomeTimesRule() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().val();

    if (firstInputValue != '' && secondInputValue != '' || firstInputValue != '' && secondInputValue == '') {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedStartsWithRule(element) {
    var inputValue = $(element).val();
    if (inputValue.startsWith('USD') || inputValue.startsWith('INR') || inputValue.startsWith('EURO')) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedStringRule(element) {
    validateFilledInputValue(element);
}

function validatedTimezoneRule(element) {
    var inputValue = $(element).val();
    var timeZones = ['Europe/Dublin', 'Asia/Kolkata'];

    if (timeZones.includes(inputValue)) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validatedUniqueRule(element) {
    compareValidInputAndTextInput(element, 'test@test.com', 'rule@test.com', 'validation@test.com');
}

function validatedUrlRule(element) {
    validateRegexPattern(element, /^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
}

function validatedUuidRule(element) {
    validateRegexPattern(element, /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i);
}

function compareValidInputAndTextInput(element, value1, value2, value3, value4, value5, value6) {
    var inputValue = $(element).val();
    if (inputValue === value1 ||
        inputValue === value2 ||
        inputValue === value3 ||
        inputValue === value4 ||
        inputValue === value5 ||
        inputValue === value6
    ) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validateRegexPattern(element, regexPattern) {
    var inputValue = $(element).val();
    if (regexPattern.test(inputValue)) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validateFilledInputValue(element) {
    var inputValue = $(element).val();
    if (inputValue != '') {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function validateBlankInputValue(element) {
    var inputValue = $(element).val();
    if (inputValue == '') {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
}

function validateFileExtension(element) {
    var inputValue = $(element).val();
    var blockedExtensions = /(\.zip|\.tar|\.7zip|\.gz|\.rar)$/i;
    if (blockedExtensions.exec(inputValue)) {
        $("#valid-value-display").addClass('d-none');
        $("#invalid-value-display").removeClass('d-none');
        return;
    }
    $("#invalid-value-display").addClass('d-none');
    $("#valid-value-display").removeClass('d-none');
}

function compareTwoInputValue() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue === secondInputValue) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}

function differenceTwoInputValue() {
    var firstInputValue = $('input:first-child').val();
    var secondInputValue = $('input:first-child').next().next().val();

    if (firstInputValue != secondInputValue) {
        $("#invalid-value-display").addClass('d-none');
        $("#valid-value-display").removeClass('d-none');
        return;
    }
    $("#valid-value-display").addClass('d-none');
    $("#invalid-value-display").removeClass('d-none');
}
