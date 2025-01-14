import React from 'react'

const Data = ({ Project }) => {
    const jsxObjectsArray = [
      {
        name: "neer",
        jsxElement: (
            <div className="text-black p-6  rounded-lg ">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">ABOUT</h2>
                <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                    India is home to numerous traditional crafts, and one such skill is pottery. Unfortunately, this ancient craft is now largely confined to rural regions, and it’s becoming challenging to find affordable quality pots. Project "NEER" is focused on uplifting the pottery craftsmanship of the potter community in Prayagraj. 
                    <br /><br />
                    Despite the numerous advantages of clay pots, such as purifying water naturally, many people still choose plastic alternatives. This preference is not only harming the potter community’s income but is also contributing to the growing environmental pollution. This project intends to revive this art by connecting potters to the market while addressing plastic waste concerns. We aim to give the community another source of income, keep them motivated in their craft, and support India’s vision of "AatmaNirbhar Bharat" (Self-reliant India).
                    <br /><br />
                    Prayagraj, located on the banks of the Ganges, has a naturally pure groundwater source. Many poorer communities cannot afford modern water purifiers, and most commercial purifiers are plastic-based. Our initiative focuses on reducing plastic use while supporting local potter communities to expand their market base beyond their regular customers.
                </p>
    
                <h2 className="text-4xl font-bold text-gray-800 mb-6">PRODUCT PROPOSAL</h2>
                <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
                    <li>The water purifier design consists of two mud pots stacked one on top of the other, with slight variations in size and shape. The primary filtration component is a ceramic candle, through which impure water percolates downward to the lower container.</li>
                    <li>The purifier works by removing turbidity, suspended materials, bacteria, protozoa, and cysts through mechanical trapping and adsorption in the micro-scale pores of the ceramic candle (it does not remove pathogens).</li>
                    <li>This filtration method reduces the Total Dissolved Solids (TDS) level of the water, providing clean water with a balanced TDS level.</li>
                    <li>The effectiveness of the filter depends on factors like the production quality, the initial water quality, and user handling practices. Highly turbid or iron-heavy water can clog the ceramic candle pores, necessitating regular cleaning.</li>
                </ul>
    
                <h2 className="text-4xl font-bold text-gray-800 mb-6">PROJECT UPDATE</h2>
                <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
                    <li>Initially, we conducted several market surveys to understand the demand for such a product.</li>
                    <li>We approached potter communities, sharing our design for the mud pot water filter and gathering feedback.</li>
                    <li>Samples of the mud pot filter were collected and tested with different water samples to evaluate performance.</li>
                </ul>
    
                <h2 className="text-4xl font-bold text-gray-800 mb-6">CHALLENGES</h2>
                <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
                    <li>Ensuring that all components of the product are eco-friendly while maintaining the safety and health of consumers.</li>
                    <li>Developing a design that is easy for potters to understand and implement.</li>
                    <li>Ensuring that the design doesn’t increase production time or cost unnecessarily.</li>
                    <li>Providing product variations to appeal to a broader market and different consumer needs.</li>
                    <li>Building an efficient supply chain that minimizes operational costs while maintaining quality.</li>
                    <li>Maximizing transparency in the system to prevent any exploitation of the potter community and ensure fair compensation.</li>
                </ul>
            </div>
        ),
    }
    ,
    
    {
      name: "moonj",
      jsxElement: (
          <div className="text-black p-6  rounded-lg">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">ABOUT</h2>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                  Before diving into the project, let’s take a moment to understand what <strong>Moonj</strong> is all about and why it holds such significance in Prayagraj.
                  <br /><br />
                  **Moonj** refers to the outer layer of a type of grass known as 'Sarpat.' This layer is peeled, dried, and knotted, often referred to locally as **'Balla.'** Kaasa grass is wrapped with Moonj grass to create intricate basketry motifs, through techniques like dyeing and stitching. The final product, a collection of beautifully crafted baskets, carries a unique cultural touch of Allahabad's heritage.
                  <br /><br />
                  Unfortunately, Moonj basketry—a part of Allahabad's oldest traditions—has faced a decline. To bring recognition back to this art form, **Enactus** has embraced this project to give **Moonj basketry** the recognition it rightly deserves.
              </p>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                  <strong className="text-xl underline text-gray-800">Motivation</strong><br />
                  The Naini area in Prayagraj has long been known for its Moonj craft. However, this ancient craft has gradually lost its shine. Now, a variety of products, such as baskets, coasters, bags, and decorative items, are made from Moonj, all of which are eco-friendly and capable of competing in national and international markets.
                  <br /><br />
                  <strong className="text-xl underline text-gray-800">Goal</strong><br />
                  Our team aims to address key issues such as supply chain challenges, marketing hurdles, promotion strategies, and technological R&D. Through these efforts, we hope to restore the glory of this iconic craft.
              </p>
  
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Insights from Our First Field Visit:</h3>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
                  <li>Technological deficiency—most artisans have yet to adapt to the e-commerce world.</li>
                  <li>Women’s work lacks support from men and children, causing over-reliance on middlemen, which diminishes their earnings.</li>
                  <li>Underpricing—Monthly income of INR 1500 does not reflect the time, effort, or artistry involved in the craft.</li>
                  <li>Slow production rates—Preference for manual hand-knitting over machine assistance slows down the entire production process.</li>
              </ul>
  
              <h2 className="text-4xl font-bold text-gray-900 mb-4">LOOKING FORWARD TO:</h2>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
                  <li>Exploring modern techniques like needle movement to enhance production efficiency while retaining the quality and employment rate.</li>
                  <li>Using Prayagraj's cultural heritage as a selling point, with potential markets like Magh Mela and other fairs providing direct sales opportunities.</li>
                  <li>Empowering artisans with technological knowledge, enabling them to enter e-commerce platforms and reach a broader audience.</li>
                  <li>Executing promotional campaigns to reinstate the recognition and value of **Moonj craft.**</li>
              </ul>
  
              <p className="mb-8 text-lg text-gray-700">
                  We are excited to continue working on this meaningful project and breathe new life into the cherished heritage of Prayagraj.
              </p>
          </div>
      ),
  }
  
  ,
  {
    name: "sahyog",
    jsxElement: (
        <div className="text-black p-6  rounded-lg ">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">OUR AIM</h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                Our mission is to amplify the efforts of government and non-profit organizations by supporting underprivileged sections of society. Through "Project Sahyog," ENACTUS works to provide these communities with necessary training, awareness, and resources to fully leverage available opportunities. Our goal is to promote understanding of the government's policies and schemes that can benefit these individuals and empower them for better opportunities.
            </p>

            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                <strong className="text-xl underline text-gray-800">Motivation</strong><br />
                Despite various government efforts to spread awareness and provide support, significant sections of society continue to be exploited by middlemen, and their lack of awareness and access to resources prevents them from progressing. In today's fast-paced digital world, a lack of technical literacy is also a critical factor that impedes the growth of underprivileged communities.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">MAJOR DELIVERABLES</h2>
            <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
                <li>Organizing training camps to empower rural youth and ensure they can access essential digital services.</li>
                <li>Launching awareness campaigns to educate people about vital government schemes and how to access them.</li>
                <li>Setting up health camps, especially targeting rural women, to promote vaccination and menstrual hygiene awareness.</li>
            </ul>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">AREAS COVERED</h2>
            <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
                <li><strong>EMPLOYMENT:</strong> Enhancing knowledge about various government employment schemes and resources.</li>
                <li><strong>HEALTH:</strong> Promoting basic hygiene practices, distributing sanitary products, and informing individuals about healthcare providers.</li>
                <li><strong>EDUCATION:</strong> Encouraging local school visits, providing children’s study materials, and raising awareness about government scholarships and educational support.</li>
            </ul>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">VILLAGES COVERED</h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                Currently, our college supports five villages. Before the onset of the COVID-19 pandemic, we started our work in Musepur village, focusing on community development and identifying areas where support was most needed.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">CONCLUSION</h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                Project Sahyog, driven by the various government initiatives for rural upliftment, still has a long way to go. ENACTUS MNNIT is committed to pushing the envelope for progress, not just highlighting the importance of community support but also encouraging others to join this mission for empowerment and improvement.
            </p>
        </div>
    ),
}

,
{
  name: "samvesh",
  jsxElement: (
      <div className="text-black p-6  rounded-lg ">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">OUR AIM</h2>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              We launched the project in 2015-16 with the mission to replace harmful polythene bags with a sustainable, cost-effective alternative—paper. 
              <br /><br />
              Our goal was to provide a practical, eco-friendly substitute for polythene bags while promoting self-reliance and empowering women. We focused on equipping women with valuable skills to support both their personal growth and the overall success of the project.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">MAJOR DELIVERABLES</h2>
          <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>
                  <strong className="text-lg underline text-gray-800">Product Development:</strong><br />
                  Our R&amp;D team worked tirelessly to design a cost-effective and high-quality product that offers a feasible alternative to traditional carry bags.
              </li>
              <br />
              <li>
                  <strong className="text-lg underline text-gray-800">Community Research:</strong><br />
                  We conducted surveys within the local communities of Teliyarganj and Phaphamau to recruit volunteers passionate about joining the project’s mission.
              </li>
              <br />
              <li>
                  <strong className="text-lg underline text-gray-800">Market Research:</strong><br />
                  Our Marketing team studied the local markets in Teliyarganj to assess the existing bag types and their quality, helping us identify gaps in the current market.
              </li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">FINAL PRODUCT</h2>
          <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
              <li>A durable, eco-friendly bag made from discarded newspapers and magazines, promoting recycling and sustainability.</li>
              <li>High-quality, long-lasting paper bags designed through extensive R&amp;D research to ensure durability.</li>
              <li>Paper bags with strong string handles that provide better grip and sturdiness, an upgrade over traditional plastic bags.</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">CONCLUSION</h2>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              We substituted synthetic adhesives with a traditional, eco-friendly wheat paste that has been used for centuries in India. 
              <br /><br />
              At Enactus, we pride ourselves on leading initiatives, even when faced with challenges. By maintaining a clear vision and a positive attitude, we aim to create a better future for everyone involved. 
              <br /><br />
              For the latest updates on our impact and progress, please connect with us on our [Facebook page](https://www.facebook.com/enactusmnnit/).
          </p>
      </div>
  ),
}


    ];
    const selectedObject = jsxObjectsArray.find(obj => obj.name === Project);



    return (
        <div>
            {selectedObject && selectedObject.jsxElement}
        </div>
    )
}

export default Data