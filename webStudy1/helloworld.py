#!C:\Users\dlwog\AppData\Local\Programs\Python\Python39\python.exe
print("content-type: text/html")
print()
import cgi
form = cgi.FieldStorage()
# pageId = form["id"].value
pageId = form.getvalue("id")
print('''<!doctype html>
<html>
  <head>
    <title>WEB1 - WEB</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    <input type="button" value="night" onclick="
    ntToggleSet(this);
    ">
    <ol>
      <li><a href="helloworld.py?id=HTML">HTML</a></li>
      <li><a href="helloworld.py?id=CSS">CSS</a></li>
      <li><a href="helloworld.py?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>{title}</h2>
    <p>
      Web is a computer programming system created by Donald E. Knuth as the
      first implementation of what he called "literate programming": the idea
      that one could create software as works of literature, by embedding source
      code inside descriptive text, rather than the reverse
      (as is common practice in most programming languages),
      in an order that is convenient for exposition to human readers,
      rather than in the order demanded by the compiler.[1]
      Web consists of two secondary programs: TANGLE, which produces compilable
      Pascal code from the source texts, and WEAVE, which produces nicely-formatted,
      printable documentation using TeX. CWEB is a version of Web for the C programming
      language, while noweb is a separate literate programming tool, which is
      inspired by Web (as reflected in the name) and which is language agnostic.
      The most significant programs written in Web are TeX and Metafont.
      Modern TeX distributions use another program Web2C to convert Web source to C.
    </p>
    </body>
</html>
'''.format(title=pageId))
