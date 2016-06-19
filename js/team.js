arr = [
{
"name": "Vini Sharma",
"url": "vini.jpg"
},
{
"name": "Prateeksha Maurya",
"url": "prateeksha.jpg"
},
{
"name": "Sandeep Chaudhary",
"url": "sandeep.jpg"
},
{
"name": "Priyanka Bansal",
"url": "priyanka.jpg"
},
{
"name": "Nishtha Behal",
"url": "nishtha.jpg"
},
{
"name": "Diksha Nagpal",
"url": "diksha.jpg"
},
{
"name": "Pramod Agarwal",
"url": "pramod.jpg"
},
{
"name": "Ankur Chaurasia",
"url": "ankur.jpg"
},
{
"name": "Ankit Veer Singh",
"url": "ankit.jpg"
},
{
"name": "Geeta Singh",
"url": "geeta.jpg"
},
{
"name": "Prapti Rathod",
"url": "prapti.jpg"
},
{
"name": "Anita Kumari",
"url": "anita.jpg"
},
{
"name": "Ruchika Dandotia",
"url": "ruchika.jpg"
},
{
"name": "Ananya Singla",
"url": "ananya.jpg"
},
{
"name": "Sweta Panwar",
"url": "sweta.jpg"
},
{
"name": "Jatinder Singh",
"url": "jatinder.jpg"
},
{
"name": "Ajay Khatri",
"url": "ajay.jpg"
},
{
"name": "Akshay Sharma",
"url": "akshay.jpg"
},
{
"name": "Kanvi Goyal",
"url": "kanvi.jpg"
},
{
"name": "Kapil Mailk",
"url": "kapil.jpg"
},
{
"name": "Md Imran",
"url": "imran.jpg"
},
{
"name": "Utkarsh Gupta",
"url": "utkarsh.jpg"
},
{
"name": "Sourav Tripathi",
"url": "sourav.jpg"
},
{
"name": "Prashant Ganiya",
"url": "prashant.jpg"
},
{
"name": "Benison Joseph",
"url": "benison.jpg"
},
{
"name": "Avinash Kumar",
"url": "avinash.jpg"
},
{
"name": "Gnanendar Reddy",
"url": "gnanendar.jpg"
},
{
"name": "Reshi Kiran",
"url": "reshi.jpg"
},
{
"name": "Priyatham",
"url": "priyatham.jpg"
},
{
"name": "Abhishek Kumar",
"url": "abhishek-kumar.jpg"
}
];

recent_works = [
{"news": "Fun Events organised for students who came to IIT Roorkee under the initiative of SIIRD IIT Roorkee",
"url":"https://www.facebook.com/CRY.Roorkee/posts/1207664429260592",
"date":"November 1,2015"
},
{"news":"Organisation of events like Sparsh and Pic-O-Mania in Thomso'15.",
"url":"https://www.facebook.com/CRY.Roorkee/posts/1199998556693846",
"date":"October 16,2015"
},
{"news":"Donation of clothes collected from Sarojini and Kasturba Bhawan in Kasturba Gandhi Balika Vidhyala,Roorkee.",
"url":"https://www.facebook.com/CRY.Roorkee/posts/1178184252208610",
"date":"September 8, 2015"
},
{"news":"Drawing and Rakhi making competition held in KGBV on the occasion of Rakshabandhan",
"url":"https://www.facebook.com/CRY.Roorkee/posts/1176946315665737",
"date":"September 6,2015"
}
];

/* Team Section*/
var width = screen.width;
var columns = 6;
if (width<768)  columns = 4;
team_info(arr,4,columns,"main");
team_info(arr,Math.ceil(arr.length/columns),columns,"modal");

/* Recent Works Section */
recent(recent_works);