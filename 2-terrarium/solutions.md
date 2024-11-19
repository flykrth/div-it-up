# 1-intro-to-html

### 🚀 Challenges

Use the \<marquee\> tag to move the \<h1\> horizontally.
```html
<marquee> <h1>My Terrarium</h1> </marquee>
```

### Assignment
Imagine you are designing, or redesigning, your personal web site. Create a graphical mockup of your site, and then write down the HTML markup you would use to build out the various elements of the site. You can use software of your choice, just make sure to hand-code the HTML markup.

```html
<!DOCTYPE html>

<html>
    <head>
        <title>My website</title>
        <style>
            h1 {text-align: center;}
            .button {
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }
            .Ribbon {
                text-align: center;
            }
            .button1 {background-color: #04AA6D;}
            .button2 {background-color: #008CBA;}
            .button3 {background-color: #e75906;}
            .button4 {background-color: #ca0bdb;}
        </style>
    </head>

    <body>
        <h1>Welcome to the first markup of my personal website</h1>
        <div class="Ribbon">
            <button class="button button1">Home</button>
            <button class="button button2">Blogs</button>
            <button class="button button3">Gallery</button>
            <button class="button button4">About me</button>
        </div>
        
        <h2>Introduction</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis metus at diam viverra feugiat ut ut mauris. Aenean semper nec ligula a mollis. Donec luctus lorem risus, ac dignissim nisi pellentesque et. Nunc non scelerisque nisl, ac aliquet odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin posuere sapien eu tellus semper tincidunt. Donec congue at elit rutrum rhoncus. Donec hendrerit risus eu nisi commodo, at luctus ante consectetur. Sed pretium ipsum nec neque luctus, ac volutpat eros semper. Aenean sed purus vel dolor convallis dapibus. Etiam tempus, lectus sit amet elementum egestas, turpis eros pulvinar sapien, vel laoreet tellus tellus ut nibh. In hac habitasse platea dictumst. Vivamus posuere libero eget dolor eleifend, vel rutrum nisl sagittis. Ut aliquet mi id justo tristique, vel convallis orci pellentesque. Donec venenatis ex nec tincidunt pharetra.

        <h2>My field of interests</h2>
        <h3>Lorem ipsum</h3>
        Nullam tincidunt in risus ut luctus. Nulla risus odio, accumsan eget nisl vel, ultrices interdum dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac rutrum risus. Aenean feugiat at ante eget varius. Suspendisse dapibus bibendum sapien consequat tempor. Maecenas interdum quam sem, id feugiat mauris tempor at.
        <h3>Ipsum Lorem</h3>
        Ut placerat ipsum purus, non volutpat nisl tempor eget. Mauris egestas euismod pretium. Fusce dapibus ligula et eros pretium, sagittis commodo metus blandit. Curabitur vestibulum at libero at euismod. Praesent placerat pharetra libero, sed consectetur magna interdum eget. Aliquam nec enim quis leo pharetra consectetur nec quis purus. Aenean fringilla ultrices est, non porta lectus sagittis ac.

        <h2>Places I've been</h2>
        <h3>Lorem ipsum</h3>
        Nunc dignissim consectetur neque quis lacinia. In turpis lorem, tincidunt sit amet purus sit amet, placerat convallis tellus. Sed sapien orci, blandit quis urna non, tincidunt egestas libero. Donec et porttitor lorem, a placerat elit. Morbi pellentesque elit sed vulputate elementum. Sed sapien tortor, commodo a tellus vitae, malesuada scelerisque ante. Integer id nulla volutpat, pretium ante non, rhoncus nunc. Aliquam posuere est ac elit aliquet posuere.
        <h3>Ipsum Lorem</h3>
        In efficitur efficitur mi, ut elementum neque congue vitae. Donec bibendum venenatis quam non sagittis. Pellentesque consectetur fermentum ipsum, id tincidunt libero convallis at. Vestibulum vulputate mi a odio mollis consectetur. Quisque rhoncus, tortor maximus mollis sagittis, odio arcu finibus arcu, sit amet sagittis urna sem ut nulla. Cras in tincidunt lorem, sed eleifend felis. Nam scelerisque turpis non magna consectetur, eu consectetur justo facilisis.

        <h2>Conclusion</h2>
        Quisque maximus elit quam, at dignissim odio aliquet ullamcorper. In sodales viverra elit, et blandit dolor lacinia et. Fusce ut tortor sapien. Nam vel hendrerit nisl. Suspendisse eu molestie libero, id consequat tellus. Nulla congue libero dolor, in interdum ex facilisis et. Vestibulum finibus mi ut nulla accumsan, sed sagittis orci luctus. Integer ullamcorper diam id mauris imperdiet pharetra. Aliquam tincidunt elit nunc, in efficitur ipsum varius at. Aliquam non lectus mattis, pharetra sapien pulvinar, laoreet nisi. Praesent tincidunt sapien sit amet tellus imperdiet, in tristique tortor fringilla. Nullam eget dolor ac felis varius ullamcorper commodo sit amet neque. Etiam vel lorem quis nisl semper tempor id molestie mauris. Maecenas quis eleifend ante. Aenean tincidunt quam vitae nunc posuere vehicula. Pellentesque a malesuada libero.
    </body>
</html>
```

Web page screenshot:
![alt text](image.png)