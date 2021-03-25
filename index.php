<?php
    if($_POST["submit"]) {
        $recipient="iprutkovsky@gmail.com";
        $subject="subject";
        $sender=$_POST["fullname"];
        $senderEmail=$_POST["email-input"];
        $message=$_POST["message"];
    
        $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";
    
        mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");    
?>
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio" />
    <title>Portfolio</title>

    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
</head>

<body>
    <div class="scroll-up-btn">
        <p id="progress-bar-output"></p>
        <i class="fas fa-angle-up"></i>
    </div>
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#"><b><span class="typing"></span></b></a></div>
            <ul class="menu">
                <li><a href="javascript:void(0)" onclick="location.href='#summary'" class="menu-btn">Summary</a></li>
                <li><a href="javascript:void(0)" onclick="location.href='#experience'" class="menu-btn">Experience</a>
                </li>
                <li><a href="javascript:void(0)" onclick="location.href='#education'" class="menu-btn">Education</a>
                </li>
                <li><a href="javascript:void(0)" onclick="location.href='#skills'" class="menu-btn">Skills</a></li>
                <li><a href="javascript:void(0)" onclick="location.href='#projects'" class="menu-btn">Projects</a></li>
                <li><a href="javascript:void(0)" onclick="location.href='#contact'" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- summary section start -->
    <section class="summary" id="summary">
        <div class="max-width">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInRight">
                    <h2 class="container-heading animate-box">PROFESSIONAL SUMMARY</h2>
                </div>
            </div>
            <div class="summary-description">
                <p>I am a Software Engineer with years of experience in creating,
                    developing, and maintaining dynamic front-end applications with HTML,
                    CSS, JavaScript, Angular, and Bootstrap. Implemented server-side technologies,
                    such as Node.JS, Spring ORM, Hibernate, and Java. Introduced and expanded new
                    network technologies. Very motivated and creative personality with
                    solid working ethics.</p>
                <a href="javascript:void(0)"
                    onclick="location.href='https://iprutkovsky.github.io/portfolio/Prutkovsky_Ilia.docx'">Download
                    CV</a>
            </div>
        </div>
    </section>

    <!-- experience section start -->
    <section class="experience" id="experience">
        <div class="max-width">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 class="container-heading animate-box">PROFESSIONAL EXPERIENCE</h2>
                </div>
            </div>
            <div class="timeline-centered">

                <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div class="timeline-entry-inner">
                        <div class="timeline-icon color">
                            <p>➤</p>
                        </div>
                        <div class="timeline-label">
                            <h3>NYC Neighborhood Dentistry</h3>
                            <h2>Front-end Developer</h2>
                            <p style="min-width: 67%;"></p>
                            <span>May 2020 - Current</span>
                            <ul>
                                <li>• Developed and maintained a dynamic interactive website using
                                    HTML, CSS, JavaScript, and Bootstrap.</li>
                                <li>• Improved front-end template using CSS and Bootstrap.</li>
                                <li>• Utilized WordPress to add administrator panel.</li>
                                <li>• Implemented cloud services by AWS.</li>
                            </ul>
                        </div>
                    </div>
                </article>


                <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div class="timeline-entry-inner">

                        <div class="timeline-icon color">
                            <p>➤</p>
                        </div>

                        <div class="timeline-label">
                            <h3>Verizon</h3>
                            <h2>Full-stack Java Developer</h2>
                            <p style="min-width: 56.6%;"></p>
                            <span>December 2019 - April 2020</span>
                            <br>
                            <h2>JITR Dashboard &#40;Just-In-Time Registration&#41;</h2>
                            <ul>
                                <li>• Used ES6 JavaScript to optimize the project.</li>
                                <li>• Created dashboard with the navigation bar to retrieve data from
                                    DB based on the lifecycle.</li>
                                <li>• Used Git to share my code with team members.</li>
                                <li>• Worked closely with back-end teams to analyze needs and
                                    requirements.</li>
                                <li>• Collaborated in team environments following Agile practice.</li>
                                <li>• Created and edited templates using Angular JS, Angular 4/6.</li>
                                <li>• Worked on server-side using Node.js to extend available data
                                    delivery methods, and processing multiple files.</li>
                            </ul>

                            <h2>One Billing Dashboard</h2>

                            <ul>
                                <li>• Crafted UI items &#40;icons, fonts, logo&#41;.</li>
                                <li>• Creating templates, widgets, and components for the company
                                    website using Adobe Photoshop, MS Paint as the content
                                    management system.</li>
                                <li>• Worked closely with the design team creating reusable interface
                                    components.</li>
                                <li>• Checked and fixed code for leaks on Typescript.</li>
                                <li>• Refactoring old legacy code to utilize modern features.</li>
                                <li>• Used design patterns and added functionality to existing
                                    applications using Java.</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div class="timeline-entry-inner">

                        <div class="timeline-icon color">
                            <p>➤</p>
                        </div>

                        <div class="timeline-label">
                            <h3>Revature</h3>
                            <h2>Full-stack Java Developer</h2>
                            <p style="min-width: 56.8%;"></p>
                            <span>July 2019 - November 2019</span>
                            <ul>
                                <li>• Styled HTML to structure markup pages and CSS design.</li>
                                <li>• Familiar with the Spring ORM and hibernate tools involving
                                    Connection pooling, Mappings, Transaction Management.</li>
                                <li>• Leveraged Bootstrap framework and grid system to build a
                                    responsive website.</li>
                                <li>• Incorporated JavaScript to enhance web application
                                    functionality.</li>
                                <li>• Created custom JQuery validation to enhance HTML.</li>
                                <li>• Employed Angular routing service to switch views within the
                                    application.</li>
                                <li>• Wrote controllers to execute Angular behavior such as two-way
                                    binding.</li>
                                <li>• Implemented AJAX action to get and post JSON data from web
                                    services.</li>
                                <li>• Crafted custom Angular directives to expand the capabilities of
                                    HTML attributes.</li>
                                <li>• Utilized unit tests with JUnit and Spring AOP.</li>
                                <li>• Applied DevOps pipelines using Jenkins and Git on AWS.</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div class="timeline-entry-inner">

                        <div class="timeline-icon color">
                            <p>➤</p>
                        </div>

                        <div class="timeline-label">
                            <h3>DSM NY Corp</h3>
                            <h2>Network Engineer / Administrator</h2>
                            <p style="min-width: 51.6%;"></p>
                            <span>October 2014 - June 2019</span>
                            <ul>
                                <li>• Implemented cloud services by AWS, Google Cloud.</li>
                                <li>• Registered domain name, uploaded to hosting and maintain by
                                    FileZilla.</li>
                                <li>• Diagnosed, resolved, and managed network policy, security, and
                                    end-user issues.</li>
                                <li>• Improvement of network fault tolerance.</li>
                                <li>• Automation processes for Windows using PowerShell
                                    &#40;command-prompt&#41;.</li>
                                <li>• Installed and maintained Microsoft Terminal Server and worked
                                    with end-users by RDP & Linux server with a firewall.</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div class="timeline-entry-inner">

                        <div class="timeline-icon color">
                            <p>➤</p>
                        </div>

                        <div class="timeline-label">
                            <h3>TD Veresk</h3>
                            <h2>Network Engineer / Administrator</h2>
                            <p style="min-width: 54%;"></p>
                            <span>May 2008 - June 2014</span>
                            <ul>
                                <li>• Installed and maintained Mail, SQL, and another type of servers.
                                </li>
                                <li>• Maintained & upgraded 100+ desktops &#40;Dell, HP,
                                    customized&#41; as needed.</li>
                                <li>• Monitored the automated backup of users’ data and servers.</li>
                                <li>• Imaged and deployed desktops, laptops, and servers by Acronis
                                    True Image.</li>
                                <li>• Writing scripts of automation for Linux on Bash and Perl.</li>
                                <li>• Set up and maintained VPN for connecting remote networks.</li>
                            </ul>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>

    <!-- education section start -->
    <section class="education" id="education">
        <div class="max-width">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInRight">
                    <h2 class="container-heading animate-box">EDUCATION</h2>
                </div>
            </div>
            <div class="education-description">
                <div class="education-block">
                    <h3><b>The Cooper Union Albert Nerken School of Engineering</b></h3>
                    <span>2018 - 2019</span>
                    <h4>Certificate courses in C#, Java, Linux &#40;UNIX&#41; Administration, and Perl Scripting
                    </h4>
                </div>

                <div class="education-block">
                    <h3><b>Saint-Petersburg Electro-Technical University “LETI”</b></h3>
                    <span> </span>
                    <h4>Bachelor’s Degree by Information Technology</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- skills section start -->
    <section class="skills" id="skills">
        <div class="max-width">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 class="container-heading animate-box">Skills</h2>
                </div>
            </div>
            <div class="row wrapper">
                <div class="row skill-field">

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="skills-wrap">
                            <h3>Java, JDBC, Servlets, Spring</h3>
                        </div>
                    </div>

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="skills-wrap">
                            <h3>Database: SQL, MYSQL, OracleSQL</h3>
                        </div>
                    </div>

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="skills-wrap">
                            <h3>SPA: Angular 8 / 9 / 10, TypeScript, Angular JS</h3>
                        </div>
                    </div>

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="skills-wrap">
                            <h3>HTML5, CSS3, Javascript, RxJS, JQuery, Node.js</h3>
                        </div>
                    </div>

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="skills-wrap">
                            <h3>Build/Deploy: Jenkins</h3>
                        </div>
                    </div>

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="skills-wrap">
                            <h3>Versioning: GitHub, GitLab</h3>
                        </div>
                    </div>

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="skills-wrap">
                            <h3>Cloud: AWS, S3, GC</h3>
                        </div>
                    </div>

                    <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="skills-wrap">
                            <h3>CMS: Wordpress, Sales Force Commerce Cloud</h3>
                        </div>
                    </div>

                </div>
                <div class="container"></div>
            </div>
            <!-- <a href="javascript:void(0)" onclick="toggle(); return false;">Read more</a> -->
        </div>
    </section>

    <!-- projects section start -->
    <section class="projects" id="projects">
        <div class="max-width">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInRight">
                    <h2 class="container-heading animate-box">Projects</h2>
                </div>
            </div>
            <div class="carousel owl-carousel">
                <div class="card">
                    <div class="box">
                        <a href="https://www.braindrain.com/en" target="blank" rel="noopener noreferrer">
                            <img src="images/brain_drain.png" alt="Card image">
                        </a>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <a href="https://nycdental-dds.com/" target="_blank" rel="noopener noreferrer">
                            <img src="images/neighborhood_dentistry.png" alt="Card image">
                        </a>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <a href="https://femininerevival.com/" target="_blank" rel="noopener noreferrer">
                            <img src="images/feminine_revival.png" alt="Card image">
                        </a>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <a href="http://volshteynlaw.com/en/" target="_blank" rel="noopener noreferrer">
                            <img src="images/volshteyn.png" alt="Card image">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- contact section start -->
    <section class="contact" id="contact">
        <div class="max-width">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 class="container-heading animate-box">Contact</h2>
                </div>
            </div>
            <div class="contact-content">
                <div class="column left">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <div class="info">
                            <div class="head">Name</div>
                            <div class="sub-title"><b>Ilia Prutkovsky</b></div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title"><b>iprutkovsky@gmail.com</b></div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message</div>
                    <form class="contact-form" action="index.php" method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" class="fullname" placeholder="Name" required>
                            </div>
                            <div class="field email">
                                <input type="text" class="email-input" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" class="subject" placeholder="Subject" required>
                        </div>
                        <div class="field textarea">
                            <textarea class="message" cols="30" rows="10" placeholder="Message..." required></textarea>
                        </div>
                        <div class="button-area">
                            <button class="send-msg" type="submit" name="send">Send</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    </section>

    <!-- footer section start -->
    <footer>
        <div class="social_media">
            <div class="row">
                <a href="https://www.facebook.com/ilia.prutkovsky" target="_blank" rel="noopener noreferrer"><img
                        src="./images/facebook_i_s.png"></a>
                <span><span class="far fa-copyright"></span> 2020 All rights reserved.</span>
                <a href="https://www.linkedin.com/in/ilia-prutkovsky-60837b41/" target="_blank"
                    rel="noopener noreferrer"><img src="./images/linkedin_i_s.png"></a>
            </div>
        </div>
    </footer>

    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/typed.min.js"></script>
    <script src="js/anime.min.js"></script>
    <script src="js/animation.effects.js"></script>
    <script src="js/animation.effects.2.js"></script>
    <script src="js/modernizr-2.6.2.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>

</body>

</html>