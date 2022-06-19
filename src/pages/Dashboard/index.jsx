import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const Dashboard = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-teal-800">
        Selamat datang {user.name}!
      </h1>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 300"
        width="406"
        height="306"
        className="illustration styles_illustrationTablet__1DWOa"
      >
        <rect
          x="216.37"
          y="72.07"
          width="133.65"
          height="97.51"
          fill="#e6e6e6"
        ></rect>
        <rect
          x="223.21"
          y="129.48"
          width="25.36"
          height="28.16"
          fill="#c1c1c1"
        ></rect>
        <rect
          x="171.47"
          y="28.32"
          width="76.7"
          height="95.87"
          transform="translate(419.64 152.51) rotate(-180)"
          fill="#24285b"
        ></rect>
        <path
          d="M155.07,189.38l20.43-33.66s7.63,0,8.89-3.09c.79-1.92-3.95-2.43-7.61-2.54a9,9,0,0,0-6.64,2.71L145,178.57S140.05,194,155.07,189.38Z"
          fill="#f4a28c"
        ></path>
        <path
          d="M155.07,189.38l20.43-33.66s7.63,0,8.89-3.09c.79-1.92-3.95-2.43-7.61-2.54a9,9,0,0,0-6.64,2.71L145,178.57S140.05,194,155.07,189.38Z"
          opacity="0.08"
        ></path>
        <path
          d="M183.19,204.7s7.36,6.94-2.18,6.66S175,203.66,183.19,204.7Z"
          fill="#14b8a6"
        ></path>
        <ellipse
          cx="155.56"
          cy="248.25"
          rx="105.44"
          ry="9.73"
          fill="#e6e6e6"
          opacity="0.45"
        ></ellipse>
        <path
          d="M124.68,116.85a29,29,0,0,1,.75,7.68,2.34,2.34,0,0,1-2.58,2.08,5.16,5.16,0,0,1-4.55-3.26l-2-3.81a4.17,4.17,0,0,1,1.17-4.68C119.83,112.62,124.17,114.06,124.68,116.85Z"
          fill="#f4a28c"
        ></path>
        <polygon
          points="116.72 121.9 118.15 137.06 126.45 135.68 122.08 125.2 116.72 121.9"
          fill="#f4a28c"
        ></polygon>
        <path
          d="M120.37,121.5s-.29-1.77-1.6-1.43-.91,2.88.94,2.85Z"
          fill="#f4a28c"
        ></path>
        <path
          d="M125.21,119.73l1.54,1.58a.75.75,0,0,1-.29,1.23l-1.71.59Z"
          fill="#f4a28c"
        ></path>
        <path
          d="M155.74,192.29s28.39-7.2,32.09,5.35S148.12,209,148.12,209l-9.87-7.81Z"
          fill="#24285b"
        ></path>
        <path
          d="M126.45,135.68s16.53,1.68,28.05,14.85c6.84,7.82,4.25,14.33,1,18.33a13.19,13.19,0,0,0-2.15,12.3l3.42,10.67S138.51,203.61,127,202.37,79.06,137.49,126.45,135.68Z"
          fill="#14b8a6"
        ></path>
        <path
          d="M103.94,149.06a28.65,28.65,0,0,0-.94,12.33c1.11,6.05,6.84,46.31,44.74,35.44l9-5-9.6-8.11-18.38-19.23-8-15.43Z"
          opacity="0.08"
        ></path>
        <path
          d="M116.93,176.25c-8.13-24.61-44.41-20.58-47.51,5.16-3.2,26.57.43,63.23,43.2,68,68,7.56,78.73-23.16,69.13-39.34s-57.34-7.68-64.47-32.65C117.17,177,117.05,176.63,116.93,176.25Z"
          fill="#ffd200"
        ></path>
        <path
          d="M173,190.13s9.48,2.29,10.17-3.74l-10.36-.55Z"
          fill="#f4a28c"
        ></path>
        <path
          d="M115.38,149.75a7.19,7.19,0,0,1,11-6.23c3.25,2.14,6.45,6.57,8.39,15.27,3.77,17,13.18,24.31,38.22,26.5v4.84S116.39,204.52,115.38,149.75Z"
          fill="#f4a28c"
        ></path>
        <rect
          x="166.93"
          y="182.57"
          width="29.35"
          height="4.22"
          fill="#ffd200"
        ></rect>
        <polygon
          points="192.42 184.68 201.91 153.54 204.63 154.16 196.28 186.79 192.42 184.68"
          fill="#ffd200"
        ></polygon>
        <path
          d="M93,214.56c-4.79-4.37-12.28.41-10.21,6.55,2.92,8.68,9.66,17.2,24.45,19.71,33.23,5.66,30-6.64,27.85-12C133.38,224.44,111.37,231.27,93,214.56Z"
          fill="#fff"
          opacity="0.45"
        ></path>
        <path
          d="M117.26,127.57s-9.46-4.13-6.05-11.84,12.78-5.45,12.43-.71c0,0-4.48,1.26-4.45,4.11S122.11,125.33,117.26,127.57Z"
          fill="#24285b"
        ></path>
        <circle cx="108.31" cy="114.94" r="4.26" fill="#24285b"></circle>
        <path
          d="M211.82,83.42a17.09,17.09,0,1,1,17.09-17.09A17.11,17.11,0,0,1,211.82,83.42Zm0-29.58A12.49,12.49,0,1,0,224.3,66.33,12.51,12.51,0,0,0,211.82,53.84Z"
          fill="#fff"
        ></path>
        <path
          d="M228.91,66.33H224.3a12.5,12.5,0,0,0-12.48-12.49v-4.6A17.11,17.11,0,0,1,228.91,66.33Z"
          fill="#14b8a6"
        ></path>
        <path
          d="M211.82,83.42v-4.6A12.5,12.5,0,0,0,224.3,66.33h4.61A17.11,17.11,0,0,1,211.82,83.42Z"
          fill="#ffd200"
        ></path>
        <path
          d="M212.19,60.8c.31,0,.4.11.4.41v.65A3,3,0,0,1,215,63.69c.16.32.09.49-.27.65l-.64.29c-.31.14-.45.08-.62-.24a1.65,1.65,0,0,0-1.69-1c-1.12,0-1.64.33-1.64,1.09a1,1,0,0,0,.91.88,8,8,0,0,0,1,.15,5.85,5.85,0,0,1,1.76.34,2.48,2.48,0,0,1,.78.42,2.54,2.54,0,0,1,.7,1.85c0,1.44-1,2.41-2.67,2.66v.69c0,.3-.09.41-.4.41h-.72c-.3,0-.41-.11-.41-.41v-.67a3,3,0,0,1-2.64-2c-.11-.29,0-.48.3-.6l.65-.24c.33-.12.48,0,.62.29a1.72,1.72,0,0,0,1.78,1.11c1.22,0,1.82-.38,1.82-1.16a.81.81,0,0,0-.56-.82,4.35,4.35,0,0,0-1.31-.25,6.19,6.19,0,0,1-1.77-.38,2.17,2.17,0,0,1-1.48-2.23c0-1.43.9-2.38,2.59-2.6v-.65c0-.3.11-.41.41-.41Z"
          fill="#fff"
        ></path>
        <rect
          x="196.16"
          y="93.38"
          width="30.26"
          height="4.85"
          fill="#fff"
        ></rect>
        <rect
          x="196.16"
          y="104.36"
          width="30.26"
          height="4.85"
          fill="#fff"
          opacity="0.21"
        ></rect>
        <rect
          x="269.32"
          y="105.92"
          width="12.69"
          height="8.68"
          fill="#c1c1c1"
        ></rect>
        <rect
          x="288.55"
          y="100.19"
          width="12.69"
          height="14.4"
          fill="#c1c1c1"
        ></rect>
        <rect
          x="307.47"
          y="90.42"
          width="12.69"
          height="24.17"
          fill="#c1c1c1"
        ></rect>
        <rect
          x="263.89"
          y="114.03"
          width="62.64"
          height="2.31"
          fill="#878787"
        ></rect>
        <circle cx="180.89" cy="37.3" r="2.49" fill="#fff"></circle>
        <circle cx="188.15" cy="37.3" r="2.49" fill="#14b8a6"></circle>
        <circle cx="195.48" cy="37.3" r="2.49" fill="#ffd200"></circle>
        <rect
          x="255.89"
          y="129.48"
          width="78.64"
          height="28.16"
          fill="#c1c1c1"
          opacity="0.31"
        ></rect>
        <polygon
          points="275.22 101.81 274.36 101.3 283.06 86.69 294.78 95.69 306.55 78.29 314.18 86.23 313.46 86.92 306.69 79.88 295.01 97.13 283.34 88.17 275.22 101.81"
          fill="#878787"
        ></polygon>
        <path
          d="M212.07,238.52s-6.35-1.73-7.73-7.64c0,0,9.84-2,10.12,8.17Z"
          fill="#14b8a6"
          opacity="0.58"
        ></path>
        <path
          d="M212.85,237.89s-4.44-7-.54-13.57c0,0,7.49,4.75,4.16,13.59Z"
          fill="#14b8a6"
          opacity="0.73"
        ></path>
        <path
          d="M214,237.9s2.34-7.41,9.43-8.81c0,0,1.33,4.81-4.59,8.83Z"
          fill="#14b8a6"
        ></path>
        <polygon
          points="209.38 237.73 210.67 246.54 218.78 246.57 219.97 237.78 209.38 237.73"
          fill="#24285b"
        ></polygon>
        <rect
          x="290.96"
          y="182.54"
          width="51.96"
          height="23.65"
          fill="#24285b"
        ></rect>
        <polygon
          points="327.55 198.78 337.98 198.78 332.76 188.98 327.55 198.78"
          fill="#14b8a6"
        ></polygon>
        <rect
          x="301.85"
          y="189.38"
          width="20.53"
          height="3.11"
          rx="1.28"
          fill="#fff"
        ></rect>
        <rect
          x="301.85"
          y="195.29"
          width="20.53"
          height="3.11"
          rx="1.28"
          fill="#fff"
          opacity="0.15"
        ></rect>
        <rect
          x="224.72"
          y="182.54"
          width="51.96"
          height="23.65"
          fill="#24285b"
        ></rect>
        <polygon
          points="261.32 198.78 271.74 198.78 266.53 188.98 261.32 198.78"
          fill="#ffd200"
        ></polygon>
        <rect
          x="235.61"
          y="189.38"
          width="20.53"
          height="3.11"
          rx="1.28"
          fill="#fff"
        ></rect>
        <rect
          x="235.61"
          y="195.29"
          width="20.53"
          height="3.11"
          rx="1.28"
          fill="#fff"
          opacity="0.15"
        ></rect>
        <path
          d="M93.12,130.63h0c-1,0-2,0-3-.1a.49.49,0,0,1-.47-.52.46.46,0,0,1,.52-.47c1,0,2,.07,3,.09a.5.5,0,0,1,.5.5A.51.51,0,0,1,93.12,130.63Zm-12.91-1.28h-.1c-1-.21-2-.44-3-.69a.5.5,0,0,1-.36-.61.52.52,0,0,1,.62-.36c.92.25,1.89.48,2.88.68a.5.5,0,0,1-.09,1Zm-12.15-4.43a.59.59,0,0,1-.26-.07,30.26,30.26,0,0,1-2.54-1.69.5.5,0,1,1,.6-.8A28.94,28.94,0,0,0,68.31,124a.5.5,0,0,1-.25.93Zm-9-9.12a.49.49,0,0,1-.44-.26,21.24,21.24,0,0,1-1.26-2.79.5.5,0,1,1,.93-.35,22.07,22.07,0,0,0,1.21,2.67.51.51,0,0,1-.2.68A.52.52,0,0,1,59,115.8ZM56.3,103.26h0a.5.5,0,0,1-.48-.52,28.82,28.82,0,0,1,.26-3,.5.5,0,1,1,1,.13c-.13,1-.22,2-.25,2.94A.5.5,0,0,1,56.3,103.26Zm2.94-12.59a.43.43,0,0,1-.19,0,.5.5,0,0,1-.27-.66c.39-.92.82-1.84,1.28-2.75a.51.51,0,0,1,.67-.22.5.5,0,0,1,.22.68c-.45.88-.87,1.79-1.25,2.69A.49.49,0,0,1,59.24,90.67Zm6.85-11a.5.5,0,0,1-.35-.86,19.48,19.48,0,0,1,2.36-2,.51.51,0,0,1,.7.11.5.5,0,0,1-.12.7,18.33,18.33,0,0,0-2.24,1.87A.54.54,0,0,1,66.09,79.7Zm11.25-6.3a.5.5,0,0,1-.47-.33.5.5,0,0,1,.31-.64c.91-.32,1.88-.62,2.88-.91a.5.5,0,1,1,.28,1c-1,.28-1.94.58-2.84.9ZM90,70.3a.5.5,0,0,1-.09-1c1-.17,2-.32,3-.47a.5.5,0,1,1,.15,1c-1,.14-2,.3-3,.47Zm67.88-.94h-.05s-1.07-.11-3-.27a.5.5,0,1,1,.08-1c1.92.15,3,.26,3,.26a.5.5,0,0,1,.45.55A.51.51,0,0,1,157.84,69.36Zm-55-.66a.5.5,0,0,1,0-1l3-.23a.51.51,0,0,1,.53.47.5.5,0,0,1-.46.53l-3,.23Zm42-.27h0l-3-.15a.5.5,0,1,1,0-1l3,.14a.5.5,0,0,1,.47.53A.49.49,0,0,1,144.86,68.43Zm-29-.44a.5.5,0,0,1,0-1l3-.07a.5.5,0,1,1,0,1l-3,.07Zm16,0h0l-3,0a.5.5,0,0,1-.5-.5.51.51,0,0,1,.51-.5l3,0a.5.5,0,0,1,0,1Z"
          fill="#e6e6e6"
        ></path>
      </svg>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        harum voluptatibus culpa consectetur expedita, similique sit dolore unde
        quas sequi, deserunt rem? Necessitatibus voluptatibus repudiandae sit
        illo expedita, suscipit soluta numquam quaerat nulla placeat laudantium?
        Neque quibusdam, ad corporis, enim tenetur mollitia nam quas totam
        aliquam aspernatur quod suscipit beatae maxime quisquam sed consequuntur
        asperiores nemo cum. Et odio quis deleniti voluptatum molestiae, est
        temporibus, dignissimos eaque illum voluptatem facilis. Vero aliquid,
        earum recusandae pariatur consequatur, repellendus sed, ipsum dolor
        explicabo nam nobis minima quas nostrum corporis a exercitationem
        sapiente! Ducimus, rem inventore dolor numquam tempore vitae iusto
        maiores nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        harum voluptatibus culpa consectetur expedita, similique sit dolore unde
        quas sequi, deserunt rem? Necessitatibus voluptatibus repudiandae sit
        illo expedita, suscipit soluta numquam quaerat nulla placeat laudantium?
        Neque quibusdam, ad corporis, enim tenetur mollitia nam quas totam
        aliquam aspernatur quod suscipit beatae maxime quisquam sed consequuntur
        asperiores nemo cum. Et odio quis deleniti voluptatum molestiae, est
        temporibus, dignissimos eaque illum voluptatem facilis. Vero aliquid,
        earum recusandae pariatur consequatur, repellendus sed, ipsum dolor
        explicabo nam nobis minima quas nostrum corporis a exercitationem
        sapiente! Ducimus, rem inventore dolor numquam tempore vitae iusto
        maiores nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        harum voluptatibus culpa consectetur expedita, similique sit dolore unde
        quas sequi, deserunt rem? Necessitatibus voluptatibus repudiandae sit
        illo expedita, suscipit soluta numquam quaerat nulla placeat laudantium?
        Neque quibusdam, ad corporis, enim tenetur mollitia nam quas totam
        aliquam aspernatur quod suscipit beatae maxime quisquam sed consequuntur
        asperiores nemo cum. Et odio quis deleniti voluptatum molestiae, est
        temporibus, dignissimos eaque illum voluptatem facilis. Vero aliquid,
        earum recusandae pariatur consequatur, repellendus sed, ipsum dolor
        explicabo nam nobis minima quas nostrum corporis a exercitationem
        sapiente! Ducimus, rem inventore dolor numquam tempore vitae iusto
        maiores nam.
      </p>
    </Layout>
  );
};

export default Dashboard;
