# WordPress test

## Install

### Development environment

First of all, fork this project (top right hand corner button).

#### GitPod

Then, as an easy way to go, we recommend you to open your fork in [GitPod](https://gitpod.io/) by replacing `<your-user-name>` by
your actual GitHub username in the following link:
```
https://gitpod.io/#https://github.com/<your-user-name>/WordPressTest
```

And open this link in your browser.

As we installed everything for you, you can skip the following step if you choose GitPod and go to
[Install Wordpress step](#wordpress).

#### Software

If you want to run this on a local machine:

Install [Node.js](https://nodejs.org).

Install [Git](https://git-scm.com/).

Install a web server with PHP and MySQL (Lamp, Mamp, Wamp, Xamp, or any else).

Then create a MySQL DB and a user running the following commands:
```sql
CREATE DATABASE wordpress;
CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'wordpress';
GRANT ALL PRIVILEGES ON wordpress.* TO 'wordpress'@'localhost';
```

Then run:

```shell
# Clone your fork of the project (replace <your-user-name> with your actual GitHub username)
git clone https://github.com/<your-user-name>/WordPressTest
cd WordPressTest/www/wp-content/themes/vuejs
npm install
npm run production
```

Add a virtual host to make your web server serve the **WordPressTest/www** directory.

### WordPress

Open the WordPress app in your browser, then start the WordPress install.

Enter "wordpress", "wordpress" and "wordpress" as DB name, DB user and DB password (unless you changed them).

Then proceed. Enter what you wish on the next step and finish the install.

Go to the "Permaliens" settings and choose "Nom de l'article" to enable the
rewrite rules engine required for the JSON API.

### Develop

Run the watch command so the theme will be automatically refreshed as you code (automatic on GitPod):
```shell
cd WordPressTest/www/wp-content/themes/vuejs
npm run watch
```

The files you will have to check and edit are all in the folder:
**www/wp-content/themes/vuejs**

#### Challenge 1: CSS

Make the header logo and title look like this:
![Expected header](https://github.com/OVNICap/WordPressTest/raw/master/www/wp-content/themes/vuejs/src/assets/expected-header.jpg)

Make the header menu look like this:
![Expected header](https://github.com/OVNICap/WordPressTest/raw/master/www/wp-content/themes/vuejs/src/assets/expected-menu.jpg)

- We want `1em` margin top, bottom and between image and text.
- We expect items to be centered vertically and horizontally.
- We want the logo to be a rounded instead of squared.
- We want the menu to be invisible until the cursor is over the burger icon.
- We want to be the menu on the right side and the button in the middle vertically.
- You must only edit **site-header.css**, changing the HTML is not needed.
- Consider the whole criteria should remain true if size of text or image change a bit in the future.

Send us your **site-header.css** as challenge solution.

#### Challenge 2: PHP

Create an API endpoint: **/wp-json/post-stat/words-lenth/1**
(`1` could be the ID of any existing post).

Your API should return the following JSON:
```json
{
    "id": 1,
    "count": 17
}
```

The property "id" reminds the id passed in the URL and "count" is the number
of words in the post. The letters à, é, è and ê should be considered as
word letters too (other non-english letters can be ignored in this exercise).

For convenience, we won't code this in a plug-in, but in **words-length.php**
which will be included by **functions.php**.

Send us **words-length.php** as challenge solution.

#### Challenge 3: JavaScript

Add the display of the date for each post of the list "Derniers articles".
![Expected header](https://github.com/OVNICap/WordPressTest/raw/master/www/wp-content/themes/vuejs/src/assets/expected-recent-posts.jpg)

If the date is today, display "Aujourd'hui à " then hours and minutes.

Else, display the date as day/month/year.

Take care of displaying the correct output in any timezone.

Send us **RecentPosts.vue** as challenge solution.
