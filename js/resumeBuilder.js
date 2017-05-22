/*

 var firstName = "Rahul"
 console.log(firstName);

 var awesomeThoughts = "I am " + firstName+" and I am awesome";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("awesome","fun");
 console.log(funThoughts);

// $("#main").append(funThoughts);

var name = "Rahul Bhandari";
var role = "Web Developer"
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var skills = ["HTMl","CSS","JS"];
var bio = {
    "name":name,
    "role":role,
    "contact":{
        "mobile":"979-739-6407",
        "email":"rahulbhandari11@gmail.com",
        "github":"rahulb11",
        "location":"Houston"
    },
    "pictureURL":"images/Rahul.jpg",
    "welcomeMessage":"Howdy!",
    "skills":skills
}
// $("#main").append(bio.contact.mobile);
// console.log(bio);

var work = {};
work.position = "Analyst";
work.employer = "AIG";
work.years = 1;
work.city = "Houston"

var education = {};
education["name"] =  "TAMU";
education["years"] = 2;
education["city"] = "College Station";

$("#main").append(work["position"]);
$("#main").append(education.name);

*/

var work = {
    "jobs":[
        {
            "employer":"AIG",
            "title":"Business System Analyst",
            "location":"Houston, Texas",
            "dates":"July 2016 to Present",
            "description":"Working on data analysis and project coordination"
        },
        {
            "employer":"JPMorgan",
            "title":"Performance Test Engineer",
            "location":"Mumbai, India",
            "dates":"July 2012 to July 2014",
            "description":"Worked on end to end performance testing of several banking applications"
        }
    ]
}

var projects = {
    "projects":[
        {
            "title":"Personal Website";
            "dates":"Jan 2017 to Present";
            "description":"Developing a personal website using HTML, CSS, JS";
            "images":[];
        },
        {
            "title":"Mobile Store Website";
            "dates":"Jan 2011 to May 2011";
            "description":"Developed a mobile store website using HTML, CSS, PHP, AJAX";
            "images":[];
        }
    ]
}

var bio = {
    "name":"Rahul Bhandari",
    "role":"Tech Ninja",
    "welcomeMessage":"Howdy!",
    "biopic":"images/Rahul.jpg",
    "contact":{
        "mobile":"979-739-6407",
        "email":"rahulbhandari11@gmail.com",
        "github":"rahulb11",
        "location":"Houston"
    },
    "skills":["HTML","CSS","JS","GitHub"]
}

var education = {
    "schools":[
        {
            "name":"Texas A&M University";
            "location":"College Station";
            "degree dates":"May 2016";
            "url":"www.tamu.edu";
            "majors":["MIS"]
        },
        {
            "name":"University of Mumbai";
            "location":"Mumbai";
            "degree dates":"June 2012";
            "url":"www.mu.ac.in";
            "majors":["Computer Engineering"]
        }
    ],
    "onlineCourses":[
        {
            "title":"Data Analyst Nanoprogram";
            "school":"Udacity";
            "dates":"Nov 2016 to Present";
            "url":"www.udacity.com";
        },
        {
            "title":"Front End Development Nanoprogam";
            "school":"Udacity";
            "dates":"May 2016 to Present";
            "url":"www.udacity.com";
        }
    ]
}