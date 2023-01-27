# I2ML Homepage

A simple lab webpage without any backstage or database!

Responsive for all devices including computer, phone and pad!

Contents of the page (i.e., members, news and publications) can be easily updated by editing the dictionary files!

By **fork -> edit elements of dict file -> pull**, everyone can easily edit the contents!

## Guidance for Update Members
Just edit elements in ``contents/members.js``. In addition, since every member has a corresponding photo, you may need upload a photo to ``photos/`` folder.
##### Example of adding a new student member:
Suppose we are going to adding a new postgraduate student named "Aris", whose year of attendence is 2023 and his research is about image recogonation.

First, upload his photo to "photos/" folder, let the filename be "xx.png" (of course, "Aris.png" is more suggested).
Notice: 'xx.png' is better not to be too large, otherwise it will load slowly. <100KB is recommended.

Then, open up "contents/members.js", you will get a variable named *members*. Find the key of "Student":
```javascript
members = {
    // ...
    "Student":[
        {
            "name":"Kang You",
            "photoUrl":"./photos/Kang You.jpg",
            "introduction":"Research area: Lossy point cloud geometry compression using deep learning.",
            "footnote":"Postgraduate Student",
            "footnote2":"Year of attendance: 2020"
        },
        // etc...
    ],
    // etc...
}
```
Finally, add a new element with a similar format of other members:
```javascript
members = {
    // etc...
    "Student":[
        {
            "name":"Aris",
            "photoUrl":"./photos/xx.jpg",
            "introduction":"Research area: Image recogonation.",
            "footnote":"Postgraduate Student",
            "footnote2":"Year of attendance: 2023"
        }, // don't forget this comma
        {
            "name":"Kang You",
            "photoUrl":"./photos/Kang You.jpg",
            "introduction":"Research area: Lossy point cloud geometry compression using deep learning.",
            "footnote":"Postgraduate Student",
            "footnote2":"Year of attendance: 2020"
        },
        // etc...
    ],
    // etc...
}
```
Done! Every one will see Aris in the index page and member page!

Similarly, delete or edit the members in I2ML just need to delete or edit the corresponding elements of this file!

## Guidance for Update News
Just edit elements in ``contents/news.js``.
##### Example of adding a new news:
Suppose we are going to adding a new news titled "Our paper accepted by CVPR!" with a content of "Congrats content." in 2023-01-01.

First, open up "contents/news.js", you will get a variable named *news*.
```javascript
news = [
    {
        'title':'New homepage of our I2ML is published online!',
        'date':'2023-01-25',
        'newbrand':true,
        'content':'Publishing content from a website can be accomplished simply by manipulating dictionary objects! See our GitHub for details on the source code and how to use it!😄',
    },
    // etc...
}
```
Then, add a new element with a similar format of other news:
```javascript
news = [ 
    {
        'title':'Our paper accepted by CVPR!',
        'date':'2023-01-01',
        'newbrand':true, // set true to show a cute red "New" tab before the title
        'content':'Congrats content.',
    }, // don't forget this comma
    {
        'title':'New homepage of our I2ML is published online!',
        'date':'2023-01-25',
        'newbrand':false,
        'content':'Publishing content from a website can be accomplished simply by manipulating dictionary objects! See our GitHub for details on the source code and how to use it!😄',
    },
    // etc...
}
```
Done! Every one will see this news in the index page and news page!

Similarly, delete or edit the news in I2ML just need to delete or edit the corresponding elements of this file! Faculty members and Alumi members are in the same way.

## Guidance for Update Publications
Just edit elements in ``contents/publications.js``.
##### Example of adding a new publication:
Suppose we are going to adding a new publication titled "Aris, I2ML is all you need, CVPR, 2023." with paperlink of "https://ieeexplore.ieee.org/abstract/document/0000000/".

First, open up "contents/publications.js", you will get a variable named *publications*:
```javascript
publications = [
    {
        'title':"Kang You, Pan Gao, and Qing Li. 2022. IPDAE: Improved Patch-Based Deep Autoencoder for Lossy Point Cloud Geometry Compression. In Proceedings of the 1st International Workshop on Advances in Point Cloud Compression, Processing and Analysis (APCCPA '22). Association for Computing Machinery, New York, NY, USA, 1–10.",
        'year':2022,
        'paperlink':'https://dl.acm.org/doi/abs/10.1145/3552457.3555728',
        'arxivlink':'https://arxiv.org/abs/2208.02519',
        'codelink':'https://github.com/I2-Multimedia-Lab/IPDAE',
    },
    // etc...
]
```
Then, add a new element with a similar format of other publications:
```javascript
publications = [
    {
        'title':"Aris, I2ML is all you need, CVPR, 2023.",
        'year':2023，
        'paperlink':'https://ieeexplore.ieee.org/abstract/document/0000000/',
        'arxivlink':'', // if you have an arxiv version, put it in. other wise keep an empty quotes like ''.
        'codelink':'', // if you have an open-source code, put it in. other wise keep an empty quotes like ''.
    }, // don't forget this comma
    {
        'title':"Kang You, Pan Gao, and Qing Li. 2022. IPDAE: Improved Patch-Based Deep Autoencoder for Lossy Point Cloud Geometry Compression. In Proceedings of the 1st International Workshop on Advances in Point Cloud Compression, Processing and Analysis (APCCPA '22). Association for Computing Machinery, New York, NY, USA, 1–10.",
        'year':2022,
        'paperlink':'https://dl.acm.org/doi/abs/10.1145/3552457.3555728',
        'arxivlink':'https://arxiv.org/abs/2208.02519',
        'codelink':'https://github.com/I2-Multimedia-Lab/IPDAE',
    },
    // etc...
]
```
Done! Every one will see this publication in the index page and publication page!

Similarly, delete or edit the publication in I2ML just need to delete or edit the corresponding elements of this file!

## File Organization
This project is organized in the following format:
```
project/
    ├── assets/
    |       ├── css/    //
    |       ├── img/    // 网页tab上的logo、NUAAlogo、微信扫一扫图片等
    |       ├── js/     //
    |       └── scss/   //
    ├── contents/
    |       ├── config.js       // 页面的某些设置，如主页最多显示几条新闻等，可以在这里修改
    |       ├── members.js      // 成员列表变量
    |       ├── news.js         // 新闻列表变量
    |       └── publications.js // 成果列表变量
    ├── photos/             // 照片
    ├── article.html        // 新闻详情页
    ├── index.html          // 主页（包含部分成员、新闻及成果）
    ├── members.html        // 成员列表页
    ├── news.html           // 新闻列表页
    ├── publications.html   // 成果列表页
    └── README.md
```

## Thanks
This project is build upon Mundana, a free HTML bootstrap blogging template by [Sal](https://www.wowthemes.net).

Also, thanks to the great efforts of: [Bootstrap](https://github.com/twbs/bootstrap), [Gulp](https://gulpjs.com/) and [SASS](https://sass-lang.com/).

Thank you for your support!
