export default {
    clientIDs: {
        'mypurecloud.com': 'e93d91c6-481d-4238-835d-566c425aab46',
        'mypurecloud.ie': '41c93e94-ba9e-4c5e-bf9a-f9ee0b043420',
        'mypurecloud.com.au': 'd08762cb-d5fd-4447-88ae-c138a374ce31',
		'mypurecloud.de': '1b6a2da0-66f4-4dcf-b3f2-932d16962781'
    },
    "redirectUri": "https://embrava.github.io/genesys/embrava_premium_client_app/wizard/index.html",
    
    //Permissions required for running the Wizard App
    "setupPermissionsRequired": ['admin'],

    // To be added to names of PureCloud objects created by the wizard
    //"prefix": "STATUS_LIGHTS_FOR_PURECLOUD_",
    "prefix": "Status Lights for PureCloud ",
    "prefixAppName": "Status Lights",
}