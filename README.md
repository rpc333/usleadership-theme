# usleadership-theme
The Ghost theme for the website of the American Leadership Foundation (usleadership.org)

**Main files:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `home.hbs` - Used for home page
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives

**To designate a default Home page, change route file to:**
<pre>
routes:
  /:
    data: page.home
    template: home

collections:
  /blog/:
    permalink: /blog/{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
</pre>
