# Email Subscription

## Install Dependencies

```
npm install
```

## Run App

```
##Run in dev mode
npm run dev

```

# Summary of project

```
This is a simple email subscription project where user enters the email in simple web in "localhost:4000" , when user press the submit button it will send the email containing following:
   1. If user email is already has been in subscription list then it will send email with "Already subscribed"
   2. If user email is not not present in subscription list then it will send confirmation link to the entered email. Upon clicking confirmation link the entered email address will added to the subscription email database.
```

## Working Summary

```
In this project I have used simple express handlebars for the user interface.

When user enters the Email It will hit the api "/subscription" in which the email will be extracted from req.body . After that we will check that the email is already present in database or not.
If yes the the email will send with message "Already subscribed"
If not then the email will send with message "Click following link to verify"
Upon clicking confirmation link the email will be extracted from params and it will be added to database and user will be redirected to the "https://google.com"
```

```
In this I have not used any tokenization , because I am in hurry in given deadline. If that is required then I also can do that.
```
