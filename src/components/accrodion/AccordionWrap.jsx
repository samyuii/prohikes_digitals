import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from "../accrodion";

const AccordionWrap = () => {
    return (
        <Accordion classOption="accordion-style2 no-bg">
            <AccordionItem id="one">
                <AccordionTitle id="one">
                    <span className="question-tag">Q:</span>What is your process
                    when you start working with a new client?
                </AccordionTitle>
                <AccordionContent id="one">
                    When a job comes in, we assign a dedicated project manager
                    to look after it. They then work alongside the customer to
                    ensure that all needs are met and expectations are exceeded.
                    It also means the client has one point of contact that
                    enables us to provide our market-leading and renowned
                    personal service, time-after-time.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="two">
                <AccordionTitle id="two">
                    <span className="question-tag">Q:</span>How do you increase
                    sales?
                </AccordionTitle>
                <AccordionContent id="two">
                    There are many ways to increase sales, even when working
                    with a limited budget. The easiest way is to look at your
                    current customers: can you offer an upsell on your current
                    products or services? Maybe run a promotion or offer for a
                    limited time period? The best way to increase sales is to
                    grow the number of leads or customers in your sales funnel.
                    By effectively marketing your business you can increase your
                    number of qualified leads and potential sales.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="three">
                <AccordionTitle id="three">
                    <span className="question-tag">Q:</span>How do you generate
                    leads for sale?
                </AccordionTitle>
                <AccordionContent id="three">
                    How you go about generating leads for sales will depend on
                    your business and target market. Define your audience,
                    research the channels that will allow you to reach them
                    effectively, then form a clear strategy with objectives and
                    goals to follow as you market to them.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="four">
                <AccordionTitle id="four">
                    <span className="question-tag">Q:</span>How do you generate
                    High Quality leads?
                </AccordionTitle>
                <AccordionContent id="four">
                    This is where having a good lead generation, marketing and
                    sales strategy comes into play. If you can identify the
                    traits that make a lead high-quality to your business, then
                    you can focus your marketing on not only attracting these
                    quality leads, but qualifying their quality and what stage
                    of the buying cycle they are currently at.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="five">
                <AccordionTitle id="five">
                    <span className="question-tag">Q:</span>What is the pupose
                    of marketing strategy?
                </AccordionTitle>
                <AccordionContent id="five">
                    Whatever the size of your business it is important that you
                    have a marketing strategy in place, to make sure that
                    whatever marketing activity you do, it is aligned with your
                    goals and objectives. Having a strategy means you have clear
                    steps to take to meet your objectives whether they are short
                    term, mid-term or long term.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="six">
                <AccordionTitle id="six">
                    <span className="question-tag">Q:</span>How do you create a
                    content strategy?
                </AccordionTitle>
                <AccordionContent id="six">
                    Firstly with your help we establish and define your goals,
                    target audience and content channels before setting clear
                    and achievable KPIs (so you know what success looks like).
                    You then assess your current position by reviewing all of
                    your content ‘assets’ such as blogs, videos and images to
                    decide whether you can repurpose or whether you need to
                    create new content. This will enable you to create a content
                    gap analysis and decide which content types will work best.
                    You can then create a content calendar which will plan out
                    your campaign.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="seven">
                <AccordionTitle id="seven">
                    <span className="question-tag">Q:</span>How will you
                    optimize my website?
                </AccordionTitle>
                <AccordionContent id="seven">
                    We are able to work with a wide range of websites, from ones
                    built with static coding to bespoke eCommerce solutions. If
                    your website has a content management system such as
                    WordPress this will make things easier. If not then we can
                    still work with you! Depending on the complexities of your
                    website we will either carry out technical work in-house, or
                    suggest liaising with your web developer to implement the
                    changes we recommend.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="eight">
                <AccordionTitle id="eight">
                    <span className="question-tag">Q:</span>Can you guarantee my
                    website will appear on page one of google?
                </AccordionTitle>
                <AccordionContent id="eight">
                    Unfortunately no one can guarantee number one or even first
                    page rankings on Google, and you should be wary of anyone
                    who promises otherwise. With constant changes to how it
                    processes and evaluates its results, aiming for a page one
                    ranking on Google can often be a moving target. What you
                    should be looking for is a measurable increase in targeted
                    traffic that drives people actively looking for your
                    products or services to your website. This is what will
                    convert into leads and potential sales, and this is what we
                    focus on for our clients.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="nine">
                <AccordionTitle id="nine">
                    <span className="question-tag">Q:</span>What is the
                    difference between SEO, PPC and SMM?
                </AccordionTitle>
                <AccordionContent id="nine">
                    Search engine optimisation (SEO) focuses on promoting a
                    website within the organic (free) search results, with the
                    aim of improving its visibility for relevant keywords and
                    terms their target audience use. Pay-per-click (PPC)
                    marketing serves ads to those same users based on keywords,
                    demographics or other targeting – but works as an
                    auction-based system where the advertiser is charged per
                    click on their ad. PPC advertising is available on a variety
                    of online platforms, including search engines such as Google
                    and Bing, and social networks like Facebook and Linkedin.
                    SMM (social media marketing) is the process of increasing
                    brand awareness and engagement across different social
                    platforms. You build your business persona and market your
                    services or products on each platform.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="ten">
                <AccordionTitle id="ten">
                    <span className="question-tag">Q:</span>What strategies
                    would you use to generate leads?
                </AccordionTitle>
                <AccordionContent id="ten">
                    We specialise in using digital marketing techniques to
                    generate leads, both for ourselves and our clients. Using a
                    range of methods, from driving organic traffic from Google
                    to creating engaging content on social media, we are able to
                    consistently drive targeted traffic that results in
                    high-quality leads.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionWrap;
