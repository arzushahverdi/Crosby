import React from "react";
import Navbar from "../components/common/Navbar";
import "../assets/styles/About.css";

const About = () => {
  return (
    <>
      <div className="aboutbox">
        <Navbar />
        <div className="abouttext">
          <h1>Our Story</h1>
        </div>
      </div>
      <div className="aboutbigbox">
        <div className="bigtext">
          <h2>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </h2>
        </div>
        <div className="bigimg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097842059-LQFSMF8AEUSBS71DKX9L/plant-textures-2.jpg?format=1500w"
            alt=""
          />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
        </div>
        <div className="lastbox">
          <p>
            The following text is placeholder known as “lorem ipsum,” which is
            scrambled Latin used by designers to mimic real copy. Lorem ipsum
            dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi
            vestibulum, ligula ut efficitur mollis, mi massa accumsan justo,
            accumsan auctor orci lectus ac ipsum. Proin porta nisl sem, ac
            suscipit lorem dignissim et. Curabitur euismod nec augue vitae
            dictum. Nam mattis, massa quis consequat molestie, erat justo
            vulputate tortor, a sollicitudin turpis felis eget risus. Aliquam
            viverra urna felis, eu ornare enim consectetur sed. Morbi vitae
            ultrices velit. Sed molestie consectetur metus. Proin neque eros,
            dapibus ac accumsansodales sit.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
