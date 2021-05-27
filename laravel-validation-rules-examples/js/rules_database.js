var date = new Date();
var rules = [
    {
        key: 'accepted',
        title: 'Accepted',
        description: 'The field under validation must be yes, on, 1, or true. This is useful for validating "Terms of Service" acceptance.',
        accepted_value: 'yes, on, 1, or true',
        rule_spec: `"terms" => 'accepted'`,
        valid: [
            'yes',
            'on',
            "'1'",
            "'true'",
        ],
        invalid: [
            'Yes',
            'On',
            'True',
            'YES',
            'ON',
            "'2'",
            'TRUE',
        ],
        htmlCode: '&lt;input type="text" name="accept" class="form-control" placeholder="Enter the Accept"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedAcceptedRule',
        url: 'https://laravel.com/docs/validation#rule-accepted'
    },

    {
        key: 'active_url',
        title: 'Active URL',
        description: 'The field under validation must have a valid A or AAAA record according to the <span class="text-danger">dns_get_record</span> PHP function. The hostname of the provided URL is extracted using the <span class="text-danger">parse_url</span> PHP function before being passed to <span class="text-danger">dns_get_record</span>.',
        accepted_value: window.location.href,
        rule_spec: `"url" => 'active_url'`,
        valid: [
            window.location.href,
            window.location.href + 'function',
        ],
        invalid: [
            'www.test.',
            'test.net/function',
        ],
        htmlCode: '&lt;input type="text" name="url" class="form-control" placeholder="Enter the Active URL"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedActiveUrlRule',
        url: 'https://laravel.com/docs/validation#rule-active-url'
    },

    {
        key: 'after',
        title: 'After(date)',
        description: 'The field under validation must be a value after a given date. The dates will be passed into the <span class="text-danger">strtotime</span> PHP function.',

        accepted_value: date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + validDate + ', ' +
                        date.getFullYear() + "-0" + (date.getMonth() + 2) + "-" + validDate,
        rule_spec: `"registration_start_date" => 'after:` + date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate + `'`,

        valid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + validDate,
            date.getFullYear() + "-0" + (date.getMonth() + 2) + "-" + validDate,
        ],
        invalid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + invalidDate,
            date.getFullYear() + "-0" + date.getMonth() + "-" + invalidDate,
        ],
        htmlCode: '&lt;input type="text" name="registration_start_date" class="form-control" placeholder="Enter the Date"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedAfterRule',
        url: 'https://laravel.com/docs/validation#rule-after'
    },

    {
        key: 'after_or_equal',
        title: 'After Or Equal(date)',
        description: 'The field under validation must be a value after or equal to the given date. For more information, see the <span class="text-danger">after</span> rule.',

        accepted_value: date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + validDate,

        rule_spec: `"registration_start_date" => 'after_or_equal:` + date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate + `'`,

        valid: [
            date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate,
            date.getFullYear() + "-0" + (date.getMonth() + 2) + "-" + validDate,
        ],
        invalid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + invalidDate,
            date.getFullYear() + "-0" + date.getMonth() + "-" + invalidDate,
        ],
        htmlCode: '&lt;input type="text" name="registration_start_date" class="form-control" placeholder="Enter the Date"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedAfterOrEqualRule',
        url: 'https://laravel.com/docs/validation#rule-after-or-equal'
    },

    {
        key: 'alpha',
        title: 'Alpha',
        description: 'The field under validation must be entirely alphabetic characters.',
        accepted_value: 'a to z OR A to Z',
        rule_spec: `"name" => 'alpha'`,
        valid: [
            'raj',
            'RAJ',
        ],
        invalid: [
            "'1111'",
            "'@$%'",
        ],
        htmlCode: `&lt;input type="text" name="name" class="form-control" placeholder="Enter the Name"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedAlphaRule',
        url: 'https://laravel.com/docs/validation#rule-alpha'
    },

    {
        key: 'alpha_dash',
        title: 'Alpha Dash',
        description: 'The field under validation may have alpha-numeric characters, as well as dashes and underscores.',
        accepted_value: 'a to z OR A to Z, 123, -, _',
        rule_spec: `"username" => 'alpha_dash'`,
        valid: [
            'raj_IND-1122',
            'abc_1122',
        ],
        invalid: [
            'raj@1122',
            'raj#1122',
        ],
        htmlCode: '&lt;input type="text" name="username" class="form-control" placeholder="Enter the Username"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedAlphaDashRule',
        url: 'https://laravel.com/docs/validation#rule-alpha-dash'
    },

    {
        key: 'alpha_numeric',
        title: 'Alpha Numeric',
        description: 'The field under validation must be entirely alpha-numeric characters.',
        accepted_value: 'a to z OR A to Z, 123',
        rule_spec: `"username" => 'alpha_num'`,
        valid: [
            'raj1122',
            'rajIND1122',
        ],
        invalid: [
            'r@j',
            'raj_1122%',
        ],
        htmlCode: '&lt;input type="text" name="username" class="form-control" placeholder="Enter the Username"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedAlphaNumericRule',
        url: 'https://laravel.com/docs/validation#rule-alpha-num'
    },

    {
        key: 'array',
        title: 'Array',
        description: 'The field under validation must be a PHP "array".',
        accepted_value: 'array',
        rule_spec: `"hobby" => 'array'`,
        valid: [
            'football',
            'cricket',
        ],
        removeInvalidInputBody: '',
        htmlCode: `&lt;select name="hobby[]" multiple&gt;\n\t` +
            `&lt;option value="football"&gt;FootBall&lt;/option&gt;\n\t` +
            `&lt;option value="cricket"&gt;Cricket&lt;/option&gt;\n` +
        `&lt;/select&gt;`,
        exampleValueRender: 'updateValueToSelectBox',
        validateMethodName: 'validatedArrayRule',
        url: 'https://laravel.com/docs/validation#rule-array'
    },

    {
        key: 'bail',
        title: 'Bail',
        description: 'Stop running validation rules after the first validation failure.',
        accepted_value: 'array',
        rule_spec: `"name" => 'bail|numeric|min:3',`,
        valid: [
            'a',
            '',
        ],
        removeInvalidInputBody: '',
        htmlCode: '&lt;input type="text" name="name" class="form-control" placeholder="Enter the Name"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedBailRule',
        url: 'https://laravel.com/docs/validation#rule-bail'
    },

    {
        key: 'before',
        title: 'Before(date)',
        description: 'The field under validation must be a value preceding the given date. The dates will be passed into the PHP <span class="text-danger">strtotime</span> function. In addition, like the <span class="text-danger">after</span> rule, the name of another field under validation may be supplied as the value of <span class="text-danger">date</span>.',

        accepted_value: date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + invalidDate + ', ' +
                        date.getFullYear() + "-0" + date.getMonth() + "-" + invalidDate,
        rule_spec: `"registration_end_date" => 'before:` + date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate + `'`,

        valid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + invalidDate,
            date.getFullYear() + "-0" + date.getMonth() + "-" + invalidDate,
        ],
        invalid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + validDate,
            date.getFullYear() + "-0" + (date.getMonth() + 2) + "-" + validDate,
        ],
        htmlCode: '&lt;input type="text" name="registration_end_date" class="form-control" placeholder="Enter the Date"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedBeforeRule',
        url: 'https://laravel.com/docs/validation#rule-before'
    },

    {
        key: 'before_or_equal',
        title: 'Before Or Equal(date)',
        description: 'The field under validation must be a value preceding or equal to the given date. The dates will be passed into the PHP <span class="text-danger">strtotime</span> function. In addition, like the <span class="text-danger">after</span> rule, the name of another field under validation may be supplied as the value of <span class="text-danger">date</span>.',

        accepted_value: date.getFullYear() + "-0" + date.getMonth() + "-" + invalidDate,

        rule_spec: `"registration_end_date" => 'before_or_equal:` + date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate +`'`,

        valid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate,
            date.getFullYear() + "-0" + date.getMonth() + "-" + invalidDate,
        ],
        invalid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + validDate,
            date.getFullYear() + "-0" + (date.getMonth() + 2) + "-" + validDate,
        ],
        htmlCode: '&lt;input type="text" name="registration_end_date" class="form-control" placeholder="Enter the Date"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedBeforeOrEqualRule',
        url: 'https://laravel.com/docs/validation#rule-before-or-equal'
    },

    {
        key: 'between',
        title: 'Between',
        description: 'The field under validation must have a size between the given min and max. Strings, numerics, arrays, and files are evaluated in the same fashion as the <a href="https://laravel.com/docs/validation#rule-size" class="text-danger" target="_blank">size</a> rule.',
        accepted_value: `between:min,max`,
        rule_spec: `"eligible" => 'between:18,60'`,
        valid: [
            "'18'",
            "'25'",
        ],
        invalid: [
            "'15'",
            "'65'",
        ],
        htmlCode: '&lt;input type="text" name="eligible" class="form-control" placeholder="Enter the Eligible"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedBetweenRule',
        url: 'https://laravel.com/docs/validation#rule-between'
    },

    {
        key: 'boolean',
        title: 'Boolean',
        description: 'The field under validation must be able to be cast as a boolean. Accepted input are <span class="text-danger">true, false, 1, 0,</span> <font color="green">"1", and "0"</span>.',
        accepted_value: `true, false, 1, 0, "1", and "0"`,
        rule_spec: `"gender" => 'boolean'`,
        valid: [
            "'1'",
            "'true'",
        ],
        invalid: [
            "test",
            "'23544'",
        ],
        htmlCode: `&lt;input type="text" name="gender" value="Male" class="form-control"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedBooleanRule',
        url: 'https://laravel.com/docs/validation#rule-boolean'
    },

    {
        key: 'confirmed',
        title: 'Confirmed',
        description: 'The field under validation must have a matching field of <span class="text-danger">foo_confirmation</span>. For example, if the field under validation is <span class="text-danger">password</span>, a matching <span class="text-danger">password_confirmation</span> field must be present in the input.',
        accepted_value: `confirmed`,
        rule_spec: `"password" => 'confirmed'`,
        valid: [
            "123456, 123456",
            "Laravel, Laravel",
        ],
        invalid: [
            "123456, 1234567",
            "Laravel, Larvel",
        ],
        htmlCode:   `&lt;input type="password" name="password" class="form-control" placeholder="Enter the Password"&gt;\n<br>` +
                    `&lt;input type="password" name="password_confirmation" class="form-control" placeholder="Enter Confirm Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedConfirmedRule',
        url: 'https://laravel.com/docs/validation#rule-confirmed'
    },

    {
        key: 'date',
        title: 'Date',
        description: 'The field under validation must be a valid, non-relative date according to the <span class="text-danger">strtotime</span> PHP function.',

        accepted_value: date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate + ', ' +
                        date.getFullYear() + "/0" + (date.getMonth() + 2) + "/" + staticDate,
        rule_spec: `"birth_date" => date:` + date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate,

        valid: [
            date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate,
            date.getFullYear() + "/0" + (date.getMonth() + 2) + "/" + staticDate,
        ],
        invalid: [
            date.getFullYear() + "/feb/" + staticDate,
        ],
        htmlCode: '&lt;input type="text" name="birth_date" class="form-control" placeholder="Enter the Date"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedDateRule',
        url: 'https://laravel.com/docs/validation#rule-date'
    },

    {
        key: 'date_equals',
        title: 'Date Equals',
        description: 'The field under validation must be equal to the given date. The dates will be passed into the PHP <font   color="red">strtotime</span> function.',

        accepted_value: date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate + ', ' +
                        date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate,
        rule_spec: `"registration_date" => date_equals:` + date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate,

        valid: [
            date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + staticDate,
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + staticDate,
        ],
        invalid: [
            staticDate + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear(),
            date.getFullYear() + "-january-" + staticDate,
        ],
        htmlCode: '&lt;input type="text" name="registration_date" class="form-control" placeholder="Enter the Date"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedDateEqualsRule',
        url: 'https://laravel.com/docs/validation#rule-date-equals'
    },

    {
        key: 'date_format',
        title: 'Date Format',
        description: `The eld under validation must match the given format. You should use either <span class="text-danger">date</span> or <span class="text-danger">date_format</span> when validating a eld, not both. This validation rule supports all formats supported by PHP's <a href="https://www.php.net/manual/en/class.datetime.php" target="_blank"><span class="text-danger"><u>DateTime</u></span></a> class.`,
        accepted_value: `date_format: Y:m:d H:i:s OR date_format: Y/m/d H:i:s`,
        rule_spec: `"birth_date" => 'date_format:Y-m-d H:i:s'`,
        valid: [
            date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + (date.getDate() + 1) + " 00:00:00",
        ],
        invalid: [
            date.getFullYear() + "/0" + (date.getMonth() + 1) + "/" + date.getDate(),
            date.getFullYear() + "/jan/" + date.getDate(),
        ],
        htmlCode: '&lt;input type="text" name="birth_date" class="form-control" placeholder="Enter the Birth Date"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedDateFormatRule',
        url: 'https://laravel.com/docs/validation#rule-date-format'
    },

    {
        key: 'different',
        title: 'Different',
        description: "The field under validation must have a different value than field.",
        accepted_value: `N/A`,
        rule_spec: `'first_name' => 'string'\n\t` + `'last_name' => 'different:first_name'`,
        valid: [
            "Tom, Jerry",
            "Jerry, Tom",
        ],
        invalid: [
            "Tom, Tom",
            "Jerry, Jerry",
        ],
        htmlCode:   `&lt;input type="text" name="first_name" class="form-control" placeholder="Enter the First Name"&gt;\n<br>` +
                    `&lt;input type="text" name="last_name" class="form-control" placeholder="Enter the Last Name"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedDifferentRule',
        url: 'https://laravel.com/docs/validation#rule-different'
    },

    {
        key: 'digits',
        title: 'Digits',
        description: "The field under validation must be numeric and must have an exact length of value.",
        accepted_value: `Numeric`,
        rule_spec: `'phone' => 'digits:8'`,
        valid: [
            "'12345678'",
        ],
        invalid: [
            "abcdefgh",
        ],
        htmlCode: '&lt;input type="text" name="phone" class="form-control" placeholder="Enter the Phone Number"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedDigitsRule',
        url: 'https://laravel.com/docs/validation#rule-digits'
    },

    {
        key: 'digits_between',
        title: 'Digits Between',
        description: "The field under validation must be numeric and must have a length between the given min and max.",
        accepted_value: `Numeric`,
        rule_spec: `'phone' => 'digits_between:1,8'`,
        valid: [
            "'12345678'",
            "'12345'",
        ],
        invalid: [
            "abcdefgh",
        ],
        htmlCode: '&lt;input type="text" name="phone" class="form-control" placeholder="Enter the Phone Number"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedDigitsBetweenRule',
        url: 'https://laravel.com/docs/validation#rule-digits-between'
    },

    {
        key: 'dimensions',
        title: 'Dimensions (Image Files)',
        description: "The file under validation must be an image meeting the dimension constraints as specified by the rule's parameters.",
        accepted_value: `dimensions:min_width, max_width, min_height, max_height, width, height, ratio`,
        rule_spec: `'image' => 'dimensions:max_width=200,max_height=150'`,
        valid: [
            "123.jpg with above dimension",
        ],
        invalid: [
            "123.jpg with no dimension matched",
        ],
        removeArrow: '',
        htmlCode: '&lt;input type="file" name="image" id="myImg"&gt;',
        exampleValueRender: 'updateValueToSingleFileBox',
        validateMethodName: 'validatedDimensionsRule',
        url: 'https://laravel.com/docs/validation#rule-dimensions'
    },

    {
        key: 'distinct',
        title: 'Distinct',
        description: "When working with arrays, the field under validation must not have any duplicate values.",
        accepted_value: `array`,
        rule_spec: `'hobby' => 'required|array'\n\t` + `'hobby.*' => 'distinct',`,
        valid: [
            "cricket, tennis",
            "tennis, football",
        ],
        invalid: [
            "tennis, tennis",
            "cricket, cricket",
        ],
        htmlCode:   `&lt;input type="text" name="hobby[]" class="form-control" placeholder="Enter the Hobby"&gt;\n<br>` +
                    `&lt;input type="text" name="hobby[]" class="form-control" placeholder="Enter the Hobby"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedDistinctRule',
        url: 'https://laravel.com/docs/validation#rule-distinct'
    },

    {
        key: 'email',
        title: 'E-Mail',
        description: `The field under validation must be formatted as an e-mail address. Under the hood, this validation rule makes use of the <a href="https://github.com/egulias/EmailValidator" target="_blank"><span class="text-danger"><u>egulias/email-validator</u></span></a> package for validating the email address.`,
        accepted_value: `N/A`,
        rule_spec: `'email' => 'email'`,
        valid: [
            "test@test.com",
            "test@test.co.in",
        ],
        invalid: [
            "test@test.",
            "test@test",
        ],
        htmlCode: '&lt;input type="text" name="email" class="form-control" placeholder="Enter the Email"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedEmailRule',
        url: 'https://laravel.com/docs/validation#rule-email'
    },

    {
        key: 'ends_with',
        title: 'Ends With',
        description: "The field under validation must end with one of the given values.",
        accepted_value: `N/A`,
        rule_spec: `'email' => 'ends_with:.com,.in',`,
        valid: [
            "test@test.com",
            "test@test.co.in",
        ],
        invalid: [
            "test@test.co",
        ],
        htmlCode: '&lt;input type="text" name="email" class="form-control" placeholder="Enter the Email"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedEndsWithRule',
        url: 'https://laravel.com/docs/validation#rule-ends-with'
    },

    {
        key: 'exclude_if',
        title: 'Exclude If',
        description: `The field under validation will be excluded from the request data returned by the <span class="text-danger">validate</span> and <span class="text-danger">validated</span> methods if the anotherfield field is equal to value.`,
        accepted_value: `N/A`,
        rule_spec: `'has_appointment' => 'required|boolean'\n\t` + `'appointment_date' => 'exclude_if:has_appointment,false|required|date',`,
        valid: [
            "'true'",
            date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
        ],
        invalid: [
            "'false'",
            date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
        ],
        removeDemoArrow: '',
        htmlCode:   `&lt;input type="checkbox" name="has_appointment"&gt;Appointment\n` +
                    `&lt;input type="checkbox" name="appointment_date"&gt;Appointment Date`,
        url: 'https://laravel.com/docs/validation#rule-exclude-if'
    },

    {
        key: 'exclude_unless',
        title: 'Exclude Unless',
        description: `The field under validation will be excluded from the request data returned by the <span class="text-danger">validate</span> and <span class="text-danger">validated</span> methods unless anotherfield's field is equal to value.`,
        accepted_value: `N/A`,
        rule_spec: `'two_wheel_bike' => 'string'\n\t` + `'company_name' => 'exclude_unless:two_wheel_bike,bike,cycle|required',`,
        valid: [
            "bike OR cycle",
            "Hero",
        ],
        invalid: [
            "plane OR tricycle",
            "Hero",
        ],
        removeDemoArrow: '',
        htmlCode:   `&lt;input type="checkbox" name="two_wheel_bike"&gt;Two Wheel Bike\n` +
                    `&lt;input type="checkbox" name="company_name"&gt;Company Name`,
        url: 'https://laravel.com/docs/validation#rule-exclude-unless'
    },

    {
        key: 'exists',
        title: 'Exists (Database)',
        description: `The field under validation must exist on a given database table.<br>`,
        accepted_value: `<font color='red'>NOTE:</span> We assume that 'cricket', 'football', 'volleyball', 'tennis'
                        column in  your database table`,
        rule_spec: `'hobby' => 'exists:hobbies',`,
        valid: [
            "cricket",
            "football",
            "volleyball",
            "tennis",
        ],
        invalid: [
            "poker",
            "baseball",
        ],
        htmlCode:   "NOTE: We assume that 'cricket', 'football', 'volleyball', 'tennis' column in your database table\n<br>" +
                    '&lt;ul class="list-group ml-4"&gt;\n\t' +
                        '&lt;li&gt;cricket&lt;/li&gt;\n\t' +
                        '&lt;li&gt;football&lt;/li&gt;\n\t' +
                        '&lt;li&gt;volleyball&lt;/li&gt;\n\t' +
                        '&lt;li&gt;tennis&lt;/li&gt;\n' +
                    '&lt;/ul&gt;\n<br>' +
                    '&lt;input type="text" name="hobby" class= "form-control" placeholder="Enter the Value"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedExistsRule',
        url: 'https://laravel.com/docs/validation#rule-exists'
    },

    {
        key: 'file',
        title: 'File',
        description: "The field under validation must be a successfully uploaded file.",
        accepted_value: `N/A`,
        rule_spec: `'attachment' => 'file',`,
        valid: [
            "test.txt",
            "image.jpg",
        ],
        invalid: [
            "file.zip",
            "file.tar",
        ],
        removeArrow: '',
        htmlCode: '&lt;input type="file" name="attachment"&gt;',
        exampleValueRender: 'updateValueToSingleFileBox',
        validateMethodName: 'validatedFileRule',
        url: 'https://laravel.com/docs/validation#rule-file'
    },

    {
        key: 'filled',
        title: 'Filled',
        description: "The field under validation must not be empty when it is present.",
        accepted_value: `N/A`,
        rule_spec: `'language_learn' => 'filled',`,
        valid: [
            "Hindi",
            "English",
            "Spanish",
        ],
        invalid: [
            "",
        ],
        htmlCode: `&lt;input type="text" name="language_learn" class="form-control" placeholder="Enter the Language"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedFilledRule',
        url: 'https://laravel.com/docs/validation#rule-filled'
    },

    {
        key: 'greater_than',
        title: 'Greater Than',
        description: `The field under validation must be greater than the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="https://laravel.com/docs/validation#rule-size" target="_blank"><span class="text-danger"><u>size</u></span></a> rule.`,
        accepted_value: `Strings, numerics, arrays, files`,
        rule_spec: `'password' => 'string',\n\t` + `'txn_password' => 'gt:password',`,
        valid: [
            "test@#test20, abc@@#test2020",
            "123456, 1234567",
        ],
        invalid: [
            "Raj@123, abC@12 ",
            "123456, 12345",
        ],
        htmlCode:   `&lt;input type="password" name="password" class="form-control" placeholder="Enter the Password"&gt;\n<br>` +
                    `&lt;input type="password" name="txn_password" class="form-control" placeholder="Enter the Txn Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedGreaterThanRule',
        url: 'https://laravel.com/docs/validation#rule-gt'
    },

    {
        key: 'greater_than_or_equal',
        title: 'Greater Than Or Equal',
        description: `The field under validation must be greater than or equal to the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="https://laravel.com/docs/validation#rule-size" target="_blank"><span class="text-danger"><u>size</u></span></a> rule.`,
        accepted_value: `Strings, numerics, arrays, files`,
        rule_spec: `'password' => 'string',\n\t` + `'txn_password' => 'gte:password',`,
        valid: [
            "test@#test2020, abc@@#test2020",
            "test@#test2, abc@#test2020",
            "123456, 1111111",
            "123456, 123456",
        ],
        invalid: [
            "Raj@123, abC@12",
            "123456, 12345",
        ],
        htmlCode:   `&lt;input type="password" name="password"  class="form-control" placeholder="Enter the Password"&gt;\n<br>` +
                    `&lt;input type="password" name="txn_password"  class="form-control" placeholder="Enter the Txn Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedGreaterThanOrEqualRule',
        url: 'https://laravel.com/docs/validation#rule-gte'
    },

    {
        key: 'image',
        title: 'Image(File)',
        description: "The file under validation must be an image (jpeg, png, bmp, gif, svg, or webp)",
        accepted_value: `jpeg, png, bmp, gif, svg, or webp`,
        rule_spec: `'profile_image' => 'image',`,
        valid: [
            "123.jpg",
            "123.png",
        ],
        invalid: [
            "123.xlsx",
        ],
        removeArrow: '',
        htmlCode: `&lt;input type="file" name="profile_image"&gt;`,
        exampleValueRender: 'updateValueToSingleFileBox',
        validateMethodName: 'validatedImageRule',
        url: 'https://laravel.com/docs/validation#rule-image'
    },

    {
        key: 'In',
        title: 'In',
        description: "The field under validation must be included in the given list of values.",
        accepted_value: `N/A`,
        rule_spec: `'zone' => 'in:first-zone, second-zone',`,
        valid: [
            "first-zone",
            "second-zone",
        ],
        invalid: [
            "third-zone",
        ],
        htmlCode: `&lt;input type="text" name="zone" class="form-control" placeholder="Enter the Value"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedInRule',
        url: 'https://laravel.com/docs/validation#rule-in'
    },

    {
        key: 'in_array',
        title: 'In Array',
        description: "The field under validation must exist in anotherfield's values.",
        accepted_value: `array`,
        rule_spec: `'hobby' => 'required|array'\n\t` + `'security_answer' => 'in_array:hobby.*',`,
        valid: [
            `[cricket,tennis] [tennis]`,
        ],
        invalid: [
            `[cricket,tennis] [football]`,
        ],
        htmlCode: `&lt;select name="hobby[]" class="w-100 mb-3" multiple&gt;\n\t` +
            `&lt;option value="football"&gt;FootBall&lt;/option&gt;\n\t` +
            `&lt;option value="cricket"&gt;Cricket&lt;/option&gt;\n\t` +
            `&lt;option value="tennis"&gt;Tennis&lt;/option&gt;\n\t` +
            `&lt;option value="basketball"&gt;BasketBall&lt;/option&gt;\n` +
        `&lt;/select&gt;\n` +
        `&lt;input type="text" name="security_answer" class="form-control" placeholder="Enter the Security Answer"&gt;`,
        exampleValueRender: 'updateValueToInArrayBox',
        validateMethodName: 'validatedInArrayRule',
        url: 'https://laravel.com/docs/validation#rule-in-array'
    },

    {
        key: 'integer',
        title: 'Integer',
        description: "The field under validation must be an integer.",
        accepted_value: `integer`,
        rule_spec: `'length' => 'integer',`,
        valid: [
            "'123'",
        ],
        invalid: [
            "123.00",
        ],
        htmlCode: `&lt;input type="text" name="length"  class="form-control" placeholder="Enter the Value"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedIntegerRule',
        url: 'https://laravel.com/docs/validation#rule-integer'
    },

    {
        key: 'ip',
        title: 'IP',
        description: "The field under validation must be an IP address.",
        accepted_value: `IP address`,
        rule_spec: `'ip_address' => 'ip',`,
        valid: [
            "192.168.0.1",
            "fe80::b283:feff:fe8b:366b",
        ],
        invalid: [
            "192922332.168.0.1",
            "fe80as012s::b283asd:feff:fe8b:366b",
        ],
        htmlCode: `&lt;input type="text" name="ip_address"  class="form-control" placeholder="Enter the Ip Address"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedIpRule',
        url: 'https://laravel.com/docs/validation#rule-ip'
    },

    {
        key: 'ip4',
        title: 'IP4',
        description: "The field under validation must be an IPv4 address.",
        accepted_value: `IP address`,
        rule_spec: `'ip_address' => 'ip4',`,
        valid: [
            "192.168.0.1",
        ],
        invalid: [
            "192922332.168.0.1",
        ],
        htmlCode: `&lt;input type="text" name="ip_address" class="form-control" placeholder="Enter the Ip Address"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedIp4Rule',
        url: 'https://laravel.com/docs/validation#rule-ip'
    },

    {
        key: 'ip6',
        title: 'IP6',
        description: "The field under validation must be an IPv6 address.",
        accepted_value: `IP address`,
        rule_spec: `'ip_address' => 'ip6',`,
        valid: [
            "fe80::b283:feff:fe8b:366b",
        ],
        invalid: [
            "fe80as012s::b283asd:feff:fe8b:366b",
        ],
        htmlCode: `&lt;input type="text" name="ip_address" class="form-control" placeholder="Enter the Ip Address"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedIp6Rule',
        url: 'https://laravel.com/docs/validation#rule-ip'
    },

    {
        key: 'json',
        title: 'JSON',
        description: "The field under validation must be a validJSON string.",
        accepted_value: `JSON string`,
        rule_spec: `'customer_basic' => 'json',`,
        valid: [
            '{"id":1, "customer":"New Customer"}',
        ],
        invalid: [
            `[customer, new customer]`,
            `["customer":new customer]`,
            `customer`,
            `customer, new customer`,
        ],
        htmlCode: `&lt;input type="text" name="customer_basic" class="form-control" placeholder="Enter the JSON"&gt;`,
        exampleValueRender: 'updateValueToJsonBox',
        validateMethodName: 'validatedJsonRule',
        url: 'https://laravel.com/docs/validation#rule-json'
    },

    {
        key: 'less_than',
        title: 'Less Than',
        description: `The field under validation must be less than the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="https://laravel.com/docs/validation#rule-size" target="_blank"><span class="text-danger"><u>size</u></span></a> rule.`,
        accepted_value: `Strings, numerics, arrays, files`,
        rule_spec: `'password' => 'string'\n\t` + `'txn_password' => 'lt:password',`,
        valid: [
            "raj@1234567, rajAbc",
            "12345678, 1234567",
        ],
        invalid: [
            "raj@12, rajAbcd",
            "12345678, 12345678",
        ],
        htmlCode:   `&lt;input type="password" name="password" class="form-control" placeholder="Enter the Password"&gt;\n<br>` +
                    `&lt;input type="password" name="txn_password" class="form-control" placeholder="Enter the Txn Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedLessThanRule',
        url: 'https://laravel.com/docs/validation#rule-lt'
    },

    {
        key: 'less_than_equal',
        title: 'Less Than Or Equal',
        description: `The field under validation must be less than or equal to the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="https://laravel.com/docs/validation#rule-size" target="_blank"><span class="text-danger"><u>size</u></span></a> rule.`,
        accepted_value: `Strings, numerics, arrays, files`,
        rule_spec: `'password' => 'string'\n\t` + `'txn_password' => 'lte:password',`,
        valid: [
            "raj@1234567, rajAbc",
            "12345678, 12345678",
            "12345678, 1234567",
        ],
        invalid: [
            "raj@12, rajAbcd",
            "12345678, 123456789",
        ],
        htmlCode:   `&lt;input type="text" name="password" class="form-control" placeholder="Enter the Password"&gt;\n<br>` +
                    `&lt;input type="text" name="txn_password" class="form-control" placeholder="Enter the Txn Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedLessThanOrEqualRule',
        url: 'https://laravel.com/docs/validation#rule-lte'
    },

    {
        key: 'max',
        title: 'Max',
        description: `The field under validation must be less than or equal to a maximum value. Strings, numerics, arrays, and files are evaluated in the same fashion as the <a href="https://laravel.com/docs/validation#rule-size" target="_blank"><span class="text-danger"><u>size</u></span></a> rule.`,
        accepted_value: `Strings, numerics, arrays, files`,
        rule_spec: `'password' => 'max:5'`,
        valid: [
            "raj@1",
            "raj",
            "'12345'",
            "'123'"
        ],
        invalid: [
            "raj@12345",
            "raj@123456",
            "'123456'",
        ],
        htmlCode: `&lt;input type="password" name="password" class="form-control" placeholder="Enter the Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedMaxRule',
        url: 'https://laravel.com/docs/validation#rule-max'
    },

    {
        key: 'mimetypes',
        title: 'MIME Types',
        description: "The file under validation must match one of the given MIME types:",
        accepted_value: `N/A`,
        rule_spec: `'video' => 'mimetypes:video/avi,video/mpeg,video/quicktime'`,
        valid: [
            "123.avi",
            "123.mpeg",
        ],
        invalid: [
            "123.jpg",
            "123.png",
        ],
        removeArrow: '',
        htmlCode: `&lt;input type="file" name="video"&gt;`,
        exampleValueRender: 'updateValueToSingleFileBox',
        validateMethodName: 'validatedMimeTypesRule',
        url: 'https://laravel.com/docs/validation#rule-mimetypes'

    },

    {
        key: 'mimes',
        title: 'MIME Type By File/Extension',
        description: `The file under validation must have a MIME type corresponding to one of the listed extensions. A full listing of MIME types and their corresponding extensions may be found at the following location: <a href="https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types" target="_blank"><span class="text-danger">URL</span></a>`,
        accepted_value: `N/A`,
        rule_spec: `'proof' => 'mimes:jpeg,bmp,png,pdf,xls'`,
        valid: [
            "laravel.jpeg",
            "123.png",
            "laravel.pdf",
            "123.xls",
        ],
        invalid: [
            "laravel.tar",
            "123.zip",
        ],
        removeArrow: '',
        htmlCode: `&lt;input type="file" name="proof"&gt;`,
        exampleValueRender: 'updateValueToSingleFileBox',
        validateMethodName: 'validatedMimeTypesFileRule',
        url: 'https://laravel.com/docs/validation#rule-mimes'
    },

    {
        key: 'min',
        title: 'Min',
        description: `The field under validation must have a minimum value. Strings, numerics, arrays, and files are evaluated in the same fashion as the <a href="https://laravel.com/docs/validation#rule-size" target="_blank"><span class="text-danger"><u>size</u></span></a> rule.`,
        accepted_value: `Strings, numerics, arrays, files`,
        rule_spec: `'password' => 'min:5'`,
        valid: [
            "'12345'",
            "'123456'",
            "laravel"
        ],
        invalid: [
            "'1234'",
            "rule",
        ],
        htmlCode: `&lt;input type="password" name="password" class="form-control" placeholder="Enter the Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedMinRule',
        url: 'https://laravel.com/docs/validation#rule-min'
    },

    {
        key: 'not_in',
        title: 'Not In',
        description: "The field under validation must not be included in the given list of values.",
        accepted_value: `N/A`,
        rule_spec: `'color' => 'not_in:black,white'`,
        valid: [
            "blue",
            "red",
        ],
        invalid: [
            "black",
            "white",
        ],
        htmlCode: `&lt;input type="text" name="color" class="form-control" placeholder="Enter the Color"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedNotInRule',
        url: 'https://laravel.com/docs/validation#rule-not-in'
    },

    {
        key: 'not_regex',
        title: 'Not Regex',
        description: `The field under validation must not match the given regular expression. Internally, this rule uses the PHP <span class="text-danger">preg_match</span> function. The pattern specified should obey the same formatting required by <span class="text-danger">preg_match</span> and thus also include valid delimiters.`,
        accepted_value: `N/A`,
        rule_spec: `'projectName' => 'not_regex:/(^([0-9]+)$)/u'`,
        valid: [
            "project",
        ],
        invalid: [
            "'111'",
        ],
        htmlCode: `&lt;input type="text" name="email" class="form-control" placeholder="Enter the Email"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedNotRegexRule',
        url: 'https://laravel.com/docs/validation#rule-not-regex'
    },

    {
        key: 'nullable',
        title: 'Nullable',
        description: `The field under validation may be <font color="brown">null</span>. This is particularly useful when validating primitive such as strings and integers that can contain <font color="brown">null</span> values.`,
        accepted_value: `N/A`,
        rule_spec: `'project_id' => 'nullable'`,
        valid: [
            "",
            "'1'",
        ],
        removeInvalidInputBody: '',
        htmlCode: `&lt;input type="text" name="project_id" class="form-control" placeholder="Enter the Product_Id"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedNullableRule',
        url: 'https://laravel.com/docs/validation#rule-nullable'
    },

    {
        key: 'numeric',
        title: 'Numeric',
        description: "The field under validation must be numeric.",
        accepted_value: `numeric`,
        rule_spec: `'discount_amounts' => 'numeric'`,
        valid: [
            "'5'",
            "50.50",
        ],
        invalid: [
            "100%",
            "Laravel",
        ],
        htmlCode: `&lt;input type="text" name="discount_amounts" class="form-control" placeholder="Enter the Discount Amounts"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedNumericRule',
        url: 'https://laravel.com/docs/validation#rule-numeric'
    },

    {
        key: 'password',
        title: 'Password',
        description: "The field under validation must match the authenticated user's password. You may specify an authentication guard using the rule's first parameter.",
        accepted_value: `N/A`,
        rule_spec: `'password' => 'password:web'`,
        removeValidAndInvalid: '',
        htmlCode: `&lt;input type="password" name="password" class="form-control" placeholder="Enter Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: '',
        url: 'https://laravel.com/docs/validation#rule-password'
    },

    {
        key: 'present',
        title: 'Present',
        description: "The field under validation must be present in the input data but can be empty.",
        accepted_value: `N/A`,
        rule_spec: `'password' => 'present',`,
        valid: [
            "",
            "abcRaj",
        ],
        removeInvalidInputBody: '',
        htmlCode: `&lt;input type="password" name="password" class="form-control" placeholder="Enter Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedPresentRule',
        url: 'https://laravel.com/docs/validation#rule-present'
    },

    {
        key: 'prohibited',
        title: 'Prohibited',
        description: "The field under validation must be empty or not present.",
        accepted_value: `N/A`,
        rule_spec: `'name' => 'required|max:255'\n\t` + `'key' => 'prohibited',`,
        valid: [
            "Hello world, ''",
        ],
        invalid: [
            "Hello world, Random-key",
        ],
        htmlCode: `&lt;input type="text" name="name" class="form-control" placeholder="Enter name"&gt;\n<br>` +
            `&lt;input type="text" name="random_key" class="form-control" placeholder="Enter the random key"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedProhibitedRule',
        url: 'https://laravel.com/docs/validation#rule-prohibited'
    },

    {
        key: 'prohibited_if',
        title: 'Prohibited If',
        description: "The field under validation must be empty or not present if the anotherfield field is equal to any value.",
        accepted_value: `N/A`,
        rule_spec: `'is_minor' => 'boolean'\n\t` + `'condition' => 'prohibited_if:is_minor,true',`,
        valid: [
            "'false', ''",
        ],
        invalid: [
            "'true', 'true'",
        ],
        htmlCode: `&lt;input type="text" name="is_minor" class="form-control" placeholder="Is minor"&gt;\n<br>` +
            `&lt;input type="text" name="condition" class="form-control" placeholder="Condition accepted"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedProhibitedIfRule',
        url: 'https://laravel.com/docs/validation#rule-prohibited-if'
    },

    {
        key: 'prohibited_unless',
        title: 'Prohibited Unless',
        description: "The field under validation must be empty or not present unless the anotherfield field is equal to any value.",
        accepted_value: `N/A`,
        rule_spec: `'is_deceased' => 'boolean'\n\t` + `'date_of_death' => 'prohibited_unless:is_deceased,true',`,
        valid: [
            "'true', ''",
        ],
        invalid: [
            "'false', '2021-03-09'",
        ],
        htmlCode: `&lt;input type="text" name="is_deceased" class="form-control" placeholder="Is minor"&gt;\n<br>` +
            `&lt;input type="text" name="date_of_death" class="form-control" placeholder="Condition accepted"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedProhibitedUnlessRule',
        url: 'https://laravel.com/docs/validation#rule-prohibited-unless'
    },

    {
        key: 'regex',
        title: 'Regex',
        description: `The field under validation must match the given regular expression. Internally, this rule uses the PHP <span class="text-danger">preg_match</span> function.The pattern specified should obey the same formatting required by <span class="text-danger">preg_match</span> and thus also include valid delimiters`,
        accepted_value: `N/A`,
        rule_spec: `'projectId' => 'regex:/(^([a-zA-Z0-9]+)(\d+)?$)/u'`,
        valid: [
            "project2020",
        ],
        invalid: [
            "project 2020",
        ],
        htmlCode: `&lt;input type="text" name="email" class="form-control" placeholder="Enter the Email"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRegexRule',
        url: 'https://laravel.com/docs/validation#rule-regex'
    },

    {
        key: 'required',
        title: 'Required',
        description: "The field under validation must be present in the input data and not empty.",
        accepted_value: `N/A`,
        rule_spec: `'contact_number' => 'required',`,
        valid: [
            "'0123456789'",
            "'1234567890'",
        ],
        invalid: [
            "",
        ],
        htmlCode: `&lt;input type="text" name="contact_number" class="form-control" placeholder="Enter the Contact Number"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRequiredRule',
        url: 'https://laravel.com/docs/validation#rule-required'
    },

    {
        key: 'required_if',
        title: 'Required If',
        description: "The field under validation must be present and not empty if the anotherfield field is equal to any value.",
        accepted_value: `N/A`,
        rule_spec: `'home_status'  => 'required'\n\t` + `'sale_price' => 'required_if:home_status,For Sale',`,
        valid: [
            "For Sale, 10000",
            "For, ''",
        ],
        invalid: [
            "For Sale, ''",
        ],
        htmlCode:   `&lt;input type="text" name="list_type" class="form-control" placeholder="Enter the Home Status"&gt;\n<br>` +
                    `&lt;input type="text" name="sale_price" class="form-control" placeholder="Enter the Sale Price"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRequiredIfRule',
        url: 'https://laravel.com/docs/validation#rule-required-if'
    },

    {
        key: 'required_unless',
        title: 'Required Unless',
        description: "The field under validation must be present and not empty unless the anotherfield field is equal to any value.",
        accepted_value: `N/A`,
        rule_spec: `'age'  => 'required'\n\t` + `'standard' => 'required_unless:age,Minor',`,
        valid: [
            "Minor, ''",
            "Boy, 'LKG'",
        ],
        invalid: [
            "Adult, ''",
        ],
        htmlCode:   `&lt;input type="text" name="age" class="form-control" placeholder="Enter the Age"&gt;\n<br>` +
                    `&lt;input type="text" name="standard" class="form-control" placeholder="Enter the Standard"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRequiredUnlessRule',
        url: 'https://laravel.com/docs/validation#rule-required-unless'
    },

    {
        key: 'required_with',
        title: 'Required With',
        description: "The field under validation must be present and not empty only if any of the other specified fields are present.",
        accepted_value: `N/A`,
        rule_spec: `'sale_types'  => 'string'\n\t` + `'sale_price' => 'required_with:sale_types',`,
        valid: [
            "Residential, Villa",
        ],
        invalid: [
            "Residential, ''",
        ],
        htmlCode:   `&lt;input type="text" name="sale_types" class="form-control" placeholder="Enter the Sale Types"&gt;\n<br>` +
                    `&lt;input type="text" name="sale_price" class="form-control" placeholder="Enter the Sale Price"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRequiredWithRule',
        url: 'https://laravel.com/docs/validation#rule-required-with'
    },

    {
        key: 'required_with_all',
        title: 'Required With All',
        description: "The field under validation must be present and not empty only if all of the other specified fields are present.",
        accepted_value: `N/A`,
        rule_spec: `'country'  => 'string'\n\t` + `'state' => 'string'\n\t` + `'pin' => 'required_with_all:country,state',`,
        valid: [
            "India, Delhi, 12345678",
            "India, '', 12345678",
        ],
        invalid: [
            "India, Delhi, ''",
        ],
        htmlCode:   `&lt;input type="text" name="country" class="form-control" placeholder="Enter the Country"&gt;\n<br>` +
                    `&lt;input type="text" name="state" class="form-control" placeholder="Enter the State"&gt;\n<br>` +
                    `&lt;input type="text" name="pin" class="form-control" placeholder="Enter the Pin"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRequiredWithAllRule',
        url: 'https://laravel.com/docs/validation#rule-required-with-all'
    },

    {
        key: 'required_without',
        title: 'Required Without',
        description: "The field under validation must be present and not empty only when any of the other specified fields are not present.",
        accepted_value: `N/A`,
        rule_spec: `'country'  => 'string'\n\t` + `'state' => 'string'\n\t` + `'pin' => 'required_without:country,state',`,
        valid: [
            "India, Delhi, 12345678",
            "India, Delhi, ''",
        ],
        invalid: [
            "'', '', ''",
            "'', Delhi, ''",
            "Delhi, '', ''",
        ],
        htmlCode:   `&lt;input type="text" name="country" class="form-control" placeholder="Enter the Country"&gt;\n<br>` +
                    `&lt;input type="text" name="state" class="form-control" placeholder="Enter the State"&gt;\n<br>` +
                    `&lt;input type="text" name="pin" class="form-control" placeholder="Enter the Pin"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRequiredWithoutRule',
        url: 'https://laravel.com/docs/validation#rule-required-without'
    },

    {
        key: 'required_without_all',
        title: 'Required Without All',
        description: "The field under validation must be present and not empty only when all of the other specified fields are not present.",
        accepted_value: `N/A`,
        rule_spec: `'country'  => 'string'\n\t` + `'state' => 'string'\n\t` + `'pin' => 'required_without_all:country,state',`,
        valid: [
            "'', '', 12345678",
            "India, '', ''",
            "India, Mumbai, ''",
        ],
        invalid: [
            "'', '', ''",
        ],
        htmlCode:   `&lt;input type="text" name="country" class="form-control" placeholder="Enter the Country"&gt;\n<br>` +
                    `&lt;input type="text" name="state" class="form-control" placeholder="Enter the State"&gt;\n<br>` +
                    `&lt;input type="text" name="pin" class="form-control" placeholder="Enter the Pin"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedRequiredWithoutAllRule',
        url: 'https://laravel.com/docs/validation#rule-required-without-all'
    },

    {
        key: 'same',
        title: 'Same',
        description: "The given field must match the field under validation.",
        accepted_value: `N/A`,
        rule_spec: `'email'  => 'required'\n\t` + `'confirm_email' => 'same:email',`,
        valid: [
            "test@test.com, test@test.com",
        ],
        invalid: [
            "test@test.com, test@test.co",
        ],
        htmlCode:   `&lt;input type="text" name="email" class="form-control" placeholder="Enter the Email"&gt;\n<br>` +
                    `&lt;input type="text" name="confirm_email" class="form-control" placeholder="Confirm Email"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedSameRule',
        url: 'https://laravel.com/docs/validation#rule-same'
    },

    {
        key: 'size',
        title: 'Size',
        description: `The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value. For an array, size corresponds to the <span class="text-danger">count</span> of the array. For files, size corresponds to the file size in kilobytes.`,
        accepted_value: `String,Numeric, Integer, Array`,
        rule_spec: `'images'  => 'size:10kb',`,
        valid: [
            "123.txt(with 10kb size)",
        ],
        invalid: [
            "123.txt(with 20kb size)",
        ],
        removeArrow: '',
        htmlCode: `&lt;input type="file" name="images"&gt;`,
        exampleValueRender: 'updateValueToSingleFileBox',
        validateMethodName: 'validatedSizeRule',
        url: 'https://laravel.com/docs/validation#rule-size'
    },

    {
        key: 'sometimes',
        title: 'Sometimes',
        description: "In some situations, you may wish to run validation checks against a field only if that field is present in the input array.",
        accepted_value: `N/A`,
        rule_spec: `'username'  => 'required'\n\t` + `'password' => 'sometimes',`,
        valid: [
            "raj123, 1234567890",
            "raj123, ''",
        ],
        removeInvalidInputBody: '',
        htmlCode:   `&lt;input type="text" name="username" class="form-control" placeholder="Enter the Username"&gt;\n<br>` +
                    `&lt;input type="text" name="username" class="form-control" placeholder="Enter the Password"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedSomeTimesRule',
        url: 'https://laravel.com/docs/validation#conditionally-adding-rules'
    },

    {
        key: 'starts_with',
        title: 'Starts With',
        description: "The field under validation must start with one of the given values.",
        accepted_value: `N/A`,
        rule_spec: `'currency_value'  => 'starts_with:USD,INR,EURO',`,
        valid: [
            "USD110",
            "INR50",
            "EURO150",
        ],
        invalid: [
            "US110",
            "IN50",
        ],
        htmlCode: `&lt;input type="text" name="currency_value" class="form-control" placeholder="Enter the Currency Value"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedStartsWithRule',
        url: 'https://laravel.com/docs/validation#rule-starts-with'
    },

    {
        key: 'string',
        title: 'String',
        description: `The field under validation must be a string. If you would like to allow the field to also be <font color="brown">null</span>, you should assign the <span class="text-danger">nullable</span> rule to the field.`,
        accepted_value: `N/A`,
        rule_spec: `'username'  => 'string',`,
        valid: [
            "test1234",
            "@#%$&",
        ],
        invalid: [
            "''",
        ],
        htmlCode: `&lt;input type="text" name="username" class="form-control" placeholder="Enter the Username"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedStringRule',
        url: 'https://laravel.com/docs/validation#rule-string'
    },

    {
        key: 'timezone',
        title: 'TimeZone',
        description: `The field under validation must be a valid timezone identifier according to the <span class="text-danger">timezone_identifiers_list</span> PHP function.`,
        accepted_value: `N/A`,
        rule_spec: `'timezone'  => 'timezone',`,
        valid: [
            "Europe/Dublin",
            "Asia/Kolkata",
        ],
        invalid: [
            "Asia/Delhi",
            "Europe/Auckland",
        ],
        htmlCode: `&lt;select name="timezone" class="form-control"&gt;\n\t` +
            `&lt;option value="Europe/Dublin"&gt;Europe/Dublin&lt;/option&gt;\n\t` +
            `&lt;option value="Asia/Kolkata"&gt;Asia/Kolkata&lt;/option&gt;\n\t` +
            `&lt;option value="Asia/Delhi"&gt;Asia/Delhi&lt;/option&gt;\n\t` +
            `&lt;option value="Europe/Auckland"&gt;Europe/Auckland&lt;/option&gt;\n` +
        `&lt;/select&gt;`,
        exampleValueRender: 'updateValueToSelectBox',
        validateMethodName: 'validatedTimezoneRule',
        url: 'https://laravel.com/docs/validation#rule-timezone'
    },

    {
        key: 'unique',
        title: 'Unique (Database)',
        description: "The field under validation must not exist within the given database table.<br>",
        accepted_value: `<font color='red'>NOTE:</span> We assume that 'test@test.com', 'rule@test.com', 'validation@test.com' not in email column in your database table `,
        rule_spec: `'email'  => 'unique:users,email',`,
        valid: [
            "test@test.com",
            "rule@test.com",
            "validation@test.com",
        ],
        invalid: [
            "test@123",
            "L@r@vel123",
        ],
        htmlCode: "NOTE: We assume that 'test@test.com', 'rule@test.com', 'validation@test.com' not in email column in your database table\n<br>" +
                    '&lt;ul class="list-group ml-3 mt-2"&gt;\n\t' +
                        '&lt;li&gt;test@test.com&lt;/li&gt;\n\t' +
                        '&lt;li&gt;rule@test.com&lt;/li&gt;\n\t' +
                        '&lt;li&gt;validation@test.com&lt;/li&gt;\n' +
                    '&lt;/ul&gt;\n<br>' +
                    '&lt;input type="email" name="email" class="form-control" placeholder="Enter the Email"&gt;',
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedUniqueRule',
        url: 'https://laravel.com/docs/validation#rule-unique'
    },

    {
        key: 'url',
        title: 'URL',
        description: "The field under validation must be a valid URL.",
        accepted_value: `N/A`,
        rule_spec: `'valid_url'  => 'url',`,
        valid: [
            "https://test.com/test",
            "http://test.com/mail/users",
            "http://www.test.com/mail/users",
        ],
        invalid: [
            "www://test.com/test",
            "www://test.com",
        ],
        htmlCode: `&lt;input type="text" name="valid_url" class="form-control" placeholder="Enter the URL"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedUrlRule',
        url: 'https://laravel.com/docs/validation#rule-url'
    },

    {
        key: 'uuid',
        title: 'UUID',
        description: "The field under validation must be a valid RFC 4122 (version 1, 3, 4, or 5) universally unique identifier (UUID).",
        accepted_value: `N/A`,
        rule_spec: `'user_id'  => 'uuid',`,
        valid: [
            "123e4567-e89b-12d3-a456-426655440000",
        ],
        invalid: [
            "123e4-e89b567-12d3-a456-4266554",
        ],
        htmlCode: `&lt;input type="text" name="user_id"  class="form-control" placeholder="Enter the User_Id"&gt;`,
        exampleValueRender: 'updateValueToSingleTextBox',
        validateMethodName: 'validatedUuidRule',
        url: 'https://laravel.com/docs/validation#rule-uuid'
    },
];
