JS Notes:
-types with falsey values: 0, false, undefined, null, NaN, ""

HTML Notes:
-UTF8 wingdings contains browser native icons

Stripe:
-https://github.com/azmenak/react-stripe-checkout
-Fake info:
  -4242 4242 4242 4242
  -exp 01/2021
  -CW 123

Concept Notes:
-data normalization = turning an array into an object before it's contents are ever referenced
-"What we do as devs: Receive data and present that data to a user, a customer and we let the customer manipulate that data. But we engineer that, how it flows how it moves how it changes is our job."

Styling:
-CSS in JS solves the global scope of CSS declarations. instead, styling is scoped to the element and it's children.

SQL vs noSQL:
noSQL doesnt appear to have field restrictions for document creation (no typing)

Deployment:
initial FE deploy command: heroku create react-refresh --buildpack https://github.com/mars/create-react-app-buildpack.git
  -using buildpack means we dont need to run npm build ourselves - yay create react app!

-auto deploy on master push guide: https://devcenter.heroku.com/articles/github-integration