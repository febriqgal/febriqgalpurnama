/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import { Button, Modal, Text, Tooltip, useModal } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";
import Gambar from "../../public/20.png";
import clsx from "clsx";
import bg from "../../public/bg.svg";
import { motion } from "framer-motion";
export default function Home() {
  const { setVisible, bindings } = useModal();
  const portfolio = [
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
  ];
  const route = useRouter();
  // useEffect(() => {
  //   setVisible(true);
  // }, []);
  return (
    <Layout>
      <Modal
        blur
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Pemberitahuan
          </Text>
        </Modal.Header>
        <Modal.Body>
          <h1 id="modal-description" className="text-center">
            Website masih dalam tahap develepment, tetap tenang website masih
            bisa digunakan👌
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
      <Image
        className="absolute -z-50 top-0 left-0 right-0 bottom-0 min-h-screen w-full"
        src={bg}
        alt="#"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div
          className={clsx(
            "flex flex-col items-center justify-between",
            "w-full",
            "sm:flex-row"
          )}
        >
          <div>
            <h1 className="text-lg font-medium">{`Hi!👋 I'm`}</h1>
            <h1 className={clsx("text-5xl font-black")}>Febriqgal Purnama</h1>
            <TypeAnimation
              sequence={[
                "Software Engineer |",
                1000,
                "Software Engineer | Web App Developers",
                1000,
                "Software Engineer | Mobile App Developers",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "16px" }}
              repeat={Infinity}
            />
            <div className="grid grid-cols-7 lg:flex  gap-2 lg:gap-4 place-items-center mt-4">
              <Tooltip content="NextJS" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6436 2C11.4967 2 11.3854 2.00108 11.3449 2.00558C11.3019 2.01 11.165 2.02308 11.0419 2.03292C8.20125 2.289 5.5405 3.8215 3.85525 6.17692C2.91683 7.48667 2.31667 8.97217 2.09 10.5458C2.00983 11.095 2 11.2573 2 12.002C2 12.7468 2.01 12.909 2.09 13.4583C2.63333 17.2133 5.30592 20.3683 8.93058 21.5371C9.57967 21.7463 10.2639 21.889 11.042 21.975C11.345 22.0083 12.6548 22.0083 12.9578 21.975C14.3009 21.8264 15.4388 21.4942 16.5609 20.9214C16.733 20.8334 16.7662 20.81 16.7428 20.7903C16.7272 20.7788 15.9939 19.7955 15.1142 18.607L13.5151 16.447L11.5112 13.4818C10.4086 11.8514 9.50142 10.5184 9.49358 10.5184C9.48575 10.5163 9.478 11.834 9.474 13.4426C9.46842 16.2594 9.46625 16.3728 9.431 16.4393C9.38017 16.5351 9.341 16.5741 9.259 16.6171C9.1965 16.6483 9.14167 16.6542 8.8465 16.6542H8.50817L8.41833 16.5975C8.36262 16.5626 8.31737 16.5133 8.28733 16.4548L8.24625 16.3668L8.25067 12.4477L8.25625 8.5265L8.31675 8.45025C8.34808 8.40917 8.41458 8.3565 8.46142 8.33108C8.54158 8.29192 8.57292 8.288 8.91108 8.288C9.31 8.288 9.37642 8.30358 9.48 8.41692C9.50942 8.44833 10.5944 10.0825 11.8925 12.0509C13.2068 14.0433 14.5219 16.0351 15.8378 18.0264L17.4213 20.4249L17.5013 20.3722C18.2112 19.9108 18.9617 19.254 19.5561 18.5699C20.821 17.1175 21.6363 15.3466 21.91 13.4583C21.9901 12.909 21.9998 12.7466 21.9998 12.002C21.9998 11.2573 21.9898 11.095 21.91 10.5457C21.3665 6.79067 18.694 3.63575 15.0694 2.46692C14.4301 2.25967 13.7497 2.11692 12.9873 2.03092C12.8465 2.01625 12.0842 2.00033 11.6436 2ZM15.034 8.01417C15.3234 8.01417 15.3742 8.01858 15.4387 8.05333C15.5327 8.10017 15.6088 8.19017 15.6363 8.28392C15.6518 8.33475 15.6557 9.42167 15.6517 11.8709L15.6462 15.3855L15.0265 14.4355L14.4047 13.4855V10.9305C14.4047 9.27883 14.4125 8.35025 14.4242 8.30533C14.4555 8.19592 14.5239 8.10983 14.6178 8.05908C14.6979 8.01792 14.727 8.01417 15.034 8.01417Z" />
                </svg>
              </Tooltip>
              <Tooltip content="Git" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.6217 11.1085L12.8892 2.37687C12.3858 1.87438 11.5708 1.87438 11.0658 2.37687L9.25667 4.18938L11.5567 6.48937C12.0942 6.31021 12.7058 6.43104 13.1308 6.85687C13.5608 7.28604 13.6792 7.90521 13.4958 8.44021L15.7108 10.6569C16.2483 10.471 16.8667 10.5919 17.2942 11.0194C17.895 11.6194 17.895 12.5894 17.2942 13.1894C16.695 13.7885 15.7267 13.7885 15.1275 13.1894C14.6783 12.7385 14.5658 12.0752 14.7908 11.526L12.7167 9.46271V14.9002C12.8633 14.9719 13.0017 15.0694 13.1233 15.1902C13.7175 15.791 13.7175 16.7594 13.1233 17.3569C12.5242 17.9577 11.5492 17.9577 10.9492 17.3569C10.35 16.7577 10.35 15.791 10.9492 15.1919C11.1008 15.0419 11.2717 14.9285 11.4533 14.8535V9.36271C11.2725 9.28687 11.1 9.17771 10.9533 9.02854C10.4992 8.57437 10.39 7.91021 10.6233 7.35437L8.36333 5.08354L2.375 11.0677C1.875 11.5719 1.875 12.3877 2.375 12.8919L11.1083 21.6227C11.6117 22.126 12.4267 22.126 12.93 21.6227L21.6217 12.931C22.1258 12.4285 22.1258 11.6127 21.6217 11.1085Z" />
                </svg>
              </Tooltip>
              <Tooltip content="Flutter" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2198_3298)">
                    <path d="M14.0117 2L4 12L7.08333 15.0833L20.1533 2.01083H14.0225L14.0117 2ZM14.0233 11.2267L8.63083 16.6083L14.0225 22H20.1667L14.7833 16.61L20.1667 11.2267H14.025H14.0233Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2198_3298">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Tooltip>
              <Tooltip content="Firebase" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2198_3301)">
                    <path d="M5.47833 15.0602L7.44915 2.38452C7.46328 2.29049 7.50673 2.20332 7.5733 2.13544C7.63987 2.06755 7.72617 2.0224 7.8199 2.00642C7.91363 1.99045 8.01001 2.00446 8.09532 2.04646C8.18062 2.08846 8.25049 2.15632 8.29497 2.24035L10.4141 6.21615L5.47833 15.0602ZM19.4732 18.1369L17.5982 6.47032C17.5854 6.38787 17.5498 6.31062 17.4956 6.2472C17.4414 6.18378 17.3706 6.13669 17.2911 6.11118C17.2117 6.08568 17.1267 6.08277 17.0457 6.10278C16.9647 6.12278 16.8908 6.16492 16.8324 6.22448L5 18.1377L11.5466 21.8269C11.7487 21.9404 11.9765 22 12.2083 22C12.44 22 12.6679 21.9404 12.8699 21.8269L19.4732 18.1369ZM14.1533 7.95614L12.6366 5.05449C12.5983 4.98152 12.5408 4.92041 12.4703 4.87778C12.3998 4.83514 12.319 4.8126 12.2366 4.8126C12.1542 4.8126 12.0734 4.83514 12.0029 4.87778C11.9324 4.92041 11.8749 4.98152 11.8366 5.05449L5.17833 16.9869L14.1533 7.95614Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2198_3301">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Tooltip>
              <Tooltip content="NodeJS" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.8666 22C11.5991 22 11.3324 21.93 11.0982 21.7942L8.65161 20.3467C8.28661 20.1425 8.46494 20.07 8.58494 20.0275C9.07244 19.8584 9.17077 19.8192 9.6916 19.5242C9.74576 19.4934 9.81743 19.505 9.87326 19.5384L11.7532 20.6542C11.8216 20.6917 11.9174 20.6917 11.9799 20.6542L19.309 16.4242C19.3773 16.3851 19.4207 16.3067 19.4207 16.2259V7.76765C19.4207 7.68515 19.3765 7.60765 19.3065 7.56598L11.9807 3.33936C11.9132 3.30019 11.8232 3.30019 11.7549 3.33936L4.43082 7.56682C4.35999 7.60765 4.31499 7.68765 4.31499 7.76765V16.2259C4.31499 16.3067 4.35999 16.3834 4.43082 16.4217L6.4383 17.5817C7.52745 18.1267 8.19495 17.485 8.19495 16.8401V8.48931C8.19495 8.37098 8.28994 8.27848 8.40828 8.27848H9.33743C9.45327 8.27848 9.54993 8.37181 9.54993 8.48931V16.8401C9.54993 18.2942 8.75827 19.1275 7.37995 19.1275C6.95662 19.1275 6.62246 19.1275 5.69164 18.6684L3.76833 17.5625C3.29333 17.2884 3 16.7751 3 16.2259V7.76765C3 7.21849 3.29416 6.70516 3.76833 6.43183L11.0974 2.19687C11.5616 1.93438 12.1774 1.93438 12.6374 2.19687L19.9657 6.43183C20.4407 6.70599 20.7356 7.21849 20.7356 7.76765V16.2259C20.7356 16.7751 20.4407 17.2867 19.9657 17.5625L12.6374 21.7942C12.4041 21.93 12.1382 22 11.8666 22ZM17.784 13.6609C17.784 12.0776 16.714 11.6559 14.4615 11.3584C12.1857 11.0576 11.9541 10.9018 11.9541 10.3693C11.9541 9.92929 12.1499 9.3418 13.8357 9.3418C15.3415 9.3418 15.8965 9.66596 16.1249 10.681C16.1449 10.7768 16.2324 10.8468 16.3307 10.8468H17.2815C17.3407 10.8468 17.3965 10.8209 17.4365 10.7793C17.4765 10.7343 17.4982 10.6768 17.4923 10.616C17.3449 8.86764 16.1832 8.05265 13.8357 8.05265C11.7457 8.05265 10.4991 8.9343 10.4991 10.4135C10.4991 12.0176 11.7391 12.4609 13.7449 12.6593C16.1449 12.8943 16.3307 13.2451 16.3307 13.7168C16.3307 14.5359 15.6732 14.8851 14.1291 14.8851C12.1899 14.8851 11.7632 14.3984 11.6199 13.4334C11.6032 13.3301 11.5149 13.2543 11.4091 13.2543H10.4616C10.3441 13.2543 10.2499 13.3476 10.2499 13.4651C10.2499 14.7001 10.9216 16.1717 14.1291 16.1717C16.4524 16.1726 17.784 15.2584 17.784 13.6609Z" />
                </svg>
              </Tooltip>
              <Tooltip content="Figma" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.1625 9.48417H11.3392V2H15.1625C17.2258 2 18.9042 3.67833 18.9042 5.74167C18.9042 7.805 17.2258 9.48417 15.1625 9.48417ZM12.565 8.25833H15.1625C16.55 8.25833 17.6783 7.12917 17.6783 5.7425C17.6783 4.35583 16.5492 3.22667 15.1625 3.22667H12.565V8.25833ZM12.565 9.48417H8.7425C6.67917 9.48417 5.00083 7.80583 5.00083 5.7425C5.00083 3.67917 6.67917 2 8.7425 2H12.5658V9.48417H12.565ZM8.7425 3.22583C7.355 3.22583 6.22667 4.355 6.22667 5.74167C6.22667 7.12833 7.355 8.25833 8.7425 8.25833H11.34V3.22583H8.7425ZM12.565 15.7417H8.7425C6.67917 15.7417 5.00083 14.0633 5.00083 12C5.00083 9.93667 6.67917 8.25833 8.7425 8.25833H12.5658V15.7417H12.565ZM8.7425 9.48417C7.355 9.48417 6.22667 10.6133 6.22667 12C6.22667 13.3867 7.35583 14.5158 8.7425 14.5158H11.34V9.48417H8.7425ZM8.7625 22C6.68833 22 5 20.3217 5 18.2583C5 16.195 6.67833 14.5167 8.74167 14.5167H12.565V18.2175C12.565 20.3033 10.8592 22 8.7625 22ZM8.7425 15.7417C8.07553 15.7425 7.43613 16.0079 6.96451 16.4795C6.49289 16.9511 6.22755 17.5905 6.22667 18.2575C6.22667 19.645 7.36417 20.7733 8.76333 20.7733C10.1842 20.7733 11.3408 19.6267 11.3408 18.2167V15.7417H8.7425ZM15.1625 15.7417H15.0808C13.0175 15.7417 11.3392 14.0633 11.3392 12C11.3392 9.93667 13.0175 8.25833 15.0808 8.25833H15.1625C17.2258 8.25833 18.9042 9.93667 18.9042 12C18.9042 14.0633 17.2258 15.7417 15.1625 15.7417ZM15.0817 9.48417C13.6942 9.48417 12.5658 10.6133 12.5658 12C12.5658 13.3867 13.695 14.5158 15.0817 14.5158H15.1633C16.5508 14.5158 17.6792 13.3867 17.6792 12C17.6792 10.6133 16.5492 9.48417 15.1625 9.48417H15.0817Z" />
                </svg>
              </Tooltip>{" "}
              <Tooltip content="TailwindCSS" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2198_3297)">
                    <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.16667 10.5 8.5C11.2608 8.69 11.8042 9.24167 12.4067 9.85333C13.3875 10.8483 14.5217 12 17 12C19.6667 12 21.3333 10.6667 22 8C21 9.33333 19.8333 9.83333 18.5 9.5C17.7392 9.31 17.1958 8.75833 16.5933 8.14667C15.6133 7.15167 14.4792 6 12 6ZM7 12C4.33333 12 2.66667 13.3333 2 16C3 14.6667 4.16667 14.1667 5.5 14.5C6.26083 14.69 6.80417 15.2417 7.40667 15.8533C8.3875 16.8483 9.52167 18 12 18C14.6667 18 16.3333 16.6667 17 14C16 15.3333 14.8333 15.8333 13.5 15.5C12.7392 15.31 12.1958 14.7583 11.5933 14.1467C10.6133 13.1517 9.47917 12 7 12Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2198_3297">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Tooltip>
              <Tooltip content="MongoDB" color="invert" placement="bottom">
                <svg
                  className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.8196 9.9625C15.7663 5.3125 13.2763 3.78417 13.0088 3.2C12.7755 2.87167 12.5671 2.405 12.3963 2C12.3663 2.4125 12.3505 2.57083 11.9605 2.98667C11.358 3.45833 8.26214 6.055 8.01047 11.3367C7.77547 16.2633 11.5688 19.1992 12.0838 19.5733L12.1421 19.615C12.2494 20.4081 12.3411 21.2033 12.4171 22H12.818C12.913 21.14 13.0546 20.2867 13.243 19.4417C13.5905 19.195 13.7463 19.0558 13.9513 18.8642C14.9221 17.9661 15.6936 16.8743 16.216 15.6593C16.7384 14.4443 16.9999 13.1332 16.9838 11.8108C16.9921 11.1325 16.898 10.4258 16.8196 9.9625ZM12.373 16.7917C12.373 16.7917 12.373 9.8825 12.6021 9.88333C12.7796 9.88333 13.0105 18.7958 13.0105 18.7958C12.693 18.7583 12.373 17.3292 12.373 16.7917Z" />
                </svg>
              </Tooltip>
            </div>
            <div className="flex lg:flex-row flex-col gap-2 mt-4 ">
              <Button
                shadow
                onPress={() => {
                  route.push("/aboutme");
                }}
                color={"gradient"}
                bordered
              >
                Read About Me
              </Button>

              <Button
                shadow
                target={"_blank"}
                onPress={() => {
                  route.push(
                    "https://drive.google.com/file/d/12R1wc5R_HimifAytYjDLoZ2OLvAqEbMH/view?usp=share_link"
                  );
                }}
                color={"gradient"}
                bordered
              >
                Resume
              </Button>
            </div>
          </div>
          <Image
            className="m-auto lg:m-0 my-8 lg:my-0"
            height={"470"}
            src={Gambar}
            alt={"Gambar Header"}
          />
        </div>
        <div className="grid place-items-center">
          <a href="#project" className="m-auto">
            <div className="text-center animate-bounce">
              <svg
                className="fill-slate-900 dark:fill-slate-50  hover:-translate-y-2 duration-700 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M7 9L17 9C19.2091 9 21 10.7909 21 13V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17L3 13C3 10.7909 4.79086 9 7 9Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L15.5303 12.5303C15.8232 12.2374 15.8232 11.7626 15.5303 11.4697C15.2374 11.1768 14.7626 11.1768 14.4697 11.4697L12.75 13.1893L12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3L11.25 13.1893L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697Z"
                />
              </svg>
            </div>
          </a>
        </div>
        <section id="project" className="min-h-screen pt-10">
          <h1 className="text-center mb-5 font-bold">{`My Porfolio`}</h1>
          <div
            className={clsx(
              "grid grid-cols-1 gap-4",
              "sm:grid-cols-2",
              "lg:grid-cols-3",
              ""
            )}
          >
            {portfolio.slice(0, 6).map((e, i) => {
              return (
                <div
                  key={i}
                  className={clsx(
                    "rounded-lg border border-slate-950  border-dashed  duration-500 bg-slate-100 w-full h-auto text-center",
                    "dark:border-slate-50 dark:bg-slate-900",
                    "hover:scale-105"
                  )}
                >
                  <div className="text-left p-4">
                    <h1 className="font-bold">{`Portfolio ${i + 1}`}</h1>
                    <h1 className="text-sm text-justify mb-2">
                      Ut sunt minim proident voluptate commodo aute enim minim
                      eu consequat.
                    </h1>
                    <div className="border-slate-950 border dark:border-slate-50 border-dashed rounded-lg overflow-clip">
                      <img
                        className="object-cover aspect-video w-full"
                        src={`https://picsum.photos/id/87${i}/900/1000?grayscale&blur=2`}
                        alt="#"
                      />
                    </div>
                    <h1 className="text-xs mt-2 underline underline-offset-4 decoration-dotted hover:cursor-pointer">{`See More >`}</h1>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href={"/portfolio"}>
            <h1 className="text-center mt-5 text-sm underline underline-offset-4 decoration-dotted">{`Show All >`}</h1>
          </Link>
        </section>
      </motion.div>
    </Layout>
  );
}
