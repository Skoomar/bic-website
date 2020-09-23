import React from 'react';
import './App.css';
import NavButton from "./components/NavButton";
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";

import headerLogo from "./images/header-logo.png"
import logo from "./images/logo.png"
import timetableImg from "./images/prayer-timetable.jpeg"
import facebookIcon from "./images/fb_icon.png"

function App() {

    return (
        <div className="App">
            {/*<header className="App-header">*/}

            {/*</header>*/}

            <div className="header">
                <img style={{width: "12%", height: "auto"}} alt="Header Logo" src={headerLogo}/>

                {/* TODO: Add social media links for FB, Twitter    */}
                {/*<div id="#social-media">*/}

                {/*    <a href="https://www.facebook.com/MakkiMussala/">*/}
                {/*        <img src={facebookIcon} style={{width: "50px", height: "50px"}} alt="Facebook Logo"/>*/}
                {/*        Bilborough Islamic Centre*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>

            {/*<NavBar/>*/}
            {/*<div id="nav-bar">*/}
            {/*    <button onClick="openTab(event, ">Hello</button>*/}
            {/*    <NavButton text="Home" />*/}
            {/*    <NavButton text="About Us" />*/}
            {/*</div>*/}

            <TabBar>
                <div label="Home">
                    <div className="translucent-background">
                        <div id="about-us">
                            <p>
                                Assalam-wa-alaikum wa rahimtullah wa barakaatu hu<br/><br/>

                                We are registered charity with Charity Commission since 2018.<br/><br/>

                                Trustees have been very actively looking to buy a place for masjid
                                since
                                last 2-3 years prior to 2018 but no suitable options were available
                                until Bilborough Baptist Church put on sale.<br/><br/>

                                We faced very tough competition from other interested parties keen
                                to
                                buy the place, but Allah SWT favoured us due to which we are
                                privileged
                                today.<br/>

                                Funding arrangement of substantial amount to pay towards building
                                and
                                other expenses were the biggest challenges but with help of Allah
                                SWT
                                and generosity of few individual made it possible to buy the church.<br/><br/>

                                We completed the purchase on 14th Dec 2018 when our journey of
                                silent
                                struggle has arrived to its first stop with the help of Allah SWT
                                and
                                also the monetary contributions from brothers/sisters who sacrificed
                                their worldly needs and made contribution into this great
                                cause.<br/>

                                Sadly; humanity has forgotten the purpose of their creation today,
                                their
                                master and the path of prophets/messengers who were deputed to
                                remind
                                how to spend life in this dunyia and prepare for life of unforeseen
                                era
                                we are heading to. Let’s make a pledge today to comeback to
                                forgotten
                                path and follow the guidance of Quran, Sunnah and path of Sehabah
                                Rizwan
                                ullalh ha ajmaeen.<br/><br/>


                                Idea of inception of this masjid is to use the platform to lean and
                                connect to Allah, correct ourselves and invite others which is a
                                prime
                                duty assigned to us as being follower of last and final messenger.
                                Our
                                success of this duniya and akhira is left in Deen.<br/>

                                On one side we have number of challenges but on the other hand we
                                have
                                big opportunity to work for our present and future generations.<br/>

                                In order to achieve these targets; we need a platform and also a
                                continuous fiqar for Deen according to the path of Quran, Sunnah of
                                Prophet PUBH and golden life of Sehabah Rizwan ullah ha
                                ajmaeen.<br/><br/>

                                To proceed on these lines; we have following achievement and plans
                                which
                                we would like to share with you and request your ownership,
                                patronage
                                and support during all the stages:<br/>

                                <ul>
                                    <li>Establish five-time congregation prayer, weekly Juma and Eid
                                        prayers
                                        already started under the platform of Makki Masjid
                                        Alhamdulillah.
                                    </li>
                                    <li>Afternoon/Evening Madrasa for Tajweed/Hifz started since
                                        middle of
                                        this 2020.
                                    </li>
                                    <li>Infrastructure redevelopment based on current and future
                                        needs of
                                        community.
                                    </li>
                                    <li>Dawah Centre – to host activities to spread word of Allah
                                        SWT using
                                        all possible traditional and new state-of-art methods
                                        including internet
                                        and social media sources under the guidance of Quran, Sunnah
                                        as directed
                                        by respected Ulemahs/scholars/elders.
                                    </li>
                                    <li>Community gathering program and delivering sessions on
                                        socio-economic
                                        topics.
                                    </li>
                                    <li>Walk-in centre for nonbelievers to provide them a glimpse of
                                        Islam
                                        basics (long-term).
                                    </li>
                                    <li>Janaza/Gusal/dead body storage and Janaza prayer facilities
                                        (long
                                        term)
                                    </li>
                                </ul>

                                Jazak Allah khairun<br/><br/>


                                From the Holy Quran:
                                <ol>
                                    <li>
                                        ادع إلى سبيل ربك بالحكمة والموعظة الحسنة
                                        Invite (people) to the way of your lord with wisdom and good
                                        counsel.
                                        (Verse: 16:125)
                                    </li>
                                    <li>
                                    ولتكن منكم أمة يدعون إلى الخير ويأمرون بالمعروف وينهون عن المنكر
                                    And there has to be a group of people from among you who call
                                    towards
                                        good and prevent from evil. (Verse: 3:104)</li>
                                   <li>
                                    ومن أحسن قولا ممن دعا إلى الله وعمل صالحا وقال إنني من المسلمين
                                    And who is better in utterance than the one who called people
                                    towards
                                    Allah, and acts righteously and says, “I am one of those who
                                    submit
                                       themselves (to Allah Ta’ala). (Verse: 41:33)</li>
                                </ol>
                            </p>
                        </div>
                        <div className="centre">
                            <img style={{width: "40%", height: "auto"}} alt="Logo" src={logo}/>
                        </div>
                    </div>
                </div>
                <div label="Prayer Timetable" className="centre">
                    <div className="centre">
                        <img src={timetableImg} alt="Prayer Timetable"/>
                    </div>
                </div>
                <div label="Donate" className="translucent-background">
                    <p>
                        <strong>Please donate generously</strong><br/><br/>
                        <u>Bank details:</u><br/>
                        Bilborough Islamic Centre Trust<br/>
                        Sort code: 51-70-06<br/>
                        Account No.: 80859356
                    </p>
                </div>
                <div label="Contact Us" className="translucent-background">
                    <p>Email: info@bilboroughislamiccentre.org.uk</p>
                    <p>Address: Wigman Road, Bilborough, Nottingham, NG8 4PB</p>
                </div>
            </TabBar>

        </div>
    );
}

export default App;
