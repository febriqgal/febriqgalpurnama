import Link from "next/link";
import { FebprojectIcon } from "../icon/febproject";

export default function FooterC() {
  return (
    <footer>
      <div>
        <div className="flex  mt-10 flex-col-reverse sm:flex-row gap-y-10 items-center justify-between sm:px-[200px] py-10 pb-10 border-t border-[#094E68] rounded-t-xl dark:border-slate-50">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-xs">from</h1>
            <FebprojectIcon
              className={"h-[30px] sm:h-[40px] dark:fill-white fill-[#094E68]"}
            />
          </div>
          <div className="flex justify-center space-x-6">
            {/* ig */}
            <Link
              title="Instagram"
              target={"_blank"}
              href={"https://www.instagram.com/febriqgal_/"}
            >
              <svg
                className=" dark:fill-slate-50 fill-[#0A4D68]  hover:-translate-y-2 duration-700 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
                />
                <circle cx="18" cy="6" r="1" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                />
              </svg>
            </Link>
            {/* Linkedin */}
            <Link
              title="Linkedin"
              target={"_blank"}
              href={"https://www.linkedin.com/in/febriqgal/"}
            >
              <svg
                className=" dark:fill-slate-50 fill-[#0A4D68]  hover:-translate-y-2 duration-700 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="2" />
                <path d="M2 8.5H6V22H2V8.5Z" />
                <g opacity="0.4">
                  <path d="M13 8.5H9V15V22H13V15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15V22H21V15C21 11.6863 18.3137 9 15 9C14.2987 9 13.6256 9.12031 13 9.34141V8.5Z" />
                </g>
              </svg>
            </Link>
            {/* Twitter */}{" "}
            <Link
              title="Twitter"
              target={"_blank"}
              href={"https://twitter.com/febriqgal_"}
            >
              <svg
                className=" dark:fill-slate-50 fill-[#0A4D68]  hover:-translate-y-2 duration-700 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M15.2861 4C13.1822 4 11.4767 5.79086 11.4767 8C11.4767 8.33382 11.5157 8.65809 11.589 8.96808C9.56611 8.96808 6.51914 8.55908 3.97444 6.00961C3.63605 5.67059 3.01208 5.89726 3.03556 6.37568C3.41268 14.0627 6.70477 16.3049 8.4001 16.4444C7.30535 17.5257 5.7151 18.3791 4.11489 18.7622C3.69256 18.8633 3.58824 19.3256 4.0012 19.4599C5.14623 19.8323 6.78516 19.9758 7.66735 20C13.9082 20 18.9806 14.7471 19.0935 8.22229C19.9129 7.68945 20.4377 6.5325 20.7326 5.71291C20.8044 5.5133 20.4773 5.28073 20.2815 5.36226C19.6694 5.61708 18.8923 5.67749 18.2304 5.46181C17.5318 4.56927 16.4722 4 15.2861 4Z"
                />
              </svg>
            </Link>
            {/* Youtube */}
            <Link
              title="Github"
              target={"_blank"}
              href={"https://github.com/febriqgal"}
            >
              <svg
                className=" dark:fill-slate-50 fill-[#0A4D68]  hover:-translate-y-2 duration-700 h-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2256C4.65121 18.3482 4.80277 18.5103 4.9134 18.7C5.1346 19.0992 5.43165 19.4514 5.78801 19.7365C6.14753 20.0242 6.56032 20.2379 7.00272 20.3653C7.43348 20.4893 7.88392 20.5291 8.32949 20.4825C8.33039 20.7224 8.33103 20.9065 8.33103 21C8.33103 21.5523 8.75521 22 9.27847 22H14.7558C15.279 22 15.7032 21.5523 15.7032 21V17.2095C15.729 16.7802 15.685 16.3499 15.5738 15.9373C15.5585 15.8805 15.5419 15.824 15.5241 15.7679C15.5838 15.753 15.6435 15.7373 15.7032 15.7208C16.5277 15.4937 17.3513 15.1224 18.0588 14.4983C19.2791 13.4217 19.9982 11.7379 19.9996 9.27493C20.0147 8.12791 19.6925 7.01089 19.0868 6.07439C19.0475 6.01358 19.007 5.95354 18.9652 5.89429C18.976 5.84399 18.9861 5.79358 18.9955 5.74306C19.1893 4.69934 19.0795 3.61142 18.6713 2.62664Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
