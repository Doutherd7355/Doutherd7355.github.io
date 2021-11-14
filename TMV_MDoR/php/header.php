<div class="formOverlay hide col-12" id="formOverlay"></div>
        <header class="header" id="header-region" role="banner">
            <div class="row">
                <div class="col-sm-12" id="header-logo-wrapper">
                    <a href="#">
                        <img alt="Missouri Department of Revenue" class="img-responsive" id="logo"
                            src="./resources/revenue-logo.png" style="display:inline;">
                    </a>
                    <div class="landing-search-box-container">
                        <label for="searchTxt" class="hidden"></label>
                        <input class="landing-search-box" id="searchTxt" maxlength="512" name="searchTxt"
                            placeholder="How may we help you?" />
                        <button id="searchBtn" class="searchBtn" name="searchBtn" type="button" alt="search"><i
                                class="fas fa-search"></i></button>
                    </div>
                    <button class="ux-formBtn" id="uxformBtn" onclick="">Share Your Experience!</button>
                    <!-- UX FEEDBACK FORM -->
                    <div class="ux-form-area hide col-8" id="uxFormArea">
                        <div class="formCancelBtn" id="formCancelBtn"><i class="fas fa-times-circle fa-2x"></i></div>
                        <h2>Tell us about your expeirence!</h2>
                        <h3>Your opinions matter and help us to improve the website</h3>
                        <form class="ux-form" id="ux-form" autocomplete="on" name="ux-feedback-form">
                            <div aria-required="true" class="question_1">
                                <legend class="legend">Is this your first visit to our website? <span
                                        class="required">*</span>
                                </legend>
                                <small>Error Message</small>
                                <input type="radio" name="q1_answer" id="q1_yes" value="Yes">
                                <label for="q1_yes">Yes</label><br>
                                <input type="radio" name="q1_answer" id="q1_no" value="No">
                                <label for="q1_no">No</label><br>
                            </div>
                            <div aria-required="true" class="question_2">
                                <legend>What is your primary reason for visiting this website? <span
                                        class="required">*</span> </legend>
                                <small>Error Message</small>
                                <input type="text" name="q2_answer" id="q2" placeholder="Type your answer here"
                                    class="col-12">

                                <span class="charCount">000/000</span>
                            </div>
                            <div aria-required="true" class="question_3">
                                <legend>Were you able to find what you needed? <span class="required">*</span> </legend>
                                <small>Error Message</small>
                                <input type="radio" name="q3_answer" id="q3_yes" value="Yes">
                                <label for="q3_yes">Yes</label><br>
                                <input type="radio" name="q3_answer" id="q3_no" value="No">
                                <label for="q3_no">No</label><br>
                            </div>

                            <div aria-required="true" class="question_4">
                                <legend>If you didn't find what you were looking for, please tell us what you were
                                    looking for: <span class="required">*</span> </legend>
                                <small>Error Message</small>
                                <input type="text" name="q4" id="q4" placeholder="Type your answer here" class="col-12">
                                <span class="charCount" id="charCount">000/000</span>
                            </div>

                            <div class="form-likert question_5">
                                <legend aria-required="true">Finding information on this site was...<span
                                        class="required">*</span></legend>
                                <small>Error Message</small>

                                <input type="radio" name="q5_answer" value="Very Difficult" id="q5_answer1">
                                <label for="q5_answer1" class="q5_a1_image"><img class="likert-img"
                                        src="./resources/VeryDifficult.jpg" alt="Angry Face Icon">Very Difficult</label>

                                <input type="radio" name="q5_answer" value="Difficult" id="q5_answer2">
                                <label for="q5_answer2" class="q5_a1_image"><img src="./resources/Difficult.jpg"
                                        alt="Sad Face Icon" class="likert-img">Difficult</label>

                                <input type="radio" name="q5_answer" value="Average" id="q5_answer3">
                                <label for="q5_answer3" class="q5_a1_image"><img src="./resources/Average.jpg"
                                        alt="Blank Face Icon" class="likert-img">Average</label>

                                <input type="radio" name="q5_answer" value="Easy" id="q5_answer4">
                                <label for="q5_answer4" class="q5_a1_image"><img src="./resources/Easy.jpg"
                                        alt="Smiley Face Icon" class="likert-img">Easy</label>

                                <input type="radio" name="q5_answer" value="Very Easy" id="q5_answer5">
                                <label for="q5_answer5" class="q5_a1_image"><img src="./resources/VeryHappy.jpg"
                                        alt="Starry Face Icon" class="likert-img">Very Easy</label>

                            </div>
                            <div class="form-likert question_6">
                                <legend aria-required="true">Using this site was... <span class="required">*</span>
                                </legend>
                                <small>Error Message</small>
                                <input type="radio" name="q6_answer" value="Very Difficult" id="q6_answer1">
                                <label for="q6_answer1" class="q5_a1_image"><img class="likert-img"
                                        src="./resources/VeryDifficult.jpg" alt="Angry Face Icon">Very Difficult</label>

                                <input type="radio" name="q6_answer" value="Difficult" id="q6_answer2">
                                <label for="q6_answer2" class="q6_a1_image"><img src="./resources/Difficult.jpg"
                                        alt="Sad Face Icon" class="likert-img">Difficult</label>

                                <input type="radio" name="q6_answer" value="Average" id="q6_answer3">
                                <label for="q6_answer3" class="q6_a1_image"><img src="./resources/Average.jpg"
                                        alt="Blank Face Icon" class="likert-img">Average</label>

                                <input type="radio" name="q6_answer" value="Easy" id="q6_answer4">
                                <label for="q6_answer4" class="q6_a1_image"><img src="./resources/Easy.jpg"
                                        alt="Smiley Face Icon" class="likert-img">Easy</label>

                                <input type="radio" name="q6_answer" value="Very Easy" id="q6_answer5">
                                <label for="q6_answer5" class="q6_a1_image"><img src="./resources/VeryHappy.jpg"
                                        alt="Starry Face Icon" class="likert-img">Very Easy</label>

                            </div>
                            <div aria-required="false" class="question_7">
                                <legend>Please provide any additional comments or suggestions [optional]: </legend>
                                <small>Error Message</small>
                                <input type="text" name="q7" id="q7" placeholder="Type your answer here" class="col-12">
                                <span class="charCount">000/000</span>
                            </div>
                            <button type="submit" id="ux-form-submitBtn" class="ux-form-submitBtn">Submit</button>
                        </form>
                    </div>
                    <!-- END UX FEEDBACK FORM -->
                    <div class="text-right" id="translate_container_large">
                        <div id="google_translate_element"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg" id="navigation" role="navigation">
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                          <div class="navbar-nav main-nav">
                            <a class="nav-item nav-link active" href="../index.html">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link " href="../pages/taxation.html">Taxation</a>
                            <a class="nav-item nav-link" href="../pages/drivers-license.html">Drivers License</a>
                            <a class="nav-item nav-link" href="../pages/motor-vehicle.html">Motor Vehicle</a>
                            <a class="nav-item nav-link" href="../pages/new-missouri.html">New to Missouri</a>
                          
                          </div>
                        </div>
                      </nav>
                </div>
            </div>
        </header>