/**
 * Created by shady on २०-०९-२०१७.
 */

app.config(config);
config.$inject["$routeProvider"];
function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "modules/main.php",
        controller:"main"
        })
        .when("/balance", {
            templateUrl : "modules/balance.php",
            controller:"balance"
             })
        .when("/history", {
            templateUrl : "modules/history.php",
            controller:"history"

        })
        .when("/referrals", {
            templateUrl : "modules/referrals.php",
            controller: "referrals"
        })
        .when("/sendmoney",{
            templateUrl:"modules/sendmoney.php",
            controller:"sendmoney"
        })
        .when("/requestmoney",{
            templateUrl:"modules/requestmoney.php",
            controller:"recievemoney"
        })
        .when("/freeze",{
            templateUrl:"modules/freeze.php",
            controller:"freeze"
        })
        .when("/profile",{
            templateUrl:"modules/profile.php",
            controller:"profile"
        })
        .when("/support",{
            templateUrl:"modules/support.php",
            controller:"support"
        })
        .otherwise(
            {
                templateUrl:"modules/main.php"
            }
        );
};
