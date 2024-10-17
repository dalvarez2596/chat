# README

This README documents the steps necessary to get the Chat application up and running. This application is built with Ruby on Rails and utilizes Hotwire for a dynamic user experience.

## Ruby Version

This application is built using Ruby version **3.2.2**.

## System Dependencies

Make sure you have the following installed:

- Ruby 3.2.2
- Rails 7.2.1

## Configuration

1. Clone the repository:
   ```bash
   git clone git@github.com:dalvarez2596/hotwire-chat.git
   cd chat
   ```
2. Install the required gems:

   ```bash
    bundle install
    ```
3. Database Creation

    To create the database, run:

    ```bash

    rails db:create
    ```
4. Database Initialization

    To set up the database with the necessary tables and seed data, run:

    ```bash

    rails db:migrate
    ```

5. Run the application :

    ```bash
    rails s
    ```  

And go to http://localhost:3000/rooms to start creating rooms and chats :)

## Additional Notes  

For more information on using Hotwire, refer to the official guide: [Hotwired.dev.](https://hotwired.dev/)
