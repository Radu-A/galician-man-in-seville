import GlobalIcon from "../icons/GlobalIcon";
import GitHubIcon from "../icons/GitHubIcon";
import InstaIcon from "../icons/InstaIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LogoSm from "../assets/logo/logo-sm.png";
import LogoMd from "../assets/logo/logo-md.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          <div>
            <img src={LogoSm} alt="logo" />
          </div>

          <div className="hidden lg:grid lg:mt-0 lg:grid-cols-5">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Services</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Helpful Links</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Legal</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Downloads</p>
            </div>
          </div>
          <ul className="col-span-2 flex justify-start gap-6 lg:col-span-6 lg:justify-end">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <FacebookIcon></FacebookIcon>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <InstaIcon></InstaIcon>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>

                <GitHubIcon></GitHubIcon>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Dribbble</span>

                <GlobalIcon></GlobalIcon>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-3 border-t border-gray-100 pt-3">
          <div className="text-sm/4 sm:flex sm:justify-between">
            <p className=" text-gray-500">
              &copy; 2022. Company Name. All rights reserved.
            </p>

            <ul className="mt-3 flex flex-wrap justify-start gap-4 sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
