import React from "react";
import { Box, Typography } from "@mui/material";
import MainLogo from "./MainLogo";

// TODO: make text sizes responsive, currently looks too big on mobile
const HomeSection = () => (
    <div>
        <Typography variant="h4" component="h1">
            About Us
        </Typography>
        <br/>
        <Typography variant="subtitle1">
            Assalam-o-alaikum wa rahimtullah wa barakaatu hu
        </Typography>
        <br/>
        <Typography variant="body1">
            We are a registered charity with the Charity Commission since 2018.<br />

            Trustees had been very actively looking to buy a place for the masjid for the 2-3 years
            prior to 2018 but no suitable options were available until Bilborough Baptist Church
            was put on sale.<br /><br />

            We faced very tough competition from other interested parties keen to buy the place,
            but Allah SWT favoured us due to which we are privileged to own it now.
            Acquiring the substantial amounts required to pay towards the building and other
            expenses was the biggest challenge but with the help of Allah SWT and the generosity of
            a few individual it was possible to buy the church.<br /><br />

            We completed the purchase on the 14th Dec 2018 and our journey of silent struggle
            arrived to its first stop with the help of Allah SWT and also the monetary
            contributions from brothers/sisters who sacrificed their worldly needs and made
            contributions into this great cause. Sadly, humanity has forgotten the purpose of their
            creation today, their master and the path of the prophets/messengers who were deputed
            to remind us how to spend life in this dunyia and prepare for life in the unforeseen
            era we are heading to. Let’s make a pledge today to comeback to the forgotten path and
            follow the guidance of the Quran, Sunnah, and the path of Sehabah Rizwan ullalh ha
            ajmaeen.<br /><br />


            The concept of this masjid is to use the platform to learn and connect to Allah,
            correct ourselves and invite others which is a prime duty assigned to us, being
            followers of the last and final messenger. Our success of this Duniya and Akhira is
            left in the Deen. On one side we have a number of challenges but on the other hand we
            have a big opportunity to work for our present and future generations. In order to
            achieve these targets, we need a platform and also a continuous fiqar for Deen
            according to the path of Quran, Sunnah of Prophet PUBH and golden life of Sehabah
            Rizwan ullah ha ajmaeen.<br /><br />

            To proceed on these lines; we have the following achievement and plans which we would
            like to share with you and request your ownership, patronage, and support throughout
            each stage:

            <ul>
                <li>
                    Establish five-time congregational prayer, weekly Juma and Eid prayers already
                    started under the platform of Makki Masjid, Alhamdulillah.
                </li>
                <li>
                    Afternoon/Evening Madrasa for Tajweed/Hifz running since the middle of 2020.
                </li>
                <li>
                    Infrastructure redevelopment based on current and future needs of the community.
                </li>
                <li>
                    Dawah Centre – to host activities to spread word of Allah SWT using all
                    possible traditional and new state-of-the-art methods including internet and
                    social media sources under the guidance of Quran, Sunnah as directed by
                    respected Ulemahs/scholars/elders.
                </li>
                <li>
                    Community gathering program and delivering sessions on socio-economic topics.
                </li>
                <li>
                    Walk-in centre for nonbelievers to provide them a glimpse of the basics of Islam.
                </li>
                <li>
                    Janaza/Gusal/dead body storage and Janaza prayer facilities (long term)
                </li>
            </ul>

            Jazak Allah khairun<br /><br />
        </Typography>

        <Typography variant="subtitle1">
            From the Holy Quran:
        </Typography>

        <Typography variant="body1">
            <ol>
                <li>
                    ادع إلى سبيل ربك بالحكمة والموعظة الحسنة
                    Invite (people) to the way of your lord with wisdom and good counsel.
                    (Verse: 16:125)
                </li>
                <li>
                    ولتكن منكم أمة يدعون إلى الخير ويأمرون بالمعروف وينهون عن المنكر
                    And there has to be a group of people from among you who call towards good and
                    prevent from evil. (Verse: 3:104)
                </li>
                <li>
                    ومن أحسن قولا ممن دعا إلى الله وعمل صالحا وقال إنني من المسلمين
                    And who is better in utterance than the one who called people towards Allah,
                    and acts righteously and says, “I am one of those who submit themselves (to
                    Allah Ta’ala). (Verse: 41:33)
                </li>
            </ol>
        </Typography>

        <Box sx={{ width: '100%' }} display="flex" justifyContent="center">
            <MainLogo />
        </Box>
    </div>
);

export default HomeSection;