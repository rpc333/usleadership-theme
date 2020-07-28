# usleadership-theme
The Ghost theme for the website of the American Leadership Foundation (usleadership.org)

Note:
<br/>
To designate a default Home page, change route file to:
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
