import React from "react";
import "../App.css";
import CAN from '../canada.png';
import USA from '../usa.png';


class Home extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="page">
        <div id="babyShower" className="home section">
          <div>
            <div className="introText">
              Kim & Jajuan<br></br>
              Are Having a Baby
            </div>
          </div>
          <div className="introButtons">
            <a href="#babyRegistry">
              <button>View Registry</button>
            </a>
            <a href="#babyShowerDetails">
              <button>Baby Shower Details</button>
            </a>
          </div>
        </div>
        <div id="introduction" className="section">
          <div className="introStory">
            <div>
              <p style={{ fontSize: "1.5rem" }}>Welcome</p>
              <p>
                Welcome to our baby shower website, we can’t wait to celebrate our
                special day with you. We’ve created this website as a convenient
                and interactive way to share all of the important details with you
                in the lead up to our shower. You can also read more about our
                love story, and check out our registry information too. So have
                fun, take a look around and don’t forget to RSVP! Finally – thank
                you for your on-going love and support. We are so excited to share
                this day with you and look forward to celebrating with all of our
                favourite people!
              </p>
            </div>
          </div>
          <div className="introPic">
          </div>
        </div>
        <div id="babyRegistry" className="section" >
            <div className="registryInfo">
              <div className="title">
                Select a registry Below
              </div>
              <div>
                To avoid additional shipping and handling fees for our US and Canadian family and friends. Gifts will be mailed to both addresses associated with each registry.
              </div>
              <div>
                Please note that we are thankful for your love and support on our special day. To celebrate with a gift, we are registered at amazon!
                <br></br>
                <br></br>
                 <strong>
                  Select a flag where you reside to view our registry.
                </strong>
              </div>
            </div>
            <div className="flagBox">
              <div className="flag">
                <a href="https://www.amazon.com/baby-reg/jajuan-burton-kim-thomas-april-2020-westpark/V1JH3M550468">
                  <img src={USA} alt="USA Flag"></img>
                  <h1>America</h1>
                </a>
              </div>
              <div className="flag">
                <a href="https://www.amazon.ca/baby-reg/kim-thomas-jajuan-burton-april-2020-scarborough/25K4XXPCAWSX6">
                  <img src={CAN} alt="Canada Flag"></img>
                  <h1>Canada</h1>
                </a>
              </div>
            </div>
        </div>
        <div id="babyShowerDetails" className="section">
          <div>
            <div className="title">
              Baby Shower Location
            </div>
            <div className="babyShowerLocation">
              <div className="title">Florida</div>
              <div className="registryText">
                <strong>Date:</strong> February 16, 2020<br></br>
                <strong>Time:</strong> 4:30 pm Sharp<br></br>
                <strong>Theme:</strong> Garden Tea Party<br></br>
                <strong>RSVP No Later Than:</strong> February 1, 2020<br></br>
                <strong>Dress Code:</strong> ALL WHITE SEE FAQ SECTION<br></br>
                <strong>Location:</strong><a href="https://goo.gl/maps/GaD934j7B7tgEF8E9"> 2930 Hollywood Blvd, Hollywood FL, 33020</a><br></br>
              </div>
            </div>
            <div className="babyShowerLocation">
              <div className="title">Toronto</div>
              <div className="registryText">
                <strong>Date:</strong> March 14, 2020<br></br>
                <strong>Time:</strong> 4:00 PM Sharp<br></br>
                <strong>Theme:</strong> The Golden Child<br></br>
                <strong>RSVP No Later Than:</strong> February 29, 2020<br></br>
                <strong>Dress Code:</strong> White and Yellow Affair<br></br>
                <strong>Location:</strong> TBA<br></br>
              </div>
            </div>
          </div>
          <div className="babyShowerPic">

          </div>
        </div>
        <div id="faq" className="faqSection">
          <div className="faqPic"></div>
          <div className="title">
            Frequently Asked Questions
          </div>
          <div className="qaSection">
            <div className="qaBox">
              <p className="faqTitle">Baby Shower?</p>
              <br></br>
              Q: What’s the sex of the baby?<br></br>
              A:  	The reveal will be on the day of birth. Sorry!<br></br>
              Q: Do we have a name for the baby?<br></br>
              A: For now it is KJ (Kim & Jajuan), but feel free to add names to the suggestion box at the shower. Please only provide names that begin with the letter “K” or “J”.<br></br>
              Q: What is the expected due date?<br></br>
              A: April 2020<br></br>
              Q: Is this a Co-Ed shower?<br></br>
              A: Yes, both showers are Co-Ed.<br></br>
              Q: When should I RSVP?<br></br>
              A:  	Florida: No later than February 1, 2020
     	        Toronto:  No later than February 29, 2020<br></br>
              Q:  Where is the event located?<br></br>
              A:  	Florida/ Toronto: Please refer to Baby Shower Section.<br></br>
              Q: Will there be Alcohol?<br></br>
              A:  	Florida: Yes, there will be a themed punch.
             	Toronto: A champagne toast only.<br></br>
              Q: Will food be served?<br></br>
             	A: Yes, both events will have appetizers and dinner served.<br></br>
              Q: Can I bring my child(ren)?<br></br>
              A:  	Yes, both events welcome children. Children will participate only in child activities.<br></br>
            </div>
            <div className="qaBox">
              <p className="faqTitle">Dress code?</p>
              <br></br>
              A:  	 Yes! However, there is a special request for the Florida baby shower please see below.
              Toronto: Yellow and White.<br></br>

              Florida:  Wear ALL WHITE to the shower.<br></br>
              Women:<br></br>
              Attire:<br></br>
              Tea parties are a fun time to dress up, so embrace the chance to wear your Sunday best.  This is an all white affair.<br></br>
              Tea-length dresses typically fall midway between the knee and ankle, but just above or below the knee is also an acceptable look. Avoid very short dresses, as a tea party is not the most appropriate occasion for a miniskirt.
              A sundress is fine<br></br>

              Wear a fun hat if you want to (Optional):
              Ladies traditionally wear hats to tea parties. Hats can range from elaborate wide-brimmed sun hats to simple cloches, or you can even opt to wear a pretty fascinator or hair flower.<br></br>

              Men:<br></br>
              Attire:<br></br>
              A pair of khakis or white jeans with a white collared or polo shirt is appropriate. A blazer is optional.<br></br>

              Wear a fun hat if you want to (Optional).
              Gentlemen both traditionally wear hats to tea parties. Coordinate your hat with your outfit. A fedora looks sharp with a masculine look.<br></br>
            </div>
            <div className="qaBox">
              <p className="faqTitle">Registry?</p>
                <br></br>
              Q: Why should I use the registry?<br></br>
              A:  	A baby registry is a list of items at a specific store that the new parents would like to receive as gifts. This helps ensure that the couple receives gifts that go with their nursery decor and that they DO not receive duplicate items.<br></br>

              Q: Why did Kim and Jajuan choose Amazon?<br></br>
              A:  	You have the easy part — simply head to the designated baby registry, and pick what you'd like to gift KJ. If they've opted into group gifting, you can go in on a gift with other friends or family members.<br></br>
              Q: Why are there two different registries?<br></br>
              A:
              If you don't have Amazon Prime, you'll have to spend at least $25 USD ($35 CAD) to be eligible for free shipping. If you have Prime, you'll get the regular, two-day free shipping rates you've come to know and love.<br></br>
              Q: Can I bring a gift outside of the registry?<br></br>
              A:  	 Yes, but we encourage our guests to order from the registry. If you would be so kind, please bring a baby book that you have signed instead of a baby shower card when giving a gift card. We accept clothes that are gender-neutral colours (i.e. grey, yellow, white, and green).<br></br>
              Q: Do I need to give the couple gift receipts?<br></br>
              A: Yes, in the event we receive duplicate items we can exchange it with you in mind.
            </div>
          </div>
          <div style={{textAlign:'center'}}>
            Swipe
            <span role="img">👉🏿</span>
          </div>
        </div>

        <div id="ourStory" className="ourStorySection">
          <div className="storyPic"></div>
          <div className="title">Our Story</div>
          <div className="storySection">
            <div className="storyText">
              On what was supposed to be just a fun, celebratory engagement trip for their mutual friend in Bali, Indonesia, their love story began.
              <br></br>
              <br></br>
              Initially meeting in China on a layover to Bali, who would’ve known that their introduction would’ve been the beginning of their forever journey. During the trip Kim and Jajuan spent most of their nights and days together talking and exchanging stories about life experiences, and goals that they planned to achieve. By the end of the trip they became good friends, a friendship that they wanted to continue to explore.
            </div>
            <div className="storyText">
              After the trip Kim and Jajuan remained in contact. Several weeks after, Jajuan decided to travel to Toronto, stepping out of their comfort zones, thanks to their connection and faith. After that first visit they knew it was only a matter of time. Frequent flyer miles started to accumulate because of the frequent visits between Florida and Toronto. During a visit to Florida there was a, “Would you be my girlfriend?” sign awaiting Kim as she walked outside to arrivals, and the rest was history.
              <br></br>
              <br></br>
              Being far from each other is definitely a challenge, but it’s overcoming such obstacles that make their love story special, memorable and treasured. If the person is right for you, the sacrifice will be well worth it.
            </div>
            <div className="storyText">
              Today, the couple is getting ready to welcome their first child KJ. Carrying a baby is the most rewarding experience a woman can enjoy, and they are excited to share this part of their journey with you.

              “For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.” – Jeremiah 29:11
            </div>
          </div>
          <div style={{textAlign:'center'}}>
            Swipe
            <span role="img">👉🏿</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
