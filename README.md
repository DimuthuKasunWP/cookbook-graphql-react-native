# Receptar

This is example of graphQL Apollo Client technology and a little bit of React Native.

# Installation

Note: Installation will cover steps only for iOS.

To run this project you have to install [React Native](https://facebook.github.io/react-native/docs/getting-started.html)

We recommend using yarn for this project, you can get yarn by running:

`npm install --global yarn`

This project also uses MongoDB. Before you run installation on iOS we recommend getting brew:

`/usr/bin/ruby-e"$(curl-fsSLhttps://raw.githubusercontent.com/Homebrew/install/master/install)"`

For Mac users run following:

`brew update`

`brew install mongodb`

Now you will need to create the data directory. By default, the mongod process uses the `/data/db` directory. Run this command to create the new directory:

`mkdir -p /data/db`

If you get following error:

`mkdir: /data/db: Permission denied`

just use the force:

`sudo mkdir -p /data/db`

Before starting the `mongod` process you need to add write permissions for the directory you just created, this can be achieved by following:

`sudo chown -R $USER /data/db`

After that open new tab in your terminal and run:

`mongod`


# Running the application
The repository is divided into two parts:
  * server

  * client

To run the server you need to have running `mongod` process!!
## To run the server:
From the root director:

`cd server`

`yarn`

After installation run:

`yarn start`

If everything went good you should see following:

`GraphQL Server is now running on http://localhost:4000
Connected to DB`

## To run the client:
From the root directory:

`cd client`

`yarn`

After installation run following:

`react-native start`

this will start the react-native packager which is needed for running the app. Open new tab in your terminal, from root folder navigate to following:

`cd client`

and finally run

`react-native run-ios`

Enjoy!
