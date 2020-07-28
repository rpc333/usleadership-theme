# usleadership-theme
The Ghost theme for the website of the American Leadership Foundation (usleadership.org)

Note:
To designate a default Home page, change route file to:
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
