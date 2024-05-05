import React from "react";
import { Collapse } from "antd";

const Home = () => {
  const text = `
  Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum 
  faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
  massa ac facilisis.
`;
  const itemsNest = [
    {
      key: "1",
      label: "This is panel nest panel",
      children: <p>{text}</p>,
    },
  ];
  const items = [
    {
      key: "1",
      label: "Aliquet lectus urna viverra in odio?",
      children: <Collapse defaultActiveKey="1" items={itemsNest} />,
    },
    {
      key: "2",
      label: "Orci commodo, viverra orci mollis ut euismod?",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label:
        "Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "In id dolor quis nunc, urna hendrerit pharetra?",
      children: <p>{text}</p>,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="max-[100%] m-auto py-9 ">
      <div className="w-[90%] m-auto flex items-center justify-center">
        <div>
          <p className="w-[50%] text-[30px] font-[700]">
            Createx SEO Agency is a full-service digital marketing agency.
            We help businesses make more money through a wealth of performance
            data and market research. We create science-based SEO strategies
            to empower our clients.
          </p>
        </div>
        <div className="w-[60%]  flex flex-wrap gap-2">
          <img src="/src/assets/award.png" alt="" />
          <img src="/src/assets/award (1).png" alt="" />
          <img src="/src/assets/award (2).png" alt="" />
          <img src="/src/assets/award (3).png" alt="" />
        </div>
      </div>
      <div className="w-[90%] m-auto flex  justify-between py-4 mt-8 ">
        <img src="/src/assets/For Sale Logo.png" alt="" />
        <img src="/src/assets/Higher Fit Logo - Untitled Page.png" alt="" />
        <img
          src="/src/assets/InDepth Consulting Logo - Untitled Page.png"
          alt=""
        />
        <img src="/src/assets/Sunset Realty Logo.png" alt="" />
        <img
          src="/src/assets/InDepth Consulting Logo - Untitled Page.png"
          alt=""
        />
      </div>

<div className="w-[90%] m-auto flex  items-center justify-center mt-[40px]">
        <div className="w-[50%] ">
          <h1 className="font-[700] text-[28px] my-3">Createx Agency </h1>
          <p className="w-[50%] text-[29px] ">
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
            viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit
            diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
            ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus,
            pharetra, tristique libero. Dolor risus ac quam dictum mattis
            ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis
            hendrerit. Cras at ac magna ultricies orci.
          </p>
          <button className="px-4 py-2 bg-[#7772F1] text-white my-3">
            More about us
          </button>
        </div>
        <div>
          <img src="/src/assets/image.png" alt="" />
        </div>
      </div>
      <div className="w-[90%] m-auto flex  items-center justify-around mt-[60px] md:flex md:flex-col md:items-center">
        <img src="/src/assets/figure.png" alt="" />
        <img src="/src/assets/figure (1).png" alt="" />
        <img src="/src/assets/figure (2).png" alt="" />
        <img src="/src/assets/figure (3).png" alt="" />
      </div>
      <div className="text-center font-bold text-[30px] my-9">Our services</div>
      <div className="w-[90%] m-auto flex  items-center justify-around mt-[60px] md:flex md:flex-col md:items-center">
        <button className="hover:px-[50px] hover:py-3 hover:text-[#7772F1] hover:border-2 hover:border-[#7772F1] hover:rounded-md">
          Social Media
        </button>
        <button className="hover:px-[50px] hover:py-3 hover:text-[#7772F1] hover:border-2 hover:border-[#7772F1] hover:rounded-md">
          SEO
        </button>
        <button className="hover:px-[50px] hover:py-3 hover:text-[#7772F1] hover:border-2 hover:border-[#7772F1] hover:rounded-md">
          Research
        </button>
        <button className="hover:px-[50px] hover:py-3 hover:text-[#7772F1] hover:border-2 hover:border-[#7772F1] hover:rounded-md">
          Content & PR
        </button>
        <button className="hover:px-[50px] hover:py-3 hover:text-[#7772F1] hover:border-2 hover:border-[#7772F1] hover:rounded-md">
          Payed Traffic
        </button>
      </div>
      <div className="w-[90%] m-auto flex  items-center justify-around mt-[60px] md:flex md:flex-col md:items-center">
        <div className="w-[50%] md:w-auto">
          <p className="text-[40px] font-bold w-[70%]">
            Complete Worflow For Any SEO Professional
          </p>
          <li>Aenean enim tellus morbi nisl vulputate dictumst.</li>
          <li>Nibh sapien volutpat lacus augue.</li>
          <li>Vel in amet, placerat adipiscing est pharetra.</li>
          <li>Gravida ornare sit in et ut sit sem id.</li>
          <li>Ultrices pellentesque dictum enim egestas ac diam.</li>
          <li>Sit semper enim senectus integer ut turpis et.</li>
          <div className="mt-5">
            <button className="border-2 px-3 py-1 rounded-md border-[#7772F1] mr-4">
              Learn more
            </button>
            <button className=" px-3 py-1 rounded-md bg-[#7772F1]  text-white ">
              Try SEO toolkit
            </button>
          </div>
        </div>
        <div>
          <img src="/src/assets/illustration (2).png" alt="" />
        </div>
      </div>
      <div className="bg-[#1E212C]">
        <div className="w-[90%] m-auto flex  items-center justify-around mt-[60px] md:flex md:flex-col md:items-center py-7">
          <div>
            <img src="/src/assets/illustration (3).png" alt="" />
          </div>
          <div>
            <h1 className="text-[40px] font-bold text-white my-3">
              Get a Free SEO Analysis!
            </h1>
            <input
              type="text"


className="bg-gray-500 px-1 py-1 rounded-md mr-4  w-[285px] md:w-[300px] md:my-2"
            />
            <input
              type="text"
              className="bg-gray-500 px-1 py-1 rounded-md mr-4 w-[285px] md:w-[300px]"
            />
            <div className="mt-[10px]">
              <input
                type="text"
                className="bg-gray-500 px-1 py-1 rounded-md mr-4 w-[588px] md:w-[300px]"
              />
            </div>
            <div className="flex mt-7 md:flex-col-reverse">
              <div className="flex items-center gap-2 text-white">
                <input type="checkbox" />
                <span className="w-[70%] md:w-auto">
                  I agree to receive communications from Createx SEO Agency
                </span>
              </div>
              <button className=" px-3 py-1 rounded-md bg-[#7772F1]  text-white ">
                Try SEO toolkit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto flex  items-center justify-around mt-[60px] md:flex md:flex-col md:items-center py-7">
        <div className="w-[50%] md:w-auto">
          <h1>Freequently Ask Questions</h1>
          <Collapse onChange={onChange} items={items} />
          <button className=" px-3 py-1 rounded-md bg-[#7772F1]  text-white  mt-4">
            Discover more
          </button>
        </div>
        <div>
          <img src="/src/assets/illustration (4).png" alt="" />
        </div>
      </div>
      <div>
        <div className="w-[90%] m-auto flex  items-center justify-around mt-[60px] md:flex md:flex-col md:items-center py-7">
          <img src="/src/assets/case-card (1).png" alt="" />
          <img src="/src/assets/hover.png" alt="" />
          <img src="/src/assets/case-card (1).png" alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-[30px] ml-[100px]">
          Read our clients' case studies
        </h1>
      </div>

      <div className="flex flex-wrap justify-around mt-[100px]">
        <div>
          <img className="w-[400px]" src="src\assets\a1.svg" alt="" />
        </div>
        <div>
          <img className="w-[400px]" src="src\assets\a2.svg" alt="" />
        </div>
        <div>
          <img className="w-[400px]" src="src\assets\a1.svg" alt="" />
        </div>
      </div>

      <div className="flex items-center gap-[10px] justify-center">
        <h1 className="text-[30px]">Explore more case studies</h1>
        <button className="border w-[180px] h-[40px] bg-[#7772F1] text-[white]">
          View all case studies
        </button>
      </div>

      <div>
        <h1 className="text-center text-[30px] mt-[100px]">Our benefits</h1>
      </div>

      <div className="flex mt-[100px] items-center sm:flex-wrap">
        <div>
          <div className="ml-[60px]">
            <img src="src\assets\a3.svg" alt="" />
          </div>
          <div className="mt-[120px]">
            <img src="src\assets\a4.svg" alt="" />
          </div>
          <div>
            <img src="src\assets\a4.svg" alt="" />
          </div>
        </div>

        <div>
          <img src="src\assets\illustration.svg" alt="" />
        </div>

        <div>
          <div className="ml-[60px]">
            <img src="src\assets\a3.svg" alt="" />
          </div>
          <div className="mt-[120px]">
            <img src="src\assets\a4.svg" alt="" />
          </div>
          <div>
            <img src="src\assets\a4.svg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[30px] text-center">Flexible pricing plans</h1>
      </div>

      <div className="flex flex-wrap justify-around mt-[100px]">
        <div className="w-[350px] h-[600px] border">
          <h1 className="text-center text-[30px] pt-[30px]">Basic</h1>
          <div className="flex justify-center pt-[30px]">
            <img src="src\assets\price.svg" alt="" />
          </div>

          <div className=" border-b-2 mt-[20px]"></div>

Навруз Набиев, [05.05.2024 17:31]
<div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>

          <div className="flex justify-center mt-[20px]">
            <button className="border w-[120px] h-[40px] text-[#7772F1] border-[#7772F1]">
              Choose plan
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[600px] border bg-[#1E212C]">
          <h1 className="text-center text-[white] text-[30px] pt-[30px]">
            Basic
          </h1>
          <div className="flex justify-center pt-[30px]">
            <img src="src\assets\price.svg" alt="" />
          </div>

          <div className=" border-b-2 mt-[20px]"></div>

          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1 className="text-[white]">Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1 className="text-[white]">Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1 className="text-[white]">Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1 className="text-[white]">Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1 className="text-[white]">Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1 className="text-[white]">Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1 className="text-[white]">Advanced Analytics</h1>
          </div>

          <div className="flex justify-center mt-[20px]">
            <button className="border w-[120px] h-[40px] text-[#7772F1] border-[#7772F1]">
              Choose plan
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[600px] border">
          <h1 className="text-center text-[30px] pt-[30px]">Basic</h1>
          <div className="flex justify-center pt-[30px]">
            <img src="src\assets\price.svg" alt="" />
          </div>

          <div className=" border-b-2 mt-[20px]"></div>

Навруз Набиев, [05.05.2024 17:31]
<div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <img src="src\assets\Mark.svg" alt="" />
            <h1>Advanced Analytics</h1>
          </div>

          <div className="flex justify-center mt-[20px]">
            <button className="border w-[120px] h-[40px] text-[#7772F1] border-[#7772F1]">
              Choose plan
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[30px]">
        <h1 className="text-center text-[30px]">What our clients say</h1>
        <div className="flex justify-center">
          <h1 className="w-[500px] text-center sm:w-[390px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
            lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
            purus facilisi. Vitae id turpis tempus ornare turpis quis non.
            Congue tortor in euismod vulputate etiam eros. Pulvinar neque
            pharetra arcu diam maecenas diam integer in.
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-[50px] sm:ml-[100px]">
        <div>
          <div>
            <img className="w-[300px]" src="src\assets\pic.svg" alt="" />
            <img src="src\assets\meta.svg" alt="" />
          </div>
          <div>
            <h1 className="text-[20px] w-[450px] sm:w-[390px]">
              The Basics of Blogging Search Engine Optimization.
            </h1>
          </div>
          <h1 className="mt-[50px]">Read More -></h1>
        </div>
        <div>
          <div>
            <img className="w-[300px]" src="src\assets\pic.svg" alt="" />
            <img src="src\assets\meta.svg" alt="" />
          </div>
          <div>
            <h1 className="text-[20px] w-[450px] sm:w-[390px]">
              The Basics of Blogging Search Engine Optimization.
            </h1>
          </div>
          <h1 className="mt-[50px]">Read More -></h1>
        </div>
      </div>
    </div>
  );
};

export default Home;