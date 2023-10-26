// import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import { CiSettings } from "react-icons/ci";
import { MdCropRotate } from "react-icons/md";
import { MdViewInAr } from "react-icons/md";
import { AiFillPieChart } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export const home = [
  {
    text: "HELLO I'M",
    name: "ALAMIN MUSA",
    post: "WEB DESIGNER",
    design: "UI / UX DESIGNER",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
export const about = [
  {
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    desc1:
      "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    cover:
      "https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais",
  },
];

export const services = [
  {
    id: 1,
    icon: <CiSettings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <MdCropRotate />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <MdViewInAr />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <AiFillPieChart />,
    title: "Material UI	",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <AiOutlineCode />,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <AiOutlineBarChart />,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
];

export const project = [
  {
    id: 1,
    icon: <BsFillCloudDownloadFill />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <MdFavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <MdPublic />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <BsFilePersonFill />,
    num: "1446",
    title: "LIENS OF CODE",
  },
];

export const portfolio = [
  {
    id: 1,
    cover:
      "https://image.commarts.com/images1/4/1/9/0/1/1091416_102_1160_LTMyOTUyODQ5NDE5OTgxNTY4MDk.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover:
      "https://image2.commarts.com/images1/4/1/9/0/1/1091419_102_1160_MTA3NTU1NDc3ODIzMjg4MzQwOA.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover:
      "https://image.commarts.com/images1/4/1/9/0/1/1091420_102_1160_NzIwNjE1OTEyLTEwOTQzNzg0NDQ.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover:
      "https://image0.commarts.com/images1/4/1/9/0/1/1091421_102_1160_NzIwNjE2MjM4LTU1NzU1NTkzOQ.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover:
      "https://image1.commarts.com/images1/4/1/9/0/1/1091422_102_1160_MTgwMjM0NTIyMy04NDYxOTA3MzU.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover:
      "https://image2.commarts.com/images1/4/1/9/0/1/1091423_102_1160_LTM0MjAzMDI1LTE3NjIwMTc0MTM.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
];



export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
];
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
];
// export const contact = [
//   {
//     icon: <AddLocationAltOutlined />,
//     text1: "2651 Main Street, Suit 124",
//     text2: "Seattle, WA, 98101",
//   },
//   {
//     icon: <PhoneIphone />,
//     text1: "0123456789",
//     text2: "0345627891",
//   },
//   {
//     icon: <EmailOutlined />,
//     text1: "hello@thetheme.io",
//     text2: "inf0@brex-theme.io",
//   },
// ]
// export const social = [
//   {
//     icon: <Facebook />,
//   },
//   {
//     icon: <Twitter />,
//   },
//   {
//     icon: <Instagram />,
//   },
//   {
//     icon: <YouTube />,
//   },
// ]
