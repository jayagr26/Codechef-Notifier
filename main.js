// sample response
// { "upid": "70712633", "result_code": "accepted", "result_description": "", 
//      "signal": null, "show_status_table": "yes", "error_link": null, "time": "0.01", 
//      "score": null, "is_funny_mode": false }

// get request url
// https://www.codechef.com/api/ide/submit?solution_id=70712633

let BASE_URL = "www.codechef.com/api/ide/submit";

var callback = function (details) {
    console.log("This is the url: " + details.url);
    var headers = details.requestHeaders;

    for (var headerIndex = 0; headerIndex < headers.length; headerIndex++) {
        if (headers[headerIndex].name.toLowerCase() === "x-csrf-token") {
            console.log("This is x-csrf-token: " + headers[headerIndex].value);
        }
    }
};
var filters = {
    urls: ["*://" + BASE_URL + "*"],
    types: [
        'main_frame',
        'sub_frame',
        'xmlhttprequest'
    ]
};
var opt_extraInfoSpec = ["requestHeaders"];

chrome.webRequest.onBeforeSendHeaders.addListener(callback, filters, opt_extraInfoSpec);